import React from 'react';

export const metadata = {
  title: 'About Us | IIFT - Indian Institute of Fashion Technology & Design',
  description: 'Learn about IIFT, our founders, campus, and why we are the best choice for fashion and interior design education.',
};

export default function AboutUsPage() {
  return (
    <div className="bg-white min-h-screen pt-[120px] pb-[80px]">
      <div className="container mx-auto px-5 lg:px-10 max-w-[1200px]">

        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[#111111] font-display font-extrabold text-[40px] md:text-[56px] uppercase tracking-tight mb-4">
            About Us
          </h1>
          <div className="w-[80px] h-[3px] bg-[#ED1C24] mx-auto"></div>
        </div>

        <div className="space-y-20">

          {/* Discover Us */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#ED1C24] font-display font-bold text-[32px] uppercase mb-6 relative">
                Discover Us
                <span className="absolute bottom-[-10px] left-0 w-[50px] h-[2px] bg-[#111111]"></span>
              </h2>
              <div className="space-y-4 text-[#54595F] font-body text-[16px] leading-[1.8]">
                <p>
                  IIFT was born to provide the students who have the creative edge, and are unable to find the right path to take their creative career ahead. IIFT bridges the gap between the ‘purposeful education’ and ‘productive career’ by providing varied courses customized to master one’s passion and forge a gratifying career.
                </p>
                <p>
                  We are dedicated towards developing talent in art and design into a career-oriented skill. IIFT paves the way for students willing to pursue their career in Fashion and Interiors by providing them the state of art infrastructure, faculties who have extensive experience and knowledge in their respective fields, the curriculum is structured to ensure qualitative training and meets the demand of market, fortifying the students so that they are ready to face the industry of their choice with confidence.
                </p>
              </div>
            </div>
            <div className="bg-[#f5f5f5] p-10 flex items-center justify-center min-h-[400px]">
              <div className="text-[#111111] font-display font-bold text-[24px] text-center border-4 border-[#ED1C24] p-8 uppercase">
                Bridging Purposeful Education & Productive Career
              </div>
            </div>
          </section>

          {/* Founders Message & Foresight */}
          <section className="bg-[#f5f5f5] p-8 md:p-12">
            <h2 className="text-[#111111] font-display font-bold text-[32px] uppercase mb-8 text-center">
              Founders Message
            </h2>
            <div className="max-w-[800px] mx-auto space-y-6 text-[#54595F] font-body text-[16px] leading-[1.8]">
              <h3 className="text-[#ED1C24] font-bold text-[22px] mb-2">Welcome to IIFT</h3>
              <p>
                IIFT believes that design is intelligence made visible. keeping the believe alive we, at IIFT combine creative ability with career development, by providing state-of-art infrastructure (sophisticated equipment’s, art and design studio etc..). The students are exposed to plethora of skill-based courses which are structured to provide hands on experience under the guidance of accomplished and ace faculties in both Fashion and Interiors, with emphasis on imparting practical training and compelling the students to line up to their greatest potential and make them ready to meet the demands of the industry.
              </p>
              <p>
                IIFT believes in providing the students the best of opportunities in the industry of their choice, with the same conviction we have tied up with the top brands in the industry related to Fashion and Interiors.
              </p>
              <p>
                IIFT is student centric, where the students are provided the platform to unleash their creative side. So, break the mundane and welcome change through us.
              </p>

              <h3 className="text-[#ED1C24] font-bold text-[22px] mt-8 mb-2">Foresight</h3>
              <p>
                IIFT seeks to reflect the best in design in everything that we do. To become the benchmark for the Design Institute, keeping in mind the student satisfaction and welfare, by continuous improvement driven by integrity, teamwork and creativity of our team. We believe in creating an efficient education system that prepares and empowers all students to face the competition outside, and where the experience can be gratifying and profitable.
              </p>
            </div>
          </section>

          {/* About Campus */}
          <section>
            <h2 className="text-[#ED1C24] font-display font-bold text-[32px] uppercase mb-6 relative">
              About Campus
              <span className="absolute bottom-[-10px] left-0 w-[50px] h-[2px] bg-[#111111]"></span>
            </h2>
            <div className="space-y-4 text-[#54595F] font-body text-[16px] leading-[1.8] max-w-[900px]">
              <p>
                IIFT was established to feed the creative soul of the student’s. Based in the heart of the city, in the plush KUKATPALLY. We do not compromise on infrastructure, the campus is well equipped to fulfill the requirements and demands of the design industry. We provide an excellent environment to polish and enhance your creative skills.
              </p>
              <p>
                IIFT has well equipped Computer Lab, a Garment Construction Room, with the latest machine’s used in the industries. The materials spans all manner and aspects of design and art. The library has one of the best collections of books related to Fashion, Interior, etc… The student’s at IIFT have access to extensive studio and workshop facilities with the latest machinery. The classrooms are designed to suit the demand of modern education. The interiors are made keeping the student’s safety in mind. The entire campus is wi-fi enabled.
              </p>
              <p>
                The faculty- student ratio is 15:1 to offer more individual attention to the student’s, where they learn from professionals who know the in’s and out’s of the subject they specialize in. IIFT is the symbol of modern learning and a creative melting pot of brilliant minds, you’ll be group of professional that will become your second family.
              </p>
            </div>
          </section>

          {/* Why Us */}
          <section className="bg-[#111111] text-white p-8 md:p-12">
            <h2 className="text-[#ED1C24] font-display font-bold text-[32px] uppercase mb-6 relative border-b border-[#333333] pb-4">
              Why us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="space-y-4 text-[#cccccc] font-body text-[15px] leading-[1.8]">
                <p>
                  Studying at IIFT is about excellence in art and design. We encourage diversity and difference in our students in an environment that will challenge your creativity and talent. Our goal is that you will graduate with the skills, knowledge, and ambition to flourish in your chosen career.
                </p>
                <p>
                  We hope you will be enriched by the experience of working within a creative community, exploring your own creative response to the world around you.
                </p>
                <p className="font-bold text-white mt-6 text-[18px]">
                  There are many reasons to choose IIFT:
                </p>
              </div>
              <div>
                <ul className="space-y-3 text-[#cccccc] font-body text-[14px]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> Customize your academic pathway with us, offering accredited and a nationally recognized certificate in Fashion and Interiors.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> State of art infrastructure, designed to fulfill the requirement of the course.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> Boost your career by working on real projects, attending workshops, site visits etc.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> Gain insight into the world of design through guest lectures by the preeminent in the industry.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> Get placed with the top brands in the industry.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> Our Kukatpally Location has all the energy and excitement of a design institute.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> IIFT is a single discipline College, our focus is excellence in art, design and visual culture at undergraduate and postgraduate level.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> IIFT provides a learning experience based on practical studio work combined with a theoretical context, you will be challenged intellectually and creatively.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> In IIFT you will experience small learning groups in studio, tutorials and seminars, we believe you learn as much from your peers as from your tutors and lecturers and that the creative process is not an individual solitary activity.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> All Students will participate in end-of-year and degree exhibitions or the Fashion Show. Students are also encouraged to engage in other student or staff-led initiatives and opportunities to enter competitions and exhibit.
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#ED1C24] mt-1">•</span> Our goal is that our students graduate with the skills and knowledge to flourish in their chosen career and to contribute to the economy, to culture and to society. Aartreum graduates will have the potential to be catalysts of progress by engaging with the world and creating a culture of change.
                  </li>
                </ul>
              </div>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
