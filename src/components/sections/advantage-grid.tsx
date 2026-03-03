"use client";

import React from 'react';
import { 
  Factory, 
  TrendingUp, 
  Plane, 
  Users, 
  Presentation, 
  Diamond, 
  Award, 
  Calendar, 
  Globe, 
  GraduationCap, 
  Laptop, 
  Home 
} from 'lucide-react';

const advantages = [
  { icon: <Factory size={32} strokeWidth={1.5} />, label: "industry visits" },
  { icon: <TrendingUp size={32} strokeWidth={1.5} />, label: "97% placements" },
  { icon: <Plane size={32} strokeWidth={1.5} />, label: "study abroad" },
  { icon: <Users size={32} strokeWidth={1.5} />, label: "Industry expert mentors" },
  { icon: <Presentation size={32} strokeWidth={1.5} />, label: "Industry Seminars" },
  { icon: <Diamond size={32} strokeWidth={1.5} />, label: "Annual Fashion Shows" },
  { icon: <Award size={32} strokeWidth={1.5} />, label: "Certified Faculty" },
  { icon: <Calendar size={32} strokeWidth={1.5} />, label: "Regular events" },
  { icon: <Globe size={32} strokeWidth={1.5} />, label: "Global Exposure" },
  { icon: <GraduationCap size={32} strokeWidth={1.5} />, label: "academic scholarship" },
  { icon: <Laptop size={32} strokeWidth={1.5} />, label: "practical labs" },
  { icon: <Home size={32} strokeWidth={1.5} />, label: "secured hostels" }
];

const AdvantageGrid = () => {
  return (
    <section className="bg-[#ED2124] py-[80px] px-6">
      <div className="container mx-auto max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-[60px]">
          <h2 className="text-white text-[36px] font-bold font-display uppercase tracking-tight m-0">
            #IIFT Advantage
          </h2>
        </div>

        {/* Advantage Icons Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-y-[40px] gap-x-[20px]">
          {advantages.map((item, index) => (
            <div 
              key={index} 
              className="advantage-icon-box transition-transform duration-300 hover:scale-105"
            >
              <div className="flex justify-center items-center text-white mb-[10px]">
                {/* Custom Lucide icons used as high-fidelity replacements for simple white icons */}
                {item.icon}
              </div>
              <span className="text-white text-[11px] font-medium uppercase font-body text-center block leading-tight">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .advantage-icon-box {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
        .container {
          width: 100%;
          margin-left: auto;
          margin-right: auto;
        }
      `}</style>
    </section>
  );
};

export default AdvantageGrid;