"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, Code2, Database, Bot, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden pt-12 pb-20 bg-navy-950 bg-tech-grid">
      {/* Dynamic Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 right-10 w-96 h-96 bg-purple-600/10 blur-3xl pointer-events-none" />
      <div className="absolute top-20 left-10 w-80 h-80 bg-cyan-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-900/90 border border-sky-500/30 text-sky-300 text-xs font-semibold backdrop-blur-md shadow-[0_0_15px_rgba(56,189,248,0.2)]">
              <Sparkles className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.subTagline}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
              <span className="text-slate-400">EdTech & Corporate Learning</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Building{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-300">
                Future-Ready
              </span>{" "}
              Tech Talent Through Industry-Oriented Learning.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Empowering students, institutions and organizations with practical technology
              education, advanced technical training and innovative learning solutions.
            </p>

            {/* Bullet Highlights */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 pt-1">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Hands-on Code Labs</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Modern Tech Stacks</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-sky-400" />
                <span>Institutional & Corporate Tracks</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Link
                href="/programs"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-[right_center] transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.45)] hover:shadow-[0_0_35px_rgba(37,99,235,0.7)] hover:scale-[1.02] active:scale-95 text-sm"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/solutions/colleges"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-slate-200 bg-navy-900/80 hover:bg-navy-800 border border-navy-700 hover:border-sky-500/50 transition-all duration-300 text-sm backdrop-blur-md"
              >
                <span>Partner With Us</span>
              </Link>
            </div>
          </div>

          {/* Right Column: High-Tech Code & System Visual */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer Glow Halo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-600/40 via-sky-500/30 to-purple-600/40 blur-xl opacity-70 group-hover:opacity-100 transition duration-1000" />

              {/* IDE / Terminal Card Mockup */}
              <div className="relative rounded-2xl bg-navy-900/95 border border-navy-700/80 shadow-2xl backdrop-blur-xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-950 border-b border-navy-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                    <Terminal className="w-3.5 h-3.5 text-sky-400" />
                    <span>sv-learnlogic-engine.ts</span>
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Live Session
                  </span>
                </div>

                {/* Code Body */}
                <div className="p-5 font-mono text-xs sm:text-[13px] leading-relaxed text-slate-300 space-y-2">
                  <p className="text-slate-500">// 1. Initialize modern technology pipeline</p>
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-sky-300">learner</span> ={" "}
                    <span className="text-purple-400">new</span>{" "}
                    <span className="text-yellow-300">SVLearner</span>&#40;&#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">specialization:</span>{" "}
                    <span className="text-emerald-300">&quot;FullStack | GenAI | DSA&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">methodology:</span>{" "}
                    <span className="text-emerald-300">&quot;Hands-On Implementation&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">mentorAssisted:</span>{" "}
                    <span className="text-sky-400">true</span>,
                  </p>
                  <p>&#125;&#41;;</p>

                  <p className="text-slate-500 pt-1">// 2. Execute industry-grade workflows</p>
                  <p>
                    <span className="text-purple-400">await</span> learner.
                    <span className="text-blue-400">buildProject</span>&#40;&#123;
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">architecture:</span>{" "}
                    <span className="text-emerald-300">&quot;Distributed Microservices & RAG&quot;</span>,
                  </p>
                  <p className="pl-4">
                    <span className="text-slate-400">outcome:</span>{" "}
                    <span className="text-emerald-300">&quot;Production Ready SDE&quot;</span>
                  </p>
                  <p>&#125;&#41;;</p>

                  <div className="mt-3 p-3 rounded-xl bg-navy-950/80 border border-navy-800 text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-slate-400">
                      <span>Compilation Status:</span>
                      <span className="text-emerald-400 font-semibold">100% Verified</span>
                    </div>
                    <div className="w-full bg-navy-800 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-gradient-to-r from-blue-500 to-sky-400 h-1.5 w-full animate-pulse" />
                    </div>
                  </div>
                </div>

                {/* Floating Micro Cards */}
                <div className="px-5 pb-5 grid grid-cols-3 gap-2 text-center">
                  <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800">
                    <Code2 className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-slate-200 block">Clean Code</span>
                    <span className="text-[10px] text-slate-500">Enterprise Java</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800">
                    <Database className="w-4 h-4 text-indigo-400 mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-slate-200 block">DSA Patterns</span>
                    <span className="text-[10px] text-slate-500">17 Core Areas</span>
                  </div>
                  <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800">
                    <Bot className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                    <span className="text-[11px] font-semibold text-slate-200 block">GenAI & RAG</span>
                    <span className="text-[10px] text-slate-500">Agentic AI</span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
