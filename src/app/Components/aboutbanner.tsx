import React from 'react';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

const BannerSection = () => {
    return (
        <section className="relative h-[70vh] min-h-[500px] w-full">
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="/ba.jpg"
                    alt="About Us Banner"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content - Far Left Aligned */}
           <div className="relative z-10 h-full flex items-center pl-4 sm:pl-8 md:pl-12 lg:pl-20 xl:pl-32">
  <div className="text-white max-w-2xl">
    <h1 className="text-3xl sm:text-4xl font-bold mb-6 font-serif tracking-wide leading-tight">
      Powering Progress Through Innovation
    </h1>
    <p className="text-white font-light tracking-wider text-sm sm:text-base md:text-lg mb-8 leading-relaxed">
      For over a decade, we&apos; ve been delivering cutting-edge electrical solutions with uncompromising quality and safety standards to industries worldwide.
    </p>
    <div className="mt-8"> {/* Added spacing div */}
      <button className="text-black font-semibold px-6 py-3 bg-white hover:bg-gray-100 transition-all duration-300 uppercase tracking-wider rounded-sm border border-gray-900 flex items-center gap-2 group w-fit">
        READ MORE
        <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" size={14} />
      </button>
    </div>
  </div>
</div>
        </section>
    );
};

export default BannerSection;