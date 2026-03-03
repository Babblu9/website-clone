import React from 'react';

/**
 * CareerPathway Component
 * 
 * Clones the "PATHWAY AFTER DIPLOMA IN FASHION DESIGN:" section.
 * Features a clean vertical list format with specific role items.
 */
const CareerPathway: React.FC = () => {
  const roles = [
    "Fashion Stylist",
    "Fashion Analysts",
    "Creative Pattern Makers",
    "Fashion Merchandisers",
    "Fashion Illustrators"
  ];

  return (
    <section className="bg-white py-[60px] md:py-[80px]">
      <div className="container mx-auto px-5 max-w-[1140px]">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Section Heading */}
          <h2 className="font-display text-[24px] md:text-[32px] font-bold text-[#222222] mb-10 leading-tight uppercase tracking-tight">
            PATHWAY AFTER DIPLOMA IN <br className="hidden md:block" /> FASHION DESIGN:
          </h2>

          {/* Role List */}
          <ul className="list-none p-0 m-0 flex flex-col items-center gap-4">
            {roles.map((role, index) => (
              <li 
                key={index} 
                className="flex items-center text-[#222222] font-body text-[16px] md:text-[18px] font-medium"
              >
                {/* Bullet Point Style */}
                <span className="mr-3 text-[#222222] flex items-center justify-center">•</span>
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CareerPathway;