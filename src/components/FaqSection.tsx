'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface FaqSectionProps {
  language: Language;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ language }) => {
  const t = DICTIONARY[language].faq;
  const [openId, setOpenId] = useState<string | null>(t.items[0]?.id || null);

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#FCF8F0] dark:bg-[#18070C] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        {/* Accordion List */}
        <div className="space-y-4 max-w-3xl mx-auto">
          {t.items.map((item) => {
            const isOpen = openId === item.id;
            const q = language === 'ta' ? item.questionTa : item.questionEn;
            const a = language === 'ta' ? item.answerTa : item.answerEn;

            return (
              <div
                key={item.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-white dark:bg-[#200B12] border-[#7A1B28]/40 dark:border-amber-400/40 shadow-md'
                    : 'bg-white/80 dark:bg-[#1A090F]/80 border-[#ECD9C5] dark:border-[#38121B] hover:border-[#7A1B28]/25'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggle(item.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4"
                >
                  <span className="font-bold text-sm sm:text-base text-[#2B1015] dark:text-[#FAF4ED] leading-snug font-tamil">
                    {q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-[#7A1B28] dark:bg-amber-400 text-white dark:text-amber-950 rotate-180'
                        : 'bg-[#F4E7D7] dark:bg-[#2A0E17] text-[#7A1B28] dark:text-amber-300'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 pt-1 text-xs sm:text-sm text-[#5B3940] dark:text-[#CEB5BC] leading-relaxed border-t border-[#F1E4D4] dark:border-[#2C0F17] font-tamil animate-in fade-in duration-200">
                    {a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
