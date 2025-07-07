'use client';
import React from 'react';
import Image from 'next/image';

const services = [
  {
    title: 'Turnkey Solutions',
    description: 'Complete end-to-end electrical systems tailored to your needs.',
    icon: '/tur.png',
  },
  {
    title: 'Custom Design',
    description: 'Engineered designs for unique infrastructure and load demands.',
    icon: '/cus.png',
  },
  {
    title: 'Installation & Commissioning',
    description: 'Expert deployment and start-up of systems ensuring peak performance.',
    icon: '/ins.png',
  },
  {
    title: 'Maintenance & Support',
    description: 'Ongoing service plans and emergency response from skilled professionals.',
    icon: '/main.png',
  },
];

export default function Services() {
  return (
    <section className="py-24 bg-white font-sans">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4">
          <span className="text-[#D3B683]">Our</span> Services
        </h2>
        <p className="text-center max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-light mb-14">
          We deliver comprehensive support—from planning and design to maintenance.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 text-center shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:border-[#D3B683]"
            >
              <div className="w-20 h-20 mx-auto mb-6 bg-[#D3B683]/10 rounded-full flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={40}  // matches original w-10 (10 * 4 = 40)
                  height={40} // matches original h-10
                  className="w-10 h-10 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-[#D3B683] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}