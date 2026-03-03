"use client";

import React from 'react';

const HowWeDoIt = () => {
  return (
    <section className="py-[80px] bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Title */}
        <h2 
          className="section-title text-center mb-16"
          style={{
            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
            fontWeight: 900,
            color: '#ED1C24',
            lineHeight: 1,
            fontFamily: 'var(--font-display)'
          }}
        >
          How We Do It
        </h2>

        {/* Layout Container */}
        <div className="relative max-w-[1200px] mx-auto mt-20">
          
          {/* Vertical Decorative Sidebar Text (Left) */}
          <div className="absolute left-0 top-0 bottom-0 flex flex-col items-center justify-center -translate-x-12 hidden lg:flex">
            <div className="h-[200px] w-[1px] bg-black mb-4"></div>
            <span className="vertical-text whitespace-nowrap" style={{ color: '#ED1C24', fontSize: '14px', letterSpacing: '0.1em' }}>
              OUR VISION
            </span>
          </div>

          {/* Red Bordered Frame */}
          <div 
            className="framed-section ml-auto w-full lg:w-[85%] border-2 border-[#ED1C24] relative bg-white"
            style={{
              padding: '4rem 4rem 4rem 3rem',
              minHeight: '450px'
            }}
          >
            {/* Main Vision Content */}
            <div className="max-w-[75%] lg:max-w-[800px]">
              <p className="mb-6 text-[#333333] font-body text-[16px] leading-[1.6]">
                Innovative curriculum, hands-on experience and industry-ready professionals, that’s what IIFT is known for. Taught by highly qualified, experienced designers and artists, students can hone their abilities and sharpen their design skills at the institute.
              </p>
              <p className="text-[#333333] font-body text-[16px] leading-[1.6]">
                Our vision is to take the institute to a level where it is celebrated globally as an institution where students cross traditional disciplinary boundaries to stimulate innovation, partner with creative industries worldwide, and develop innovative design and business solutions. By focusing on these major goals, IIFT will become stronger by conscious design and be known as a strategic organisation—one that applies available resources to greatest effect to achieve its vision.
              </p>
            </div>

            {/* Overlapping Card - UNLEASHING CREATIVITY */}
            <div 
              className="absolute -top-12 right-0 lg:-right-10 w-full max-w-[340px] bg-white shadow-card p-10 border-l-4 border-[#ED1C24] z-10"
              style={{
                boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)'
              }}
            >
              <h4 
                className="text-[18px] font-bold text-[#ED1C24] uppercase tracking-wider mb-8"
                style={{ fontFamily: 'var(--font-display)' }}
              >
                UNLEASHING <br /> CREATIVITY
              </h4>
              <p className="text-black font-semibold text-[18px] leading-[1.3] font-display">
                Here’s what that looks like at IIFT
              </p>
            </div>

            {/* Mobile/Tablet Version of Vertical Text */}
            <div className="absolute top-1/2 -left-8 transform -rotate-[270deg] lg:hidden">
                <span className="text-[12px] font-bold text-[#ED1C24] uppercase tracking-widest whitespace-nowrap">
                   OUR VISION
                </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .vertical-text {
          writing-mode: vertical-rl;
          text-orientation: mixed;
          transform: rotate(180deg);
          font-family: var(--font-display);
          font-weight: 700;
        }
        .shadow-card {
            box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08);
        }
      `}</style>
    </section>
  );
};

export default HowWeDoIt;