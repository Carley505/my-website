'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageSquare, Terminal, ArrowUpRight, ChevronRight } from 'lucide-react';
import { profileData } from '@/data/profile';
import { ThemeToggle } from './ThemeToggle';

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

  // Prevent background scroll when mobile sidebar is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = `https://wa.me/${profileData.phoneRaw}?text=${encodeURIComponent(profileData.whatsappMessages.hero)}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-brand-bg/85 backdrop-blur-md border-b border-brand-border py-3 shadow-xl'
            : 'bg-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-brand-surface border border-brand-teal/30 flex items-center justify-center text-brand-teal group-hover:border-brand-teal transition-colors shadow-lg">
              <Terminal className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <span className="font-heading font-bold text-base sm:text-lg text-brand-text tracking-tight group-hover:text-brand-teal transition-colors">
                Callistus Ngeywa
              </span>
              <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-mono text-brand-muted">
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

          {/* Desktop CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
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

          {/* Mobile Actions Header */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2.5 rounded-xl bg-brand-surface border border-brand-border text-brand-text hover:text-brand-teal transition-colors active:scale-95"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Sidebar Drawer (Right side, ~82% width, 100% height) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Overlay - Clicking outside closes sidebar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 md:hidden"
              aria-hidden="true"
            />

            {/* Right Drawer Panel */}
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[82vw] max-w-sm bg-brand-surface border-l border-brand-border h-full shadow-2xl flex flex-col justify-between p-6 md:hidden overflow-y-auto"
            >
              <div>
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-5 border-b border-brand-border/60 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-brand-bg border border-brand-teal/30 flex items-center justify-center text-brand-teal">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <span className="font-heading font-bold text-sm text-brand-text">Navigation</span>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-lg bg-brand-bg text-brand-muted hover:text-brand-text transition-colors"
                    aria-label="Close Navigation Menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Theme Selector inside Mobile Drawer */}
                <div className="mb-6">
                  <div className="text-[10px] font-mono text-brand-muted uppercase mb-2">Color Theme:</div>
                  <ThemeToggle isMobile={true} />
                </div>

                {/* Mobile Navigation Links */}
                <nav className="flex flex-col gap-1.5">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-base font-medium text-brand-text hover:bg-brand-bg hover:text-brand-teal border border-transparent hover:border-brand-border/50 transition-all group"
                    >
                      <span>{link.name}</span>
                      <ChevronRight className="w-4 h-4 text-brand-muted group-hover:text-brand-teal group-hover:translate-x-1 transition-all" />
                    </a>
                  ))}
                </nav>
              </div>

              {/* Drawer Footer Actions */}
              <div className="pt-6 border-t border-brand-border/60 mt-6 space-y-3">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-sm font-semibold text-brand-bg bg-brand-teal hover:bg-brand-teal/90 rounded-xl transition-all shadow-lg shadow-brand-teal/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                </a>

                <div className="text-center">
                  <span className="text-[11px] font-mono text-brand-muted">
                    Callistus Ngeywa • Nairobi, Kenya
                  </span>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
