import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "6 Month Certificate in Fashion Design | IIFT",
  description: "Learn about the 6 Month Certificate in Fashion Design program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="6 Month Certificate in Fashion Design"
      category="Fashion Design"
      duration="6 Months"
      eligibility="Any one with a passion to learn can apply"
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>The course is apt for the students who are professionally aware, strongly creative and possess an ability to undertake managerial responsibilities in Design, Production and Selection.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Basic Design</li>
        <li>Design Idea</li>
        <li>Sketching and Illustration</li>
        <li>Embroidery</li>
        <li>Drafting & Pattern making</li>
        <li>Workshops - Accessories making</li>
        <li>Guest faculty Lectures</li>
        <li>Sketching</li>
        <li>Elements of Design</li>
        <li>Fabric Science</li>
        <li>Garment Construction</li>
      </ul>
    ` }} />
      }
    />
  );
}
