import React from 'react';

/**
 * PartnershipsRecruiters Component
 * 
 * Clones the modular logo grid section with:
 * - Red "Industry Partnerships" box on the left
 * - Black "Campus Recruiters" box on the bottom right
 * - Grid of empty/placeholder logo slots
 * 
 * Data inferred from high-level design and screenshots:
 * - Brand Red: #ed1c24
 * - Near Black: #111111
 * - Font: Montserrat (titles), Poppins (fallback)
 * - Container width: 1200px
 */

const PartnershipsRecruiters: React.FC = () => {
  // Placeholder logo data - based on the visual structure of the screenshot
  // which shows small light gray boxes with shadow
  const logoSlots = Array.from({ length: 6 });

  return (
    <section className="bg-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="relative flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0">
          
          {/* Industry Partnerships Red Box */}
          <div 
            className="md:absolute md:left-0 md:top-10 z-10 w-[250px] h-[180px] bg-[#ed1c24] flex items-center p-8 shrink-0 shadow-lg"
          >
            <h4 className="text-white font-display font-bold text-[28px] leading-[1.2] uppercase tracking-wide">
              Industry<br />Partnerships
            </h4>
          </div>

          {/* Logo Grid Area */}
          <div className="w-full flex justify-center md:justify-end">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-[800px] md:mr-[100px] lg:mr-[150px]">
              {logoSlots.map((_, index) => (
                <div 
                  key={index} 
                  className="w-[180px] h-[130px] bg-white border border-[#dddddd] shadow-[0px_10px_30px_rgba(0,0,0,0.05)] flex items-center justify-center transition-transform hover:-translate-y-1"
                >
                  {/* Empty placeholder for logo as per design instruction */}
                  <div className="w-3/4 h-1/2 bg-[#f9f9f9] rounded-sm opacity-50" />
                </div>
              ))}
            </div>
          </div>

          {/* Campus Recruiters Black Box (Bottom Right Alignment) */}
          <div 
            className="md:absolute md:right-0 md:bottom-[-20px] z-10 w-[220px] h-[150px] bg-[#111111] flex items-center p-8 shadow-lg"
          >
            <h4 className="text-white font-display font-bold text-[22px] leading-[1.2] uppercase tracking-wide">
              Campus<br />Recruiters
            </h4>
          </div>
          
        </div>
      </div>

      {/* Background decoration dots - matching screenshot details */}
      <div className="hidden md:flex justify-center mt-12 space-x-2">
        <div className="w-1.5 h-1.5 rounded-full bg-black/80" />
        {Array.from({ length: 15 }).map((_, i) => (
          <div key={i} className="w-1 h-1 rounded-full bg-gray-300" />
        ))}
      </div>
    </section>
  );
};

export default PartnershipsRecruiters;