"use client";

import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Navigation, MapPin } from 'lucide-react';

/**
 * HeroContactForm Section Component
 * 
 * Clones the hero section with the dark map overlay background,
 * main heading, and floating contact form.
 */
const HeroContactForm: React.FC = () => {
  return (
    <section className="relative min-h-[600px] w-full bg-[#111111] overflow-hidden">
      {/* Abstract Map Overlay Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity pointer-events-none"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2000&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Red Lower Section Background for Form Overlap Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-[#ed1c24] z-0" />

      <div className="container relative z-10 px-4 md:px-[15px] py-16 md:py-24">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-12">
          
          {/* Left Side: Headline and Address Info */}
          <div className="w-full lg:w-3/5 text-white">
            <div className="mb-12">
              <h1 className="hero-heading max-w-[550px] mb-8">
                FEEL FREE TO REACH OUT TO US!
              </h1>
              
              <div className="mb-8">
                <div className="w-12 h-12 flex items-center justify-center">
                   <MapPin className="text-[#ed1c24] fill-[#ed1c24] w-10 h-10" />
                </div>
              </div>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-6 text-sm font-body">
              {/* Phone & Email */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="w-5 h-5 text-white mt-1 shrink-0" />
                  <div>
                    <p className="font-semibold text-base">0172 4007918</p>
                    <p className="font-semibold text-base">904 176 6699</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="w-5 h-5 text-white mt-1 shrink-0" />
                  <a href="mailto:info@iifd.in" className="font-semibold text-base hover:text-white/80 transition-colors">
                    info@iifd.in
                  </a>
                </div>
              </div>

              {/* Campuses */}
              <div className="space-y-10">
                <div className="flex items-start gap-4">
                  <Navigation className="w-5 h-5 text-white mt-1 shrink-0 rotate-[45deg]" />
                  <div>
                    <h3 className="font-bold text-base mb-2">Chandigarh Campus:</h3>
                    <p className="text-white/90 leading-relaxed">
                      SCO 479-480, Sector 35-C, Chandigarh
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <Navigation className="w-5 h-5 text-white mt-1 shrink-0 rotate-[45deg]" />
                  <div>
                    <h3 className="font-bold text-base mb-2">Mohali Campus:</h3>
                    <p className="text-white/90 leading-relaxed">
                      Plot No. 603, Industrial Area Phase 9, Mohali
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                   <Navigation className="w-5 h-5 text-white mt-1 shrink-0 rotate-[45deg]" />
                  <div>
                    <h3 className="font-bold text-base mb-2">Kolkata Campus:</h3>
                    <p className="text-white/90 leading-relaxed max-w-[320px]">
                      KB-22, SALTLAKE, near Amri Hospital, Sector 3, Bidhannagar, Kolkata, West Bengal 700098
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form Card */}
          <div className="w-full lg:w-[400px] shrink-0">
            <div className="contact-card shadow-2xl relative">
              <h2 className="form-title mb-8 border-b border-gray-100 pb-4">
                GET IN TOUCH
              </h2>
              
              <form className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    placeholder="Name" 
                    className="input-field" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="input-field" 
                    required
                  />
                </div>
                <div>
                  <input 
                    type="email" 
                    placeholder="Email" 
                    className="input-field" 
                    required
                  />
                </div>
                <div>
                  <textarea 
                    placeholder="Message" 
                    rows={4} 
                    className="input-field resize-none"
                    required
                  ></textarea>
                </div>
                
                {/* ReCAPTCHA Placeholder Styling */}
                <div className="bg-[#f9f9f9] border border-[#d3d3d3] rounded-sm p-4 flex items-center justify-between">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-6 h-6 border-[#c1c1c1] rounded-sm" />
                    <span className="text-sm font-body text-[#000000]">I'm not a robot</span>
                  </label>
                  <div className="flex flex-col items-center">
                    <img 
                      src="https://www.gstatic.com/recaptcha/api2/logo_48.png" 
                      alt="recaptcha" 
                      className="w-8 h-8 opacity-70"
                    />
                    <div className="text-[10px] text-[#555] leading-tight text-center">
                      reCAPTCHA<br/>
                      <span className="text-[8px]">Privacy - Terms</span>
                    </div>
                  </div>
                </div>

                <button 
                  type="submit" 
                  className="btn-primary w-full mt-4 h-[50px] tracking-widest font-bold"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
          
        </div>
      </div>

      <style jsx global>{`
        .hero-heading {
          font-family: var(--font-display);
          font-size: 48px;
          font-weight: 800;
          color: #ffffff;
          text-transform: uppercase;
          line-height: 1.1;
        }
        @media (max-width: 768px) {
          .hero-heading {
            font-size: 32px;
          }
        }
        .form-title {
          font-family: var(--font-display);
          font-size: 24px;
          font-weight: 700;
          color: var(--color-iifd-red);
          text-transform: uppercase;
        }
        .contact-card {
          background: #ffffff;
          padding: 40px;
          border-radius: 5px;
          box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.2);
        }
        .input-field {
          width: 100%;
          padding: 12px 15px;
          border: 1px solid #cccccc;
          border-radius: 5px;
          font-family: var(--font-body);
          font-size: 14px;
          color: #111111;
          outline: none;
          transition: border-color 0.3s ease;
        }
        .input-field:focus {
          border-color: #ed1c24;
        }
        .btn-primary {
          background-color: #ed1c24;
          color: #ffffff;
          font-family: var(--font-body);
          font-size: 14px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 12px 24px;
          border-radius: 5px;
          border: none;
          transition: background-color 0.3s ease-in-out;
          cursor: pointer;
        }
        .btn-primary:hover {
          background-color: #d11920;
        }
      `}</style>
    </section>
  );
};

export default HeroContactForm;