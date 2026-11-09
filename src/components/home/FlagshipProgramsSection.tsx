import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Sparkles, Layers, BookOpen } from "lucide-react";
import { flagshipPrograms } from "@/config/site";

export function FlagshipProgramsSection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden" id="programs">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-blue-600/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Core Technical Curricula
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Flagship Technical Programs
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Five immersive, industry-benchmarked specializations designed to turn beginners
            and students into proficient, production-ready engineers.
          </p>
        </div>

        {/* 5 Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {flagshipPrograms.map((program, index) => {
            const isFeatured = index === 0 || index === 4; // Java Full Stack & GenAI

            return (
              <div
                key={program.id}
                className={`relative flex flex-col rounded-2xl bg-navy-900/90 border border-navy-800 hover:border-sky-500/50 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl overflow-hidden group ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
              >
                {/* Image Container with Gradient Overlay */}
                <div className={`relative w-full overflow-hidden ${index === 0 ? "h-64 sm:h-72" : "h-52"}`}>
                  <Image
                    src={program.heroImage}
                    alt={program.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-85"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-navy-950/80 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                      {program.badge}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-navy-950/70 text-slate-300 border border-navy-700">
                      {program.category}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {program.title}
                    </h3>
                    <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                      {program.shortDescription}
                    </p>

                    {/* Key Topics List */}
                    <div className="mt-5 pt-5 border-t border-navy-800">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-sky-400" />
                        Key Learning Areas
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {program.topics.slice(0, index === 0 ? 8 : 6).map((topic, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] px-2.5 py-1 rounded-lg bg-navy-950/90 text-slate-300 border border-navy-800 group-hover:border-navy-700 transition-colors"
                          >
                            {topic}
                          </span>
                        ))}
                        {program.topics.length > (index === 0 ? 8 : 6) && (
                          <span className="text-[11px] px-2 py-1 text-sky-400 font-semibold">
                            +{program.topics.length - (index === 0 ? 8 : 6)} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                    <Link
                      href={`/programs/${program.slug}`}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
                    >
                      <span>Explore Program</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <Link
                      href={`/contact?program=${encodeURIComponent(program.title)}`}
                      className="w-full sm:w-auto inline-flex items-center justify-center py-2.5 px-4 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-navy-950 hover:bg-navy-800 border border-navy-700 transition-colors"
                    >
                      Enquire Now
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Programs Bar */}
        <div className="mt-14 p-6 rounded-2xl bg-navy-900/60 border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-base font-bold text-white">
              Looking for a custom curriculum for your college or corporate team?
            </h4>
            <p className="text-xs text-slate-400 mt-0.5">
              We design modular tracks, technical bootcamps, and semester-integrated courses.
            </p>
          </div>
          <Link
            href="/contact?type=college"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-navy-800 hover:bg-navy-700 border border-navy-700 transition-colors shrink-0"
          >
            <span>Request Custom Curriculum</span>
            <ArrowRight className="w-3.5 h-3.5 text-sky-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
