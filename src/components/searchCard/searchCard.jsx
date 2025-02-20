
import { useState } from "react"
import { motion } from "framer-motion"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { searchSchema } from "../../validations/inputValidation"
import { search } from "../../redux/reducers/searchSlice"
import { fetchStatistics } from "../../redux/reducers/statisticsSlice"
import { showErrorMessage, showSuccessMessage } from "../../utils/toast"
import getUserInfo from "../../utils/getUserInfo"
import {X,CreditCard, Zap,Sparkles, TrendingUp, SearchIcon, BriefcaseIcon, MapPinIcon, UsersIcon, XIcon } from "lucide-react"

const SearchCard = ({ onSearchResults }) => {
  const { isLoading } = useSelector((state) => state.search)
  
  
  const [showModal, setShowModal] = useState(false)

  const statistics = useSelector((state) => state.statistics)
  const dispatch = useDispatch()
  const info = getUserInfo()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(searchSchema) })

  const leadsRemaining = statistics.data?.leadsPerDay

  const onSubmit = async (searchData) => {
    try {
      if (leadsRemaining === 0) {
        setShowModal(true);
        return showErrorMessage("You have exhausted your plan. Please purchase a new plan")
      }

      if (searchData.entriescount > leadsRemaining) {
        searchData.entriescount = leadsRemaining
        showSuccessMessage(
          `You have only ${leadsRemaining} remaining. Showing ${leadsRemaining} results for search`
        )
      }

      const response = await dispatch(search(searchData)).unwrap()
      dispatch(fetchStatistics())
      onSearchResults(response.data)
      
    } catch (error) {
      showErrorMessage("An error occurred while searching. Please try again.")
      onSearchResults(null)
    }
  }

  return (
    <div className="w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl opacity-10 blur-xl" />
        <div className="relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl border border-gray-700 shadow-2xl p-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-12 w-12 rounded-full bg-blue-500/10 flex items-center justify-center">
              <SearchIcon className="h-6 w-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold text-white">Search For Leads</h2>
          </motion.div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="relative">
                <BriefcaseIcon className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  {...register("position")}
                  placeholder="Position (e.g. Website Designer)"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <MapPinIcon className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  {...register("city")}
                  placeholder="City (e.g. Delhi)"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="relative">
                <UsersIcon className="absolute left-3 top-3 h-6 w-6 text-gray-400" />
                <input
                  {...register("entriescount")}
                  placeholder="Number of leads (e.g. 10)"
                  className="w-full bg-gray-800/50 border border-gray-700 rounded-xl py-3 px-12 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-4 rounded-xl transition-all transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Searching...</span>
                  </div>
                ) : (
                  "Search Leads"
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </motion.div>
      {showModal && (
        <div className="fixed inset-0 bg-[#0F1117]/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="w-full max-w-lg mx-4">
            {/* Card with matching gradient header */}
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <div className="bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] p-6">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 rounded-lg p-2">
                      <Sparkles className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Upgrade Required</h3>
                  </div>
                  <button 
                    onClick={() => setShowModal(false)}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
              </div>

              {/* Modal content */}
              <div className="bg-[#1C1F2E] p-6 space-y-6">
                <p className="text-gray-300 text-lg">
                  You've reached your search limit. Upgrade your plan to unlock unlimited leads and grow your business.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="bg-[#4F46E5]/10 rounded-lg p-2">
                      <CreditCard className="h-5 w-5 text-[#4F46E5]" />
                    </div>
                    <span>Flexible pricing plans available</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="bg-[#4F46E5]/10 rounded-lg p-2">
                      <Zap className="h-5 w-5 text-[#4F46E5]" />
                    </div>
                    <span>Instant access to premium features</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="bg-[#4F46E5]/10 rounded-lg p-2">
                      <TrendingUp className="h-5 w-5 text-[#4F46E5]" />
                    </div>
                    <span>Advanced lead generation tools</span>
                  </div>
                </div>

                <a 
                  href="/pricing" 
                  className="block w-full bg-gradient-to-r from-[#4F46E5] to-[#7C3AED] hover:from-[#4338CA] hover:to-[#6D28D9] text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 text-center"
                >
                  View Pricing Plans
                </a>

                <button
                  onClick={() => setShowModal(false)}
                  className="block w-full text-gray-400 hover:text-white transition-colors text-sm mt-4"
                >
                  Maybe Later
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

export default SearchCard