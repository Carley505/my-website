'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import { TrendingUp, Workflow, Globe, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const icons = [TrendingUp, Workflow, Globe, CheckCircle2];

  return (
    <section id="stats" className="py-12 bg-brand-surface/40 border-y border-brand-border/60 backdrop-blur-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.stats.map((stat, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-brand-surface border border-brand-border/80 hover:border-brand-teal/40 transition-all group shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl sm:text-4xl font-heading font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-teal to-teal-300">
                    {stat.value}
                  </span>
                  <div className="p-2.5 rounded-xl bg-brand-bg text-brand-teal group-hover:bg-brand-teal group-hover:text-brand-bg transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-brand-text mb-1">{stat.label}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{stat.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
