import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
// import Link from 'next/link';

const Pblog = () => {
  const features = [
    {
      title: "Sales",
      description: "Quality and safety are two of the most important considerations in the power sector. DOHO switchgear is designed and manufactured keeping these two factors in mind. We use only the best parts and materials to make our products.",
      link: "#",
      image: "/sale1.png"
    },
    {
      title: "Prepare Design",
      description: "DOHO is a leading innovator in switchgear products, one of the best standard and OEM switchgear manufacturers across the globe. We ensure the most advanced technologies on our products and are always looking for ways to improve our manufacturing processes.",
      link: "#",
      image: "/sd.png"
    },
    {
      title: "Purchase Action",
      description: "At DOHO, we understand that our customers need more than just quality products. They need a reliable partner they can count on for support and service. Our team is available 24/7 to provide the expert assistance you need for your project, when you need it.",
      link: "#",
      image: "/p.png"
    },
    {
      title: "Manufacturing Activity",
      description: "At DOHO, we understand that our customers need more than just quality products. They need a reliable partner they can count on for support and service. Our team is available 24/7 to provide the expert assistance you need for your project, when you need it.",
      link: "#",
      image: "/w.png"
    },
    {
      title: "Customer Inspection",
      description: "At DOHO, we understand that our customers need more than just quality products. They need a reliable partner they can count on for support and service. Our team is available 24/7 to provide the expert assistance you need for your project, when you need it.",
      link: "#",
      image: "/c.png"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        {features.map((feature, index) => (
          <div key={index} className="group">
            {/* Larger Square Image */}
            <div className="relative aspect-square w-full min-h-[300px] overflow-hidden mb-6">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>

            {/* Text Content */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold font-serif tracking-wide  text-gray-800">{feature.title}</h2>
              <p className="text-gray-700 font-light tracking-wider text-sm leading-relaxed">
                {feature.description}
              </p>              <button className="text-black font-semibold px-4 py-3  bg-white hover:bg-gray-100 transition uppercase tracking-wider rounded-md border border-gray-900 flex items-center gap-2 group">
                READ MORE
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pblog;