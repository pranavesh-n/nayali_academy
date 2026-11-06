'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, Check, Play, ArrowRight } from 'lucide-react';
import { Language, TamilAudioWord } from '@/types';
import { KolamDivider } from './KolamDivider';

interface TamilAudioSamplerProps {
  language: Language;
}

const SAMPLE_WORDS: TamilAudioWord[] = [
  {
    id: 'vanakkam',
    letter: 'வ',
    tamilWord: 'வணக்கம்',
    englishTranslit: 'Va-nak-kam',
    meaningEn: 'Greetings / Hello (A respectful, timeless Tamil greeting)',
    meaningTa: 'தமிழரின் பாரம்பரிய மரியாதை கலந்த முகமன்',
    category: 'daily',
    audioFreq: 520,
  },
  {
    id: 'amma',
    letter: 'அ',
    tamilWord: 'அம்மா',
    englishTranslit: 'Am-ma',
    meaningEn: 'Mother (The purest, sweetest first word in Tamil)',
    meaningTa: 'தமிழுக்கும் உலகிற்கும் முதல் சொல் — அன்னை',
    category: 'vowel',
    audioFreq: 440,
  },
  {
    id: 'thamizh',
    letter: 'ழ',
    tamilWord: 'தமிழ்',
    englishTranslit: 'Tha-mizh',
    meaningEn: 'Tamil (Sweetness, nectar, and our classical mother tongue)',
    meaningTa: 'இனிமை, அமுதம் மற்றும் நம் செம்மொழி',
    category: 'daily',
    audioFreq: 587,
  },
  {
    id: 'nandri',
    letter: 'ந',
    tamilWord: 'நன்றி',
    englishTranslit: 'Nan-dri',
    meaningEn: 'Thank You (Gratitude from the bottom of the heart)',
    meaningTa: 'உள்ளத்து நற்பண்பை உணர்த்தும் நன்றி நவிலல்',
    category: 'daily',
    audioFreq: 659,
  },
  {
    id: 'anbu',
    letter: 'அ',
    tamilWord: 'அன்பு',
    englishTranslit: 'An-bu',
    meaningEn: 'Love / Kindness (The guiding philosophy of Tamil poetry)',
    meaningTa: 'அன்பே சிவம் — அறமும் கருணையும்',
    category: 'vowel',
    audioFreq: 494,
  },
  {
    id: 'magizhchi',
    letter: 'ம',
    tamilWord: 'மகிழ்ச்சி',
    englishTranslit: 'Ma-gizh-chi',
    meaningEn: 'Joy / Happiness (What our students feel in every class)',
    meaningTa: 'கற்றலில் மலரும் பேரானந்தம்',
    category: 'daily',
    audioFreq: 698,
  },
];

