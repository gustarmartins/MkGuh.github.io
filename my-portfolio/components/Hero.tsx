
import React from 'react';

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
}

const Hero: React.FC<HeroProps> = ({ name, title, subtitle }) => {
  return (
    <div className="relative min-h-screen flex items-center justify-center text-center bg-gradient-to-br from-sky-600 to-indigo-700 text-white px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 animate-fade-in-up">
        <div className="mb-8">
          <img 
            src="https://picsum.photos/seed/devportfolio/200/200" 
            alt={name}
            className="w-40 h-40 sm:w-48 sm:h-48 rounded-full mx-auto border-4 border-sky-400 shadow-xl" 
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
          Hi, I'm <span className="text-sky-300">{name}</span>
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-light mb-6">{title}</p>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto mb-10 text-sky-100">{subtitle}</p>
        <div className="space-x-4">
          <a
            href="#projects"
            className="bg-sky-400 hover:bg-sky-300 text-slate-900 font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-sky-400 text-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg border-2 border-sky-400 hover:border-sky-400 shadow-md transition duration-300 ease-in-out transform hover:scale-105 text-lg"
          >
            Get In Touch
          </a>
        </div>
      </div>
       {/* Optional: Animated background shapes or particles could go here */}
    </div>
  );
};

export default Hero;
