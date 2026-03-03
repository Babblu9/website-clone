import React from 'react';

/**
 * StudentWork Component
 * 
 * A pixel-perfect clone of the "Student's Work" section based on the design tokens
 * and visual evidence provided. It features a bold red background container
 * with a centered black slider/gallery area.
 */
const StudentWork: React.FC = () => {
  return (
    <section 
      className="relative bg-[#ED2024] py-[80px] md:py-[100px] overflow-hidden"
      id="student-work"
    >
      <div className="container mx-auto px-4">
        {/* Section Heading positioned inside the top part of the red area */}
        <div className="max-w-[1200px] mx-auto mb-10">
          <h3 className="font-display text-[28px] md:text-[36px] font-bold text-white uppercase tracking-tight leading-tight">
            Student&apos;s Work
          </h3>
        </div>

        {/* Gallery/Slider Container */}
        {/* Identified as a "black background area intended for a slider" in instructions */}
        <div className="w-full max-w-[1000px] mx-auto bg-[#111111] aspect-video md:aspect-[21/9] relative flex flex-col items-center justify-center shadow-2xl">
          {/* Main Placeholder for Student Projects Slider */}
          <div className="relative w-full h-full flex flex-col items-center justify-center p-8">
            {/* Visual representation of a slider/placeholder content */}
            <div className="text-white/40 font-display text-sm uppercase tracking-widest text-center">
              Student Portfolio Gallery
              <div className="mt-4 flex gap-2 justify-center">
                <div className="w-2 h-2 rounded-full bg-white opacity-100" />
                <div className="w-2 h-2 rounded-full bg-white opacity-20" />
                <div className="w-2 h-2 rounded-full bg-white opacity-20" />
                <div className="w-2 h-2 rounded-full bg-white opacity-20" />
              </div>
            </div>
          </div>

          {/* Slider Controls / Pagination Dots (Mockup based on typical IIFD slider style) */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-[6px]">
            {Array.from({ length: 30 }).map((_, i) => (
              <span 
                key={i} 
                className={`w-[4px] h-[4px] rounded-full ${i === 2 ? 'bg-[#ED2024]' : 'bg-white'}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Spacing as seen in the high-level layout */}
        <div className="mt-12 md:mt-16 flex justify-center">
          {/* Additional decorative or spacing element if needed, though clean in screenshot */}
        </div>
      </div>

      {/* Background visual weight accent (Optional based on crop) */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-black/5 pointer-events-none" />
    </section>
  );
};

export default StudentWork;