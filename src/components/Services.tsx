'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import { Cpu, Database, Globe, Palette, ArrowRight, MessageSquare } from 'lucide-react';

export const Services: React.FC = () => {
  const servicesList = [
    {
      title: 'Workflow Automation & AI Setup',
      icon: Cpu,
      accentColor: '#22D3B8',
      description: 'Design and deploy custom n8n workflows, Power Automate webhooks, Automa RPA screen scrapers, and OpenAI agent pipelines connecting your business apps.',
      features: [
        'n8n & Power Automate Workflow Pipelines',
        'Slack / MS Teams Automated Alerts & Adaptive Cards',
        'OpenAI Resume & Candidate Evaluation Agents',
        'Scheduled PowerPoint Deck Generation (python-pptx)',
      ],
    },
    {
      title: 'Data Analytics & Automated Dashboards',
      icon: Database,
      accentColor: '#7C6CF6',
      description: 'Transform manual, fragile Excel lookup spreadsheets into zero-cost, self-updating Power Query engines that process weekly data exports in seconds.',
      features: [
        'Power Query (M) Automated Data Cleanup',
        'Harvest & Time Export Compliance Reporting',
        'Multi-source Roster & Key Schema Unions',
        'SharePoint & OneDrive Automated Data Sync',
      ],
    },
    {
      title: 'Full-Stack Website & App Development',
      icon: Globe,
      accentColor: '#3B82F6',
      description: 'Build fast, accessible, responsive web applications and e-commerce platforms tailored to your business goals.',
      features: [
        'Next.js 14 App Router & React Storefronts',
        'Python FastAPI & Node.js REST Backends',
        'Shopify Headless Integration & Payment Webhooks',
        'Tailwind CSS & Framer Motion Visual Design',
      ],
    },
    {
      title: 'Brand Identity & UI/UX Design',
      icon: Palette,
      accentColor: '#F5A623',
      description: 'Craft intuitive user interface wireframes, design systems, vector art, poster graphics, and brand identity packages.',
      features: [
        'Figma High-Fidelity UI/UX Wireframing',
        'Brand Identity Guidelines & Logo Design',
        'Poster & Marketing Collateral Graphics',
        'Mobile-First Responsive Layout Specs',
      ],
    },
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-brand-surface/30 border-y border-brand-border/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
            <span>// SERVICES & CONSULTING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text mb-4">
            How I Help Businesses <span className="text-brand-teal">Run Smarter</span>
          </h2>
          <p className="text-brand-muted text-base">
            Fixed-scope consulting, enterprise automation setup, data engine architecture, and custom full-stack web builds.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            const waMsg = `Hi Callistus, I'd like to discuss a project regarding: ${service.title}`;
            const waUrl = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(waMsg)}`;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border hover:border-brand-teal/50 transition-all group flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="p-3 rounded-xl bg-brand-bg text-brand-teal group-hover:scale-110 transition-transform shadow-inner"
                      style={{ color: service.accentColor }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-bold text-brand-text">{service.title}</h3>
                  </div>

                  <p className="text-xs sm:text-sm text-brand-muted mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {service.features.map((feat) => (
                      <li key={feat} className="flex items-center gap-2 text-xs font-mono text-brand-text">
                        <ArrowRight className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-brand-bg border border-brand-border hover:border-brand-teal hover:text-brand-teal text-xs font-semibold text-brand-text transition-all group-hover:bg-brand-teal group-hover:text-brand-bg group-hover:border-brand-teal"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Discuss {service.title.split(' ')[0]} Project</span>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
