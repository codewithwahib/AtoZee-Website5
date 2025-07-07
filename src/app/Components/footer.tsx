'use client';

import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { useState } from 'react';
import { DM_Sans } from 'next/font/google';
import { SlCallIn } from "react-icons/sl";
import { LuMapPin } from "react-icons/lu";
import { TfiEmail } from "react-icons/tfi";

const dmsans = DM_Sans({ 
  subsets: ['latin'],
  weight: '700',
});

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    
    try {
      const response = await fetch('https://formsubmit.co/ajax/hr@atozee.net', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    } catch {
      setMessage('An error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <footer className={`bg-white border-t border-[#e6dbcc] text-[#6B4F3B] py-8 ${dmsans.className}`}>
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between gap-8">
        
        {/* About Section - Moved more to the left */}
        <div className="flex-1 min-w-[200px] space-y-4">
          <h4 className="text-lg font-bold">About Us</h4>
          <p className="text-sm">
            We provide reliable and future-ready electrical solutions, serving industries with excellence and innovation since 2010.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition">
              <FaFacebookF />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition">
              <FaTwitter />
            </a>
            <a href="#" className="text-[#6B4F3B] hover:text-[#a67654] transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links - Centered */}
        <div className="flex-1 min-w-[200px] pl-10 space-y-4">
          <h4 className="text-lg font-bold">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#a67654] transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-[#a67654] transition">About Us</Link></li>
            <li><Link href="/services" className="hover:text-[#a67654] transition">Services</Link></li>
            <li><Link href="/projects" className="hover:text-[#a67654] transition">Projects</Link></li>
            <li><Link href="/contact" className="hover:text-[#a67654] transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Us - Right aligned */}
        <div className="flex-1 min-w-[200px] pr-16 space-y-4">
          <h4 className="text-lg font-bold">Contact Us</h4>
          <ul className="space-y-1 text-sm">
            <li className="flex items-center gap-2">
              <TfiEmail />
              <span>info@atozee.net</span>
            </li>
            <li className="flex items-center gap-2">
              <SlCallIn />
              <span>+92 321 8287151</span>
            </li>
            <li className="flex items-center gap-2">
              <LuMapPin />
              <span>Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Subscribe Section - Far right */}
        <div className="flex-1 min-w-[250px] space-y-4">
          <h4 className="text-lg font-bold">Stay Updated</h4>
          <p className="text-sm">
            Subscribe to our newsletter for the latest updates and exclusive offers.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your Email Address"
              required
              className="px-3 py-2 rounded-xl border border-[#d6c4b3] text-sm"
            />
            <button
              type="submit"
              disabled={submitting}
              className="px-4 py-2 bg-[#D3B683] rounded-xl text-[#6B4F3B] font-medium text-sm"
            >
              {submitting ? 'Subscribing...' : 'Subscribe Now'}
            </button>
            {message && <p className="text-xs text-center">{message}</p>}
          </form>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-8 mt-8 border-t border-[#e6dbcc] text-center text-xs">
        <p>&copy; {new Date().getFullYear()} A to Zee Switchgear Engineering. All rights reserved.</p>
      </div>
    </footer>
  );
}