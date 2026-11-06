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
