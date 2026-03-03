import React from 'react';

/**
 * CelebrityActivitiesGrid Component
 * Clones the 'College has never been so fun' section with a red heading
 * and a responsive masonry-style grid of solid red cards.
 */
const CelebrityActivitiesGrid: React.FC = () => {
  const activities = [
    {
      title: "Yuvika Chaudhary Turned Showstopper for IIFT",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "Sonam Bajwa at Blender's Pride Fashion Week",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "Ishita Dutta at CRW Season 5 with IIFDians",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "Fresher's Bash @ IIFT",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
    {
      title: "IIFT workshop",
      colSpan: "md:col-span-1",
      rowSpan: "md:row-span-1",
    },
  ];

  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto px-5">
        {/* Section Heading */}
        <div className="text-center max-w-[1200px] mx-auto mb-12">
          <h2 className="font-display text-[36px] font-bold leading-[1.3] text-[#ed1c24] mb-6 uppercase tracking-tight">
            College has never been so fun
          </h2>
          <p className="font-body text-[16px] leading-[1.8] text-[#54595f] max-w-[1100px] mx-auto">
            Students at IIFT carry out different activities apart from their academics. The college offers the students numerous opportunities to showcase their skills and talents in the non-academic fields too. The possibilities are endless but time is a constraint. So Join now the strong community of budding designers, Industry experts and scholars!
          </p>
        </div>

        {/* Dynamic Grid Layout matching the specified design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-[10px] max-w-[1200px] mx-auto">
          {/* Item 1 - Large Top Left */}
          <div className="lg:col-span-3 aspect-square md:aspect-auto md:h-[400px] bg-[#ed1c24] p-8 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
            <h3 className="font-body text-[18px] font-semibold text-white leading-[1.2]">
              Yuvika Chaudhary Turned Showstopper for IIFT
            </h3>
          </div>

          {/* Item 2 - Large Top Right */}
          <div className="lg:col-span-2 aspect-square md:aspect-auto md:h-[400px] bg-[#ed1c24] p-8 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
            <h3 className="font-body text-[18px] font-semibold text-white leading-[1.2]">
              Sonam Bajwa at Blender's Pride Fashion Week
            </h3>
          </div>

          {/* Item 3 - Bottom Left */}
          <div className="lg:col-span-2 aspect-square md:aspect-auto md:h-[350px] bg-[#ed1c24] p-8 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
            <h3 className="font-body text-[18px] font-semibold text-white leading-[1.2]">
              Ishita Dutta at CRW Season 5 with IIFDians
            </h3>
          </div>

          {/* Item 4 - Bottom Center */}
          <div className="lg:col-span-1 aspect-square md:aspect-auto md:h-[350px] bg-[#ed1c24] p-8 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
            <h3 className="font-body text-[18px] font-semibold text-white leading-[1.2]">
              Fresher's Bash @ IIFT
            </h3>
          </div>

          {/* Item 5 - Bottom Right */}
          <div className="lg:col-span-2 aspect-square md:aspect-auto md:h-[350px] bg-[#ed1c24] p-8 flex flex-col justify-end transition-transform duration-300 hover:scale-[1.01] cursor-pointer group">
            <h3 className="font-body text-[18px] font-semibold text-white leading-[1.2]">
              IIFT workshop
            </h3>
          </div>
        </div>
      </div>

      {/* IIFT Talks Preview Section */}
      <div className="container mx-auto px-5 mt-[60px]">
        <div className="max-w-[1200px] mx-auto border-t-[5px] border-[#ed1c24] shadow-[0px_5px_15px_rgba(0,0,0,0.1)] flex flex-col md:flex-row min-h-[250px] overflow-hidden">
          {/* Black Side Panel */}
          <div className="bg-[#111111] md:w-[25%] p-10 flex flex-col justify-center items-start text-white">
            <h4 className="font-display text-[28px] font-bold leading-tight">
              IIFT<br />Talks
            </h4>
          </div>
          
          {/* White Content/Slider Placeholder Area */}
          <div className="bg-white md:w-[75%] p-10 flex flex-col justify-center items-center relative">
            {/* Visual Dot Pagination Placeholder */}
            <div className="absolute bottom-6 flex space-x-2">
              {[...Array(8)].map((_, i) => (
                <div 
                  key={i} 
                  className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-black' : 'bg-gray-300'}`} 
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CelebrityActivitiesGrid;