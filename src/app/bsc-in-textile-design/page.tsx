import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "B.Sc. Textiles Design | IIFT",
  description: "Learn about the B.Sc. Textiles Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="B.Sc. Textiles Design"
      category="Textile Design"
      duration="3 Years"
      eligibility="10+2 from a recognized board."
      seats="20"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A B.Sc. in Textile Design is a detailed three-year undergraduate program that bridges the gap between artistic creativity and the scientific/technical aspects of textile production.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Textile Science (In-depth study of physical and chemical properties)</li>
        <li>Woven and Knitted Fabric Design</li>
        <li>Advanced Printing and Dyeing Techniques</li>
        <li>Textile Testing and Quality Assurance</li>
        <li>History of Indian and Global Textiles</li>
        <li>Computer-Aided Textile Design (Advanced CAD)</li>
        <li>Textile Marketing and Merchandising</li>
        <li>Sustainable Textile Production</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Textile Designer (Apparel/Home Furnishing)</li>
        <li>Textile Technologist</li>
        <li>Fabric Developer/Sourcing Manager</li>
        <li>Textile Merchandiser</li>
        <li>Quality Assurance Manager</li>
        <li>Sustainable Textile Consultant</li>
      </ul>
    ` }} />
      }
    />
  );
}
