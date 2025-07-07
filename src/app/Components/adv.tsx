'use client';
import React from 'react';
import {
  FaCheckCircle,
  FaClock,
  FaCertificate,
  FaUserFriends,
  FaCogs,
  FaLifeRing,
} from 'react-icons/fa';

export default function Advantages() {
  const advantages = [
    {
      title: 'Reliability',
      desc: 'Consistent and dependable solutions built for critical operations.',
      icon: <FaCheckCircle className="text-5xl text-black mb-4" />,
    },
    {
      title: 'Timely Delivery',
      desc: 'Projects delivered on schedule with optimized project management.',
      icon: <FaClock className="text-5xl text-black mb-4" />,
    },
    {
      title: 'Certified Quality',
      desc: 'ISO & IEC compliant processes ensure international-grade quality.',
      icon: <FaCertificate className="text-5xl text-black mb-4" />,
    },
    {
      title: 'Customer Focus',
      desc: 'Solutions tailored to client needs, budgets, and timelines.',
      icon: <FaUserFriends className="text-5xl text-black mb-4" />,
    },
    {
      title: 'Technical Expertise',
      desc: 'Skilled engineers and technicians ensure flawless execution.',
      icon: <FaCogs className="text-5xl text-black mb-4" />,
    },
    {
      title: 'After-Sales Support',
      desc: 'Ongoing maintenance and support to keep systems running.',
      icon: <FaLifeRing className="text-5xl text-black mb-4" />,
    },
  ];

  return (
    <>
      <section className="relative py-28 bg-gradient-to-br from-[#f8f4ef] via-[#f5eee6] to-[#fdfbf8] font-sans text-[#a67654] overflow-hidden">
        {/* Diagonal Top Design */}
        <svg
          className="absolute top-0 left-0 w-full h-24 text-[#f0e8db]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 V30 Q600,90 1200,30 V0z" fill="currentColor" />
        </svg>

        {/* Title */}
        <div className="text-center mb-20 px-6 relative z-10">
          <div className="flex justify-center items-center mb-4">
            <div className="w-1 h-10 bg-black mr-4 rounded-sm"></div>
            <h2 className="text-5xl md:text-6xl font-bold font-serif text-[#976c4d]">
              Why Choose Us
            </h2>
          </div>
          <p className="text-lg md:text-xl text-[#5a4a3c] font-light">
            Elevating performance through innovation, quality & customer-first solutions.
          </p>
          <div className="w-24 h-[3px] bg-black mt-4 mx-auto rounded-full"></div>
        </div>

        {/* Grid */}
        <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-xl border border-[#eee] hover:shadow-2xl transition-transform transform hover:scale-105 duration-300"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h4 className="text-2xl md:text-3xl font-semibold text-center font-serif text-[#976c4d] mb-3">
                {item.title}
              </h4>
              <p className="text-lg md:text-xl text-center font-light leading-relaxed text-gray-700">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Decorative Bottom Shape */}
        <svg
          className="absolute bottom-0 left-0 w-full h-24 text-[#f0e8db]"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M0,0 V30 Q600,90 1200,30 V0z" fill="currentColor" />
        </svg>
      </section>
    </>
  );
}
