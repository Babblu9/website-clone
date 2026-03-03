import React from 'react';
import Image from 'next/image';

const CampusRecruiters = () => {
  const recruiters = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-satya-paul-2.webp",
      alt: "Satya Paul Logo",
      width: 160,
      height: 60
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-Marks-and-spencer-4.webp",
      alt: "Marks & Spencer Logo",
      width: 160,
      height: 60
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-textile-association-of-India-6.webp",
      alt: "The Textile Association India Logo",
      width: 160,
      height: 60
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/Zee-logo-Png-1024x536-8.png",
      alt: "Zee Logo",
      width: 160,
      height: 60
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-times-of-india-3.webp",
      alt: "The Times of India Logo",
      width: 160,
      height: 80
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-Punjab-bespoke-5.webp",
      alt: "Panjab Bespoke Logo",
      width: 160,
      height: 80
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-Redress--7.webp",
      alt: "Redress Logo",
      width: 160,
      height: 80
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-iwith-UI-international-fashion-week-9.webp",
      alt: "U&I International Fashion Week Logo",
      width: 160,
      height: 80
    }
  ];

  return (
    <section className="bg-white py-0 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-0 md:px-0">
        <div className="flex flex-col md:flex-row items-stretch">
          {/* Logo Grid Section */}
          <div className="flex-1 py-12 md:py-16 px-6 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 items-center justify-items-center">
              {recruiters.map((recruiter, index) => (
                <div key={index} className="w-full flex items-center justify-center">
                  <Image
                    src={recruiter.src}
                    alt={recruiter.alt}
                    width={recruiter.width}
                    height={recruiter.height}
                    className="object-contain grayscale hover:grayscale-0 transition-all duration-300 transform hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Title Section */}
          <div className="w-full md:w-[280px] bg-[#111111] text-white flex flex-col justify-center p-10 md:p-12">
            <h3 className="font-display text-[32px] md:text-[36px] font-bold leading-[1.1] uppercase tracking-tight">
              Campus<br />
              Recruiters
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusRecruiters;