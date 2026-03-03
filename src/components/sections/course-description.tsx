import React from 'react';
import Image from 'next/image';

const CourseDescription = () => {
  return (
    <section className="bg-[#ed2124] py-[100px] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="flex flex-col lg:flex-row items-start justify-between">
          
          {/* Text Content */}
          <div className="w-full lg:w-[55%] text-white">
            <h2 className="font-display text-[42px] font-[800] leading-[1.1] mb-8 uppercase tracking-tight">
              Diploma in Textile Designing <br /> Course
            </h2>
            
            <div className="space-y-6">
              <p className="font-body text-[16px] leading-[1.7] font-[400]">
                Diploma in <span className="font-semibold">textile designing course</span> will help you to understand and develop your sole creative skills and the basic principles of design in 2D and 3D and moreover will help you to create and nourish in an independent and individual way through a variety of workshops. Textile designing is considered as an art to create cloth or fabric and develop the print on it.
              </p>
              
              <p className="font-body text-[16px] leading-[1.7] font-[400]">
                A diploma in <span className="font-semibold">textile designing</span> is a two year course in which you receive an in-depth knowledge of textiles and the basics of fashion designing too. This course tends to prepare you for creating designs and pattern making for knitted, made of man-made natural fibres. The textile industry is the biggest industry in the world so pursuing this diploma will bring you many opportunities and open many doors for you. A textile designer is responsible to work with clients or companies and create and develop different kinds of fabrics using different design thinking and also keeping care of the post-production technicalities.
              </p>
            </div>
          </div>

          {/* Illustration Container */}
          <div className="w-full lg:w-[40%] flex justify-center lg:justify-end mt-12 lg:mt-0">
            <div className="relative w-full max-w-[400px] aspect-[1/1.2]">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/Fashion-Courses-at-IIFT-12.png"
                alt="Female fashion design illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CourseDescription;