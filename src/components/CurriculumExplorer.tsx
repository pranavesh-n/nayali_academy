'use client';

import React, { useState } from 'react';
import { BookOpen, CheckCircle2, Download, ArrowRight, Sparkles, FileText, Clock } from 'lucide-react';
import { Language, CurriculumTrack } from '@/types';
import { BUSINESS_INFO } from '@/lib/dictionary';
import { KolamDivider } from './KolamDivider';

interface CurriculumExplorerProps {
  language: Language;
}

const TRACKS: CurriculumTrack[] = [
  {
    id: 'cbse',
    badgeEn: 'School Syllabus',
    badgeTa: 'பள்ளிப் பாடம்',
    titleEn: 'CBSE & ICSE School Curriculum Mastery',
    titleTa: 'சி.பி.எஸ்.இ & ஐ.சி.எஸ்.இ பள்ளித் தேர்வுப் பயிற்சி',
    descriptionEn:
      'Designed specifically for English-medium school students who find second/third language Tamil exams challenging. We align class-by-class with NCERT & ICSE textbooks.',
    descriptionTa:
      'ஆங்கில வழிப் பள்ளிகளில் இரண்டாம் மற்றும் மூன்றாம் மொழியாக தமிழ் பயிலும் மாணவர்களுக்கான பிரத்யேக தேர்வு வழிகாட்டல்.',
    durationEn: '3-5 Classes / Week • 1 Hour each',
    durationTa: 'வாரத்திற்கு 3-5 வகுப்புகள் • தலா 1 மணி நேரம்',
    modules: [
      {
        weekEn: 'Phase 1 (Month 1)',
        weekTa: 'படி 1 (மாதம் 1)',
        topicEn: 'Letter Blends, Stroke Perfection & Reading Speed',
        topicTa: 'உயிர்மெய் எழுத்துக் கூட்டுதல் & வாசிப்பு வேகம்',
        outcomeEn: 'Student eliminates hesitation and reads textbook passages without stumbling.',
        outcomeTa: 'பாடப் புத்தகப் பகுதிகளை தடையின்றி சரளமாக வாசிக்கும் திறன்.',
      },
      {
        weekEn: 'Phase 2 (Month 2)',
        weekTa: 'படி 2 (மாதம் 2)',
        topicEn: 'Essential Grammar (திணை, பால், எண், வேற்றுமை, புணர்ச்சி)',
        topicTa: 'அடிப்படை இலக்கண விதிகள் & சொல்வதை எழுதுதல்',
        outcomeEn: 'Zero spelling errors in school dictations and tests.',
        outcomeTa: 'பள்ளித் தேர்வுகளில் எழுத்துப் பிழைகள் முற்றிலும் களையப்படுதல்.',
      },
      {
        weekEn: 'Phase 3 (Month 3+)',
        weekTa: 'படி 3 (மாதம் 3+)',
        topicEn: 'Comprehension, Essay (கட்டுரை), Letter Writing & Seyyul Memorization',
        topicTa: 'பத்தி வினா-விடை, கடிதம், கட்டுரை & செய்யுள் விளக்கம்',
        outcomeEn: 'Consistently scoring 90%+ in school term exams.',
        outcomeTa: 'பள்ளித் தேர்வுகளில் 90%-க்கும் அதிகமான மதிப்பெண்கள் பெறுதல்.',
      },
    ],
  },
  {
    id: 'nri',
    badgeEn: 'Global Diaspora',
    badgeTa: 'உலகத் தமிழர்',
    titleEn: 'Overseas & NRI Conversational Tamil',
    titleTa: 'வெளிநாட்டுத் தமிழ் குழந்தைகளுக்கான பேச்சுத் தமிழ்',
    descriptionEn:
      'Specially structured for children and youth growing up in the USA, UK, Singapore, UAE, and Australia. Bilingually instructed in English & Tamil.',
    descriptionTa:
      'அமெரிக்கா, லண்டன், சிங்கப்பூர் மற்றும் வளைகுடா நாடுகளில் வாழும் குழந்தைகள் தாய்மொழியில் இனிதாக உரையாட உதவும் சிறப்புப் பாடத்திட்டம்.',
    durationEn: 'Weekend & Evening Flexible Timezones',
    durationTa: 'வார இறுதி & மாலை வெளிநாட்டு நேரங்கள்',
    modules: [
      {
        weekEn: 'Phase 1 (Month 1)',
        weekTa: 'படி 1 (மாதம் 1)',
        topicEn: 'Home Dialogues & Kinship Terms (அம்மா, அப்பா, தாத்தா, பாட்டி)',
        topicTa: 'குடும்ப உறவுகள் மற்றும் அன்றாட எளிய உரையாடல்',
        outcomeEn: 'Child understands spoken Tamil commands and responds with basic words.',
        outcomeTa: 'வீட்டில் பெற்றோரின் உரையாடல்களைப் புரிந்து தமிழில் பதில் கூறல்.',
      },
      {
        weekEn: 'Phase 2 (Month 2)',
        weekTa: 'படி 2 (மாதம் 2)',
        topicEn: 'Panchatantra Stories, Rhymes & Sentence Construction',
        topicTa: 'நீதிக் கதைகள், மழலைப் பாடல்கள் & வாக்கியப் பயிற்சி',
        outcomeEn: 'Speaking in full sentences during video calls with grandparents in India.',
        outcomeTa: 'சொந்தமாக முழு வாக்கியங்களில் மகிழ்ச்சியோடு உரையாடுதல்.',
      },
      {
        weekEn: 'Phase 3 (Month 3+)',
        weekTa: 'படி 3 (மாதம் 3+)',
        topicEn: 'Cultural Traditions, Thirukkural Couplets & Reading Basics',
        topicTa: 'திருக்குறள், தமிழ் விழாக்கள் & எளிய எழுத்து அறிமுகம்',
        outcomeEn: 'Deep cultural pride and effortless everyday bilingual conversation.',
        outcomeTa: 'தாய்மொழி மேல் ஆழ்ந்த பற்றும் சரளமான பேச்சுத் திறனும்.',
      },
    ],
  },
  {
    id: 'samacheer',
    badgeEn: 'TN State Board',
    badgeTa: 'சமச்சீர் கல்வி',
    titleEn: 'Samacheer Kalvi & Board Exam Prep (Grades 6–10)',
    titleTa: 'சமச்சீர் கல்வி & 10-ஆம் வகுப்பு பொதுத்தேர்வு சிறப்புப் பயிற்சி',
    descriptionEn:
      'In-depth chapter-by-chapter coverage of Tamil Nadu textbook questions, Ilakkana Kurippu, and past 10-year public exam question paper drills.',
    descriptionTa:
      'தமிழக அரசின் பாடத்திட்ட வினா-விடைகள், இலக்கணக் குறிப்புகள் மற்றும் 10-ஆம் வகுப்பு பொதுத்தேர்வு வினாத்தாள் பயிற்சிகள்.',
    durationEn: 'Daily / 4-day intensive batches',
    durationTa: 'தினசரி / வாரத்திற்கு 4 நாட்கள் தீவிர பயிற்சி',
    modules: [
      {
        weekEn: 'Phase 1',
        weekTa: 'பகுதி 1',
        topicEn: 'Seyyul (Poetry), Urainadai (Prose) & Line-by-Line Meaning',
        topicTa: 'செய்யுள் நயம், உரைநடை விளக்கம் & சொல்லும் பொருளும்',
        outcomeEn: 'Clear grasp of classical verses and memory recitation.',
        outcomeTa: 'மனப்பாடப் பகுதிகள் மற்றும் செய்யுள் வரிகளில் முழுத் தெளிவு.',
      },
      {
        weekEn: 'Phase 2',
        weekTa: 'பகுதி 2',
        topicEn: 'Comprehensive Ilakkanam (Grammar) Drills',
        topicTa: 'முழுமையான இலக்கணப் பயிற்சி (தொகைநிலை, புணர்ச்சி)',
        outcomeEn: 'Full marks in objective and grammar sections.',
        outcomeTa: 'இலக்கணப் பகுதியில் ஒரு மதிப்பெண் கூட குறையாமல் எடுத்தல்.',
      },
      {
        weekEn: 'Phase 3',
        weekTa: 'பகுதி 3',
        topicEn: 'Model Board Question Papers & Timed Mock Exams',
        topicTa: 'மாதிரித் தேர்வுகள் மற்றும் விடைத்தாள் எழுதும் உத்திகள்',
        outcomeEn: 'Centum / 95+ target with superb time management.',
        outcomeTa: 'பொதுத்தேர்வில் 95+ மதிப்பெண்களை இலக்காக அடைதல்.',
      },
    ],
  },
  {
    id: 'kids',
    badgeEn: 'Pre-Primary Foundations',
    badgeTa: 'தொடக்க நிலை',
    titleEn: 'Foundational Tamil & Neat Handwriting (Ages 4–8)',
    titleTa: 'அடிப்படை எழுத்து & அழகிய கையெழுத்துப் பயிற்சி (வயது 4–8)',
    descriptionEn:
      'Joyful, stress-free introduction to Tamil letters through drawings, songs, flashcards, and step-by-step pencil stroke guidance.',
    descriptionTa:
      'பாடல்கள், வரைபடங்கள் மற்றும் வரிவடிவப் பயிற்சிகள் மூலம் குழந்தைகளுக்கு தமிழ் மேல் பேரார்வத்தை உருவாக்கும் எளிய முறை.',
    durationEn: 'Weekend or 3-day weekly batches',
    durationTa: 'வார இறுதி அல்லது வாரத்திற்கு 3 நாட்கள்',
    modules: [
      {
        weekEn: 'Phase 1',
        weekTa: 'பகுதி 1',
        topicEn: '12 Uyir Ezhuthukal, Sounds & Object Association',
        topicTa: '12 உயிர் எழுத்துகள், ஒலிப்பு முறை & படப் பொருத்தம்',
        outcomeEn: 'Instantly identifies all vowels and writes them with proper strokes.',
        outcomeTa: 'அனைத்து உயிர் எழுத்துக்களையும் கண்டறிந்து சரியாக எழுதுதல்.',
      },
      {
        weekEn: 'Phase 2',
        weekTa: 'பகுதி 2',
        topicEn: '18 Mei Ezhuthukal & Ayutha Ezhuthu',
        topicTa: '18 மெய் எழுத்துகள் & ஆய்த எழுத்து',
        outcomeEn: 'Pronounces hard/soft sounds (வல்லினம், மெல்லினம், இடையினம்) clearly.',
        outcomeTa: 'புள்ளி வைத்த மெய் எழுத்துக்களை தெளிவாக உச்சரித்தல்.',
      },
      {
        weekEn: 'Phase 3',
        weekTa: 'பகுதி 3',
        topicEn: 'Pearl-like Handwriting Drills & Simple Two-Letter Words',
        topicTa: 'முத்து போன்ற கையெழுத்து & எளிய இருவர் சொற்கள்',
        outcomeEn: 'Proud, neat Tamil handwriting that teachers appreciate in school.',
        outcomeTa: 'பள்ளியில் அனைவரும் பாராட்டும் அழகிய தமிழ் கையெழுத்து.',
      },
    ],
  },
];

