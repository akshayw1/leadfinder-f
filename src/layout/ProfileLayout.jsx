"use client"

import { motion } from "framer-motion"
import { Outlet } from "react-router"
import NavBar from "../components/Navbar/NavBar"
import Sidebar from "../components/Profile/Sidebar"

const ProfileLayout = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <NavBar />
      <div className="flex">
        <Sidebar />
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-8"
        >
          <Outlet />
        </motion.main>
      </div>
    </div>
  )
}

export default ProfileLayout