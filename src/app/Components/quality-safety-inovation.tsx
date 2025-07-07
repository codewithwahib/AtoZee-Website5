'use client';
import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { DM_Sans } from 'next/font/google';

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'],
});

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exitAnimation, setExitAnimation] = useState(false);

  const slides = [
    {
      image: '/q2.jpg',
      heading: 'QUALITY - SAFETY INNOVATION',
      subheading: 'SWITCH GEARS',
      description: 'For decades we have been setting standards in innovation, safety and quality in our core business of switchgear systems',
      buttonText: 'Read More',
      buttonLink: '/products'
    },
    {
      image: '/q2.jpg',
      subheading: 'SERVICES',
      description: 'Our comprehensive service package leaves no wish unanswered - we do everything from assembly to maintenance and a 24/7 365 emergency services, right through to a comprehensive spare parts service.',
      buttonText: 'Read More',
      buttonLink: '/distribution'
    },
    {
      image: '/q2.jpg',
      subheading: 'AUTOMATION',
      description: 'We are constantly developing reliable automation solutions that are specifically tailored to customers needs in the field of automation and control systems.',
      buttonText: 'Read More',
      buttonLink: '/control-panels'
    },
    {
      image: '/q2.jpg',
      subheading: 'SOLUTION',
      description: 'We combine the products of selected partners with A to Zee services and a comprehensive project management to come up with professional solutions.',
      buttonText: 'Read More',
      buttonLink: '/energy-management'
    }
  ];

  const goToNext = useCallback(() => {
    setExitAnimation(true);
    setTimeout(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
      setExitAnimation(false);
    }, 300);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, [goToNext]);

  const handleDotClick = useCallback((index: number) => {
    if (index !== activeIndex) {
      setExitAnimation(true);
      setTimeout(() => {
        setActiveIndex(index);
        setExitAnimation(false);
      }, 300);
    }
  }, [activeIndex]);

  return (
    <div className={`relative w-full h-[65vh] min-h-[450px] sm:h-[75vh] md:h-[80vh] lg:min-h-[550px] overflow-hidden ${dmSans.className}`}>
      <Image
        src={slides[activeIndex].image}
        alt="Banner"
        fill
        className="object-cover brightness-75"
        priority
      />

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 text-center">
          <div className="max-w-3xl sm:max-w-4xl lg:max-w-5xl mx-auto">
            {/* Static heading */}
            <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white mb-3 sm:mb-5 tracking-wide ${dmSans.className}`}>
              {slides[0].heading}
            </h1>
            
            {/* Animated content section */}
            <div className="mt-6 sm:mt-8 md:mt-12 overflow-hidden relative">
              {/* Subheading animation */}
              <div className={`transition-all duration-300 ease-in-out ${
                exitAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                <h2 className={`text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-5 tracking-wide ${dmSans.className}`}>
                  {slides[activeIndex].subheading}
                </h2>
              </div>
              
              {/* Description animation */}
              <div className={`transition-all duration-300 ease-in-out delay-75 ${
                exitAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
              }`}>
                <p className={`text-sm sm:text-base md:text-lg text-white mb-4 sm:mb-6 mx-auto font-light tracking-wider max-w-xl sm:max-w-2xl md:max-w-3xl leading-relaxed ${dmSans.className}`}>
                  {slides[activeIndex].description}
                </p>
                
                {/* Read More Button */}
                <div className={`transition-all duration-300 ease-in-out delay-150 ${
                  exitAnimation ? 'translate-x-full opacity-0' : 'translate-x-0 opacity-100'
                }`}>
                  <Link
                    href={slides[activeIndex].buttonLink}
                    className={`inline-block px-6 py-2 sm:px-8 sm:py-3 bg-white text-gray-800 rounded-md font-medium text-sm sm:text-base hover:bg-gray-100 transition-colors duration-300 ${dmSans.className}`}
                  >
                    {slides[activeIndex].buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-6 sm:bottom-8 md:bottom-12 left-0 right-0 flex justify-center gap-2 sm:gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2 md:h-2 rounded-full transition-all ${
              index === activeIndex ? 'bg-white w-6 sm:w-8 md:w-10' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;