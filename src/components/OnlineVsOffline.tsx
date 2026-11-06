'use client';

import React from 'react';
import { MapPin, Globe, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface OnlineVsOfflineProps {
  language: Language;
}

export const OnlineVsOffline: React.FC<OnlineVsOfflineProps> = ({ language }) => {
  const t = DICTIONARY[language].compare;

  return (
    <section id="compare" className="py-16 sm:py-24 bg-[#FCF8F0] dark:bg-[#18070C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
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

        {/* 2-Column Side-by-Side Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Offline Centre Card */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-[#200B12] border-2 border-[#ECD9C5] dark:border-[#421622] hover:border-[#7A1B28] dark:hover:border-amber-400/50 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#7A1B28]/10 dark:bg-amber-400/10 flex items-center justify-center text-[#7A1B28] dark:text-amber-400">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#7A1B28] text-white dark:bg-amber-400 dark:text-amber-950">
                  {t.offline.tag}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] mb-3">
                {t.offline.title}
              </h3>

              <p className="text-sm text-[#5C3B42] dark:text-[#C5A7B0] leading-relaxed mb-6">
                {t.offline.desc}
              </p>

              <div className="space-y-3 mb-8">
                {t.offline.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#3A181F] dark:text-[#F0DFD7]">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#visit"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#F4E7D7] hover:bg-[#ECD9C5] dark:bg-[#2D1018] dark:hover:bg-[#3D1520] text-[#7A1B28] dark:text-amber-300 font-bold text-sm transition-colors"
            >
              <span>{t.offline.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Online Classes Card */}
          <div className="rounded-3xl p-7 sm:p-9 bg-white dark:bg-[#200B12] border-2 border-[#ECD9C5] dark:border-[#421622] hover:border-emerald-600 dark:hover:border-emerald-500 shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center text-emerald-700 dark:text-emerald-400">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-600 text-white">
                  {t.online.tag}
                </span>
              </div>

              <h3 className="text-2xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] mb-3">
                {t.online.title}
              </h3>

              <p className="text-sm text-[#5C3B42] dark:text-[#C5A7B0] leading-relaxed mb-6">
                {t.online.desc}
              </p>

              <div className="space-y-3 mb-8">
                {t.online.perks.map((perk, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm font-medium text-[#3A181F] dark:text-[#F0DFD7]">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#registration"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm shadow-md transition-colors"
            >
              <span>{t.online.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
