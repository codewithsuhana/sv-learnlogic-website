import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Layers, CheckCircle2, Sparkles } from "lucide-react";
import { flagshipPrograms } from "@/config/site";

export const metadata: Metadata = {
  title: "Programs | Technical Education & IT Training",
  description:
    "Explore SV LearnLogic's flagship technical programs: Java Full Stack, Java DSA, Python DSA, Data Science, and Generative AI.",
};

export default function ProgramsPage() {
  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Industry-Oriented Curricula
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            Our Flagship Technical Programs
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Engineered to transition learners from fundamental concepts to enterprise-grade
            software implementation. Select a program to explore the detailed curriculum.
          </p>
        </div>
      </section>

      {/* Programs List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-12">
          {flagshipPrograms.map((program, idx) => (
            <div
              key={program.id}
              className="rounded-3xl bg-navy-900/80 border border-navy-800 hover:border-sky-500/50 transition-all duration-300 overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 gap-0 group"
            >
              {/* Image Col */}
              <div className="lg:col-span-5 relative h-64 lg:h-auto min-h-[260px]">
                <Image
                  src={program.heroImage}
                  alt={program.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-navy-900 via-navy-900/40 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-navy-950/80 text-sky-300 border border-sky-500/30 backdrop-blur-md">
                    {program.badge}
                  </span>
                </div>
              </div>

              {/* Info Col */}
              <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div>
                  <div className="text-xs font-semibold text-sky-400 uppercase tracking-widest mb-1">
                    {program.category} Track
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-sky-300 transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                    {program.longDescription}
                  </p>

                  {/* Highlights */}
                  <div className="mt-5 pt-4 border-t border-navy-800/80">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                      Key Curriculum Areas ({program.topics.length} Modules):
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {program.topics.slice(0, 7).map((topic, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-xs px-2.5 py-1 rounded-lg bg-navy-950 text-slate-300 border border-navy-800"
                        >
                          {topic}
                        </span>
                      ))}
                      {program.topics.length > 7 && (
                        <span className="text-xs px-2 py-1 text-sky-400 font-semibold">
                          +{program.topics.length - 7} more topics
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs sm:text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
                  >
                    <span>View Full Syllabus & Labs</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <Link
                    href={`/contact?program=${encodeURIComponent(program.title)}`}
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-300 hover:text-white bg-navy-950 hover:bg-navy-800 border border-navy-700 transition-colors"
                  >
                    Enquire for Cohort
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