export const CurriculumExplorer: React.FC<CurriculumExplorerProps> = ({ language }) => {
  const [activeTrackId, setActiveTrackId] = useState<string>('cbse');
  const activeTrack = TRACKS.find((t) => t.id === activeTrackId) || TRACKS[0];

  const requestSyllabusPdf = (trackTitle: string) => {
    const text =
      language === 'ta'
        ? `வணக்கம் நயலி தமிழ் அகாடமி! "${trackTitle}" பாடத்திட்டத்தின் முழு விவரங்களை (Syllabus PDF) நான் பெற விரும்புகிறேன்.`
        : `Hello Nayali Tamil Academy! I would like to receive the complete detailed syllabus PDF for "${trackTitle}".`;
    window.open(
      `https://wa.me/${BUSINESS_INFO.phoneRaw}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section className="py-16 sm:py-24 bg-[#FFFDF7] dark:bg-[#120508] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <span className="text-xs sm:text-sm font-bold tracking-widest text-[#7A1B28] dark:text-amber-400 uppercase">
            {language === 'ta' ? 'பாடத்திட்டக் கட்டமைப்பு' : 'Structured Curriculum Explorer'}
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#290E14] dark:text-[#FAF4ED] tracking-tight">
            {language === 'ta'
              ? 'உங்கள் தேவைக்கேற்ற துல்லியமான பாடத்திட்டம்'
              : 'Detailed Grade & Board Curriculum Tracks'}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#5F3C43] dark:text-[#D1B8BF] leading-relaxed">
            {language === 'ta'
              ? 'பள்ளிப் பாடத்திட்டம், வெளிநாட்டு உரையாடல் அல்லது தொடக்க நிலை — பாடங்களை விரிவாகப் பாருங்கள்.'
              : 'Select your learning goal below to preview phase-by-phase weekly milestones and outcomes.'}
          </p>
        </div>

        {/* Track Switcher Tabs (Scrollable on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar gap-2 sm:gap-3">
          {TRACKS.map((track) => {
            const isActive = activeTrackId === track.id;
            return (
              <button
                key={track.id}
                onClick={() => setActiveTrackId(track.id)}
                className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                  isActive
                    ? 'bg-[#7A1B28] text-white dark:bg-amber-400 dark:text-amber-950 shadow-md scale-102'
                    : 'bg-[#F5EAD9] dark:bg-[#230C13] text-[#552A32] dark:text-amber-200/80 hover:bg-[#ECD9C5]'
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span>{language === 'ta' ? track.titleTa.split(' ')[0] + ' ' + (track.titleTa.split(' ')[1] || '') : track.badgeEn}</span>
              </button>
            );
          })}
        </div>

        {/* Curriculum Card Container */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-[#FCF8F0] dark:bg-[#1C090E] border-2 border-[#ECD9C5] dark:border-[#3F1620] p-6 sm:p-10 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-[#ECD9C5] dark:border-[#38121B]">
            <div>
              <span className="inline-block text-[11px] font-bold px-3 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/80 text-[#7A1B28] dark:text-amber-300 border border-amber-300/40 mb-1">
                {language === 'ta' ? activeTrack.badgeTa : activeTrack.badgeEn}
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#290E14] dark:text-[#FAF4ED]">
                {language === 'ta' ? activeTrack.titleTa : activeTrack.titleEn}
              </h3>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold text-[#7A1B28] dark:text-amber-300 bg-white dark:bg-[#260C14] px-3.5 py-2 rounded-xl border border-[#ECD9C5] dark:border-[#4B1A26] shrink-0">
              <Clock className="w-4 h-4" />
              <span>{language === 'ta' ? activeTrack.durationTa : activeTrack.durationEn}</span>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#5A3840] dark:text-[#C5A7B0] leading-relaxed mb-8">
            {language === 'ta' ? activeTrack.descriptionTa : activeTrack.descriptionEn}
          </p>

          {/* Module Steps */}
          <div className="space-y-4 mb-8">
            {activeTrack.modules.map((mod, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-[#230C14] border border-[#ECD9C5] dark:border-[#421622] shadow-2xs hover:border-[#7A1B28]/40 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
                  <span className="font-mono text-xs font-bold text-[#7A1B28] dark:text-amber-400">
                    {language === 'ta' ? mod.weekTa : mod.weekEn}
                  </span>
                  <span className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{language === 'ta' ? mod.outcomeTa : mod.outcomeEn}</span>
                  </span>
                </div>

                <h4 className="text-base sm:text-lg font-bold text-[#2B1015] dark:text-[#FAF4ED] font-tamil">
                  {language === 'ta' ? mod.topicTa : mod.topicEn}
                </h4>
              </div>
            ))}
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#ECD9C5] dark:border-[#38121B]">
            <span className="text-xs text-[#704F56] dark:text-amber-200/70 text-center sm:text-left">
              {language === 'ta'
                ? 'அனைத்து மாணவர்களுக்கும் வாராந்திர மாதிரி வினாத்தாள்கள் மற்றும் நோட்டுகள் வழங்கப்படும்.'
                : 'Includes weekly printed/digital practice worksheets and school exam question banks.'}
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() =>
                  requestSyllabusPdf(
                    language === 'ta' ? activeTrack.titleTa : activeTrack.titleEn
                  )
                }
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white dark:bg-[#280F16] border border-[#ECD9C5] dark:border-[#421622] text-[#7A1B28] dark:text-amber-300 font-bold text-xs hover:bg-[#F6EBE0] transition-colors cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{language === 'ta' ? 'பாடத்திட்டம் பெற (PDF)' : 'Get Syllabus PDF'}</span>
              </button>

              <a
                href="#registration"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-[#7A1B28] hover:bg-[#8F2030] dark:bg-amber-400 dark:hover:bg-amber-300 text-white dark:text-amber-950 font-bold text-xs shadow-md transition-colors"
              >
                <span>{language === 'ta' ? 'வகுப்பில் சேர' : 'Enroll in Track'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        <KolamDivider variant="center" className="mt-14" />
      </div>
    </section>
  );
};
