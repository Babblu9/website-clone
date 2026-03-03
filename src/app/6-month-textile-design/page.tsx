import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "6 Months course in Textile Design | IIFT",
  description: "Learn about the 6 Months course in Textile Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="6 Months course in Textile Design"
      category="Textile Design"
      duration="6 Months"
      eligibility="10th/12th pass"
      seats="20"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A 6-month certificate course in Textile Design provides a swift yet comprehensive introduction to the world of textiles.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Introduction to Textiles (Fibers, Yarns, Fabrics)</li>
        <li>Color Theory and Application</li>
        <li>Basic Printing and Dyeing Techniques</li>
        <li>Surface Ornamentation (Embroidery, Appliqué)</li>
        <li>Digital Design Basics (Introduction to CAD for textiles)</li>
        <li>Fabric Science and Testing</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Junior Textile Designer</li>
        <li>Fabric Sourcing Assistant</li>
        <li>Quality Control Assistant</li>
        <li>Freelance Textile Artist</li>
      </ul>
    ` }} />
      }
    />
  );
}
