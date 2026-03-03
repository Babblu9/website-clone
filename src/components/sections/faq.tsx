"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

const faqs: FAQItem[] = [
  {
    question: "What is a diploma in Textile Design Course in India ?",
    answer: (
      <div className="space-y-4">
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          <span className="text-[#ed2124] font-bold">Diploma in Textile Design</span> course is a 1 year or 2-year course that provides students with the skills and knowledge necessary to work in the textile design industry. The course covers a wide range of topics, including fabric design, color theory, pattern making, and garment construction. Students also learn about the textile industry, from raw materials to finished products.
        </p>
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          To be eligible for a <span className="font-bold">Diploma in Textile Design</span>, students must have a 10+2 or equivalent qualification with a minimum of 50% marks in any stream. Some colleges may also require students to have taken art or design subjects at the 10+2 level.
        </p>
      </div>
    ),
  },
  {
    question: "What is the scope of a Diploma in Textile Designing?",
    answer: (
      <div className="space-y-4">
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          The scope of a Diploma in Textile Designing is vast and growing. The textile industry is a major contributor to the Indian economy, and it is constantly evolving. This means that there are many opportunities for textile designers with a diploma.
        </p>
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          Here are some of the job profiles that you can pursue with a Diploma in Textile Design:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Textile Designer</li>
            <li>Fabric Resource Manager</li>
            <li>Print Designer</li>
            <li>Weaving or Knitting Specialist</li>
          </ul>
        </p>
      </div>
    ),
  },
  {
    question: "Can I do a Diploma in Textile Design after the 12th?",
    answer: (
      <div className="space-y-4">
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          Yes, you can do a Diploma in Textile Design after the 12th. The minimum eligibility criteria for a Diploma in Textile Designing is a 10+2 or equivalent qualification with a minimum of 50% marks in any stream. Some colleges may also require students to have taken art or design subjects at the 10+2 level.
        </p>
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          There are many colleges and universities in India that offer Diploma in Textile Design courses.
        </p>
      </div>
    ),
  },
  {
    question: "What jobs are in textiles?",
    answer: (
      <div className="space-y-4">
        <p className="text-[#000000] text-[15px] leading-[1.6]">
          The textile industry offers a variety of career paths including roles such as Textile Designer, Quality Control Lab Manager, Fabric Analyst, Merchandiser, and Production Manager. Many graduates also find success as entrepreneurs starting their own boutique fabric houses or design consultancies.
        </p>
      </div>
    ),
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white py-[80px]">
      <div className="container max-w-[1240px] mx-auto px-4 md:px-6">
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-[#000000] text-[36px] font-bold uppercase font-display leading-[1.2] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto border-t border-[#d9d9d9]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="border-b border-[#d9d9d9] overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full py-5 flex items-center justify-between text-left group hover:bg-gray-50/50 transition-colors px-4"
                  aria-expanded={isOpen}
                >
                  <span className={cn(
                    "text-[16px] md:text-[18px] font-semibold transition-colors font-body",
                    isOpen ? "text-[#ed2124]" : "text-[#111111]"
                  )}>
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {isOpen ? (
                      <Minus className="w-5 h-5 text-[#ed2124] stroke-[3px]" />
                    ) : (
                      <Plus className="w-5 h-5 text-[#111111] stroke-[3px]" />
                    )}
                  </div>
                </button>
                
                <div
                  className={cn(
                    "transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[500px] opacity-100 py-4 px-4 bg-white" : "max-h-0 opacity-0 overflow-hidden"
                  )}
                >
                  <div className="pb-4 font-body text-[#555555]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;