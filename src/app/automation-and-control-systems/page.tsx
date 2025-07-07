import React from 'react';
import Image from 'next/image';
import Navbar from '@/app/Components/navbar';
import Footer from '@/app/Components/footer';
import { Roboto } from 'next/font/google';
import { DM_Sans } from 'next/font/google'

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['300', '400', '500', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

const SupportServices = () => {
    return (
        <>
            <Navbar />
            <div className={`w-full px-0 py-12 md:py-16 ${roboto.variable} font-roboto`}>
                <div className="flex flex-col lg:flex-row gap-0">
                    {/* Text Content - Left Side */}
                    <div className="lg:w-1/2 pl-0">
                        <div className="px-4 sm:px-6">
                            <h1 className={`text-4xl font-bold text-gray-900 pb-6 border-b pl-6 border-gray-200 tracking-widest ${dmsans.className}`}>
                               Industrial Automation & Control System Solutions
                            </h1>

                            <div className="space-y-6 mt-8 text-gray-800">
                                <div className="space-y-5 pl-6">
                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                      Our expert team provides 24/7 support for industrial automation systems including PLC programming, DCS configuration, SCADA system integration, and HMI development. We implement cutting-edge solutions using Siemens, Rockwell, Schneider, and other leading automation platforms to optimize your production processes.
                                    </p>

                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                      We specialize in advanced control strategies including PID loop tuning, cascade control, and model predictive control (MPC). Our engineers implement Industry 4.0 solutions with IIoT connectivity, data analytics, and predictive maintenance algorithms to maximize your operational efficiency.
                                    </p>

                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-2">
                                      From system commissioning to lifecycle maintenance, we provide comprehensive documentation, cybersecurity hardening, firmware updates, and performance optimization. Our solutions are tailored to your specific industry requirements whether in manufacturing, oil & gas, utilities, or process industries.
                                    </p>
                                </div>

                                <div className="mt-10 pt-6 border-t border-gray-200">
                                    <h3 className={`text-3xl font-bold text-gray-900 pl-6 tracking-widest ${dmsans.className}`}>
                                        Complete Automation Lifecycle Management
                                    </h3>
                                    <p className="text-lg leading-relaxed text-gray-600 font-roboto tracking-wider pt-4 pl-6">
                                        Our end-to-end services include control system migration, legacy system modernization, OPC UA integration, and MES/ERP system connectivity to create a fully digitalized production environment.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image - Right Side */}
                    <div className="lg:w-1/2 flex items-center justify-center pr-6">
                        <div className="relative w-full h-[380px] lg:h-[480px] overflow-hidden shadow-lg">
                            <Image
                                src="/am.jpg"
                                alt="Industrial automation control system with PLC, SCADA, and HMI interfaces"
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

export default SupportServices;