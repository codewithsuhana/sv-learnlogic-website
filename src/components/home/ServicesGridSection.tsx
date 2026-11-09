import React from "react";
import Link from "next/link";
import {
  Code2,
  Building2,
  GraduationCap,
  Laptop,
  Users,
  Zap,
  Terminal,
  MonitorCheck,
  Layers,
  Compass,
  ArrowRight,
} from "lucide-react";
import { servicesList } from "@/config/site";

export function ServicesGridSection() {
  const iconComponents: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-5 h-5 text-sky-400" />,
    Building2: <Building2 className="w-5 h-5 text-indigo-400" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-emerald-400" />,
    Laptop: <Laptop className="w-5 h-5 text-cyan-400" />,
    Users: <Users className="w-5 h-5 text-purple-400" />,
    Zap: <Zap className="w-5 h-5 text-amber-400" />,
    Terminal: <Terminal className="w-5 h-5 text-rose-400" />,
    MonitorCheck: <MonitorCheck className="w-5 h-5 text-sky-400" />,
    Layers: <Layers className="w-5 h-5 text-blue-400" />,
    Compass: <Compass className="w-5 h-5 text-indigo-300" />,
  };

  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            Comprehensive Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Core Services
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Tailored learning solutions designed to address every facet of technical education,
            institutional collaboration, and workforce upskilling.
          </p>
        </div>

        {/* 10 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                  {iconComponents[service.iconName] || <Code2 className="w-5 h-5 text-sky-400" />}
                </div>
                <span className="text-[10px] font-bold text-sky-400 uppercase tracking-widest block mb-1">
                  Service 0{idx + 1}
                </span>
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-sky-300 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {service.description}
                </p>
              </div>

              <div className="pt-4 border-t border-navy-800/80 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {service.targetAudience}
                </span>
                <Link
                  href={service.ctaHref}
                  className="text-xs font-semibold text-sky-400 hover:text-sky-300 inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-all"
                >
                  Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
