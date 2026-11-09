import React from "react";
import {
  Code,
  Layers,
  Users2,
  FolderGit2,
  Compass,
  Briefcase,
  Building,
  CheckCircle,
} from "lucide-react";
import { whyChoosePoints } from "@/config/site";

export function WhyChooseSection() {
  const icons = [
    <Code key="0" className="w-5 h-5 text-sky-400" />,
    <Layers key="1" className="w-5 h-5 text-indigo-400" />,
    <Users2 key="2" className="w-5 h-5 text-emerald-400" />,
    <FolderGit2 key="3" className="w-5 h-5 text-amber-400" />,
    <Compass key="4" className="w-5 h-5 text-purple-400" />,
    <Briefcase key="5" className="w-5 h-5 text-cyan-400" />,
    <Building key="6" className="w-5 h-5 text-rose-400" />,
  ];

  return (
    <section className="py-24 bg-navy-900/50 border-t border-b border-navy-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            Our Key Differentiators
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Why Choose SV LearnLogic?
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            We focus on technical rigor, active engineering labs, and transparent learning paths
            that empower candidates to thrive in modern software ecosystems.
          </p>
        </div>

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {whyChoosePoints.map((point, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-navy-950/80 border border-navy-800 hover:border-sky-500/40 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-10 h-10 rounded-xl bg-navy-900 border border-navy-700/80 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {icons[index % icons.length]}
              </div>
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                {point.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}

          {/* Value Commitment Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-950/60 via-navy-900 to-indigo-950/60 border border-sky-500/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs uppercase tracking-wider mb-2">
                <CheckCircle className="w-4 h-4" />
                Verified Standards
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Built on Integrity & Transparency
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                No exaggerated claims or unrealistic guarantees. We deliver verified technical
                mentorship, rigorous code reviews, and industry-standard engineering practices.
              </p>
            </div>
            <div className="pt-4 text-xs text-sky-400 font-semibold">
              Learn • Logic • Lead
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
