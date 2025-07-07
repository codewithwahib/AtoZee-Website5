'use client';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

const industries = [
  { name: "Utilities", icon: "/uti.png" },
  { name: "Data Centers", icon: "/data.png" },
  { name: "Manufacturing", icon: "/mana.png" },
  { name: "Oil & Gas", icon: "/oil.png" },
];

const IndustriesServed = () => {
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
          <span className="text-[#D3B683]">Industries</span> We Serve
        </h2>
        <p
          className="text-center text-gray-600 pt-3 text-lg md:text-xl font-light tracking-wide mb-14 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Our solutions empower key industries to perform at their best—safely, efficiently, and reliably.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {industries.map((industry, idx) => (
            <div
              key={idx}
              data-aos="zoom-in"
              data-aos-delay={idx * 100}
              className="relative group bg-white p-8 rounded-3xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-2xl hover:border-[#D3B683]"
            >
              <div className="absolute inset-0 rounded-3xl group-hover:ring-2 group-hover:ring-[#D3B683] transition"></div>

              <div className="relative z-10 w-24 h-24 mx-auto mb-6 bg-[#D3B683]/10 rounded-full flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={industry.icon}
                  alt={industry.name}
                  width={48}  // matches your original w-12 (12 * 4 = 48)
                  height={48} // matches your original h-12
                  className="w-12 h-12 object-contain"
                />
              </div>

              <h3 className="relative z-10 text-xl font-semibold text-gray-800 text-center tracking-wide group-hover:text-[#D3B683] transition-colors">
                {industry.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustriesServed;