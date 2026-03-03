import React from 'react';
import HeroSection from '@/components/sections/hero';
import CourseDescriptionSection from '@/components/sections/course-description';
import CurriculumSection from '@/components/sections/curriculum';
import QuoteDivider from '@/components/sections/quote-divider';
import CareerPathway from '@/components/sections/career-pathway';
import IIFDAdvantage from '@/components/sections/iifd-advantage';
import StudentWorkSlider from '@/components/sections/student-work-slider';
import PartnershipsRecruiters from '@/components/sections/partnerships-recruiters';
import CTASection from '@/components/sections/cta-bottom';
import FAQSection from '@/components/sections/faq';

export const metadata = {
  title: 'Diploma In Fashion Designing | IIFD - Indian Institute of Fashion & Design',
  description: 'Earn a Fashion Design Diploma from the Most Emerging and Multi-Award winning Fashion Design College.',
};

export default function FashionDesigningPage() {
  return (
    <main>
      <HeroSection />
      <CourseDescriptionSection />
      <CurriculumSection />
      <QuoteDivider />
      <CareerPathway />
      <IIFDAdvantage />
      <StudentWorkSlider />
      <PartnershipsRecruiters />
      <FAQSection />
    </main>
  );
}
