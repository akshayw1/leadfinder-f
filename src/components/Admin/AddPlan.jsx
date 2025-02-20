import React, { useState, useEffect } from 'react'
import { FaPlus, FaTrash } from 'react-icons/fa'
import CreatePlanModal from './CreatePlan'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import axios from '../../redux/app/customAxios'

// interface Plan {
//   _id: string
//   name: string
//   price: number
//   leadsPerDay: number
//   searchQueriesPerDay: number
//   description: string
// }

const ManagePlans = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchPlans()
  }, [])

  const fetchPlans = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/plans')
      setPlans(response.data.data)
      setError(null)
    } catch (err) {
      setError('Failed to fetch plans')
      console.error('Error fetching plans:', err)
    } finally {
      setLoading(false)
    }
  }

  const deletePlan = async (planId) => {
    try {
      const response = await axios.delete(`/plans/delete/${planId}`)
      if (response.status === 200) {
        toast.success(`Plan deleted successfully`)
        setPlans((prevPlans) => prevPlans.filter((plan) => plan._id !== planId))
      } else {
        toast.error('Unexpected response code from server')
      }
    } catch (err) {
      toast.error('Error deleting plan')
      console.error('Error deleting plan:', err)
    }
  }

  const handleModalClose = () => {
    setIsModalOpen(false)
    fetchPlans() // Refresh the plans list after closing the modal
  }

  if (loading) {
    return <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-900"></div>
    </div>
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">{error}</div>
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <ToastContainer />
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-blue-900">Manage Plans</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <FaPlus className="mr-2" />
          Add New Plan
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-white uppercase bg-blue-900">
            <tr>
              <th scope="col" className="px-6 py-3">Name</th>
              <th scope="col" className="px-6 py-3">Price</th>
              <th scope="col" className="px-6 py-3">Leads Per Day</th>
              <th scope="col" className="px-6 py-3">Search Queries Per Day</th>
              <th scope="col" className="px-6 py-3">Description</th>
              <th scope="col" className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {plans.map((plan) => (
              <tr key={plan._id} className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{plan.name}</td>
                <td className="px-6 py-4">${plan.price}</td>
                <td className="px-6 py-4">{plan.leadsPerDay}</td>
                <td className="px-6 py-4">{plan.searchQueriesPerDay}</td>
                <td className="px-6 py-4">{plan.description}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => deletePlan(plan._id)}
                    className="text-red-600 hover:text-red-900"
                    title="Delete Plan"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CreatePlanModal isOpen={isModalOpen} onClose={handleModalClose} />
    </div>
  )
}

export default ManagePlans

