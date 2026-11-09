export interface Program {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  category: "Full Stack" | "DSA" | "Data Science" | "Generative AI";
  duration: string; // Configurable placeholder (e.g. "Structured 16-Week Immersive")
  level: "Beginner to Advanced" | "Intermediate to Advanced" | "Comprehensive";
  format: "Interactive Live + Guided Projects" | "Hands-on Bootcamp" | "Industry-Grade Lab";
  badge: string;
  shortDescription: string;
  longDescription: string;
  heroImage: string;
  topics: string[];
  prerequisites: string[];
  learningOutcomes: string[];
  skillsDeveloped: string[];
  targetAudience: string[];
  careerOpportunities: string[];
  curriculum: CurriculumModule[];
  realWorldProjects: ProjectShowcase[];
  practicalAssignments: string[];
  faqs: FAQItem[];
}

export interface CurriculumModule {
  moduleNumber: number;
  title: string;
  description: string;
  topics: string[];
  handsOnLab: string;
}

export interface ProjectShowcase {
  title: string;
  description: string;
  technologies: string[];
  impact: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  targetAudience: string;
  keyFeatures: string[];
  ctaText: string;
  ctaHref: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  program: string;
  isPlaceholder?: boolean;
}

export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  subtext: string;
  isPlaceholder?: boolean;
}

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  organization?: string;
  enquiryType:
    | "Student Program"
    | "College & University Partnership"
    | "Corporate Training"
    | "LMS Solutions"
    | "General Enquiry";
  interestedProgram?: string;
  message: string;
  honeypot?: string; // spam protection
}

export interface NavItem {
  label: string;
  href: string;
  children?: {
    label: string;
    href: string;
    description: string;
    icon?: string;
    badge?: string;
  }[];
}
