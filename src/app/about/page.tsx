import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  Compass,
  Target,
  ShieldCheck,
  CheckCircle2,
  Users,
  Award,
  ArrowRight,
  Sparkles,
  BookOpen,
  Code2,
} from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "About Us | Our Story, Vision & Educational Philosophy",
  description:
    "Learn about SV LearnLogic Pvt. Ltd., our mission to bridge academic learning and industry requirements, our core values, and educational philosophy.",
};

export default function AboutPage() {
  const coreValues = [
    {
      title: "Integrity & Transparency",
      description:
        "We believe in honest education. We present verifiable technical concepts, realistic industry roadmaps, and avoid exaggerated or misleading claims.",
    },
    {
      title: "Practical Rigor",
      description:
        "True engineering comprehension comes from hands-on building, code debugging, and iterative refactoring rather than passive listening.",
    },
    {
      title: "Industry Relevance",
      description:
        "Our syllabi stay synchronised with current production tooling, modern architecture patterns, and enterprise standards.",
    },
    {
      title: "Learner Centricity",
      description:
        "Whether mentoring a first-year undergraduate or upskilling an enterprise developer, we tailor pedagogical support to ensure individual mastery.",
    },
  ];

  const philosophySteps = [
    {
      step: "01",
      title: "Conceptual Foundations",
      desc: "Deconstruct underlying mechanics, memory behavior, and architectural principles before touching frameworks.",
    },
    {
      step: "02",
      title: "Active Implementation",
      desc: "Every concept is reinforced with live code writing, testing, and error-handling in laboratory exercises.",
    },
    {
      step: "03",
      title: "Project-Based Synthesis",
      desc: "Assemble isolated techniques into end-to-end, multi-tier software projects that mirror production systems.",
    },
    {
      step: "04",
      title: "Professional Communication",
      desc: "Equip learners to articulate architectural trade-offs, write clean code, and thrive in technical interviews.",
    },
  ];

  const leadershipProfiles = [
    {
      role: "Director & Technical Leadership",
      title: "Executive Leadership Profile",
      description:
        "Oversees enterprise curriculum development, academic collaborations, and technical pedagogy across flagship engineering tracks.",
      status: "Verified Management Placeholder",
    },
    {
      role: "Operations & Business Strategy",
      title: "Strategic Operations Profile",
      description:
        "Manages corporate engagements, institutional university partnerships, and student success infrastructure.",
      status: "Verified Management Placeholder",
    },
  ];

  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Corporate Identity
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            About SV LearnLogic
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {siteConfig.description}
          </p>
        </div>
      </section>

      {/* 2. Our Story */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-navy-900/60 border border-navy-800 p-8 sm:p-12 space-y-6">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
            Our Story
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Bridging the Chasm Between Academics and Industry
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
            <p>
              SV LearnLogic Pvt. Ltd. was established with a singular, clear mandate: to transform
              how technical education is delivered and experienced. Across universities and
              colleges, passionate students frequently graduate with strong theoretical acumen but
              minimal hands-on experience in the actual tools and workflows demanded by software
              enterprises.
            </p>
            <p>
              Concurrently, high-growth technology companies face severe talent friction, spending
              substantial time and resources retraining new recruits on modern microservices,
              algorithmic problem-solving, and AI applications.
            </p>
            <p>
              SV LearnLogic bridges this gap. By designing high-caliber curricula in Java Full
              Stack Development, Data Structures & Algorithms, Data Science, and Generative AI, we
              enable engineering graduates to step into product and service firms with real-world
              readiness, confidence, and verifiable engineering capability.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Vision & Mission Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Vision */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-blue-950/60 via-navy-900 to-navy-950 border border-sky-500/40 relative group">
            <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center mb-6">
              <Compass className="w-6 h-6 text-sky-400" />
            </div>
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block mb-2">
              Our Vision
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Empowering Global Tech Transformation
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
              &ldquo;To become a trusted technology education and learning solutions company that
              empowers individuals and organizations through knowledge, innovation and practical
              skills.&rdquo;
            </p>
          </div>

          {/* Mission */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-indigo-950/60 via-navy-900 to-navy-950 border border-indigo-500/40 relative group">
            <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-indigo-400" />
            </div>
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest block mb-2">
              Our Mission
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Accessible, Practical, Industry-Oriented Education
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed italic">
              &ldquo;To deliver accessible, practical and industry-oriented technical education that
              bridges the gap between academic knowledge and professional requirements.&rdquo;
            </p>
          </div>

        </div>
      </section>

      {/* 4. Core Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            Guiding Principles
          </span>
          <h2 className="text-3xl font-extrabold text-white">Our Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreValues.map((val, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-sky-400 block mb-2">
                  0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{val.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Educational Philosophy (4-Stage Model) */}
      <section className="py-20 bg-navy-900/40 border-t border-b border-navy-800/80" id="philosophy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Pedagogical Framework
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Our 4-Stage Educational Philosophy
            </h2>
            <p className="text-sm text-slate-400">
              How we take learners from foundational understanding to enterprise autonomy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {philosophySteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-navy-950 border border-navy-800 hover:border-sky-500/40 transition-colors"
              >
                <span className="text-3xl font-black text-sky-400/80 block mb-3 font-mono">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Leadership & Corporate Governance */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            Governance & Leadership
          </span>
          <h2 className="text-3xl font-extrabold text-white">Leadership Team</h2>
          <p className="text-xs text-slate-400">
            Guided by experienced educators and software industry strategists.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadershipProfiles.map((lead, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-navy-900/80 border border-navy-800 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                  {lead.role}
                </span>
                <h3 className="text-lg font-bold text-white mb-3">{lead.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {lead.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-navy-800 text-[11px] text-slate-500 italic">
                *{lead.status} (Configurable for corporate disclosures)
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. CTA */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-8">
        <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-950 via-navy-900 to-navy-950 border border-sky-500/30">
          <h3 className="text-2xl font-bold text-white">
            Want to learn more about how we can support your career or institution?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-700 transition-colors"
            >
              <span>Explore Programs</span>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
