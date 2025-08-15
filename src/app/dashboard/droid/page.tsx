'use client'

import { useEffect, useState } from 'react'
import { DM_Sans } from 'next/font/google'
import { FaDownload, FaSearch, FaSpinner, FaTrash, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa'
import toast, { Toaster } from 'react-hot-toast'
import { createClient } from '@sanity/client'

const dmsans = DM_Sans({ subsets: ['latin'], weight: '700' })

interface JobApplication {
  _id: string
  _createdAt: string
  name: string
  email: string
  phone: string
  company: string
  city: string
  jobTitle: string
  comments: string
  resumeUrl: string
}

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2023-05-03',
  token: process.env.SANITY_API_TOKEN!,
  useCdn: false,
})

export default function ApplicationsPage() {
  const [authenticated, setAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false) // New state for password visibility
  const [passwordError, setPasswordError] = useState('')
  const [applications, setApplications] = useState<JobApplication[]>([])
  const [loading, setLoading] = useState(true)
  const [authLoading, setAuthLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [showConfirm, setShowConfirm] = useState(false)
  const [deleteId, setDeleteId] = useState<string | null>(null)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setAuthLoading(true)
    setPasswordError('')

    try {
      const response = await fetch('/api/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setAuthenticated(true)
      } else {
        setPasswordError(data.message || 'Incorrect password')
      }
    } catch (err) {
      console.error('Login error:', err)
      setPasswordError('Failed to verify password. Please try again.')
    } finally {
      setAuthLoading(false)
    }
  }

  useEffect(() => {
    if (!authenticated) return

    const fetchApplications = async () => {
      try {
        setLoading(true)
        const query = `*[_type == "jobApplication"] {
          _id,
          _createdAt,
          name,
          email,
          phone,
          company,
          city,
          jobTitle,
          comments,
          "resumeUrl": resume.asset->url
        } | order(_createdAt desc)`
        const data = await client.fetch(query)
        setApplications(data)
      } catch (err) {
        console.error('Error fetching applications:', err)
        setError('Failed to load applications. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    fetchApplications()
  }, [authenticated])

  if (!authenticated) {
    return (
      <div className={`min-h-screen bg-gray-50 flex items-center justify-center ${dmsans.className}`}>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <div className="text-center mb-6">
            <FaLock className="mx-auto text-4xl text-gray-600 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800">Admin Login</h1>
            <p className="text-gray-600 mt-2">Enter password to access job applications</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#8B5E3C] pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>
              {passwordError && (
                <p className="mt-1 text-sm text-red-600">{passwordError}</p>
              )}
            </div>
            
            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-[#8B5E3C] text-white py-2 px-4 rounded-md hover:bg-[#6F4A2F] transition duration-300 flex items-center justify-center"
            >
              {authLoading ? (
                <>
                  <FaSpinner className="animate-spin mr-2" />
                  Verifying...
                </>
              ) : (
                'Unlock Access'
              )}
            </button>
          </form>
        </div>
      </div>
    )
  }

  const confirmDelete = (id: string) => {
    setDeleteId(id)
    setShowConfirm(true)
  }

  const handleDelete = async () => {
    if (!deleteId) return

    try {
      const res = await fetch('/api/deleteApplication', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: deleteId }),
      })

      if (res.ok) {
        toast.success('Application deleted successfully')
        setApplications((prev) => prev.filter((app) => app._id !== deleteId))
      } else {
        const data = await res.json()
        throw new Error(data.error || 'Delete failed')
      }
    } catch (error: unknown) {
  console.error(error)
  toast.error(
    error instanceof Error 
      ? error.message 
      : 'Something went wrong'
  )
} finally {
  setShowConfirm(false)
  setDeleteId(null)
}
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  const filteredApplications = applications.filter(app =>
    app.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
    app.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={`min-h-screen bg-gray-50 relative ${dmsans.className} tracking-wide`}>
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-10">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Job Applications</h1>
          <button 
            onClick={() => setAuthenticated(false)}
            className="text-sm text-red-600 hover:text-red-800 flex items-center"
          >
            <FaLock className="mr-1" /> Logout
          </button>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">
            {error}
          </div>
        )}

        <div className="mb-6 relative">
          <div className="relative">
            <input
              type="text"
              placeholder="Search by name, job title or email..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pl-10 text-sm border border-gray-300 rounded-lg tracking-wide"
            />
            <FaSearch className="absolute left-3 top-3.5 text-gray-400" />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <FaSpinner className="animate-spin text-2xl text-[#8B5E3C]" />
          </div>
        ) : filteredApplications.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-gray-500">No applications found</p>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Job Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Applied On</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resume</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredApplications.map((app) => (
                    <tr key={app._id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{app.name}</div>
                        <div className="text-sm text-gray-500">{app.company}, {app.city}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.jobTitle}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.email}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{app.phone}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{formatDate(app._createdAt)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a
                          href={app.resumeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8B5E3C] hover:text-[#6F4A2F] flex items-center"
                        >
                          <FaDownload className="mr-1" /> Download
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <button
                          onClick={() => confirmDelete(app._id)}
                          className="text-red-600 hover:text-red-800 flex items-center"
                          title="Delete application"
                        >
                          <FaTrash className="mr-1" />
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      <Toaster position="top-center" reverseOrder={false} />

      {showConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
            <h2 className="text-lg font-bold mb-4 text-gray-800">Confirm Deletion</h2>
            <p className="text-sm text-gray-600 mb-6">
              Are you sure you want to delete this application? This action cannot be undone.
            </p>
            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300"
              >
                Cancel
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}