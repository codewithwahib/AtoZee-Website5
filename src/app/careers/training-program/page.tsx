import React from 'react';
import Image from 'next/image';
import { DM_Sans } from 'next/font/google';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import ContactBar from '@/app/Components/topbar';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

export default function CareerIntro() {
  return (
    <>
      <ContactBar />
      <Navbar />
      
      {/* Banner Image Section */}
      <div className="w-full relative h-64 md:h-96">
        <Image
          src="/ic2.jpg" // Replace with your actual banner image path
          alt="A to Zee Switchgear Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white text-center px-4 tracking-wider">
Engineering Trainee Program          </h1>
        </div>
      </div>

      {/* Content Section */}
     <div className={`w-full ${dmSans.variable}`}>
        <div className="px-4 py-12 md:py-20 pl-10"> {/* Removed max-w and mx-auto */}
          <div className="text-left">
            <p className="text-2xl md:text-3xl font-semibold font-serif tracking-wide text-black mb-6 md:mb-8 leading-tight">
              Switchgear Engineering Trainee Program
            </p>
            <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-md font-serif tracking-wider">
              Gain hands-on experience with Pakistan&apos;s leading electrical solutions provider. Our intensive 12-month program combines practical workshops, on-the-job training, and mentorship from senior engineers across all aspects of switchgear production and installation.            </p>

            <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-md font-serif tracking-wider">
            Develop specialized skills in power distribution systems while working on real client projects. Successful trainees receive industry certifications and priority consideration for full-time engineering positions within our growing organization.            </p>
            
             <p className="text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-md font-serif tracking-wider">
          The program culminates in a capstone project where trainees design and present solutions for actual client</p>
         
         
        
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}