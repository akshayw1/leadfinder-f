// import { redirect } from 'next/navigation'
// import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

// This is a mock function. Replace with your actual admin check logic.
const isAdmin = () => {
  // Implement your admin check here
  return true // For demonstration purposes
}

export default function AdminPage() {
//   if (!isAdmin()) {
//     redirect('/dashboard')
//   }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 text-white">
      <div className="container mx-auto px-4 py-8">
        <a 
          href="/dashboard" 
          className="inline-flex items-center text-white hover:text-blue-200 transition-colors mb-6"
        >
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Dashboard
        </a>
        
        <h1 className="text-4xl font-bold mb-8">Admin Dashboard</h1>
        
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Welcome, Admin!</h2>
          <p className="mb-4">This is a protected admin page. Only authorized personnel can access this area.</p>
          
        </div>
      </div>
    </div>
  )
}

