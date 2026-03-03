import React from 'react';
import Image from 'next/image';

const WhatWeDo = () => {
  return (
    <section className="bg-white py-[80px] overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Heading */}
        <div className="text-center mb-[60px]">
          <h2 className="section-title text-[#ED1C24] font-black text-[clamp(2.5rem,8vw,5.5rem)] leading-none italic">
            What We Do -
          </h2>
        </div>

        {/* Top Image Section */}
        <div className="relative flex justify-center mb-[100px]">
          <div className="relative w-full max-w-[800px] z-10">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/About-US-IIFT-2-1-4.jpg"
              alt="Students at IIFT outdoor installation"
              width={800}
              height={500}
              className="object-cover"
              priority
            />
          </div>
          {/* Decorative Vertical Line */}
          <div className="absolute top-0 right-[-40px] h-[120%] w-[1px] bg-black hidden lg:block opacity-20"></div>
        </div>

        {/* Mission Frame Section */}
        <div className="relative max-w-[1100px] mx-auto pt-[40px]">
          {/* "OUR BELIEF" Floating Card */}
          <div 
            className="absolute top-0 left-0 lg:left-[-40px] bg-white p-8 lg:p-10 border-l-[4px] border-[#ED1C24] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] z-20 max-w-[360px]"
          >
            <h3 className="text-[#ED1C24] font-bold text-[18px] uppercase tracking-wider mb-6">
              OUR BELIEF
            </h3>
            <p className="text-[#333333] font-display font-semibold text-[22px] leading-[1.4]">
              We believe everyone has the capacity to be creative.
            </p>
          </div>

          {/* Red Bordered Content Box */}
          <div className="border-[2px] border-[#ED1C24] mt-[100px] lg:mt-[60px] ml-[20px] lg:ml-[250px] p-8 lg:p-14 relative">
            <div className="max-w-[700px] text-[#333333] text-[16px] leading-[1.8] font-body">
              <p className="mb-6">
                IIFT prepares students for professional excellence in design and business through rigorous and adaptable academic programs, experiential learning and innovative partnerships. <span className="text-[#ED1C24]">IIFT</span> depicts as a centre for a perfect amalgamation of design education and research.
              </p>
              <p className="mb-6">
                The college makes the students familiar with recent industry trends and works accordingly. It holds a well-established name in the education and fashion ecosystem because of its advanced curriculum, industry insights and national and international exposure.
              </p>
            </div>

            {/* Vertical "OUR MISSION" text */}
            <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 hidden lg:block">
              <span 
                className="vertical-text text-[#ED1C24] font-bold text-[14px] uppercase tracking-[0.2em] whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(0deg)' }}
              >
                OUR MISSION
              </span>
            </div>
          </div>
        </div>

        {/* How We Do It Title */}
        <div className="text-center mt-[120px] mb-[80px]">
          <h2 className="section-title text-[#ED1C24] font-black text-[clamp(2.5rem,8vw,5.5rem)] leading-none italic">
            How We Do It
          </h2>
        </div>

        {/* Vision Frame Section */}
        <div className="relative max-w-[1100px] mx-auto pt-[40px] pb-[40px]">
          {/* Decorative left line */}
          <div className="absolute left-[-40px] top-[-100px] bottom-0 w-[1px] bg-black opacity-40 hidden lg:block"></div>
          
          {/* "UNLEASHING CREATIVITY" Floating Card */}
          <div 
            className="absolute top-0 right-0 lg:right-[-40px] bg-white p-8 lg:p-10 border-l-[4px] border-[#ED1C24] shadow-[0px_10px_30px_rgba(0,0,0,0.08)] z-20 max-w-[360px]"
          >
            <h3 className="text-[#ED1C24] font-bold text-[18px] uppercase tracking-wider mb-6">
              UNLEASHING CREATIVITY
            </h3>
            <p className="text-[#333333] font-display font-semibold text-[22px] leading-[1.4]">
              Here&apos;s what that looks like at IIFT
            </p>
          </div>

          {/* Red Bordered Vision Box */}
          <div className="border-[2px] border-[#ED1C24] mt-[100px] lg:mt-[60px] mr-[20px] lg:mr-[250px] p-8 lg:p-14 relative">
            {/* Vertical "OUR VISION" text */}
            <div className="absolute left-[-60px] top-1/2 -translate-y-1/2 hidden lg:block">
              <span 
                className="vertical-text text-[#ED1C24] font-bold text-[14px] uppercase tracking-[0.2em] whitespace-nowrap"
                style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
              >
                OUR VISION
              </span>
            </div>

            <div className="max-w-[700px] text-[#333333] text-[16px] leading-[1.8] font-body ml-auto text-right">
              <p className="mb-6">
                Innovative curriculum, hands-on experience and industry-ready professionals, that&apos;s what IIFT is known for. Taught by highly qualified, experienced designers and artists, students can hone their abilities and sharpen their design skills at the institute.
              </p>
              <p className="mb-0">
                Our vision is to take the institute to a level where it is celebrated globally as an institution where students cross traditional disciplinary boundaries to stimulate innovation, partner with creative industries worldwide, and develop innovative design and business solutions. By focusing on these major goals, IIFT will become stronger by conscious design and be known as a strategic organisation—one that applies available resources to greatest effect to achieve its vision.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;