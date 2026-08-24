'use client';

import React from 'react';
import { profileData } from '@/data/profile';
import { Terminal, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-bg border-t border-brand-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-brand-border/60">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-teal/30 flex items-center justify-center text-brand-teal">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <div className="font-heading font-bold text-base text-brand-text">
                {profileData.name}
              </div>
              <div className="text-xs font-mono text-brand-muted">
                {profileData.heroTitle} • Nairobi, Kenya
              </div>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-brand-muted">
            <a href="#about" className="hover:text-brand-teal transition-colors">About</a>
            <a href="#skills" className="hover:text-brand-teal transition-colors">Skills</a>
            <a href="#projects" className="hover:text-brand-teal transition-colors">Projects</a>
            <a href="#services" className="hover:text-brand-teal transition-colors">Services</a>
            <a href="#contact" className="hover:text-brand-teal transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-xs font-mono text-brand-muted hover:text-brand-teal p-2 rounded-xl bg-brand-surface border border-brand-border transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-brand-muted">
          <div>
            © {new Date().getFullYear()} Callistus Ngeywa. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors flex items-center gap-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={profileData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal transition-colors flex items-center gap-1"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={profileData.behance}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-violet transition-colors font-bold"
            >
              Behance
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
