'use client';

import React, { useState } from 'react';
import { Baby, GraduationCap, Briefcase, Globe2, CheckCircle2, ArrowRight } from 'lucide-react';
import { Language, LearnerCategory } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface AudienceProps {
  language: Language;
}

export const Audience: React.FC<AudienceProps> = ({ language }) => {
  const [activeTab, setActiveTab] = useState<LearnerCategory>('kids');
  const t = DICTIONARY[language].audience;

  const tabList: { key: LearnerCategory; label: string; icon: React.ReactNode }[] = [
    { key: 'kids', label: t.tabs.kids, icon: <Baby className="w-4 h-4" /> },
    { key: 'teens', label: t.tabs.teens, icon: <GraduationCap className="w-4 h-4" /> },
    { key: 'adults', label: t.tabs.adults, icon: <Briefcase className="w-4 h-4" /> },
    { key: 'overseas', label: t.tabs.overseas, icon: <Globe2 className="w-4 h-4" /> },
  ];

  const current = t.content[activeTab];

  return (
    <section id="audience" className="py-16 sm:py-24 bg-[#FFFDF7] dark:bg-[#120508] relative">
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

        {/* Tab Controls (Horizontally Scrollable Pills on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-8 sm:mb-12 no-scrollbar gap-2 sm:gap-3">
          {tabList.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                activeTab === tab.key
                  ? 'bg-[#7A1B28] text-white dark:bg-amber-400 dark:text-amber-950 shadow-md scale-102'
                  : 'bg-[#F5EAD9] dark:bg-[#230C13] text-[#552A32] dark:text-amber-200/80 hover:bg-[#ECD9C5] dark:hover:bg-[#2F111A]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content Display Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#FCF8F0] dark:bg-[#1C090E] border border-[#ECD9C5] dark:border-[#3F1620] p-6 sm:p-10 shadow-lg transition-all">
          <div className="inline-block px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/50 text-[#7A1B28] dark:text-amber-300 font-bold text-xs mb-4">
            {current.tag}
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] mb-4">
            {current.title}
          </h3>

          <p className="text-base sm:text-lg text-[#58373E] dark:text-[#C5A7B0] leading-relaxed mb-8">
            {current.description}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {current.points.map((pt, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-white dark:bg-[#260C14] border border-[#E9D7C4] dark:border-[#4B1A26]"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-[#411C23] dark:text-[#F3E5D8]">
                  {pt}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#ECD9C5] dark:border-[#38131C]">
            <span className="text-xs text-[#704F56] dark:text-amber-200/60 text-center sm:text-left">
              {language === 'ta'
                ? 'தனிநபர் மற்றும் சிறிய குழு வகுப்புகள் கிடைக்கும்.'
                : 'Both 1-on-1 private slots and small group batches available.'}
            </span>

            <a
              href="#registration"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7A1B28] hover:bg-[#8F2030] dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-amber-950 font-bold px-6 py-3 rounded-xl shadow-md text-sm transition-transform hover:-translate-y-0.5"
            >
              <span>{current.cta}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
