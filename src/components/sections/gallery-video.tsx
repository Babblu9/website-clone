"use client";

import React from 'react';

const GalleryVideo: React.FC = () => {
  return (
    <section className="bg-white py-[80px] md:py-[100px] overflow-hidden">
      <div className="container mx-auto px-5 max-w-[1140px]">
        {/* Gallery Title Area */}
        <div className="text-center mb-10">
          <h2 className="font-display text-[32px] md:text-[42px] font-[800] text-brand-red uppercase tracking-normal leading-[1.2] mb-5">
            GALLERY
          </h2>
        </div>

        {/* Carousel Spacing Area Placeholder */}
        {/* As per instructions, this is a spacing area for a carousel. 
            The visual reference shows dots and navigation arrows with an empty middle. */}
        <div className="relative w-full min-h-[400px] mb-16 flex flex-col items-center justify-center">
          {/* Navigation Arrows (Visual Placeholders) */}
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 opacity-20 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </div>
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-20 pointer-events-none">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </div>

          {/* Dots Indicator (Visual Placeholder) */}
          <div className="mt-auto pt-10 flex gap-2">
            {[...Array(12)].map((_, i) => (
              <span 
                key={i} 
                className={`w-[6px] h-[6px] rounded-full ${i === 2 ? 'bg-black' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        {/* Video Embed Section */}
        <div className="flex justify-center">
          <div className="w-full max-w-[800px] aspect-video bg-black shadow-lg">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/M3ULA7QAL30?controls=1&rel=0&playsinline=0&cc_load_policy=0&autoplay=0&enablejsapi=1&origin=https%3A%2F%2Fiifd.in"
              title="IIFT Gallery Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .section-padding {
            padding-top: 60px;
            padding-bottom: 60px;
          }
        }
      `}</style>
    </section>
  );
};

export default GalleryVideo;