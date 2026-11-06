'use client';

import React from 'react';
import { Award, Heart, BookOpen, Sparkles, MessageCircle } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface TeacherCardProps {
  language: Language;
}

export const TeacherCard: React.FC<TeacherCardProps> = ({ language }) => {
  const t = DICTIONARY[language].teacher;

  const directChatUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    language === 'ta'
      ? 'வணக்கம் அனிதா மேம்! நயலி தமிழ் அகாடமி வகுப்புகள் பற்றி நான் பேச விரும்புகிறேன்.'
      : 'Hello Anitha Mam! I would like to speak regarding Tamil classes at Nayali Tamil Academy.'
  )}`;

  return (
    <section id="teacher" className="py-16 sm:py-24 bg-[#FFFDF7] dark:bg-[#120508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#7A1B28] dark:text-amber-400 uppercase">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] tracking-tight">
            {t.title}
          </h2>
        </div>

        {/* Profile Card Container */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-br from-[#FCF8F0] to-[#F5EBDD] dark:from-[#1C090E] dark:to-[#260C14] border border-[#ECD9C5] dark:border-[#421622] p-6 sm:p-10 shadow-xl relative overflow-hidden">
          {/* Subtle Background Motif */}
          <div className="absolute -right-10 -bottom-10 opacity-5 dark:opacity-10 pointer-events-none select-none text-9xl font-tamil font-bold text-[#7A1B28]">
            அ
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Styled Portrait Placeholder */}
            <div className="flex flex-col items-center shrink-0">
              <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-3xl bg-gradient-to-tr from-[#7A1B28] via-[#9E2033] to-amber-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-[22px] bg-[#FAF5EB] dark:bg-[#1F0A10] flex flex-col items-center justify-center text-center p-3 border border-amber-300/40">
                  <div className="w-16 h-16 rounded-full bg-[#7A1B28]/10 dark:bg-amber-400/10 flex items-center justify-center text-[#7A1B28] dark:text-amber-300 mb-2 font-tamil text-2xl font-bold">
                    அ
                  </div>
                  <span className="text-xs font-bold text-[#7A1B28] dark:text-amber-300">
                    {t.name}
                  </span>
                  <span className="text-[10px] text-[#7A5B62] dark:text-amber-200/60 leading-tight mt-0.5">
                    Lead Educator
                  </span>
                </div>
              </div>

              <div className="mt-3 text-[11px] font-medium text-[#7D5A62] dark:text-amber-200/60 text-center max-w-[180px] italic">
                {t.placeholderNote}
              </div>
            </div>

            {/* Profile Bio & Strengths */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/50 text-[#7A1B28] dark:text-amber-300 font-bold text-xs mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.experienceBadge}</span>
              </div>

              <h3 className="text-3xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] mb-1">
                {t.name}
              </h3>
              <p className="text-sm font-semibold text-[#7A1B28] dark:text-amber-400 mb-4 font-tamil">
                {t.role}
              </p>

              <p className="text-sm sm:text-base text-[#57353C] dark:text-[#D1B8BF] leading-relaxed mb-6">
                {t.bio}
              </p>

              {/* Quote Block */}
              <div className="p-4 rounded-2xl bg-white/80 dark:bg-[#18070C]/80 border-l-4 border-amber-500 mb-6 text-sm italic text-[#441F26] dark:text-amber-200/90 font-medium font-tamil">
                {t.quotes[0]}
              </div>

              {/* 4 Strengths Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {t.strengths.map((str, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#38121B] text-left"
                  >
                    <div className="font-bold text-xs text-[#7A1B28] dark:text-amber-400 mb-0.5">
                      {str.label}
                    </div>
                    <div className="text-[11px] text-[#694B52] dark:text-[#BF9FA7] leading-tight">
                      {str.desc}
                    </div>
                  </div>
                ))}
              </div>

              {/* Direct WhatsApp Call to Anitha Mam */}
              <a
                href={directChatUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-5 py-2.5 rounded-xl shadow-md text-xs sm:text-sm transition-transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>
                  {language === 'ta'
                    ? 'அனிதா மேமுடன் வாட்ஸ்அப்பில் உரையாட'
                    : 'Chat Directly with Anitha Mam'}
                </span>
              </a>
            </div>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
