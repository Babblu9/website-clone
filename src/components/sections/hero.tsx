"use client";

import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative w-full overflow-hidden mt-[100px] lg:mt-0">
      {/* Background with Red Overlay Container */}
      <div className="relative h-[450px] md:h-[600px] lg:h-[730px] w-full">
        {/* The Base Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/Cover-Page-background-Campus-Life-6.webp"
            alt="Campus Life Background"
            fill
            className="object-cover"
            priority
          />
          {/* Red Branding Overlay - rgba(237, 28, 36, 0.6) as per globals.css */}
          <div className="absolute inset-0 bg-[#ED1C24]/60 mix-blend-multiply transition-opacity duration-300"></div>
        </div>

        {/* Content Container */}
        <div className="container relative z-10 h-full flex items-center justify-center pt-10 px-5 md:px-10 lg:px-0">
          <div className="relative w-full max-w-[1140px] flex flex-col items-center">
            
            {/* Visual Overlapping Images Area (Matching Screenshot) */}
            <div className="hidden md:flex relative w-full h-[400px] items-center justify-center mb-[-100px]">
                {/* We rely on the screenshot composition; however, the instruction focuses on the card and background */}
            </div>

            {/* Central Floating White Card */}
            <div className="bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] p-8 md:p-12 lg:p-14 max-w-[480px] text-center md:text-left relative z-20 mt-[-50px] md:mt-0 self-center">
              <h1 className="text-[#111111] font-display font-bold text-[32px] md:text-[40px] lg:text-[48px] leading-[1.2] mb-6 tracking-tight">
                Campus Life @ IIFD
              </h1>
              
              <div className="w-[80px] h-[2px] bg-[#ED1C24] mb-8 hidden md:block"></div>
              
              <p className="text-[#111111] font-body text-[14px] md:text-[15px] leading-[1.8] font-normal mb-8">
                Experience the Best, Experience IIFD. The high-spirited environment at the campus makes you engaged and positive always ready for anything. Enjoy the ultimate vibes at the best design college in the country!
              </p>
              
              {/* Decorative bottom underline for the paragraph text as seen in screenshot */}
              <div className="w-[60px] h-[2px] bg-[#ED1C24] md:hidden mx-auto mb-4"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Optional Styling for mobile text consistency */}
      <style jsx global>{`
        .font-display {
          font-family: 'Montserrat', sans-serif;
        }
        .font-body {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;