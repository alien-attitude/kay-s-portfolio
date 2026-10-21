export interface PersonalInfo {
  fullName: string;
  professionalTitle: string;
  tagline: string;
  email: string;
  whatsApp: string;
  whatsAppFormatted: string; // e.g. "09059628581"
  whatsAppLink: string; // e.g. "https://wa.me/2349059628581"
  location: string;
  workArrangement: string;
  languages: string[];
  workingHours: string;
  pricing: string;
  profilePhoto?: string | null;
  resumeUrl?: string | null;
  socialLinks?: {
    platform: 'LinkedIn' | 'Twitter' | 'Instagram' | 'Facebook' | 'WhatsApp';
    url: string;
  }[];
}

export interface AboutInfo {
  introduction: string[];
  callToActionText?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  iconName: 'Headphones' | 'Share2' | 'Calendar' | 'Plane' | 'Database' | 'FileText';
  focusNote?: string; // e.g. "Community management and scheduling client-provided content. Content creation is not included in the current service offering."
  features: string[];
}

export interface ToolItem {
  name: string;
  category: 'workspace' | 'crm' | 'project-management' | 'office';
  description: string;
  iconType: 'google' | 'hubspot' | 'monday' | 'microsoft';
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  responsibilities: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  certificateUrl?: string | null;
}

export interface TrainingItem {
  id: string;
  title: string;
  institution: string;
  certificateUrl?: string | null;
}

export interface PortfolioSample {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  description: string;
  isDemonstration: boolean;
  keyFeatures?: string[];
  status?: string;
  screenshotUrl?: string | null;
  documentPreviewUrl?: string | null;
  sampleDownloadUrl?: string | null;
  externalLink?: string | null;
}

export interface ValuePropositionItem {
  id: string;
  title: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface TestimonialItem {
  id: string;
  clientName: string;
  clientRole?: string;
  company?: string;
  testimonial: string;
  hasPermission: boolean;
  avatarUrl?: string | null;
}

export interface AchievementItem {
  id: string;
  title: string;
  description: string;
  date?: string;
}

export interface VolunteerItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  about: AboutInfo;
  services: ServiceItem[];
  tools: ToolItem[];
  softSkills: string[];
  experiences: ExperienceItem[];
  education: EducationItem[];
  training: TrainingItem[];
  portfolioSamples: PortfolioSample[];
  whyWorkWithMe: {
    heading: string;
    introduction: string;
    strengths: ValuePropositionItem[];
  };
  faqs: FAQItem[];
  // Optional collections that remain hidden until verified data is supplied
  testimonials: TestimonialItem[];
  achievements: AchievementItem[];
  volunteerExperiences: VolunteerItem[];
}
