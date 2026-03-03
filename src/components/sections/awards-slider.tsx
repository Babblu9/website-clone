"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const awardsData = [
  {
    title: "Proud Moment!",
    description: "We are thrilled to announce that IIFD have been awarded the prestigious title of ‘Most Leading Design College 2023’ at the 17th Edition of #TheEducationSummit held at Radisson RED, Mohali, Chandigarh. Grateful for this recognition and honored to be associated with the Government of Haryana."
  },
  {
    title: "5th rank Pan India among the top 40 private design colleges by the IIRF ranking",
    description: "We are proud to announce that the Indian Institute of Fashion & Design (IIFD) has been ranked 5th in Pan India among the top 40 private design colleges by the IIRF ranking. This achievement marks yet another significant milestone in our ongoing journey of excellence in the field of design education."
  },
  {
    title: "Collaboration between Times Lifestyle Week and IIFD",
    description: "We are thrilled to announce the collaboration between Times Lifestyle Week and the Indian Institute of Fashion & Design (IIFD) as a Powered-By partner. This partnership presents our students with an exceptional opportunity to showcase their talent and collections on a global runway, highlighting the innovative and creative spirit of IIFD."
  },
  {
    title: "ET Women Inspiring Leader Award",
    description: "Vimi Vansil, Director of IIFD, receives the ET Women Inspiring Leader Award from former Miss Universe, Sushmita Sen. This prestigious accolade recognizes Vansil’s exceptional leadership in empowering women and fostering innovation in the design industry. Her visionary guidance at IIFD has not only shaped aspiring designers but also inspired a new generation of female leaders."
  },
  {
    title: "Best Design College - 2024",
    description: "In 2024, IIFD proudly earned the esteemed distinction of being named the “Best Design College Award.” This prestigious accolade underscores the institute’s exceptional dedication to cultivating the skills and talents of future designers. Renowned for its forward-thinking and creative approach."
  },
  {
    title: "Most Emerging Design Institute - 2023",
    description: "IIFD has been awarded the “Most Emerging Design Institute” in the design industry in 2023, acknowledging the institute’s exceptional contributions towards the education and training of future designers. The institute has been applauded for its innovative and creative approach."
  }
];

const AwardsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % awardsData.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + awardsData.length) % awardsData.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="bg-brand-red w-full py-[80px] overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-white text-[42px] font-extrabold font-display text-center mb-12 uppercase">
          Awards & Recognition
        </h2>

        <div className="relative max-w-[1000px] mx-auto min-h-[300px] flex items-center">
          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-[-60px] top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors hidden md:block"
            aria-label="Previous slide"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-[-60px] top-1/2 -translate-y-1/2 text-white/80 hover:text-white transition-colors hidden md:block"
            aria-label="Next slide"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>

          {/* Slider Content */}
          <div className="w-full text-center">
            {awardsData.map((award, index) => (
              <div
                key={index}
                className={`transition-all duration-700 ease-in-out transform absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 ${
                  index === currentIndex 
                    ? "opacity-100 scale-100 pointer-events-auto" 
                    : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <h3 className="text-white text-[24px] md:text-[28px] font-bold font-display mb-6">
                  {award.title}
                </h3>
                <p className="text-white text-[15px] md:text-[16px] leading-[1.8] font-body font-normal opacity-90 max-w-[850px] mx-auto">
                  {award.description}
                </p>
              </div>
            ))}
            {/* Height Spacer to maintain vertical space for absolute positioned items */}
            <div className="invisible pointer-events-none">
              <h3 className="text-[28px] font-bold mb-6">Placeholder Title</h3>
              <p className="text-[16px] leading-[1.8] max-w-[850px] mx-auto">
                Placeholder text to ensure the container has height. We use the longest possible text to define the required height of the absolute positioned children that would otherwise not take up space.
                This is a multi-line placeholder to match the layout of the award descriptions provided in the content block.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex justify-center gap-8 mt-8 md:hidden">
          <button onClick={prevSlide} className="text-white">
            <ChevronLeft size={32} />
          </button>
          <button onClick={nextSlide} className="text-white">
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {awardsData.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-white w-6" : "bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx global>{`
        .bg-brand-red {
          background-color: #ed1c24;
        }
        .font-display {
          font-family: "Montserrat", sans-serif;
        }
        .font-body {
          font-family: "Poppins", sans-serif;
        }
      `}</style>
    </section>
  );
};

export default AwardsSlider;