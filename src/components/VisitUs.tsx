'use client';

import React, { useState, useEffect } from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';
import { getAcademyStatus, AcademyStatus } from '@/lib/time';
import { KolamDivider } from './KolamDivider';

interface VisitUsProps {
  language: Language;
}

export const VisitUs: React.FC<VisitUsProps> = ({ language }) => {
  const t = DICTIONARY[language].visit;
  const [status, setStatus] = useState<AcademyStatus | null>(null);

  useEffect(() => {
    setStatus(getAcademyStatus());
    const interval = setInterval(() => {
      setStatus(getAcademyStatus());
    }, 60000); // refresh every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="visit" className="py-16 sm:py-24 bg-[#FFFDF7] dark:bg-[#120508] relative">
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          {/* Info Card (5 Cols) */}
          <div className="lg:col-span-5 rounded-3xl bg-[#FCF8F0] dark:bg-[#1C090E] border border-[#ECD9C5] dark:border-[#3F1620] p-6 sm:p-8 shadow-lg space-y-6">
            {/* Live IST Status Indicator Badge */}
            <div
              className={`p-4 rounded-2xl border transition-all ${
                status?.isOpen
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200'
                  : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-950 dark:text-amber-200'
              }`}
            >
              <div className="flex items-center gap-2 mb-1">
                <span
                  className={`w-3 h-3 rounded-full ${
                    status?.isOpen
                      ? 'bg-emerald-500 animate-pulse'
                      : 'bg-amber-500'
                  }`}
                />
                <span className="font-extrabold text-sm sm:text-base">
                  {language === 'ta'
                    ? status?.statusLabelTa || 'திறந்துள்ளது'
                    : status?.statusLabelEn || 'Open Now'}
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-black/5 dark:bg-white/10 ml-auto">
                  IST (UTC+5:30)
                </span>
              </div>
              <p className="text-xs leading-relaxed opacity-90">
                {language === 'ta' ? status?.detailTa : status?.detailEn}
              </p>
            </div>

            {/* Address Details */}
            <div>
              <div className="flex items-center gap-2 font-bold text-sm text-[#7A1B28] dark:text-amber-400 mb-2">
                <MapPin className="w-4 h-4 shrink-0" />
                <span>{t.addressCardTitle}</span>
              </div>
              <p className="text-sm font-medium text-[#2F1218] dark:text-[#F3E5D8] leading-relaxed">
                {BUSINESS_INFO.address}
              </p>
              <p className="text-xs text-[#735158] dark:text-amber-200/70 mt-1">
                {language === 'ta' ? BUSINESS_INFO.landmarkTa : BUSINESS_INFO.landmarkEn}
              </p>
            </div>

            {/* Operating Hours Details */}
            <div className="pt-4 border-t border-[#ECD9C5] dark:border-[#38141E]">
              <div className="flex items-center gap-2 font-bold text-sm text-[#7A1B28] dark:text-amber-400 mb-2">
                <Clock className="w-4 h-4 shrink-0" />
                <span>{t.operatingHoursTitle}</span>
              </div>
              <ul className="text-xs sm:text-sm space-y-1.5 text-[#4D2830] dark:text-[#DEC8CF]">
                <li className="flex justify-between">
                  <span className="font-semibold">
                    {language === 'ta' ? 'திங்கள் – சனி:' : 'Monday – Saturday:'}
                  </span>
                  <span>5:00 AM – 9:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span className="font-semibold">
                    {language === 'ta' ? 'ஞாயிறு:' : 'Sunday:'}
                  </span>
                  <span>10:00 AM – 9:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Amenities list */}
            <div className="pt-4 border-t border-[#ECD9C5] dark:border-[#38141E] space-y-2">
              {t.amenities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs text-[#502C33] dark:text-[#C5A7B0]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#ECD9C5] dark:border-[#38141E] flex flex-col sm:flex-row gap-2.5">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#7A1B28] hover:bg-[#8F2030] dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-amber-950 font-bold text-xs shadow-md transition-colors"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>{t.directionsBtn}</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-[#2A0E17] border border-[#DECABB] dark:border-[#4B1A26] text-[#7A1B28] dark:text-amber-300 font-bold text-xs hover:bg-[#F3E7D5] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>{t.callBtn}</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Embed (7 Cols) */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-[#ECD9C5] dark:border-[#3F1620] shadow-xl bg-white dark:bg-[#1E090F] h-[400px] sm:h-[480px] relative">
            <iframe
              src={BUSINESS_INFO.googleMapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Nayali Tamil Academy Google Maps Location"
              className="w-full h-full grayscale-[25%] contrast-[1.05]"
            />
            
            {/* Quick Map Overlay Button */}
            <div className="absolute bottom-4 right-4 z-10">
              <a
                href={BUSINESS_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-white/95 dark:bg-[#1E090F]/95 text-[#7A1B28] dark:text-amber-300 font-bold text-xs shadow-lg border border-[#ECD9C5] dark:border-[#421622] hover:bg-[#FFFDF7] transition-all"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span>Open in Google Maps App</span>
              </a>
            </div>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
