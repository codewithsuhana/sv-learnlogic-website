import React from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Youtube,
  ArrowRight,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 border-t border-navy-800 text-slate-300 pt-16 pb-12 relative overflow-hidden">
      {/* Decorative gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-sky-500/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-navy-800/80">
          {/* Col 1: Brand & Overview */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo size="lg" />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm mt-3">
              {siteConfig.description}
            </p>

            <div className="pt-2">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Connect With Us
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
                  aria-label="Twitter / X"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl bg-navy-900 border border-navy-800 text-slate-400 hover:text-sky-400 hover:border-sky-500/50 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Col 2: Flagship Programs */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-400" />
              Flagship Programs
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/programs/java-full-stack"
                  className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                >
                  Java Full Stack
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/java-dsa"
                  className="text-slate-400 hover:text-indigo-400 transition-colors inline-block"
                >
                  Java DSA
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/python-dsa"
                  className="text-slate-400 hover:text-emerald-400 transition-colors inline-block"
                >
                  Python DSA
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/data-science"
                  className="text-slate-400 hover:text-purple-400 transition-colors inline-block"
                >
                  Data Science & ML
                </Link>
              </li>
              <li>
                <Link
                  href="/programs/generative-ai"
                  className="text-slate-400 hover:text-cyan-400 transition-colors inline-block"
                >
                  Generative AI & Agents
                </Link>
              </li>
              <li className="pt-1">
                <Link
                  href="/programs"
                  className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                >
                  All Curricula <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Enterprise & Institutions */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-400" />
              Solutions & LMS
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/solutions/colleges"
                  className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                >
                  College Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/solutions/corporate"
                  className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                >
                  Corporate Training
                </Link>
              </li>
              <li>
                <Link
                  href="/lms"
                  className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                >
                  SV LearnLogic LMS Advance
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                >
                  All 10 Core Services
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-slate-400 hover:text-sky-400 transition-colors inline-block"
                >
                  About the Company
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Verified Contact Info */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              Official Contact
            </h3>
            <div className="space-y-3 text-xs text-slate-300">
              {/* Phone */}
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">
                  Official Phone / Call & WhatsApp
                </span>
                <a
                  href={`tel:${siteConfig.contact.officialPhone}`}
                  className="font-semibold text-slate-100 hover:text-sky-400 inline-flex items-center gap-1.5 mt-0.5 text-sm transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-400" />
                  <span>{siteConfig.contact.officialPhone}</span>
                </a>
              </div>

              {/* General Email */}
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">
                  General Enquiries
                </span>
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="font-medium text-slate-200 hover:text-sky-400 inline-flex items-center gap-1.5 mt-0.5 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{siteConfig.contact.officialEmail}</span>
                </a>
              </div>

              {/* Business Contact (Suhana) */}
              <div>
                <span className="text-[11px] text-slate-400 block font-medium">
                  Business & Partnerships (Suhana)
                </span>
                <a
                  href={`mailto:${siteConfig.contact.businessEmail}`}
                  className="font-medium text-slate-200 hover:text-sky-400 inline-flex items-center gap-1.5 mt-0.5 transition-colors break-all"
                >
                  <Mail className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                  <span>{siteConfig.contact.businessEmail}</span>
                </a>
              </div>

              {/* Operations Location */}
              <div className="pt-1">
                <span className="text-[11px] text-slate-400 block font-medium">
                  Location & Operations
                </span>
                <p className="text-slate-400 inline-flex items-start gap-1.5 mt-0.5 leading-relaxed">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.addressLine1}</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Strip: Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <span>© {currentYear} {siteConfig.legalName}. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-navy-700">•</span>
            <Link href="/terms" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-navy-700">•</span>
            <Link href="/contact" className="hover:text-slate-200 transition-colors">
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
