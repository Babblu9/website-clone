import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * IIFDTalks component: A split-layout slider featuring a black title block
 * on the left and a white slider/interactive area on the right.
 */
const IIFDTalks = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 10; // Based on the number of dots in the design screenshot

  // Auto-slide functionality (optional but standard for these sliders)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-[100px] bg-[#FFFFFF]">
      <div className="container px-5 mx-auto max-w-[1240px]">
        {/* Main Card Container with specific shadow and border transition */}
        <div className="relative flex flex-col md:flex-row min-h-[400px] border-t-[5px] border-[#ED1C24] shadow-[0px_5px_15px_rgba(0,0,0,0.1)] overflow-hidden">
          
          {/* Left Title Block (Black) */}
          <div className="w-full md:w-[35%] bg-[#111111] flex flex-col justify-center p-12 lg:p-16">
            <h4 className="font-display text-[42px] font-bold leading-[1.1] text-white tracking-tight">
              IIFT
              <br />
              Talks
            </h4>
          </div>

          {/* Right Slider Block (White) */}
          <div className="w-full md:w-[65%] bg-[#f9f9f9] relative flex items-center justify-center p-8 overflow-hidden">
            
            {/* Nav Arrows (Subtle/Light) - Computed styles suggest minimalist UI */}
            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-gray-600 transition-colors z-10"
              onClick={() => setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)}
            >
              <ChevronLeft size={32} strokeWidth={1} />
            </button>
            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 text-gray-300 hover:text-gray-600 transition-colors z-10"
              onClick={() => setCurrentSlide((prev) => (prev + 1) % totalSlides)}
            >
              <ChevronRight size={32} strokeWidth={1} />
            </button>

            {/* Slider Content Area - Placeholder for actual content/video items */}
            <div className="w-full h-full flex items-center justify-center">
              <div 
                className="w-full transition-opacity duration-500 ease-in-out"
                key={currentSlide}
              >
                {/* Visual Placeholder for Talk Content as per screenshot */}
                <div className="w-full aspect-video flex items-center justify-center">
                  {/* Talk video/image would go here */}
                </div>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`w-[6px] h-[6px] rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-black w-[8px] h-[8px]' 
                      : 'bg-[#cccccc]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx global>{`
        .font-display {
          font-family: 'Montserrat', sans-serif;
        }
        .container {
          max-width: 1200px;
          margin: 0 auto;
        }
      `}</style>
    </section>
  );
};

export default IIFDTalks;