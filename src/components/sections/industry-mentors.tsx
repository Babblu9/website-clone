import React from 'react';
import Image from 'next/image';

const mentors = [
  {
    name: "Asmita Marwa",
    role: "Celebrity Fashion Designer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD_Mentor_Asmita-Marwa-13.jpg"
  },
  {
    name: "Akash mehta",
    role: "Lighting Expert",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD_Mentor_Akash-mehta-14.jpg"
  },
  {
    name: "Chela Evans",
    role: "Director, Cvent (Australia)",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD_Mentor_Chela-Evans-15.jpg"
  },
  {
    name: "Ankit V Kapoor",
    role: "Celebrity Fashion Designer",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD_Mentor_Ankit-V-kapoor-16.jpg"
  }
];

const IndustryMentors = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-[60px]">
          <h2 className="text-[#ed1c24] font-display text-[32px] md:text-[42px] font-bold leading-[1.2]">
            Get Mentored By Industry Experts
          </h2>
        </div>

        {/* Mentor Grid/Slider - In the original it's a responsive grid/flex container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[30px] md:gap-[40px] max-w-[1200px] mx-auto">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Image Container with Red Offset Background Effect */}
              <div className="relative w-[240px] h-[240px] mb-6">
                {/* Visual Offset Background */}
                <div 
                  className="absolute -top-3 -right-3 w-full h-full bg-[#ed1c24] z-0 opacity-80"
                  aria-hidden="true"
                />
                
                {/* Image Wrapper with Border */}
                <div className="relative z-10 w-full h-full bg-white border border-[#dddddd] p-0 overflow-hidden transform transition-transform duration-300 group-hover:scale-[1.02]">
                  <Image
                    src={mentor.image}
                    alt={mentor.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 240px, 240px"
                  />
                </div>
              </div>

              {/* Mentor Details */}
              <div className="text-center mt-2 px-2">
                <h3 className="text-[#ed1c24] font-display text-[18px] font-bold mb-1 tracking-tight">
                  {mentor.name}
                </h3>
                <p className="text-[#111111] font-body text-[14px] leading-relaxed">
                  {mentor.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional: Slider Navigation Controls (Visual only as per request for 'Get Mentored By Industry Experts' section) */}
        <div className="flex justify-center mt-12 gap-4 md:hidden">
            <div className="w-10 h-1 bg-[#ed1c24]"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
            <div className="w-10 h-1 bg-gray-200"></div>
        </div>
      </div>
    </section>
  );
};

export default IndustryMentors;