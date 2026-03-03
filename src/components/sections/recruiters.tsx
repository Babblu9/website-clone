import React from 'react';
import Image from 'next/image';

/**
 * RecruitersSection Component
 * 
 * Pixel-perfect clone of the "Campus Recruiters" section.
 * Features a split layout:
 * - Left/Main: A grid of brand logos (Satya Paul, Marks & Spencer, etc.)
 * - Right: A bold black heading block containing "Campus Recruiters"
 */

const recruiters = [
  {
    name: "Satya Paul",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-satya-paul-5.webp",
    width: 160,
    height: 80
  },
  {
    name: "Marks & Spencer",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-Marks-and-spencer-7.webp",
    width: 160,
    height: 80
  },
  {
    name: "Textile Association of India",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-textile-association-of-India-9.webp",
    width: 160,
    height: 80
  },
  {
    name: "Zee Logo",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/Zee-logo-Png-1024x536-11.png",
    width: 160,
    height: 80
  },
  {
    name: "The Times of India",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-times-of-india-6.webp",
    width: 160,
    height: 80
  },
  {
    name: "Panjab Bespoke",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-iwith-UI-international-fashion-week-12.webp",
    width: 160,
    height: 80
  },
  {
    name: "Redress",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-with-Redress--10.webp",
    width: 160,
    height: 80
  },
  {
    name: "U&I International",
    url: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/IIFD-iwith-UI-international-fashion-week-12.webp",
    width: 160,
    height: 80
  }
];

const RecruitersSection: React.FC = () => {
  return (
    <section className="bg-white py-0 overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        <div className="flex flex-col md:flex-row items-stretch">
          
          {/* Logo Grid Section */}
          <div className="flex-1 py-10 md:py-16">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-12 items-center justify-items-center">
              {recruiters.map((brand, index) => (
                <div key={index} className="px-4 flex items-center justify-center">
                  <Image
                    src={brand.url}
                    alt={brand.name}
                    width={brand.width}
                    height={brand.height}
                    className="object-contain max-h-[100px] w-auto transition-opacity duration-300 hover:opacity-80"
                    priority={index < 4}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Heading Block Section */}
          <div className="w-full md:w-[350px] bg-[#111111] flex items-center p-10 md:p-14 md:ml-10">
            <h2 
              className="text-white font-display font-bold leading-[1.1] uppercase m-0"
              style={{ 
                fontSize: '42px',
                letterSpacing: '0.02em'
              }}
            >
              Campus<br />
              Recruiters
            </h2>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecruitersSection;