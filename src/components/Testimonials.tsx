'use client';

/**
 * TESTIMONIALS SECTION
 * NOTE FOR OWNER / REVIEWER:
 * The parent and student testimonials below are representative placeholder reviews
 * drafted based on the core strengths of Nayali Tamil Academy (significant school score improvements,
 * patient teacher attitude, neat handwriting mastery, and well-organized batches).
 * Please replace these quotes and names with verified Google Reviews / parent permission upon official launch.
 */

import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote, Info, Volume2, Sparkles } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface TestimonialsProps {
  language: Language;
}

export const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [playingSnippet, setPlayingSnippet] = useState<boolean>(false);
  const t = DICTIONARY[language].testimonials;
  const items = t.items;

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
    setPlayingSnippet(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    setPlayingSnippet(false);
  };

  const current = items[currentIndex];

  const playStudentAudioSnippet = (textToRead: string) => {
    setPlayingSnippet(true);
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(textToRead);
        utterance.lang = 'ta-IN';
        utterance.rate = 0.9;
        utterance.pitch = 1.15; // sweet child pitch
        utterance.onend = () => setPlayingSnippet(false);
        utterance.onerror = () => setPlayingSnippet(false);
        window.speechSynthesis.speak(utterance);
      } catch {
        setPlayingSnippet(false);
      }
    } else {
      setTimeout(() => setPlayingSnippet(false), 1200);
    }
  };

  const snippetTexts: Record<string, string> = {
    '1': 'அகர முதல எழுத்தெல்லாம் ஆதி பகவன் முதற்றே உலகு.',
    '2': 'வணக்கம் தாத்தா, நலமாக இருக்கிறீர்களா? நான் தமிழில் பேசுகிறேன்!',
    '3': 'வணக்கம், எனக்கு தமிழ் பேசவும் படிக்கவும் மிகவும் பிடிக்கும்.',
    '4': 'யாதும் ஊரே யாவரும் கேளிர் தீதும் நன்றும் பிறர்தர வாரா.',
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#FCF8F0] dark:bg-[#18070C] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#7A1B28] dark:text-amber-400 uppercase">
            {t.eyebrow}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] tracking-tight">
            {t.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#5F3C43] dark:text-[#D1B8BF] leading-relaxed">
            {t.subtitle}
          </p>

          {/* Transparent Developer Disclaimer Badge */}
          <div className="mt-5 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-100/70 dark:bg-amber-950/40 border border-amber-300/60 dark:border-amber-800/40 text-[11px] text-[#6F491A] dark:text-amber-200/80 max-w-2xl text-left">
            <Info className="w-4 h-4 shrink-0 text-amber-700 dark:text-amber-400" />
            <span>{t.disclaimerNote}</span>
          </div>
        </div>

        {/* Carousel Card Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="rounded-3xl p-7 sm:p-12 bg-white dark:bg-[#200B12] border-2 border-[#ECD9C5] dark:border-[#421622] shadow-xl relative min-h-[320px] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                {/* Rating & Tag */}
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex text-amber-400">
                    {[...Array(current.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-500" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40">
                    {language === 'ta' ? current.tagTa : current.tagEn}
                  </span>
                </div>

                <Quote className="w-9 h-9 text-[#7A1B28]/20 dark:text-amber-400/20" />
              </div>

              {/* Testimonial Quote */}
              <blockquote className="text-base sm:text-xl font-medium text-[#38161E] dark:text-[#F3E5D8] leading-relaxed mb-6 font-tamil">
                “{language === 'ta' ? current.quoteTa : current.quoteEn}”
              </blockquote>

              {/* Student Audio Sample Player */}
              <div className="p-3.5 rounded-2xl bg-amber-50/80 dark:bg-[#280F16] border border-amber-300/50 dark:border-[#4B1A26] flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      playStudentAudioSnippet(snippetTexts[current.id] || 'தமிழ் வாழ்க')
                    }
                    className="w-10 h-10 rounded-full bg-[#7A1B28] dark:bg-amber-400 text-white dark:text-amber-950 flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer shrink-0"
                    aria-label="Listen to student speech recording sample"
                  >
                    <Volume2 className="w-5 h-5" />
                  </button>
                  <div>
                    <div className="text-xs font-bold text-[#7A1B28] dark:text-amber-300">
                      {language === 'ta' ? 'மாணவரின் குரல் பதிவு மாதிரி' : 'Student Speech Sample'}
                    </div>
                    <div className="text-[11px] font-tamil text-[#684950] dark:text-[#C5A7B0] truncate max-w-[200px] sm:max-w-sm">
                      “{snippetTexts[current.id]}”
                    </div>
                  </div>
                </div>

                {playingSnippet && (
                  <div className="flex items-center gap-1">
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-4 rounded-full" />
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-6 rounded-full" />
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-3 rounded-full" />
                  </div>
                )}
              </div>
            </div>

            {/* Author Info & Highlight */}
            <div className="pt-6 border-t border-[#ECD9C5] dark:border-[#38121B] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="font-bold text-base text-[#290E14] dark:text-[#FAF4ED]">
                  {current.name}
                </h4>
                <p className="text-xs text-[#6F4B52] dark:text-amber-200/70">
                  {language === 'ta' ? current.relationTa : current.relationEn} •{' '}
                  <span className="font-medium">
                    {language === 'ta' ? current.locationTa : current.locationEn}
                  </span>
                </p>
              </div>

              <div className="text-xs font-bold px-3 py-1 rounded-xl bg-amber-100 dark:bg-amber-950/80 text-[#7A1B28] dark:text-amber-300 border border-amber-300/50">
                ✨ {language === 'ta' ? current.highlightTa : current.highlightEn}
              </div>
            </div>
          </div>

          {/* Controls: Prev / Next Buttons & Indicators */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={handlePrev}
              aria-label="Previous review"
              className="p-3 rounded-full bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#421622] text-[#7A1B28] dark:text-amber-400 hover:bg-[#7A1B28] hover:text-white dark:hover:bg-amber-400 dark:hover:text-amber-950 transition-colors shadow-md cursor-pointer"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex items-center gap-2">
              {items.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setCurrentIndex(idx);
                    setPlayingSnippet(false);
                  }}
                  aria-label={`Go to review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    currentIndex === idx
                      ? 'w-8 bg-[#7A1B28] dark:bg-amber-400'
                      : 'w-2.5 bg-[#D6C1AE] dark:bg-[#3D141E]'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              aria-label="Next review"
              className="p-3 rounded-full bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#421622] text-[#7A1B28] dark:text-amber-400 hover:bg-[#7A1B28] hover:text-white dark:hover:bg-amber-400 dark:hover:text-amber-950 transition-colors shadow-md cursor-pointer"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
