"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchStatistics } from "../../redux/reducers/statisticsSlice"
import getUserInfo from "../../utils/getUserInfo"
import { formatTitle, remainingDays } from "../../utils/format"
import { StarIcon, UserPlusIcon, FlameIcon } from "lucide-react"
import axios from "axios"

const TuteCard = () => {
  const statistics = useSelector((state) => state.statistics)
  const dispatch = useDispatch()
  const info = getUserInfo()
  const [isOpen, setIsOpen] = useState(false)
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [toastMessage, setToastMessage] = useState("")
  const [isToastVisible, setIsToastVisible] = useState(false)

  useEffect(() => {
    dispatch(fetchStatistics())
  }, [dispatch])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      // alert("Dsada")
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/report`, { subject, message })
      if (response.status === 200) {
        setToastMessage("Bug report submitted. Thank you for your feedback!")
        setIsToastVisible(true)
        setIsOpen(false)
        setSubject("")
        setMessage("")
        setTimeout(() => setIsToastVisible(false), 3000)
      } else {
        throw new Error('Failed to submit bug report')
      }
    } catch (error) {
      setToastMessage("Failed to submit bug report. Please try again.")
      setIsToastVisible(true)
      setTimeout(() => setIsToastVisible(false), 3000)
    }
  }

  if (statistics.length < 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl w-full mx-auto z-10 px-4"
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-10 blur-xl" />
        <motion.div
          initial={{ scale: 0.95 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative bg-gradient-to-r from-gray-900 to-gray-800 border border-gray-700 shadow-2xl rounded-3xl p-8"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center gap-4 mb-6"
              >
                <div className="h-16 w-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                  <span className="text-2xl">👋</span>
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Hello, {info?.data?.name}</h2>
                  <p className="text-gray-400">Welcome to LeadFinder</p>
                  <p className="text-gray-400">{info?.data?.email}</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
              >
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <UserPlusIcon className="h-5 w-5 text-blue-400" />
                    <span className="text-lg text-gray-200">Remaining Searches</span>
                  </div>
                  <p className="text-3xl font-bold text-white">
                    {statistics.data ? statistics.data.searchQueriesPerDay : 0}
                  </p>
                </div>

                <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                  <div className="flex items-center gap-3 mb-2">
                    <FlameIcon className="h-5 w-5 text-purple-400" />
                    <span className="text-lg text-gray-200">Remaining Leads</span>
                  </div>
                  <p className="text-3xl font-bold text-white">
                    {statistics.data ? statistics.data.leadsPerDay : 0}
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="space-y-4"
              >
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <span className="text-gray-200">Current Plan</span>
                  <span className="text-white font-semibold">
                    {statistics.data ? formatTitle(statistics?.data?.plan?.name) : "No Plan"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                  <span className="text-gray-200">Days Remaining</span>
                  <span className="text-white font-semibold">
                    {statistics.data ? remainingDays(statistics.data.endDate) : "Expired"}
                  </span>
                </div>
              </motion.div>
            </div>

            <div className="flex-none md:w-64">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                className="bg-gradient-to-b from-blue-500 to-purple-600 p-6 rounded-2xl text-white"
              >
                <div className="flex items-center gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((_, index) => (
                    <StarIcon key={index} className="h-5 w-5 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <h3 className="text-lg font-semibold mb-2">Premium Features</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-300" />
                    Advanced Search
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-300" />
                    Export Data
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-blue-300" />
                    Priority Support
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex justify-end mt-4"
      >
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium"
        >
          Report a Bug
        </button>
      </motion.div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4">Report a Bug</h2>
            <p className="text-gray-600 mb-4">
              Describe the issue you're experiencing. We'll look into it as soon as possible.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                  rows={4}
                  required
                ></textarea>
              </div>
              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-purple-600 hover:bg-purple-700 transition-colors rounded-lg text-white font-medium"
                >
                  Submit Report
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {isToastVisible && (
        <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg">
          {toastMessage}
        </div>
      )}
    </motion.div>
  )
}

export default TuteCard