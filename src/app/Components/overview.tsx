'use client';
import { DM_Sans } from 'next/font/google';
import React from 'react';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

const Overview = () => {
    return (
        <section 
            className="w-full py-12 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-10 relative"
            style={{
                backgroundImage: "url('/background-image.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundAttachment: "fixed"
            }}
        >
            {/* Semi-transparent overlay for better text readability */}
            <div className="absolute inset-0 bg-white bg-opacity-90"></div>
            
            <div className="flex flex-col lg:flex-row w-full max-w-7xl mx-auto relative z-10">
                {/* Text Content - Always comes first in DOM for mobile */}
                <div className="w-full lg:w-1/2 lg:pr-8 xl:pr-10 order-1">
                    <div className="text-left mb-8 lg:mb-0">
                        <h1 className={`${dmsans.className} text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-black mb-4 sm:mb-6 md:mb-8 leading-tight`}>
                            Overview
                        </h1>

                        <div className="relative w-full overflow-hidden mb-6">
                            <div className="w-full h-px bg-gray-400"></div>
                        </div>

                        <p className={`text-gray-600 font-light text-sm sm:text-base md:text-lg leading-relaxed tracking-wider mb-6 sm:mb-8 md:mb-10 ${dmsans.className}`}>
                            <span className={`font-bold text-md sm:text-xl pr-1 text-brownPrimary tracking-wider ${dmsans.className}`}>
                                A to Zee Switchgear Engineering
                            </span> 
                            is a leading Pakistani manufacturer of high-quality electrical switchgear, control panels, and power distribution solutions. Based in Karachi, the company serves industrial, commercial, and utility sectors with reliable, standards-compliant (IEC, IEEE) products. Known for innovation and precision engineering, A to Zee provides customized electrical solutions backed by strong technical expertise and after-sales support, contributing to Pakistan&apos;s power infrastructure development.
                        </p>
                        
                        <div className="relative w-full overflow-hidden mb-6 sm:mb-8 md:mb-10">
                            <div className="w-full h-px bg-gray-400"></div>
                        </div>

                        <div className="pt-2">
                            <Link href="/about" passHref>
                                <button className={`text-black font-semibold px-4 py-2 sm:px-4 sm:py-3 bg-white hover:bg-gray-100 transition uppercase tracking-wider border border-gray-900 flex items-center gap-2 group ${dmsans.className}`}>
                                    READ MORE
                                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Video Section - Comes after text in DOM for mobile, positioned on right for desktop */}
                <div className="w-full lg:w-1/2 lg:pl-8 xl:pl-10 order-2 mt-8 lg:mt-0">
                    <div className="relative h-64 sm:h-80 md:h-[26rem] lg:h-[29rem] w-full overflow-hidden rounded-lg">
                        <iframe 
                            src="https://www.youtube.com/embed/vroQG-xw1QI?si=D8iYi-fq11jvLSeE" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            referrerPolicy="strict-origin-when-cross-origin" 
                            allowFullScreen
                            className="w-full h-full object-cover"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;