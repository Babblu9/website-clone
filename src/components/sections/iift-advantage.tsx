import React from 'react';
import { 
  Factory, 
  TrendingUp, 
  Plane, 
  Users, 
  Presentation, 
  Gem, 
  UserCheck, 
  CalendarDays, 
  Globe, 
  GraduationCap, 
  FlaskConical, 
  Bed 
} from 'lucide-react';

const advantages = [
  {
    icon: <Factory className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "industry visits"
  },
  {
    icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "97% placements"
  },
  {
    icon: <Plane className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "study abroad"
  },
  {
    icon: <Users className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "Industry expert mentors"
  },
  {
    icon: <Presentation className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "Industry Seminars"
  },
  {
    icon: <Gem className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "Annual Fashion Shows"
  },
  {
    icon: <UserCheck className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "Certified Faculty"
  },
  {
    icon: <CalendarDays className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "Regular events"
  },
  {
    icon: <Globe className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "Global Exposure"
  },
  {
    icon: <GraduationCap className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "academic scholarship"
  },
  {
    icon: <FlaskConical className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "practical labs"
  },
  {
    icon: <Bed className="w-8 h-8 md:w-10 md:h-10 text-white" />,
    label: "secured hostels"
  }
];

export default function IIFDAdvantage() {
  return (
    <section className="bg-[#ED1C24] py-[80px] px-5">
      <div className="container mx-auto max-w-[1140px]">
        {/* Section Heading */}
        <h2 className="text-white text-center text-[32px] md:text-[42px] font-bold mb-[60px] tracking-tight font-display">
          #IIFT ADVANTAGE
        </h2>

        {/* Advantage Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-[50px] gap-x-4">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center gap-4 transition-transform duration-300 hover:scale-105"
            >
              <div className="flex items-center justify-center h-[50px]">
                {item.icon}
              </div>
              <span className="text-white text-[12px] font-semibold uppercase tracking-[0.05em] leading-[1.4] max-w-[140px] font-body">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* Student's Work Placeholder Container */}
        <div className="mt-[80px] w-full max-w-[600px] mx-auto bg-[#111111] p-[30px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)] relative">
          <h3 className="text-white text-[24px] font-bold uppercase tracking-wider mb-8 font-display">
            Student&apos;s Work
          </h3>
          <div className="flex justify-center space-x-2 pb-2 overflow-hidden">
             {/* Carousel indicators visual */}
             {Array.from({ length: 40 }).map((_, i) => (
               <div key={i} className={`w-[3px] h-[3px] rounded-full ${i === 2 ? 'bg-[#ED1C24]' : 'bg-white/30'}`} />
             ))}
          </div>
        </div>
      </div>
    </section>
  );
}