'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { profileData } from '@/data/profile';
import { MessageSquare, Mail, MapPin, Github, Linkedin, ExternalLink, Send, ArrowUpRight } from 'lucide-react';

export const Contact: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState('Automation & AI Pipeline');

  const topics = [
    'Automation & AI Pipeline',
    'Data Analytics / Power Query Engine',
    'Full-Stack Website Development',
    'UI/UX & Brand Design',
  ];

  const getWhatsappUrl = () => {
    const msg = `Hi Callistus, I'd like to talk about a project regarding ${selectedTopic}.`;
    return `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-brand-surface/40 border-t border-brand-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-brand-teal/10 text-brand-teal text-xs font-mono mb-3">
              <span>// GET IN TOUCH</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-brand-text mb-6 leading-tight">
              Let&apos;s Build Something <span className="text-brand-teal">Smarter Together</span>
            </h2>
            <p className="text-brand-muted text-base leading-relaxed mb-8">
              Whether you need an enterprise automation pipeline built with n8n/Power Automate, an automated Excel data engine, or a modern full-stack web application, I am available for full-time roles, contracts, and freelance projects.
            </p>

            <div className="space-y-4 mb-8">
              {/* WhatsApp Phone */}
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-teal transition-all group"
              >
                <div className="p-3 rounded-lg bg-brand-teal/10 text-brand-teal group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-muted">WhatsApp Direct (Recommended)</div>
                  <div className="font-heading font-bold text-brand-text group-hover:text-brand-teal transition-colors">
                    {profileData.phone}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-muted ml-auto group-hover:text-brand-teal" />
              </a>

              {/* Email */}
              <a
                href={`mailto:${profileData.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface border border-brand-border hover:border-brand-teal transition-all group"
              >
                <div className="p-3 rounded-lg bg-brand-violet/10 text-brand-violet group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-muted">Direct Email</div>
                  <div className="font-heading font-bold text-brand-text group-hover:text-brand-violet transition-colors">
                    {profileData.email}
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-brand-muted ml-auto group-hover:text-brand-violet" />
              </a>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 rounded-xl bg-brand-surface border border-brand-border">
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-brand-muted">Location</div>
                  <div className="font-heading font-bold text-brand-text">{profileData.location}</div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-teal transition-all"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-teal transition-all"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={profileData.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-brand-surface border border-brand-border text-brand-muted hover:text-brand-text hover:border-brand-violet transition-all font-mono text-xs font-bold"
                aria-label="Behance Profile"
              >
                Bē
              </a>
            </div>
          </motion.div>

          {/* Right Column Interactive WhatsApp Pre-fill Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6"
          >
            <div className="p-6 sm:p-8 rounded-2xl bg-brand-surface border border-brand-border shadow-2xl relative">
              <h3 className="text-2xl font-heading font-bold text-brand-text mb-2">
                Start a Conversation
              </h3>
              <p className="text-xs text-brand-muted mb-6">
                Select what you&apos;d like to discuss and click below to launch WhatsApp with a pre-formatted message:
              </p>

              {/* Topic Selector Buttons */}
              <div className="space-y-2 mb-8">
                <label className="text-xs font-mono text-brand-muted uppercase">Select Topic:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((topic) => {
                    const isSelected = selectedTopic === topic;
                    return (
                      <button
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`p-3 rounded-xl text-xs font-medium text-left transition-all border ${
                          isSelected
                            ? 'bg-brand-teal/15 border-brand-teal text-brand-teal font-semibold'
                            : 'bg-brand-bg/60 border-brand-border/60 text-brand-muted hover:text-brand-text'
                        }`}
                      >
                        {topic}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Preview Message */}
              <div className="p-4 rounded-xl bg-brand-bg border border-brand-border mb-6">
                <div className="text-[10px] font-mono text-brand-muted uppercase mb-1">Message Preview:</div>
                <p className="text-xs font-mono text-brand-text italic">
                  &ldquo;Hi Callistus, I&apos;d like to talk about a project regarding {selectedTopic}.&rdquo;
                </p>
              </div>

              {/* Action Button */}
              <a
                href={getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 px-6 rounded-xl bg-brand-teal hover:bg-brand-teal/90 text-brand-bg font-bold text-sm transition-all shadow-lg shadow-brand-teal/20"
              >
                <Send className="w-4 h-4" />
                <span>Launch WhatsApp Chat</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
