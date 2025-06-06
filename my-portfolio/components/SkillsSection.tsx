
import React from 'react';
import { Skill } from '../types';
import SkillBadge from './SkillBadge';
import SectionWrapper from './SectionWrapper';

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
    <SectionWrapper id="skills" title="Core Competencies" className="bg-slate-100">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8">
        {skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>
      <p className="text-center text-slate-600 mt-12 text-lg">
        Continuously learning and adapting to new technologies in the Android ecosystem.
      </p>
    </SectionWrapper>
  );
};

export default SkillsSection;
