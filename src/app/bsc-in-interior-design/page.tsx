import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "B.Sc in Interior Design | IIFT",
  description: "Learn about the B.Sc in Interior Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="B.Sc in Interior Design"
      category="Interior Design"
      duration="3 Years"
      eligibility="Completion of 10+2."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Bachelor of Science (B.Sc.) in Interior Design is a comprehensive three-year undergraduate program that combines the art and science of understanding people's behavior to create functional spaces within a building. The course focuses on residential, commercial, and institutional design.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fundamentals of Design and Drawing</li>
        <li>Materials and Construction Techniques</li>
        <li>Space Planning and Ergonomics</li>
        <li>Lighting and Acoustics</li>
        <li>Computer-Aided Design (AutoCAD, SketchUp, 3ds Max)</li>
        <li>History of Interior Design</li>
        <li>Building Services (Plumbing, Electrical, HVAC)</li>
        <li>Professional Practice and Estimation</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Interior Designer (Residential/Commercial)</li>
        <li>Furniture Designer</li>
        <li>Space Planner</li>
        <li>Exhibition Designer</li>
        <li>Lighting Consultant</li>
        <li>Set Designer</li>
      </ul>
    ` }} />
      }
    />
  );
}
