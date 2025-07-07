// 'use client';
// import React from 'react';
// import Image from 'next/image';

// const products = [
//   {
//     title: 'Low Voltage Switchgear',
//     image: '/p111.png',
//     link: '/products/power-distribution',
//   },
//   {
//     title: 'BlokSeT',
//     image: '/p111.png',
//     link: '/products/energy-management',
//     logo: '/s1.png'
//   },
//   {
//     title: 'PrismaSeT',
//     image: '/p111.png',
//     link: '/products/protection-devices',
//     logo: '/s1.png'
//   },
//   {
//     title: 'Spacial SF Universal Enclosure',
//     image: '/p111.png',
//     link: '/products/protection-devices',
//     logo: '/s1.png'
//   },
//   {
//     title: 'Medium Voltage Switchgear',
//     image: '/p111.png',
//     link: '/products/control-panels',
//   },
//   {
//     title: 'Distribution Box',
//     image: '/p111.png',
//     link: '/products/distribution-boards',
//   },
//   {
//     title: 'Synchronization Panel',
//     image: '/p111.png',
//     link: '/products/synchronization',
//   },
//   {
//     title: 'Active Harmonic Filter Solution',
//     image: '/p111.png',
//     link: '/products/harmonic-filters',
//   },
//   {
//     title: 'KIOSK Substations',
//     image: '/p111.png',
//     link: '/products/substations',
//   },
//   {
//     title: 'Low Voltage Busway System',
//     image: '/p111.png',
//     link: '/products/busway-systems',
//   },
//   {
//     title: 'Dry Type Transformer',
//     image: '/p111.png',
//     link: '/products/transformers',
//   },
//   {
//     title: 'VSD (Variable Speed Drives)',
//     image: '/p111.png',
//     link: '/products/variable-speed-drives',
//   }
// ];

// export default function Products() {
//   return (
//     <section className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 font-sans">
//       {/* Banner Section */}
//       <div className="relative w-screen h-80 md:h-96 lg:h-[30rem] mb-12 -ml-4 sm:-ml-6">
//         <Image
//           src="/product2.png"
//           alt="Products Banner"
//           layout="fill"
//           objectFit="cover"
//           className="brightness-75 object-left"
//           priority
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-serif text-white text-center px-4 tracking-wider shadow-lg">
//             &quot;OUR PRODUCTS&quot;
//           </h1>
//           <p className="text-center text-white text-base sm:text-lg md:text-xl font-light mt-4 max-w-xs sm:max-w-md md:max-w-2xl mx-auto tracking-wide md:tracking-widest px-4">
//             Explore our trusted range of switchgear and power management solutions.
//           </p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 sm:px-6">
//         <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 pt-8 md:pt-10">
//           {products.map((product, index) => (
//             <div
//               key={index}
//               className="w-full group relative"
//               data-aos="fade-up"
//               data-aos-delay={index * 100}
//             >
//               {product.logo && (
//                 <div className="absolute top-0 left-0 z-10 bg-white p-1 md:p-2 shadow-sm md:shadow-md border-b border-r border-black rounded-br-md md:rounded-br-lg">
//                   <Image
//                     src={product.logo}
//                     alt="Brand logo"
//                     width={80}
//                     height={32}
//                     className="h-6 md:h-8 w-auto object-contain"
//                   />
//                 </div>
//               )}

//               <a
//                 href={product.link}
//                 className={`h-full bg-white rounded-sm shadow-sm md:shadow-md lg:shadow-lg border border-black hover:shadow-md md:hover:shadow-lg lg:hover:shadow-xl transition duration-300 block flex flex-col ${product.logo ? 'pt-6 md:pt-8' : ''}`}
//               >
//                 <div className="w-full h-40 sm:h-48 md:h-56 lg:h-64 p-2 md:p-3 lg:p-4 flex items-center justify-center bg-[#F9F9F9] rounded-t-sm md:rounded-t-lg border-b border-black relative overflow-hidden">
//                   <Image
//                     src={product.image}
//                     alt={`${product.title} product illustration`}
//                     width={300}
//                     height={256}
//                     className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
//                   />
//                 </div>
//                 <div className="p-3 md:p-4 lg:p-6 text-center flex-grow">
//                   <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-light tracking-wider text-black group-hover:text-black transition-colors mb-1 md:mb-2">
//                     {product.title}
//                   </h3>
//                 </div>
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }




