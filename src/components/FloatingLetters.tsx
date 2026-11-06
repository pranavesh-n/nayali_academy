'use client';

import React from 'react';

interface LetterConfig {
  char: string;
  top: string;
  left: string;
  size: string;
  opacity: string;
  delay: string;
  duration: string;
  rotate: string;
}

const LETTERS: LetterConfig[] = [
  { char: 'அ', top: '8%', left: '4%', size: 'text-5xl sm:text-7xl', opacity: 'opacity-10 dark:opacity-15', delay: '0s', duration: '14s', rotate: '-6deg' },
  { char: 'ஆ', top: '18%', left: '88%', size: 'text-6xl sm:text-8xl', opacity: 'opacity-10 dark:opacity-15', delay: '2s', duration: '16s', rotate: '8deg' },
  { char: 'இ', top: '38%', left: '6%', size: 'text-4xl sm:text-6xl', opacity: 'opacity-10 dark:opacity-15', delay: '4s', duration: '18s', rotate: '-4deg' },
  { char: 'ஈ', top: '48%', left: '92%', size: 'text-5xl sm:text-7xl', opacity: 'opacity-10 dark:opacity-15', delay: '1s', duration: '15s', rotate: '12deg' },
  { char: 'உ', top: '65%', left: '3%', size: 'text-5xl sm:text-7xl', opacity: 'opacity-10 dark:opacity-15', delay: '3s', duration: '17s', rotate: '-8deg' },
  { char: 'ஊ', top: '78%', left: '86%', size: 'text-6xl sm:text-8xl', opacity: 'opacity-10 dark:opacity-15', delay: '5s', duration: '19s', rotate: '6deg' },
  { char: 'ஐ', top: '90%', left: '8%', size: 'text-4xl sm:text-6xl', opacity: 'opacity-10 dark:opacity-15', delay: '2.5s', duration: '14s', rotate: '-10deg' },
  { char: 'ஔ', top: '92%', left: '90%', size: 'text-5xl sm:text-7xl', opacity: 'opacity-10 dark:opacity-15', delay: '4.5s', duration: '16s', rotate: '5deg' },
];

export const FloatingLetters: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 overflow-hidden select-none z-0"
    >
      {LETTERS.map((item, idx) => (
        <div
          key={idx}
          className={`absolute font-tamil font-bold text-[#7A1B28] dark:text-[#F59E0B] transition-transform ${item.size} ${item.opacity}`}
          style={{
            top: item.top,
            left: item.left,
            transform: `rotate(${item.rotate})`,
            animation: `floatGlyph ${item.duration} ease-in-out infinite alternate`,
            animationDelay: item.delay,
          }}
        >
          {item.char}
        </div>
      ))}

      <style jsx global>{`
        @keyframes floatGlyph {
          0% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-16px) rotate(4deg);
          }
          100% {
            transform: translateY(12px) rotate(-3deg);
          }
        }
      `}</style>
    </div>
  );
};
