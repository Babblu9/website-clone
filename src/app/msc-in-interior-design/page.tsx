import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "M.Sc in Interior Design | IIFT",
  description: "Learn about the M.Sc in Interior Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="M.Sc in Interior Design"
      category="Interior Design"
      duration="2 Years"
      eligibility="Bachelor’s degree in Interior Design, Architecture, or related fields."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Master of Science (M.Sc.) in Interior Design is an advanced two-year postgraduate program that focuses on complex design theories, sustainable practices, research methodologies, and project management.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Advanced Space Planning and Ergonomics</li>
        <li>Sustainable and Green Design Practices</li>
        <li>Advanced Materials and Technologies</li>
        <li>Building Information Modeling (BIM) and 3D Visualization</li>
        <li>Interior Landscape Design</li>
        <li>Research Methodology in Design</li>
        <li>Project Management and Professional Practice</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Senior Interior Designer</li>
        <li>Design Consultant</li>
        <li>Sustainable Design Expert</li>
        <li>Interior Architecture Manager</li>
        <li>Academician/Lecturer</li>
      </ul>
    ` }} />
      }
    />
  );
}
