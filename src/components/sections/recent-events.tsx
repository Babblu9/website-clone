import React from 'react';
import Image from 'next/image';

const events = [
  {
    type: 'title',
    title: 'Recent Events',
    className: 'bg-[#ed1c24] flex items-center justify-center p-8',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-2-66603ab123980-30.webp',
    alt: 'Actress Yuvika Chaudhary turned Showstopper for IIFT',
    caption: 'Actress Yuvika Chaudhary turned Showstopper for IIFT',
    overlayColor: 'bg-black/60',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-11-66603ab5b9f53-29.webp',
    alt: 'TV actress Sara Khan walks the ramp for IIFT at CTFW',
    caption: 'TV actress Sara Khan walks the ramp for IIFT at CTFW',
    overlayColor: 'bg-[#ed1c24]/80',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-2-66603ab123980-30.webp',
    alt: 'Budding designers presenting their collection at Times Fashion Week',
    caption: 'Budding designers presenting their collection at Times Fashion Week',
    overlayColor: 'bg-black/60',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-11-66603ab5b9f53-29.webp',
    alt: 'Director Vimi Vansil with Actress Tejasswi Prakash at Times Lifestyle Week',
    caption: 'Director Vimi Vansil with Actress Tejasswi Prakash at Times Lifestyle Week',
    overlayColor: 'bg-black/80',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-2-66603ab123980-30.webp',
    alt: 'Tejasswi Prakash as Showstopper for IIFT at Times Liufestyle Week',
    caption: 'Tejasswi Prakash as Showstopper for IIFT at Times Liufestyle Week',
    overlayColor: 'bg-[#ed1c24]/80',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-11-66603ab5b9f53-29.webp',
    alt: "IIFT'ians Walking the ramp at Times Lifestyle Week 2024.",
    caption: "IIFT'ians Walking the ramp at Times Lifestyle Week 2024.",
    overlayColor: 'bg-black/60',
  },
  {
    type: 'image',
    src: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iift-in/assets/images/recent-images-website-2024-2-66603ab123980-30.webp',
    alt: 'Top Models igniting the runway at Times Lifestyle Week.',
    caption: 'Top Models igniting the runway at Times Lifestyle Week.',
    overlayColor: 'bg-[#ed1c24]/80',
  },
];

const RecentEvents = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative aspect-square overflow-hidden group border-none"
            >
              {event.type === 'title' ? (
                <div className={`${event.className} w-full h-full`}>
                  <h2 className="text-white text-[32px] md:text-[42px] font-bold leading-tight uppercase font-display">
                    {event.title.split(' ')[0]}<br />{event.title.split(' ')[1]}
                  </h2>
                </div>
              ) : (
                <>
                  <Image
                    src={event.src}
                    alt={event.alt || ''}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 ${event.overlayColor} opacity-100 transition-opacity duration-300 flex items-end p-6`}>
                    <p className="text-white text-[14px] md:text-[15px] font-medium leading-[1.4] font-body">
                      {event.caption}
                    </p>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;