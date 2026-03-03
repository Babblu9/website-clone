import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "B.SC IN FASHION DESIGN | IIFT",
  description: "Learn about the B.SC IN FASHION DESIGN program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="B.SC IN FASHION DESIGN"
      category="Fashion Design"
      duration="3 Years"
      eligibility="Completion of 10+2 (any stream) with a minimum of 50% aggregate marks from a recognized board."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Bachelor of Science (B.Sc.) in Fashion Design is a 3-year undergraduate program that combines creativity with technical skills to prepare students for various roles in the fashion industry. This course covers aspects like garment construction, textile science, fashion illustration, and marketing strategies, providing a comprehensive understanding of the fashion world.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Illustration & Textile Science</li>
        <li>Pattern Making and Garment Construction</li>
        <li>Fashion Marketing and Merchandising</li>
        <li>Computer-Aided Design (CAD)</li>
        <li>Styling & History of Fashion</li>
        <li>Design Basic & Surface Ornamentation</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Designer & Textile Designer</li>
        <li>Fashion Illustrator & Fashion Merchandiser</li>
        <li>Apparel Production Manager</li>
        <li>Fashion Marketing Manager & Fashion Journalist</li>
        <li>Entrepreneur in Fashion Industry</li>
      </ul>
    ` }} />
      }
    />
  );
}
