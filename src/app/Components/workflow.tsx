'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const workflowSteps = [
  {
    title: 'Research & Planning',
    description: 'We study market trends and customer needs to lay a strong foundation.',
    image: '/research.png',
  },
  {
    title: 'Design & Engineering',
    description: 'Precision-driven designs ensure optimal performance and safety.',
    image: '/workflow2.png',
  },
  {
    title: 'Manufacturing Excellence',
    description: 'Cutting-edge technology and strict QC for top-tier product output.',
    image: '/workflow3.png',
  },
  {
    title: 'Delivery & Support',
    description: 'On-time delivery backed by expert support and service solutions.',
    image: '/workflow4.png',
  },
];

export default function Workflow() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-100 to-white font-sans">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight"
          data-aos="fade-up"
        >
          Our <span className="text-[#D3B683]">Workflow</span>
        </h2>
        <p
          className="text-center max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-light tracking-wide mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A streamlined process from concept to delivery that guarantees excellence.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {workflowSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 text-center border border-gray-200"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-52 overflow-hidden rounded-xl mb-6 relative">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-2 tracking-wide">
                {step.title}
              </h3>
              <p className="text-black pt-2 font-sans text-base leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}