import React from 'react';
import HeroSection from '@/components/sections/hero';
import IndustryRelations from '@/components/sections/industry-relations';
import CareerOpportunities from '@/components/sections/career-opportunities';
import TextileIndustry from '@/components/sections/textile-industry';
import GalleryVideo from '@/components/sections/gallery-video';
import IndustryPartnerships from '@/components/sections/industry-partnerships';
import CampusRecruiters from '@/components/sections/campus-recruiters';
import StudyAtIIFD from '@/components/sections/study-at-iift';

export const metadata = {
  title: 'Training and Placement | IIFT - Indian Institute of Fashion Technology & Design',
  description: 'IIFT Placement Team has exceptional connections within our industries and offers one on one targeted career planning and placement services.',
};

export default function TrainingAndPlacementPage() {
  return (
    <main>
      <HeroSection />
      <IndustryRelations />
      <CareerOpportunities />
      <TextileIndustry />
      <GalleryVideo />
      <IndustryPartnerships />
      <CampusRecruiters />
      <StudyAtIIFD />
    </main>
  );
}
