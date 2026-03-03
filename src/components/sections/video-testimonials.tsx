import React from 'react';

/**
 * VideoTestimonials Component
 * 
 * Features:
 * - Side-by-side responsive YouTube video embeds
 * - Bold "We Make Visionaries" section with staggered text layout
 * - Scrolling text testimonial component (animated using Tailwind)
 */

export default function VideoTestimonials() {
  const videoTestimonials = [
    {
      id: "video-1",
      embedId: "example1", // Use placeholders since actual IDs aren't provided in the prompt's content
      title: "IIFD'ians walking the ramp with Top models and Actress Tejasswi Prakash @ Times Lifestyle Week",
    },
    {
      id: "video-2",
      embedId: "example2",
      title: "Inspiring Success Story of IIFD Student | How He Made It To The Top",
    }
  ];

  return (
    <section className="bg-white py-[80px] lg:py-[100px]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* YouTube Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          {/* Note: Using black placeholders as per screenshots as actual video assets/IDs were not in assets list */}
          <div className="flex flex-col">
            <div className="relative aspect-video bg-black w-full overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/placeholder1"
                title="IIFD Testimonial 1"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-brand-red p-3 mt-0">
              <p className="text-white text-[13px] font-medium leading-tight">
                IIFD'ians walking the ramp with Top models and Actress Tejasswi Prakash @ Times Lifestyle Week
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="relative aspect-video bg-black w-full overflow-hidden">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/placeholder2"
                title="IIFD Testimonial 2"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-brand-red p-3 mt-0">
              <p className="text-white text-[13px] font-medium leading-tight">
                Inspiring Success Story of IIFD Student | How He Made It To The Top
              </p>
            </div>
          </div>
        </div>

        {/* Visionary Title Section */}
        <div className="text-center mb-16 pt-10">
          <h2 className="font-display font-extrabold text-[42px] lg:text-[60px] leading-tight text-[#111111] flex flex-wrap justify-center items-center gap-x-4">
            <span className="text-brand-red">We Make</span>
            <span>Visionaries</span>
          </h2>
        </div>

        {/* Testimonial Slider / Scroll Component */}
        <div className="relative max-w-[900px] mx-auto overflow-hidden">
          <div className="flex flex-col items-center text-center px-4">
            {/* Nav Arrows (Static for look) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 hidden md:block">
              <button className="text-[#dddddd] hover:text-brand-red p-2 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
            </div>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden md:block">
              <button className="text-[#dddddd] hover:text-brand-red p-2 transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            {/* Testimonial Content */}
            <div className="w-full">
              <blockquote className="italic font-body text-[16px] md:text-[18px] text-[#555555] leading-[1.8] mb-8 max-w-[800px] mx-auto">
                "I am doing Fashion Designing degree from IIFD Chandigarh. Here i got Best Fashion Designing Courses in India. A Good place for creative minds."
              </blockquote>
              
              <div className="mt-4">
                <cite className="not-italic block">
                  <span className="text-brand-red font-display font-bold text-[20px] block mb-1">Rahat</span>
                  <span className="text-brand-red font-body text-[14px]">Fashion Design</span>
                </cite>
              </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              <span className="w-2 h-2 rounded-full bg-brand-red"></span>
              {[...Array(9)].map((_, i) => (
                <span key={i} className="w-2 h-2 rounded-full bg-[#dddddd]"></span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}