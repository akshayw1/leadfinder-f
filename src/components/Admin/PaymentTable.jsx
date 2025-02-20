'use client'

import React, { useEffect, useState } from 'react'
import axios from '../../redux/app/customAxios'

// interface Payment {
//   _id: string
//   user: string
//   plan: string
//   status: string
//   createdAt: string
// }

const PaymentTable = () => {
  const [paymentData, setPaymentData] = useState([])
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/payments')
        setPaymentData(response.data.data)
      } catch (error) {
        setError(error)
      }
    }
    fetchData()
  }, [])


  const getUserID = async (userId) =>{
      const response = await axios.post('/users',{
        userId
      });

      const userName  = response.data.user.name;
      console.log(userName);

      if(userName){
        return userName;
      }else{
        return "NA"
      }
  }

  if (!paymentData.length && !error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-100 border border-red-400 rounded">
        Error loading data: {error.message}
      </div>
    )
  }

  return (
    <div className="flex flex-col p-6 md:p-10 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-900">All Payments</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-900">
            <tr>
              <th scope="col" className="px-6 py-3">User</th>
              <th scope="col" className="px-6 py-3">Email</th>
              <th scope="col" className="px-6 py-3">Plan ID</th>
              <th scope="col" className="px-6 py-3">Status</th>
              <th scope="col" className="px-6 py-3">Date & Time</th>
              <th scope="col" className="px-6 py-3">Payment ID</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item) => (
              <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.name || 'N/A'}
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {item.email || 'N/A'}
                </td>
                <td className="px-6 py-4">{item.plan || 'N/A'}</td>
                <td className="px-6 py-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    item.status === 'completed' ? 'bg-green-100 text-green-800' :
                    item.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.status || 'N/A'}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {item.createdAt ? new Date(item.createdAt).toLocaleString() : 'N/A'}
                </td>
                <td className="px-6 py-4">{item._id || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PaymentTable

