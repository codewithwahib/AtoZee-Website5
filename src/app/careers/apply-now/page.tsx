"use client";
import React, { useState, useRef } from "react";
import { FaArrowRight, FaUpload, FaSpinner } from "react-icons/fa";
import { DM_Sans } from "next/font/google";
import Navbar from "@/app/Components/navbar";
import Footer from "@/app/Components/footer";
import ContactBar from "@/app/Components/topbar";
import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";

const dmsans = DM_Sans({ subsets: ["latin"], weight: "700" });

function ApplyNowForm() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const jobTitle = searchParams.get("job");
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string>("Choose file...");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    city: "",
    comments: ""
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const validTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!validTypes.includes(file.type)) {
        setError("Please upload a PDF or DOC/DOCX file");
        setSelectedFileName("Choose file...");
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError("File size should be less than 5MB");
        setSelectedFileName("Choose file...");
        if (fileInputRef.current) fileInputRef.current.value = "";
        return;
      }
      setSelectedFileName(file.name);
      setError(null);
    } else {
      setSelectedFileName("Choose file...");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    if (!formRef.current) {
      setError("Form error. Please refresh and try again.");
      setIsSubmitting(false);
      return;
    }

    const iframe = document.createElement("iframe");
    iframe.name = "formsubmit-iframe";
    iframe.style.display = "none";
    document.body.appendChild(iframe);

    iframe.onload = () => {
      setIsSubmitting(false);
      setSubmitted(true);

      if (formRef.current) formRef.current.reset();
      setSelectedFileName("Choose file...");
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        city: "",
        comments: ""
      });

      setTimeout(() => {
        setSubmitted(false);
        router.replace(window.location.pathname, { scroll: false });
      }, 4000);

      document.body.removeChild(iframe);
    };

    formRef.current.target = "formsubmit-iframe";
    formRef.current.submit();
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="max-w-2xl mx-auto px-4 py-8 sm:py-10">
        <h1 className={`text-2xl sm:text-3xl font-bold text-gray-900 mb-6 ${dmsans.className}`}>
          {jobTitle ? `Apply for ${decodeURIComponent(jobTitle)}` : "Application Form"}
        </h1>

        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-sm">{error}</div>
        )}

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          action="https://formsubmit.co/hr@atozee.net"
          method="POST"
          encType="multipart/form-data"
          className="space-y-4 w-full pt-4"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="jobTitle" value={jobTitle ? decodeURIComponent(jobTitle) : ""} />

          <div className="grid grid-cols-1 gap-3 w-full">
            <div>
              <input
                type="text"
                name="name"
                required
                placeholder="Name*"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] outline-none transition bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="jobTitleDisplay"
                value={jobTitle ? decodeURIComponent(jobTitle) : ""}
                readOnly
                placeholder="Job Title*"
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg bg-gray-100 cursor-not-allowed"
              />
            </div>

            <div>
              <input
                type="tel"
                name="phone"
                required
                placeholder="Contact No*"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] outline-none transition bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="email"
                name="email"
                required
                placeholder="Email*"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] outline-none transition bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="company"
                required
                placeholder="Company/Reference*"
                value={formData.company}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] outline-none transition bg-white placeholder-gray-500"
              />
            </div>

            <div>
              <input
                type="text"
                name="city"
                required
                placeholder="City*"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] outline-none transition bg-white placeholder-gray-500"
              />
            </div>
          </div>

          <div className="w-full">
            <label className={`block mb-1 text-sm font-medium text-gray-700 ${dmsans.className}`}>
              Upload CV (PDF/DOC/DOCX, max 5MB)*
            </label>
            <div className="flex items-center gap-2">
              <label className="flex-1 cursor-pointer">
                <div className={`flex items-center justify-between px-4 py-3 text-sm border-2 border-dashed ${error ? "border-red-500" : "border-[#8B5E3C]"} rounded-lg bg-white hover:bg-gray-50 transition ${dmsans.className}`}>
                  <span className={`truncate ${selectedFileName !== "Choose file..." ? "text-gray-900" : "text-gray-500"}`}>
                    {selectedFileName}
                  </span>
                  <FaUpload className="text-[#8B5E3C] text-sm" />
                </div>
                <input
                  type="file"
                  name="cv"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  required
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
            </p>
          </div>

          <div className="w-full">
            <label className={`block mb-1 text-sm font-medium text-gray-700 ${dmsans.className}`}>
              Cover Letter
            </label>
            <textarea
              name="comments"
              rows={4}
              placeholder="Tell us why you'd be a great fit..."
              value={formData.comments}
              onChange={handleInputChange}
              className="w-full px-4 py-3 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B5E3C] outline-none transition bg-white min-h-[100px] placeholder-gray-500"
            ></textarea>
          </div>

          <div className="pt-2 w-full">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-4 py-3 text-sm bg-[#8B5E3C] text-white font-bold rounded-lg hover:bg-[#6F4A2F] transition duration-300 focus:outline-none focus:ring-2 focus:ring-[#6B4F3B] flex items-center justify-center gap-2 ${dmsans.className} ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}`}
            >
              {isSubmitting ? (
                <>
                  <FaSpinner className="animate-spin text-sm" />
                  Submitting...
                </>
              ) : (
                <>
                  SUBMIT APPLICATION
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {submitted && (
        <div className="fixed top-4 right-4 bg-green-600 text-white font-medium py-2 px-4 rounded-lg shadow-lg z-50 animate-slide-in text-sm">
          ✅ Application submitted successfully!
        </div>
      )}
    </div>
  );
}

export default function ApplyNowPage() {
  return (
    <>
      <ContactBar />
      <Navbar />
      <Suspense fallback={<div className="min-h-screen bg-gray-50 flex items-center justify-center text-sm">Loading...</div>}>
        <ApplyNowForm />
      </Suspense>
      <Footer />
    </>
  );
}