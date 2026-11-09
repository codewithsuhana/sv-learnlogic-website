import React from "react";
import { Quote, MessageSquare } from "lucide-react";
import { sampleTestimonials } from "@/config/site";

export function TestimonialsSection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <MessageSquare className="w-3.5 h-3.5" />
            Learning Experiences
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Voices From Our Learning Ecosystem
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Sample candidate and institutional feedback representations highlighting our practical learning methodology.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sampleTestimonials.map((item) => (
            <div
              key={item.id}
              className="p-7 rounded-2xl bg-navy-900/80 border border-navy-800 flex flex-col justify-between hover:border-sky-500/40 transition-colors relative"
            >
              <div>
                <Quote className="w-8 h-8 text-sky-500/30 mb-4" />
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-navy-800">
                <div className="text-sm font-bold text-white">{item.author}</div>
                <div className="text-xs text-sky-400">{item.role}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.organization}</div>
                <div className="mt-2 text-[10px] text-slate-500 font-mono tracking-tight">
                  *Sample feedback placeholder
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
