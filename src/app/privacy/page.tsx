import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy | SV LearnLogic Pvt. Ltd.",
  description: "Official Privacy Policy for SV LearnLogic Pvt. Ltd. and how we protect candidate and client data.",
};

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-400">
            Last updated: November 2026 • SV LearnLogic Private Limited
          </p>
        </div>

        <div className="prose prose-invert max-w-none text-slate-300 space-y-6 text-sm leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">1. Introduction</h2>
            <p>
              SV LearnLogic Pvt. Ltd. (&ldquo;SV LearnLogic&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is committed to
              protecting the personal privacy and data security of candidates, corporate clients, and
              institutional representatives visiting our website and utilizing our educational services.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">2. Information We Collect</h2>
            <p>
              When you submit an enquiry through our portal, we collect voluntary information
              including your full name, email address, contact telephone number, organization or
              academic institution, program of interest, and message content.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">3. How We Use Your Data</h2>
            <p>
              Your contact details are utilized strictly to address technical queries, deliver
              requested syllabi, provide cohort batch schedules, organize institutional
              consultations, and maintain administrative records. We do not sell or lease personal data.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">4. Data Security</h2>
            <p>
              We implement industry-standard server encryption, access controls, and secure socket
              layer (SSL/TLS) connections to safeguard your personal communications against
              unauthorized access or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white">5. Contact Information</h2>
            <p>
              For any questions regarding our data privacy procedures, please contact us at:{" "}
              <a href={`mailto:${siteConfig.contact.officialEmail}`} className="text-sky-400 underline">
                {siteConfig.contact.officialEmail}
              </a>
              .
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
