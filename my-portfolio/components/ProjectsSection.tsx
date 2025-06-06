
import React from 'react';
import { Project } from '../types';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
    <SectionWrapper id="projects" title="My Projects" className="bg-slate-50">
      {projects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p className="text-center text-slate-600 text-lg">More projects coming soon!</p>
      )}
    </SectionWrapper>
  );
};

export default ProjectsSection;
