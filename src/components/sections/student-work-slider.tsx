import React from 'react';

const StudentWorkSlider = () => {
  return (
    <section 
      className="bg-[#111111] overflow-hidden" 
      style={{ padding: '0px 0px 40px 0px' }}
    >
      <div className="max-w-[1240px] mx-auto px-4 lg:px-6">
        <div 
          className="bg-[#0a0a0a] min-h-[350px] md:min-h-[450px] relative mt-[-200px] mb-10 z-10"
          style={{
            boxShadow: '0px 10px 30px rgba(0,0,0,0.5)'
          }}
        >
          {/* Header Area */}
          <div className="p-8 md:p-12">
            <h3 
              className="text-white font-display text-[24px] md:text-[32px] font-bold uppercase tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                lineHeight: '1.2'
              }}
            >
              Student&apos;s Work
            </h3>
          </div>

          {/* Slider Content Placeholder - Based on screenshots there are no visible images in the viewport */}
          <div className="flex items-center justify-center h-[200px]">
            {/* Carousel images would go here */}
          </div>

          {/* Pagination dots container */}
          <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center gap-1">
            {/* Active dot */}
            <div className="w-[6px] h-[6px] rounded-full bg-[#ed2124]" />
            
            {/* Inactive dots mimicking the screenshot - roughly 30 dots */}
            {[...Array(29)].map((_, i) => (
              <div 
                key={i} 
                className="w-[3px] h-[3px] rounded-full bg-white opacity-100" 
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentWorkSlider;