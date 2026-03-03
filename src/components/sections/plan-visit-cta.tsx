import React from 'react';

/**
 * PlanVisitCTA Section Component
 * Clones the 'Plan Your Campus Visit' section with high-fidelity styles.
 * Features:
 * - Bright primary red background (#ED1C24)
 * - Centered white bold Montserrat headline
 * - Responsive Poppins subtext for readability
 * - Signature "GET IN TOUCH" square button with white border and hover inversion
 */
const PlanVisitCTA: React.FC = () => {
  return (
    <section 
      className="bg-[#ED1C24] py-[80px] md:py-[100px] px-5"
      aria-labelledby="plan-visit-title"
    >
      <div className="max-w-[1200px] mx-auto text-center">
        {/* Section Headline */}
        <h2 
          id="plan-visit-title"
          className="font-display text-[32px] md:text-[42px] font-bold text-white leading-[1.2] mb-6 uppercase tracking-tight"
          style={{ fontFamily: 'var(--font-display)', color: '#FFFFFF' }}
        >
          Plan Your Campus Visit
        </h2>

        {/* Section Description */}
        <div className="max-w-[850px] mx-auto mb-10">
          <p 
            className="font-body text-[16px] md:text-[18px] text-white leading-[1.6] mb-0"
            style={{ fontFamily: 'var(--font-body)', opacity: 0.95 }}
          >
            The best way to understand what makes IIFT so special is to see it for yourself. 
            Chat with an admissions advisor, talk to current students, sit in on a class and 
            visit our campus. We can&apos;t wait to meet you!
          </p>
        </div>

        {/* Call to Action Button */}
        <div className="flex justify-center">
          <a 
            href="/contact-us/" 
            className="group relative inline-flex items-center justify-center px-8 py-3.5 border-2 border-white bg-transparent transition-all duration-300 ease-in-out hover:bg-white"
          >
            <span 
              className="font-display text-[13px] font-bold text-white uppercase tracking-widest transition-colors duration-300 group-hover:text-[#ED1C24]"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Get In Touch
            </span>
          </a>
        </div>
      </div>

      {/* Social Floating Action Buttons - Mobile/Desktop Floating Simulation (Common in these layouts) */}
      {/* Note: In the screenshots, these are typically handled by a global floating component, 
          but they appear next to this section in the desktop view. */}
      {/* 
      <div className="fixed right-5 bottom-32 flex flex-col gap-3 z-50 pointer-events-none">
        <div className="p-2.5 bg-[#25D366] rounded-full shadow-lg cursor-pointer pointer-events-auto">
          <svg className="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.431 5.63 1.432h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
        </div>
        <div className="p-2.5 bg-[#FF0000] rounded-full shadow-lg cursor-pointer pointer-events-auto">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
        </div>
      </div>
      */}
    </section>
  );
};

export default PlanVisitCTA;