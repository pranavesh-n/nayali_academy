'use client';

import React, { useState, useEffect } from 'react';
import { Language } from '@/types';
import { FloatingLetters } from '@/components/FloatingLetters';
import { DemoRibbon } from '@/components/DemoRibbon';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Offerings } from '@/components/Offerings';
import { LearningPath } from '@/components/LearningPath';
import { Audience } from '@/components/Audience';
import { OnlineVsOffline } from '@/components/OnlineVsOffline';
import { TeacherCard } from '@/components/TeacherCard';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { RegistrationForm } from '@/components/RegistrationForm';
import { VisitUs } from '@/components/VisitUs';
import { FaqSection } from '@/components/FaqSection';
import { Footer } from '@/components/Footer';
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp';

export default function Home() {
  // Language toggle in memory state (supports EN and தமிழ்)
  const [language, setLanguage] = useState<Language>('en');
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
    // Respect system preference if dark
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang);
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', newLang);
    }
  };

  const handleThemeToggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  return (
    <div
      className={`min-h-screen relative flex flex-col transition-colors duration-300 ${
        language === 'ta' ? 'lang-ta' : 'lang-en'
      }`}
    >
      {/* Background Floating Tamil Glyphs */}
      <FloatingLetters />

      {/* Dismissible Demo Ribbon Banner */}
      <DemoRibbon language={language} />

      {/* Sticky Navigation Bar */}
      <Navbar
        language={language}
        onLanguageChange={handleLanguageChange}
        isDark={isDark}
        onThemeToggle={handleThemeToggle}
      />

      {/* Main Page Content */}
      <main className="flex-1 relative z-10">
        {/* 1. Hero Section */}
        <Hero language={language} />

        {/* 2. What We Offer */}
        <Offerings language={language} />

        {/* 3. Learning Path (6-Step Timeline) */}
        <LearningPath language={language} />

        {/* 4. Who It's For (Audience Tabs) */}
        <Audience language={language} />

        {/* 5. Online vs Offline */}
        <OnlineVsOffline language={language} />

        {/* 6. Meet Your Teacher (Anitha Mam) */}
        <TeacherCard language={language} />

        {/* 7. Parent & Student Testimonials Carousel */}
        <Testimonials language={language} />

        {/* 8. Pricing Plans */}
        <Pricing language={language} />

        {/* 9. Registration Form (with WhatsApp Deep-Link & Confetti) */}
        <RegistrationForm language={language} />

        {/* 10. Visit Us (Address, Live IST Hours Badge & Google Map) */}
        <VisitUs language={language} />

        {/* 11. FAQ Accordion */}
        <FaqSection language={language} />
      </main>

      {/* Footer */}
      <Footer language={language} />

      {/* Bottom-right Floating WhatsApp Action Button */}
      <FloatingWhatsApp language={language} />
    </div>
  );
}
