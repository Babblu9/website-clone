import React from 'react';
import { Quote } from 'lucide-react';

/**
 * QuoteDivider Component
 * 
 * A black background section featuring a large white quote icon and a central
 * motivational statement about designers as strategists and communicators.
 * Derived from the "Designers are strategists..." content section.
 */
const QuoteDivider: React.FC = () => {
  return (
    <section 
      className="bg-[#111111] text-white py-[80px] px-4 md:px-0 flex flex-col items-center justify-center text-center"
      aria-label="Design Philosophy Quote"
    >
      <div className="container mx-auto max-w-[1200px]">
        {/* Quote Icon - Using Lucide for pixel-perfect spacing and alignment */}
        <div className="mb-8 flex justify-center">
          <Quote 
            size={64} 
            fill="white" 
            strokeWidth={0} 
            className="opacity-100"
            aria-hidden="true"
          />
        </div>

        {/* Motivational Statement */}
        <div className="max-w-[900px] mx-auto">
          <h4 
            className="font-serif italic text-white text-[24px] md:text-[28px] leading-[1.5] font-medium mb-0"
            style={{ fontFamily: 'var(--font-serif)' }}
          >
            Designers are strategists, communicators, makers and entrepreneurs. 
            We make cool stuff, and we make stuff cool. It’s a great time to join 
            such a multifaceted profession.
          </h4>
        </div>
      </div>
    </section>
  );
};

export default QuoteDivider;