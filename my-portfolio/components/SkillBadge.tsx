
import React from 'react';
import { Skill } from '../types';

interface SkillBadgeProps {
  skill: Skill;
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ skill }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
      {skill.icon && (
        <div className="mb-4 text-sky-500 text-4xl">
          {/* Cast skill.icon to React.ReactElement with known props type including className */}
          {React.cloneElement(skill.icon as React.ReactElement<{ className?: string }>, { className: "w-12 h-12 sm:w-14 sm:h-14" })}
        </div>
      )}
      <h3 className="text-lg font-semibold text-slate-700 mb-1 text-center">{skill.name}</h3>
      {skill.level && (
         <span className="text-xs font-medium bg-sky-100 text-sky-700 px-2 py-0.5 rounded-full">{skill.level}</span>
      )}
    </div>
  );
};

export default SkillBadge;
