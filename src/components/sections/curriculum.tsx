"use client";
import React, { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const Curriculum = () => {
  const [isYear1Open, setIsYear1Open] = useState(true);

  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto px-6 max-w-[1200px]">
        {/* Section Heading */}
        <h2 className="text-[#ED2124] font-display text-[36px] font-bold uppercase mb-[40px] tracking-tight">
          Diploma in Textile Design Curriculum
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-[30px]">
          {/* Left Column: Curriculum Accordion */}
          <div className="lg:col-span-8">
            <div className="border border-[#D9D9D9]">
              {/* Accordion Header */}
              <button
                onClick={() => setIsYear1Open(!isYear1Open)}
                className="w-full flex items-center justify-between px-[25px] py-[15px] bg-white text-left focus:outline-none"
              >
                <span className="font-display text-[18px] font-bold text-[#000000] uppercase">
                  YEAR 1
                </span>
                {isYear1Open ? (
                  <Minus className="w-5 h-5 text-[#ED2124]" />
                ) : (
                  <Plus className="w-5 h-5 text-[#ED2124]" />
                )}
              </button>

              {/* Accordion Content */}
              {isYear1Open && (
                <div className="px-[25px] pb-[30px] border-t border-[#D9D9D9]">
                  <p className="mt-[20px] text-[15px] text-[#000000] font-body leading-[1.6]">
                    The course deals with textile engineering with the application of scientific and engineering principles to the design and control of all aspects of fibre, textile, apparel processes products and machinery. Designers will be able to judge the fabric quality and the machinery best suited for the process.
                  </p>

                  <ul className="mt-[20px] space-y-2">
                    {[
                      'Elements and principles of textile',
                      'Color psychology',
                      'Textile fundamentals',
                      'Introduction to advance machinery',
                      'Drawing and sketching',
                      'Dyeing and printing',
                      'Textile testing'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start text-[14px] text-[#000000] font-body">
                        <span className="mr-2 text-[#000000]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-[30px] text-[13px] text-[#000000] font-body leading-[1.5] uppercase font-medium">
                    NOTE: The above said curriculum details are just the indicative outline. Kindly get in touch with the academic counselor for more details.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Contact Form Box */}
          <div className="lg:col-span-4">
            <div className="sidebar-contact-box">
              <h3 className="text-[#ED2124] font-display text-[24px] font-bold uppercase mb-[20px] text-center">
                Get In Touch
              </h3>

              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <input
                    type="text"
                    placeholder="NAME"
                    className="w-full h-[45px] px-4 border border-[#D9D9D9] focus:outline-none focus:border-[#ED2124] font-body text-[13px]"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="EMAIL"
                    className="w-full h-[45px] px-4 border border-[#D9D9D9] focus:outline-none focus:border-[#ED2124] font-body text-[13px]"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="PHONE"
                    className="w-full h-[45px] px-4 border border-[#D9D9D9] focus:outline-none focus:border-[#ED2124] font-body text-[13px]"
                  />
                </div>
                <div>
                  <select className="w-full h-[45px] px-4 border border-[#D9D9D9] focus:outline-none focus:border-[#ED2124] font-body text-[13px] text-[#737373] bg-white appearance-none">
                    <option value="">SELECT COURSE</option>
                    <option value="diploma-textile">Diploma in Textile Design</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full h-[45px] bg-[#ED2124] text-white font-display font-bold text-[14px] uppercase hover:bg-black transition-colors duration-300"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;