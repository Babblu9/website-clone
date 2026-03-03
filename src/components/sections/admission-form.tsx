import React from 'react';

const AdmissionForm = () => {
  return (
    <section className="bg-[#e1211a] py-[80px] px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px]">
        {/* Header Text */}
        <div className="text-center mb-10">
          <h4 className="text-white font-display font-bold text-[24px] lg:text-[32px] tracking-tight mb-2 normal-case">
            Study at #1 Diploma Fashion Designing College
          </h4>
          <h2 className="text-white font-display font-black text-[50px] lg:text-[72px] mt-0 mb-0 leading-tight">
            Study at IIFD
          </h2>
        </div>

        {/* Form Container */}
        <div className="max-w-[768px] mx-auto bg-white p-2 lg:p-4 shadow-2xl relative z-10">
          <form className="bg-[#f7f7f7] p-6 lg:p-10 space-y-4">
            {/* Name Field */}
            <div>
              <input
                type="text"
                placeholder="Enter Name *"
                className="w-full bg-white border border-[#dddddd] px-4 py-3 text-[14px] font-body focus:outline-none focus:ring-1 focus:ring-[#e1211a] transition-all"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <input
                type="email"
                placeholder="Enter Email Address *"
                className="w-full bg-white border border-[#dddddd] px-4 py-3 text-[14px] font-body focus:outline-none focus:ring-1 focus:ring-[#e1211a] transition-all"
                required
              />
            </div>

            {/* Mobile Number Field */}
            <div className="flex">
              <div className="flex items-center px-3 border border-r-0 border-[#dddddd] bg-white text-[14px] font-body text-gray-600">
                +91 <span className="ml-1 border-l border-gray-300 h-4 mx-2"></span>
              </div>
              <input
                type="tel"
                placeholder="Enter Mobile Number *"
                className="w-full bg-white border border-[#dddddd] px-4 py-3 text-[14px] font-body focus:outline-none focus:ring-1 focus:ring-[#e1211a] transition-all"
                required
              />
            </div>

            {/* Discipline Selection */}
            <div>
              <select className="w-full bg-white border border-[#dddddd] px-4 py-3 text-[14px] font-body text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#e1211a] transition-all appearance-none cursor-pointer">
                <option value="">Select Discipline *</option>
                <option value="fashion">Fashion Design</option>
                <option value="interior">Interior Design</option>
                <option value="textile">Textile Design</option>
                <option value="graphic">Graphic Design</option>
              </select>
            </div>

            {/* Course Selection */}
            <div>
              <select className="w-full bg-white border border-[#dddddd] px-4 py-3 text-[14px] font-body text-gray-500 focus:outline-none focus:ring-1 focus:ring-[#e1211a] transition-all appearance-none cursor-pointer">
                <option value="">Select Course *</option>
                <option value="diploma">Diploma</option>
                <option value="ug">Undergraduate</option>
                <option value="pg">Postgraduate</option>
                <option value="specialized">Specialized Program</option>
              </select>
            </div>

            {/* Captcha Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center bg-white border border-[#dddddd] px-3 py-1">
                <div className="bg-gradient-to-r from-blue-100 to-green-100 px-4 py-2 font-display italic font-bold tracking-widest text-gray-700 select-none">
                  cbb09d
                </div>
                <button type="button" className="ml-auto text-gray-400 hover:text-[#e1211a]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
                </button>
              </div>
              <input
                type="text"
                placeholder="Enter Captcha"
                className="w-full bg-white border border-[#dddddd] px-4 py-3 text-[14px] font-body focus:outline-none focus:ring-1 focus:ring-[#e1211a] transition-all"
                required
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-2 pt-2">
              <input
                type="checkbox"
                id="consent"
                className="mt-1.5 accent-[#e1211a]"
                required
              />
              <label htmlFor="consent" className="text-[12px] text-gray-600 font-body leading-relaxed cursor-pointer">
                I agree to receive information by signing up on Indian Institute Of Fashion &amp; Design *
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <button
                type="submit"
                className="bg-[#b91c1c] hover:bg-[#111111] text-white font-display font-bold text-[14px] uppercase tracking-wider py-4 px-16 transition-all duration-300 rounded-[2px]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Sticky Floating Buttons (Visual only, as per reference) */}
      <div className="hidden lg:flex fixed right-6 bottom-24 flex-col gap-4 z-50">
        <a 
          href="https://wa.me/" 
          className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="WhatsApp"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.41 0 .01 5.403.007 12.04c0 2.123.554 4.197 1.608 6.04L0 24l6.117-1.604a11.845 11.845 0 005.926 1.57h.005c6.639 0 12.039-5.403 12.042-12.042a11.776 11.776 0 00-3.441-8.518"/></svg>
        </a>
        <a 
          href="tel:+91" 
          className="w-12 h-12 bg-[#e1211a] rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
          aria-label="Call Us"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        </a>
      </div>
    </section>
  );
};

export default AdmissionForm;