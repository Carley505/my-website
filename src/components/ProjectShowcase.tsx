'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';

export const ProjectShowcase: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: projectsData.length },
    {
      id: 'automation-ai',
      label: 'Automation & AI',
      count: projectsData.filter((p) => p.category === 'automation-ai').length,
    },
    {
      id: 'data',
      label: 'Data Analytics',
      count: projectsData.filter((p) => p.category === 'data').length,
    },
    {
      id: 'fullstack',
      label: 'Full-Stack Web',
      count: projectsData.filter((p) => p.category === 'fullstack').length,
    },
    {
      id: 'design',
      label: 'Design & UI/UX',
      count: projectsData.filter((p) => p.category === 'design').length,
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
              <span>// FEATURED WORK & PORTFOLIO</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text">
              Engineered Solutions & <span className="text-brand-teal">Deployed Projects</span>
            </h2>
          </div>
          <p className="text-brand-muted text-sm max-w-md mt-4 md:mt-0">
            Select a category tab to filter between enterprise automation pipelines, data processing engines, live web applications, and Behance design work.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-brand-border/60">
          {filterTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`relative px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
                  isActive
                    ? 'text-brand-bg font-semibold shadow-lg'
                    : 'text-brand-muted hover:text-brand-text hover:bg-brand-surface'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 bg-brand-teal rounded-xl"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
                <span
                  className={`relative z-10 text-[10px] font-mono px-2 py-0.5 rounded-full ${
                    isActive ? 'bg-brand-bg/20 text-brand-bg' : 'bg-brand-bg text-brand-muted'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Filterable Project Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
