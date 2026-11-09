import React from "react";
import { Metadata } from "next";
import {
  Building2,
  CheckCircle2,
  Workflow,
  ArrowRight,
  ShieldCheck,
  Zap,
  Cpu,
  Database,
  Code2,
} from "lucide-react";
import { corporateEngagementSteps } from "@/config/site";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Corporate Technical Training | Workforce Upskilling & Enterprise Bootcamps",
  description:
    "Accelerate engineering team velocity with customized corporate technical training in Java Full Stack, Spring Boot, DSA, Data Science, and Generative AI.",
};

export default function CorporateTrainingPage() {
  const corporateTracks = [
    {
      title: "Java & Spring Boot Microservices Upskilling",
      desc: "Modernizing monolithic codebases into containerized Spring Boot 3 microservices with RESTful APIs, Spring Security, and reactive patterns.",
      icon: <Code2 className="w-5 h-5 text-sky-400" />,
    },
    {
      title: "DSA & Problem-Solving for Software Engineers",
      desc: "Sharpening algorithmic thinking, space-time complexity analysis, and pattern recognition for developers tackling complex data structures.",
      icon: <Cpu className="w-5 h-5 text-indigo-400" />,
    },
    {
      title: "Generative AI, LangChain & Agentic Systems",
      desc: "Enabling enterprise teams to build production-grade Retrieval-Augmented Generation (RAG) pipelines, LLM tool-calling, and custom AI agents.",
      icon: <Zap className="w-5 h-5 text-cyan-400" />,
    },
    {
      title: "Data Science, Feature Engineering & ML Pipelines",
      desc: "Upskilling analysts and backend developers in Python, Pandas, advanced SQL analytics, and Scikit-Learn predictive modeling pipelines.",
      icon: <Database className="w-5 h-5 text-purple-400" />,
    },
  ];

  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-radial from-indigo-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise Workforce Enablement
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Corporate Technical Training
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Building stronger, future-ready engineering teams through practical, role-aligned
            technical upskilling in modern backend, algorithmic problem-solving, and AI stacks.
          </p>
          <div className="pt-2">
            <a
              href="#corporate-enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg"
            >
              <span>Discuss Corporate Training</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Corporate Tracks Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
            Specialized Enterprise Tracks
          </span>
          <h2 className="text-3xl font-extrabold text-white">Targeted Technical Upskilling</h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Delivered on-premise, remotely, or in blended formats with active code exercises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {corporateTracks.map((track, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-indigo-500/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-4">
                {track.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{track.title}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{track.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5-Step Engagement Methodology */}
      <section className="py-20 bg-navy-900/40 border-t border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider">
              Governance & Execution
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              The 5-Stage Corporate Engagement Process
            </h2>
            <p className="text-sm text-slate-400">
              A transparent, outcome-oriented workflow ensuring measurable competency improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {corporateEngagementSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-navy-950 border border-navy-800 hover:border-indigo-500/50 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-3xl font-black text-indigo-400/80 block mb-2 font-mono">
                    {step.step}
                  </span>
                  <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Enquiry Form */}
      <section className="py-20 bg-navy-950" id="corporate-enquiry">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block mb-1">
              Custom Corporate Proposal
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Corporate Training Enquiry
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with our corporate solutions leads to explore cohort schedules, custom syllabus design, and pilot workshops.
            </p>
          </div>

          <EnquiryForm defaultEnquiryType="Corporate Training" />
        </div>
      </section>

    </div>
  );
}
