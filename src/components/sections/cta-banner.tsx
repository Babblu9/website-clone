import React from 'react';

const CtaBanner: React.FC = () => {
  return (
    <section 
      className="bg-[#ED2124] py-[80px] w-full flex items-center justify-center text-center"
      style={{
        backgroundColor: '#ED2124',
      }}
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          {/* Subheading */}
          <h3 
            className="text-white font-display font-bold uppercase tracking-tight m-0"
            style={{
              fontSize: '24px',
              lineHeight: '1.4',
              marginBottom: '4px'
            }}
          >
            Study at #1 Diploma Textile Designing College
          </h3>
          
          {/* Main Heading */}
          <h2 
            className="text-white font-display font-bold uppercase m-0"
            style={{
              fontSize: '60px',
              lineHeight: '1.1',
              letterSpacing: '-0.01em',
              marginBottom: '30px'
            }}
          >
            Study at IIFD
          </h2>

          {/* CTA Button */}
          <div className="mt-4">
            <a 
              href="https://iifd.in/contact-us/"
              className="inline-block border-2 border-white text-white hover:bg-white hover:text-[#ED2124] transition-all duration-300 font-display font-bold px-[30px] py-[12px] text-[13px] tracking-wide"
              style={{
                borderRadius: '0px',
                textTransform: 'uppercase'
              }}
            >
              GET IN TOUCH
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;