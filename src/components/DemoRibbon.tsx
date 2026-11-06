'use client';

import React, { useState, useEffect } from 'react';
import { X, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';

interface DemoRibbonProps {
  language: Language;
}

export const DemoRibbon: React.FC<DemoRibbonProps> = ({ language }) => {
  const [isVisible, setIsVisible] = useState(true);
  const t = DICTIONARY[language].banner;

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('nayali_ribbon_dismissed');
      if (dismissed === 'true') {
        setIsVisible(false);
      }
    } catch {
      // Ignore storage errors in restricted contexts
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('nayali_ribbon_dismissed', 'true');
    } catch {
      // Ignore
    }
  };

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Demo announcement banner"
      className="relative z-50 bg-gradient-to-r from-[#5A101C] via-[#7A1B28] to-[#9E2033] text-amber-100 text-xs sm:text-sm py-2 px-4 shadow-sm border-b border-amber-500/20"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
          <span className="inline-flex items-center justify-center p-1 bg-amber-400/20 text-amber-300 rounded-full shrink-0">
            <Sparkles className="w-3.5 h-3.5" />
          </span>
          <p className="truncate font-medium tracking-tight">
            {t.text}
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href="#registration"
            className="hidden md:inline-flex items-center gap-1 bg-amber-500 hover:bg-amber-400 text-amber-950 font-semibold px-2.5 py-0.5 rounded-full text-xs transition-colors shadow-xs"
          >
            <span>{t.action}</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            onClick={handleDismiss}
            aria-label={t.dismiss}
            className="p-1 rounded-md text-amber-200/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
};
