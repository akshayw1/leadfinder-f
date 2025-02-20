import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FaUsers, FaMoneyBillWave, FaTasks, FaChevronRight } from 'react-icons/fa'

const AdminSideBar = () => {
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const menuItems = [
    { path: '/admin/all-users', icon: FaUsers, label: 'All Users' },
    { path: '/admin/payments', icon: FaMoneyBillWave, label: 'All Payments' },
    { path: '/admin/seeplans', icon: FaTasks, label: 'Manage Plans' },
  ]

  return (
    <div className="bg-white text-blue-900 w-64 min-h-screen flex flex-col shadow-lg">
      <div className="p-6 bg-blue-900 text-white">
        <h2 className="text-2xl font-bold">Admin Panel</h2>
      </div>
      <nav className="flex-1 pt-6">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`flex items-center px-6 py-3 text-sm font-medium rounded-r-full transition-colors duration-200 ${
                  isActive(item.path)
                    ? 'bg-blue-100 text-blue-900'
                    : 'text-gray-600 hover:bg-blue-50 hover:text-blue-900'
                }`}
              >
                <item.icon className={`mr-3 text-lg ${isActive(item.path) ? 'text-blue-900' : 'text-gray-400'}`} />
                <span>{item.label}</span>
                {isActive(item.path) && <FaChevronRight className="ml-auto" />}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-200">
        <p className="text-sm text-gray-600">© 2023 Admin Dashboard</p>
      </div>
    </div>
  )
}

export default AdminSideBar

