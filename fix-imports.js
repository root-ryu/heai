const fs = require('fs');
const path = require('path');

function fixImportsInFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;

    // Remove version numbers from imports
    content = content.replace(/@radix-ui\/([^@"']+)@[\d.]+/g, '@radix-ui/$1');
    content = content.replace(/lucide-react@[\d.]+/g, 'lucide-react');
    content = content.replace(
      /class-variance-authority@[\d.]+/g,
      'class-variance-authority'
    );
    content = content.replace(/cmdk@[\d.]+/g, 'cmdk');
    content = content.replace(/react-day-picker@[\d.]+/g, 'react-day-picker');
    content = content.replace(/recharts@[\d.]+/g, 'recharts');
    content = content.replace(/sonner@[\d.]+/g, 'sonner');
    content = content.replace(
      /react-resizable-panels@[\d.]+/g,
      'react-resizable-panels'
    );
    content = content.replace(/input-otp@[\d.]+/g, 'input-otp');
    content = content.replace(
      /embla-carousel-react@[\d.]+/g,
      'embla-carousel-react'
    );
    content = content.replace(/vaul@[\d.]+/g, 'vaul');
    content = content.replace(/react-hook-form@[\d.]+/g, 'react-hook-form');
    content = content.replace(/next-themes@[\d.]+/g, 'next-themes');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      walkDir(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      fixImportsInFile(filePath);
    }
  }
}

walkDir(path.join(__dirname, 'app', 'src', 'components', 'ui'));
console.log('Done!');
