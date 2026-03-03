import React from 'react';
import HeroContactForm from '@/components/sections/hero-contact-form';
import CampusDetails from '@/components/sections/campus-details';
import EnquiryTypes from '@/components/sections/enquiry-types';

export const metadata = {
  title: 'Contact Us | IIFT - Indian Institute of Fashion Technology & Design',
  description: 'Feel free to reach out to us! Get in touch with our mentors to get the answers to all your questions.',
};

export default function ContactUsPage() {
  return (
    <main>
      <HeroContactForm />
      <CampusDetails />
      <EnquiryTypes />
    </main>
  );
}
