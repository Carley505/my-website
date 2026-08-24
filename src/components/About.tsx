'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import { GraduationCap, Award, MapPin, Briefcase, Github, ExternalLink, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
            <span>// ABOUT & BACKGROUND</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-brand-text">
            Bridging Business Operations with <span className="text-brand-teal">Intelligent Automation</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6 text-brand-muted leading-relaxed"
          >
            <p className="text-base sm:text-lg">
              I am a Nairobi-based <strong className="text-brand-text font-semibold">AI & Data Automation Engineer</strong> with a strong foundation in Computer Science & IT. My expertise lies in designing end-to-end automated pipelines, integrating AI models into existing software stacks, and transforming raw business data into actionable reporting engines.
            </p>

            <p className="text-base">
              As the <strong className="text-brand-text font-semibold">Automation Team Lead at m365consult</strong>, I lead cross-departmental automation initiatives across HR, Marketing, and Operations. I architect multi-phase RPA systems (Automa RPA), custom n8n workflows, Power Automate webhooks, and AI-powered applicant evaluation models that significantly reduce manual workloads.
            </p>

            <p className="text-base">
              Beyond backend workflow architecture, I bring deep <strong className="text-brand-text font-semibold">Full-Stack Development</strong> experience (Next.js, React, Node.js, Python FastAPI) and formal UI/UX graphic design training. This dual perspective allows me to build solutions that not only run flawlessly behind the scenes but also deliver polished, intuitive user interfaces.
            </p>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border">
                <div className="text-brand-teal font-heading font-semibold text-base mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Systems Automation
                </div>
                <p className="text-xs text-brand-muted">n8n workflows, Power Automate, Automa RPA screenshot analysis, and Slack/Teams bot alerting.</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-surface border border-brand-border">
                <div className="text-brand-violet font-heading font-semibold text-base mb-1 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Data & AI Analytics
                </div>
                <p className="text-xs text-brand-muted">Power Query M code, Harvest data ingestion, OpenAI Agents, Chroma DB vector search, and SQL.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column Quick Facts Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-2xl relative">
              <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 w-20 h-20 bg-brand-teal/10 blur-xl rounded-full pointer-events-none" />

              <h3 className="text-xl font-heading font-bold text-brand-text mb-6 flex items-center gap-2">
                <span>Quick Facts & Credentials</span>
              </h3>

              <div className="space-y-5 text-sm">
                {/* Current Role */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-bg text-brand-teal mt-0.5">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">{profileData.currentRole.title}</div>
                    <div className="text-xs text-brand-muted">{profileData.currentRole.company} • {profileData.currentRole.period} ({profileData.currentRole.type})</div>
                  </div>
                </div>

                {/* Education */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-bg text-brand-teal mt-0.5">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">{profileData.education.degree}</div>
                    <div className="text-xs text-brand-muted">{profileData.education.institution} • {profileData.education.honors} ({profileData.education.period})</div>
                  </div>
                </div>

                {/* Certification */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-bg text-brand-violet mt-0.5">
                    <Award className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">{profileData.certification.title}</div>
                    <div className="text-xs text-brand-muted">{profileData.certification.issuer}</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-brand-bg text-blue-400 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-brand-text">Based in {profileData.location}</div>
                    <div className="text-xs text-brand-muted">Open to global remote roles & consulting</div>
                  </div>
                </div>
              </div>

              {/* Profiles & Links Footer */}
              <div className="mt-8 pt-6 border-t border-brand-border flex flex-wrap items-center justify-between gap-4">
                <a
                  href={profileData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-teal transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>github.com/{profileData.githubUsername}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>

                <a
                  href={profileData.behance}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-violet transition-colors"
                >
                  <span>behance.net/{profileData.behanceUsername}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
