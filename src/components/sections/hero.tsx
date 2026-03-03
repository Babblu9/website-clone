import React from 'react';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white min-h-[600px] flex flex-col justify-center section-padding">
      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-between">
        {/* Left side: Interactive Category Boxes */}
        <div className="relative flex flex-col md:flex-row items-start gap-0 mt-20 md:mt-0">
          {/* FASHION Box */}
          <a 
            href="#" 
            className="group relative bg-[#828282] w-[220px] h-[220px] p-6 flex flex-col justify-between transition-all duration-300 border-[3px] border-transparent hover:border-[#ed1c24] -mb-10 md:mb-0 md:-mr-10 z-[3]"
          >
            <h2 className="text-white text-[24px] font-extrabold tracking-tight uppercase font-display m-0 p-0 leading-none">
              FASHION
            </h2>
            <div className="flex justify-end transform transition-transform group-hover:translate-x-2">
              <ArrowRight className="text-white w-10 h-10" />
            </div>
          </a>

          {/* INTERIOR Box */}
          <a 
            href="#" 
            className="group relative bg-[#828282] w-[220px] h-[220px] p-6 flex flex-col justify-between transition-all duration-300 border-[3px] border-transparent hover:border-[#ed1c24] -mb-10 md:mb-0 md:-mr-10 z-[2] mt-0 md:mt-[-40px]"
          >
            <h2 className="text-white text-[24px] font-extrabold tracking-tight uppercase font-display m-0 p-0 leading-none">
              INTERIOR
            </h2>
            <div className="flex justify-end transform transition-transform group-hover:translate-x-2">
              <ArrowRight className="text-white w-10 h-10" />
            </div>
          </a>

          {/* TEXTILE Box */}
          <a 
            href="#" 
            className="group relative bg-[#828282] w-[220px] h-[220px] p-6 flex flex-col justify-between transition-all duration-300 border-[3px] border-transparent hover:border-[#ed1c24] z-[1] mt-0 md:mt-[40px]"
          >
            <h2 className="text-white text-[24px] font-extrabold tracking-tight uppercase font-display m-0 p-0 leading-none">
              TEXTILE
            </h2>
            <div className="flex justify-end transform transition-transform group-hover:translate-x-2">
              <ArrowRight className="text-white w-10 h-10" />
            </div>
          </a>
        </div>

        {/* Right side: Header */}
        <div className="md:text-right mt-24 md:mt-0 max-w-xl">
          <h1 className="text-[#ed1c24] font-extrabold text-[48px] md:text-[64px] uppercase tracking-normal leading-[1.1] m-0 font-display">
            Get In Touch
          </h1>
        </div>
      </div>

      {/* Background Decorative Element (Optional based on screenshot space) */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -z-10 pointer-events-none" />
    </section>
  );
};

export default HeroSection;