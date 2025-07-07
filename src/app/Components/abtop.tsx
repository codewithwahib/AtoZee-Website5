// import React, { useState, useEffect } from 'react';

// const TextImageComponent: React.FC = () => {
//   const images = [
//     '/abtop.png',
//     '/abtop2.png',
//     '/abtop3.png',
//     '/sd.png',
//     // Add more images as needed
//   ];

//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => 
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 5000); // Change image every 5 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   const goToImage = (index: number) => {
//     setCurrentImageIndex(index);
//   };

//   return (
//     <div className="py-20 px-1 bg-white">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex flex-col lg:flex-row items-center">
//           {/* Text Content - Left Side */}
//           <div className="lg:w-1/2 lg:pr-12 lg:-ml-8 pr-10"> {/* Increased left margin and right padding */}
//             <h2 className="text-3xl md:text-4xl font-semibold font-serif tracking-wider text-black mb-6 md:mb-8 leading-tight">
//               Our Commitment to Excellence
//             </h2>
//             <p className="text-lg text-gray-700 font-bold italic mb-6">
//               Modern electrical switchgear is fundamental to today's technological infrastructure, with evolving international standards driving higher safety and technical requirements. A to Zee delivers a complete range of low-voltage switchgear systems featuring CAD-engineered designs, premium components from world-leading brands, high-capacity copper busbars, and durable polyester epoxy finishes. Our solutions offer exceptional flexibility, scalability, and balanced technical-commercial advantages to meet diverse operational needs.
//             </p>
//             <p className="text-lg text-gray-600 italic">
//               Quality forms the cornerstone of our operations at A to Zee. We prioritize timely, budget-conscious delivery of superior products while maintaining unwavering focus on customer satisfaction. Our approach is built on five pillars: Action, Appreciation, Competitive Pricing, Reliable Services, and Uncompromising Quality - ensuring every solution meets both technical specifications and business objectives.
//             </p>
//           </div>

//           {/* Image Carousel - Right Side */}
//           <div className="lg:w-1/2 lg:pl-12 lg:mr-4"> {/* Increased left padding and right margin */}
//             <div className="relative overflow-hidden shadow-2xl pb-[100%]"> {/* Square container */}
//               {images.map((image, index) => (
//                 <img
//                   key={index}
//                   src={image}
//                   alt={`Our team working ${index + 1}`}
//                   className={`w-full h-full object-cover transition-opacity duration-500 absolute top-0 left-0 ${
//                     index === currentImageIndex ? 'opacity-100' : 'opacity-0'
//                   }`}
//                 />
//               ))}
//               <div className="absolute inset-0 bg-blue-950/10 mix-blend-multiply" aria-hidden="true"></div>
              
//               {/* Navigation Dots */}
//               <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//                 {images.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => goToImage(index)}
//                     className={`w-3 h-3 rounded-full transition-colors ${
//                       index === currentImageIndex ? 'bg-white' : 'bg-white/50'
//                     }`}
//                     aria-label={`Go to image ${index + 1}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TextImageComponent;