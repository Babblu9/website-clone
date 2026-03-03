import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const targetDir = path.join(__dirname, 'src');

const replaceInFile = (filePath) => {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;

    // Replace full name first to avoid partial replacements
    content = content.replace(/Indian Institute of Fashion & Design/gi, 'Indian Institute of Fashion Technology & Design');

    // Replace acronyms
    content = content.replace(/\bIIFD\b/g, 'IIFT');
    content = content.replace(/\biifd\b/g, 'iift');

    if (content !== originalContent) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`Updated: ${filePath}`);
    }
};

const walkSync = (dir) => {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            walkSync(filePath);
        } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css')) {
            replaceInFile(filePath);
        }
    }
};

walkSync(targetDir);
console.log('Global replacement completed.');
