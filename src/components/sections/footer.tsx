import React from 'react';
import Image from 'next/image';
import { 
  Facebook, 
  Instagram, 
  Youtube, 
  Twitter, 
  Linkedin, 
  MapPin, 
  Phone, 
  Mail, 
  BriefcaseBusiness,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-white pt-[80px] pb-[40px] font-body">
      <div className="container mx-auto px-5 lg:max-w-[1200px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          
          {/* Column 1: Institution Info */}
          <div className="flex flex-col">
            <div className="mb-6">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/Logo-150x150-5.png"
                alt="IIFD Logo"
                width={100}
                height={100}
                className="bg-white rounded-full p-1"
              />
            </div>
            <p className="text-[14px] leading-[1.8] text-[#ffffff] opacity-80 mb-8 max-w-[340px] font-light">
              IIFD is the best fashion Designing college in India with 40+ fashion design courses offering like diploma, undergraduate and postgraduate programs. IIFD ensures 100% placements and is awarded two years consecutively as Best Fashion Institute in Chandigarh, Kolkata India.
            </p>
            <div className="flex gap-4 items-center">
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80"><Facebook size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80"><Instagram size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80"><Youtube size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80"><Twitter size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80"><Linkedin size={18} /></a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.131 0 3.768-2.248 3.768-5.493 0-2.872-2.064-4.881-5.013-4.881-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.261 7.929-7.261 4.162 0 7.397 2.965 7.397 6.93 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.033-1.002 2.324-1.492 3.121C10.145 23.86 11.055 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/></svg>
              </a>
              <a href="#" className="hover:opacity-100 transition-opacity opacity-80">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.46 1.17-1.1 2.32-1.89 3.41-.12.16-.14.22-.09.35.15.42.34.82.5 1.25.13.34.25.68.37 1.03.1.28-.01.39-.28.39-.24 0-.49 0-.73-.01-.33 0-.66-.02-.99-.02-.27 0-.37-.08-.43-.34-.07-.26-.14-.52-.22-.77-.07-.25-.15-.5-.22-.76-.08-.26-.18-.32-.45-.3-.21.02-.43.03-.64.04-.13.01-.2.07-.2.2 0 .28 0 .56-.01.84s-.04.57-.1.85c-.05.24-.16.32-.4.32-.24 0-.48.01-.72.01h-.75c-.25 0-.34-.09-.37-.34-.1-1.12-.11-2.24-.11-3.37 0-1.13.02-2.27.12-3.39.03-.25.11-.34.37-.34h1.56c.22 0 .32.08.36.3.09.43.08.88.08 1.33 0 .44-.01.89 0 1.33.01.21.08.28.29.27.24-.01.48-.02.73-.03.24-.01.34-.1.4-.33.15-.55.32-1.1.48-1.65.07-.24.16-.32.4-.32.25 0 .5 0 .75 0h.7c.28 0 .4.11.31.39-.12.42-.25.84-.37 1.25-.15.48-.31.96-.46 1.44-.04.14-.02.19.1.28q1.42 1.08 2.82 2.18c.2.16.35.15.49-.06.26-.38.51-.77.75-1.16.27-.42.53-.84.8-1.26.06-.09.11-.19.06-.3-.04-.1-.13-.12-.22-.11l-.81.1c-.24.03-.33-.04-.37-.28-.08-.47-.16-.94-.25-1.42-.08-.44-.15-.88-.23-1.33-.04-.24.03-.33.26-.36.42-.05.85-.1 1.27-.15.35-.04.7-.09 1.05-.13.25-.03.35.05.39.3-.01.45.02.91-.01 1.36z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Recent Blogs */}
          <div className="flex flex-col">
            <h3 className="text-[18px] font-display font-semibold mb-8 text-white">Our Recent Blogs</h3>
            <ul className="flex flex-col gap-3">
              {[
                "Know About Professional Fashion Courses",
                "Fashion Designing Courses Punjab",
                "India’s Best Fashion Designing Courses",
                "Best Fashion Designing Institute in India",
                "Things to know about Fashion Designing Institute",
                "Fashion Design College in India"
              ].map((blog, idx) => (
                <li key={idx}>
                  <a href="#" className="text-[14px] opacity-80 hover:opacity-100 hover:pl-2 transition-all duration-300 block py-1 border-b border-white border-opacity-5">
                    {blog}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="flex flex-col">
            <h3 className="text-[18px] font-display font-semibold mb-8 text-white">Contact</h3>
            <div className="flex flex-col gap-6">
              
              <div className="flex items-start gap-4">
                <div className="mt-1"><Phone size={18} /></div>
                <div className="flex flex-col">
                  <span className="text-[14px] opacity-80">0172 4007918</span>
                  <span className="text-[14px] opacity-80">+91-9041766699</span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="mt-1"><Mail size={18} /></div>
                <a href="mailto:info@iifd.in" className="text-[14px] opacity-80 hover:opacity-100">info@iifd.in</a>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0"><MapPin size={18} /></div>
                  <p className="text-[14px] opacity-80 leading-snug">
                    <strong className="block mb-1">Chandigarh Campus:</strong>
                    SCO 479-480 Sector 35-C, Chandigarh
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 opacity-0"><MapPin size={18} /></div> {/* Spacer icon */}
                  <p className="text-[14px] opacity-80 leading-snug">
                    <strong className="block mb-1">Mohali Campus:</strong>
                    Plot No. 603 Industrial Area Phase 9, Mohali
                  </p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="mt-1 shrink-0 opacity-0"><MapPin size={18} /></div> {/* Spacer icon */}
                  <p className="text-[14px] opacity-80 leading-snug">
                    <strong className="block mb-1">Kolkata Campus:</strong>
                    KB-22, SALTLAKE, near Amri Hospital, Sector 3, Bidhannagar, Kolkata, West Bengal 700098
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 py-2 border-t border-white border-opacity-5">
                <BriefcaseBusiness size={18} />
                <a href="#" className="text-[14px] opacity-80 hover:opacity-100">Work With Us</a>
              </div>

              <a href="#" className="inline-flex items-center text-[13px] font-display font-bold uppercase tracking-wider gap-2 hover:gap-3 transition-all duration-300 mt-2">
                GET DIRECTIONS <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Legal Section */}
        <div className="border-t border-white border-opacity-10 pt-8 mt-12 flex flex-col md:flex-row justify-between items-center text-[12px] opacity-60 font-light">
          <p className="mb-4 md:mb-0">
            Copyright © 2026 Indian Institute of Fashion & Design
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of use</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <span className="hidden md:inline">|</span>
            <a href="#" className="hover:opacity-100 transition-opacity">Payment Policies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;