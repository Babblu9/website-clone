import React from 'react';
import Image from 'next/image';

/**
 * IntroductionSection Component
 * 
 * Clones the introductory section of IIFD with the headline 
 * "The Start Of Your Creative Career Begins Here", descriptive text, 
 * a "READ MORE" button, and a vertical image of a model.
 */
const IntroductionSection = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-12 md:gap-16">
          
          {/* Left Content Column */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <span className="text-brand-red font-display text-[14px] md:text-[16px] font-semibold uppercase tracking-wider mb-4">
              IIFD - BEST FASHION DESIGN COLLEGE
            </span>
            
            <h2 className="text-brand-red font-display text-[32px] md:text-[42px] font-bold leading-[1.2] mb-8 max-w-[500px]">
              The Start Of Your Creative Career Begins Here
            </h2>
            
            <div className="text-[#333333] font-body text-[16px] leading-[1.6] mb-8 space-y-4">
              <p>
                Indian Institute Of Fashion and Design – IIFD is a considered to be{' '}
                <span className="font-semibold text-near-black">Best Fashion Design College in India</span> because of
                the hard-work and critical creative thinking. IIFD ensures to deliver the best of knowledge and
                international standard of education to the budding designers in the discipline of Fashion Designing.
              </p>
              <p>
                As a top design college, Indian Institute Of Fashion & Design holds a well-established name in the
                education and fashion ecosystem because of its advance curriculum, industry insights and national and
                international exposure and focuses to deliver{' '}
                <span className="font-semibold text-near-black">Best Fashion Designing Courses in India</span>. Get ready
                to step in the world of creativity with IIFD and build a more reliable, sustainable and artistic future.
              </p>
            </div>
            
            <a 
              href="/about-us" 
              className="inline-block border-[1.5px] border-brand-red text-brand-red font-display text-[14px] md:text-[15px] font-bold uppercase py-[12px] px-[24px] tracking-wide hover:bg-brand-red hover:text-white transition-all duration-300 ease-in-out"
            >
              READ MORE
            </a>
          </div>

          {/* Right Image/Quote Column */}
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="relative w-full aspect-[3/4] md:aspect-[5/7] max-w-[450px] mx-auto md:ml-auto">
              {/* Vertical Model Image */}
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/Home-Page-Image-Model-4-2.webp"
                alt="IIFD Model in Blue Dress"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Quote / Subtext below image as seen in screenshots */}
            <div className="mt-8 self-end text-right md:text-left md:ml-[20%] max-w-[350px]">
              <p className="italic font-body text-[#111111] text-[20px] md:text-[24px] font-medium leading-[1.3]">
                Our goal is to help you use design to make change where you are.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;