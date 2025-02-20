'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Footer from '../components/Footer/Footer'
import { Search, ArrowRight } from 'lucide-react'
import styles from "../pages/style"
import howToSearchData from '../how-to-search.json'
import { Testimonials } from '../components'

const HowtoSearch = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen text-white">
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 hottosearch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-lg shadow-xl sm:p-16 bg-gray-800"
        >
          <div className="flex flex-col lg:flex-row">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 lg:mb-0 lg:w-1/2 lg:pr-5"
            >
              <h2 className="font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                How to Search?
                <br className="hidden md:block" />
                <span className="inline-block text-cyan-400 mt-2">
                  Keyword Search ideas with location
                </span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="lg:w-1/2"
            >
              <p className="mb-4 text-base text-gray-300">
                Think of a keyword or business for the leads for your business and the target location in your mind and go ahead with the following steps as suggested in Boomnify (Features). Here are some of the keywords and locations which may help you to get the leads for the business.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/about"
                className="inline-flex items-center font-semibold transition-colors duration-200 text-cyan-400 hover:text-cyan-300"
              >
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            </motion.div>
          </div>
        </motion.div>

        <Testimonials/>
        <motion.h2
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className={`${styles.heading2} text-center md:text-left`}
      >
        Keyword Search ideas with location

      </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="overflow-x-auto"
        >
          <table className="w-full text-sm text-left text-gray-300">
            <thead className="text-xs uppercase bg-gray-700 text-gray-300">
              <tr>
                <th scope="col" className="px-6 py-3">Keywords</th>
                <th scope="col" className="px-6 py-3">Location</th>
              </tr>
            </thead>
            <tbody>
              {howToSearchData.map((item, index) => (
                <tr key={index} className="bg-gray-800 border-b border-gray-700">
                  <td className="px-6 py-4 font-medium whitespace-nowrap">{item.Keywords}</td>
                  <td className="px-6 py-4">{item.Location}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </div>
      <Footer />
    </div>
  )
}

export default HowtoSearch