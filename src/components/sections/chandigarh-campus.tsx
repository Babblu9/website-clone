import React from 'react';
import Image from 'next/image';

/**
 * ChandigarhCampus Section
 * 
 * This component clones the "I LOVE CHANDIGARH" city showcase section.
 * It features a full-width background image with a centered caption box
 * that describes the campus location.
 */
const ChandigarhCampus: React.FC = () => {
  // Asset extracted from the provided list
  const cityImage = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/10-4.webp";

  return (
    <section className="relative w-full overflow-hidden bg-white py-[60px] md:py-[100px]">
      <div className="container mx-auto px-5 lg:max-w-[1200px]">
        <div className="relative w-full aspect-[16/9] md:aspect-[21/9] lg:h-[600px]">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <Image
              src={cityImage}
              alt="I LOVE CHANDIGARH"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Caption Box - Positioned at the bottom center of the image area */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 z-10 w-[90%] md:w-[70%] lg:w-[630px]">
            <div 
              className="bg-white p-6 md:p-10 shadow-[0px_5px_15px_rgba(0,0,0,0.1)] text-center"
              style={{ borderRadius: '0px' }}
            >
              <p 
                className="text-[#54595F] font-body text-[14px] md:text-[15px] leading-[1.8] m-0"
                style={{ 
                  fontFamily: 'var(--font-body)',
                  fontWeight: 400
                }}
              >
                IIFT campus sits in the heart of Chandigarh, putting students just minutes away from the entertainment, cultural riches and opportunities of “The Most Perfect City In The World.”
              </p>
            </div>
          </div>
        </div>
        
        {/* Spacer to account for the overlapping caption box */}
        <div className="h-[100px] md:h-[120px]"></div>
      </div>
    </section>
  );
};

export default ChandigarhCampus;