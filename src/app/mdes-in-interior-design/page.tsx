import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "M.Des in Interior Design | IIFT",
  description: "Learn about the M.Des in Interior Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="M.Des in Interior Design"
      category="Interior Design"
      duration="2 Years"
      eligibility="Bachelor’s degree in Interior Design, Architecture, Fine Arts, or related fields."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Master of Design (M.Des) in Interior Design is a highly specialized postgraduate program emphasizing creative innovation, human-centric design, technology integration, and leadership in the design industry.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Thinking and Innovation</li>
        <li>Advanced Detailing and working drawings</li>
        <li>Human-Centric Design and Environmental Psychology</li>
        <li>Interactive and Smart Spaces</li>
        <li>Advanced Software Techniques (VR/AR in Design)</li>
        <li>Design Management and Entrepreneurship</li>
        <li>Research Project/Dissertation</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Creative Director</li>
        <li>Principal Interior Designer</li>
        <li>Design Strategist</li>
        <li>Experience Designer (Spatial Design)</li>
        <li>Design Entrepreneur</li>
      </ul>
    ` }} />
      }
    />
  );
}
