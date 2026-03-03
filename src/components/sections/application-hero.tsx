import React from 'react';
import Image from 'next/image';
import { GraduationCap, Landmark, Users, Briefcase, Award } from 'lucide-react';

const ApplicationHero = () => {
  return (
    <section className="relative min-h-[900px] w-full flex items-start justify-center pt-20 pb-32 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/pexels-ray-piedra-1478477-2-4.jpg"
          alt="Art Supplies Workspace"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-white/80" />
      </div>

      <div className="container relative z-10 mx-auto px-4 flex flex-col lg:flex-row items-start justify-center">
        {/* Left Sidebar Features */}
        <div className="hidden lg:flex flex-col bg-[#ed2024] p-[30px_20px] w-[300px] gap-[25px] mt-[100px] -mr-[30px] z-20 shadow-xl">
          <div className="flex items-center gap-[15px]">
            <GraduationCap className="text-white w-8 h-8 shrink-0" strokeWidth={1.5} />
            <span className="text-white text-[13px] font-medium leading-[1.2] uppercase font-display">
              Comprehensive Curriculum
            </span>
          </div>
          <div className="flex items-center gap-[15px]">
            <Landmark className="text-white w-8 h-8 shrink-0" strokeWidth={1.5} />
            <span className="text-white text-[13px] font-medium leading-[1.2] uppercase font-display">
              State-of-the-Art Infrastructure
            </span>
          </div>
          <div className="flex items-center gap-[15px]">
            <Users className="text-white w-8 h-8 shrink-0" strokeWidth={1.5} />
            <span className="text-white text-[13px] font-medium leading-[1.2] uppercase font-display">
              Industry-Experienced Faculty
            </span>
          </div>
          <div className="flex items-center gap-[15px]">
            <Briefcase className="text-white w-8 h-8 shrink-0" strokeWidth={1.5} />
            <span className="text-white text-[13px] font-medium leading-[1.2] uppercase font-display">
              Placement Assistance
            </span>
          </div>
          <div className="flex items-center gap-[15px]">
            <Award className="text-white w-8 h-8 shrink-0" strokeWidth={1.5} />
            <span className="text-white text-[13px] font-medium leading-[1.2] uppercase font-display">
              Industry Leading Collaborations and Exposure
            </span>
          </div>
        </div>

        {/* Main Application Form Container */}
        <div className="flex-1 max-w-[940px] bg-white shadow-[0px_10px_30px_rgba(0,0,0,0.1)] p-10 md:p-14 relative z-10 border border-gray-100">
          {/* Circular Badge */}
          <div className="absolute -top-10 -right-10 md:-top-16 md:-right-16 w-32 h-32 md:w-44 md:h-44 z-30">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/161f0af2-b637-4d07-a0db-38762c25e241-iifd-in/assets/images/Group-262-1-2.png"
              alt="iifd badge"
              width={176}
              height={176}
              className="w-full h-full object-contain"
            />
          </div>

          <div className="mb-8">
            <h2 className="text-[#ed2024] font-heading text-[32px] font-bold uppercase leading-tight tracking-tight mb-2">
              GET STARTED TODAY – <br />
              <span className="text-black">FOR A GREAT CAREER TOMORROW.</span>
            </h2>
            <p className="text-[#000000] font-body text-[13px] md:text-[15px] leading-[1.6] max-w-[700px]">
              Great Things Never Came from comfort zones. Reserve your seat today by applying through online application at IIFD.
            </p>
          </div>

          <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-4">
            <input type="text" placeholder="Your Name" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <input type="tel" placeholder="Phone Number" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <input type="email" placeholder="Email" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            
            <select className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_10px_center] bg-no-repeat">
              <option value="">Select Your Country</option>
              <option value="india">India</option>
            </select>
            <input type="text" placeholder="City" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <textarea placeholder="Address" rows={1} className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024] md:row-span-1" />
            
            <input type="text" placeholder="Date of Birth (dd/mm/yyyy)" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <select className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_10px_center] bg-no-repeat">
              <option value="">Select Your Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            <input type="text" placeholder="Father's Name" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            
            <input type="text" placeholder="Mother's Name" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <input type="tel" placeholder="Parent's Contact Number" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <div className="hidden lg:block"></div> {/* Spacer for grid alignment */}

            <input type="text" placeholder="School/College Name" className="md:col-span-2 font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <input type="text" placeholder="Passed In Year" className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            
            <textarea placeholder="Any Certifications" rows={2} className="md:col-span-2 font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            <textarea placeholder="Past Qualifications" rows={2} className="font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024]" />
            
            <select className="md:col-span-2 font-body text-[14px] p-3 border border-[#cccccc] outline-none focus:border-[#ed2024] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2220%22%20height%3D%2220%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M5%207.5L10%2012.5L15%207.5%22%20stroke%3D%22%23000000%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22/%3E%3C/svg%3E')] bg-[length:20px] bg-[right_10px_center] bg-no-repeat">
              <option value="">Select Your Department</option>
              <option value="fashion">Fashion Design</option>
              <option value="interior">Interior Design</option>
              <option value="textile">Textile Design</option>
            </select>

            <button
              type="submit"
              className="md:col-span-2 lg:col-span-3 bg-[#ed2024] text-white font-display font-semibold text-[16px] uppercase py-[15px] px-8 transition-colors duration-200 mt-2 hover:bg-black"
            >
              SUBMIT ONLINE APPLICATION
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ApplicationHero;