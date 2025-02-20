"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer/Footer'
import { Briefcase } from 'lucide-react'

const ServicesPage = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg"
          >
            <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-cyan-600">
              <Briefcase className="text-white w-8 h-8" />
            </div>
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Services
                <br className="hidden md:block" />
                <span className="inline-block text-cyan-400">at Boomnify</span>
              </h2>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-base text-gray-300 md:text-lg"
              >
                <span className='text-2xl text-cyan-400 font-semibold'>Web and App Development</span><br/>
                First impressions are everything. Let us help you make it a lasting one! Using the latest web design techniques, our team knows what elements need to be included to help increase traffic and promote growth in your business. It is important that your site is visually appealing, as well as easy to navigate through. We understand what it takes to make a lasting impression.
              </motion.p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex items-center justify-center -mx-4 lg:pl-8"
          >
            <div className="flex flex-col items-end px-3">
              <motion.img
                whileHover={{ scale: 1.05 }}
                className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                alt="Team working"
              />
              <motion.img 
                whileHover={{ scale: 1.05 }}
                className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40" 
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" 
                alt="Coding" 
              />
            </div>
            <div className="px-3">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80" 
                src="https://images.pexels.com/photos/3182739/pexels-photo-3182739.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500" 
                alt="Design process" 
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  )
}

export default ServicesPage