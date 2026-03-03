import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Twitter as SnapChat,
  Phone,
  Mail,
  MapPin,
  Briefcase
} from 'lucide-react';

/**
 * Footer component for the Indian Institute of Fashion Design (IIFT).
 * Styled to be pixel-perfect based on the provided design system and screen references.
 * Features a dark theme (Near Black #111111) as specified in the instructions.
 */
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111111] text-white pt-[60px] pb-[20px] font-body selection:bg-brand-red selection:text-white">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">

          {/* Column 1: Institute Info & Socials */}
          <div className="md:col-span-4 flex flex-col items-start gap-6">
            <div className="bg-white p-2 rounded-full overflow-hidden inline-block mb-2">
              <Image
                src="/logo-iiftd.png"
                alt="IIFT - Indian Institute of Fashion Technology & Design"
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            <p className="text-[13px] leading-[1.8] text-[#cccccc] font-light max-w-[340px]">
              IIFT is the best fashion Designing college in India with 40+ fashion design courses offering like diploma, undergraduate and postgraduate programs. IIFT ensures 100% placements and is awarded two years consecutively as Best Fashion Institute in Chandigarh, Kolkata India.
            </p>

            <div className="flex flex-wrap gap-3 mt-4">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <Facebook size={16} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <Instagram size={16} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <Youtube size={16} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <span className="font-bold text-[14px]">X</span>
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <Linkedin size={16} strokeWidth={2.5} />
              </a>
              {/* Using Snapchat-like icon for diversity as requested by screen references */}
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <SnapChat size={16} strokeWidth={2.5} />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full border border-gray-600 hover:bg-brand-red hover:border-brand-red transition-all duration-300">
                <span className="font-bold text-[14px]">P</span>
              </a>
            </div>
          </div>

          {/* Column 2: Our Recent Blogs */}
          <div className="md:col-span-3">
            <h4 className="text-[20px] font-bold font-display mb-8 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[3px] after:bg-brand-red">
              Our Recent Blogs
            </h4>
            <ul className="space-y-4 text-[14px] text-[#cccccc]">
              <li><Link href="/blog/know-about-professional-fashion-courses" className="hover:text-brand-red transition-colors">Know About Professional Fashion Courses</Link></li>
              <li><Link href="/blog/fashion-designing-courses-punjab" className="hover:text-brand-red transition-colors">Fashion Designing Courses Punjab</Link></li>
              <li><Link href="/blog/indias-best-fashion-designing-courses" className="hover:text-brand-red transition-colors">India’s Best Fashion Designing Courses</Link></li>
              <li><Link href="/blog/best-fashion-designing-institute-india" className="hover:text-brand-red transition-colors">Best Fashion Designing Institute in India</Link></li>
              <li><Link href="/blog/things-to-know-about-fashion-designing-institute" className="hover:text-brand-red transition-colors">Things to know about Fashion Designing Institute</Link></li>
              <li><Link href="/blog/fashion-design-college-india" className="hover:text-brand-red transition-colors">Fashion Design College in India</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="md:col-span-5">
            <h4 className="text-[20px] font-bold font-display mb-8 relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[3px] after:bg-brand-red">
              Contact
            </h4>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Phone className="text-brand-red flex-shrink-0 mt-1" size={18} />
                <div className="text-[14px] text-[#cccccc]">
                  <p className="block">0172 4007918</p>
                  <p className="block">+91-9041766699</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-brand-red flex-shrink-0" size={18} />
                <a href="mailto:info@iift.in" className="text-[14px] text-[#cccccc] hover:text-white transition-colors">info@iift.in</a>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-brand-red flex-shrink-0 mt-1" size={18} />
                <div className="text-[14px] text-[#cccccc]">
                  <p className="font-semibold text-white">Chandigarh Campus:</p>
                  <p>SCO 479-480, Sector 35-C, Chandigarh</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-brand-red flex-shrink-0 mt-1" size={18} />
                <div className="text-[14px] text-[#cccccc]">
                  <p className="font-semibold text-white">Mohali Campus:</p>
                  <p>Plot No. 603, Industrial Area Phase 9, Mohali</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-brand-red flex-shrink-0 mt-1" size={18} />
                <div className="text-[14px] text-[#cccccc]">
                  <p className="font-semibold text-white">Kolkata Campus:</p>
                  <p>KB-22, SALTLAKE, near Amri Hospital, Sector 3, Bidhannagar, Kolkata, West Bengal 700098</p>
                  <a href="#" className="inline-block mt-2 text-[12px] text-white hover:text-brand-red transition-colors border-b border-white hover:border-brand-red pb-[1px] font-semibold tracking-wider uppercase">
                    GET DIRECTIONS →
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Briefcase className="text-brand-red flex-shrink-0" size={18} />
                <Link href="/career" className="text-[14px] text-[#cccccc] hover:text-white transition-colors">Work With Us</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright and Legal */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-500 font-medium">
            Copyright © {currentYear} Indian Institute of Fashion Technology & Design
          </p>

          <div className="flex flex-wrap justify-center gap-4 text-[12px] text-gray-500 uppercase tracking-wider font-semibold">
            <Link href="/terms-of-use" className="hover:text-brand-red transition-colors">Terms of use</Link>
            <span className="text-gray-700">|</span>
            <Link href="/privacy-policy" className="hover:text-brand-red transition-colors">Privacy Policy</Link>
            <span className="text-gray-700">|</span>
            <Link href="/payment-policies" className="hover:text-brand-red transition-colors">Payment Policies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;