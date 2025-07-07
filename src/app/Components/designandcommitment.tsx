// import React from 'react';
// import Image from 'next/image';

// const DesignCommitment = () => {
//   return (
//     <div className="bg-white">
//       {/* Design & Commitment Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
//             DESIGN & COMMITMENT
//           </h1>
//           <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <div className="space-y-6 text-lg text-gray-700">
//             <p>
//               Designing and pricing a complete electrical equipment solution from a single line diagram can be very demanding, time consuming and often inaccurate task.
//             </p>
            
//             <p>
//               To aid this, CAD package is available which provides professional drawings, material cost, labor, weight and components listing for all electrical panels.
//             </p>
            
//             <p>
//               This helps us to ensure that panels are constructed in type tested design and reduce chances of error & hazards.
//             </p>
            
//             <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-amber-600">
//               <p className="font-medium">
//                 A complete set of document is supplied with each board including:
//               </p>
//               <ul className="mt-3 space-y-2">
//                 {['Electrical diagrams', 'Mechanical layouts', 'Components listing', 'Testing reports'].map((item) => (
//                   <li key={item} className="flex items-start">
//                     <svg className="h-5 w-5 text-amber-600 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
          
//           <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
//             <Image 
//               src="/switch.png" 
//               alt="CAD Design Process" 
//               fill
//               className="object-cover"
//               sizes="(max-width: 768px) 100vw, 50vw"
//             />
//           </div>
//         </div>
        
//         <div className="mt-16 bg-amber-50 p-8 rounded-lg border border-amber-100">
//           <p className="text-xl italic text-center text-gray-800 font-medium">
//             "The best, most well suited panels in the world are not good enough if they're not where you want them and when you need them."
//           </p>
//           <p className="mt-6 text-center">
//             A to Zee has invested in the latest technology to ensure that when you buy our products, your delivery requirements are satisfied.
//           </p>
//         </div>
//       </section>

//       {/* A To Zee Standard Section */}
//       <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 font-serif">
//               A TO ZEE STANDARD
//             </h1>
//             <div className="w-24 h-1 bg-amber-600 mx-auto"></div>
//           </div>
          
//           <div className="mb-12 text-center max-w-4xl mx-auto">
//             <p className="text-lg text-gray-700">
//               The Modern Electrical Switchgear is an essential part of today's technological society. Many vital functions rely on Switchgear.
//             </p>
//             <p className="text-lg text-gray-700 mt-4">
//               The technical requirements and demands for safety have increased over the years and have become international due to the harmonisation of standards.
//             </p>
//           </div>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//             <div>
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 A to Zee Offers
//               </h2>
//               <p className="text-lg text-gray-700 mb-8">
//                 A full range of Low Voltage Switchgear system with various characteristic features.
//               </p>
              
//               <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                 A System With...
//               </h2>
//               <ul className="space-y-4">
//                 {[
//                   "Maximum flexibility in design & development by using CAD (Computer Aided Drawing) facility by our skilled engineers",
//                   "Computerized selection of superior components from world renowned brands as per specification",
//                   "Electrolytic copper busbar of sized amperage with high short circuit level",
//                   "Finish with polyester epoxy powder coating & treatment by phosphate in one line",
//                   "Optimum possibilities for extension and services",
//                   "The technical & commercial advantages, obvious and in balance"
//                 ].map((item, index) => (
//                   <li key={index} className="flex items-start">
//                     <span className="flex-shrink-0 bg-amber-100 text-amber-600 p-1 rounded-full mr-3 mt-1">
//                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                       </svg>
//                     </span>
//                     <span className="text-gray-700">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
            
//             <div>
//               <div className="bg-white p-8 rounded-lg shadow-md h-full">
//                 <h2 className="text-2xl font-bold text-gray-800 mb-6">
//                   Quality Conscious...
//                 </h2>
//                 <p className="text-xl font-medium text-gray-800 mb-6">
//                   "Quality is prime concern in our enterprise"
//                 </p>
//                 <p className="text-gray-700 mb-6">
//                   At A to Zee, priority is given to meeting the client's needs on time & within budget through the excellence of its products and services.
//                 </p>
//                 <div className="bg-amber-50 p-6 rounded-lg">
//                   <h3 className="text-lg font-bold text-gray-800 mb-4">
//                     A to Zee Priority for their Customers:
//                   </h3>
//                   <div className="grid grid-cols-2 gap-4 text-black">
//                     {['Action', 'Appreciation', 'Price', 'Services', 'Quality'].map((item) => (
//                       <div key={item} className="flex items-center">
//                         <div className="bg-amber-100 text-amber-800 p-2 rounded-full mr-3">
//                           <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                           </svg>
//                         </div>
//                         <span className="font-medium">{item}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default DesignCommitment;