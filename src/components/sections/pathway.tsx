import React from 'react';

/**
 * PathwaySection Component
 * 
 * Clones the "Pathway After Diploma In Textile Design" section.
 * Features a clean white background with right-aligned list of career opportunities.
 * Adheres strictly to the light theme and provided typography/spacing.
 */
const PathwaySection: React.FC = () => {
  const careerRoles = [
    "Textile Designer",
    "Exhibition Designer",
    "Fabric Resource Manager",
    "Embroidery Designer",
    "Dyeing & Printing Consultant",
    "Design Media Specialist"
  ];

  return (
    <section className="bg-white py-[80px] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-start">
          {/* Spacer or image placeholder for the left area if needed, 
              but screenshots show the content shifted to the right half */}
          <div className="hidden md:block md:w-1/2"></div>

          {/* Right Column: Title and Roles List */}
          <div className="w-full md:w-1/2 flex flex-col items-start md:pl-12">
            <div className="mb-8">
              <h2 className="text-[#000000] font-display font-bold text-[36px] leading-[1.3] uppercase mb-1">
                PATHWAY AFTER DIPLOMA IN
              </h2>
              <h2 className="text-[#000000] font-display font-bold text-[36px] leading-[1.3] uppercase">
                TEXTILE DESIGN
              </h2>
            </div>

            <ul className="space-y-4 list-none p-0">
              {careerRoles.map((role, index) => (
                <li key={index} className="flex items-center text-[#000000] font-body text-[16px] leading-[1.6]">
                  {/* Custom Bullet Point (Black Dot) */}
                  <span className="w-1.5 h-1.5 bg-black rounded-full mr-4 shrink-0"></span>
                  <span>{role}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathwaySection;