'use client';

import React from 'react';
import { Phone, MessageCircle, Sparkles } from 'lucide-react';
import { Language } from '@/types';
import { BUSINESS_INFO } from '@/lib/dictionary';

interface MobileBottomBarProps {
  language: Language;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({ language }) => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    language === 'ta'
      ? 'வணக்கம் நயலி தமிழ் அகாடமி! எனக்கு இலவச மாதிரி வகுப்பு மற்றும் கட்டண விவரங்கள் தேவை.'
      : 'Hello Nayali Tamil Academy! I would like to inquire about Tamil tuition and book a Free Demo.'
  )}`;

  return (
    <div
      aria-label="Mobile quick action bar"
      className="md:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 dark:bg-[#1A080D]/95 backdrop-blur-lg border-t border-[#ECD9C5] dark:border-[#3E1520] shadow-[0_-4px_20px_rgba(0,0,0,0.1)] px-3 py-2 pb-[max(0.5rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2">
        {/* 1. Quick Call */}
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          aria-label="Call Nayali Tamil Academy"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-[#FCF7EE] dark:bg-[#250C13] border border-[#ECD9C5] dark:border-[#421622] text-[#7A1B28] dark:text-amber-300 active:scale-95 transition-transform"
        >
          <Phone className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-bold">
            {language === 'ta' ? 'அழைக்க' : 'Call'}
          </span>
        </a>

        {/* 2. WhatsApp Direct */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-300 active:scale-95 transition-transform"
        >
          <MessageCircle className="w-4 h-4 mb-0.5 fill-current" />
          <span className="text-[11px] font-bold">WhatsApp</span>
        </a>

        {/* 3. Primary Free Demo CTA */}
        <a
          href="#registration"
          aria-label="Book a Free Demo Class"
          className="flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-amber-950 font-extrabold shadow-sm active:scale-95 transition-transform"
        >
          <Sparkles className="w-4 h-4 mb-0.5" />
          <span className="text-[11px] font-extrabold whitespace-nowrap">
            {language === 'ta' ? 'டெமோ' : 'Free Demo'}
          </span>
        </a>
      </div>
    </div>
  );
};
