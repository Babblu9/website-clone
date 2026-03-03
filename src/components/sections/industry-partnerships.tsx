"use client";

import React from 'react';

/**
 * IndustryPartnerships Section
 * 
 * Featured Section: Industry Partnerships
 * Design: Dual-branded section with a red "Industry Partnerships" box on the left
 * and a white grid of partner placeholders on the right.
 * 
 * Theme: Light
 * Primary Color: #ED2124 (Vivid Red)
 */

const IndustryPartnerships: React.FC = () => {
  // Partnership grid data - 6 items as seen in the screenshots
  const partnerSlots = [1, 2, 3, 4, 5, 6];

  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto max-w-[1200px] px-[1.5rem]">
        <div className="flex flex-col md:flex-row items-stretch gap-0">
          
          {/* Left Block: Red Industry Partnerships Title */}
          <div className="w-full md:w-[25%] bg-[#ED2124] flex items-end p-[40px] aspect-square md:aspect-auto min-h-[250px]">
            <h3 className="text-white text-[32px] font-bold leading-[1.2] uppercase font-display">
              Industry<br />Partnerships
            </h3>
          </div>

          {/* Right Block: White Grid of Partner Placeholders */}
          <div className="w-full md:w-[75%] bg-white p-[40px] md:pl-[60px] flex items-center">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-[20px] w-full">
              {partnerSlots.map((slot) => (
                <div 
                  key={slot}
                  className="partner-card border border-[#eeeeee] bg-white aspect-[3/2] flex items-center justify-center p-[20px] shadow-[0_5px_15px_rgba(0,0,0,0.05)] transition-all duration-300 hover:shadow-md"
                >
                  {/* Placeholder for partner logos as seen in screenshots (empty white boxes) */}
                  <div className="w-full h-full bg-transparent" />
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style jsx global>{`
        .partner-card {
          border: 1px solid #eeeeee;
          box-shadow: 0 5px 15px rgba(0,0,0,0.05);
          aspect-ratio: 3/2;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
          background: #ffffff;
        }
        
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
      `}</style>
    </section>
  );
};

export default IndustryPartnerships;