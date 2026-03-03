import React from 'react';
import { Award, Calendar, Zap, BookOpen, Clock, Lightbulb } from 'lucide-react';

/**
 * BenefitsSection Component
 * 
 * Clones the "BENEFITS OF APPLYING EARLY" section with a solid red background
 * and a two-column layout of white icons and benefit text.
 */
const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Award className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      text: "Be a part of 18+ Years of Legacy."
    },
    {
      icon: <Calendar className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      text: "More time to look for preparing for the college."
    },
    {
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      text: "Early Decision leads to Early Action"
    },
    {
      icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      text: "Eligible for Early Pre-Semester Learning"
    },
    {
      icon: <Clock className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      text: "Early Decision saves time and expense."
    },
    {
      icon: <Lightbulb className="w-8 h-8 md:w-10 md:h-10 text-white" strokeWidth={1.5} />,
      text: "Experience the Curriculum with a headstart"
    }
  ];

  return (
    <section 
      className="bg-[#e1211a] py-16 md:py-24" 
      aria-labelledby="benefits-title"
    >
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Section Heading */}
        <h2 
          id="benefits-title" 
          className="text-white text-center text-[28px] md:text-[36px] lg:text-[42px] font-bold mb-12 md:mb-20 uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          Benefits Of Applying Early
        </h2>

        {/* Benefits Grid - 2 columns on mobile, 2 columns on desktop as per instructions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10 md:gap-y-16 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="flex items-center gap-6 group"
            >
              {/* Icon Container */}
              <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                {benefit.icon}
              </div>
              
              {/* Benefit Text */}
              <p 
                className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.3] text-left"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {benefit.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;