'use client';

import React from 'react';
import {
  Sparkles,
  Users2,
  Puzzle,
  BookOpenCheck,
  Award,
  FilePenLine,
  ArrowRight,
} from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface OfferingsProps {
  language: Language;
}

export const Offerings: React.FC<OfferingsProps> = ({ language }) => {
  const t = DICTIONARY[language].offers;

  const iconMap: Record<string, React.ReactNode> = {
    interactive: <Sparkles className="w-6 h-6 text-[#7A1B28] dark:text-amber-300" />,
    'one-on-one': <Users2 className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    activity: <Puzzle className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    storytelling: <BookOpenCheck className="w-6 h-6 text-[#9E2033] dark:text-rose-400" />,
    assessments: <Award className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    worksheets: <FilePenLine className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />,
  };

  return (
    <section id="offers" className="py-16 sm:py-24 bg-[#FFFDF7] dark:bg-[#120508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.items.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl p-7 bg-[#FCF8F0] dark:bg-[#1C090E] border border-[#ECD9C5] dark:border-[#3F1620] hover:border-amber-500/50 dark:hover:border-amber-400/50 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Palm-leaf subtle accent line */}
              <div className="absolute top-0 inset-x-8 h-1 bg-gradient-to-r from-transparent via-[#7A1B28]/20 dark:via-amber-400/30 to-transparent group-hover:via-amber-500 transition-colors" />

              <div className="flex items-start justify-between mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-[#280F16] flex items-center justify-center shadow-xs border border-[#E7D6C3] dark:border-[#4B1B26] group-hover:scale-110 transition-transform">
                  {iconMap[item.id]}
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-amber-100 dark:bg-amber-950/60 text-amber-900 dark:text-amber-300 border border-amber-300/50 dark:border-amber-700/40">
                  {item.badge}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#290E14] dark:text-[#FAF4ED] mb-3 group-hover:text-[#7A1B28] dark:group-hover:text-amber-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-[#5C3B42] dark:text-[#C5A7B0] leading-relaxed">
                {item.description}
              </p>

              <div className="mt-5 pt-4 border-t border-[#EBDCCB] dark:border-[#32111A] flex items-center text-xs font-semibold text-[#7A1B28] dark:text-amber-400 group-hover:translate-x-1 transition-transform">
                <span>{language === 'ta' ? 'விவரம் அறிக' : 'Explore curriculum'}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1" />
              </div>
            </div>
          ))}
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
