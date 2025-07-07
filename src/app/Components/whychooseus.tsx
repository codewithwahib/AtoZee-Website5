'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

const features = [
  {
    title: 'Top-Notch Quality',
    description: 'Premium materials and rigorous testing ensure unmatched durability.',
    image: '/top.png',
  },
  {
    title: 'Uncompromised Safety',
    description: 'All products meet international safety and performance standards.',
    image: '/safety.png',
  },
  {
    title: '24/7 Expert Support',
    description: 'Professional assistance whenever you need it — day or night.',
    image: '/24.png',
  },
  {
    title: 'Driven by Innovation',
    description: 'We constantly evolve to meet tomorrow\'s challenges today.',
    image: '/dri.png',
  },
];

export default function WhyChooseUs() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-white font-sans">
      <div className="container mx-auto px-6">
        <h2
          className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 mb-4 tracking-tight"
          data-aos="fade-up"
        >
          Why <span className="text-[#D3B683]">Choose</span> Us
        </h2>
        <p
          className="text-center max-w-2xl mx-auto text-gray-600 text-lg md:text-xl font-light tracking-wide mb-14"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Discover what makes us a reliable partner in powering your vision.
        </p>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transform hover:-translate-y-2 transition duration-300 text-center border border-gray-200"
              data-aos="zoom-in"
              data-aos-delay={index * 100}
            >
              <div className="w-full h-52 overflow-hidden rounded-xl mb-6 relative">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-2xl font-serif font-bold text-black mb-2 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-black pt-2 font-sans text-base leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}