export type Language = 'en' | 'ta';

export type LearnerCategory = 'kids' | 'teens' | 'adults' | 'overseas';

export type LearningMode = 'both' | 'online' | 'offline';

export interface PlanFeature {
  textEn: string;
  textTa: string;
}

export interface PricingPlan {
  id: string;
  nameEn: string;
  nameTa: string;
  badgeEn?: string;
  badgeTa?: string;
  descriptionEn: string;
  descriptionTa: string;
  priceNoteEn: string;
  priceNoteTa: string;
  popular?: boolean;
  features: PlanFeature[];
}

export interface Testimonial {
  id: string;
  name: string;
  relationEn: string;
  relationTa: string;
  locationEn: string;
  locationTa: string;
  quoteEn: string;
  quoteTa: string;
  highlightEn: string;
  highlightTa: string;
  rating: number;
  tagEn: string;
  tagTa: string;
  audioStudent?: {
    studentName: string;
    sampleTextEn: string;
    sampleTextTa: string;
    duration: string;
  };
}

export interface FaqItem {
  id: string;
  questionEn: string;
  questionTa: string;
  answerEn: string;
  answerTa: string;
}

export interface RegistrationFormData {
  studentName: string;
  parentName: string;
  studentAge: string;
  mode: 'online' | 'offline' | 'flexible';
  level: 'beginner' | 'intermediate' | 'school-syllabus' | 'spoken-only';
  preferredTime: 'morning' | 'evening' | 'weekend';
  phone: string;
  message: string;
}

export interface CurriculumTrack {
  id: string;
  badgeEn: string;
  badgeTa: string;
  titleEn: string;
  titleTa: string;
  descriptionEn: string;
  descriptionTa: string;
  durationEn: string;
  durationTa: string;
  modules: {
    weekEn: string;
    weekTa: string;
    topicEn: string;
    topicTa: string;
    outcomeEn: string;
    outcomeTa: string;
  }[];
}

export interface TamilAudioWord {
  id: string;
  letter: string;
  tamilWord: string;
  englishTranslit: string;
  meaningEn: string;
  meaningTa: string;
  category: 'vowel' | 'consonant' | 'daily';
  audioFreq?: number; // Tone frequency for Web Audio fallback
}
