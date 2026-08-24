export type ProjectCategory = 'all' | 'automation-ai' | 'data' | 'fullstack' | 'design';

export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  category: 'automation-ai' | 'data' | 'fullstack' | 'design';
  techStack: string[];
  featured?: boolean;
  liveUrl?: string;
  githubUrl?: string;
  behanceUrl?: string;
  badge?: string;
  isConcept?: boolean;
}

export interface SkillCategory {
  title: string;
  description: string;
  iconName: string;
  skills: string[];
  accentColor: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}
