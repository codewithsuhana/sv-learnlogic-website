import React from "react";
import Link from "next/link";
import {
  MonitorCheck,
  ArrowRight,
  BarChart3,
  Users,
  BookOpen,
  Shield,
  Layers,
  Sparkles,
} from "lucide-react";

export function LmsShowcaseSection() {
  const stakeholderBenefits = [
    {
      role: "Educational Institutions",
      benefit: "Centralized cohort management, attendance analytics, and structured curriculum oversight.",
    },
    {
      role: "Technical Trainers",
      benefit: "Streamlined assignment distribution, automated lab evaluations, and batch progress tracking.",
    },
    {
      role: "Students & Learners",
      benefit: "Structured course material, recorded sessions, lab exercises, and self-assessment benchmarks.",
    },
    {
      role: "Learning Administrators",
      benefit: "Institutional reporting, multi-tenant role control, and data export capabilities.",
    },
  ];

  return (
    <section className="py-24 bg-navy-900/60 border-t border-b border-navy-800/80 relative" id="lms">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <MonitorCheck className="w-3.5 h-3.5" />
            Proprietary EdTech Platform
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            SV LearnLogic LMS Advance
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Our specialized Learning Management System platform engineered to streamline
            technical training delivery, track student competency growth, and empower institutional leadership.
          </p>
        </div>

        {/* Product Dashboard Visual Mockup */}
        <div className="mt-16 max-w-5xl mx-auto">
          <div className="rounded-3xl bg-navy-950/90 border border-navy-700/80 shadow-[0_0_50px_rgba(37,99,235,0.15)] overflow-hidden">
            
            {/* Top Mock Window Bar */}
            <div className="px-5 py-3.5 bg-navy-900/90 border-b border-navy-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-3 text-xs font-semibold text-slate-300 hidden sm:inline">
                  SV LearnLogic LMS Advance – Institutional Dashboard Preview
                </span>
              </div>
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                Platform Demo Mockup
              </span>
            </div>

            {/* Mock Dashboard Interior */}
            <div className="p-6 sm:p-8 space-y-6">
              
              {/* Stat Counters Row */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-navy-900/70 border border-navy-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Active Cohorts</span>
                  <span className="text-2xl font-black text-white mt-1 block">12</span>
                  <span className="text-[10px] text-sky-400">Spring Boot & DSA</span>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/70 border border-navy-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Students Enrolled</span>
                  <span className="text-2xl font-black text-white mt-1 block">480+</span>
                  <span className="text-[10px] text-emerald-400">Across 3 Campuses</span>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/70 border border-navy-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Lab Completion</span>
                  <span className="text-2xl font-black text-white mt-1 block">94.2%</span>
                  <span className="text-[10px] text-indigo-400">Above Threshold</span>
                </div>
                <div className="p-4 rounded-xl bg-navy-900/70 border border-navy-800">
                  <span className="text-[11px] text-slate-400 uppercase font-semibold block">Code Assessments</span>
                  <span className="text-2xl font-black text-white mt-1 block">1,820</span>
                  <span className="text-[10px] text-purple-400">Automated Runs</span>
                </div>
              </div>

              {/* Mock Chart & Modules Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2 p-5 rounded-xl bg-navy-900/70 border border-navy-800 space-y-3">
                  <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                    <span>Batch Progress & Curriculum Completion Rate</span>
                    <span className="text-sky-400 font-normal">Weekly Velocity</span>
                  </div>
                  {/* Visual Bar Graphs */}
                  <div className="space-y-2.5 pt-2">
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Cohort 2026-A: Java Full Stack</span>
                        <span className="text-slate-200">82%</span>
                      </div>
                      <div className="h-2 w-full bg-navy-950 rounded-full overflow-hidden">
                        <div className="h-2 bg-sky-500 rounded-full w-[82%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Cohort 2026-B: Java DSA Intensive</span>
                        <span className="text-slate-200">68%</span>
                      </div>
                      <div className="h-2 w-full bg-navy-950 rounded-full overflow-hidden">
                        <div className="h-2 bg-indigo-500 rounded-full w-[68%]" />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-[11px] text-slate-400 mb-1">
                        <span>Cohort 2026-C: Generative AI & Agents</span>
                        <span className="text-slate-200">45%</span>
                      </div>
                      <div className="h-2 w-full bg-navy-950 rounded-full overflow-hidden">
                        <div className="h-2 bg-cyan-400 rounded-full w-[45%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 rounded-xl bg-navy-900/70 border border-navy-800 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-semibold text-slate-300 block mb-2">
                      Recent Activity Feed
                    </span>
                    <ul className="text-xs space-y-2 text-slate-400">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        <span>Java Spring Boot Lab #4 released</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <span>DSA Mock Test results generated</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>Attendance report dispatched</span>
                      </li>
                    </ul>
                  </div>
                  <div className="text-[10px] text-slate-500 italic pt-3 border-t border-navy-800">
                    *Placeholder preview for confirmed platform features
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Stakeholder Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {stakeholderBenefits.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-navy-950 border border-navy-800 hover:border-sky-500/40 transition-colors"
            >
              <h4 className="text-sm font-bold text-sky-400 mb-1.5">{item.role}</h4>
              <p className="text-xs text-slate-400 leading-relaxed">{item.benefit}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="/lms"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
          >
            <span>Explore LMS Solutions</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
