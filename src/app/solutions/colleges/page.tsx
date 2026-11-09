import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import {
  GraduationCap,
  CheckCircle2,
  Users,
  Trophy,
  ArrowRight,
  BookOpen,
  Sparkles,
  Layers,
  Award,
  Terminal,
} from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "College & University Solutions | Campus Placement & Technical Bootcamps",
  description:
    "Partner with SV LearnLogic for campus placement training, DSA bootcamps, Java Full Stack courses, Faculty Development Programs (FDP), and hackathons.",
};

export default function CollegeSolutionsPage() {
  const institutionalOfferings = [
    {
      title: "Campus Placement Readiness Programs",
      desc: "Time-bound, intensive preparation for upcoming placement drives covering coding assessments, technical interview rounds, and live coding whiteboarding.",
      icon: <GraduationCap className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "Core DSA & Problem Solving Bootcamps",
      desc: "Structured drills across 17 algorithmic core patterns, guiding students from basic array manipulation to complex Dynamic Programming.",
      icon: <Terminal className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Full Stack & Microservices Semester Tracks",
      desc: "Spring Boot, REST APIs, Microservices, and React integration, seamlessly augmenting standard academic computer science curricula.",
      icon: <Layers className="w-5 h-5 text-emerald-400" />,
    },
    {
      title: "Python, Data Science & GenAI Workshops",
      desc: "Hands-on weekend or week-long immersions where students build functional AI agents, RAG document assistants, and predictive analytics models.",
      icon: <Sparkles className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Faculty Development Programs (FDPs)",
      desc: "Empowering university faculty with modern development methodologies, industry frameworks, and advanced tools like LangChain and Docker.",
      icon: <Users className="w-5 h-5 text-purple-400" />,
    },
    {
      title: "Hackathons & Technical Events",
      desc: "End-to-end execution of campus hackathons with problem statement design, automated test suites, and experienced technical mentors as judges.",
      icon: <Trophy className="w-5 h-5 text-amber-400" />,
    },
  ];

  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            Institutional Collaboration
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Solutions for Colleges & Universities
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Empowering institutions to build industry-ready graduates through practical technology
            training, campus placement bootcamps, and faculty enablement.
          </p>
          <div className="pt-2">
            <a
              href="#institutional-enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
            >
              <span>Partner With SV LearnLogic</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Offerings Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            Institutional Programs
          </span>
          <h2 className="text-3xl font-extrabold text-white">How We Partner with Colleges</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Flexible, customized engagement formats tailored to semester timelines and batch sizes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {institutionalOfferings.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Institutional Enquiry Form */}
      <section className="py-20 bg-navy-900/40 border-t border-navy-800/80" id="institutional-enquiry">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              Start an Institutional Collaboration
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Institutional Partnership Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Speak with our Academic Alliances Director to structure a placement bootcamp, FDP, or MoU.
            </p>
          </div>

          <EnquiryForm defaultEnquiryType="College & University Partnership" />
        </div>
      </section>

    </div>
  );
}
