'use client';
import React from 'react';
import Image from 'next/image';

export default function AboutCompany() {
  return (
    <section className="py-24 bg-gradient-to-br from-white to-white font-sans relative">
      {/* 🔸 Thin Light Brown Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#D3B683]"></div>

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-14">
        {/* Left: Image */}
        <div className="w-full lg:w-1/2 relative aspect-[4/3]">
          <Image
            src="/about1.png"
            alt="Founder or Team"
            fill
            className="rounded-3xl shadow-xl object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute bottom-4 left-4 bg-[#D3B683] text-white px-4 py-2 rounded-full text-sm shadow-lg font-medium tracking-wide">
            40+ Years of Excellence
          </div>
        </div>

        {/* Right: Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center mb-6">
            <div className="w-1 h-10 bg-[#6B4F3B] mr-4 rounded-sm"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#6B4F3B] font-serif leading-snug">
              Managing Director
            </h2>
          </div>

          <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-6 font-light">
            State-of-the-art production process, innovative products
            and customer oriented service: with this recipe for success,
            A to Zee has established itself since 1993 as a key provider of
            integrated electrotechnical solutions. Today, we utilize the
            experience of 70 highly motivated employees and the
            know-how of our global partners.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div className="bg-white p-5 rounded-xl shadow border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#D3B683] mb-2 font-serif">
                Established Expertise
              </h4>
              <p className="text-gray-600 text-sm leading-snug">
                Over 25+ years of industry experience across diverse sectors.
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow border border-gray-200 hover:shadow-md transition-shadow">
              <h4 className="text-xl font-semibold text-[#D3B683] mb-2 font-serif">
                Certified Quality
              </h4>
              <p className="text-gray-600 text-sm leading-snug">
                ISO 9001, IEC 61439, and other global standards met and exceeded.
              </p>
            </div>
          </div>

          <p className="text-gray-600 text-base leading-relaxed font-light">
            Our dedicated team of engineers, designers, and technicians ensures that every solution is future-ready,
            tailored, and delivered with precision.
          </p>
        </div>
      </div>
    </section>
  );
}