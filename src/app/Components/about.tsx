'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { DM_Sans } from 'next/font/google';

// Font configuration
const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

// Sanity client configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2023-05-03',
});

const builder = imageUrlBuilder(client);

function urlFor(source: SanityImage) {
  return builder.image(source);
}

interface SanityImage {
  _key?: string;
  asset: {
    _ref: string;
    _type: string;
  };
}

interface SanityImageItem {
  image: SanityImage;
}

const AboutUsSection = () => {
  const [images, setImages] = useState<SanityImage[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          home1Data,
          home2Images,
          home3Images,
          home4Images
        ] = await Promise.all([
          client.fetch<{ image: SanityImage }>('*[_type == "abouthome1"][0] { image }'),
          client.fetch<SanityImageItem[]>('*[_type == "abouthome2"] { image }'),
          client.fetch<SanityImageItem[]>('*[_type == "abouthome3"] { image }'),
          client.fetch<SanityImageItem[]>('*[_type == "abouthome4"] { image }')
        ]);

        // Combine all images into a single array
        const allImages = [
          ...(home1Data?.image ? [home1Data.image] : []),
          ...(home2Images?.map((item) => item.image) || []),
          ...(home3Images?.map((item) => item.image) || []),
          ...(home4Images?.map((item) => item.image) || [])
        ].filter(Boolean); // Remove any undefined/null images

        setImages(allImages);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Rotate every 5 seconds

      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <section className="w-full py-12 md:py-24 px-4 md:pl-10">
      <div className="flex flex-col lg:flex-row w-full">
        {/* Image Gallery */}
        <div className="lg:w-1/2 w-full lg:pr-10 mb-8 lg:mb-0 order-1 lg:order-2">
          <div className="relative h-64 md:h-[26rem] lg:h-[29rem] w-full overflow-hidden">
            {images.map((image, index) => (
              <div
                key={image._key || index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <Image
                  src={urlFor(image).url()}
                  alt={`A to Zee Switchgear Team ${index + 1}`}
                  width={1920}
                  height={1280}
                  quality={100}
                  priority={index === 0}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: 'center center' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2 lg:pl-8 pr-0 md:pr-8 order-2 lg:order-1">
          <div className="text-left mb-8">
            <h1 className={`text-lg font-bold text-gray-800 mb-4 tracking-wider ${dmsans.className}`}>
              ABOUT US
            </h1>
            <p className={`text-2xl md:text-3xl font-semibold tracking-wide text-black mb-6 md:mb-8 leading-tight ${dmsans.className}`}>
              A to Zee Switchgear Engineering with Schneider Electric
            </p>

            <p className={`text-gray-700 mb-8 md:mb-10 leading-relaxed font-normal text-base md:text-sm tracking-wider ${dmsans.className}`}>
              A to Zee Systems offers comprehensive electro-technical solutions, from low-voltage panels to process automation, serving industries nationwide. With 25 years of expertise, we provide safe power distribution and innovative technologies under one roof. Our patented products and customer-specific project management ensure efficient, end-to-end solutions. Backed by a vast sales and service network, we combine local tradition with global reach. Trusted by industries and power suppliers, we deliver reliable, integrated systems for complex electrical needs. A to Zee Systems—your partner for cutting-edge power distribution and automation.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-block" // Added to maintain button layout
              >
                <span 
                  className={`text-black font-semibold px-4 py-3 bg-white hover:bg-gray-100 transition uppercase tracking-wider rounded-sm border border-gray-900 flex items-center gap-2 group ${dmsans.className}`}
                >
                  READ MORE
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={14} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;