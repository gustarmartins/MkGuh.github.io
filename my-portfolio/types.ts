
import React from 'react';

export interface Skill {
  name: string;
  icon?: React.ReactNode;
  level?: 'Proficient' | 'Experienced' | 'Familiar';
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  repoUrl?: string;
  liveUrl?: string;
}

export interface NavItem {
  name: string;
  href: string;
}
