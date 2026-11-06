'use client';

import React from 'react';
import { Star, MessageCircle, Phone, Sparkles, CheckCircle2, MapPin, Globe } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface HeroProps {
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = DICTIONARY[language].hero;

  const defaultWhatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    language === 'ta'
      ? 'வணக்கம் நயலி தமிழ் அகாடமி! எனக்கு இலவச மாதிரி வகுப்பு (Free Demo Class) பற்றிய விவரங்கள் தேவை.'
      : 'Hello Nayali Tamil Academy! I would like to book a Free Demo Class for Tamil tuition.'
  )}`;

  return (
    <section className="relative overflow-hidden pt-8 pb-16 sm:pt-14 sm:pb-24 bg-gradient-to-b from-[#FFFDF7] via-[#FCF7ED] to-[#FFFDF7] dark:from-[#140609] dark:via-[#1E090F] dark:to-[#140609] bg-kolam-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#7A1B28]/10 dark:bg-amber-400/15 border border-[#7A1B28]/25 dark:border-amber-400/30 text-[#7A1B28] dark:text-amber-300 text-xs sm:text-sm font-semibold mb-6 shadow-xs animate-in fade-in slide-in-from-bottom-2 duration-500">
            <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
            <span>{t.badge}</span>
          </div>

          {/* Tamil Calligraphy Subtitle */}
          <div className="mb-3">
            <span className="font-tamil text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#7A1B28] via-[#B92B3E] to-[#D97706] dark:from-amber-300 dark:via-amber-400 dark:to-orange-400 drop-shadow-xs">
              {t.tamilSubtitle}
            </span>
          </div>

          {/* Primary Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-[#290E14] dark:text-[#FDF8F0] tracking-tight leading-[1.12] sm:leading-[1.15] mb-6">
            <span className="text-[#7A1B28] dark:text-amber-400 underline decoration-amber-500/60 decoration-wavy decoration-2">
              {t.titleHighlight}
            </span>{' '}
            <span>{t.titleRest}</span>
          </h1>

          {/* Supporting Subtext */}
          <p className="text-base sm:text-xl text-[#57353C] dark:text-[#E2C7CE] max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed font-normal">
            {t.description}
          </p>

          {/* CTA Button Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-14">
            <a
              href={defaultWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-7 py-3.5 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>{t.whatsappCta}</span>
            </a>

            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#7A1B28] hover:bg-[#8F2030] dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-amber-950 font-bold px-6 py-3.5 rounded-2xl shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-base"
            >
              <Phone className="w-4 h-4" />
              <span>{t.callCta}</span>
            </a>
          </div>

          {/* Feature Highlights Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10 text-xs sm:text-sm font-medium text-[#502C33] dark:text-amber-200/90">
            {t.featureBadges.map((badge, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#F5EAD9] dark:bg-[#280F16] border border-[#DECAAF] dark:border-[#4B1C26] shadow-xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>{badge}</span>
              </span>
            ))}
          </div>

          {/* Trust Strip Card */}
          <div className="max-w-2xl mx-auto rounded-3xl bg-white/90 dark:bg-[#220B11]/90 backdrop-blur-md p-5 sm:p-6 shadow-xl border border-[#ECD9C5] dark:border-[#481823]">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#ECD9C5] dark:divide-[#481823]">
              {/* Google Rating */}
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="font-extrabold text-2xl text-[#2B1015] dark:text-amber-300">
                    5.0
                  </span>
                  <div className="flex text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-[#63454B] dark:text-amber-200/70 font-medium text-center">
                  78 Google Reviews • 100% Positive
                </span>
              </div>

              {/* Mode Availability */}
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <div className="flex items-center gap-1.5 mb-1 font-bold text-sm text-[#7A1B28] dark:text-amber-400">
                  <MapPin className="w-4 h-4 text-[#7A1B28] dark:text-amber-400" />
                  <span>Pallavaram Centre</span>
                </div>
                <span className="text-xs text-[#63454B] dark:text-amber-200/70 text-center">
                  Dharga Road • Safe, in-person classes
                </span>
              </div>

              {/* Global Online */}
              <div className="flex flex-col items-center justify-center px-2 py-1">
                <div className="flex items-center gap-1.5 mb-1 font-bold text-sm text-emerald-700 dark:text-emerald-400">
                  <Globe className="w-4 h-4" />
                  <span>Live Online Worldwide</span>
                </div>
                <span className="text-xs text-[#63454B] dark:text-amber-200/70 text-center">
                  USA • UAE • Singapore • All India
                </span>
              </div>
            </div>
          </div>

          <KolamDivider variant="center" className="mt-8" />
        </div>
      </div>
    </section>
  );
};
