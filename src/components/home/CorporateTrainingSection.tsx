import React from "react";
import Link from "next/link";
import { Building2, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { corporateEngagementSteps } from "@/config/site";

export function CorporateTrainingSection() {
  const corporateSolutions = [
    "Java Full Stack Upskilling",
    "Java & Python Programming",
    "DSA & Problem-Solving for Developers",
    "Data Science & Analytics Upskilling",
    "Generative AI & LLM Integration",
    "Enterprise Software Architecture",
    "Customized Technical Workshops",
    "Employee Skill Transition Tracks",
    "High-Velocity Technical Bootcamps",
  ];

  return (
    <section className="py-24 bg-navy-900/60 border-t border-b border-navy-800/80 relative" id="corporate">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 border border-indigo-500/30 text-indigo-400 text-xs font-semibold">
            <Building2 className="w-3.5 h-3.5" />
            Enterprise Workforce Upskilling
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Building Stronger Teams Through Technology
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Accelerate internal project velocity and modernize your engineering workforce with
            custom-tailored technical learning solutions aligned to your production stack.
          </p>
        </div>

        {/* Corporate Solutions Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 max-w-4xl mx-auto">
          {corporateSolutions.map((sol, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-xl bg-navy-950 border border-navy-700/80 text-xs sm:text-sm font-medium text-slate-200 shadow-sm"
            >
              {sol}
            </span>
          ))}
        </div>

        {/* 5-Step Engagement Methodology */}
        <div className="mt-16">
          <div className="text-center mb-10">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Our 5-Stage Corporate Engagement Model
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              A structured roadmap ensuring transparent governance and measurable business impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {corporateEngagementSteps.map((step) => (
              <div
                key={step.step}
                className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 hover:border-indigo-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <span className="text-2xl font-black text-indigo-400/80 block mb-2 font-mono">
                    {step.step}
                  </span>
                  <h4 className="text-sm font-bold text-white mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="text-center mt-14">
          <Link
            href="/solutions/corporate"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-all shadow-[0_0_25px_rgba(79,70,229,0.35)]"
          >
            <span>Discuss Corporate Training</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
