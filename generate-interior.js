import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courses = [
    {
        path: '/6-month-interior-design',
        title: '6 Month Interior Design Certification',
        category: 'Interior Design',
        duration: '6 Months',
        semester: '1',
        eligibility: 'Any one with a passion to learn can apply',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>The course is suitable for the students who want to explore their creativity in interior spaces. The syllabus is designed focusing strongly on the foundations of interior design.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Drafting</li>
        <li>Elements of Design & Basic Principles</li>
        <li>Color Theory</li>
        <li>Furniture Design & Anthropometry</li>
        <li>Materials and Products</li>
        <li>Communication Skills</li>
      </ul>
    `
    },
    {
        path: '/diploma-in-interior-designing',
        title: 'Diploma Certificate (1 Year)',
        category: 'Interior Design',
        duration: '12 Months',
        semester: '2',
        eligibility: 'Candidates should have passed Class X from any recognized board.',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>A One-Year Diploma in Interior Design provides students with foundational knowledge in residential and commercial design. It’s perfect for those seeking to start a career quickly by learning essential skills in space planning, color theory, furniture design, and drafting.</p>
    `,
        structure: `
      <p className="font-bold mb-4">Comprises of Two Semesters. Major Modules are as follows:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Fundamentals (Elements & Principles of Design)</li>
        <li>Drafting and Technical Drawing</li>
        <li>Space Planning and Layouts</li>
        <li>Color Theory and Application</li>
        <li>Materials, Finishes, and Textiles</li>
        <li>Furniture Design and History</li>
        <li>Computer-Aided Design (AutoCAD/SketchUp)</li>
        <li>Residential Design Project</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Junior Interior Designer</li>
        <li>Draftsperson</li>
        <li>Space Planner</li>
        <li>Color Consultant</li>
        <li>Furniture Designer</li>
      </ul>
    `
    },
    {
        path: '/advance-diploma-in-interior-designing',
        title: 'Advanced Diploma Certificate (2 Years)',
        category: 'Interior Design',
        duration: '24 Months',
        semester: '4',
        eligibility: 'Candidates should have passed Class XII from any recognized board.',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>A Two-Year Advanced Diploma in Interior Design delves deeper into complex design theories, sustainable practices, commercial space planning, and advanced digital software. It prepares students for more technical and specialized roles in the industry.</p>
    `,
        structure: `
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
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Interior Designer</li>
        <li>Retail/Commercial Space Designer</li>
        <li>Lighting Designer</li>
        <li>Exhibition/Set Designer</li>
        <li>Project Coordinator</li>
      </ul>
    `
    },
    {
        path: '/pg-diploma-in-interior-design',
        title: 'P.G DIPLOMA IN INTERIOR DESIGN',
        category: 'Interior Design',
        duration: '2 Years',
        semester: '4',
        eligibility: "Bachelor's degree in any stream.",
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>A Post Graduate (P.G.) Diploma in Interior Design is an intensive specialization program for graduates aiming to enter or advance in the interior design industry. The program focuses on advanced design methodologies, real-world project management, and global design trends.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Research and Concept Development</li>
        <li>Advanced Commercial and Hospitality Design</li>
        <li>Building Information Modeling (BIM)</li>
        <li>Construction Management and Detailing</li>
        <li>Design Management and Entrepreneurship</li>
        <li>Environmental and Ergonomic Design</li>
        <li>Portfolio Development</li>
        <li>Industry Internship</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Senior Interior Designer</li>
        <li>Design Director</li>
        <li>Facility Manager</li>
        <li>Design Consultant</li>
        <li>Interior Design Entrepreneur</li>
      </ul>
    `
    },
    {
        path: '/bsc-in-interior-design',
        title: 'B.Sc in Interior Design',
        category: 'Interior Design',
        duration: '3 Years',
        semester: '6',
        eligibility: 'Completion of 10+2.',
        intro: `
      <p>A Bachelor of Science (B.Sc.) in Interior Design is a comprehensive three-year undergraduate program that combines the art and science of understanding people's behavior to create functional spaces within a building. The course focuses on residential, commercial, and institutional design.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fundamentals of Design and Drawing</li>
        <li>Materials and Construction Techniques</li>
        <li>Space Planning and Ergonomics</li>
        <li>Lighting and Acoustics</li>
        <li>Computer-Aided Design (AutoCAD, SketchUp, 3ds Max)</li>
        <li>History of Interior Design</li>
        <li>Building Services (Plumbing, Electrical, HVAC)</li>
        <li>Professional Practice and Estimation</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Interior Designer (Residential/Commercial)</li>
        <li>Furniture Designer</li>
        <li>Space Planner</li>
        <li>Exhibition Designer</li>
        <li>Lighting Consultant</li>
        <li>Set Designer</li>
      </ul>
    `
    },
    {
        path: '/msc-in-interior-design',
        title: 'M.Sc in Interior Design',
        category: 'Interior Design',
        duration: '2 Years',
        semester: '4',
        eligibility: 'Bachelor’s degree in Interior Design, Architecture, or related fields.',
        intro: `
      <p>A Master of Science (M.Sc.) in Interior Design is an advanced two-year postgraduate program that focuses on complex design theories, sustainable practices, research methodologies, and project management.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Advanced Space Planning and Ergonomics</li>
        <li>Sustainable and Green Design Practices</li>
        <li>Advanced Materials and Technologies</li>
        <li>Building Information Modeling (BIM) and 3D Visualization</li>
        <li>Interior Landscape Design</li>
        <li>Research Methodology in Design</li>
        <li>Project Management and Professional Practice</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Senior Interior Designer</li>
        <li>Design Consultant</li>
        <li>Sustainable Design Expert</li>
        <li>Interior Architecture Manager</li>
        <li>Academician/Lecturer</li>
      </ul>
    `
    },
    {
        path: '/mdes-in-interior-design',
        title: 'M.Des in Interior Design',
        category: 'Interior Design',
        duration: '2 Years',
        semester: '4',
        eligibility: 'Bachelor’s degree in Interior Design, Architecture, Fine Arts, or related fields.',
        intro: `
      <p>A Master of Design (M.Des) in Interior Design is a highly specialized postgraduate program emphasizing creative innovation, human-centric design, technology integration, and leadership in the design industry.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Design Thinking and Innovation</li>
        <li>Advanced Detailing and working drawings</li>
        <li>Human-Centric Design and Environmental Psychology</li>
        <li>Interactive and Smart Spaces</li>
        <li>Advanced Software Techniques (VR/AR in Design)</li>
        <li>Design Management and Entrepreneurship</li>
        <li>Research Project/Dissertation</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Creative Director</li>
        <li>Principal Interior Designer</li>
        <li>Design Strategist</li>
        <li>Experience Designer (Spatial Design)</li>
        <li>Design Entrepreneur</li>
      </ul>
    `
    }
];

const basePath = path.join(__dirname, 'src', 'app');

courses.forEach(course => {
    const dirPath = path.join(basePath, course.path);
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    const fileContent = 'import React from "react";\n' +
        'import CourseTemplate from "@/components/sections/course-template";\n\n' +
        'export const metadata = {\n' +
        '  title: "' + course.title + ' | IIFT",\n' +
        '  description: "Learn about the ' + course.title + ' program at IIFT.",\n' +
        '};\n\n' +
        'export default function CoursePage() {\n' +
        '  return (\n' +
        '    <CourseTemplate\n' +
        '      title="' + course.title + '"\n' +
        '      category="' + course.category + '"\n' +
        '      duration="' + (course.duration || '') + '"\n' +
        '      eligibility="' + (course.eligibility ? course.eligibility.replace(/"/g, '&quot;') : '') + '"\n' +
        '      seats="' + (course.seats || '') + '"\n' +
        '      location="' + (course.location || '') + '"\n' +
        '      intro={\n' +
        '        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `' + course.intro + '` }} />\n' +
        '      }\n' +
        '      structure={\n' +
        '        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `' + course.structure + '` }} />\n' +
        '      }\n' +
        (course.careerOptions ? '      careerOptions={\n' +
            '        <div className="space-y-4" dangerouslySetInnerHTML={{ __html: `' + course.careerOptions + '` }} />\n' +
            '      }\n' : '') +
        '    />\n' +
        '  );\n' +
        '}\n';

    fs.writeFileSync(path.join(dirPath, 'page.tsx'), fileContent);
    console.log("Generated " + course.path + "/page.tsx");
});
