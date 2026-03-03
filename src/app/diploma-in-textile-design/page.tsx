import React from 'react';
import Hero from '@/components/sections/hero';
import CourseDescription from '@/components/sections/course-description';
import Curriculum from '@/components/sections/curriculum';
import QuoteBanner from '@/components/sections/quote-banner';
import PathwaySection from '@/components/sections/pathway';
import AdvantageGrid from '@/components/sections/advantage-grid';
import StudentWorkSlider from '@/components/sections/student-work-slider';
import IndustryPartnerships from '@/components/sections/industry-partnerships';
import CampusRecruiters from '@/components/sections/campus-recruiters';
import CtaBanner from '@/components/sections/cta-banner';
import FAQAccordion from '@/components/sections/faq';

export const metadata = {
  title: 'Diploma in Textile Design | IIFD - Indian Institute of Fashion & Design',
  description: 'Diploma in textile designing course will help you to understand and develop your sole creative skills.',
};

export default function TextileDesignPage() {
  return (
    <main>
      <Hero />
      <CourseDescription />
      <Curriculum />
      <QuoteBanner />
      <PathwaySection />
      <AdvantageGrid />
      <StudentWorkSlider />
      <IndustryPartnerships />
      <CampusRecruiters />
      <CtaBanner />
      <FAQAccordion />
    </main>
  );
}
