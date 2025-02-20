import React, { useState } from 'react'
import axios from '../../redux/app/customAxios'
import { toast } from 'react-toastify'
import { FaTimes } from 'react-icons/fa'

// interface CreatePlanModalProps {
//   isOpen: boolean
//   onClose: () => void
// }

const CreatePlanModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    searchQueriesPerDay: '',
    leadsPerDay: '',
    description: '',
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData({
      ...formData,
      [id]: id === 'price' || id === 'leadsPerDay' || id === 'searchQueriesPerDay' ? Number(value) : value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/plans', formData)
      console.log('Plan created successfully:', response.data)
      toast.success('Plan Created Successfully')
      setFormData({
        name: '',
        price: '',
        searchQueriesPerDay: '',
        leadsPerDay: '',
        description: '',
      })
      onClose()
    } catch (error) {
      console.error('Error creating plan:', error)
      toast.error('Error creating plan. Please try again.')
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-md">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-blue-900">Add New Plan</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <FaTimes size={24} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Plan Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g., Basic Plan"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
              Price
            </label>
            <input
              id="price"
              type="number"
              required
              value={formData.price}
              onChange={handleInputChange}
              min={0}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="searchQueriesPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Search Queries Per Day
            </label>
            <input
              id="searchQueriesPerDay"
              type="number"
              required
              value={formData.searchQueriesPerDay}
              onChange={handleInputChange}
              min={0}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="leadsPerDay" className="block text-sm font-medium text-gray-700 mb-1">
              Leads Per Day
            </label>
            <input
              id="leadsPerDay"
              type="number"
              required
              value={formData.leadsPerDay}
              onChange={handleInputChange}
              min={0}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              required
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Brief description of the plan"
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Create Plan
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreatePlanModal

