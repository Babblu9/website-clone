"use client";

import React from 'react';

const HowWeTeach = () => {
  return (
    <section className="bg-white section-padding overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Subtle Section Header Reference */}
        <div className="flex justify-center mb-4">
          <span className="text-[#ed1c24] font-display font-bold text-[14px] tracking-[2px] uppercase">
            HOW WE TEACH
          </span>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-20">
          {/* Vertical Text Column */}
          <div className="hidden lg:flex items-center justify-start h-full pt-16">
            <div className="relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[100px] bg-black"></div>
              <div 
                className="vertical-text pt-[120px] pb-10 text-[#ed1c24] font-display font-bold tracking-[2px] whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                EXPERIENCE IIFT
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="flex-1 max-w-4xl">
            {/* Outlined Typography Header */}
            <div className="mb-10 mt-4 h-[150px] relative">
              <h2 className="text-outline-red leading-[1.0] text-[50px] md:text-[60px] lg:text-[72px]">
                Make Impact <br />
                With Design
              </h2>
            </div>

            {/* Paragraph Content */}
            <div className="space-y-6 text-[#111111] font-body text-[16px] leading-[1.6]">
              <p>
                Ranked among the <span className="font-bold">Top Fashion Designing Institute in India</span>, IIFT provide a flexible courses of study in which students are endorsed to develop a strong learning practice. Considered as the <span className="font-bold">Best Fashion Design College in India</span> Indian Institute of Fashion Technology & Design don’t just prepare our students for a job, we prepare them for a great career through 100% job oriented courses. More than 20 years of legacy makes us a pioneer in producing creative talents in the design industry with a 98% placement record. Through our 360-degree learning process, IIFT empower and equip you to meet the industry requirements and our global alliances make opportunities for you all around the world.
              </p>
            </div>

            {/* Read More Button */}
            <div className="mt-10">
              <a 
                href="#" 
                className="inline-block border-[1.5px] border-[#ed1c24] text-[#ed1c24] font-display font-bold text-[14px] px-8 py-3 tracking-wider hover:bg-[#ed1c24] hover:text-white transition-all duration-300 uppercase"
              >
                READ MORE
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .text-outline-red {
          -webkit-text-stroke: 1px #ed1c24;
          color: transparent;
          font-family: "Montserrat", sans-serif;
          font-weight: 900;
          text-transform: none;
        }
        .section-padding {
          padding-top: 80px;
          padding-bottom: 80px;
        }
      `}</style>
    </section>
  );
};

export default HowWeTeach;