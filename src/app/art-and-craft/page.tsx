import React from "react";
import CourseTemplate from "@/components/sections/course-template";

export const metadata = {
  title: "Art and Craft | IIFT",
  description: "Learn about the Art and Craft program at IIFT.",
};

export default function CoursePage() {
  return (
    <CourseTemplate
      title="Art and Craft"
      category="Art & Craft"
      duration="3 Months, 6 Months, & 1 Year"
      eligibility="Open to all"
      seats=""
      location=""
      intro={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p>Certification courses in Art and Craft are designed to nurture creativity and provide hands-on training in various traditional and contemporary artistic techniques. These programs range from short-term introductory courses to comprehensive one-year diplomas, catering to hobbyists, aspiring artists, and future educators.</p>
    ` }} />
      }
      structure={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <p className="font-bold mb-4">Core Subjects (scaling based on duration):</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Fundamentals of Drawing and Sketching</li>
        <li>Color Theory and Painting Mediums (Water, Acrylic, Oil)</li>
        <li>Paper Crafts (Origami, Quilling, Papier-Mâché)</li>
        <li>Traditional Indian Arts (Warli, Madhubani, Gond, etc.)</li>
        <li>Sculpture and Clay Modeling</li>
        <li>Textile Arts (Tie-Dye, Block Printing, Embroidery)</li>
        <li>Recycled and Eco-Friendly Art</li>
        <li>Portfolio Development and Exhibition Preparation (1-Year course)</li>
      </ul>
    ` }} />
      }
      careerOptions={
        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Freelance Artist/Crafter</li>
        <li>Art Teacher/Instructor</li>
        <li>Craft Product Designer</li>
        <li>Art Event Coordinator</li>
        <li>Custom Art Creator (Etsy, exhibitions)</li>
      </ul>
    ` }} />
      }
    />
  );
}
