import React from 'react';

const AdmissionForm = () => {
  return (
    <section className="bg-brand-red py-[80px] md:py-[100px] w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-[40px]">
          <h4 className="font-display font-semibold text-white text-[18px] md:text-[22px] uppercase tracking-wider mb-2">
            Study At Best Fashion Designing College
          </h4>
          <h2 className="font-display font-black text-white text-[36px] md:text-[54px] leading-tight">
            Study at IIFT
          </h2>
        </div>

        <div className="max-w-[1000px] mx-auto bg-white p-6 md:p-[50px] shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  placeholder="Full Name *"
                  className="w-full bg-[#f2f2f2] border-none px-4 py-3 font-body text-[14px] text-near-black focus:ring-2 focus:ring-brand-red outline-none transition-all placeholder:text-medium-gray"
                  required
                />
              </div>

              {/* Email ID */}
              <div>
                <input
                  type="email"
                  placeholder="Email ID *"
                  className="w-full bg-[#f2f2f2] border-none px-4 py-3 font-body text-[14px] text-near-black focus:ring-2 focus:ring-brand-red outline-none transition-all placeholder:text-medium-gray"
                  required
                />
              </div>

              {/* Mobile Number */}
              <div>
                <input
                  type="tel"
                  placeholder="Enter Mobile Number *"
                  className="w-full bg-[#f2f2f2] border-none px-4 py-3 font-body text-[14px] text-near-black focus:ring-2 focus:ring-brand-red outline-none transition-all placeholder:text-medium-gray"
                  required
                />
              </div>

              {/* Select Discipline */}
              <div className="relative">
                <select className="w-full bg-[#f2f2f2] border-none px-4 py-3 font-body text-[14px] text-medium-gray focus:ring-2 focus:ring-brand-red outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select Discipline *</option>
                  <option value="fashion">Fashion Design</option>
                  <option value="interior">Interior Design</option>
                  <option value="textile">Textile Design</option>
                  <option value="specialized">Specialized Courses</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#828282" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Select Course */}
              <div className="relative">
                <select className="w-full bg-[#f2f2f2] border-none px-4 py-3 font-body text-[14px] text-medium-gray focus:ring-2 focus:ring-brand-red outline-none transition-all appearance-none cursor-pointer">
                  <option value="">Select Course *</option>
                  <option value="diploma">Diploma</option>
                  <option value="ug">UG Degree</option>
                  <option value="pg">PG Degree</option>
                  <option value="adv-diploma">Advanced Diploma</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                    <path d="M1 1L6 6L11 1" stroke="#828282" strokeWidth="2" />
                  </svg>
                </div>
              </div>

              {/* Captcha Section */}
              <div className="flex flex-col md:flex-row gap-4 items-center">
                <div className="flex items-center bg-[#f2f2f2] px-4 py-1.5 min-w-[160px] justify-between h-[45px]">
                  <span className="font-display font-bold text-[20px] tracking-[4px] italic text-[#333] select-none">
                    44b40b
                  </span>
                  <button type="button" className="text-near-black hover:text-brand-red transition-colors pl-4">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                      <path d="M21 3v5h-5" />
                    </svg>
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="Enter Captcha"
                  className="w-full bg-[#f2f2f2] border-none px-4 py-3 font-body text-[14px] text-near-black focus:ring-2 focus:ring-brand-red outline-none transition-all placeholder:text-medium-gray h-[45px]"
                  required
                />
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3 pt-2">
              <input
                type="checkbox"
                id="consent"
                className="mt-1 w-4 h-4 text-brand-red bg-[#f2f2f2] border-gray-300 focus:ring-brand-red accent-brand-red cursor-pointer"
                required
              />
              <label htmlFor="consent" className="font-body text-[12px] md:text-[13px] text-medium-gray leading-tight cursor-pointer">
                I agree to receive information by signing up on Indian Institute of Fashion Technology & Design *
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-4">
              <button
                type="submit"
                className="bg-[#c4161c] hover:bg-near-black text-white font-display font-bold text-[14px] uppercase px-12 py-3 transition-all duration-300 min-w-[160px]"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdmissionForm;