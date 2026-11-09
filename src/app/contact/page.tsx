import React, { Suspense } from "react";
import { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Building2,
  GraduationCap,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "Contact Us | Enquiries & Technical Advisory",
  description:
    "Get in touch with SV LearnLogic Pvt. Ltd. for student programs, college partnerships, corporate upskilling, and LMS solutions. Official contact: +91 9356172197.",
};

function ContactContent() {
  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            Official Communications Hub
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            Contact SV LearnLogic
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Whether you are a student, university representative, or enterprise tech leader, our
            advisors are ready to help you plan your next technical milestone.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Enquiry Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Official Contact Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-2">
              <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block">
                Direct Channels
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Official Company Details
              </h2>
              <p className="text-xs sm:text-sm text-slate-400">
                Verified communication channels for student support, institutional MoUs, and corporate contracts.
              </p>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-sky-500/40 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-sky-400" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Official Phone & WhatsApp
                </span>
                <a
                  href={`tel:${siteConfig.contact.officialPhone}`}
                  className="text-lg font-bold text-white hover:text-sky-400 transition-colors block"
                >
                  {siteConfig.contact.officialPhone}
                </a>
                <p className="text-xs text-slate-400">
                  Direct voice calls and instant WhatsApp messaging.
                </p>
                <div className="pt-2">
                  <a
                    href={siteConfig.contact.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open WhatsApp Chat</span>
                  </a>
                </div>
              </div>
            </div>

            {/* General Email Card */}
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-sky-500/40 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-sky-400" />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                  Official General Enquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="text-base font-bold text-white hover:text-sky-400 transition-colors block truncate"
                >
                  {siteConfig.contact.officialEmail}
                </a>
                <p className="text-xs text-slate-400">
                  Primary inbox for course information, syllabus requests, and general questions.
                </p>
              </div>
            </div>

            {/* Business Contact Card (Suhana) */}
            <div className="p-6 rounded-2xl bg-navy-900/80 border border-navy-800 hover:border-indigo-500/40 transition-all flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-indigo-400" />
              </div>
              <div className="space-y-1 min-w-0">
                <span className="text-xs font-bold text-indigo-400 uppercase tracking-wider block">
                  Business & Partnerships (Suhana)
                </span>
                <a
                  href={`mailto:${siteConfig.contact.businessEmail}`}
                  className="text-base font-bold text-white hover:text-indigo-400 transition-colors block truncate"
                >
                  {siteConfig.contact.businessEmail}
                </a>
                <p className="text-xs text-slate-400">
                  Dedicated point of contact for corporate client accounts and university MoUs.
                </p>
              </div>
            </div>

            {/* Operational Location & Hours */}
            <div className="p-6 rounded-2xl bg-navy-900/50 border border-navy-800 space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Corporate Operations Hub</span>
                  <span className="text-slate-400">{siteConfig.contact.addressLine1}</span>
                  <span className="text-slate-500 block text-[11px] mt-0.5">
                    {siteConfig.contact.addressLine2}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2 border-t border-navy-850">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Advisory Hours</span>
                  <span className="text-slate-400">{siteConfig.contact.supportHours}</span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Multi-Purpose Enquiry Form */}
          <div className="lg:col-span-7">
            <EnquiryForm defaultEnquiryType="General Enquiry" />
          </div>

        </div>
      </section>

    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-navy-950 text-white p-20">Loading contact page...</div>}>
      <ContactContent />
    </Suspense>
  );
}
