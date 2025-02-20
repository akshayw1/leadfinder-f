"use client"

import { motion } from "framer-motion"
import { Link, useLocation } from "react-router-dom"
import { User, Settings, Lock } from "lucide-react"

const Sidebar = () => {
  const location = useLocation()

  const menuItems = [
    { path: "/profile", icon: User, label: "Profile" },
  // { path: "/profile/settings", icon: Settings, label: "Settings" },
    { path: "/profile/update-password", icon: Lock, label: "Update Password" },
  ]

  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gray-800 text-white w-64 min-h-screen p-6"
    >
      <h1 className="text-2xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
        Welcome
      </h1>
      <nav>
        <ul className="space-y-4">
          {menuItems.map((item, index) => (
            <motion.li
              key={item.path}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-3 rounded-lg transition-all duration-300 ${
                  location.pathname === item.path
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "text-gray-400 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </motion.aside>
  )
}

export default Sidebar