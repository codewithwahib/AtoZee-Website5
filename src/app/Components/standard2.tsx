import React from 'react';
import Image from 'next/image';


const AboutComponent: React.FC = () => {
  // Replace these with your actual image paths
  const imagePaths = [
    '/w.png',
    '/w.png',
    '/w.png',
    '/w.png',
    '/w.png',
    '/w.png',
  ];

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-6xl pt-9 font-bold font-serif tracking-wider text-black mb-6">A To Zee Standard</h2>
        
        {/* Paragraph */}
        <p className="text-gray-700 ont-light tracking-wider text-sm leading-relaxed  max-w-3xl mx-auto">
          At Jubilee Corporation, we take pride in providing highest quality products with individualized customer service, and building lasting relationships with our customers.
        </p>
        
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
          {imagePaths.map((image, index) => (
            <div key={index} className="relative pb-[100%] overflow-hidden shadow-xl group">
  {/* Square container with padding-bottom trick */}
  <Image
    src={image}
    alt={`About our company ${index + 1}`}
    fill
    className="absolute top-0 left-0 w-full h-full pt-9 object-cover group-hover:scale-105 transition-transform duration-300"
  />
</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutComponent;