import React from 'react';

const IndustryExperience = () => {
  return (
    <section className="py-[100px] bg-white overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-5">
        
        {/* First Row: Blurring The Lines Between Classroom & Career */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-20 mb-[100px]">
          <div className="w-full md:w-1/2">
            <h3 className="font-display text-[24px] md:text-[32px] font-bold leading-[1.3] text-[#ed1c24] mb-6 max-w-[450px]">
              Blurring The Lines Between Classroom & Career
            </h3>
            <p className="font-body text-[16px] leading-[1.8] text-[#54595f]">
              IIFT Provides first-hand industry experience. Regular Industrial
              visits at Buying Houses, Product Houses & Brand Warehouses is a
              proven success fact for students here. We make you learn what
              helps you in writing your success story.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-video bg-black flex items-center justify-center">
              {/* Placeholder for video/image block */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                   <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[15px] border-l-white border-b-[10px] border-b-transparent ml-1" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Second Row: Live, Learn, Explore (Alternating Layout) */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10 lg:gap-20">
          <div className="w-full md:w-1/2">
            <h3 className="font-display text-[24px] md:text-[32px] font-bold leading-[1.3] text-[#ed1c24] mb-6 max-w-[450px]">
              Live, Learn, Explore
            </h3>
            <div className="space-y-6">
              <p className="font-body text-[16px] leading-[1.8] text-[#54595f]">
                Study at IIFT is not limited to Theories Only. Your classroom at
                IIFT is Skill & Talent Refinement Hub where expert faculty
                assist you with high tech labs & instruments to expand learning
                beyond the horizons.
              </p>
              <p className="font-body text-[16px] leading-[1.8] text-[#54595f]">
                IIFT campus sits in the heart of Chandigarh, putting students just
                minutes away from the entertainment, cultural riches and
                opportunities of “The Most Perfect City In The World.”
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[4/3] bg-[#f5f5f5] flex items-center justify-center border border-border">
              {/* Placeholder for city showcase or campus image as seen in screenshot 6 */}
              <div className="text-center p-8">
                <div className="w-20 h-1 bg-[#ed1c24] mx-auto mb-4" />
                <span className="font-display font-semibold text-xs tracking-[2px] text-[#111111] uppercase">Campus Environment</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default IndustryExperience;