'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, MessageCircle, CheckCircle2, AlertCircle } from 'lucide-react';
import { Language, RegistrationFormData } from '@/types';
import { DICTIONARY, BUSINESS_INFO } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface RegistrationFormProps {
  language: Language;
}

export const RegistrationForm: React.FC<RegistrationFormProps> = ({ language }) => {
  const t = DICTIONARY[language].registration;

  const [formData, setFormData] = useState<RegistrationFormData>({
    studentName: '',
    parentName: '',
    studentAge: '',
    mode: 'offline',
    level: 'beginner',
    preferredTime: 'evening',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successToast, setSuccessToast] = useState(false);

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.studentName.trim()) {
      errs.studentName =
        language === 'ta'
          ? 'மாணவர் பெயரை உள்ளிடவும்'
          : 'Please enter student name';
    }

    if (!formData.studentAge.trim()) {
      errs.studentAge =
        language === 'ta'
          ? 'வயது அல்லது வகுப்பை உள்ளிடவும்'
          : 'Please enter student age/grade';
    }

    if (!formData.phone.trim()) {
      errs.phone =
        language === 'ta'
          ? 'தொலைபேசி எண்ணை உள்ளிடவும்'
          : 'Please enter contact number';
    } else if (formData.phone.replace(/\D/g, '').length < 8) {
      errs.phone =
        language === 'ta'
          ? 'சரியான தொலைபேசி எண்ணை உள்ளிடவும்'
          : 'Please enter a valid phone number';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    // Fire celebratory confetti for joyful conversion
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ['#7A1B28', '#D97706', '#15803D', '#F59E0B'],
      });
    } catch {
      // Ignore if confetti not supported
    }

    const modeLabels: Record<string, string> = {
      offline: 'Pallavaram Centre (நேரடி மையம்)',
      online: 'Live Online Worldwide (இணையவழி)',
      flexible: 'Either / Flexible (இரண்டும் சரி)',
    };

    const levelLabels: Record<string, string> = {
      beginner: 'Complete Beginner (அடிப்படைக் கற்றல்)',
      intermediate: 'Knows Letters, Needs Reading/Writing Help',
      school: 'School Exam / Syllabus (State/CBSE/ICSE)',
      spoken: 'Spoken Tamil Focus (பேச்சுத் தமிழ்)',
    };

    const timeLabels: Record<string, string> = {
      morning: 'Early Morning (5:00 AM – 8:00 AM IST)',
      evening: 'Evening (4:30 PM – 9:00 PM IST)',
      weekend: 'Weekends (Sat/Sun)',
    };

    const whatsappMessage = [
      '🌸 *வணக்கம் Nayali Tamil Academy!*',
      'I would like to register for a *Free Demo Class*. Here are my details:',
      '',
      `• *Student Name:* ${formData.studentName}`,
      formData.parentName ? `• *Parent/Guardian:* ${formData.parentName}` : null,
      `• *Age / Grade:* ${formData.studentAge}`,
      `• *Phone / WhatsApp:* ${formData.phone}`,
      `• *Preferred Mode:* ${modeLabels[formData.mode] || formData.mode}`,
      `• *Current Tamil Level:* ${levelLabels[formData.level] || formData.level}`,
      `• *Preferred Time Slot:* ${timeLabels[formData.preferredTime] || formData.preferredTime}`,
      formData.message ? `• *Goal / Syllabus Notes:* ${formData.message}` : null,
      '',
      'Please let me know available slots. நன்றி!',
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    setSuccessToast(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsSubmitting(false);
    }, 900);
  };

  return (
    <section
      id="registration"
      className="py-16 sm:py-24 bg-[#FCF8F0] dark:bg-[#18070C] relative scroll-mt-20"
    >
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
        </div>

        {/* Form Container */}
        <div className="max-w-2xl mx-auto rounded-3xl bg-white dark:bg-[#200B12] border border-[#ECD9C5] dark:border-[#421622] p-6 sm:p-10 shadow-xl relative">
          {successToast && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-100 dark:bg-emerald-950/70 border border-emerald-400 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm flex items-center gap-3 animate-in fade-in">
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
              <span>{t.toastSuccess}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Student Name */}
            <div>
              <label
                htmlFor="studentName"
                className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
              >
                {t.studentNameLabel}
              </label>
              <input
                type="text"
                id="studentName"
                value={formData.studentName}
                onChange={(e) =>
                  setFormData({ ...formData, studentName: e.target.value })
                }
                placeholder={t.studentNamePlaceholder}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white placeholder-[#8F6C75] focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400 transition-colors ${
                  errors.studentName
                    ? 'border-red-500'
                    : 'border-[#DECABB] dark:border-[#4E1E2A]'
                }`}
              />
              {errors.studentName && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.studentName}</span>
                </p>
              )}
            </div>

            {/* Parent Name & Age in 2 Columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="parentName"
                  className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
                >
                  {t.parentNameLabel}
                </label>
                <input
                  type="text"
                  id="parentName"
                  value={formData.parentName}
                  onChange={(e) =>
                    setFormData({ ...formData, parentName: e.target.value })
                  }
                  placeholder={t.parentNamePlaceholder}
                  className="w-full px-4 py-3 rounded-xl border border-[#DECABB] dark:border-[#4E1E2A] bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white placeholder-[#8F6C75] focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400 transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="studentAge"
                  className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
                >
                  {t.ageLabel}
                </label>
                <input
                  type="text"
                  id="studentAge"
                  value={formData.studentAge}
                  onChange={(e) =>
                    setFormData({ ...formData, studentAge: e.target.value })
                  }
                  placeholder={t.agePlaceholder}
                  className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white placeholder-[#8F6C75] focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400 transition-colors ${
                    errors.studentAge
                      ? 'border-red-500'
                      : 'border-[#DECABB] dark:border-[#4E1E2A]'
                  }`}
                />
                {errors.studentAge && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.studentAge}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="phone"
                className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
              >
                {t.phoneLabel}
              </label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                placeholder={t.phonePlaceholder}
                className={`w-full px-4 py-3 rounded-xl border bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white placeholder-[#8F6C75] focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400 transition-colors ${
                  errors.phone
                    ? 'border-red-500'
                    : 'border-[#DECABB] dark:border-[#4E1E2A]'
                }`}
              />
              {errors.phone && (
                <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  <span>{errors.phone}</span>
                </p>
              )}
            </div>

            {/* Mode & Level Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="mode"
                  className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
                >
                  {t.modeLabel}
                </label>
                <select
                  id="mode"
                  value={formData.mode}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      mode: e.target.value as RegistrationFormData['mode'],
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#DECABB] dark:border-[#4E1E2A] bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400"
                >
                  <option value="offline">{t.modes.offline}</option>
                  <option value="online">{t.modes.online}</option>
                  <option value="flexible">{t.modes.flexible}</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="level"
                  className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
                >
                  {t.levelLabel}
                </label>
                <select
                  id="level"
                  value={formData.level}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      level: e.target.value as RegistrationFormData['level'],
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-[#DECABB] dark:border-[#4E1E2A] bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400"
                >
                  <option value="beginner">{t.levels.beginner}</option>
                  <option value="intermediate">{t.levels.intermediate}</option>
                  <option value="school">{t.levels.school}</option>
                  <option value="spoken">{t.levels.spoken}</option>
                </select>
              </div>
            </div>

            {/* Preferred Timing */}
            <div>
              <label
                htmlFor="preferredTime"
                className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
              >
                {t.timingLabel}
              </label>
              <select
                id="preferredTime"
                value={formData.preferredTime}
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    preferredTime: e.target.value as RegistrationFormData['preferredTime'],
                  })
                }
                className="w-full px-4 py-3 rounded-xl border border-[#DECABB] dark:border-[#4E1E2A] bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400"
              >
                <option value="morning">{t.timings.morning}</option>
                <option value="evening">{t.timings.evening}</option>
                <option value="weekend">{t.timings.weekend}</option>
              </select>
            </div>

            {/* Optional Notes */}
            <div>
              <label
                htmlFor="message"
                className="block text-xs sm:text-sm font-bold text-[#35151C] dark:text-[#F0DFD7] mb-1.5"
              >
                {t.notesLabel}
              </label>
              <textarea
                id="message"
                rows={2}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder={t.notesPlaceholder}
                className="w-full px-4 py-2.5 rounded-xl border border-[#DECABB] dark:border-[#4E1E2A] bg-[#FFFDF7] dark:bg-[#2A0E17] text-sm text-[#2D1318] dark:text-white placeholder-[#8F6C75] focus:outline-none focus:ring-2 focus:ring-[#7A1B28] dark:focus:ring-amber-400"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-base shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer disabled:opacity-70"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>
                {isSubmitting ? t.submittingText : t.submitBtn}
              </span>
            </button>

            {/* Guarantee / Privacy reassurance */}
            <p className="text-center text-xs text-[#74525A] dark:text-amber-200/60 font-medium">
              {t.guarantee}
            </p>
          </form>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
