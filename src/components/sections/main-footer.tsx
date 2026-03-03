import React from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Linkedin, 
  Twitter, 
  Phone, 
  Mail, 
  MapPin, 
  Briefcase,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Facebook size={18} fill="currentColor" />, href: "#" },
    { icon: <Instagram size={18} />, href: "#" },
    { icon: <Youtube size={18} fill="currentColor" />, href: "#" },
    { icon: <Twitter size={18} fill="currentColor" />, href: "#" },
    { icon: <Linkedin size={18} fill="currentColor" />, href: "#" },
  ];

  const recentBlogs = [
    "Know About Professional Fashion Courses",
    "Fashion Designing Courses Punjab",
    "India's Best Fashion Designing Courses",
    "Best Fashion Designing Institute in India",
    "Things to know about Fashion Designing Institute",
    "Fashion Design College in India"
  ];

  return (
    <footer className="bg-[#111111] text-white pt-[60px] pb-10 font-body">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Column 1: About & Logo */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/Logo-150x150-13.png"
                alt="IIFT - Indian Institute of Fashion Technology & Design" 
                width={100} 
                height={100}
                className="object-contain"
              />
            </div>
            <p className="text-[14px] leading-[1.8] text-white/80 mb-8 max-w-[280px]">
              IIFT is the best fashion Designing college in India with 40+ fashion design courses offering like diploma, undergraduate and postgraduate programs. IIFT ensures 100% placements and is awarded two years consecutively as Best Fashion Institute in Chandigarh, Kolkata India.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.href} 
                  className="hover:text-[#ed2024] transition-colors duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Recent Blogs */}
          <div>
            <h4 className="text-[20px] font-display font-bold mb-8 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[2px] after:bg-[#ed2024]">
              Our Recent Blogs
            </h4>
            <ul className="space-y-4">
              {recentBlogs.map((blog, idx) => (
                <li key={idx} className="group">
                  <a href="#" className="text-[14px] text-white/80 hover:text-white flex items-start leading-[1.4] transition-colors">
                    <span className="hidden group-hover:block mr-2 text-[#ed2024]">•</span>
                    {blog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Part 1 */}
          <div>
            <h4 className="text-[20px] font-display font-bold mb-8 uppercase tracking-wider relative after:content-[''] after:absolute after:bottom-[-10px] after:left-0 after:w-10 after:h-[2px] after:bg-[#ed2024]">
              Contact
            </h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Phone size={20} className="text-white fill-white/10" />
                </div>
                <div className="text-[14px] text-white/80">
                  <p className="mb-1 leading-none">0172 4007918</p>
                  <p className="leading-none">+91-9041766699</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <Mail size={20} className="text-white fill-white/10" />
                </div>
                <a href="mailto:info@iift.in" className="text-[14px] text-white/80 hover:text-white transition-colors">
                  info@iift.in
                </a>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <MapPin size={20} className="text-white fill-white/10" />
                </div>
                <p className="text-[14px] text-white/80 leading-[1.6]">
                  Chandigarh Campus: SCO 479-480 Sector 35-C, Chandigarh
                </p>
              </div>
            </div>
          </div>

          {/* Column 4: Contact Part 2 */}
          <div className="pt-0 lg:pt-[54px]">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <MapPin size={20} className="text-white fill-white/10" />
                </div>
                <p className="text-[14px] text-white/80 leading-[1.6]">
                  Mohali Campus: Plot No. 603 Industrial Area Phase 9, Mohali
                </p>
              </div>
              <div className="flex items-start gap-4">
                <div className="mt-1 shrink-0">
                  <MapPin size={20} className="text-white fill-white/10" />
                </div>
                <p className="text-[14px] text-white/80 leading-[1.6]">
                  Kolkata Campus: KB-22, SALTLAKE, near Amri Hospital, Sector 3, Bidhannagar, Kolkata, West Bengal 700098
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="shrink-0">
                  <Briefcase size={20} className="text-white" />
                </div>
                <a href="#" className="text-[14px] text-white/80 hover:text-white transition-colors">
                  Work With Us
                </a>
              </div>
              <div className="mt-4">
                <a 
                  href="#" 
                  className="text-[14px] font-bold text-white hover:text-[#ed2024] flex items-center gap-2 uppercase tracking-wide transition-colors group"
                >
                  Get Directions 
                  <span className="text-[18px] group-hover:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer */}
        <div className="mt-[60px] pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[12px] text-white/60 text-center md:text-left">
              Copyright © 2026 Indian Institute of Fashion Technology & Design
            </p>
            <div className="flex items-center gap-6 text-[12px] text-white/60">
              <a href="#" className="hover:text-white transition-colors">Terms of use</a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span className="text-white/20">|</span>
              <a href="#" className="hover:text-white transition-colors">Payment Policies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;