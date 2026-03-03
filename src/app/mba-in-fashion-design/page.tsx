import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "MBA in Fashion Design | IIFT",
  description: "Learn about the MBA in Fashion Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="MBA in Fashion Design"
      category="Fashion Design"
      duration="2 Years"
      eligibility="Bachelor’s degree in any discipline with a minimum of 50% marks."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>An MBA in Fashion Design is a specialized two-year postgraduate program that merges creative design principles with core business and management strategies. This course is tailored for individuals aiming to lead in the fashion industry by understanding both the artistic and commercial aspects of fashion.</p>
      <p><strong>Mode:</strong> Full-time</p>
      <p><strong>Focus Areas:</strong> Fashion design, marketing, merchandising, retail management, and entrepreneurship.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Design Principles</li>
        <li>Marketing Management</li>
        <li>Retail and Merchandising</li>
        <li>Consumer Behavior</li>
        <li>Brand Management</li>
        <li>Entrepreneurship</li>
        <li>Digital Marketing</li>
        <li>Sustainability in Fashion</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Brand Manager</li>
        <li>Retail Buyer</li>
        <li>Merchandising Manager</li>
        <li>Fashion Marketing Specialist</li>
        <li>Product Development Manager</li>
        <li>Entrepreneur in Fashion Industry</li>
        <li>Visual Merchandiser</li>
      </ul>
    ` }} />
      }
    />
  );
}
