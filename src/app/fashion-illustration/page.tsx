import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "Fashion Illustration (3 & 6 Months) | IIFT",
  description: "Learn about the Fashion Illustration (3 & 6 Months) program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="Fashion Illustration (3 & 6 Months)"
      category="Fashion Design"
      duration="3 Months & 6 Months"
      eligibility="Anyone who is hungry for creativity"
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>Fashion illustrators—create drawings and images of apparel, accessories etc. This course will help students to develop their individual creative abilities. They will learn the different techniques to represent the human figure and clothing for men, women & kids, developing their own personal drawing styles.</p>
      <p>Students will learn drawing garments with graphic effects for volume and fabric consistencies. You will learn various color, shading techniques of representing the human figure in illustrating for men and women.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Study of the human and Kids figure.</li>
        <li>Definition of human figure in fashion Illustration</li>
        <li>Sketching clothing using various effects to convey the fabric volume and texture.</li>
        <li>Different texture sketching</li>
        <li>Learning different color medium usage on illustration.</li>
        <li>Different type of Pencil Shading.</li>
        <li>2D and 3D Sketches.</li>
      </ul>
    ` }} />
      }
    />
  );
}
