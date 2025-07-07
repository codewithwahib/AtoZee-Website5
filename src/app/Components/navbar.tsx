"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { DM_Sans } from 'next/font/google';

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

const navItems = [
  { href: "/", label: "Home" },
  { href: "/product", label: "Products" },
  { href: "/about", label: "About Us" },
  { 
    label: "Careers",
    subItems: [
      { href: "/careers/introduction", label: "Introduction" },
      { href: "/careers/training-program", label: "Training Program" },
      { href: "/careers/current-openings", label: "Current Openings" },
      { href: "/careers/apply-now", label: "Apply Now" },
    ]
  },
  { href: "/our-clients", label: "Our Clients" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [careersHover, setCareersHover] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleCareersMenu = () => {
    if (isMobile) {
      setCareersHover(!careersHover);
    }
  };

  return (
    <nav className={`relative bg-white text-gray-900 border-t border-b border-gray-300 ${dmsans.className}`}>
      <div className="flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/quality.png"
            alt="Logo"
            width={500}
            height={550}
            priority
            className="w-52 md:w-68 lg:w-76"
          />
        </Link>

        {/* Desktop Nav links */}
        <div className="hidden lg:flex items-center gap-8 ml-12">
          {navItems.map((item) => (
            item.subItems ? (
              <div 
                key={item.label}
                className="relative group"
                onMouseEnter={() => setCareersHover(true)}
                onMouseLeave={() => setCareersHover(false)}
              >
                <div className="flex items-center cursor-pointer">
                  <span
                    className={`px-4 py-3 rounded-sm transition-all duration-200 text-sm xl:text-md tracking-wider ${
                      item.subItems.some(subItem => pathname === subItem.href)
                        ? "bg-[#EEDFCC] text-[#6B4F3B]"
                        : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                    }`}
                  >
                    {item.label}
                  </span>
                  <svg
                    className={`w-6 h-6 ml-1 transition-transform duration-200 ${
                      careersHover ? "rotate-180" : ""
                    } ${item.subItems.some(subItem => pathname === subItem.href) 
                      ? "text-[#6B4F3B]" 
                      : "text-[#8B5E3C]"}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                {careersHover && (
                  <div className="absolute left-0 mt-0 w-56 bg-white shadow-lg rounded-sm z-50 border border-gray-200 overflow-hidden">
                    {item.subItems.map((subItem, index) => (
                      <div key={subItem.href}>
                        <Link
                          href={subItem.href}
                          className={`block px-4 py-3 text-sm tracking-wider ${
                            pathname === subItem.href
                              ? "bg-[#EEDFCC] text-[#6B4F3B]"
                              : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                          }`}
                        >
                          {subItem.label}
                        </Link>
                        {index < item.subItems.length - 1 && (
                          <hr className="border-t border-gray-200 mx-2" />
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-3 rounded-sm transition-all duration-200 text-sm xl:text-md tracking-wider ${
                  pathname === item.href
                    ? "bg-[#EEDFCC] text-[#6B4F3B]"
                    : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                }`}
              >
                {item.label}
              </Link>
            )
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-[#8B5E3C] focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && isMobile && (
        <div className="lg:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navItems.map((item) => (
              item.subItems ? (
                <div key={item.label}>
                  <button
                    onClick={toggleCareersMenu}
                    className={`w-full flex justify-between items-center px-4 py-3 rounded-sm text-sm tracking-wider ${
                      item.subItems.some(subItem => pathname === subItem.href)
                        ? "bg-[#EEDFCC] text-[#6B4F3C]"
                        : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                    }`}
                  >
                    <span>{item.label}</span>
                    <svg
                      className={`w-5 h-5 transition-transform duration-200 ${
                        careersHover ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {careersHover && (
                    <div className="pl-6 mt-2 space-y-2 rounded-sm overflow-hidden border-l border-gray-200">
                      {item.subItems.map((subItem, index) => (
                        <div key={subItem.href}>
                          <Link
                            href={subItem.href}
                            onClick={() => setIsOpen(false)}
                            className={`block px-4 py-2 text-xs tracking-wider ${
                              pathname === subItem.href
                                ? "bg-[#EEDFCC] text-[#6B4F3C]"
                                : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                            }`}
                          >
                            {subItem.label}
                          </Link>
                          {index < item.subItems.length - 1 && (
                            <hr className="border-t border-gray-200 mx-2" />
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-sm text-sm tracking-wider ${
                    pathname === item.href
                      ? "bg-[#EEDFCC] text-[#6B4F3C]"
                      : "text-[#8B5E3C] hover:bg-[#F6EBD9] hover:text-[#6B4F3B]"
                  }`}
                >
                  {item.label}
                </Link>
              )
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}