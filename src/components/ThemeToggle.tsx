'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Palette, Check, Moon, Sun, Terminal } from 'lucide-react';

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

  return (
    <div className="relative inline-block text-left">
      {/* Theme Toggle Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex items-center gap-2 px-3 py-2 rounded-xl bg-brand-surface border border-brand-border text-brand-text hover:border-brand-teal transition-all active:scale-95 shadow-md ${
          isMobile ? 'w-full justify-between' : ''
        }`}
        aria-label="Toggle Website Color Theme"
      >
        <div className="flex items-center gap-2">
          {/* Swatch preview dots */}
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

      {/* Theme Options Dropdown Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop to close dropdown on click outside */}
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
              className={`absolute z-50 mt-2 p-3 rounded-2xl bg-brand-surface border border-brand-border shadow-2xl ${
                isMobile
                  ? 'left-0 right-0 w-full'
                  : 'right-0 w-64'
              }`}
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
                      <div className="flex items-center gap-2.5">
                        {/* Swatch Circle */}
                        <div
                          className="w-5 h-5 rounded-lg flex items-center justify-center border border-brand-border/80 shadow-sm"
                          style={{ backgroundColor: theme.bgHex }}
                        >
                          <Icon className="w-3 h-3" style={{ color: theme.accentTeal }} />
                        </div>
                        <div>
                          <div className="text-xs font-heading font-bold text-brand-text leading-tight">{theme.name}</div>
                          <div className="text-[10px] font-mono text-brand-muted">{theme.category}</div>
                        </div>
                      </div>

                      {/* Swatch color dots */}
                      <div className="flex items-center gap-1">
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: theme.accentTeal }}
                        />
                        <span
                          className="w-2.5 h-2.5 rounded-full"
                          style={{ backgroundColor: theme.accentViolet }}
                        />
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
