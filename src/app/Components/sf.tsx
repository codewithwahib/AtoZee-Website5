import React from 'react';
import Image from 'next/image';

const BankingServices = () => {
  const services = [
    { name: 'Project Management', image: '/p1.png' },
    { name: 'System Designing', image: '/p2.png' },
    { name: 'Customer Satisfaction', image: '/p3.png' },
    { name: 'Standard Upgradation', image: '/p4.png' }
  ];

  return (
    <div className="bg-gray-50 py-12"> {/* Added light gray background with vertical padding */}
      <div className="max-w-7xl mx-auto p-4 md:p-8">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-4 pb-5 tracking-wider" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Delivering Excellence Through Integrated Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 xl:gap-20 pt-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white shadow-xl p-4 sm:p-6 md:p-8 flex flex-col items-center border border-gray-500 hover:shadow-2xl transition-all duration-300 w-full max-w-xs sm:max-w-none sm:w-[250px] md:w-[280px] lg:w-[300px] h-auto aspect-square mx-auto"
            >
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 mb-4 sm:mb-5 md:mb-6 flex items-center justify-center">
                <Image 
                src={service.image} 
                  alt={service.name} 
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 text-center whitespace-nowrap pt-2 sm:pt-3 md:pt-4">
                {service.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BankingServices;