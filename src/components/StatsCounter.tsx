'use client';

import React from 'react';
import { Star, GraduationCap, Award, Globe, HeartHandshake } from 'lucide-react';
import { Language } from '@/types';

interface StatsCounterProps {
  language: Language;
}

export const StatsCounter: React.FC<StatsCounterProps> = ({ language }) => {
  const stats = [
    {
      icon: <Star className="w-5 h-5 text-amber-500 fill-amber-400" />,
      value: '5.0 / 5.0',
      labelEn: 'Google Rating (78 Reviews)',
      labelTa: 'கூகுள் மதிப்பீடு (78 சான்றுகள்)',
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-[#7A1B28] dark:text-amber-400" />,
      value: '1,000+',
      labelEn: 'Students Mentored',
      labelTa: 'பயிற்சி பெற்ற மாணவர்கள்',
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      value: '100%',
      labelEn: 'Board Exam Success',
      labelTa: 'பொதுத்தேர்வு தேர்ச்சி',
    },
    {
      icon: <Globe className="w-5 h-5 text-sky-600 dark:text-sky-400" />,
      value: '6+ Countries',
      labelEn: 'Global Online Learners',
      labelTa: 'உலகளாவிய மாணவர்கள்',
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      value: '8+ Years',
      labelEn: 'Teaching Excellence',
      labelTa: 'அர்ப்பணிப்பான அனுபவம்',
    },
  ];

  return (
    <section className="py-8 bg-white/70 dark:bg-[#1A080D]/70 backdrop-blur-md border-y border-[#E8D7C5] dark:border-[#38121B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#ECD9C5] dark:divide-[#3D141E]">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center text-center p-3 ${
                idx === 4 ? 'col-span-2 sm:col-span-1' : ''
              }`}
            >
              <div className="mb-1.5 p-2 rounded-xl bg-[#F8EFE4] dark:bg-[#280F16] border border-[#DECABB] dark:border-[#421722] shadow-2xs">
                {stat.icon}
              </div>
              <div className="text-xl sm:text-2xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] tracking-tight">
                {stat.value}
              </div>
              <div className="text-[11px] sm:text-xs font-semibold text-[#66464D] dark:text-amber-200/70 mt-0.5">
                {language === 'ta' ? stat.labelTa : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
