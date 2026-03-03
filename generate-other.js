import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courses = [
    // TEXTILE DESIGN
    {
        path: '/6-month-textile-design',
        title: '6 Months course in Textile Design',
        category: 'Textile Design',
        duration: '6 Months',
        semester: '1',
        eligibility: '10th/12th pass',
        seats: '20',
        location: 'Hyderabad',
        intro: `
      <p>A 6-month certificate course in Textile Design provides a swift yet comprehensive introduction to the world of textiles.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Introduction to Textiles (Fibers, Yarns, Fabrics)</li>
        <li>Color Theory and Application</li>
        <li>Basic Printing and Dyeing Techniques</li>
        <li>Surface Ornamentation (Embroidery, Appliqué)</li>
        <li>Digital Design Basics (Introduction to CAD for textiles)</li>
        <li>Fabric Science and Testing</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Junior Textile Designer</li>
        <li>Fabric Sourcing Assistant</li>
        <li>Quality Control Assistant</li>
        <li>Freelance Textile Artist</li>
      </ul>
    `
    },
    {
        path: '/bsc-in-textile-design',
        title: 'B.Sc. Textiles Design',
        category: 'Textile Design',
        duration: '3 Years',
        semester: '6',
        eligibility: '10+2 from a recognized board.',
        seats: '20',
        location: 'Hyderabad',
        intro: `
      <p>A B.Sc. in Textile Design is a detailed three-year undergraduate program that bridges the gap between artistic creativity and the scientific/technical aspects of textile production.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Textile Science (In-depth study of physical and chemical properties)</li>
        <li>Woven and Knitted Fabric Design</li>
        <li>Advanced Printing and Dyeing Techniques</li>
        <li>Textile Testing and Quality Assurance</li>
        <li>History of Indian and Global Textiles</li>
        <li>Computer-Aided Textile Design (Advanced CAD)</li>
        <li>Textile Marketing and Merchandising</li>
        <li>Sustainable Textile Production</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Textile Designer (Apparel/Home Furnishing)</li>
        <li>Textile Technologist</li>
        <li>Fabric Developer/Sourcing Manager</li>
        <li>Textile Merchandiser</li>
        <li>Quality Assurance Manager</li>
        <li>Sustainable Textile Consultant</li>
      </ul>
    `
    },
    // LUXURY BRAND MANAGEMENT
    {
        path: '/diploma-luxury-brand-management',
        title: 'Diploma in Fashion Luxury Brand Management',
        category: 'Luxury Brand Management',
        duration: '1 Year',
        semester: '2',
        eligibility: '10+2 or equivalent',
        seats: '25',
        location: 'Hyderabad',
        intro: `
      <p>A Diploma in Fashion Luxury Brand Management equips students with the specialized skills needed to navigate and succeed in the high-end fashion and luxury goods sector. It blends fashion appreciation with strategic business management, marketing, and retail operations tailored to the luxury market.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Introduction to the Luxury Sector (History & Evolution)</li>
        <li>Luxury Consumer Behavior and Psychology</li>
        <li>Brand Identity and Equity in Luxury</li>
        <li>Luxury Retail Management and Operations</li>
        <li>Strategic Marketing for Luxury Brands</li>
        <li>Visual Merchandising and Store Design</li>
        <li>Digital Marketing and E-commerce for Luxury</li>
        <li>PR, Events, and Luxury Communication</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Luxury Brand Manager</li>
        <li>Luxury Retail Manager/Boutique Manager</li>
        <li>Visual Merchandiser for Luxury Brands</li>
        <li>Luxury PR & Communications Specialist</li>
        <li>Luxury Fashion Buyer</li>
        <li>Client Relationship Manager (CRM) in Luxury</li>
      </ul>
    `
    },
    // ART & CRAFT
    {
        path: '/art-and-craft',
        title: 'Art and Craft',
        category: 'Art & Craft',
        duration: '3 Months, 6 Months, & 1 Year',
        eligibility: 'Open to all',
        intro: `
      <p>Certification courses in Art and Craft are designed to nurture creativity and provide hands-on training in various traditional and contemporary artistic techniques. These programs range from short-term introductory courses to comprehensive one-year diplomas, catering to hobbyists, aspiring artists, and future educators.</p>
    `,
        structure: `
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
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Freelance Artist/Crafter</li>
        <li>Art Teacher/Instructor</li>
        <li>Craft Product Designer</li>
        <li>Art Event Coordinator</li>
        <li>Custom Art Creator (Etsy, exhibitions)</li>
      </ul>
    `
    },
    // BOUTIQUE MANAGEMENT
    {
        path: '/boutique-management',
        title: 'Boutique Management',
        category: 'Boutique Management',
        duration: '3 Months & 6 Months',
        eligibility: '10th/12th Pass or anyone interested in starting a boutique.',
        intro: `
      <p>Certification courses in Boutique Management are specifically designed for individuals looking to start, manage, or grow their own fashion retail business. These short-term courses focus on the practical, creative, and business skills required to run a successful boutique.</p>
    `,
        structure: `
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
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Boutique Owner/Entrepreneur</li>
        <li>Boutique Manager</li>
        <li>Retail Operations Coordinator</li>
        <li>Visual Merchandiser for Small Retailers</li>
        <li>Fashion Sourcing Agent</li>
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
