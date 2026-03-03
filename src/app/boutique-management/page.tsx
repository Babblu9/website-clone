import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "Boutique Management | IIFT",
  description: "Learn about the Boutique Management program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="Boutique Management"
      category="Boutique Management"
      duration="3 Months & 6 Months"
      eligibility="10th/12th Pass or anyone interested in starting a boutique."
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>Certification courses in Boutique Management are specifically designed for individuals looking to start, manage, or grow their own fashion retail business. These short-term courses focus on the practical, creative, and business skills required to run a successful boutique.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Introduction to the Fashion Retail Industry</li>
        <li>Basic Fashion Design and Garment Construction (Understanding quality & fit)</li>
        <li>Store Setup and Visual Merchandising</li>
        <li>Inventory Management and Sourcing (Fabrics, Garments, Accessories)</li>
        <li>Financial Basics (Costing, Pricing, Budgeting)</li>
        <li>Customer Relationship Management (CRM) and Sales Techniques</li>
        <li>Marketing and Social Media Promotion for Boutiques</li>
        <li>Legal Basics for Small Businesses</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Boutique Owner/Entrepreneur</li>
        <li>Boutique Manager</li>
        <li>Retail Operations Coordinator</li>
        <li>Visual Merchandiser for Small Retailers</li>
        <li>Fashion Sourcing Agent</li>
      </ul>
    ` }} />
      }
    />
  );
}
