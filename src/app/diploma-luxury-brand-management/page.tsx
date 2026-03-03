import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "Diploma in Fashion Luxury Brand Management | IIFT",
  description: "Learn about the Diploma in Fashion Luxury Brand Management program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="Diploma in Fashion Luxury Brand Management"
      category="Luxury Brand Management"
      duration="1 Year"
      eligibility="10+2 or equivalent"
      seats="25"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Diploma in Fashion Luxury Brand Management equips students with the specialized skills needed to navigate and succeed in the high-end fashion and luxury goods sector. It blends fashion appreciation with strategic business management, marketing, and retail operations tailored to the luxury market.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Introduction to the Luxury Sector (History & Evolution)</li>
        <li>Luxury Consumer Behavior and Psychology</li>
        <li>Brand Identity and Equity in Luxury</li>
        <li>Luxury Retail Management and Operations</li>
        <li>Strategic Marketing for Luxury Brands</li>
        <li>Visual Merchandising and Store Design</li>
        <li>Digital Marketing and E-commerce for Luxury</li>
        <li>PR, Events, and Luxury Communication</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Luxury Brand Manager</li>
        <li>Luxury Retail Manager/Boutique Manager</li>
        <li>Visual Merchandiser for Luxury Brands</li>
        <li>Luxury PR & Communications Specialist</li>
        <li>Luxury Fashion Buyer</li>
        <li>Client Relationship Manager (CRM) in Luxury</li>
      </ul>
    ` }} />
      }
    />
  );
}
