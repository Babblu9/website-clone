import React from 'react';

/**
 * CareerOpportunities Component
 * 
 * Clones the Career Opportunities section with its characteristic 
 * full-width red banner and grid layouts for Fashion Design 
 * and Interior Design disciplines.
 */
const CareerOpportunities = () => {
  const fashionRoles = [
    "Fashion Forecaster",
    "Fashion Illustrator",
    "Fashion Designer",
    "Fashion Consultant",
    "Fashion Coordinator",
    "Fashion Stylist",
    "Fashion Lawyer",
    "Fashion Entrepreneur",
    "Quality Assurance Manager"
  ];

  const interiorRoles = [
    "Universal Interior Design",
    "Corporate Interior Design",
    "Sustainable Interior Design",
    "Healthcare Interior Design",
    "Commercial Interior Design",
    "Furniture Design",
    "Residential Interior Design",
    "Exhibition Interior Design",
    "Interior Design Consultant"
  ];

  const textileRoles = [
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
    <section className="font-poppins">
      {/* Main Banner - Career Opportunities Title */}
      <div className="bg-brand-red py-[80px] md:py-[100px] text-center text-white px-5">
        <div className="max-w-[1140px] mx-auto">
          <h2 className="font-display text-[32px] md:text-[42px] font-extrabold uppercase leading-[1.2] mb-5">
            CAREER OPPORTUNITIES
          </h2>
          <p className="font-body text-[14px] md:text-[16px] leading-[1.6] max-w-[1000px] mx-auto opacity-90">
            Vast openings will welcome you with folded hands after getting your technical qualification from IIFT 
            in the field of Fashion. The requirements for creative & enthusiastic Fashion Designer, Textile Designer, 
            and Interior Designer with an edge are always there in industry.
          </p>
        </div>
      </div>

      {/* Fashion Design Industry - Red Background */}
      <div className="bg-brand-red pb-[80px] md:pb-[100px] text-white px-5">
        <div className="max-w-[1140px] mx-auto">
          <div className="border-b border-white/20 mb-10">
            <h3 className="font-display text-[22px] md:text-[28px] font-semibold uppercase mb-4 inline-block">
              FASHION design Industry
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-0">
            {fashionRoles.map((role, index) => (
              <div 
                key={index} 
                className="font-display text-[14px] font-semibold py-3 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interior Design Industry - White Background */}
      <div className="bg-white py-[80px] md:py-[100px] text-black px-5">
        <div className="max-w-[1140px] mx-auto">
          <div className="border-b border-black/10 mb-10">
            <h3 className="font-display text-[22px] md:text-[28px] font-semibold uppercase mb-4 inline-block">
              interior design Industry
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-0">
            {interiorRoles.map((role, index) => (
              <div 
                key={index} 
                className="font-display text-[14px] font-semibold py-3 border-b border-black/10 hover:bg-black/[0.02] transition-colors cursor-default"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Textile Design Industry - Red Background */}
      <div className="bg-brand-red py-[80px] md:py-[100px] text-white px-5">
        <div className="max-w-[1140px] mx-auto">
          <div className="border-b border-white/20 mb-10">
            <h3 className="font-display text-[22px] md:text-[28px] font-semibold uppercase mb-4 inline-block">
              TEXTILE design Industry
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-0">
            {textileRoles.map((role, index) => (
              <div 
                key={index} 
                className="font-display text-[14px] font-semibold py-3 border-b border-white/10 hover:bg-white/5 transition-colors cursor-default"
              >
                {role}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerOpportunities;