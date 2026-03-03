import React from 'react';
import HeroSection from '@/components/sections/hero';
import WhatWeDo from '@/components/sections/what-we-do';
import HowWeDoIt from '@/components/sections/how-we-do-it';
import EveryoneIsCreative from '@/components/sections/everyone-is-creative';
import CTAMentors from '@/components/sections/cta-mentors';

export const metadata = {
  title: 'About Us | IIFD - Indian Institute of Fashion & Design',
  description: 'IIFD - A place for explorers, experimenters & innovators. It’s a place where creativity and career merge.',
};

export default function AboutUsPage() {
  return (
    <main>
      <HeroSection />
      <WhatWeDo />
      <HowWeDoIt />
      <EveryoneIsCreative />
      <CTAMentors />
    </main>
  );
}
