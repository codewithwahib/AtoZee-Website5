"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

const logos = [
  { name: 'Client 1', logo: '/c1.png' },
  { name: 'Client 2', logo: '/c2.png' },
  { name: 'Client 3', logo: '/c3.png' },
  { name: 'Client 4', logo: '/c4.png' },
  { name: 'Client 5', logo: '/c5.png' },
  { name: 'Client 6', logo: '/c6.png' },
  { name: 'Client 7', logo: '/c7.png' },
  { name: 'Client 8', logo: '/c8.png' },
  { name: 'Client 9', logo: '/c9.png' },
  { name: 'Client 10', logo: '/c10.png' },
  { name: 'Client 11', logo: '/c11.png' },
  { name: 'Client 12', logo: '/c12.png' },
  { name: 'Client 13', logo: '/c13.png' },
  { name: 'Client 14', logo: '/c14.png' },
  { name: 'Client 15', logo: '/c15.png' },
  { name: 'Client 16', logo: '/c16.png' },
  { name: 'Client 17', logo: '/c17.png' },
  { name: 'Client 18', logo: '/c18.png' },
  { name: 'Client 19', logo: '/c19.png' },
  { name: 'Client 20', logo: '/c20.png' },
  { name: 'Client 21', logo: '/c21.png' },
  { name: 'Client 22', logo: '/c22.png' },
  { name: 'Client 23', logo: '/c23.png' },
  { name: 'Client 24', logo: '/c24.png' },
  { name: 'Client 25', logo: '/c25.png' },
  { name: 'Client 26', logo: '/c26.png' },
  { name: 'Client 27', logo: '/c27.png' },
  { name: 'Client 28', logo: '/c28.png' },
  { name: 'Client 29', logo: '/c29.png' },
  { name: 'Client 30', logo: '/c30.png' },
  { name: 'Client 31', logo: '/c31.png' },
  { name: 'Client 32', logo: '/c32.png' },
  { name: 'Client 33', logo: '/c33.png' },
  { name: 'Client 34', logo: '/c34.png' },
  { name: 'Client 35', logo: '/c35.png' },
  { name: 'Client 36', logo: '/c36.png' },
  { name: 'Client 37', logo: '/c37.png' },
  { name: 'Client 38', logo: '/c38.png' },
  { name: 'Client 39', logo: '/c39.png' },
  { name: 'Client 40', logo: '/c40.png' },
  { name: 'Client 41', logo: '/c41.png' },
  { name: 'Client 42', logo: '/c42.png' },
  { name: 'Client 43', logo: '/c43.png' },
  { name: 'Client 44', logo: '/c44.png' },
  { name: 'Client 45', logo: '/c45.png' },
  { name: 'Client 46', logo: '/c46.png' },
  { name: 'Client 47', logo: '/c47.png' },
  { name: 'Client 48', logo: '/c48.png' },
  { name: 'Client 49', logo: '/c49.png' },
  { name: 'Client 50', logo: '/c50.png' },
];
export default function LogoCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scroll = () => {
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, []);

return (
    <div className="py-12 bg-white overflow-hidden pt-20">
      {/* Added "Our Clients" heading */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-800 mb-4 pb-5 tracking-wider" style={{ fontFamily: 'Roboto, sans-serif' }}>
          Our Clients
        </h2>
      </div>

      <div 
        ref={containerRef}
        className="flex items-center gap-8 w-full overflow-x-auto"
        style={{ 
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div key={`${logo.name}-${index}`} className="flex-shrink-0">
            <Image
              src={logo.logo}
              alt={logo.name}  
              width={250}
              height={150}
              className="object-contain h-24 w-48 transition-all hover:scale-105"
            />
          </div>
        ))}
      </div>
      
      <style jsx>{`
        .overflow-x-auto::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
