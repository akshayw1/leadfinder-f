"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Search, MapPin, CheckCircle, Zap } from 'lucide-react'

const FeaturePage = () => {
  const features = [
    { icon: Search, title: "Search For Leads", description: "Enter the key word like- Dentists, Digital Marketing, Golf Courses based on your business target" },
    { icon: MapPin, title: "See City Location and Enter", description: "Enter the City- Delhi, Mumbai, and any other location" },
    { icon: CheckCircle, title: "Results and Delivery", description: "No. of leads- number of leads you need. That's it, enjoy the leads and grow. You should search for at most 100 leads only before" },
    { icon: Zap, title: "Enjoy Leads", description: "Take the leads and grow your business" }
  ]

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-cyan-400 uppercase rounded-full bg-cyan-900">
              Boomnify
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
            What you need to do to get a good number of leads from Boomnify
          </h2>
          <p className="text-base text-gray-300 md:text-lg">
            You can search any type of lead with any location and no barriers in it. Boomnify provides ample leads in just a few minutes.
          </p>
        </motion.div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="duration-300 transform bg-gray-800 border-l-4 border-cyan-400 hover:-translate-y-2"
            >
              <div className="h-full p-5 border border-l-0 rounded-r shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-cyan-900">
                  <feature.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <h6 className="mb-2 font-semibold leading-5 text-white">{feature.title}</h6>
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center"
        >
          <a
            href="/howtosearch"
            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-cyan-600 hover:bg-cyan-700 focus:shadow-outline focus:outline-none"
          >
            Learn more
          </a>
        </motion.div>
      </div>
    </div>
  )
}

export default FeaturePage