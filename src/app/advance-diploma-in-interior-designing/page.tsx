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
      category="Interior Design"
      duration="24 Months"
      eligibility="Candidates should have passed Class XII from any recognized board."
      seats="15"
      location="Hyderabad"
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>A Two-Year Advanced Diploma in Interior Design delves deeper into complex design theories, sustainable practices, commercial space planning, and advanced digital software. It prepares students for more technical and specialized roles in the industry.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Advanced Space Planning (Commercial, Retail, Hospitality)</li>
        <li>Building Services (HVAC, Plumbing, Acoustics)</li>
        <li>Lighting Design</li>
        <li>Advanced Software (3ds Max, Revit, V-Ray)</li>
        <li>Sustainable and Eco-Friendly Design Practices</li>
        <li>Estimating, Costing, and Professional Practice</li>
        <li>Project Management</li>
        <li>Major Design Project / Internship</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Interior Designer</li>
        <li>Retail/Commercial Space Designer</li>
        <li>Lighting Designer</li>
        <li>Exhibition/Set Designer</li>
        <li>Project Coordinator</li>
      </ul>
    ` }} />
      }
    />
  );
}
