import React from "react";
import { Workflow, Cpu, Target, ArrowRight } from "lucide-react";
import Link from "next/link";
import { valuePillars } from "@/config/site";

export function CompanyIntroSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Workflow: <Workflow className="w-6 h-6 text-sky-400" />,
    Cpu: <Cpu className="w-6 h-6 text-indigo-400" />,
    Target: <Target className="w-6 h-6 text-emerald-400" />,
  };

  return (
    <section className="py-24 bg-navy-900/60 border-t border-b border-navy-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-sky-500/30 text-sky-300 text-xs font-semibold">
            Company Overview & Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transforming Learning Into Real-World Skills
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            SV LearnLogic Pvt. Ltd. was founded to bridge the critical gap between academic
            syllabi and fast-evolving industry requirements. We partner with students, colleges,
            and corporate organizations to deliver structured, mentor-led technical training that
            empowers learners to build scalable software and launch resilient careers.
          </p>
        </div>

        {/* 3 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {valuePillars.map((pillar, idx) => (
            <div
              key={pillar.id}
              className="relative rounded-2xl bg-navy-950/80 border border-navy-800 p-8 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 group shadow-xl"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-700/80 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {iconMap[pillar.iconName]}
              </div>
              <span className="text-[11px] font-bold text-sky-400 uppercase tracking-widest block mb-1">
                Pillar 0{idx + 1}
              </span>
              <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* About Deep Link */}
        <div className="text-center mt-12">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 text-sm font-semibold text-sky-400 hover:text-sky-300 transition-colors group"
          >
            <span>Learn more about our educational philosophy & leadership</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
