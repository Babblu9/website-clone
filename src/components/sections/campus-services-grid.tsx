import React from 'react';

/**
 * CampusServicesGrid Component
 * 
 * Clones the 'Campus Services' section with a 3x2 grid.
 * Features alternating red (#ED1C24) and black (#111111) tiles.
 * Uses Montserrat for headings and Poppins for body text as per design system.
 */

const services = [
  {
    title: "High tech Campus",
    description: "Explore high tech campus facilities and the world of smart learning with the state of art campus at IIFT.",
    bgColor: "bg-[#ED1C24]",
  },
  {
    title: "100% Placement",
    description: "IIFT offers 100 % Placement Assistance with an opportunity to be a part of Fashion Shows, Events organised with MNC Organizations.",
    bgColor: "bg-[#111111]",
  },
  {
    title: "Fashion Shows",
    description: "Be a part of the best fashion shows in India such as U&I International fashion week, Junior Fashion Week, India Kids Fashion Week etc.",
    bgColor: "bg-[#ED1C24]",
  },
  {
    title: "Academic Facilities",
    description: "IIFT offers a Vast range of academic facilities. Expert Counselors for Student Assistance, Large Library and Collection of study material etc.",
    bgColor: "bg-[#111111]",
  },
  {
    title: "Hostel",
    description: "IIFT provides hostel and food facilities for outstation students with the best health and hygiene to make you feel home away from home.",
    bgColor: "bg-[#ED1C24]",
  },
  {
    title: "Global Exposure",
    description: "Expose yourself to the world with global alliances at IIFT with esteemed organizations like ELIA, IIID, FDCI, ADI etc.",
    bgColor: "bg-[#111111]",
  },
];

const CampusServicesGrid = () => {
  return (
    <section className="py-[100px] bg-white">
      <div className="container mx-auto px-5 max-w-[1200px]">
        {/* Section Heading */}
        <div className="text-center mb-[50px]">
          <h2 className="text-[36px] font-bold font-display text-[#111111] leading-[1.3] mb-6">
            Campus Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[10px]">
          {services.map((service, index) => (
            <div
              key={index}
              className={`${service.bgColor} p-[30px] min-h-[250px] flex flex-col justify-start transition-transform duration-300 ease-in-out hover:scale-[1.02]`}
            >
              <h5 className="text-[22px] font-semibold font-display text-white mb-4 leading-[1.2]">
                {service.title}
              </h5>
              <p className="text-[14px] font-body text-white/90 leading-[1.6] m-0">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampusServicesGrid;