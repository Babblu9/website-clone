import React from 'react';
import { Phone, Mail, Navigation } from 'lucide-react';

const CampusDetails = () => {
  return (
    <section className="bg-[#ed1c24] py-[40px] md:py-[60px] text-white overflow-hidden">
      <div className="container px-[15px] mx-auto max-w-[1140px]">
        <div className="flex flex-wrap -mx-[15px]">
          {/* Main Contact Column (Phone & Email) */}
          <div className="w-full md:w-[33.33%] px-[15px] mb-[30px] md:mb-0">
            <div className="flex flex-col gap-[20px]">
              {/* Phone Info */}
              <div className="flex items-start gap-[15px]">
                <div className="pt-1">
                  <Phone className="w-[18px] h-[18px] text-white" />
                </div>
                <div className="flex flex-col font-body">
                  <span className="text-[14px] font-semibold leading-relaxed">0172 4007918</span>
                  <span className="text-[14px] font-semibold leading-relaxed">904 176 6699</span>
                </div>
              </div>
              
              {/* Email Info */}
              <div className="flex items-center gap-[15px] mt-[10px]">
                <div>
                  <Mail className="w-[18px] h-[18px] text-white" />
                </div>
                <div>
                  <a 
                    href="mailto:info@iift.in" 
                    className="text-[14px] font-semibold hover:underline transition-all duration-300"
                  >
                    info@iift.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Campus Destinations Columns */}
          <div className="w-full md:w-[66.66%] px-[15px]">
            <div className="flex flex-wrap -mx-[15px]">
              {/* Chandigarh & Mohali Column */}
              <div className="w-full lg:w-1/2 px-[15px] flex flex-col gap-[30px]">
                {/* Chandigarh Campus */}
                <div className="flex items-start gap-[15px]">
                  <div className="pt-1">
                    <Navigation className="w-[18px] h-[18px] text-white rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] mb-1">Chandigarh Campus:</h4>
                    <p className="font-body text-[14px] leading-[1.6]">
                      SCO 479-480, Sector 35-C, Chandigarh
                    </p>
                  </div>
                </div>

                {/* Mohali Campus */}
                <div className="flex items-start gap-[15px]">
                  <div className="pt-1">
                    <Navigation className="w-[18px] h-[18px] text-white rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] mb-1">Mohali Campus:</h4>
                    <p className="font-body text-[14px] leading-[1.6]">
                      Plot No. 603, Industrial Area Phase 9, Mohali
                    </p>
                  </div>
                </div>
              </div>

              {/* Kolkata Column */}
              <div className="w-full lg:w-1/2 px-[15px] mt-[30px] lg:mt-0">
                <div className="flex items-start gap-[15px]">
                  <div className="pt-1">
                    <Navigation className="w-[18px] h-[18px] text-white rotate-45" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-[16px] mb-1">Kolkata Campus:</h4>
                    <p className="font-body text-[14px] leading-[1.6] max-w-[320px]">
                      KB-22, SALTLAKE, near Amri Hospital, Sector 3, Bidhannagar, Kolkata, West Bengal 700098
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampusDetails;