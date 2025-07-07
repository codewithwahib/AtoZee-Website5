import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

const FeatureSection = () => {
  const features = [
    {
      title: "Sales",
      description: "Quality and safety are our top priorities. DOHO switchgear is designed with these in mind using the best materials.",
      link: "/sales",
      image: "/sale1.png"
    },
    {
      title: "Prepare Design",
      description: "Leading innovator in switchgear products with advanced technologies and continuous process improvements.",
      link: "prepare-design",
      image: "/sd.png"
    },
    {
      title: "Purchase Action",
      description: "We're more than a supplier - we're a reliable partner with 24/7 expert support for your projects.",
      link: "purchase-action",
      image: "/p.png"
    },
    {
      title: "Manufacturing",
      description: "Quality products backed by dependable support and service whenever you need it.",
      link: "manafacturing-activity",
      image: "/w.png"
    }
  ];

  return (
    <div className="relative py-8 md:py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f8f4ee] via-[#f0e6d8] to-[#e8d8c0] opacity-95 z-0"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 z-10">
        {/* Heading Section */}
        <div className="text-center mb-10 md:mb-12">
          <h1 className={`text-2xl md:text-3xl font-bold ${dmsans.className} text-black tracking-wide`}>
            Work Operation
          </h1>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group flex flex-col h-full bg-white/90 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-white/20"
            >
              {/* Image Container */}
              <div className="relative aspect-square w-full min-h-[200px] sm:min-h-[180px] overflow-hidden">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  priority={index < 2} // Only prioritize first two images
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Text Content */}
              <div className="flex flex-col flex-grow p-4 sm:p-5 space-y-3">
                <h2 className={`text-xl font-semibold ${dmsans.className} text-gray-800`}>
                  {feature.title}
                </h2>
                <p className={`text-gray-600 text-xs sm:text-sm leading-relaxed ${dmsans.className}`}>
                  {feature.description}
                </p>
                
                {/* Button */}
                <div className="mt-auto pt-2">
                  <Link 
                    href={feature.link}
                    className={`w-full text-[#6B4F3B] text-xs sm:text-sm font-semibold px-3 py-2 bg-white hover:bg-[#f5f0ea] transition-all duration-200 uppercase tracking-wider rounded border border-[#d6c4b3] flex items-center justify-center gap-1 group hover:border-[#6B4F3B] ${dmsans.className}`}
                  >
                    READ MORE
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={12} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;