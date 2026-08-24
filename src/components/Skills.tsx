'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '@/data/skills';
import { Cpu, Database, Code2, Palette, Check } from 'lucide-react';

export const Skills: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Cpu,
    Database,
    Code2,
    Palette,
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-brand-surface/30 border-y border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-violet/10 text-brand-violet text-xs font-mono mb-3">
            <span>// TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text mb-4">
            Four Engineering Pillars & <span className="text-brand-violet">Tooling Stack</span>
          </h2>
          <p className="text-brand-muted text-base leading-relaxed">
            A comprehensive breakdown of the systems, languages, platforms, and frameworks I use to solve complex operational challenges.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Cpu;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-teal/40 transition-all group shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl bg-brand-bg text-brand-teal group-hover:scale-110 transition-transform shadow-inner"
                      style={{ color: category.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-text">{category.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted mb-6 leading-relaxed">
                    {category.description}
                  </p>
                </div>

                {/* Skills Badges */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-border/60">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-bg border border-brand-border text-xs font-mono text-brand-text hover:border-brand-teal/50 hover:text-brand-teal transition-all"
                    >
                      <Check className="w-3 h-3 text-brand-teal" />
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
