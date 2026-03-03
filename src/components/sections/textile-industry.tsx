"use client";

import React from 'react';

const TextileIndustry = () => {
  const textileOpportunities = [
    "Textile export houses",
    "Fabric manufacturing",
    "Film Industry",
    "Knit-Wear Designers",
    "Boutiques",
    "Stylist",
    "Fashion Showrooms",
    "Textile Designing",
    "Retail chains"
  ];

  return (
    <section className="bg-[#ed1c24] py-[80px] md:py-[100px] font-poppins">
      <div className="container max-w-[1140px] mx-auto px-5">
        <div className="flex flex-col">
          {/* Section Header */}
          <div className="mb-10">
            <h2 className="text-white text-[28px] md:text-[32px] font-bold font-display uppercase tracking-wider mb-4">
              TEXTILE design Industry
            </h2>
            <div className="w-full h-[1px] bg-white/30"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-0">
            {textileOpportunities.map((opportunity, index) => (
              <div 
                key={index} 
                className="opportunity-list-item py-3 md:py-4 border-b border-white/20 last:border-b-0 md:last:border-b"
              >
                <h4 className="text-white text-[14px] md:text-[15px] font-semibold font-display tracking-tight hover:translate-x-1 transition-transform duration-300 pointer-events-none">
                  {opportunity}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .opportunity-list-item {
          font-family: 'Montserrat', sans-serif;
        }
        @media (min-width: 768px) {
          /* Specific border handling for 3-column grid to match design flow */
          .grid > div:nth-last-child(-n+3) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TextileIndustry;