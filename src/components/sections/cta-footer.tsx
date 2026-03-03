"use client";

import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';

const CTAFooter = () => {
  return (
    <section className="relative w-full bg-[#ed2024] text-white py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Subheading */}
        <h3 className="font-display text-[24px] lg:text-[28px] font-bold uppercase mb-4 tracking-wide">
          Study at #1 Diploma Interior Designing College
        </h3>

        {/* Main Heading */}
        <h2 className="font-display text-[48px] lg:text-[72px] font-extrabold uppercase mb-8 leading-[1.1]">
          Study at IIFT
        </h2>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://iift.in/contact-us/"
            className="inline-block border-2 border-white bg-transparent hover:bg-white hover:text-[#ed2024] text-white font-display text-[15px] font-bold py-[12px] px-[32px] uppercase transition-all duration-300 ease-in-out"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Floating Social/Contact Icons */}
      <div className="fixed right-6 bottom-[100px] z-50 flex flex-col gap-4">
        {/* WhatsApp Icon */}
        <a
          href="https://api.whatsapp.com/send?phone=919041766699"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] p-3 rounded-full shadow-lg transition-transform hover:scale-110 active:scale-95 flex items-center justify-center w-[54px] h-[54px]"
          aria-label="Contact on WhatsApp"
        >
          {/* Using a custom span or SVG to ensure pixel perfect color and shape if needed, but MessageCircle is standard */}
          <MessageCircle className="w-7 h-7 fill-white text-[#25D366]" />
        </a>

        {/* Phone Icon */}
        <a
          href="tel:+919041766699"
          className="bg-[#ed2024] p-3 rounded-full shadow-lg border border-white/20 transition-transform hover:scale-110 active:scale-95 flex items-center justify-center w-[54px] h-[54px]"
          aria-label="Call IIFT"
        >
          <Phone className="w-6 h-6 fill-white text-white" />
        </a>
      </div>

      {/* Visual Accents - Subtle red section divider if needed, though the design shows solid block */}
      <style jsx global>{`
        .font-display {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default CTAFooter;