'use client';
import React from 'react';
import Image from 'next/image';

const products = [
  {
    title: 'Low Voltage Switchgear',
    image: '/p111.png',
    link: '/products/power-distribution',
  },
  {
    title: 'BlokSeT',
    image: '/p111.png',
    link: '/products/energy-management',
    logo: '/s1.png'
  },
  {
    title: 'PrismaSeT',
    image: '/p111.png',
    link: '/products/protection-devices',
    logo: '/s1.png'
  },
  {
    title: 'Spacial SF Universal Enclosure',
    image: '/p111.png',
    link: '/products/protection-devices',
    logo: '/s1.png'
  },
  {
    title: 'Medium Voltage Switchgear',
    image: '/p111.png',
    link: '/products/control-panels',
  },
  {
    title: 'Distribution Box',
    image: '/p111.png',
    link: '/products/distribution-boards',
  },
  {
    title: 'Synchronization Panel',
    image: '/p111.png',
    link: '/products/synchronization',
  },
  {
    title: 'Active Harmonic Filter Solution',
    image: '/p111.png',
    link: '/products/harmonic-filters',
  },
  {
    title: 'KIOSK Substations',
    image: '/p111.png',
    link: '/products/substations',
  },
  {
    title: 'Low Voltage Busway System',
    image: '/p111.png',
    link: '/products/busway-systems',
  },
  {
    title: 'Dry Type Transformer',
    image: '/p111.png',
    link: '/products/transformers',
  },
  {
    title: 'VSD (Variable Speed Drives)',
    image: '/p111.png',
    link: '/products/variable-speed-drives',
  }
];

export default function Products() {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-white to-gray-50 font-sans overflow-hidden">
      {/* Banner Section - Full width with no right padding */}
      <div className="relative w-full h-64 md:h-80 lg:h-[28rem] xl:h-[32rem] mb-12 md:mb-16">
        <div className="absolute inset-0 w-screen">
          <Image
            src="/product2.png"
            alt="Products Banner"
            layout="fill"
            objectFit="cover"
            className="brightness-75 object-left"
            priority
          />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 h-full flex flex-col items-center justify-center">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-white text-center px-4 tracking-wider">
            OUR PRODUCTS
          </h1>
          <p className="text-center text-white text-base sm:text-md md:text-lg font-light mt-4 max-w-xs sm:max-w-md md:max-w-2xl mx-auto tracking-wide md:tracking-widest px-4">
            Explore our trusted range of switchgear and power management solutions.
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="w-full group relative"
            >
              {product.logo && (
                <div className="absolute top-0 left-0 z-10 bg-white p-1 sm:p-2 shadow-sm border-b border-r border-gray-800 rounded-br-sm sm:rounded-br-md">
                  <Image
                    src={product.logo}
                    alt="Brand logo"
                    width={80}
                    height={32}
                    className="h-5 sm:h-6 md:h-7 w-auto object-contain"
                  />
                </div>
              )}

              <a
                href={product.link}
                className={`h-full bg-white rounded-sm shadow-sm hover:shadow-md border border-gray-300 hover:border-gray-400 transition-all duration-300 block flex flex-col ${product.logo ? 'pt-5 sm:pt-6 md:pt-7' : ''}`}
              >
                <div className="w-full h-32 sm:h-40 md:h-48 lg:h-56 p-2 sm:p-3 flex items-center justify-center bg-gray-50 rounded-t-sm border-b border-gray-300 relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={`${product.title} product illustration`}
                    width={280}
                    height={240}
                    className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-2 sm:p-3 md:p-4 text-center flex-grow flex items-center justify-center">
                  <h3 className="text-xs sm:text-sm md:text-base font-medium text-gray-800 group-hover:text-black transition-colors">
                    {product.title}
                  </h3>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}