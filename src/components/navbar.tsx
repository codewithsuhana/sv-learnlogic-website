"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  ArrowRight,
  Code2,
  GraduationCap,
  Building2,
  Cpu,
  MonitorCheck,
  BookOpen,
} from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on path change
  useEffect(() => {
    setMobileMenuOpen(false);
    setProgramsDropdownOpen(false);
    setSolutionsDropdownOpen(false);
  }, [pathname]);

  const programIcons: Record<string, React.ReactNode> = {
    "java-full-stack": <Code2 className="w-5 h-5 text-sky-400" />,
    "java-dsa": <Cpu className="w-5 h-5 text-indigo-400" />,
    "python-dsa": <Cpu className="w-5 h-5 text-emerald-400" />,
    "data-science": <BookOpen className="w-5 h-5 text-purple-400" />,
    "generative-ai": <Cpu className="w-5 h-5 text-cyan-400" />,
  };

  return (
    <>
      {/* Top Notification / Contact Strip */}
      <div className="bg-navy-950 border-b border-navy-800 text-xs text-slate-300 py-1.5 px-4 sm:px-6 relative z-50">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <a
              href={`tel:${siteConfig.contact.officialPhone}`}
              className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.officialPhone}</span>
            </a>
            <span className="text-navy-700 hidden sm:inline">|</span>
            <a
              href={`mailto:${siteConfig.contact.officialEmail}`}
              className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{siteConfig.contact.officialEmail}</span>
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <span className="text-slate-400 hidden md:inline">
              Empowering Students, Colleges & Enterprises
            </span>
            <Link
              href="/contact?type=college"
              className="text-sky-400 hover:text-sky-300 font-medium inline-flex items-center gap-1"
            >
              Institutional Partnerships <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={cn(
          "sticky top-0 z-40 transition-all duration-300 border-b",
          isScrolled
            ? "bg-navy-950/90 backdrop-blur-md border-navy-800/80 shadow-2xl py-3"
            : "bg-navy-950/70 backdrop-blur-sm border-transparent py-4"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <BrandLogo />

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              <Link
                href="/"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === "/"
                    ? "text-sky-400 bg-sky-950/40"
                    : "text-slate-200 hover:text-white hover:bg-navy-850"
                )}
              >
                Home
              </Link>

              <Link
                href="/about"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === "/about"
                    ? "text-sky-400 bg-sky-950/40"
                    : "text-slate-200 hover:text-white hover:bg-navy-850"
                )}
              >
                About
              </Link>

              {/* Programs Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setProgramsDropdownOpen(true)}
                onMouseLeave={() => setProgramsDropdownOpen(false)}
              >
                <Link
                  href="/programs"
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1.5",
                    pathname.startsWith("/programs")
                      ? "text-sky-400 bg-sky-950/40"
                      : "text-slate-200 hover:text-white hover:bg-navy-850"
                  )}
                >
                  Programs
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      programsDropdownOpen && "rotate-180"
                    )}
                  />
                </Link>

                {programsDropdownOpen && (
                  <div className="absolute top-full left-0 w-80 pt-2 z-50">
                    <div className="bg-navy-900/95 border border-navy-700/80 rounded-2xl p-3 shadow-2xl backdrop-blur-xl">
                      <div className="text-[11px] font-semibold text-slate-400 px-3 py-1 uppercase tracking-wider">
                        Flagship Technical Programs
                      </div>
                      <div className="mt-1 space-y-1">
                        {siteConfig.navigation
                          .find((item) => item.label === "Programs")
                          ?.children?.map((prog) => (
                            <Link
                              key={prog.href}
                              href={prog.href}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-navy-800 transition-colors"
                            >
                              <div className="p-2 rounded-lg bg-navy-950 border border-navy-700/60 group-hover:border-sky-500/50 transition-colors">
                                {programIcons[prog.href.split("/")[2]] || (
                                  <Code2 className="w-4 h-4 text-sky-400" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between">
                                  <span className="text-xs font-semibold text-slate-100 group-hover:text-sky-400 transition-colors">
                                    {prog.label}
                                  </span>
                                  {prog.badge && (
                                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
                                      {prog.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-[11px] text-slate-400 line-clamp-1 mt-0.5">
                                  {prog.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                      </div>
                      <div className="mt-2 pt-2 border-t border-navy-800 px-3 py-1">
                        <Link
                          href="/programs"
                          className="text-xs text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                        >
                          View All Curricula <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setSolutionsDropdownOpen(true)}
                onMouseLeave={() => setSolutionsDropdownOpen(false)}
              >
                <button
                  type="button"
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1.5",
                    pathname.startsWith("/solutions")
                      ? "text-sky-400 bg-sky-950/40"
                      : "text-slate-200 hover:text-white hover:bg-navy-850"
                  )}
                >
                  Solutions
                  <ChevronDown
                    className={cn(
                      "w-4 h-4 transition-transform duration-200",
                      solutionsDropdownOpen && "rotate-180"
                    )}
                  />
                </button>

                {solutionsDropdownOpen && (
                  <div className="absolute top-full left-0 w-72 pt-2 z-50">
                    <div className="bg-navy-900/95 border border-navy-700/80 rounded-2xl p-2.5 shadow-2xl backdrop-blur-xl">
                      <Link
                        href="/solutions/colleges"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-navy-800 transition-colors"
                      >
                        <div className="p-2 rounded-lg bg-navy-950 border border-navy-700/60 group-hover:border-sky-500/50">
                          <GraduationCap className="w-5 h-5 text-sky-400" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-100 group-hover:text-sky-400">
                            Colleges & Universities
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Campus placements, FDPs & bootcamps
                          </div>
                        </div>
                      </Link>

                      <Link
                        href="/solutions/corporate"
                        className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-navy-800 transition-colors mt-1"
                      >
                        <div className="p-2 rounded-lg bg-navy-950 border border-navy-700/60 group-hover:border-sky-500/50">
                          <Building2 className="w-5 h-5 text-indigo-400" />
                        </div>
                        <div>
                          <div className="text-xs font-semibold text-slate-100 group-hover:text-sky-400">
                            Corporate Training
                          </div>
                          <div className="text-[11px] text-slate-400 mt-0.5">
                            Workforce tech upskilling & workshops
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/services"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === "/services"
                    ? "text-sky-400 bg-sky-950/40"
                    : "text-slate-200 hover:text-white hover:bg-navy-850"
                )}
              >
                Services
              </Link>

              <Link
                href="/lms"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors inline-flex items-center gap-1.5",
                  pathname === "/lms"
                    ? "text-sky-400 bg-sky-950/40"
                    : "text-slate-200 hover:text-white hover:bg-navy-850"
                )}
              >
                LMS
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/30">
                  Advance
                </span>
              </Link>

              <Link
                href="/contact"
                className={cn(
                  "px-3.5 py-2 text-sm font-medium rounded-lg transition-colors",
                  pathname === "/contact"
                    ? "text-sky-400 bg-sky-950/40"
                    : "text-slate-200 hover:text-white hover:bg-navy-850"
                )}
              >
                Contact Us
              </Link>
            </nav>

            {/* Header Action Button */}
            <div className="hidden lg:flex items-center gap-3">
              <Link
                href="/contact"
                className="relative inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 rounded-xl bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-[right_center] shadow-[0_0_20px_rgba(37,99,235,0.35)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] active:scale-95"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Mobile Hamburger Toggle */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                href="/contact"
                className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-sky-600 text-white"
              >
                Enquire
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-navy-850 text-slate-300 hover:text-white border border-navy-700 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-x-0 top-[108px] bottom-0 bg-navy-950/98 backdrop-blur-2xl border-b border-navy-800 overflow-y-auto p-6 z-50 animate-fade-in">
            <div className="flex flex-col space-y-3 pb-8">
              <Link
                href="/"
                className="text-base font-medium text-slate-100 hover:text-sky-400 py-2 border-b border-navy-850"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-base font-medium text-slate-100 hover:text-sky-400 py-2 border-b border-navy-850"
              >
                About Us
              </Link>

              {/* Mobile Programs Group */}
              <div className="py-2 border-b border-navy-850">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  Flagship Programs
                </div>
                <div className="space-y-2 pl-3">
                  <Link
                    href="/programs/java-full-stack"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • Java Full Stack Development
                  </Link>
                  <Link
                    href="/programs/java-dsa"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • Java Data Structures & Algorithms
                  </Link>
                  <Link
                    href="/programs/python-dsa"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • Python Data Structures & Algorithms
                  </Link>
                  <Link
                    href="/programs/data-science"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • Data Science & Machine Learning
                  </Link>
                  <Link
                    href="/programs/generative-ai"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • Generative AI & Agentic Systems
                  </Link>
                </div>
              </div>

              {/* Mobile Solutions Group */}
              <div className="py-2 border-b border-navy-850">
                <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-2">
                  Solutions
                </div>
                <div className="space-y-2 pl-3">
                  <Link
                    href="/solutions/colleges"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • For Colleges & Universities
                  </Link>
                  <Link
                    href="/solutions/corporate"
                    className="block text-sm text-slate-200 hover:text-sky-300 py-1"
                  >
                    • For Corporate Enterprises
                  </Link>
                </div>
              </div>

              <Link
                href="/services"
                className="text-base font-medium text-slate-100 hover:text-sky-400 py-2 border-b border-navy-850"
              >
                Services
              </Link>

              <Link
                href="/lms"
                className="text-base font-medium text-slate-100 hover:text-sky-400 py-2 border-b border-navy-850"
              >
                LMS Solutions (LMS Advance)
              </Link>

              <Link
                href="/contact"
                className="text-base font-medium text-slate-100 hover:text-sky-400 py-2 border-b border-navy-850"
              >
                Contact Us
              </Link>

              {/* Mobile Contact Quick Action Box */}
              <div className="pt-4 space-y-3">
                <a
                  href={`tel:${siteConfig.contact.officialPhone}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-navy-900 border border-navy-800 text-sm text-slate-200"
                >
                  <Phone className="w-4 h-4 text-sky-400" />
                  <span>{siteConfig.contact.officialPhone}</span>
                </a>
                <a
                  href={`mailto:${siteConfig.contact.officialEmail}`}
                  className="flex items-center gap-3 p-3 rounded-xl bg-navy-900 border border-navy-800 text-sm text-slate-200"
                >
                  <Mail className="w-4 h-4 text-sky-400" />
                  <span className="truncate">{siteConfig.contact.officialEmail}</span>
                </a>
                <Link
                  href="/contact"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg"
                >
                  Enquire Now <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
