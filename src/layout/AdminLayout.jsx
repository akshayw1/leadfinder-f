import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/Navbar/NavBar'
import AdminSideBar from '../components/Admin/AdminSideBar'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <ToastContainer />
      <NavBar />
      <div className="flex flex-1">
        <AdminSideBar />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AdminLayout

