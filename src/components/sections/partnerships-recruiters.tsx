"use client";

import React from 'react';

/**
 * PartnershipsRecruiters Component
 * Clones the Industry Partnerships and Campus Recruiters section.
 * Features a high-contrast layout with primary red and pure black blocks.
 */
const PartnershipsRecruiters = () => {
  return (
    <section className="bg-white">
      {/* Industry Partnerships Section */}
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col md:flex-row items-stretch border-b border-[#E1E1E1]">
          {/* Left Title Block: Industry Partnerships */}
          <div className="bg-[#ED1C24] p-8 md:p-12 flex flex-col justify-center min-h-[200px] md:min-h-[300px] w-full md:w-1/4">
            <h2 className="text-white font-display text-2xl md:text-3xl font-extrabold uppercase leading-tight">
              Industry<br />Partnerships
            </h2>
          </div>

          {/* Right Logo Grid: Placeholders as per design instructions */}
          <div className="flex-1 p-8 md:p-12">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 h-full">
              {/* Row 1 */}
              <div className="border border-[#E1E1E1] aspect-[4/3] flex items-center justify-center p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="bg-gray-50 w-full h-full opacity-30"></div>
              </div>
              <div className="border border-[#E1E1E1] aspect-[4/3] flex items-center justify-center p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="bg-gray-50 w-full h-full opacity-30"></div>
              </div>
              <div className="border border-[#E1E1E1] aspect-[4/3] flex items-center justify-center p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="bg-gray-50 w-full h-full opacity-30"></div>
              </div>
              {/* Row 2 */}
              <div className="border border-[#E1E1E1] aspect-[4/3] flex items-center justify-center p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="bg-gray-50 w-full h-full opacity-30"></div>
              </div>
              <div className="border border-[#E1E1E1] aspect-[4/3] flex items-center justify-center p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="bg-gray-50 w-full h-full opacity-30"></div>
              </div>
              <div className="border border-[#E1E1E1] aspect-[4/3] flex items-center justify-center p-4 shadow-[0px_10px_30px_rgba(0,0,0,0.05)]">
                <div className="bg-gray-50 w-full h-full opacity-30"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Campus Recruiters Section */}
      <div className="container mx-auto px-5 lg:px-0">
        <div className="flex flex-col md:flex-row items-stretch border-b border-[#E1E1E1]">
          {/* Left Empty/Spacer Block to maintain layout structure */}
          <div className="hidden md:block w-3/4"></div>

          {/* Right Title Block: Campus Recruiters */}
          <div className="bg-[#111111] p-8 md:p-12 flex flex-col justify-center min-h-[200px] w-full md:w-1/4">
            <h2 className="text-white font-display text-2xl md:text-3xl font-extrabold uppercase leading-tight">
              Campus<br />Recruiters
            </h2>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: 'Montserrat', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default PartnershipsRecruiters;