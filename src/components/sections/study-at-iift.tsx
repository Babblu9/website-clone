"use client";

import React from 'react';

/**
 * StudyAtIIFD Component
 * 
 * A call-to-action section featuring a vibrant brand-red background,
 * high-contrast white typography, and a large white content container.
 * 
 * Design characteristics:
 * - Background: #ED1C24 (Primary Red)
 * - Typography: Montserrat (Headings)
 * - Container: 1140px max-width
 * - CTA Box: Pure white, intended for dynamic forms or content
 */

const StudyAtIIFD: React.FC = () => {
  return (
    <section 
      className="bg-[#ED1C24] py-[80px] md:py-[100px] font-poppins"
      aria-labelledby="cta-heading"
    >
      <div className="container mx-auto px-5 max-w-[1140px]">
        <div className="flex flex-col items-center text-center">
          {/* Main Title - Sub Heading style */}
          <h3 
            className="text-white font-montserrat font-bold text-[22px] md:text-[28px] mb-4 uppercase tracking-wide"
            style={{ lineHeight: '1.2' }}
          >
            Study at #1 Diploma Fashion Designing College
          </h3>

          {/* Large Section Heading */}
          <h2 
            id="cta-heading"
            className="text-white font-montserrat font-extrabold text-[36px] md:text-[52px] mb-8 uppercase"
            style={{ lineHeight: '1.1' }}
          >
            Study at IIFT
          </h2>

          {/* Large White Content Box (Form Placeholder) */}
          <div 
            className="w-full bg-white min-h-[400px] shadow-lg flex items-center justify-center p-8 transition-all duration-300"
            style={{ 
              borderRadius: '0px', 
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
            }}
          >
            {/* 
                This area is designated for an inquiry form or dynamic content 
                as per the visual design of the original page.
            */}
            <div className="text-gray-400 font-montserrat font-semibold tracking-wider uppercase text-sm md:text-base">
              Interactive Inquiry Form Container
            </div>
          </div>
        </div>
      </div>

      {/* Responsive adjustments for mobile specific heights */}
      <style jsx>{`
        @media (max-width: 767px) {
          .container {
            padding-left: 15px;
            padding-right: 15px;
          }
          h2 {
            font-size: 32px;
          }
          h3 {
            font-size: 18px;
          }
          .min-h-[400px] {
            min-h: 300px;
          }
        }
      `}</style>
    </section>
  );
};

export default StudyAtIIFD;