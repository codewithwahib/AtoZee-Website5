"use client"
import React, { useState } from 'react';
import { client } from '@/sanity/lib/client';
import { FaChevronDown, FaChevronUp, FaArrowRight } from 'react-icons/fa';
import { PortableText, PortableTextReactComponents } from '@portabletext/react';
import Navbar from '../../Components/navbar';
import Footer from '../../Components/footer';
import ContactBar from '../../Components/topbar';
import { DM_Sans } from 'next/font/google';
import Link from 'next/link';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

interface PortableTextMark {
  _type: string;
  href?: string;
}

interface PortableTextBlock {
  _type: string;
  children: {
    _type: string;
    text: string;
    marks?: string[];
  }[];
  markDefs?: PortableTextMark[];
}

interface JobOpening {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experienceLevel: string;
  description: PortableTextBlock[];
  requirements: PortableTextBlock[];
  postedDate: string;
  applicationDeadline?: string;
}

interface PortableTextLinkProps {
  value?: {
    href?: string;
  };
  children?: React.ReactNode;
}

interface PortableTextBlockProps {
  children?: React.ReactNode;
}

const portableTextComponents: Partial<PortableTextReactComponents> = {
  marks: {
    link: ({ value, children }: PortableTextLinkProps) => {
      return (
        <a href={value?.href} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    },
  },
  block: {
    normal: ({ children }: PortableTextBlockProps) => <p className="mb-2">{children}</p>,
  },
};

async function getJobOpenings(): Promise<JobOpening[]> {
  const query = `*[_type == "career"] {
    _id,
    title,
    department,
    location,
    type,
    experienceLevel,
    description,
    requirements,
    postedDate,
    applicationDeadline
  } | order(postedDate desc)`;
  return await client.fetch(query);
}

export default function CurrentOpenings() {
  const [jobs, setJobs] = React.useState<JobOpening[]>([]);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    getJobOpenings()
      .then(data => {
        setJobs(data);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching jobs:', error);
        setIsLoading(false);
      });
  }, []);

  const toggleJobDetails = (id: string) => {
    setExpandedJobId(expandedJobId === id ? null : id);
  };

  return (
    <>
      <ContactBar />
      <Navbar />
      
      <main className="min-h-screen">
        <div className="w-full py-4">
          {isLoading ? (
            <div className="text-center py-4"></div>
          ) : jobs.length === 0 ? (
            <div className="text-center py-4 text-gray-500">
              Currently no job openings available.
            </div>
          ) : (
            <div className="space-y-2 mx-auto w-[90%] max-w-4xl">
              {jobs.map((job) => (
                <div key={job._id} className="border border-gray-200 rounded-md overflow-hidden w-full">
                  <div 
                    className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => toggleJobDetails(job._id)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => e.key === 'Enter' && toggleJobDetails(job._id)}
                  >
                    <h2 className={`text-lg font-bold text-gray-900 ${dmsans.className}`}>
                      {job.title}
                    </h2>
                    {expandedJobId === job._id ? (
                      <FaChevronUp className="text-gray-500 text-sm" />
                    ) : (
                      <FaChevronDown className="text-gray-500 text-sm" />
                    )}
                  </div>

                  {expandedJobId === job._id && (
                    <div className="p-3 pt-3 border-t border-gray-100 space-y-3">
                      <div className="grid grid-cols-1 gap-2">
                        <div>
                          <h3 className={`text-lg font-bold text-[#8B5E3C] ${dmsans.className}`}>Department:</h3>
                          <p className={`text-sm pt-2 font-medium ${dmsans.className}`}>{job.department}</p>
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold text-[#8B5E3C] ${dmsans.className}`}>Location:</h3>
                          <p className={`text-sm pt-2 font-medium ${dmsans.className}`}>{job.location}</p>
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold text-[#8B5E3C] ${dmsans.className}`}>Job Type:</h3>
                          <p className={`text-sm pt-2 font-medium ${dmsans.className}`}>{job.type}</p>
                        </div>
                        <div>
                          <h3 className={`text-lg font-bold text-[#8B5E3C] ${dmsans.className}`}>Experience Level:</h3>
                          <p className={`text-sm pt-2 font-medium ${dmsans.className}`}>{job.experienceLevel}</p>
                        </div>
                      </div>

                      <div>
                        <h3 className={`text-lg font-bold text-[#8B5E3C] ${dmsans.className}`}>Job Description:</h3>
                        <div className={`text-sm pt-2 font-medium ${dmsans.className}`}>
                          <PortableText
                            value={job.description}
                            components={portableTextComponents}
                          />
                        </div>
                      </div>
                      
                      <div>
                        <h3 className={`text-lg font-bold text-[#8B5E3C] ${dmsans.className}`}>Requirements:</h3>
                        <ul className={`text-sm pt-2 font-medium ${dmsans.className}`}>
                          {job.requirements?.map((req, i) => (
                            <li key={i}>
                              <PortableText value={req} components={portableTextComponents} />
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-2">
                        <div className={`text-sm font-medium ${dmsans.className}`}>
                          <div>
                            Posted: {new Date(job.postedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </div>
                          {job.applicationDeadline && (
                            <div>
                              Apply by: {new Date(job.applicationDeadline).toLocaleDateString('en-US', {
                                year: 'numeric',
                                month: 'short',
                                day: 'numeric'
                              })}
                            </div>
                          )}
                        </div>
                        <Link
                          href={`/careers/apply-now?job=${encodeURIComponent(job.title)}`}
                          className={`group px-3 py-1 border border-[#8B5E3C] text-[#8B5E3C] hover:text-white text-sm font-bold rounded hover:bg-[#8B5E3C] transition-colors ${dmsans.className} flex items-center gap-1 sm:ml-auto`}
                        >
                          APPLY NOW
                          <FaArrowRight className="group-hover:translate-x-1 transition-transform" size={10} />
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}