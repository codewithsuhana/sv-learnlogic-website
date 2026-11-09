import React from "react";
import { Users, GraduationCap, Laptop, Award, ShieldCheck } from "lucide-react";
import { impactMetrics } from "@/config/site";

export function ImpactSection() {
  const metricIcons: Record<string, React.ReactNode> = {
    students: <Users className="w-6 h-6 text-sky-400" />,
    institutions: <GraduationCap className="w-6 h-6 text-indigo-400" />,
    "programs-delivered": <Laptop className="w-6 h-6 text-emerald-400" />,
    corporate: <Award className="w-6 h-6 text-cyan-400" />,
  };

  return (
    <section className="py-20 bg-navy-900/50 border-t border-b border-navy-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <ShieldCheck className="w-3.5 h-3.5" />
            Milestones & Engagement Reach
          </div>
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Our Growing Educational Impact
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Dedicated to delivering quantifiable competency growth across learners, colleges, and corporate partners.
          </p>
        </div>

        {/* 4 Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactMetrics.map((metric) => (
            <div
              key={metric.id}
              className="p-6 rounded-2xl bg-navy-950/80 border border-navy-800 hover:border-sky-500/40 transition-all text-center flex flex-col items-center justify-center relative group"
            >
              <div className="w-12 h-12 rounded-xl bg-navy-900 border border-navy-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                {metricIcons[metric.id] || <Users className="w-6 h-6 text-sky-400" />}
              </div>
              <div className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-200 to-sky-400 font-display">
                {metric.value}
              </div>
              <div className="text-sm font-bold text-white mt-1">
                {metric.label}
              </div>
              <div className="text-xs text-slate-400 mt-1">
                {metric.subtext}
              </div>

              {metric.isPlaceholder && (
                <span className="mt-3 text-[10px] text-slate-500 font-mono tracking-tight block">
                  *Configurable metric
                </span>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