export const TamilAudioSampler: React.FC<TamilAudioSamplerProps> = ({ language }) => {
  const [selectedWord, setSelectedWord] = useState<TamilAudioWord>(SAMPLE_WORDS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const playPronunciation = (word: TamilAudioWord) => {
    setSelectedWord(word);
    setIsPlaying(true);

    // 1. Try SpeechSynthesis with Tamil voice
    let spoken = false;
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      try {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(word.tamilWord);
        utterance.lang = 'ta-IN';
        utterance.rate = 0.85; // clear and gentle for learning
        utterance.pitch = 1.05;

        utterance.onend = () => setIsPlaying(false);
        utterance.onerror = () => setIsPlaying(false);

        window.speechSynthesis.speak(utterance);
        spoken = true;
      } catch {
        spoken = false;
      }
    }

    // 2. Harmonious Web Audio tone fallback if synthesis is muted/unavailable
    if (typeof window !== 'undefined' && 'AudioContext' in window) {
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioCtx();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(word.audioFreq || 440, ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime((word.audioFreq || 440) * 1.25, ctx.currentTime + 0.35);

        gain.gain.setValueAtTime(0.12, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      } catch {
        // Ignore audio errors
      }
    }

    if (!spoken) {
      setTimeout(() => setIsPlaying(false), 600);
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-[#FCF8F0] to-[#FFFDF7] dark:from-[#18070C] dark:to-[#120508] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-950/70 border border-amber-300 dark:border-amber-700/50 text-[#7A1B28] dark:text-amber-300 font-bold text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {language === 'ta' ? 'ஊடாடும் ஒலிப் பயிற்சி' : 'Interactive Audio Sampler'}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] tracking-tight">
            {language === 'ta'
              ? 'உங்கள் முதல் தமிழ் சொல்லை இப்போதே உச்சரித்துப் பாருங்கள்!'
              : 'Try Speaking Your First Tamil Words in Seconds'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F3C43] dark:text-[#D1B8BF] leading-relaxed">
            {language === 'ta'
              ? 'கீழே உள்ள சொற்களைத் தொட்டு, சரியான உச்சரிப்பையும் அதன் எழில்மிகு பொருளையும் உணருங்கள்.'
              : 'Tap any card below to hear authentic native pronunciation, phonetics, and cultural meaning.'}
          </p>
        </div>

        {/* Interactive Workspace Card */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-[#1E090F] border-2 border-[#ECD9C5] dark:border-[#421622] p-6 sm:p-10 shadow-xl">
          {/* Top Word Pills */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 sm:gap-3 mb-8">
            {SAMPLE_WORDS.map((item) => {
              const isSelected = selectedWord.id === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => playPronunciation(item)}
                  className={`p-3 rounded-2xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-[#7A1B28] dark:bg-amber-400 text-white dark:text-amber-950 border-transparent shadow-md scale-103'
                      : 'bg-[#FCF8F0] dark:bg-[#280F16] text-[#4A1D25] dark:text-[#EEDDD2] border-[#ECD9C5] dark:border-[#441823] hover:border-amber-500'
                  }`}
                >
                  <span className="font-tamil font-extrabold text-lg sm:text-xl leading-tight">
                    {item.tamilWord}
                  </span>
                  <span
                    className={`text-[10px] font-mono mt-1 ${
                      isSelected
                        ? 'text-amber-200 dark:text-amber-950 font-bold'
                        : 'text-[#845F67] dark:text-amber-200/60'
                    }`}
                  >
                    {item.englishTranslit}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Word Focus Showcase */}
          <div className="rounded-2xl p-6 sm:p-8 bg-gradient-to-br from-[#FCF7ED] via-white to-[#FAF4EA] dark:from-[#250C13] dark:via-[#1D080E] dark:to-[#220B11] border border-[#ECD9C5] dark:border-[#421622] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left flex-1">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-2">
                <span className="text-4xl sm:text-5xl font-extrabold font-tamil text-[#7A1B28] dark:text-amber-400">
                  {selectedWord.tamilWord}
                </span>

                {/* Animated Waveform Visualizer */}
                {isPlaying && (
                  <div className="flex items-center gap-1 h-6">
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-3 rounded-full" />
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-6 rounded-full" />
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-4 rounded-full" />
                    <span className="w-1 bg-[#7A1B28] dark:bg-amber-400 animate-pulse h-5 rounded-full" />
                  </div>
                )}
              </div>

              <div className="inline-block font-mono text-xs font-bold px-2.5 py-0.5 rounded-md bg-amber-100 dark:bg-amber-950/80 text-[#7A1B28] dark:text-amber-300 border border-amber-300/40 mb-3">
                Phonetics: /{selectedWord.englishTranslit}/
              </div>

              <p className="text-sm sm:text-base font-medium text-[#482229] dark:text-[#E8D4DC] leading-relaxed">
                {language === 'ta' ? selectedWord.meaningTa : selectedWord.meaningEn}
              </p>
            </div>

            {/* Play Button & Demo Prompt */}
            <div className="flex flex-col items-center gap-3 shrink-0">
              <button
                onClick={() => playPronunciation(selectedWord)}
                aria-label={`Listen to pronunciation of ${selectedWord.tamilWord}`}
                className="w-16 h-16 rounded-full bg-[#7A1B28] hover:bg-[#8F2030] dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-amber-950 flex items-center justify-center shadow-lg hover:shadow-xl transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Volume2 className="w-7 h-7" />
              </button>
              <span className="text-[11px] font-bold text-[#7A1B28] dark:text-amber-300">
                {language === 'ta' ? 'மீண்டும் கேட்க' : 'Click to Listen'}
              </span>
            </div>
          </div>

          {/* Micro-Conversion Footer */}
          <div className="mt-6 pt-5 border-t border-[#ECD9C5] dark:border-[#38121B] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <span className="text-xs text-[#6F4A52] dark:text-amber-200/70">
              {language === 'ta'
                ? 'உங்கள் பிள்ளையும் முதல் வகுப்பிலேயே சரளமாக பேசத் தொடங்குவர்.'
                : 'Every child begins speaking confidently from class one with Anitha Mam.'}
            </span>

            <a
              href="#registration"
              className="inline-flex items-center gap-1.5 text-xs font-extrabold text-[#7A1B28] dark:text-amber-400 hover:underline"
            >
              <span>{language === 'ta' ? 'இலவச வகுப்பில் சேர' : 'Experience a full live class'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
