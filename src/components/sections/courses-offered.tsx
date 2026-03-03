import React from 'react';
import { ArrowRight } from 'lucide-react';

const CoursesOffered = () => {
  const courseData = [
    {
      category: 'Diploma',
      courses: [
        { name: 'Fashion Design', link: '#' },
        { name: 'Interior Design', link: '#' },
        { name: 'Textile Design', link: '#' },
      ],
    },
    {
      category: 'Undergraduate',
      courses: [
        { name: 'B.Des Fashion Design (4 Years)', link: '#' },
        { name: 'B.Sc Fashion Design (3 Years)', link: '#' },
        { name: 'B.ID Interior Design (4 Years)', link: '#' },
        { name: 'B.Sc Interior Design (3 Years)', link: '#' },
        { name: 'B.Sc Textile Design (3 Years)', link: '#' },
      ],
    },
    {
      category: 'Postgraduate',
      courses: [
        { name: 'M.Des Fashion Design(2 Years)', link: '#' },
        { name: 'M.Des. in Interior Design (2 Years)', link: '#' },
        { name: 'MFA Fashion Design (2 Years)', link: '#' },
        { name: 'MFA Interior Design (2 Years)', link: '#' },
        { name: 'MFA Textile Design (2 Years)', link: '#' },
        { name: 'Msc Interior Design (2 Years)', link: '#' },
        { name: 'MBA Fashion Design (2 Years)', link: '#' },
        { name: 'MBA Interior Design ( 2 Years)', link: '#' },
        { name: 'Msc Fashion Design ( 2 Years)', link: '#' },
        { name: 'Msc Textile Design ( 2 Years)', link: '#' },
      ],
    },
    {
      category: 'Specialized Programs',
      courses: [
        { name: 'Fashion Styling and Forecasting', link: '#' },
        { name: 'Garment Manufacturing Technology', link: '#' },
        { name: 'Textile styling and Trend Analysis', link: '#' },
        { name: '3D Fashion Design', link: '#' },
        { name: 'Fashion Luxury Brand Management', link: '#' },
        { name: 'Knitwear Design', link: '#' },
        { name: 'Theater Costume Designing', link: '#' },
      ],
    },
  ];

  return (
    <section className="bg-white py-[80px] md:py-[100px]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[#e1211a] font-display text-[32px] md:text-[42px] font-bold uppercase tracking-tight mb-2">
            COURSES WE OFFER
          </h2>
          <div className="w-[60px] h-[4px] bg-[#e1211a] mx-auto mb-6"></div>
          <p className="text-[#111111] font-body text-[16px] max-w-3xl mx-auto opacity-90">
            Among the 25+ Fashion design courses offered, there is definitely the one you are looking for. Find it now!
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col gap-20">
          {courseData.map((section, idx) => (
            <div key={idx} className="border-t border-[#dddddd] pt-12">
              <h3 className="text-[#e1211a] font-display text-[24px] md:text-[28px] font-bold uppercase mb-8 tracking-wider text-center">
                {section.category}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-4">
                {section.courses.map((course, cIdx) => (
                  <a
                    key={cIdx}
                    href={course.link}
                    className="flex items-center justify-between py-3 border-b border-transparent hover:border-[#e1211a] transition-all duration-300 group"
                  >
                    <span className="font-body text-[15px] font-medium text-[#111111] group-hover:text-[#e1211a] transition-colors duration-200">
                      {course.name}
                    </span>
                    <ArrowRight className="w-4 h-4 text-[#e1211a] opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300" />
                    {/* Fallback for the screenshot style's static arrows */}
                    <span className="font-body text-[18px] text-[#e1211a] group-hover:hidden">→</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;