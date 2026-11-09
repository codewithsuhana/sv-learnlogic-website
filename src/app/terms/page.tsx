import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms and Conditions | SV LearnLogic Pvt. Ltd.",
  description: "Terms and conditions governing the use of the SV LearnLogic Pvt. Ltd. website and training services.",
};

export default function TermsPage() {
  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 hover:text-sky-300"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
            Legal & Governance
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
            Terms & Conditions
          </h1>
          <p className="text-xs text-slate-400">
            Last updated: November 2026 • SV LearnLogic Private Limited
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing the website and learning resources of SV LearnLogic Pvt. Ltd., you agree to
              be bound by these Terms and Conditions and applicable Indian law and regulations.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Educational Services & Intellectual Property</h2>
            <p>
              All curriculum modules, code exercises, documentation, slide decks, and proprietary
              materials delivered by SV LearnLogic remain the intellectual property of SV LearnLogic
              Pvt. Ltd. Redistribution or unauthorized commercial reproduction is strictly prohibited.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. Professional Disclaimer</h2>
            <p>
              SV LearnLogic provides skill-building training and career development initiatives. While
              our curricula are meticulously engineered to maximize candidate competitiveness, we do
              not make unsupported salary or employment guarantees. Career outcomes depend upon
              individual candidate dedication, interview performance, and market conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India,
              with competent jurisdiction residing in Maharashtra, India.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
