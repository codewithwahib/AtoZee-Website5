import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/navbar';
import Footer from '@/app/Components/footer';
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'], // Multiple weights for different text styles
  variable: '--font-dmsans',
});

const CEOMessage = () => {
  return (
    <>
      <Navbar />
      <div className={`w-full px-0 py-12 md:py-16 ${dmsans.variable} font-sans`}>
        <div className="flex flex-col lg:flex-row gap-0">
          {/* Text Content - Left Side */}
          <div className="lg:w-1/2 pl-0">
            <div className="px-4 sm:px-6">
              <h1 className={`text-4xl font-bold text-gray-900 pb-6 border-b pl-6 border-gray-200 tracking-widest ${dmsans.className}`}>
Manufacturing Excellence at A to Zee Switchgear Engineering
              </h1>

              <div className="space-y-6 mt-8 text-gray-800">
                {/* <h2 className={`text-xl pt-0 font-bold text-gray-900 mb-6 pl-6 tracking-widest ${dmsans.className}`}>
                  Welcome to A to Zee Switchgear Engineering!
                </h2> */}

                <div className="space-y-5 pl-6">
                  <p className={`text-lg leading-relaxed text-gray-600 tracking-wider pt-2 ${dmsans.className}`}>
                    Our manufacturing facility is equipped with advanced machinery and skilled technicians who bring our designs to life with precision and care. Every panel and component is fabricated using high-quality materials to ensure durability and long-lasting performance.



                  </p>

                  <p className={`text-lg leading-relaxed text-gray-600 tracking-wider pt-2 ${dmsans.className}`}>
                   Strict quality control measures are applied at every stage of production, from sheet metal fabrication to wiring and assembly. We rigorously test each unit to verify functionality, safety, and adherence to industry standards before dispatch.




                  </p>

                  <p className={`text-lg leading-relaxed text-gray-600 tracking-wider pt-2 ${dmsans.className}`}>
                  Our flexible manufacturing processes allow us to handle both custom and high-volume orders efficiently, delivering reliable switchgear solutions that meet your schedule and specifications.




                  </p>
                </div>

                <div className="mt-10 pt-6 border-t border-gray-200">
                  <h3 className={`text-2xl font-bold text-gray-900 pl-6 tracking-widest ${dmsans.className}`}>
Built with precision — trusted to perform.

                  </h3>
                  {/* <p className={`text-lg font-semibold text-gray-600 mt-2 pl-7 pt-2 tracking-widest ${dmsans.className}`}>
                    Chief Executive Officer
                  </p> */}
                </div>
              </div>
            </div>
          </div>

          {/* Image - Right Side */}
          <div className="lg:w-1/2 flex items-center justify-center pr-6">
            <div className="relative w-full h-[380px] lg:h-[480px] overflow-hidden shadow-lg">
              <Image
                src="/ma.jpg"
                alt="Abdul Mahomed, Chief Executive Officer"
                width={1500}
                height={1100}
                className="object-cover w-full h-full"
                priority
                quality={100}
                style={{
                  objectPosition: 'top center',
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CEOMessage;