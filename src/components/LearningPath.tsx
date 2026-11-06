'use client';

import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface LearningPathProps {
  language: Language;
}

export const LearningPath: React.FC<LearningPathProps> = ({ language }) => {
  const t = DICTIONARY[language].path;

  return (
    <section id="path" className="py-16 sm:py-24 bg-[#FCF8F0] dark:bg-[#18070C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#7A1B28] dark:text-amber-400 uppercase">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F3C43] dark:text-[#D1B8BF] leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* Desktop View: 2-Row Grid with Continuous Flow Connections */}
        <div className="hidden lg:grid grid-cols-3 gap-8 relative">
          {t.steps.map((step, index) => (
            <div
              key={step.step}
              className="relative rounded-3xl p-6 bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#421622] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between"
            >
              {/* Connecting badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="w-10 h-10 rounded-2xl bg-[#7A1B28] dark:bg-amber-400 text-amber-200 dark:text-amber-950 font-extrabold flex items-center justify-center text-sm shadow-xs">
                  {step.step}
                </span>
                <span className="text-xs font-tamil font-bold px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-[#7A1B28] dark:text-amber-300 border border-amber-300/40">
                  {step.tamil}
                </span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-[#290E14] dark:text-[#FAF4ED] mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[#5F3C43] dark:text-[#C5A7B0] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#EBDCCB] dark:border-[#35121B] flex items-start gap-2 text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-950/20 p-2.5 rounded-xl">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span>{step.outcome}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View: Vertical Connected Stepper (Zero Horizontal Overflow) */}
        <div className="lg:hidden relative pl-6 sm:pl-8 space-y-8 before:absolute before:left-3 sm:before:left-4 before:top-3 before:bottom-3 before:w-0.5 before:bg-gradient-to-b before:from-[#7A1B28] before:via-amber-500 before:to-[#7A1B28]">
          {t.steps.map((step) => (
            <div key={step.step} className="relative">
              {/* Node Dot */}
              <div className="absolute -left-6 sm:-left-8 top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#7A1B28] dark:bg-amber-400 text-amber-100 dark:text-amber-950 font-bold text-xs flex items-center justify-center shadow-md border-2 border-white dark:border-[#18070C]">
                {step.step}
              </div>

              {/* Milestone Card */}
              <div className="rounded-2xl p-5 bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#421622] shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-1 mb-2">
                  <span className="text-xs font-tamil font-bold px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/70 text-[#7A1B28] dark:text-amber-300">
                    {step.tamil}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#290E14] dark:text-[#FAF4ED] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#5F3C43] dark:text-[#C5A7B0] leading-relaxed mb-3">
                  {step.description}
                </p>

                <div className="flex items-center gap-2 text-xs font-medium text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30 p-2 rounded-lg">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span>{step.outcome}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
