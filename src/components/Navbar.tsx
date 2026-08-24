'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, Terminal, ArrowUpRight } from 'lucide-react';
import { profileData } from '@/data/profile';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(profileData.whatsappMessages.hero)}`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-brand-bg/85 backdrop-blur-md border-b border-brand-border py-3 shadow-xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-brand-surface border border-brand-teal/30 flex items-center justify-center text-brand-teal group-hover:border-brand-teal transition-colors shadow-lg">
            <Terminal className="w-5 h-5" />
          </div>
          <div>
            <span className="font-heading font-bold text-lg text-brand-text tracking-tight group-hover:text-brand-teal transition-colors">
              Callistus Ngeywa
            </span>
            <div className="flex items-center gap-1.5 text-[11px] font-mono text-brand-muted">
              <span className="w-2 h-2 rounded-full bg-brand-teal animate-pulse" />
              <span>AI & Automation</span>
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-brand-surface/60 border border-brand-border rounded-full px-4 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-brand-muted hover:text-brand-text hover:bg-white/5 rounded-full transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-brand-bg bg-brand-teal hover:bg-brand-teal/90 rounded-xl transition-all shadow-lg shadow-brand-teal/20"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-text hover:text-brand-teal transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-surface border-b border-brand-border px-4 pt-4 pb-6 overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 text-base font-medium text-brand-muted hover:text-brand-text hover:bg-white/5 rounded-xl transition-all"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2 border-t border-brand-border mt-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold text-brand-bg bg-brand-teal rounded-xl"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Start WhatsApp Chat</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
