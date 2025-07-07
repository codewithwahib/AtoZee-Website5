'use client'

import { useState, useRef } from 'react'
import { PortableText } from '@portabletext/react'
import { PortableTextBlock } from '@portabletext/types'

type Job = {
  _id: string
  title: string
  location: string
  type: string
  description: PortableTextBlock[]
  requirements: PortableTextBlock[]
  postedDate: string
}

export default function CareerClient({ jobs }: { jobs: Job[] }) {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showNotification, setShowNotification] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const formRef = useRef<HTMLFormElement | null>(null)

  const handleIframeLoad = () => {
    setSubmitting(false)
    setSelectedJob(null)
    setShowNotification(true)
    formRef.current?.reset()

    setTimeout(() => {
      setShowNotification(false)
    }, 4000)
  }

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      <h1 className="text-4xl font-serif font-bold text-center text-[#6B4F3B]">Careers at Our Company</h1>
      <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
        We&apos;re always on the lookout for talented people. Explore our current openings below and join our growing team!
      </p>

      {jobs.length === 0 ? (
        <p className="text-center text-gray-500">No current openings available. Please check back later.</p>
      ) : (
        <div className="grid gap-10">
          {jobs.map((job) => (
            <div
              key={job._id}
              className="border border-gray-200 bg-[#fdfbf8] rounded-lg shadow-md p-6 space-y-4 hover:shadow-lg transition duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <h2 className="text-2xl font-serif font-semibold text-[#6B4F3B]">{job.title}</h2>
                <span className="text-sm text-gray-500">{new Date(job.postedDate).toLocaleDateString()}</span>
              </div>
              <p className="text-gray-700 font-medium">
                📍 {job.location} &nbsp; | &nbsp; 💼 {job.type}
              </p>
              <div className="prose prose-sm max-w-none text-gray-800">
                <h3 className="text-lg text-[#6B4F3B] font-semibold">Job Description</h3>
                <PortableText value={job.description} />
                <h3 className="text-lg text-[#6B4F3B] font-semibold">Requirements</h3>
                <PortableText value={job.requirements} />
              </div>
              <div className="text-right">
                <button
                  onClick={() => setSelectedJob(job)}
                  className="inline-block bg-gradient-to-r from-[#6B4F3B] to-[#8B6E4F] text-white px-6 py-2 rounded-full text-sm font-semibold hover:from-[#5a4231] hover:to-[#755b3e] transition-all"
                >
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-lg w-full p-6 relative">
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-3 right-4 text-gray-600 text-xl hover:text-black"
            >
              &times;
            </button>
            <h3 className="text-xl font-bold text-[#6B4F3B] mb-4">Apply for: {selectedJob.title}</h3>

            <form
              ref={formRef}
              onSubmit={() => setSubmitting(true)}
              action="https://formsubmit.co/hr@atozee.net"
              method="POST"
              encType="multipart/form-data"
              target="hidden_iframe"
              className="space-y-4"
            >
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_subject" value={`Job Application: ${selectedJob.title}`} />
              <input type="hidden" name="Job Title" value={selectedJob.title} />

              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="Name" type="text" required className="w-full border px-3 py-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input name="Email" type="email" required className="w-full border px-3 py-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input name="Phone Number" type="tel" required className="w-full border px-3 py-2 rounded-md" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload CV</label>
                <input
                  name="attachment"
                  type="file"
                  required
                  accept=".pdf,.doc,.docx"
                  className="w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#6B4F3B] file:text-white hover:file:bg-[#5a4231]"
                />
              </div>
              <div className="text-right">
                <button
                  type="submit"
                  disabled={submitting}
                  className={`bg-[#6B4F3B] hover:bg-[#5a4231] text-white px-6 py-2 rounded-full font-semibold ${
                    submitting ? 'opacity-60 cursor-not-allowed' : ''
                  }`}
                >
                  {submitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg
                        className="w-4 h-4 animate-spin"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Application'
                  )}
                </button>
              </div>
            </form>

            {/* Hidden iframe to catch form response */}
            <iframe
              name="hidden_iframe"
              style={{ display: 'none' }}
              onLoad={handleIframeLoad}
            ></iframe>
          </div>
        </div>
      )}

      {/* Success Notification */}
      {showNotification && (
        <div className="fixed bottom-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg z-50">
          ✅ Application submitted successfully!
        </div>
      )}
    </div>
  )
}