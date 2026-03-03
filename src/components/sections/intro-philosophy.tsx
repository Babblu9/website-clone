import React from 'react';

/**
 * IntroPhilosophy Section
 * 
 * This component replicates the introductory text section with a centered red headline
 * and body paragraphs explaining the IIFT living-learning community.
 */
const IntroPhilosophy: React.FC = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px] border-none">
      <div className="container mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="flex flex-col items-center">
          {/* Centered Large Red Headline */}
          <h2 className="text-[#ED1C24] font-display font-bold text-[28px] md:text-[36px] leading-[1.3] text-center mb-10 max-w-[1000px]">
            IIFT is a place where discovery does not stop when the class ends. Good memories, True friends, Unforgettable Experiences make sure that you grow, learn and have fun here.
          </h2>

          {/* Body Text Content */}
          <div className="w-full max-w-[1000px] text-center">
            <p className="font-body font-normal text-[16px] leading-[1.8] text-[#54595F] mb-6">
              Discover a whole new world where you can explore your inner self and try out new things and maybe uncover new talents you never knew you had. Meet Like-minded budding designers from all across all over the world and exchange and learn the rich culture and share your passion for fashion. There are no limits to your curiosity, follow them well. The larger than life experience will always keep you on the edge to make improvements and hence make the world a better place to live in.
            </p>

            <p className="font-body font-normal text-[16px] leading-[1.8] text-[#54595F] mb-6">
              Get your talent exposed globally &amp; achieve heights of success at the Indian Institute of Fashion &amp; Design.
            </p>

            <p className="font-body font-normal text-[16px] leading-[1.8] text-[#54595F]">
              Welcome to our living-learning community. Welcome to IIFT.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroPhilosophy;