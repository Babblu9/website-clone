import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "6 Month Interior Design Certification | IIFT",
  description: "Learn about the 6 Month Interior Design Certification program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="6 Month Interior Design Certification"
      category="Interior Design"
      duration="6 Months"
      eligibility="Any one with a passion to learn can apply"
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>The course is suitable for the students who want to explore their creativity in interior spaces. The syllabus is designed focusing strongly on the foundations of interior design.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Drafting</li>
        <li>Elements of Design & Basic Principles</li>
        <li>Color Theory</li>
        <li>Furniture Design & Anthropometry</li>
        <li>Materials and Products</li>
        <li>Communication Skills</li>
      </ul>
    ` }} />
      }
    />
  );
}
