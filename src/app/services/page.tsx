'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../Components/navbar';
import Footer from '../Components/footer';
import Image from 'next/image';
import { FaIndustry, FaBuilding, FaTools, FaQuoteLeft } from 'react-icons/fa';

export default function ServicesPage() {
  return (
    <>
      {/* <TopBar /> */}
      <Navbar />

      <main className="font-sans text-[#5a4a3c] bg-gradient-to-br from-white to-[#f9f5f1]">
        {/* Hero Banner */}
        <div className="relative w-full h-[60vh]">
          <Image src="/ser1.jpg" alt="Services Banner" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg font-serif" data-aos="fade-zoom-in">
              Services
            </h1>
            <p className="mt-3 pt-5 text-xl md:text-2xl text-gray-200 font-light" data-aos="fade-up" data-aos-delay="200">
              Home / Services
            </p>
          </div>
        </div>

        {/* Empowering Section */}
        <section className="relative bg-[#f5eee6] py-24 text-center px-4">
          <div className="absolute top-0 left-0 w-full h-1 bg-[#D3B683]" />
          
          <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#6B4F3B] mb-4">
            Empowering Progress
          </h2>
          
          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-12">
            Delivering future-ready switchgear and electrical solutions with excellence and innovation.
          </p>

          {/* 3 Images Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Image
              src="/ser2.jpg"
              alt="Empower Image 1"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow"
            />
            <Image
              src="/ser3.jpg"
              alt="Empower Image 2"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow"
            />
            <Image
              src="/ser4.jpg"
              alt="Empower Image 3"
              width={400}
              height={300}
              className="w-full h-auto rounded-xl shadow"
            />
          </div>
        </section>

        {/* Core Services */}
        <section className="py-24 bg-white px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#6B4F3B] mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-xl mx-auto text-lg">
              Explore our core services that keep businesses powered, safe, and compliant.
            </p>
            <div className="w-24 h-[3px] bg-black mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {[
              {
                title: 'Custom Switchgear Panels',
                desc: 'Designed and built to exact industry specs with high reliability.',
                icon: <FaTools className="text-4xl text-[#6B4F3B]" />,
              },
              {
                title: 'Power Distribution Systems',
                desc: 'Efficient, scalable, and tailored for safe energy flow.',
                icon: <FaIndustry className="text-4xl text-[#6B4F3B]" />,
              },
              {
                title: 'Maintenance & Support',
                desc: 'Timely inspections, upgrades, and 24/7 technical assistance.',
                icon: <FaBuilding className="text-4xl text-[#6B4F3B]" />,
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#f9f5f1] p-8 rounded-xl shadow hover:shadow-xl transition">
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold font-serif text-center text-[#a67654] mb-2">{item.title}</h3>
                <p className="text-gray-700 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-24 bg-cover bg-center bg-no-repeat px-6" style={{ backgroundImage: `url('/industry-bg.jpg')` }}>
          <div className="bg-white/80 backdrop-blur-md p-10 rounded-xl">
            <div className="flex items-center mb-12">
              <div className="w-1 h-10 bg-black mr-4 rounded-sm"></div>
              <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#6B4F3B]">Industries We Serve</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                { title: ' Product Quality and Reliability', icon: <FaIndustry className="text-5xl text-black" /> },
                { title: 'Safety Features and Compliance', icon: <FaBuilding className="text-5xl text-black" /> },
                { title: 'Customer Support and Service', icon: <FaTools className="text-5xl text-black" /> },
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-2xl p-6 shadow border hover:shadow-xl transition">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h4 className="text-2xl font-semibold font-serif text-center text-[#a67654]">{item.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-[#f5eee6] px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#6B4F3B] mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">
              With years of expertise and a passion for power systems, we ensure safe and smart energy solutions.
            </p>
            <Image src="/ser6.jpg" alt="Why Choose Us" width={900} height={450} className="mx-auto mt-10 rounded-lg shadow" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
            {[
              'Tailored switchgear for every industry',
              'On-time delivery and installation',
              'Certified & experienced engineers',
              'Proven safety and compliance',
            ].map((point, i) => (
              <div key={i} className="flex items-start space-x-4">
                <span className="text-[#D3B683] text-2xl font-bold">✓</span>
                <p className="text-gray-700 text-lg">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-[#fdfbf8]">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#6B4F3B] mb-4">What Our Clients Say</h2>
            <div className="w-24 h-[3px] bg-black mx-auto mb-4 rounded-full" />
          </div>
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-6">
            {[
              {
                quote: 'Their switchgear panels are reliable, high-quality, and delivered on time. We trust them for every project.',
                name: 'Ravi Kumar, Plant Manager',
                company: 'Global Manufacturing Co.',
              },
              {
                quote: 'Excellent service and after-sales support. They truly understand industrial power needs.',
                name: 'Priya Shah, Electrical Consultant',
                company: 'Green Energy Solutions',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
                <FaQuoteLeft className="text-3xl text-[#D3B683] mb-4" />
                <p className="text-lg text-gray-700 mb-4 font-light leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="font-semibold text-[#a67654]">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-24 bg-white px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold font-serif text-[#6B4F3B] mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-20 h-[3px] bg-black mx-auto rounded-full" />
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                q: 'Do you provide on-site installation?',
                a: 'Yes, we offer complete installation and commissioning services with our expert team.',
              },
              {
                q: 'Are your products certified?',
                a: 'All our panels comply with international standards and come with relevant certifications.',
              },
              {
                q: 'What industries do you cater to?',
                a: 'From manufacturing and commercial buildings to energy utilities and infrastructure projects.',
              },
            ].map((faq, i) => (
              <details key={i} className="bg-[#fdfbf8] rounded-xl p-6 shadow cursor-pointer group">
                <summary className="text-lg font-medium text-[#6B4F3B] group-open:font-bold">{faq.q}</summary>
                <p className="mt-2 text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section
          className="py-20 text-white text-center bg-cover bg-center"
          style={{ backgroundImage: "url('/ser5.jpg')" }}
        >
          <div className="bg-black/60 py-12 px-4 rounded-xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Ready to Power Up Your Project?</h2>
            <p className="text-lg mb-8">Let&apos;s build a safer, smarter, and more efficient future together.</p>
            <Link href="/contact">
              <button className="bg-[#D3B683] text-black font-semibold px-6 py-3 rounded-full hover:bg-[#c2a36e] transition">
                Get in Touch
              </button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}