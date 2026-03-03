import React from 'react';

/**
 * InterestCategories Component
 * 
 * Clones the "I'm Interested in..." section with four image tiles for 
 * Fashion, Interior, Textile, and Specialised courses,
 * followed by a "Popular Courses" bar.
 */

const InterestCategories: React.FC = () => {
  const categories = [
    {
      title: "Fashion Design Courses →",
      image: "https://iifd.in/wp-content/uploads/2023/10/fashion-design-category.jpg", // Placeholder or dynamic if available, but following the "dark image" instruction
    },
    {
      title: "Interior Design Courses →",
      image: "https://iifd.in/wp-content/uploads/2023/10/interior-design-category.jpg",
      highlight: true
    },
    {
      title: "Textile Design Courses →",
      image: "https://iifd.in/wp-content/uploads/2023/10/textile-design-category.jpg",
    },
    {
      title: "Specialised Courses →",
      image: "https://iifd.in/wp-content/uploads/2023/10/specialised-courses-category.jpg",
      highlight: true
    }
  ];

  const popularCourses = [
    { name: "Diploma in Fashion Design", link: "#" },
    { name: "MFA in Textile Design", link: "#" },
    { name: "Diploma in Interior Design", link: "#" },
    { name: "Bsc in Fashion Design", link: "#" },
    { name: "Theater Costume Design", link: "#" },
    { name: "Msc in Interior Design", link: "#" }
  ];

  return (
    <section className="bg-white py-[80px]">
      <div className="container mx-auto max-w-[1200px] px-4">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="font-display text-[42px] font-bold text-[#ed1c24] mb-2 leading-tight">
            I&apos;m Interested in...
          </h2>
          <p className="font-body text-[16px] text-[#111111] max-w-[800px] mx-auto opacity-80">
            Discover your subject, and experience everything IIFD have to offer to turn your passion into real-world experience.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {categories.map((category, index) => (
            <div 
              key={index} 
              className={`relative overflow-hidden group cursor-pointer aspect-square ${category.highlight ? 'border-[1px] border-[#ed1c24]' : ''}`}
              style={{ backgroundColor: '#000000' }}
            >
              {/* Dark Overlay/Background Image */}
              <div className="absolute inset-0 bg-black opacity-90 group-hover:opacity-60 transition-opacity duration-300"></div>
              
              {/* Content Overlay */}
              <div className="absolute bottom-6 left-0 right-0 text-center px-4">
                <a 
                  href="#" 
                  className="text-white font-body text-[15px] font-semibold tracking-wide hover:text-[#ed1c24] transition-colors duration-300"
                >
                  {category.title}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Popular Courses Banner */}
        <div className="flex flex-col lg:flex-row w-full overflow-hidden">
          {/* Label Side */}
          <div className="bg-[#ed1c24] text-white flex items-center justify-center py-6 px-10 lg:w-[30%]">
            <h4 className="font-display text-[28px] font-bold">
              Popular Courses
            </h4>
          </div>
          
          {/* List Side */}
          <div className="bg-[#111111] text-white flex-1 py-8 px-6 lg:px-12">
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-8">
              {popularCourses.map((course, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-[#ed1c24] text-xl">•</span>
                  <a 
                    href={course.link} 
                    className="font-body text-[14px] hover:text-[#ed1c24] transition-colors duration-300"
                  >
                    {course.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InterestCategories;