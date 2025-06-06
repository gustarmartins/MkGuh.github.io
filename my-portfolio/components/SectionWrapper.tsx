
import React from 'react';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ id, children, className, title }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className || ''}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-12 text-center">
            {title}
            <span className="block w-20 h-1 bg-sky-500 mx-auto mt-2"></span>
          </h2>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
