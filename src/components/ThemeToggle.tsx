'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Moon, Sun, Terminal, ChevronDown } from 'lucide-react';

export type ThemeId = 'cyber-midnight' | 'neon-matrix' | 'obsidian-amber' | 'clean-slate-light';

export interface ThemeOption {
  id: ThemeId;
  name: string;
  category: string;
  bgHex: string;
  accentTeal: string;
  accentViolet: string;
  icon: React.ElementType;
}

export const themeOptions: ThemeOption[] = [
  {
    id: 'cyber-midnight',
    name: 'Cyber Midnight',
    category: 'Dark Engineering',
    bgHex: '#0B0E14',
    accentTeal: '#22D3B8',
    accentViolet: '#7C6CF6',
    icon: Moon,
  },
  {
    id: 'neon-matrix',
    name: 'Matrix Neon',
    category: 'Cyberpunk Terminal',
    bgHex: '#06090E',
    accentTeal: '#10B981',
    accentViolet: '#06B6D4',
    icon: Terminal,
  },
  {
    id: 'obsidian-amber',
    name: 'Obsidian Amber',
    category: 'Warm Developer',
    bgHex: '#0F1117',
    accentTeal: '#F5A623',
    accentViolet: '#FF5370',
    icon: Palette,
  },
  {
    id: 'clean-slate-light',
    name: 'Clean Slate Light',
    category: 'Minimal Light Mode',
    bgHex: '#F8FAFC',
    accentTeal: '#0D9488',
    accentViolet: '#6366F1',
    icon: Sun,
  },
];

export const ThemeToggle: React.FC<{ isMobile?: boolean }> = ({ isMobile = false }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeId>('cyber-midnight');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load saved theme or system preference
    const savedTheme = localStorage.getItem('portfolio-theme') as ThemeId | null;
    if (savedTheme && themeOptions.some((t) => t.id === savedTheme)) {
      setCurrentTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } else {
      document.documentElement.setAttribute('data-theme', 'cyber-midnight');
    }
  }, []);

  const handleSelectTheme = (themeId: ThemeId) => {
    setCurrentTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    localStorage.setItem('portfolio-theme', themeId);
    setIsOpen(false);
  };

  const activeThemeObj = themeOptions.find((t) => t.id === currentTheme) || themeOptions[0];

  // Mobile Drawer Collapsible Layout (Closed by default, expands on click, spacious layout)
  if (isMobile) {
    return (
      <div className="w-full">
        {/* Trigger Button - Collapsed state */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-3 rounded-xl bg-brand-bg/60 border border-brand-border hover:border-brand-teal/60 text-brand-text transition-all active:scale-[0.99]"
          aria-label="Toggle Theme Selector"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex items-center gap-1">
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/20"
                style={{ backgroundColor: activeThemeObj.accentTeal }}
              />
              <span
                className="w-2.5 h-2.5 rounded-full border border-black/20"
                style={{ backgroundColor: activeThemeObj.accentViolet }}
              />
            </div>
            <div className="text-left">
              <div className="text-xs font-heading font-bold text-brand-text">{activeThemeObj.name}</div>
              <div className="text-[10px] font-mono text-brand-muted">{activeThemeObj.category}</div>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-brand-teal">
            <span className="text-[10px] font-mono font-medium">Change Theme</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          </div>
        </button>

        {/* Expandable Theme Picker Panel */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              className="overflow-hidden mt-2"
            >
              <div className="w-full space-y-1.5 bg-brand-bg/80 p-2.5 rounded-2xl border border-brand-border/80 shadow-xl">
                <div className="flex items-center justify-between px-1 py-1 text-[10px] font-mono text-brand-muted uppercase">
                  <span>Select Theme Palette</span>
                  <span className="text-brand-teal font-bold">4 Themes</span>
                </div>

                {themeOptions.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  const Icon = theme.icon;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleSelectTheme(theme.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-brand-surface border border-brand-teal text-brand-teal font-semibold shadow-md'
                          : 'bg-brand-surface/40 hover:bg-brand-surface border border-brand-border/40 text-brand-text'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className="w-7 h-7 rounded-lg flex items-center justify-center border border-brand-border/80 shadow-sm flex-shrink-0"
                          style={{ backgroundColor: theme.bgHex }}
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: theme.accentTeal }} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-heading font-bold text-brand-text truncate leading-tight">{theme.name}</div>
                          <div className="text-[10px] font-mono text-brand-muted truncate">{theme.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        <div className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: theme.accentTeal }}
                          />
                          <span
                            className="w-2.5 h-2.5 rounded-full border border-black/20"
                            style={{ backgroundColor: theme.accentViolet }}
                          />
                        </div>
                        {isSelected && (
                          <div className="w-5 h-5 rounded-full bg-brand-teal/20 flex items-center justify-center text-brand-teal">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  // Desktop Dropdown
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-surface border border-brand-border text-brand-text hover:border-brand-teal transition-all active:scale-95 shadow-md"
        aria-label="Toggle Website Color Theme"
      >
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span
              className="w-2.5 h-2.5 rounded-full border border-black/20"
              style={{ backgroundColor: activeThemeObj.accentTeal }}
            />
            <span
              className="w-2.5 h-2.5 rounded-full border border-black/20"
              style={{ backgroundColor: activeThemeObj.accentViolet }}
            />
          </div>
          <span className="text-xs font-mono text-brand-text font-medium">{activeThemeObj.name}</span>
        </div>
        <Palette className="w-4 h-4 text-brand-teal" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[1px]"
              aria-hidden="true"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -5 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 z-50 mt-2 w-72 p-3 rounded-2xl bg-brand-surface border border-brand-border shadow-2xl"
            >
              <div className="text-[10px] font-mono text-brand-muted uppercase px-2 mb-2 pb-1 border-b border-brand-border/60 flex items-center justify-between">
                <span>Select Theme Palette</span>
                <span className="text-brand-teal font-bold">{themeOptions.length} Themes</span>
              </div>

              <div className="space-y-1.5">
                {themeOptions.map((theme) => {
                  const isSelected = currentTheme === theme.id;
                  const Icon = theme.icon;

                  return (
                    <button
                      key={theme.id}
                      onClick={() => handleSelectTheme(theme.id)}
                      className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                        isSelected
                          ? 'bg-brand-bg border border-brand-teal/40 text-brand-teal font-semibold'
                          : 'hover:bg-brand-bg/60 border border-transparent text-brand-text'
                      }`}
                    >
                      <div className="flex items-center gap-2.5 min-w-0">
                        <div
                          className="w-6 h-6 rounded-lg flex items-center justify-center border border-brand-border/80 shadow-sm flex-shrink-0"
                          style={{ backgroundColor: theme.bgHex }}
                        >
                          <Icon className="w-3.5 h-3.5" style={{ color: theme.accentTeal }} />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs font-heading font-bold text-brand-text leading-tight truncate">{theme.name}</div>
                          <div className="text-[10px] font-mono text-brand-muted truncate">{theme.category}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                        <div className="flex items-center gap-1">
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: theme.accentTeal }}
                          />
                          <span
                            className="w-2.5 h-2.5 rounded-full"
                            style={{ backgroundColor: theme.accentViolet }}
                          />
                        </div>
                        {isSelected && <Check className="w-4 h-4 text-brand-teal ml-1" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
