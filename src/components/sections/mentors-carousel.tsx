import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MentorCard = ({ name, title, quote, image }: { name: string; title: string; quote: string; image: string }) => (
  <div className="bg-white p-10 flex flex-col items-center text-center shadow-[0_10px_30px_rgba(0,0,0,0.05)] h-full min-h-[500px]">
    <div className="relative w-[180px] h-[180px] mb-8">
      <Image
        src={image}
        alt={name}
        width={180}
        height={180}
        className="rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-300 border-4 border-white shadow-md"
      />
    </div>
    <h3 className="text-[#e1211a] font-display font-bold text-[20px] uppercase tracking-wider mb-2">
      {name}
    </h3>
    <p className="text-[#111111] font-body font-semibold text-[14px] uppercase mb-6">
      {title}
    </p>
    <div className="relative mb-6">
      <svg 
        width="34" 
        height="24" 
        viewBox="0 0 34 24" 
        fill="none" 
        className="text-[#e1211a] inline-block"
      >
        <path d="M14.4 0V11.2H8.8L12.8 24H4.8L0 11.2V0H14.4ZM33.6 0V11.2H28L32 24H24L19.2 11.2V0H33.6Z" fill="currentColor"/>
      </svg>
    </div>
    <p className="text-[#555555] font-body text-[16px] leading-[1.7] italic">
      {quote}
    </p>
  </div>
);

const MentorsCarousel = () => {
  const mentors = [
    {
      name: "AlamParvez Khan",
      title: "Textile Expert",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/AnyConv_com__600x600-mentors-Website-2-4.webp",
      quote: "I had a great experience interacting with the enthusiastic students of IIFD during my textile workshop. The institute is doing a commendable job of providing practical knowledge to its students, equipping them with skills needed to succeed in the fashion industry."
    },
    {
      name: "ManmohanKhanna",
      title: "Founder- IIID Chandigarh Chapter",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/AnyConv_com__600x600-mentors-Website-6-5.webp",
      quote: "Visiting IIFD for a mentor class on interior design was an enriching experience. The students were enthusiastic and eager to learn, and I was impressed with the institute’s facilities and faculty. I wish the students all the best"
    },
    {
      name: "Anuj Sharma",
      title: "Fashion Designer",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/AnyConv_com__600x600-mentors-Website-3-6.webp",
      quote: "I was truly impressed by the level of creativity and talent I witnessed during my workshop at IIFD. The students showed great potential and willingness to learn, and I was delighted to be apart of their learning journey."
    }
  ];

  return (
    <section className="bg-[#e1211a] py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative">
        <h2 className="text-white font-display font-bold text-[32px] md:text-[42px] text-center uppercase mb-16 tracking-tight">
          GET MENTORED BY INDUSTRY EXPERTS
        </h2>

        {/* Carousel Container */}
        <div className="relative group">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mentors.map((mentor, index) => (
              <div key={index} className="flex-none">
                <MentorCard {...mentor} />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="absolute -left-12 top-1/2 -translate-y-1/2 text-white hover:text-black transition-colors hidden xl:block"
            aria-label="Previous mentor"
          >
            <ChevronLeft size={48} strokeWidth={1} />
          </button>
          <button 
            className="absolute -right-12 top-1/2 -translate-y-1/2 text-white hover:text-black transition-colors hidden xl:block"
            aria-label="Next mentor"
          >
            <ChevronRight size={48} strokeWidth={1} />
          </button>
        </div>

        {/* Pagination Dots (Visual placeholder as per screenshot) */}
        <div className="flex justify-center gap-2 mt-12">
          <div className="w-2.5 h-2.5 rounded-full bg-white opacity-100 cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 cursor-pointer"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-white opacity-40 cursor-pointer"></div>
        </div>
      </div>
    </section>
  );
};

export default MentorsCarousel;