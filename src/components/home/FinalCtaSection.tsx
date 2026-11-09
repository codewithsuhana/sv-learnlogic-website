import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Mail, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export function FinalCtaSection() {
  return (
    <section className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute inset-0 bg-tech-grid opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-radial from-blue-600/25 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-gradient-to-b from-navy-900/90 to-navy-950 border border-sky-500/40 p-8 sm:p-14 text-center shadow-[0_0_50px_rgba(37,99,235,0.2)] backdrop-blur-xl">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-navy-800/80 border border-sky-500/30 text-sky-300 text-xs font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with SV LearnLogic</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Let&apos;s Build the Future of Learning Together.
          </h2>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mt-4 leading-relaxed">
            Whether you are a student, institution or organization, SV LearnLogic is ready to help
            you take the next step with industry-oriented technical education.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-[right_center] transition-all duration-300 shadow-[0_0_25px_rgba(37,99,235,0.5)]"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/solutions/colleges"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-200 bg-navy-900 hover:bg-navy-800 border border-navy-700 hover:border-sky-500/50 transition-colors"
            >
              <span>Partner With Us</span>
            </Link>

            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm text-emerald-300 bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          {/* Verified Contact Details Quick Strip */}
          <div className="mt-10 pt-8 border-t border-navy-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a
              href={`tel:${siteConfig.contact.officialPhone}`}
              className="hover:text-sky-400 inline-flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.officialPhone}</span>
            </a>
            <span className="text-navy-700 hidden sm:inline">•</span>
            <a
              href={`mailto:${siteConfig.contact.officialEmail}`}
              className="hover:text-sky-400 inline-flex items-center gap-1.5 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.officialEmail}</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
