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
      category="Fashion Design"
      duration="12 Months"
      eligibility="Candidates should have passed Class X from any recognized board."
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>One year course comprises of foundation course. A logical, sequential, hands-on experience enables students to conceptualize designs, make patterns and construct garments of impeccable quality.</p>
      <p>The course covers technical aspects of garment design and offers link with the surrounding fashion industry. The course is apt for the students who are professionally aware, strongly creative and possess an ability to undertake managerial responsibilities in Design, Production and Selection.</p>
      <p>The course emphasis on Production, Costing, Marketing and Presentation of Garments besides Fashion Designing. The student specializes in the study of various international garment markets (Design Wise) viz. UK, France, USA etc., and also domestic market i.e Training in Computer Aided Design (CAD).</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p className="font-bold mb-4">Comprises of Two Semesters. Major Modules are as follows:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Basic Design & Design Idea</li>
        <li>Sketching and Illustration & Embroidery</li>
        <li>Drafting & Pattern making & Garment Construction</li>
        <li>Textile Science & Fashion CAD & Range Development</li>
        <li>Kids Wear - Skirt, Top, Frock</li>
        <li>Women's wear - Salwar, Kurta, Skirt, Top, One-Piece(Semi Fitted)</li>
        <li>Makeup & Styling Workshop</li>
        <li>Industrial Visit, Workshops, Day Celebrations, Accessories Making, Foundation</li>
        <li>Compulsory Internship & Fashion shows</li>
      </ul>
    ` }} />
      }
    />
  );
}
