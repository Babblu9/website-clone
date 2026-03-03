import fs from 'fs';
import path from 'path';

// List of missing pages based on the header.tsx links
const missingRoutes = [
    '/affiliations-and-memberships',
    '/director-message',
    '/student-review',
    '/diploma',
    '/advanced-diploma',
    '/masters-diploma',
    '/ug-degree',
    '/pg-degree',
    '/specialized-programs',
    '/online-application',
    '/for-parents',
    '/fee-payment',
    '/student-work',
    '/blogs',
    '/life-at-iifd',
    '/hostel',
    '/celebrity-visits',
    '/news-and-events',
    // Note: /faq already has an imported component, but we will make sure the page exists
    '/faq',
    // Some routes from nested menus that did not have explicit page.tsx in the diff
    '/advance-diploma-in-fashion-designing',
    '/advance-diploma-in-interior-designing',
    '/advance-diploma-in-textile-designing',
    '/advance-diploma-in-fashion-communication'
];

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const basePath = path.join(__dirname, 'src', 'app');
missingRoutes.forEach((route) => {
    const dirPath = path.join(basePath, route);

    // Format the title from the route path: '/advanced-diploma' -> 'Advanced Diploma'
    const title = route
        .replace('/', '')
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    const pageContent = `import React from 'react';

export const metadata = {
  title: '${title} | IIFD - Indian Institute of Fashion & Design',
  description: '${title} at IIFD - Best Fashion Designing College in India',
};

export default function ${title.replace(/\s+/g, '')}Page() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 text-center mt-[100px]">
      <h1 className="text-4xl font-display font-bold text-[#E1211A] uppercase mb-4 tracking-wider">
        ${title}
      </h1>
      <p className="font-body text-[#54595F] max-w-2xl mx-auto text-[18px]">
        This page is currently under construction. Please check back later for updates on the ${title} program and details.
      </p>
    </div>
  );
}
`;

    // Create directory if it doesn't exist
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
    }

    // Create page.tsx
    const filePath = path.join(dirPath, 'page.tsx');
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, pageContent);
        console.log(`Created: src/app${route}/page.tsx`);
    } else {
        console.log(`Skipped existing: src/app${route}/page.tsx`);
    }
});
