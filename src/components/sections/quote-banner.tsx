import React from 'react';
import { Quote } from 'lucide-react';

/**
 * QuoteBanner Section
 * Pixel-perfect clone of the centered quote section with black background.
 * Guidance: "Designers are strategists, communicators, makers and entrepreneurs..."
 */
const QuoteBanner = () => {
  return (
    <section 
      style={{
        backgroundColor: '#111111',
        paddingTop: '80px',
        paddingBottom: '80px',
      }}
      className="w-full flex flex-col items-center justify-center text-center px-6"
    >
      <div className="max-w-[1200px] w-full flex flex-col items-center">
        {/* Styled Quotation Mark Icon */}
        <div 
          className="mb-8"
        >
          <Quote 
            size={68} 
            color="#ffffff" 
            strokeWidth={3} 
            className="transform rotate-180" 
            fill="#ffffff"
          />
        </div>

        {/* Quote Content */}
        <h2 
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontStyle: 'italic',
            fontWeight: '500',
            lineHeight: '1.5',
            color: '#ffffff',
            textTransform: 'none', // Overriding base h2 uppercase
            margin: '0 auto',
            maxWidth: '1000px',
          }}
          className="tracking-tight"
        >
          Designers are strategists, communicators, makers and entrepreneurs. We
          make cool stuff, and we make stuff cool. It’s a great time to join 
          such a multifaceted profession.
        </h2>
      </div>
    </section>
  );
};

export default QuoteBanner;