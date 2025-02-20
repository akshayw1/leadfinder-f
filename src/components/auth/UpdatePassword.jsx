"use client"

import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { showErrorMessage, showSuccessMessage } from "../../utils/toast"
import { updatePasswordSchema } from "../../validations/inputValidation"
import { updatePassword } from "../../redux/reducers/updatePasswordSlice"
import { Lock, Eye, EyeOff } from "lucide-react"
import { useState } from "react"

const ChangePassword = () => {
  const navigate = useNavigate()
  const { isLoading } = useSelector((state) => state.updatePassword)
  const dispatch = useDispatch()
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
    confirm: false,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(updatePasswordSchema) })

  const onSubmit = async (userData) => {
    try {
      const response = await dispatch(updatePassword(userData)).unwrap()
      navigate("/profile")
      showSuccessMessage(response.message)
      reset()
    } catch (error) {
      showErrorMessage(error.data.message)
      console.log(error)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto"
    >
      <div className="bg-gray-800 border border-gray-700 rounded-3xl shadow-xl overflow-hidden">
        <div className="p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Update Password</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {["currentPassword", "newPassword", "confirmPassword"].map((field, index) => (
              <motion.div
                key={field}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <label htmlFor={field} className="block text-sm font-medium text-gray-400 mb-2">
                  {field === "currentPassword"
                    ? "Current Password"
                    : field === "newPassword"
                    ? "New Password"
                    : "Confirm Password"}
                </label>
                <div className="relative">
                  <input
                    type={showPassword[field.split("Password")[0]] ? "text" : "password"}
                    {...register(field)}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-purple-500"
                    placeholder={`Enter your ${
                      field === "currentPassword" ? "current" : field === "newPassword" ? "new" : "confirmed"
                    } password`}
                  />
                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword((prev) => ({
                        ...prev,
                        [field.split("Password")[0]]: !prev[field.split("Password")[0]],
                      }))
                    }
                    className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
                  >
                    {showPassword[field.split("Password")[0]] ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
                {errors[field] && (
                  <p className="mt-2 text-sm text-red-500">{errors[field].message}</p>
                )}
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 px-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-lg shadow-lg hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition-all duration-300"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <svg className="animate-spin h-5 w-5 mr-3 text-white" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Updating...
                  </div>
                ) : (
                  "Change Password"
                )}
              </button>
            </motion.div>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ChangePassword