"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AwardsRecognition = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const awards = [
    {
      title: "Times Of India Award",
      description:
        "Times Group Awarded Indian Institute of Fashion Technology & Design during Edupreneurs for Excellence in Quality Education and its high benchmarks in the field of Fashion Designing. Director Vimi Vansil was awarded by Tript Rajinder Singh Bajwa, Honorable Minister of Higher Education Punjab During The Times of India event.",
    },
    {
      title: "IIFT accepted as Institutional Member for Association of Designers in India (ADI)",
      description:
        "Association Of Designers in India & Indian Institute of Fashion Technology & Design has decided to collaborate together and encourage the budding designers and provide them with resources and mentorship to become the best.",
    },
    {
      title: "Most Emerging Design Institute - 2023",
      description:
        "IIFT has been awarded the 'Most Emerging Design Institute' in the design industry in 2023, acknowledging the institute's exceptional contributions towards the education and training of future designers. The institute has been applauded for its innovative and creative approach, and this recognition is a testament to their commitment to providing high-quality education.",
    },
    {
      title: "IIFT Honoured By Bollywood Queen - Madhuri Dixit Nene",
      description:
        "Added synergy to various awards, Indian Institute of Fashion Technology & Design is awarded as “Best Fashion Designing Institute in Chandigarh” prestigious International Glory Awards by Madhuri Dixit Nene for excellence in providing higher education in the field of Fashion, Interior and Textile designing.",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % Math.ceil(awards.length / 2));
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + Math.ceil(awards.length / 2)) % Math.ceil(awards.length / 2));
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container px-4 mx-auto max-w-[1200px]">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#E1211A] font-display text-[32px] md:text-[42px] font-bold uppercase tracking-wider mb-2">
            AWARDS & RECOGNITION
          </h2>
          <div className="w-[80px] h-[3px] bg-[#E1211A] mx-auto mt-6"></div>
        </div>

        {/* Carousel Content */}
        <div className="relative group">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* Note: In a real implementation we might chunk these or use a real slider library. 
                  Given the layout, it's 2 columns on desktop. */}
              <div className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
                {awards.slice(0, 2).map((award, idx) => (
                  <div key={idx} className="space-y-4">
                    <h5 className="text-[#111111] font-display text-[18px] md:text-[20px] font-bold uppercase leading-tight">
                      {award.title}
                    </h5>
                    <p className="text-[#555555] font-body text-[15px] leading-[1.7] font-normal">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex-shrink-0 w-full grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
                {awards.slice(2, 4).map((award, idx) => (
                  <div key={idx} className="space-y-4">
                    <h5 className="text-[#111111] font-display text-[18px] md:text-[20px] font-bold uppercase leading-tight">
                      {award.title}
                    </h5>
                    <p className="text-[#555555] font-body text-[15px] leading-[1.7] font-normal">
                      {award.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute -left-4 md:-left-8 top-1/2 -translate-y-1/2 text-black hover:text-[#E1211A] transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft size={32} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute -right-4 md:-right-8 top-1/2 -translate-y-1/2 text-black hover:text-[#E1211A] transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight size={32} />
          </button>
        </div>

        {/* Video Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="aspect-video bg-black relative overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/ZRLVtqrcpps?controls=1&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fiifd.in"
              title="Chandigarh Times Fashion Week 2022"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video bg-black relative overflow-hidden shadow-lg">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.youtube.com/embed/ZRLVtqrcpps?controls=1&rel=0&playsinline=1&enablejsapi=1&origin=https%3A%2F%2Fiifd.in"
              title="Chandigarh Times Fashion Week 2022 - IIFT Collection"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsRecognition;