'use client';

import React from 'react';
import { Heart, MapPin, Phone, Clock, MessageCircle, ExternalLink, ArrowUp } from 'lucide-react';
import { Language } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';

interface FooterProps {
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = DICTIONARY[language].footer;
  const nav = DICTIONARY[language].nav;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#offers', label: nav.offers },
    { href: '#path', label: nav.path },
    { href: '#audience', label: nav.audience },
    { href: '#compare', label: nav.compare },
    { href: '#teacher', label: nav.teacher },
    { href: '#testimonials', label: nav.testimonials },
    { href: '#pricing', label: nav.pricing },
    { href: '#registration', label: nav.demoCta },
    { href: '#visit', label: nav.visit },
    { href: '#faq', label: nav.faq },
  ];

  return (
    <footer className="bg-[#1C070D] text-amber-100/90 pt-16 pb-12 border-t border-[#461923] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#3E141E]">
          {/* Col 1: Brand & Proverb */}
          <div className="lg:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#7A1B28] to-[#992233] text-amber-300 flex items-center justify-center font-bold text-xl shadow-md border border-amber-500/40">
                <span className="font-tamil">ந</span>
              </div>
              <div>
                <h3 className="font-extrabold text-lg text-white tracking-tight">
                  {BUSINESS_INFO.name}
                </h3>
                <p className="text-[11px] font-tamil text-amber-300/80">
                  {BUSINESS_INFO.taglineTa}
                </p>
              </div>
            </div>

            <p className="text-xs text-[#D8B6BD] leading-relaxed">
              {t.aboutDesc}
            </p>

            <div className="p-3 rounded-xl bg-[#280D15] border border-[#521D29] text-xs font-tamil text-amber-300/90 italic">
              {t.proverb}
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
              {t.quickLinksTitle}
            </h4>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#DEC3C9]">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="hover:text-amber-300 transition-colors block py-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
              {t.contactTitle}
            </h4>
            <ul className="space-y-3 text-xs text-[#DEC3C9]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{BUSINESS_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="hover:text-amber-300 font-semibold text-white"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${BUSINESS_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold"
                >
                  WhatsApp: +91 91761 07775
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Timings & Badges */}
          <div>
            <h4 className="font-bold text-sm text-white mb-4 uppercase tracking-wider">
              {language === 'ta' ? 'வகுப்பு நேரங்கள்' : 'Working Hours'}
            </h4>
            <div className="space-y-2 text-xs text-[#DEC3C9]">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    {language === 'ta' ? 'திங்கள் – சனி' : 'Mon – Sat'}
                  </div>
                  <div>5:00 AM – 9:00 PM IST</div>
                </div>
              </div>
              <div className="flex items-start gap-2 pt-2 border-t border-[#3B141E]">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">
                    {language === 'ta' ? 'ஞாயிறு' : 'Sunday'}
                  </div>
                  <div>10:00 AM – 9:00 PM IST</div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/20 text-[11px] text-amber-300">
              ⭐ Google Rated 5.0 (78 reviews)
            </div>
          </div>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#B58D96]">
          <p>{t.copyright}</p>

          {/* Exact required developer credit with link */}
          <div className="flex items-center gap-1.5 font-medium">
            <span>Demo website crafted with ❤️ by</span>
            <a
              href="https://pranaveshn.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-amber-300 underline font-semibold inline-flex items-center gap-0.5"
            >
              <span>Pranavesh N (pranaveshn.vercel.app)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-2 rounded-xl bg-[#2E0E17] hover:bg-[#451624] text-amber-300 border border-[#521C28] transition-colors cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
