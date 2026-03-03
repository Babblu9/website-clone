import React from 'react';
import Image from 'next/image';

/**
 * IndustryPartnerships Section
 * 
 * Clones the Industry Partnerships section featuring a split layout with:
 * - A bold Red title block on the left
 * - A grid of 6 partnership logo cards on the right
 * 
 * Implements pixel-perfect styles based on the provided design tokens and screenshots.
 */
const IndustryPartnerships = () => {
  // Partnership assets from the provided list
  const partnerships = [
    {
      id: 1,
      name: "Chandigarh Times Fashion Week",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/Chandigarh-Times-Fashion-Week-Logo-300x199-2.webp",
      alt: "Chandigarh Times Fashion Week Logo"
    },
    {
      id: 2,
      name: "Couture Fashion Week",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/Couture-Fashion-Week-Logo-1-300x199-3.webp",
      alt: "Couture Runway Week Logo"
    },
    {
      id: 3,
      name: "ADI Designers of India",
      logo: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/IIFT-with-Association-of-designers-of-india-4.webp",
      alt: "IIFT with Association of designers of india"
    },
    // Placeholders for additional three cards visible in screenshot
    { id: 4, name: "", logo: null, alt: "" },
    { id: 5, name: "", logo: null, alt: "" },
    { id: 6, name: "", logo: null, alt: "" }
  ];

  return (
    <section className="bg-white py-[80px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-0">
          
          {/* Left Title Block: Solid Red background */}
          <div className="w-full md:w-[252px] bg-[#ED2024] p-[30px] flex items-center min-h-[250px] md:min-h-auto">
            <h4 className="text-white font-display text-[24px] font-[600] leading-[1.3] uppercase tracking-tight">
              Industry<br />Partnerships
            </h4>
          </div>

          {/* Right Logo Grid: 3-column on desktop, matching the screenshot layout */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-[30px] gap-y-[30px] md:pl-[30px] mt-[30px] md:mt-0">
            {partnerships.map((item) => (
              <div 
                key={item.id} 
                className="partnership-card flex items-center justify-center bg-white border border-[#eeeeee] shadow-[0px_4px_15px_rgba(0,0,0,0.05)] h-[120px] p-[20px] transition-transform duration-300 hover:-translate-y-1"
              >
                {item.logo ? (
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={item.logo}
                      alt={item.alt}
                      width={180}
                      height={100}
                      className="object-contain max-h-full max-w-full"
                      unoptimized
                    />
                  </div>
                ) : (
                  /* Placeholder for empty/blank cards shown in screenshot top row */
                  <div className="w-full h-full bg-white"></div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default IndustryPartnerships;