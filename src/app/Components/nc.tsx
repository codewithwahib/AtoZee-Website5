"use client";
import Image from "next/image";
import React from "react";
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

const services = [
  {
    name: "Switchgear Systems",
    image: "/nc1.png",
    link: "/switchgear-systems"
  },
  {
    name: "Support Services",
    image: "/nc2.png",
    link: "/support-services"
  },
  {
    name: "Automation And Control Systems",
    image: "/nc3.png",
    link: "/automation-and-control-systems"
  },
  {
    name: "Power Distribution Boards",
    image: "/nc4.png",
    link: "/power-distribution-boards"
  },
  {
    name: "Lighting Distribution Boards",
    image: "/nc5.png",
    link: "/lighting-distribution-boards"
  },
  {
    name: "Cable Tray System",
    image: "/nc6.png",
    link: "/cable-tray-systems"
  },
];

export default function ServicesGrid() {
  return (
    <div className={`bg-white pt-28 w-full overflow-x-hidden ${dmSans.variable}`}>
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full">
          {services.map((service, index) => (
            <Link 
              key={index}
              href={service.link}
              className="group relative overflow-hidden w-full hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-[4/2.5] bg-blue-950 relative min-h-[300px] w-full">
                <Image
                  src={service.image}
                  alt={service.name}
                  fill
                  className="object-cover transition-all duration-300 group-hover:scale-105 opacity-70 group-hover:opacity-100"
                  priority={index < 3}
                />
                {/* Centered Link Circle */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 border-2 border-white/50 hover:border-white transition-all duration-300 pointer-events-none">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-950" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                <h3 className="text-white text-md font-semibold tracking-widest pl-4 relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:h-6 before:w-0.5 before:bg-white">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}