"use client"

import { motion } from "framer-motion"
import { useEffect } from "react"
import * as XLSX from "xlsx"
import { saveAs } from "file-saver"
import {
  Mail,
  Instagram,
  Twitter,
  Globe,
  Linkedin,
  Phone,
  Download,
  Star,
  StarHalf
} from "lucide-react"

const TableComp = ({ tableData, Dhidden, Blurred }) => {
  if (!tableData) {
    return (
      <div className="flex items-center justify-center h-32 text-gray-400">
        Loading...sassa
      </div>
    )
  }

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1")
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" })
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8",
    })
    saveAs(blob, "leads-data.xlsx")
  }

  const tableHeaders = [
    "Name",
    "Contact Number",
    "Ratings",
    "Instagram",
    "Twitter",
    "Email",
    "Website",
    "LinkedIn",
    !Blurred && "Call",
  ].filter(Boolean)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {!Dhidden && (
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={exportToExcel}
          className="mb-4 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all"
        >
          <Download className="h-4 w-4" />
          Download Leads
        </motion.button>
      )}

      <div className="relative rounded-xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-xl" />
        <div
          className="relative overflow-x-auto disable-selection"
          style={{
            userSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        >
          <table className="w-full text-sm text-left">
            <thead className="text-xs uppercase bg-gray-800/50">
              <tr>
                {tableHeaders.map((header, index) => (
                  <th
                    key={index}
                    className="px-6 py-4 font-medium text-gray-300 whitespace-nowrap"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700/50">
              {tableData.map((item, index) => (
                <motion.tr
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  key={item.Phone}
                  className="bg-gray-800/30 hover:bg-gray-800/50 transition-colors"
                >
                  <td className="px-6 py-4 font-medium text-white">
                    {item.Name}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      Blurred ? "blur-sm select-none" : "text-white"
                    }`}
                  >
                    {item.Phone}
                  </td>
                  <td
                    className={`px-6 py-4 ${
                      Blurred ? "blur-sm select-none" : ""
                    }`}
                  >
                    <div className="flex items-center gap-1">
                      {Array.from({ length: Math.floor(item.rating) }).map(
                        (_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-yellow-500 text-yellow-500"
                          />
                        )
                      )}
                      {item.rating % 1 !== 0 && (
                        <StarHalf className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Instagram className="h-5 w-5 text-pink-500 hover:text-pink-400 cursor-pointer transition-colors" />
                  </td>
                  <td className="px-6 py-4">
                    <Twitter className="h-5 w-5 text-blue-400 hover:text-blue-300 cursor-pointer transition-colors" />
                  </td>
                  <td className="px-6 py-4">
                    <Mail className="h-5 w-5 text-gray-400 hover:text-gray-300 cursor-pointer transition-colors" />
                  </td>
                  <td className={`px-6 py-4 ${Blurred ? "blur-sm select-none" : ""}`}>
  <a href={item.Website} target="_blank" rel="noopener noreferrer" class="text-white">
  {item.Website} 
  </a>
</td>
                  <td
                    className={`px-6 py-4 ${
                      Blurred ? "blur-sm select-none" : ""
                    }`}
                  >
                    <Linkedin className="h-5 w-5 text-blue-500 hover:text-blue-400 cursor-pointer transition-colors" />
                  </td>
                  {!Blurred && (
                    <td className="px-6 py-4">
                      <motion.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`tel:${item.Phone}`}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white rounded-lg transition-all"
                      >
                        <Phone className="h-4 w-4" />
                        Call
                      </motion.a>
                    </td>
                  )}
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  )
}

export default TableComp