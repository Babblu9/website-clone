import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "Advanced Diploma Certificate (2 Years) | IIFT",
  description: "Learn about the Advanced Diploma Certificate (2 Years) program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="Advanced Diploma Certificate (2 Years)"
      category="Fashion Design"
      duration="24 Months"
      eligibility="Candidates should have passed Class XII from any recognized board."
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>Advanced Diploma Certificate course provides an overview and orientation of the fashion industry. It provides an enhanced environment for thinking, learning and gestation.</p>
      <p>The program is designed to ensure a fundamental and common approach for the fashion industry in consonance with the emerging challenges and needs of the industry. The certificate course in fashion designing prepares professionals for global management in the field of fashion, integrating with product management.</p>
      <p>It develops stronghold on management techniques for design organizations, creation processes, production, and distribution strategies and trends research. The program is also an amalgamation of individual creativity and understanding of the fashion market.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Basic Design & Design Idea</li>
        <li>Sketching and Illustration & Embroidery</li>
        <li>Drafting & Pattern making</li>
        <li>Garment Construction: Princess line kurta & churidar, Anarkali & Dogri, Shirt & trouser, Dart manipulated skirt & top, kaftan, shrugs Waist Coats, Blouse & petticoat, One-piece Dresses, [ fitted & semi fitted]</li>
        <li>Textile Science & History of Fashion</li>
        <li>Fashion CAD & Range Development</li>
        <li>Workshops- Accessories making, Day Celebrations</li>
        <li>Guest faculty Lectures, Industrial Visit, Designer PPT</li>
        <li>Fashion Merchandising + Portfolios Draping- Dart Manipulation, Tops, Cowl tops, Twisted tunics</li>
        <li>Designer Studio Visit, Compulsory Internship, Fashion shows Mentorship</li>
      </ul>
    ` }} />
      }
    />
  );
}
