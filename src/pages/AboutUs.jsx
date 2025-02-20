"use client"

import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer/Footer'
import { Zap, Shield } from 'lucide-react'

const AboutUs = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="grid gap-12 row-gap-8 lg:grid-cols-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <div className="max-w-xl mb-6">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                About us
                <br className="hidden md:block" />
                <span className="inline-block text-cyan-400 mt-2">Boomnify</span>
              </h2>
              <p className="text-base text-gray-300 md:text-lg">
                Welcome to Boomnify – Your Premier Subscription-Based Platform for Lead Generation!

                At Boomnify, we understand the pulse of your business growth lies in the quality of leads you acquire. With a relentless commitment to delivering exceptional value, we have curated a cutting-edge subscription-based platform designed exclusively for lead generation, empowering businesses to soar to new heights.
              </p>
            </div>
            <div className="grid gap-8 row-gap-8 sm:grid-cols-2">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-cyan-600">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                  Tailored Subscriptions
                </h6>
                <p className="text-sm text-gray-400">
                  We understand that every business is unique. That's why we offer a range of subscription plans, allowing you to choose the one that aligns perfectly with your goals and budget.
                </p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-cyan-600">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">
                  Quality Assurance
                </h6>
                <p className="text-sm text-gray-400">
                  We prioritize the quality of leads over quantity. Our rigorous validation processes ensure that every lead you receive is not only relevant to your business but also more likely to convert, saving you time and resources.
                </p>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              className="object-cover w-full h-56 rounded-lg shadow-lg sm:h-96" 
              src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" 
              alt="Team working together" 
            />
          </motion.div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  )
}

export default AboutUs