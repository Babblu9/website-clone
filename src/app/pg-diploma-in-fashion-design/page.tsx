import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "P.G DIPLOMA IN FASHION DESIGN | IIFT",
  description: "Learn about the P.G DIPLOMA IN FASHION DESIGN program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="P.G DIPLOMA IN FASHION DESIGN"
      category="Fashion Design"
      duration="1 Year"
      eligibility="Bachelor's degree in any stream."
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Post Graduate (P.G.) Diploma in Fashion Design is a specialized course tailored for graduates who want to build expertise in fashion, even if their undergraduate degree isn't in design.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Design Process</li>
        <li>Advanced Garment Construction</li>
        <li>Surface Ornamentation</li>
        <li>Fashion Forecasting & Trend Analysis</li>
        <li>Fashion Communication</li>
        <li>Retail & Brand Management</li>
        <li>Fashion Portfolio Development</li>
        <li>Internship / Industry Project</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Designer</li>
        <li>Brand Manager</li>
        <li>Fashion Buyer</li>
        <li>Fashion Consultant</li>
        <li>Product Developer</li>
        <li>Trend Analyst</li>
      </ul>
    ` }} />
      }
    />
  );
}
