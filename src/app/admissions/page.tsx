import React from 'react';
import HeroSection from '@/components/sections/hero';
import FeaturesGrid from '@/components/sections/features-grid';
import RecentEvents from '@/components/sections/recent-events';
import StatsRibbon from '@/components/sections/stats-ribbon';
import AwardsRecognition from '@/components/sections/awards-recognition';
import BenefitsSection from '@/components/sections/benefits';
import CoursesOffered from '@/components/sections/courses-offered';
import IndustryPartnerships from '@/components/sections/industry-partnerships';
import MentorsCarousel from '@/components/sections/mentors-carousel';
import CampusRecruiters from '@/components/sections/campus-recruiters';
import AdmissionForm from '@/components/sections/admission-form';

export const metadata = {
  title: 'Admissions | IIFT - Indian Institute of Fashion Technology & Design',
  description: 'With a dozen fashion design colleges in Punjab to choose from, here\'s what makes IIFT different. Your new adventures start here.',
};

export default function AdmissionsPage() {
  return (
    <main>
      <HeroSection />
      <FeaturesGrid />
      <RecentEvents />
      <StatsRibbon />
      <AwardsRecognition />
      <BenefitsSection />
      <CoursesOffered />
      <IndustryPartnerships />
      <MentorsCarousel />
      <CampusRecruiters />
      <AdmissionForm />
    </main>
  );
}
