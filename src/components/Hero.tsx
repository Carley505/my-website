'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, ArrowDown, Download, Sparkles, Code, Cpu, Database } from 'lucide-react';
import { profileData } from '@/data/profile';
import { NodeGraphVisual } from './NodeGraphVisual';

export const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(profileData.whatsappMessages.hero)}`;

  return (
    <section className="relative pt-24 sm:pt-36 pb-14 sm:pb-24 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[200px] sm:h-[350px] bg-brand-teal/10 blur-[90px] sm:blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[200px] sm:w-[400px] h-[150px] sm:h-[300px] bg-brand-violet/10 blur-[80px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            {/* Live Availability Badge */}
            <div className="inline-flex items-start sm:items-center gap-2 px-3 py-1.5 rounded-xl sm:rounded-full bg-brand-surface border border-brand-teal/30 text-[10.5px] sm:text-xs font-mono text-brand-teal mb-4 sm:mb-6 shadow-lg shadow-brand-teal/5 max-w-full">
              <span className="relative flex h-2 w-2 flex-shrink-0 mt-1 sm:mt-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-teal opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-teal" />
              </span>
              <span className="leading-tight sm:leading-none text-left">
                Available for Enterprise Automation &amp; AI Roles
              </span>
            </div>

            {/* Main Name */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-brand-text tracking-tight leading-tight sm:leading-none mb-3 sm:mb-4">
              Callistus <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-teal-300 to-brand-violet">Ngeywa</span>
            </h1>

            {/* Professional Umbrella Title */}
            <div className="flex flex-wrap items-center gap-2 mb-3 sm:mb-4">
              <h2 className="text-lg sm:text-2xl font-heading font-semibold text-brand-text">
                {profileData.heroTitle}
              </h2>
            </div>

            {/* Subtitle Stack Badges */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-[11px] sm:text-xs font-mono text-brand-muted">
                <Cpu className="w-3.5 h-3.5 text-brand-teal flex-shrink-0" /> n8n & Power Automate
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-[11px] sm:text-xs font-mono text-brand-muted">
                <Database className="w-3.5 h-3.5 text-brand-violet flex-shrink-0" /> Power Query & Data Pipelines
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-brand-surface border border-brand-border text-[11px] sm:text-xs font-mono text-brand-muted">
                <Code className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" /> Next.js & Full-Stack
              </span>
            </div>

            {/* Pitch */}
            <p className="text-sm sm:text-base lg:text-lg text-brand-muted max-w-2xl leading-relaxed mb-6 sm:mb-8">
              {profileData.pitch}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto">
              <a
                href="#projects"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-brand-bg bg-brand-teal hover:bg-brand-teal/90 rounded-xl transition-all shadow-lg shadow-brand-teal/20 w-full sm:w-auto active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4" />
                <span>Explore Projects</span>
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-brand-text bg-brand-surface border border-brand-border hover:border-brand-teal hover:text-brand-teal rounded-xl transition-all w-full sm:w-auto active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-brand-teal" />
                <span>WhatsApp Chat</span>
              </a>

              <a
                href="assets/Callistus_Ngeywa_Resume.pdf"
                download
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-brand-surface rounded-xl transition-all w-full sm:w-auto active:scale-[0.98]"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column Node Graph Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-4 lg:mt-0"
          >
            <div className="relative rounded-2xl bg-brand-surface/40 border border-brand-border backdrop-blur-sm p-3 sm:p-4 shadow-2xl overflow-hidden">
              <div className="flex items-center justify-between px-2 sm:px-3 py-2 border-b border-brand-border/60 mb-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  <span className="text-[11px] sm:text-xs font-mono text-brand-muted ml-1.5 truncate max-w-[140px] sm:max-w-none">automation-pipeline.n8n</span>
                </div>
                <span className="text-[9px] sm:text-[10px] font-mono text-brand-teal uppercase px-2 py-0.5 rounded bg-brand-teal/10">Active System</span>
              </div>
              <NodeGraphVisual />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="mt-10 sm:mt-16 flex justify-center">
        <a
          href="#stats"
          className="flex flex-col items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-teal transition-colors group"
        >
          <span>Scroll to explore</span>
          <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-brand-teal" />
        </a>
      </div>
    </section>
  );
};
