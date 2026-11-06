'use client';

import React from 'react';
import { Check, MessageCircle, Sparkles, HelpCircle } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface PricingProps {
  language: Language;
}

export const Pricing: React.FC<PricingProps> = ({ language }) => {
  const t = DICTIONARY[language].pricing;

  const getInquiryUrl = (planName: string) => {
    const text =
      language === 'ta'
        ? `வணக்கம் நயலி தமிழ் அகாடமி! நான் "${planName}" திட்டத்தின் கட்டண விவரங்கள் மற்றும் நேரங்களை அறிய விரும்புகிறேன்.`
        : `Hello Nayali Tamil Academy! I would like to inquire about fee details and class schedules for "${planName}".`;
    return `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="py-16 sm:py-24 bg-[#FFFDF7] dark:bg-[#120508] relative">
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

          <p className="mt-3 text-xs text-[#8A6770] dark:text-amber-200/60 max-w-xl mx-auto italic">
            {t.placeholderDisclaimer}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {t.plans.map((plan) => {
            const planName = language === 'ta' ? plan.nameTa : plan.nameEn;
            const planDesc = language === 'ta' ? plan.descriptionTa : plan.descriptionEn;
            const priceNote = language === 'ta' ? plan.priceNoteTa : plan.priceNoteEn;
            const badge = language === 'ta' ? plan.badgeTa : plan.badgeEn;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-b from-[#FCF7ED] via-white to-[#FCF8F0] dark:from-[#250C13] dark:via-[#1D080E] dark:to-[#220B11] border-2 border-[#7A1B28] dark:border-amber-400 shadow-2xl scale-102 lg:-translate-y-2'
                    : 'bg-[#FCF8F0] dark:bg-[#1C090E] border border-[#ECD9C5] dark:border-[#3F1620] shadow-md hover:shadow-xl'
                }`}
              >
                {/* Popular Pill */}
                {badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span
                      className={`inline-flex items-center gap-1 text-xs font-extrabold px-3.5 py-1 rounded-full shadow-md ${
                        plan.popular
                          ? 'bg-[#7A1B28] text-white dark:bg-amber-400 dark:text-amber-950'
                          : 'bg-[#EAD6C0] text-[#552A32] dark:bg-[#34141E] dark:text-amber-200'
                      }`}
                    >
                      <Sparkles className="w-3 h-3" />
                      <span>{badge}</span>
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-2xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] mb-2 mt-2">
                    {planName}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C3B42] dark:text-[#C5A7B0] leading-relaxed mb-6 min-h-[40px]">
                    {planDesc}
                  </p>

                  {/* Placeholder Fee Tag */}
                  <div className="p-4 rounded-2xl bg-white dark:bg-[#280F16] border border-[#E8D7C4] dark:border-[#4B1C26] mb-6">
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-3xl font-extrabold text-[#7A1B28] dark:text-amber-400">
                        ₹ XXX
                      </span>
                      <span className="text-xs font-semibold text-[#7E5D65] dark:text-amber-200/70">
                        / {language === 'ta' ? 'மாதம்' : 'month'}
                      </span>
                    </div>
                    <div className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400">
                      ✓ {priceNote}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 dark:bg-emerald-950/70 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-emerald-700 dark:text-emerald-300" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-[#411C23] dark:text-[#EEDDD2]">
                          {language === 'ta' ? feat.textTa : feat.textEn}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Inquire on WhatsApp CTA */}
                <a
                  href={getInquiryUrl(planName)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl font-bold text-sm shadow-md transition-all ${
                    plan.popular
                      ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                      : 'bg-[#7A1B28] hover:bg-[#8F2030] dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-amber-950'
                  }`}
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>
                    {language === 'ta'
                      ? 'கட்டணத்தை வாட்ஸ்அப்பில் அறிய'
                      : 'Inquire on WhatsApp'}
                  </span>
                </a>
              </div>
            );
          })}
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
