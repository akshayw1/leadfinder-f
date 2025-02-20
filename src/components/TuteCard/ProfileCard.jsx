"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchStatistics } from "../../redux/reducers/statisticsSlice"
import getUserInfo from "../../utils/getUserInfo"
import { formatTitle, remainingDays } from "../../utils/format"
import { Star, Search, Zap, Calendar } from "lucide-react"

const ProfileCard = () => {
  const statistics = useSelector((state) => state.statistics)
  const dispatch = useDispatch()
  const info = getUserInfo()

  useEffect(() => {
    dispatch(fetchStatistics())
  }, [dispatch])

  if (statistics.length < 0) return null

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto"
    >
      <div className="bg-gray-800 border border-gray-700 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center mb-6"
          >
            <div className="h-16 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold text-white mr-4">
              {info?.data?.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">Hello, {info?.data?.name}</h2>
              <p className="text-gray-400">Boomnify - India</p>
              <p className="text-gray-400"> {info?.data?.email}</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center mb-6"
          >
            {[1, 2, 3, 4, 5].map((_, index) => (
              <Star key={index} className="h-5 w-5 text-yellow-500 fill-yellow-500" />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
          >
            <div className="bg-gray-700/50 rounded-xl p-4 flex items-center">
              <Search className="h-8 w-8 text-blue-400 mr-4" />
              <div>
                <p className="text-gray-400">Remaining Searches</p>
                <p className="text-2xl font-bold text-white">
                  {statistics.data ? statistics.data.searchQueriesPerDay : 0}
                </p>
              </div>
            </div>
            <div className="bg-gray-700/50 rounded-xl p-4 flex items-center">
              <Zap className="h-8 w-8 text-yellow-400 mr-4" />
              <div>
                <p className="text-gray-400">Remaining Leads</p>
                <p className="text-2xl font-bold text-white">
                  {statistics.data ? statistics.data.leadsPerDay : 0}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-gray-700/30 rounded-xl p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <div>
                <p className="text-gray-400">Current Plan</p>
                <p className="text-xl font-semibold text-white">
                  {statistics.data ? formatTitle(statistics.data?.plan?.name) : "No Plan"}
                </p>
              </div>
              <div>
                <p className="text-gray-400">Remaining Days</p>
                <p className="text-xl font-semibold text-white">
                  {statistics.data ? remainingDays(statistics.data.endDate) : "Expired"}
                </p>
              </div>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2.5">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full"
                style={{ width: `${(statistics.data?.remainingDays / 30) * 100}%` }}
              ></div>
            </div>
          </motion.div>
          <a href="/pricing">
          <button className="bg-gradient-to-r mt-4 from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 shadow-md shadow-cyan-500/30 hover:shadow-lg hover:shadow-cyan-500/40 flex items-center"
                      >
        
                        Subscribe
                      </button>
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileCard