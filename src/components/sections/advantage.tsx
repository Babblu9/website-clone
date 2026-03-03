import React from 'react';
import { 
  Building2, 
  TrendingUp, 
  Plane, 
  UserRound, 
  Presentation, 
  Gem, 
  UserCheck, 
  CalendarDays, 
  Globe, 
  GraduationCap, 
  FlaskConical, 
  BedDouble 
} from 'lucide-react';

const advantages = [
  {
    icon: <Building2 className="w-8 h-8 md:w-10 md:h-10" />,
    title: "industry visits"
  },
  {
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />,
    title: "97% placements"
  },
  {
    icon: <Plane className="w-8 h-8 md:w-10 md:h-10" />,
    title: "study abroad"
  },
  {
    icon: <UserRound className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Industry Expert Mentors"
  },
  {
    icon: <Presentation className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Industry Seminars"
  },
  {
    icon: <Gem className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Annual Fashion Shows"
  },
  {
    icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Certified Faculty"
  },
  {
    icon: <CalendarDays className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Regular Events"
  },
  {
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10" />,
    title: "Global Exposure"
  },
  {
    icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10" />,
    title: "academic scholarship"
  },
  {
    icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10" />,
    title: "practical labs"
  },
  {
    icon: <BedDouble className="w-8 h-8 md:w-10 md:h-10" />,
    title: "secured hostels"
  }
];

export default function IIFDAdvantage() {
  return (
    <section className="bg-[#ed2024] text-white py-[80px]">
      <div className="container mx-auto max-w-[1200px] px-4 md:px-6">
        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="font-display text-[28px] md:text-[36px] font-bold tracking-wider uppercase">
            #IIFT Advantage
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-12 gap-x-4">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group transition-transform duration-300"
            >
              {/* Icon Container */}
              <div className="mb-4 flex items-center justify-center h-12 w-12 md:h-16 md:w-16">
                <div className="text-white">
                  {item.icon}
                </div>
              </div>
              
              {/* Label */}
              <p className="font-display text-[11px] md:text-xs font-semibold uppercase tracking-tight leading-tight max-w-[140px]">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}