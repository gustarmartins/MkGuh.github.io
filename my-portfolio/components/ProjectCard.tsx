
import React from 'react';
import { Project } from '../types';
import { GitHubIcon, ExternalLinkIcon, CodeBracketIcon } from '../constants';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-all duration-300 ease-in-out hover:shadow-2xl transform hover:-translate-y-1 h-full">
      <img 
        src={project.imageUrl || `https://picsum.photos/seed/${project.id}/400/250`} 
        alt={project.title} 
        className="w-full h-52 object-cover" 
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-semibold text-slate-800 mb-2">{project.title}</h3>
        <p className="text-slate-600 text-sm mb-4 flex-grow">{project.description}</p>
        
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-500 mb-2 flex items-center">
            <CodeBracketIcon className="w-5 h-5 mr-2 text-sky-500" />
            Technologies Used:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="text-xs bg-sky-100 text-sky-700 px-2 py-1 rounded-full font-medium">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-4 border-t border-slate-200 flex justify-start space-x-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-colors duration-300"
              aria-label={`GitHub repository for ${project.title}`}
            >
              <GitHubIcon className="w-5 h-5 mr-2" />
              View Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sky-600 hover:text-sky-700 font-medium transition-colors duration-300"
              aria-label={`Live demo of ${project.title}`}
            >
              <ExternalLinkIcon className="w-5 h-5 mr-2" />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
