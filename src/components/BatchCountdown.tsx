'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Users, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '@/types';

interface BatchCountdownProps {
  language: Language;
}

export const BatchCountdown: React.FC<BatchCountdownProps> = ({ language }) => {
  const [mounted, setMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 28, seconds: 45 });

  useEffect(() => {
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: 59, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { days: 3, hours: 12, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 px-4">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#7A1B28] via-[#8C1F32] to-[#5B101C] p-3.5 sm:p-4 text-white shadow-lg border border-amber-400/30">
        {/* Decorative corner glow */}
        <div className="absolute -right-8 -bottom-8 w-28 h-28 bg-amber-400/20 rounded-full blur-xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          {/* Badge & Notice */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:flex w-10 h-10 rounded-xl bg-amber-400/20 border border-amber-400/40 items-center justify-center text-amber-300 shrink-0">
              <Calendar className="w-5 h-5" />
            </span>
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                  {language === 'ta' ? 'அடுத்த புதிய தொகுதி சேர்க்கை' : 'Upcoming Cohort Admissions'}
                </span>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-200 border border-amber-300/30">
                  {language === 'ta' ? '3 இடங்கள் மட்டுமே' : 'Only 3 Seats Left'}
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-white/95 mt-0.5 font-tamil">
                {language === 'ta'
                  ? 'திங்கள் கிழமை புதிய வகுப்புகள் தொடங்குகின்றன • பல்லாவரம் மையம் & இணையவழி'
                  : 'New Batches Begin This Monday • Pallavaram Classroom & Global Online'}
              </p>
            </div>
          </div>

          {/* Countdown & Quick Action */}
          <div className="flex items-center gap-3">
            {mounted ? (
              <div className="flex items-center gap-1.5 font-mono text-xs sm:text-sm font-extrabold text-amber-200 bg-black/25 px-3 py-1.5 rounded-xl border border-white/10">
                <div className="text-center">
                  <span className="text-white">{String(timeLeft.days).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-amber-300 font-sans">{language === 'ta' ? 'நாள்' : 'd'}</span>
                </div>
                <span>:</span>
                <div className="text-center">
                  <span className="text-white">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-amber-300 font-sans">{language === 'ta' ? 'மணி' : 'h'}</span>
                </div>
                <span>:</span>
                <div className="text-center">
                  <span className="text-white">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-amber-300 font-sans">{language === 'ta' ? 'நிமி' : 'm'}</span>
                </div>
                <span>:</span>
                <div className="text-center">
                  <span className="text-white">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="text-[9px] block text-amber-300 font-sans">{language === 'ta' ? 'விநா' : 's'}</span>
                </div>
              </div>
            ) : (
              <div className="text-xs text-amber-200">Register Today</div>
            )}

            <a
              href="#registration"
              className="inline-flex items-center gap-1 bg-amber-400 hover:bg-amber-300 text-amber-950 font-bold px-3 py-2 rounded-xl text-xs transition-transform hover:scale-105 shadow-sm whitespace-nowrap"
            >
              <span>{language === 'ta' ? 'இடத்தை உறுதி செய்க' : 'Claim Slot'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
