import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "M.SC IN FASHION DESIGN | IIFT",
  description: "Learn about the M.SC IN FASHION DESIGN program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="M.SC IN FASHION DESIGN"
      category="Fashion Design"
      duration="2 Years"
      eligibility="Bachelor’s degree in Fashion Design or any other related fields."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Master of Science (M.Sc.) in Fashion Design is a two-year postgraduate program that blends creativity with technical and managerial skills, preparing students for advanced roles in the fashion industry.</p>
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
        <li>Fashion Designer</li>
        <li>Textile Designer</li>
        <li>Fashion Illustrator</li>
        <li>Fashion Merchandiser</li>
        <li>Apparel Production Manager</li>
        <li>Fashion Marketing Manager</li>
        <li>Fashion Journalist</li>
        <li>Entrepreneur in Fashion Industry</li>
      </ul>
    ` }} />
      }
    />
  );
}
