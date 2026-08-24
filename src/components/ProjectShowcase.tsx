'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ArrowRight, Sparkles, Layers } from 'lucide-react';

interface ProjectShowcaseProps {
  limitMax5?: boolean;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ limitMax5 = true }) => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('top');

  const filterTabs: { id: ProjectCategory; label: string; count: number }[] = [
    {
      id: 'top',
      label: 'Top Projects',
      count: projectsData.filter((p) => p.isTopPick).length,
    },
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

  // Get items based on category
  let categoryProjects =
    activeCategory === 'top'
      ? projectsData.filter((p) => p.isTopPick)
      : activeCategory === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  // Apply maximum 5 limit on homepage showcase
  const displayedProjects = limitMax5 ? categoryProjects.slice(0, 5) : categoryProjects;

  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>// FEATURED WORK & PORTFOLIO</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-heading font-extrabold text-brand-text leading-tight">
              Top Highlighted <span className="text-brand-teal">Projects</span>
            </h2>
          </div>
          <p className="text-brand-muted text-xs sm:text-sm max-w-md mt-3 md:mt-0 leading-relaxed">
            Preview my top 5 featured automation systems, data engines, and web platforms. Explore the full catalog below.
          </p>
        </div>

        {/* Filter Navigation Tabs - Horizontal Scrollable on Mobile */}
        <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-8 sm:mb-10 pb-3 border-b border-brand-border/60">
          <div className="flex items-center gap-2 min-w-max">
            {filterTabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`relative px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all flex items-center gap-2 ${
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
        </div>

        {/* Filterable Project Grid (Max 5 items displayed) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <AnimatePresence mode="popLayout">
            {displayedProjects.map((project) => (
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

        {/* Bottom CTA to Open All Projects Page */}
        {limitMax5 && (
          <div className="mt-12 sm:mt-16 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-teal text-brand-text hover:text-brand-teal font-heading font-bold text-sm sm:text-base transition-all shadow-xl hover:shadow-brand-teal/10 group active:scale-[0.98]"
            >
              <Layers className="w-5 h-5 text-brand-teal group-hover:rotate-12 transition-transform" />
              <span>Explore All {projectsData.length} Projects</span>
              <ArrowRight className="w-4 h-4 text-brand-teal group-hover:translate-x-1.5 transition-transform" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};
