"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  BookOpen,
  Code2,
  Briefcase,
  Layers,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Clock,
  GraduationCap,
  Terminal,
  HelpCircle,
  FileCode,
  Laptop,
} from "lucide-react";
import { Program } from "@/types";
import { flagshipPrograms } from "@/config/site";
import { EnquiryForm } from "@/components/enquiry-form";
import { cn } from "@/lib/utils";

interface ProgramDetailViewProps {
  program: Program;
}

export function ProgramDetailView({ program }: ProgramDetailViewProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [expandedModule, setExpandedModule] = useState<number | null>(1);
  const [imgSrc, setImgSrc] = useState(program.heroImage);

  // Other related programs
  const relatedPrograms = flagshipPrograms.filter((p) => p.id !== program.id);

  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* 1. Hero Section */}
      <section className="relative pt-12 pb-20 bg-navy-950 bg-tech-grid border-b border-navy-800 overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-400 mb-6">
            <Link href="/" className="hover:text-slate-200 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/programs" className="hover:text-slate-200 transition-colors">
              Programs
            </Link>
            <span>/</span>
            <span className="text-sky-400 font-semibold">{program.shortTitle}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/30">
                  {program.badge}
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-navy-900 text-slate-300 border border-navy-700">
                  {program.category}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {program.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
                {program.tagline}
              </p>

              {/* Quick Meta Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 text-xs">
                  <span className="text-slate-400 block mb-0.5">Skill Level</span>
                  <span className="font-semibold text-slate-200">{program.level}</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 text-xs">
                  <span className="text-slate-400 block mb-0.5">Delivery Format</span>
                  <span className="font-semibold text-slate-200">{program.format}</span>
                </div>
                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 text-xs col-span-2 sm:col-span-1">
                  <span className="text-slate-400 block mb-0.5">Duration</span>
                  <span className="font-semibold text-sky-400">Cohort / Configurable</span>
                </div>
              </div>

              {/* Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="#curriculum"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
                >
                  <BookOpen className="w-4 h-4" />
                  <span>View Detailed Curriculum</span>
                </a>
                <a
                  href="#enquiry"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-navy-900 hover:bg-navy-850 border border-navy-700 transition-colors"
                >
                  <span>Enquire for Next Batch</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Media Preview */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-navy-700/80 shadow-2xl group h-80 sm:h-96 w-full">
                <Image
                  src={imgSrc}
                  alt={program.title}
                  fill
                  onError={() =>
                    setImgSrc(
                      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1600&q=80"
                    )
                  }
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-80"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-navy-950/90 border border-navy-800 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[11px] text-slate-400 block">Practical Rigor</span>
                      <span className="text-sm font-bold text-white">
                        {program.topics.length}+ Core Tech Topics Covered
                      </span>
                    </div>
                    <FileCode className="w-6 h-6 text-sky-400" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Program Overview & Key Topics Strip */}
      <section className="py-16 bg-navy-900/40 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Overview */}
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl font-bold text-white flex items-center gap-2">
                <Terminal className="w-5 h-5 text-sky-400" />
                Program Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {program.longDescription}
              </p>

              <div className="pt-4">
                <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Prerequisites
                </h3>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-400">
                  {program.prerequisites.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 mt-2 shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Complete Topics List */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-navy-950 border border-navy-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4 flex items-center justify-between">
                <span>Complete Subject Scope</span>
                <span className="text-xs text-sky-400 font-semibold">
                  {program.topics.length} Areas
                </span>
              </h3>
              <div className="flex flex-wrap gap-2 max-h-72 overflow-y-auto pr-1">
                {program.topics.map((topic, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1.5 rounded-lg bg-navy-900 text-slate-300 border border-navy-800"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Who Should Enroll & Career Opportunities */}
      <section className="py-16 bg-navy-950 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Who Should Enroll */}
            <div className="p-7 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-sky-400" />
                Who Should Enroll
              </h2>
              <ul className="space-y-3">
                {program.targetAudience.map((audience, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{audience}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Career Opportunities */}
            <div className="p-7 rounded-2xl bg-navy-900/70 border border-navy-800 space-y-4">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-indigo-400" />
                Target Engineering Roles
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {program.careerOpportunities.map((role, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 text-xs font-semibold text-slate-200"
                  >
                    {role}
                  </div>
                ))}
              </div>
              <p className="text-[11px] text-slate-500 italic pt-2">
                *Role titles represent standard industry designations aligned with this technical curriculum.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Detailed Curriculum */}
      <section className="py-20 bg-navy-900/40 border-b border-navy-800/80" id="curriculum">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Step-by-Step Learning Path
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Detailed Modular Curriculum
            </h2>
            <p className="text-sm text-slate-400">
              Structured modules engineered to guide you from foundational mechanics to end-to-end implementation.
            </p>
          </div>

          <div className="space-y-4">
            {program.curriculum.map((module) => {
              const isExpanded = expandedModule === module.moduleNumber;

              return (
                <div
                  key={module.moduleNumber}
                  className="rounded-2xl bg-navy-950 border border-navy-800 overflow-hidden transition-all"
                >
                  <button
                    onClick={() =>
                      setExpandedModule(isExpanded ? null : module.moduleNumber)
                    }
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-navy-900/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-9 h-9 rounded-xl bg-navy-900 border border-navy-700 flex items-center justify-center text-xs font-mono font-bold text-sky-400 shrink-0">
                        0{module.moduleNumber}
                      </span>
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-white">
                          {module.title}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                          {module.description}
                        </p>
                      </div>
                    </div>

                    <ChevronDown
                      className={cn(
                        "w-5 h-5 text-slate-400 transition-transform duration-200 shrink-0",
                        isExpanded && "rotate-180 text-sky-400"
                      )}
                    />
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-navy-900 space-y-4 bg-navy-900/20">
                      <div>
                        <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-2">
                          Key Topics Covered:
                        </span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {module.topics.map((t, tIdx) => (
                            <li key={tIdx} className="text-xs text-slate-300 flex items-start gap-2">
                              <span className="text-sky-400">•</span>
                              <span>{t}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="p-4 rounded-xl bg-navy-900/80 border border-sky-500/30 text-xs">
                        <span className="font-bold text-sky-300 uppercase tracking-wider block mb-1">
                          Practical Lab Deliverable:
                        </span>
                        <p className="text-slate-300">{module.handsOnLab}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. Real-World Projects & Practical Assignments */}
      <section className="py-20 bg-navy-950 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-14">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Portfolio & Implementation
            </span>
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Real-World Capstone Projects
            </h2>
            <p className="text-sm text-slate-400">
              Build production-grade systems that demonstrate genuine engineering ability to potential employers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.realWorldProjects.map((project, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-xs font-mono font-semibold text-sky-400 uppercase tracking-wider mb-2">
                    Project 0{idx + 1}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>
                  
                  <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 text-xs mb-4">
                    <span className="text-slate-400 block mb-0.5 font-medium">System Impact:</span>
                    <span className="text-emerald-400 font-semibold">{project.impact}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.technologies.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[11px] px-2.5 py-1 rounded bg-navy-950 text-slate-300 border border-navy-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Practical Assignments Box */}
          <div className="mt-10 p-6 rounded-2xl bg-navy-900/50 border border-navy-800">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2">
              <Laptop className="w-4 h-4 text-sky-400" />
              Regular Coding Assignments & Review Exercises
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
              {program.practicalAssignments.map((assignment, aIdx) => (
                <div key={aIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                  <span>{assignment}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 6. Skills Developed & Learning Outcomes */}
      <section className="py-16 bg-navy-900/40 border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-2">
                Measurable Competencies
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                What You Will Achieve
              </h2>
              <ul className="space-y-3">
                {program.learningOutcomes.map((outcome, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-navy-950 border border-navy-800">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-4">
                Core Skills Matrix
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {program.skillsDeveloped.map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-xs font-medium text-slate-200 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 rounded-full bg-sky-400" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 7. FAQs */}
      <section className="py-16 bg-navy-950 border-b border-navy-800/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center justify-center gap-2">
              <HelpCircle className="w-6 h-6 text-sky-400" />
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3">
            {program.faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-xl bg-navy-900/60 border border-navy-800 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-navy-850 transition-colors"
                  >
                    <span className="text-sm font-bold text-white">{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "w-4 h-4 text-slate-400 transition-transform shrink-0",
                        isOpen && "rotate-180 text-sky-400"
                      )}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 border-t border-navy-800/60 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Dedicated Enquiry Form */}
      <section className="py-20 bg-navy-900/60" id="enquiry">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              Enrollment & Batch Scheduling
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Enquire About {program.shortTitle}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Submit your enquiry to receive the complete syllabus, upcoming cohort dates, and counseling details.
            </p>
          </div>

          <EnquiryForm
            defaultEnquiryType="Student Program"
            defaultProgram={program.title}
          />
        </div>
      </section>

      {/* 9. Related Flagship Programs */}
      <section className="py-16 bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-white mb-6">Explore Related Programs</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {relatedPrograms.map((rel) => (
              <Link
                key={rel.id}
                href={`/programs/${rel.slug}`}
                className="p-5 rounded-xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 hover:bg-navy-850 transition-all group"
              >
                <span className="text-[10px] font-semibold text-sky-400 uppercase tracking-wider block mb-1">
                  {rel.category}
                </span>
                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  {rel.title}
                </h4>
                <p className="text-xs text-slate-400 line-clamp-2 mt-1">
                  {rel.shortDescription}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
