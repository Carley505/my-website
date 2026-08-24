'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Code2, Workflow as WorkflowIcon, Rocket } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Discover & Map',
      icon: Search,
      desc: 'Audit manual bottlenecks, existing spreadsheet formulas, API endpoints, and business reporting requirements.',
    },
    {
      num: '02',
      title: 'Design & Prototype',
      icon: WorkflowIcon,
      desc: 'Architect n8n workflow nodes, Power Query M join logic, database schemas, and Figma UI wireframes.',
    },
    {
      num: '03',
      title: 'Automate & Build',
      icon: Code2,
      desc: 'Develop Next.js frontends, build Python FastAPI endpoints, configure webhook triggers, and deploy OpenAI agents.',
    },
    {
      num: '04',
      title: 'Deploy & Optimize',
      icon: Rocket,
      desc: 'Run end-to-end verification tests, monitor webhook handshakes, ensure error suppression, and hand off clean documentation.',
    },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
            <span>// METHODOLOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text mb-4">
            How I Work: <span className="text-brand-teal">4-Step Execution Pipeline</span>
          </h2>
          <p className="text-brand-muted text-base">
            From initial data discovery to reliable, production-grade deployment.
          </p>
        </div>

        {/* 4 Steps Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 rounded-2xl bg-brand-surface border border-brand-border relative hover:border-brand-teal/40 transition-all group"
              >
                {/* Step Number Badge */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-brand-teal font-bold bg-brand-teal/10 px-2.5 py-1 rounded">
                    {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-brand-bg text-brand-muted group-hover:text-brand-teal transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg font-heading font-bold text-brand-text mb-2">{step.title}</h3>
                <p className="text-xs text-brand-muted leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
