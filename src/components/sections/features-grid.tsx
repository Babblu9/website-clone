import React from 'react';
import { Award, Globe, LineChart, PenTool, BookOpen, Monitor } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Award Winning College",
    description: "Multi-Award winning College for consecutively two years as Best Design College."
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Global Industry Relationships and Alliances to provide a world-class standard of education."
  },
  {
    icon: LineChart,
    title: "99% Placement Record",
    description: "Groundbreaking 99% Placement Record for the year 2025"
  },
  {
    icon: PenTool,
    title: "40+ Top Designers Onboard",
    description: "Learn from the Top Fashion & Interior Designers in the country."
  },
  {
    icon: Monitor,
    title: "Modern Teaching Methods",
    description: "Our expert faculty deploys the latest and greatest teaching methodologies."
  },
  {
    icon: BookOpen,
    title: "Making Learning Easy",
    description: "An extensive collection of books, journals and Audio Video material is made available."
  }
];

const FeaturesGrid = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center max-w-[350px] mx-auto"
            >
              <div className="mb-6 flex items-center justify-center">
                <feature.icon 
                  className="text-brand-red" 
                  size={42} 
                  strokeWidth={2}
                />
              </div>
              
              <h3 className="font-display font-bold text-[#111111] text-[20px] leading-[1.3] mb-4 uppercase tracking-tight">
                {feature.title}
              </h3>
              
              <p className="font-body text-[#555555] text-[15px] leading-[1.6] font-normal">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesGrid;