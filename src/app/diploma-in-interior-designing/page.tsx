import React from 'react';
import HeroSection from '@/components/sections/hero';
import CourseDescription from '@/components/sections/course-description';
import Curriculum from '@/components/sections/curriculum';
import QuoteDivider from '@/components/sections/quote-divider';
import PathwayAfterDiploma from '@/components/sections/pathway';
import IIFDAdvantage from '@/components/sections/advantage';
import StudentWork from '@/components/sections/student-work';
import IndustryPartnerships from '@/components/sections/partnerships';
import RecruitersSection from '@/components/sections/recruiters';
import FAQ from '@/components/sections/faq';
import CTAFooter from '@/components/sections/cta-footer';

export const metadata = {
  title: 'Diploma in Interior Designing | IIFD - Indian Institute of Fashion & Design',
  description: 'Diploma in Interior Design course focuses on the skills and the complete design process followed by Interior Design professionals.',
};

export default function InteriorDesigningPage() {
  return (
    <main>
      <HeroSection />
      <CourseDescription />
      <Curriculum />
      <QuoteDivider />
      <PathwayAfterDiploma />
      <IIFDAdvantage />
      <StudentWork />
      <IndustryPartnerships />
      <RecruitersSection />
      <FAQ />
      <CTAFooter />
    </main>
  );
}
