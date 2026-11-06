import React from 'react';

interface KolamDividerProps {
  className?: string;
  variant?: 'line' | 'center' | 'corner';
}

export const KolamDivider: React.FC<KolamDividerProps> = ({
  className = '',
  variant = 'center',
}) => {
  if (variant === 'center') {
    return (
      <div
        className={`flex items-center justify-center gap-3 py-6 my-2 ${className}`}
        aria-hidden="true"
      >
        <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-r from-transparent via-[#7A1B28]/40 dark:via-[#F59E0B]/40 to-[#7A1B28]/80 dark:to-[#F59E0B]/80" />
        
        {/* Authentic single-stroke geometric Sikku Kolam / Lotus knot motif */}
        <svg
          width="42"
          height="28"
          viewBox="0 0 42 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[#7A1B28] dark:text-[#F59E0B] opacity-80"
        >
          {/* Central floral loop */}
          <path
            d="M21 4 C24 10, 32 10, 32 14 C32 18, 24 18, 21 24 C18 18, 10 18, 10 14 C10 10, 18 10, 21 4 Z"
            stroke="currentColor"
            strokeWidth="1.3"
            fill="none"
          />
          {/* Inner petal accents */}
          <circle cx="21" cy="14" r="2.2" fill="currentColor" />
          <circle cx="13" cy="14" r="1.4" fill="currentColor" opacity="0.6" />
          <circle cx="29" cy="14" r="1.4" fill="currentColor" opacity="0.6" />
          {/* Subtle wing lines */}
          <path
            d="M4 14 C7 11, 8 17, 11 14"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <path
            d="M38 14 C35 11, 34 17, 31 14"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </svg>

        <span className="h-[1px] w-12 sm:w-24 bg-gradient-to-l from-transparent via-[#7A1B28]/40 dark:via-[#F59E0B]/40 to-[#7A1B28]/80 dark:to-[#F59E0B]/80" />
      </div>
    );
  }

  // Linear decorative Kolam ribbon border
  return (
    <div className={`w-full overflow-hidden flex justify-center py-2 ${className}`} aria-hidden="true">
      <div className="h-[1.5px] w-full max-w-4xl bg-gradient-to-r from-transparent via-[#D97706]/50 dark:via-[#F59E0B]/50 to-transparent" />
    </div>
  );
};
