import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "M.DES IN FASHION DESIGN | IIFT",
  description: "Learn about the M.DES IN FASHION DESIGN program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="M.DES IN FASHION DESIGN"
      category="Fashion Design"
      duration="2 Years"
      eligibility="Bachelor’s degree in Fashion Design, Fine Arts, Architecture, or related fields with a minimum of 50–55% marks."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Master of Design (M.Des) in Fashion Design is a two-year postgraduate program that combines creative innovation with advanced technical and managerial skills. It is tailored for individuals aiming to lead and innovate in the fashion industry, emphasizing sustainability, digital design, and entrepreneurship.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Advanced Fashion Illustration</li>
        <li>Textile Science and Testing</li>
        <li>Pattern Making and Garment Construction</li>
        <li>Digital Designing in Fashion</li>
        <li>Fashion Communication</li>
        <li>Fashion Marketing and Merchandising</li>
        <li>Sustainable Fashion Practices</li>
        <li>Accessory Designing</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Creative Director</li>
        <li>Fashion Designer</li>
        <li>Trend Forecaster</li>
        <li>Textile Designer</li>
        <li>Fashion Consultant</li>
      </ul>
    ` }} />
      }
    />
  );
}
