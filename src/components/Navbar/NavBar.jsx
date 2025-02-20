"use client"

import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import getUserInfo from '../../utils/getUserInfo'
import { NavLinks } from '../../utils/NavLinks'
import { Menu, X, User, LogOut, LogIn, UserPlus } from 'lucide-react'
// import {logo} from 

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const info = getUserInfo()

  const handleSignout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('persist:root')
  }

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: 0 }
  }

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 sticky top-0 z-50 border-b border-cyan-500/30 shadow-lg shadow-cyan-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* <Link to="/" className="flex-shrink-0">
              // <motion.div
              //   whileHover={{ scale: 1.1 }}
              //   className="h-10 w-10 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-md shadow-cyan-500/30"
              // >
                
              // </motion.div>
            </Link> */}
<div className="flex items-center">
            <Link to="/">
            <img src="/logoo.png" alt="Logo" className="w-18 h-[100px] mr-2" />
            </Link>
            
</div>     
        
               <div className="hidden md:block ml-10">
              <div className="flex items-baseline space-x-4">
                {NavLinks.map((link) => (
                  <motion.div key={link.label} whileHover={{ scale: 1.05 }}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-600/20 hover:shadow-md hover:shadow-cyan-500/20"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                {info && info.data && (
                  <motion.div whileHover={{ scale: 1.05 }}>
                    <Link
                      to="/dashboard"
                      className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-cyan-600/20 hover:shadow-md hover:shadow-cyan-500/20"
                    >
                      Dashboard
                    </Link>
                  </motion.div>
                )}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center align-center md:ml-6">
              {info && info.data ? (
                <>
                <div className='m-4 flex items-center	somee'>
                  <motion.div whileHover={{ scale: 1.4 }}>
                    <Link to="/profile" className="mr-4">
                      <div className='bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full w-10 h-10 flex justify-center items-center overflow-hidden shadow-md shadow-cyan-500/30'>
                        <User className="w-6 h-6 text-white" />
                      </div>
                    </Link>
                  </motion.div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link to="/auth/login">
                      <button
                        onClick={handleSignout}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign out
                      </button>
                    </Link>
                  </motion.div>
                </>
              ) : (
                <>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/auth/login"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium mr-2 transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                    >
                      <LogIn className="w-4 h-4 mr-2" />
                      Sign in
                    </Link>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/auth/signup"
                      className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                    >
                      <UserPlus className="w-4 h-4 mr-2" />
                      Sign up
                    </Link>
                  </motion.div>
                </>
              )}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-gradient-to-r from-cyan-500 to-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:from-cyan-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white transition-all duration-300 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ duration: 0.3 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg shadow-cyan-500/20">
              {NavLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-gray-300 hover:bg-cyan-600/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  {link.label}
                </Link>
              ))}
              {info && info.data && (
                <Link
                  to="/dashboard"
                  className="text-gray-300 hover:bg-cyan-600/20 hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  Dashboard
                </Link>
              )}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700 bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg shadow-cyan-500/20">
              {info && info.data ? (
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <div className='bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full w-10 h-10 flex justify-center items-center overflow-hidden shadow-md shadow-cyan-500/30'>
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">{info.data.name}</div>
                    <div className="text-sm font-medium leading-none text-gray-400">{info.data.email}</div>
                  </div>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="ml-auto">
                    <Link to="/auth/login">
                      <button
                        onClick={handleSignout}
                        className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-3 py-1 rounded-md text-sm font-medium transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Sign out
                      </button>
                    </Link>
                  </motion.div>
                </div>
              ) : (
                <div className="mt-3 px-2 space-y-1">
                  <Link
                    to="/auth/login"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-cyan-600/20 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 flex items-center"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    Sign in
                  </Link>
                  <Link
                    to="/auth/signup"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-cyan-600/20 transition-all duration-300 hover:shadow-md hover:shadow-cyan-500/20 flex items-center"
                  >
                    <UserPlus className="w-4 h-4 mr-2" />
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}