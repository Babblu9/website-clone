import React from 'react';

const RecentEvents = () => {
  const events = [
    {
      title: "Actress Yuvika Chaudhary turned Showstopper for IIFD",
      bgColor: "bg-white",
      textColor: "text-[#111111]",
    },
    {
      title: "IIFD Times Fashion Week Chandigarh was a Blast with Super Models",
      bgColor: "bg-[#111111]",
      textColor: "text-white",
    },
    {
      title: "Budding designers presenting Top Models at Times Fashion Week",
      bgColor: "bg-white",
      textColor: "text-[#111111]",
    },
    {
      title: "Fresher's Bash for welcoming IIFDIAN's",
      bgColor: "bg-[#111111]",
      textColor: "text-white",
    },
    {
      title: "Top Models Presenting IIFD at Times Fashion Week",
      bgColor: "bg-white",
      textColor: "text-[#111111]",
    },
    {
      title: "Glimpse of Farewell Party at IIFD campus.",
      bgColor: "bg-[#111111]",
      textColor: "text-white",
    },
  ];

  return (
    <section className="bg-[#E1211A] py-[80px] md:py-[100px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="text-white text-[32px] md:text-[42px] font-[800] text-center mb-[50px] font-display uppercase tracking-tight">
          Recent Events
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {events.map((event, index) => (
            <div
              key={index}
              className={`flex flex-col h-full min-h-[380px] transition-transform duration-300 hover:-translate-y-2`}
            >
              <div className={`${event.bgColor} flex-1 flex flex-col items-center justify-center p-0 overflow-hidden`}>
                {/* 
                  Based on the visual reference, the 'cards' consist of a large 
                  unfilled area (placeholders in the reference) and a text area 
                  at the bottom. The HTML structure and screenshots suggest 
                  the text is part of the card white/black background.
                */}
                <div className="flex-grow w-full relative group bg-transparent">
                    {/* Image placeholder area for the event photo */}
                </div>
                <div className={`w-full p-4 md:p-6 pb-8 ${event.bgColor} ${event.textColor}`}>
                  <h3 className="text-[16px] md:text-[18px] font-[700] leading-[1.4] uppercase font-display m-0">
                    {event.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentEvents;