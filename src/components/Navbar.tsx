'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Phone, Sparkles } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';

interface NavbarProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  language,
  onLanguageChange,
  isDark,
  onThemeToggle,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const t = DICTIONARY[language].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#offers', label: t.offers },
    { href: '#path', label: t.path },
    { href: '#audience', label: t.audience },
    { href: '#compare', label: t.compare },
    { href: '#teacher', label: t.teacher },
    { href: '#testimonials', label: t.testimonials },
    { href: '#pricing', label: t.pricing },
    { href: '#visit', label: t.visit },
    { href: '#faq', label: t.faq },
  ];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FFFDF7]/95 dark:bg-[#15060A]/95 backdrop-blur-md shadow-md border-b border-[#EADAC7] dark:border-[#3D141C] py-2.5'
          : 'bg-[#FFFDF7]/80 dark:bg-[#15060A]/80 backdrop-blur-xs border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7A1B28] rounded-lg"
        >
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-[#7A1B28] to-[#992233] text-amber-200 flex items-center justify-center font-bold text-xl shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
            <span className="font-tamil">ந</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base md:text-lg tracking-tight text-[#7A1B28] dark:text-amber-400 leading-tight">
              Nayali Tamil Academy
            </span>
            <span className="text-[10px] sm:text-xs font-tamil text-[#6E4E54] dark:text-amber-200/70 font-medium">
              நயலி தமிழ் மையம் • பல்லாவரம்
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-2 text-[13px] font-medium text-[#4D242C] dark:text-amber-100/90">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg hover:text-[#7A1B28] dark:hover:text-amber-300 hover:bg-[#7A1B28]/8 dark:hover:bg-amber-400/10 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Language, Dark Mode, Free Demo Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Language Toggle */}
          <div className="flex items-center bg-[#F3E7D5] dark:bg-[#2A1017] p-0.5 sm:p-1 rounded-full border border-[#D8C0A6] dark:border-[#4B1B26]">
            <button
              onClick={() => onLanguageChange('en')}
              className={`px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                language === 'en'
                  ? 'bg-[#7A1B28] text-white shadow-xs'
                  : 'text-[#5E3940] dark:text-amber-200/80 hover:text-[#7A1B28]'
              }`}
              title="English"
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              onClick={() => onLanguageChange('ta')}
              className={`px-2 sm:px-2.5 py-1 rounded-full text-xs font-semibold font-tamil transition-all cursor-pointer ${
                language === 'ta'
                  ? 'bg-[#7A1B28] text-white shadow-xs'
                  : 'text-[#5E3940] dark:text-amber-200/80 hover:text-[#7A1B28]'
              }`}
              title="தமிழ்"
              aria-label="தமிழுக்கு மாற்றுக"
            >
              தமிழ்
            </button>
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={onThemeToggle}
            className="p-2 rounded-full text-[#7A1B28] dark:text-amber-300 hover:bg-[#F3E7D5] dark:hover:bg-[#2A1017] border border-[#D8C0A6] dark:border-[#4B1B26] transition-colors cursor-pointer"
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Call button for quick mobile access */}
          <a
            href={`tel:${BUSINESS_INFO.phoneRaw}`}
            className="hidden sm:flex items-center gap-1.5 text-xs font-semibold px-3 py-2 rounded-xl text-[#7A1B28] dark:text-amber-300 bg-[#7A1B28]/10 dark:bg-amber-400/10 hover:bg-[#7A1B28]/20 transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden md:inline">+91 91761 07775</span>
            <span className="md:hidden">Call</span>
          </a>

          {/* Primary Demo CTA button (shown on sm+; mobile has persistent bottom bar) */}
          <a
            href="#registration"
            className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-amber-950 font-semibold px-3.5 sm:px-4 py-2 rounded-xl text-xs sm:text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-900" />
            <span>{t.demoCta}</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-xl text-[#7A1B28] dark:text-amber-300 hover:bg-[#F3E7D5] dark:hover:bg-[#2A1017] transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#FFFDF7] dark:bg-[#18070C] border-b border-[#E2CEB9] dark:border-[#3D141C] px-4 pt-3 pb-6 shadow-xl animate-in fade-in slide-in-from-top-3 duration-200">
          <nav className="flex flex-col space-y-1 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-[#461D24] dark:text-amber-100 hover:bg-[#7A1B28]/10 dark:hover:bg-amber-400/10 hover:text-[#7A1B28] dark:hover:text-amber-300 transition-colors"
              >
                {link.label}
              </a>
            ))}

            <div className="pt-3 border-t border-[#E8D7C5] dark:border-[#3A141E] flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-[#7A1B28] dark:text-amber-300 bg-[#7A1B28]/10 dark:bg-amber-400/10"
              >
                <Phone className="w-4 h-4" />
                <span>Call Anitha Mam: +91 91761 07775</span>
              </a>

              <a
                href="#registration"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-amber-950 bg-gradient-to-r from-amber-500 to-amber-600 shadow-md text-center"
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.demoCta}</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
