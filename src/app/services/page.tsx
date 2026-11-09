import React from "react";
import { Metadata } from "next";
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
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { servicesList } from "@/config/site";

export const metadata: Metadata = {
  title: "Services | Technical Training, Corporate Learning & Bootcamps",
  description:
    "Explore SV LearnLogic's 10 core offerings: Technical Training, Corporate Upskilling, Campus Placement, Internships, FDPs, Bootcamps, and LMS Solutions.",
};

export default function ServicesPage() {
  const iconComponents: Record<string, React.ReactNode> = {
    Code2: <Code2 className="w-6 h-6 text-sky-400" />,
    Building2: <Building2 className="w-6 h-6 text-indigo-400" />,
    GraduationCap: <GraduationCap className="w-6 h-6 text-emerald-400" />,
    Laptop: <Laptop className="w-6 h-6 text-cyan-400" />,
    Users: <Users className="w-6 h-6 text-purple-400" />,
    Zap: <Zap className="w-6 h-6 text-amber-400" />,
    Terminal: <Terminal className="w-6 h-6 text-rose-400" />,
    MonitorCheck: <MonitorCheck className="w-6 h-6 text-sky-400" />,
    Layers: <Layers className="w-6 h-6 text-blue-400" />,
    Compass: <Compass className="w-6 h-6 text-indigo-300" />,
  };

  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            End-to-End Educational Capabilities
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Our Core Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Delivering structured technical training, institutional enablement, workforce upskilling,
            and software solutions across 10 specialized service verticals.
          </p>
        </div>
      </section>

      {/* Deep Services Breakdown */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-12">
          {servicesList.map((service, idx) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 transition-all shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Left Column: Details */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center">
                    {iconComponents[service.iconName] || <Code2 className="w-6 h-6 text-sky-400" />}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-widest block">
                      Vertical 0{idx + 1}
                    </span>
                    <h2 className="text-2xl font-bold text-white">{service.title}</h2>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-1">
                    Target Stakeholders:
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-sky-300 px-3 py-1 rounded-full bg-navy-950 border border-navy-800 inline-block">
                    {service.targetAudience}
                  </span>
                </div>
              </div>

              {/* Right Column: Key Features & CTA */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-navy-950/80 border border-navy-800/80 flex flex-col justify-between space-y-6">
                <div>
                  <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block mb-3">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
                    {service.keyFeatures.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href={service.ctaHref}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
                >
                  <span>{service.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Service Contact Banner */}
      <section className="max-w-4xl mx-auto px-4 text-center pt-6">
        <div className="p-8 rounded-3xl bg-navy-900 border border-sky-500/30 space-y-4">
          <h3 className="text-2xl font-bold text-white">
            Need a tailored combination of services for your organization?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            We regularly formulate hybrid programs combining institutional placement bootcamps, LMS
            deployment, and corporate internship mentoring.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-blue-600 to-sky-500 shadow-lg"
            >
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
