import React from "react";
import Link from "next/link";
import {
  GraduationCap,
  ArrowRight,
  Code,
  Layers,
  Terminal,
  Cpu,
  Sparkles,
  Users,
  Trophy,
  Workflow,
  CheckCircle2,
} from "lucide-react";

export function CollegeSolutionsSection() {
  const collegeCapabilities = [
    { title: "Campus Placement Training", desc: "Rigorous coding test prep & technical interview simulations" },
    { title: "Technical Skill Development", desc: "Foundational to advanced hands-on programming labs" },
    { title: "Coding and DSA Training", desc: "Structured pattern drills across 17 algorithmic core topics" },
    { title: "Java Full Stack Training", desc: "Spring Boot, REST APIs, Microservices & React architecture" },
    { title: "Python Programming", desc: "Core scripting, OOP paradigms, and standard library fluency" },
    { title: "Data Science Training", desc: "EDA, Pandas, SQL querying, and machine learning pipelines" },
    { title: "Generative AI Workshops", desc: "Hands-on LLM prompting, OpenAI APIs & RAG applications" },
    { title: "Internship Programs", desc: "Guided real-world software project experience for pre-final years" },
    { title: "Faculty Development Programs", desc: "Upskilling academic faculty on modern industry frameworks" },
    { title: "Technical Bootcamps", desc: "Concentrated 3 to 14-day intensive coding immersions" },
    { title: "Project Mentorship", desc: "Capstones, design pattern reviews, and GitHub portfolio setup" },
    { title: "Hackathons & Tech Events", desc: "Campus-wide coding hackathons and technical competitions" },
  ];

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="colleges">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            Institutional B2B Partnership
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Empowering Institutions. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              Building Industry-Ready Graduates.
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            We collaborate with universities, autonomous institutes, and engineering colleges to
            supplement academic courses with enterprise-grade technical training and placement readiness.
          </p>
        </div>

        {/* 12 Capabilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-14">
          {collegeCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 transition-all duration-300 hover:bg-navy-850 group"
            >
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-sky-400 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <h3 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Institutional CTA Box */}
        <div className="mt-14 p-8 rounded-3xl bg-gradient-to-r from-blue-950/70 via-navy-900 to-navy-950 border border-sky-500/40 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Plan an Institutional Training Drive with SV LearnLogic
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Customized batch sizes, semester-friendly scheduling, and verifiable outcome analytics.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/solutions/colleges"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
            >
              <span>Partner With Us</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
