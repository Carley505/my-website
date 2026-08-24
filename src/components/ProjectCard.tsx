'use client';

import React from 'react';
import { Project } from '@/types';
import { ExternalLink, Github, Sparkles, AlertTriangle, Layers } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="h-full rounded-2xl bg-brand-surface border border-brand-border p-6 flex flex-col justify-between hover:border-brand-teal/50 hover:shadow-2xl transition-all duration-300 group">
      <div>
        {/* Header Badges & Category */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="text-[11px] font-mono uppercase tracking-wider text-brand-teal px-2.5 py-1 rounded bg-brand-teal/10 border border-brand-teal/20">
            {project.category === 'automation-ai'
              ? 'Automation & AI'
              : project.category === 'data'
              ? 'Data Analytics'
              : project.category === 'fullstack'
              ? 'Full-Stack Web'
              : 'UI/UX Design'}
          </span>

          {project.badge && (
            <span
              className={`text-[10px] font-mono px-2.5 py-0.5 rounded-full border ${
                project.isConcept
                  ? 'bg-amber-500/10 text-amber-400 border-amber-500/30'
                  : 'bg-brand-violet/10 text-brand-violet border-brand-violet/30'
              }`}
            >
              {project.badge}
            </span>
          )}
        </div>

        {/* Concept Warning Notice */}
        {project.isConcept && (
          <div className="mb-3 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center gap-2 text-xs font-mono text-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 flex-shrink-0 text-amber-400" />
            <span>Concept / UI Demo Prototype</span>
          </div>
        )}

        {/* Title & Subtitle */}
        <h3 className="text-xl font-heading font-bold text-brand-text group-hover:text-brand-teal transition-colors mb-1">
          {project.title}
        </h3>

        {project.subtitle && (
          <p className="text-xs font-mono text-brand-teal/80 mb-3">{project.subtitle}</p>
        )}

        {/* Description */}
        <p className="text-xs sm:text-sm text-brand-muted leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Tech Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-1 rounded bg-brand-bg border border-brand-border/60 text-brand-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Link Buttons */}
      <div className="pt-4 border-t border-brand-border/60 flex flex-wrap items-center gap-3">
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-teal text-brand-bg text-xs font-semibold hover:bg-brand-teal/90 transition-all shadow-md"
          >
            <span>Live Site</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}

        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-bg border border-brand-border text-brand-text text-xs font-medium hover:border-brand-teal hover:text-brand-teal transition-all"
          >
            <Github className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
        )}

        {project.behanceUrl && (
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-brand-violet/20 border border-brand-violet/40 text-brand-violet text-xs font-medium hover:bg-brand-violet hover:text-white transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Behance</span>
          </a>
        )}

        {!project.liveUrl && project.githubUrl && !project.behanceUrl && (
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-[11px] font-mono text-brand-muted bg-brand-bg/60">
            <Sparkles className="w-3 h-3 text-brand-teal" /> Code Repo Available
          </span>
        )}
      </div>
    </div>
  );
};
