import Image from 'next/image';

const IndustryRelations = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto max-w-[1140px] px-5">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[50px]">
          {/* Left Column: Image */}
          <div className="w-full md:w-1/2">
            <div className="relative overflow-hidden">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/training-and-placement-cover-page-64bfa4b5a149a-18.webp"
                alt="Industry Workshop Training"
                width={550}
                height={400}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-1/2">
            <div className="flex flex-col">
              <h2 className="text-[#ed1c24] font-montserrat text-[28px] md:text-[32px] font-bold leading-[1.3] mb-5 uppercase">
                Industry Relations
              </h2>
              
              <div className="font-poppins text-[#54595f] text-base leading-[1.8] space-y-5">
                <p>
                  Students of IIFD get unique opportunity through our specialized placement team to advice students on all the options and help them find employer who best suits their needs and interests. We make sure that all our students shall be given complete advantage of IIFD’s very close relations with the industry.
                </p>
                
                <p>
                  Guest lecture are been conducted regularly by practicing managers from the various related Fashion and Design industries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryRelations;