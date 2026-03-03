import React from 'react';

/**
 * CTAMentors Section
 * 
 * A full-width call-to-action section with:
 * - Bright red background (#ED1C24)
 * - Large white headline "Like What You See?"
 * - Centered subtext in white
 * - White outlined "GET IN TOUCH" button
 * 
 * Based on the design instructions and high-level design system.
 */
const CTAMentors: React.FC = () => {
  return (
    <section 
      className="w-full bg-[#ED1C24] py-[80px] md:py-[100px] px-6 flex flex-col items-center text-center overflow-hidden"
    >
      <div className="max-w-[1200px] w-full mx-auto flex flex-col items-center">
        {/* Main Headline */}
        <h2 
          className="text-[#FFFFFF] font-extrabold text-[40px] md:text-[64px] lg:text-[72px] leading-[1.1] mb-8 font-display"
          style={{ 
            fontWeight: 800,
            letterSpacing: '-0.02em'
          }}
        >
          Like What You See?
        </h2>

        {/* Subtext */}
        <div className="max-w-[800px] mb-10">
          <h3 
            className="text-[#FFFFFF] font-bold text-[18px] md:text-[24px] leading-[1.4] uppercase tracking-[0.05em] font-display"
            style={{ 
              fontWeight: 700 
            }}
          >
            GET IN TOUCH WITH OUR MENTORS TO GET<br className="hidden md:block" />
            THE ANSWERS TO ALL YOUR QUESTIONS
          </h3>
        </div>

        {/* Call to Action Button */}
        <div className="mt-2">
          <a
            href="/contact-us/"
            className="inline-block border-[1.5px] border-[#FFFFFF] text-[#FFFFFF] px-8 py-3 text-[14px] md:text-[16px] font-bold uppercase tracking-[0.1em] transition-all duration-300 hover:bg-[#FFFFFF] hover:text-[#ED1C24] font-display"
            style={{
              borderRadius: '0px',
            }}
          >
            GET IN TOUCH
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTAMentors;