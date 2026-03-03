import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const courses = [
    {
        path: '/6-month-fashion-design',
        title: '6 Month Certificate in Fashion Design',
        category: 'Fashion Design',
        duration: '6 Months',
        semester: '1',
        eligibility: 'Any one with a passion to learn can apply',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>The course is apt for the students who are professionally aware, strongly creative and possess an ability to undertake managerial responsibilities in Design, Production and Selection.</p>
    `,
        structure: `
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
    `
    },
    {
        path: '/fashion-illustration',
        title: 'Fashion Illustration (3 & 6 Months)',
        category: 'Fashion Design',
        duration: '3 Months & 6 Months',
        eligibility: 'Anyone who is hungry for creativity',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>Fashion illustrators—create drawings and images of apparel, accessories etc. This course will help students to develop their individual creative abilities. They will learn the different techniques to represent the human figure and clothing for men, women & kids, developing their own personal drawing styles.</p>
      <p>Students will learn drawing garments with graphic effects for volume and fabric consistencies. You will learn various color, shading techniques of representing the human figure in illustrating for men and women.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Study of the human and Kids figure.</li>
        <li>Definition of human figure in fashion Illustration</li>
        <li>Sketching clothing using various effects to convey the fabric volume and texture.</li>
        <li>Different texture sketching</li>
        <li>Learning different color medium usage on illustration.</li>
        <li>Different type of Pencil Shading.</li>
        <li>2D and 3D Sketches.</li>
      </ul>
    `
    },
    {
        path: '/diploma-in-fashion-designing',
        title: 'Diploma Certificate (1 Year)',
        category: 'Fashion Design',
        duration: '12 Months',
        semester: '2',
        eligibility: 'Candidates should have passed Class X from any recognized board.',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>One year course comprises of foundation course. A logical, sequential, hands-on experience enables students to conceptualize designs, make patterns and construct garments of impeccable quality.</p>
      <p>The course covers technical aspects of garment design and offers link with the surrounding fashion industry. The course is apt for the students who are professionally aware, strongly creative and possess an ability to undertake managerial responsibilities in Design, Production and Selection.</p>
      <p>The course emphasis on Production, Costing, Marketing and Presentation of Garments besides Fashion Designing. The student specializes in the study of various international garment markets (Design Wise) viz. UK, France, USA etc., and also domestic market i.e Training in Computer Aided Design (CAD).</p>
    `,
        structure: `
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
    `
    },
    {
        path: '/advance-diploma-in-fashion-designing',
        title: 'Advanced Diploma Certificate (2 Years)',
        category: 'Fashion Design',
        duration: '24 Months',
        semester: '4',
        eligibility: 'Candidates should have passed Class XII from any recognized board.',
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>Advanced Diploma Certificate course provides an overview and orientation of the fashion industry. It provides an enhanced environment for thinking, learning and gestation.</p>
      <p>The program is designed to ensure a fundamental and common approach for the fashion industry in consonance with the emerging challenges and needs of the industry. The certificate course in fashion designing prepares professionals for global management in the field of fashion, integrating with product management.</p>
      <p>It develops stronghold on management techniques for design organizations, creation processes, production, and distribution strategies and trends research. The program is also an amalgamation of individual creativity and understanding of the fashion market.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Basic Design & Design Idea</li>
        <li>Sketching and Illustration & Embroidery</li>
        <li>Drafting & Pattern making</li>
        <li>Garment Construction: Princess line kurta & churidar, Anarkali & Dogri, Shirt & trouser, Dart manipulated skirt & top, kaftan, shrugs Waist Coats, Blouse & petticoat, One-piece Dresses, [ fitted & semi fitted]</li>
        <li>Textile Science & History of Fashion</li>
        <li>Fashion CAD & Range Development</li>
        <li>Workshops- Accessories making, Day Celebrations</li>
        <li>Guest faculty Lectures, Industrial Visit, Designer PPT</li>
        <li>Fashion Merchandising + Portfolios Draping- Dart Manipulation, Tops, Cowl tops, Twisted tunics</li>
        <li>Designer Studio Visit, Compulsory Internship, Fashion shows Mentorship</li>
      </ul>
    `
    },
    {
        path: '/pg-diploma-in-fashion-design',
        title: 'P.G DIPLOMA IN FASHION DESIGN',
        category: 'Fashion Design',
        duration: '1 Year',
        semester: '2',
        eligibility: "Bachelor's degree in any stream.",
        seats: '15',
        location: 'Hyderabad',
        intro: `
      <p>A Post Graduate (P.G.) Diploma in Fashion Design is a specialized course tailored for graduates who want to build expertise in fashion, even if their undergraduate degree isn't in design.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Design Process</li>
        <li>Advanced Garment Construction</li>
        <li>Surface Ornamentation</li>
        <li>Fashion Forecasting & Trend Analysis</li>
        <li>Fashion Communication</li>
        <li>Retail & Brand Management</li>
        <li>Fashion Portfolio Development</li>
        <li>Internship / Industry Project</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Designer</li>
        <li>Brand Manager</li>
        <li>Fashion Buyer</li>
        <li>Fashion Consultant</li>
        <li>Product Developer</li>
        <li>Trend Analyst</li>
      </ul>
    `
    },
    {
        path: '/bsc-in-fashion-design',
        title: 'B.SC IN FASHION DESIGN',
        category: 'Fashion Design',
        duration: '3 Years',
        semester: '6',
        eligibility: 'Completion of 10+2 (any stream) with a minimum of 50% aggregate marks from a recognized board.',
        intro: `
      <p>A Bachelor of Science (B.Sc.) in Fashion Design is a 3-year undergraduate program that combines creativity with technical skills to prepare students for various roles in the fashion industry. This course covers aspects like garment construction, textile science, fashion illustration, and marketing strategies, providing a comprehensive understanding of the fashion world.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Illustration & Textile Science</li>
        <li>Pattern Making and Garment Construction</li>
        <li>Fashion Marketing and Merchandising</li>
        <li>Computer-Aided Design (CAD)</li>
        <li>Styling & History of Fashion</li>
        <li>Design Basic & Surface Ornamentation</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Designer & Textile Designer</li>
        <li>Fashion Illustrator & Fashion Merchandiser</li>
        <li>Apparel Production Manager</li>
        <li>Fashion Marketing Manager & Fashion Journalist</li>
        <li>Entrepreneur in Fashion Industry</li>
      </ul>
    `
    },
    {
        path: '/mba-in-fashion-design',
        title: 'MBA in Fashion Design',
        category: 'Fashion Design',
        duration: '2 Years',
        semester: '4',
        eligibility: 'Bachelor’s degree in any discipline with a minimum of 50% marks.',
        intro: `
      <p>An MBA in Fashion Design is a specialized two-year postgraduate program that merges creative design principles with core business and management strategies. This course is tailored for individuals aiming to lead in the fashion industry by understanding both the artistic and commercial aspects of fashion.</p>
      <p><strong>Mode:</strong> Full-time</p>
      <p><strong>Focus Areas:</strong> Fashion design, marketing, merchandising, retail management, and entrepreneurship.</p>
    `,
        structure: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Design Principles</li>
        <li>Marketing Management</li>
        <li>Retail and Merchandising</li>
        <li>Consumer Behavior</li>
        <li>Brand Management</li>
        <li>Entrepreneurship</li>
        <li>Digital Marketing</li>
        <li>Sustainability in Fashion</li>
      </ul>
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Fashion Brand Manager</li>
        <li>Retail Buyer</li>
        <li>Merchandising Manager</li>
        <li>Fashion Marketing Specialist</li>
        <li>Product Development Manager</li>
        <li>Entrepreneur in Fashion Industry</li>
        <li>Visual Merchandiser</li>
      </ul>
    `
    },
    {
        path: '/msc-in-fashion-design',
        title: 'M.SC IN FASHION DESIGN',
        category: 'Fashion Design',
        duration: '2 Years',
        semester: '4',
        eligibility: 'Bachelor’s degree in Fashion Design or any other related fields.',
        intro: `
      <p>A Master of Science (M.Sc.) in Fashion Design is a two-year postgraduate program that blends creativity with technical and managerial skills, preparing students for advanced roles in the fashion industry.</p>
    `,
        structure: `
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
    `,
        careerOptions: `
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
    `
    },
    {
        path: '/mdes-in-fashion-design',
        title: 'M.DES IN FASHION DESIGN',
        category: 'Fashion Design',
        duration: '2 Years',
        semester: '4',
        eligibility: 'Bachelor’s degree in Fashion Design, Fine Arts, Architecture, or related fields with a minimum of 50–55% marks.',
        intro: `
      <p>A Master of Design (M.Des) in Fashion Design is a two-year postgraduate program that combines creative innovation with advanced technical and managerial skills. It is tailored for individuals aiming to lead and innovate in the fashion industry, emphasizing sustainability, digital design, and entrepreneurship.</p>
    `,
        structure: `
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
    `,
        careerOptions: `
      <ul className="list-disc pl-5 space-y-2">
        <li>Creative Director</li>
        <li>Fashion Designer</li>
        <li>Trend Forecaster</li>
        <li>Textile Designer</li>
        <li>Fashion Consultant</li>
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
