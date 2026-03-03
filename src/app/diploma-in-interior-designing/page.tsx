import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "Diploma Certificate (1 Year) | IIFT",
  description: "Learn about the Diploma Certificate (1 Year) program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="Diploma Certificate (1 Year)"
      category="Interior Design"
      duration="12 Months"
      eligibility="Candidates should have passed Class X from any recognized board."
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A One-Year Diploma in Interior Design provides students with foundational knowledge in residential and commercial design. It’s perfect for those seeking to start a career quickly by learning essential skills in space planning, color theory, furniture design, and drafting.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p className="font-bold mb-4">Comprises of Two Semesters. Major Modules are as follows:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Fundamentals (Elements & Principles of Design)</li>
        <li>Drafting and Technical Drawing</li>
        <li>Space Planning and Layouts</li>
        <li>Color Theory and Application</li>
        <li>Materials, Finishes, and Textiles</li>
        <li>Furniture Design and History</li>
        <li>Computer-Aided Design (AutoCAD/SketchUp)</li>
        <li>Residential Design Project</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Junior Interior Designer</li>
        <li>Draftsperson</li>
        <li>Space Planner</li>
        <li>Color Consultant</li>
        <li>Furniture Designer</li>
      </ul>
    ` }} />
      }
    />
  );
}
