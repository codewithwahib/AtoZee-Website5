import { FaFacebook, FaYoutube, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SlCallIn } from "react-icons/sl";
import { TfiEmail } from "react-icons/tfi";
import { DM_Sans } from 'next/font/google';
import { MdOutlineMessage  } from "react-icons/md";

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-dm-sans'
});

const ContactBar = () => {
  return (
    <div className={`${dmSans.variable} font-sans bg-white text-black py-4 px-6 shadow-md border-t border-gray-200`}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Left Side - Email */}
        <div className="flex items-center">
          <a 
            href="mailto:info@atozee.net" 
            className="flex items-center gap-3 hover:text-blue-600 transition-colors group"
            aria-label="Email us"
          >
            <MdOutlineMessage  className="text-[#8B5E3C] text-md md:text-xl group-hover:scale-110 transition-transform" />
            <span className={`text-base md:text-xs font-medium tracking-wider ${dmSans.className}`}>
Get Free Inquiry            </span>
          </a>
        </div>


 <div className="hidden md:block h-8 w-px bg-gray-300 mx-4"></div>

 
         <div className="flex items-center">
          <a 
            href="mailto:info@atozee.net" 
            className="flex items-center gap-3 hover:text-blue-600 transition-colors group"
            aria-label="Email us"
          >
            <TfiEmail className="text-[#8B5E3C] text-md md:text-xl group-hover:scale-110 transition-transform" />
            <span className={`text-base md:text-xs font-medium tracking-wider ${dmSans.className}`}>
info@atozee.net            </span>
          </a>
        </div>
        
        {/* Vertical Divider - Only on larger screens */}
        <div className="hidden md:block h-8 w-px bg-gray-300 mx-4"></div>
        
        {/* Middle - Phone Number */}
        <div className="flex items-center">
          <a 
            href="tel:03218752630" 
            className="flex items-center gap-3 hover:text-blue-600 transition-colors group"
            aria-label="Call us"
          >
            <SlCallIn className="text-[#8B5E3C] text-md md:text-xl group-hover:scale-110 transition-transform" />
            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
              {/* <span className={`text-base font-semibold md:text-lg ${dmSans.className}`}>
                Talk to expert
              </span> */}
              <span className={`text-base md:text-xs font-medium tracking-wider ${dmSans.className}`}>
+92 321-8752630            </span>
            </div>

            
          </a>
        </div>


        
        
        {/* Vertical Divider - Only on larger screens */}
        <div className="hidden md:block h-8 w-px bg-gray-300 mx-4"></div>
        
        {/* Right Side - Social Media with dividers */}
        <div className="flex items-center gap-5 md:gap-6">
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#3b5998] transition-colors text-md"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#1DA1F2] transition-colors text-md"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <a 
            href="https://youtube.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#FF0000] transition-colors text-md"
            aria-label="YouTube"
          >
            <FaYoutube />
          </a>
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#0077B5] transition-colors text-md"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          
          <div className="h-6 w-px bg-gray-300"></div>
          
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#E1306C] transition-colors text-xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactBar;