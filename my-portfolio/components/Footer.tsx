
import React from 'react';

interface FooterProps {
  developerName: string;
}

const Footer: React.FC<FooterProps> = ({ developerName }) => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-slate-300 py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm">
          &copy; {currentYear} {developerName}. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with React, TypeScript, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
