'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { Language } from '@/types';
import { BUSINESS_INFO } from '@/lib/dictionary';

interface FloatingWhatsAppProps {
  language: Language;
}

export const FloatingWhatsApp: React.FC<FloatingWhatsAppProps> = ({ language }) => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultWhatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
    language === 'ta'
      ? 'வணக்கம் நயலி தமிழ் அகாடமி! எனக்கு தமிழ் வகுப்புகள் மற்றும் இலவச மாதிரி வகுப்பு பற்றிய விவரங்கள் தேவை.'
      : 'Hello Nayali Tamil Academy! I would like to know about Tamil classes and book a Free Demo Class.'
  )}`;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 9000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside
      aria-label="WhatsApp quick chat"
      className="hidden md:flex fixed bottom-6 right-6 z-40 items-end gap-2.5"
    >
      {/* Friendly Tooltip Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 p-3 rounded-2xl bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#421622] shadow-2xl text-xs max-w-[210px] animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex-1">
            <p className="font-bold text-[#7A1B28] dark:text-amber-400">
              {language === 'ta' ? 'உடனடி உதவி' : 'Chat with us!'}
            </p>
            <p className="text-[11px] text-[#614147] dark:text-[#C5A7B0] leading-tight mt-0.5">
              {language === 'ta'
                ? 'அனிதா மேமுடன் வாட்ஸ்அப்பில் பேச இங்கே கிளிக் செய்க.'
                : 'Click to message Anitha Mam directly on WhatsApp.'}
            </p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Close tooltip"
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 cursor-pointer p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={defaultWhatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Nayali Tamil Academy on WhatsApp"
        className="relative group w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white flex items-center justify-center shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-108 active:scale-95 focus:outline-none focus:ring-4 focus:ring-emerald-300 cursor-pointer"
      >
        {/* Pulsing Green Halo */}
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping" />

        {/* WhatsApp Icon */}
        <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 fill-current relative z-10" />

        {/* Active Online Notification Badge */}
        <span className="absolute top-1 right-1 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white dark:border-[#200B12] z-20" />
      </a>
    </aside>
  );
};
