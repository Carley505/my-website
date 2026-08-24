'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projectsData } from '@/data/projects';
import { ProjectCategory } from '@/types';
import { ProjectCard } from '@/components/ProjectCard';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ArrowLeft, Search, Layers, Sparkles } from 'lucide-react';

export default function AllProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  // Filter by category and search query
  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      activeCategory === 'all'
        ? true
        : activeCategory === 'top'
        ? project.isTopPick
        : project.category === activeCategory;

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen flex flex-col bg-brand-bg text-brand-text">
      <Navbar />

      <div className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back to Home Link */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-teal transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </Link>
          </div>

          {/* Page Title & Search Bar */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-8 border-b border-brand-border/60">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
                <Layers className="w-3.5 h-3.5" />
                <span>// FULL CATALOG</span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-brand-text leading-tight">
                All Projects & <span className="text-brand-teal">Architectures</span>
              </h1>
              <p className="text-brand-muted text-xs sm:text-sm max-w-xl mt-2 leading-relaxed">
                Explore the complete inventory of 18 live client applications, enterprise n8n/Power Automate workflows, Excel Power Query engines, and Behance design systems.
              </p>
            </div>

            {/* Keyword Search Bar */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-brand-muted absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search tech, title, or stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-brand-surface border border-brand-border focus:border-brand-teal text-xs font-mono text-brand-text focus:outline-none transition-colors"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0 mb-10 pb-3 border-b border-brand-border/40">
            <div className="flex items-center gap-2 min-w-max">
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
                        layoutId="allProjectsActiveTab"
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

          {/* Results Grid */}
          {filteredProjects.length > 0 ? (
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
          ) : (
            <div className="text-center py-20 bg-brand-surface/30 rounded-2xl border border-brand-border">
              <Sparkles className="w-8 h-8 text-brand-muted mx-auto mb-3 opacity-50" />
              <h3 className="text-lg font-heading font-bold text-brand-text mb-1">No Projects Found</h3>
              <p className="text-xs text-brand-muted max-w-sm mx-auto mb-4">
                No project matches your search query &ldquo;{searchQuery}&rdquo;. Try another keyword or clear the search.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setActiveCategory('all');
                }}
                className="px-4 py-2 rounded-xl bg-brand-teal text-brand-bg text-xs font-semibold hover:bg-brand-teal/90 transition-all"
              >
                Clear Search & Filters
              </button>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </main>
  );
}
