"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import getUserInfo from "../utils/getUserInfo"
import SearchCard from "./searchCard/searchCard"
import TuteCard from "./TuteCard/TuteCard"
import TableComp from "./TableComp/TableComp"

const Home = () => {
  const [searchResults, setSearchResults] = useState(null)
  const isAuthenticated = useSelector((state) => state.login.isAuthenticated)
  const navigate = useNavigate()
  const info = getUserInfo()

  useEffect(() => {
    if (!info) {
      navigate("/auth/login")
    }
  }, [isAuthenticated, info, navigate])

  const handleSearchResults = (results) => {
    setSearchResults(results)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-900 py-12"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:flex-1"
          >
            <SearchCard onSearchResults={handleSearchResults} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-2/3"
          >
            <TuteCard />
          </motion.div>
        </div>
        
        {searchResults && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="w-full"
          >
            <TableComp tableData={searchResults} Dhidden={false} />
            {console.log(searchResults)}
          </motion.div>
        )}
      </div>
    </motion.div>
  )
}

export default Home