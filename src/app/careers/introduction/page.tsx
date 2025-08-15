import React from 'react';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import ContactBar from '@/app/Components/topbar';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

export default function CareerIntro() {
  return (
    <>
      <ContactBar />
      <Navbar />
      
      {/* Banner Image Section */}
      <div className="w-full relative h-64 md:h-96">
        <Image
          src="/ic.png"
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 bg-black/30 flex items-center justify-center ${dmSans.className}`}>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 tracking-wider">
            Introduction
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className={dmSans.className}>
        <div className="px-4 py-12 md:py-20 pl-10">
          <div className="text-left">
            <p className="text-xl md:text-3xl font-bold tracking-wide text-black mb-6 md:mb-8 leading-tight">
              Build Your Future with A to Zee Switchgear Engineering
            </p>
            <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-lg tracking-wider">
              At A to Zee Switchgear, we power progress through innovation in electrical engineering solutions. As a leading manufacturer of premium switchgear systems and power distribution products, we&apos;re looking for talented professionals to join our growing team.
            </p>

            <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-lg tracking-wider">
              We offer more than just jobs – we provide opportunities to work on cutting-edge projects, develop specialized skills, and be part of a company that&apos;s shaping Pakistan&apos;s energy infrastructure. Our culture values expertise, safety, and teamwork, offering competitive benefits and continuous learning in a dynamic industry.
            </p>
            
            <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-lg tracking-wider">
              Explore how your skills can energize your career with us.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}