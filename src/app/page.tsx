import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { CompanyIntroSection } from "@/components/home/CompanyIntroSection";
import { FlagshipProgramsSection } from "@/components/home/FlagshipProgramsSection";
import { WhyChooseSection } from "@/components/home/WhyChooseSection";
import { CollegeSolutionsSection } from "@/components/home/CollegeSolutionsSection";
import { CorporateTrainingSection } from "@/components/home/CorporateTrainingSection";
import { GenAiShowcaseSection } from "@/components/home/GenAiShowcaseSection";
import { LmsShowcaseSection } from "@/components/home/LmsShowcaseSection";
import { ServicesGridSection } from "@/components/home/ServicesGridSection";
import { ImpactSection } from "@/components/home/ImpactSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: `${siteConfig.name} | Build Skills. Build Careers.`,
  description:
    "Official corporate portal of SV LearnLogic Pvt. Ltd. Industry-oriented technical training in Java Full Stack, DSA, Data Science, Generative AI, and LMS solutions.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Company Introduction & 3 Value Pillars */}
      <CompanyIntroSection />

      {/* 3. Flagship Technical Programs (5 Cards) */}
      <FlagshipProgramsSection />

      {/* 4. Why Choose SV LearnLogic */}
      <WhyChooseSection />

      {/* 5. College and University Solutions */}
      <CollegeSolutionsSection />

      {/* 6. Corporate Training */}
      <CorporateTrainingSection />

      {/* 7. Generative AI and Emerging Technologies */}
      <GenAiShowcaseSection />

      {/* 8. LMS Solutions (SV LearnLogic LMS Advance) */}
      <LmsShowcaseSection />

      {/* 9. Our Services (10 Core Services Grid) */}
      <ServicesGridSection />

      {/* 10. Our Impact (Configurable Indicators) */}
      <ImpactSection />

      {/* 11. Testimonials (Sample Placeholders) */}
      <TestimonialsSection />

      {/* 12. Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
