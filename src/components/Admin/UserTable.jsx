"use client"

import React, { useEffect, useState } from 'react';
import axios from '../../redux/app/customAxios';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const UserTable = () => {
  const [userData, setUserData] = useState([]);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/users/allusers');
        setUserData(response.data.data);
        console.log(response.data.data);
        
      } catch (error) {
        setError(error);
      }
    };

    fetchData();
  }, []);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const handleSave = async () => {
    try {
      await axios.put("/users/update", {
        userId: selectedUser._id,
        updateData: {
          name: selectedUser.name,
          leadsPerDay: selectedUser.leadsPerDay,
          searchQueriesPerDay: selectedUser.searchQueriesPerDay,
          subscriptionEnd:"3000-11-14T13:31:06.028+00:00",
          isEmailVerified:selectedUser.isEmailVerified,
          freeUser:selectedUser.freeUser
          
        },
      });
  
      setUserData((prevData) =>
        prevData.map((u) => (u._id === selectedUser._id ? selectedUser : u))
      );
      setShowModal(false);
    } catch (error) {
      console.error("Error updating user", error);
    }
  };
  

  if (!userData.length && !error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4">Error loading data: {error.message}</div>
    );
  }

  return (
    <div className="flex flex-col p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">All Users</h1>

      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-900">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Registered At</th>
              <th scope="col" className="px-6 py-3">Leads Per Day</th>
              <th scope="col" className="px-6 py-3">Search Per Day</th>
              <th scope="col" className="px-6 py-3">Subscription Ends</th>
              <th scope="col" className="px-6 py-3">Is Verified</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData.map((user) => (
              <tr key={user._id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="px-6 py-4">{user.leadsPerDay}</td>
                <td className="px-6 py-4">{user.searchQueriesPerDay || 0}</td>
                <td className="px-6 py-4">{user.subscriptionEnd ? new Date(user.subscriptionEnd).toLocaleDateString() : 'N/A'}</td>
                <td className="px-6 py-4">{user.isEmailVerified ? "true" : "false"}</td>
                <td className="px-6 py-4">{user.email || 'N/A'}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">Edit User</h2>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border rounded-lg"
                value={selectedUser.name}
                onChange={(e) => setSelectedUser({ ...selectedUser, name: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Leads Per Day</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg"
                value={selectedUser.leadsPerDay}
                onChange={(e) => setSelectedUser({ ...selectedUser, leadsPerDay: e.target.value })}
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Search Queries Per Day</label>
              <input
                type="number"
                className="w-full px-3 py-2 border rounded-lg"
                value={selectedUser.searchQueriesPerDay}
                onChange={(e) => setSelectedUser({ ...selectedUser, searchQueriesPerDay: e.target.value })}
              />
            </div>
  
            <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email Verified</label>
        <input
          type="checkbox"
          className="w-6 h-6"
          checked={selectedUser.isEmailVerified}
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              isEmailVerified: e.target.checked,
            })
          }
        />
         <label className="block text-sm font-medium text-gray-700">Free User</label>
        <input
          type="checkbox"
          className="w-6 h-6"
          checked={selectedUser.freeUser}
          onChange={(e) =>
            setSelectedUser({
              ...selectedUser,
              freeUser: e.target.checked,
            })
          }
        />
      </div>

            <div className="flex justify-end space-x-4">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                className="px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
