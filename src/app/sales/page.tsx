import React from 'react';
import Image from 'next/image';
import Navbar from '../Components/navbar';
import Footer from '@/app/Components/footer';
import { Roboto } from 'next/font/google';
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700', // or use ['700'] if you need multiple weights
});

// Configure Roboto font with all required weights
const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

const CEOMessage = () => {
    return (
        <>
            <Navbar />
            <div className={`w-full px-0 py-12 md:py-16 ${roboto.variable} font-roboto`}>
                <div className="flex flex-col lg:flex-row gap-0">
                    {/* Text Content - Left Side */}
                    <div className="lg:w-1/2 pl-0">
                        <div className="px-4 sm:px-6">
                            <h1 className={`text-4xl font-bold text-gray-900 pb-6 border-b pl-6 border-gray-200 tracking-widest ${dmsans.className}`}>
                                Expert Sales & Support
                            </h1>

                            <div className="space-y-6 mt-8 text-gray-800">
                                <div className="space-y-5 pl-6">
                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                       At A to Zee Switchgear Engineering, our sales team is dedicated to understanding your needs and providing personalized solutions. We believe in building lasting relationships based on trust, transparency, and technical expertise.

  </p>

                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                       From initial consultation to project delivery, our experts guide you through every step — offering clear communication, competitive pricing, and timely responses to your queries.

  </p>

                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                        We don’t just sell products; we deliver value by helping you choose the right switchgear solutions that enhance safety, efficiency, and reliability in your operations.

 </p>

                                    {/* <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                        Customers can access our entire spectrum of products and services
                                        via an extensive network of sales & services – this includes everything
                                        through to global servicing. They benefit from a broad range of
                                        products, including several patented in-house inventions, and from
                                        flexible and customer-specific project management. </p> */}
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-200">
                                    <h3 className={`text-3xl font-bold text-gray-900 pl-6 tracking-widest ${dmsans.className}`}>
                                        Empowering your business with solutions that work.


                                    </h3>
                                    {/* <p className={`text-lg font-semibold text-gray-600 mt-2 pl-7 pt-2 tracking-widest ${dmsans.className}`}>
                                        (SMC) Pvt. Ltd.
                                    </p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="lg:w-1/2 flex items-center justify-center pr-6">
                        <div className="relative w-full h-[380px] lg:h-[480px] overflow-hidden shadow-lg">
                            <Image
                                src="/sale.png"
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