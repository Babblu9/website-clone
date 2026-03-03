import React from 'react';

/**
 * EveryoneIsCreative Component
 * 
 * A minimalist section with a large bold red headline, supportive body text 
 * challenging design notions, and a small-print legal disclaimer.
 * 
 * High-level design alignment:
 * - Color: #ED1C24 (IIFT Red), #333333 (Text Dark)
 * - Typography: Montserrat (Headings), Roboto (Body)
 * - Layout: Asymmetrical, wide spacing, 1200px max container.
 */

const EveryoneIsCreative: React.FC = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Main Aggressive Heading */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-[#ED1C24] font-display font-black text-[clamp(2.8rem,10vw,5.5rem)] leading-[0.9] md:leading-[1] italic md:not-italic select-none">
            Everyone Is <br />
            Creative
          </h2>
        </div>

        {/* Challenging Statement - Right Aligned on Desktop */}
        <div className="flex justify-end mb-24 md:mb-32">
          <div className="w-full md:w-[45%]">
            <p className="text-[#333333] font-body text-[18px] md:text-[22px] leading-[1.6] font-normal">
              We want to aggressively address and challenge the notion that design is just for a select few.
            </p>
          </div>
        </div>

        {/* Legal Disclaimer / Autonomous Note */}
        <div className="mt-20 border-t border-gray-100 pt-10">
          <p className="text-[#737373] font-body text-[13px] md:text-[14px] leading-[1.8] text-justify md:text-left">
            <span className="font-bold text-[#333333]">Note:</span> Indian Institute Of Fashion &amp; Design 
            is an autonomous college. Indian Institute Of Fashion &amp; Design does not offer any degree 
            programs of its own. However, it facilitates students who wish to pursue Indian or 
            international degree programs in UGC/AICTE approved universities, and thus facilitates 
            admissions into the same. Indian Institute Of Fashion &amp; Design provides extensive 
            classroom training programs as per Indian and International global standards.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EveryoneIsCreative;