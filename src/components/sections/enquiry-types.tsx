import React from 'react';
import { Target, GraduationCap, Briefcase, Newspaper } from 'lucide-react';

const EnquiryTypes = () => {
  const enquiries = [
    {
      title: 'General Enquiries',
      email: 'info@iifd.in',
      icon: <Target className="w-[35px] h-[35px]" strokeWidth={2.5} />,
    },
    {
      title: 'Student Enquiries',
      email: 'iifdians@iifd.in',
      icon: <GraduationCap className="w-[35px] h-[35px]" strokeWidth={2.5} />,
    },
    {
      title: 'Franchise Enquiries',
      email: 'franchise@iifd.in',
      icon: <Briefcase className="w-[35px] h-[35px]" strokeWidth={2.5} />,
    },
    {
      title: 'Media & Collaborations',
      email: 'relations@iifd.in',
      icon: <Newspaper className="w-[35px] h-[35px]" strokeWidth={2.5} />,
    },
  ];

  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto max-w-[1140px] px-[15px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px]">
          {enquiries.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center text-center group transition-transform duration-300"
            >
              {/* Icon Wrapper */}
              <div className="text-[#ed1c24] mb-[15px] flex items-center justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-[18px] font-bold text-[#111111] mb-[10px] uppercase transition-colors duration-300">
                {item.title}
              </h3>

              {/* Email Link */}
              <a 
                href={`mailto:${item.email}`}
                className="font-body text-[14px] text-[#54595f] hover:text-[#ed1c24] transition-colors duration-300"
              >
                {item.email}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnquiryTypes;