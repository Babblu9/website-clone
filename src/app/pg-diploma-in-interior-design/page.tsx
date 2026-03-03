import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "P.G DIPLOMA IN INTERIOR DESIGN | IIFT",
  description: "Learn about the P.G DIPLOMA IN INTERIOR DESIGN program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="P.G DIPLOMA IN INTERIOR DESIGN"
      category="Interior Design"
      duration="2 Years"
      eligibility="Bachelor's degree in any stream."
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Post Graduate (P.G.) Diploma in Interior Design is an intensive specialization program for graduates aiming to enter or advance in the interior design industry. The program focuses on advanced design methodologies, real-world project management, and global design trends.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Research and Concept Development</li>
        <li>Advanced Commercial and Hospitality Design</li>
        <li>Building Information Modeling (BIM)</li>
        <li>Construction Management and Detailing</li>
        <li>Design Management and Entrepreneurship</li>
        <li>Environmental and Ergonomic Design</li>
        <li>Portfolio Development</li>
        <li>Industry Internship</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Senior Interior Designer</li>
        <li>Design Director</li>
        <li>Facility Manager</li>
        <li>Design Consultant</li>
        <li>Interior Design Entrepreneur</li>
      </ul>
    ` }} />
      }
    />
  );
}
