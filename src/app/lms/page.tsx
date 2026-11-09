import React from "react";
import { Metadata } from "next";
import {
  MonitorCheck,
  CheckCircle2,
  Users,
  Shield,
  Layers,
  ArrowRight,
  BarChart3,
  BookOpen,
  Terminal,
  Cpu,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { EnquiryForm } from "@/components/enquiry-form";

export const metadata: Metadata = {
  title: "SV LearnLogic LMS Advance | Learning Management System Platform",
  description:
    "Discover SV LearnLogic LMS Advance: A modern Learning Management System designed for educational institutions, corporate training divisions, and learning administrators.",
};

export default function LmsPage() {
  const intendedUserGroups = [
    {
      group: "Educational Institutions",
      desc: "Centralize semester courses, track multi-department performance, manage academic faculty, and generate compliance-ready accreditation reports.",
      icon: <MonitorCheck className="w-6 h-6 text-sky-400" />,
    },
    {
      group: "Technical Trainers",
      desc: "Easily distribute programming labs, schedule live webinar sessions, author code evaluations, and track individual student blockers in real time.",
      icon: <Terminal className="w-6 h-6 text-indigo-400" />,
    },
    {
      group: "Students & Learners",
      desc: "Access structured curriculum modules, submit assignments, view personalized progress dashboards, and track milestone accomplishments.",
      icon: <BookOpen className="w-6 h-6 text-emerald-400" />,
    },
    {
      group: "Learning Administrators",
      desc: "Configure role-based access control (RBAC), provision cohort licenses, monitor system activity logs, and export institutional data seamlessly.",
      icon: <Shield className="w-6 h-6 text-purple-400" />,
    },
  ];

  const plannedFeatures = [
    {
      title: "Modular Course Architecture",
      desc: "Organize curricula into structured modules, prerequisite gates, and guided milestone checkpoints.",
      status: "Core Architecture",
    },
    {
      title: "Automated Code Assessment Readiness",
      desc: "Engineered to support code submission evaluations, standard test runners, and automated syntax reviews.",
      status: "Integration Ready",
    },
    {
      title: "Real-Time Competency Analytics",
      desc: "Actionable visual telemetry showing completion rates, drop-off markers, and individual student proficiency.",
      status: "Analytics Dashboard",
    },
    {
      title: "Role-Based Multi-Tenancy",
      desc: "Fine-grained permissions for students, mentors, campus coordinators, and executive leadership.",
      status: "Security Model",
    },
    {
      title: "Assignment & Project Submissions",
      desc: "Versioned repository tracking, GitHub pull-request links, and structured mentor review rubrics.",
      status: "Workflow Ready",
    },
    {
      title: "Attendance & Batch Telemetry",
      desc: "Track live class attendance, recording viewership, and engagement velocity per cohort.",
      status: "Batch Management",
    },
  ];

  return (
    <div className="bg-navy-950 min-h-screen text-slate-100 pb-20">
      
      {/* Hero Section */}
      <section className="relative py-20 bg-navy-950 bg-tech-grid border-b border-navy-800 text-center overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-900 border border-sky-500/30 text-sky-400 text-xs font-semibold">
            <MonitorCheck className="w-3.5 h-3.5" />
            EdTech Platform Solutions
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
            SV LearnLogic LMS Advance
          </h1>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Our next-generation Learning Management System engineered to power technical education
            delivery, track student programming velocity, and streamline institutional learning workflows.
          </p>
          <div className="pt-2">
            <a
              href="#lms-enquiry"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
            >
              <span>Request Platform Demo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="rounded-3xl bg-navy-900/80 border border-navy-700/80 p-6 sm:p-10 shadow-2xl overflow-hidden relative">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-navy-800">
            <div>
              <span className="text-xs font-mono font-bold text-sky-400 uppercase tracking-wider block">
                Platform Interface Preview
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Unified Institutional Management Console
              </h2>
            </div>
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 border border-sky-500/20">
              SV LearnLogic LMS Advance v2.0
            </span>
          </div>

          {/* Interactive UI Mockup Visual */}
          <div className="mt-8 rounded-2xl bg-navy-950 border border-navy-800 p-6 space-y-6">
            
            {/* Top Stat Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs text-slate-400 block font-medium">Enrolled Cohorts</span>
                <span className="text-2xl font-black text-white mt-1 block">18 Batches</span>
                <span className="text-[11px] text-sky-400">Spring Boot & DSA</span>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs text-slate-400 block font-medium">Active Learners</span>
                <span className="text-2xl font-black text-white mt-1 block">650+</span>
                <span className="text-[11px] text-emerald-400">Daily Active Ratio: 91%</span>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs text-slate-400 block font-medium">Lab Submissions</span>
                <span className="text-2xl font-black text-white mt-1 block">4,280</span>
                <span className="text-[11px] text-indigo-400">Automated Tests Evaluated</span>
              </div>
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
                <span className="text-xs text-slate-400 block font-medium">Placement Readiness</span>
                <span className="text-2xl font-black text-white mt-1 block">88.4%</span>
                <span className="text-[11px] text-cyan-400">Benchmark Cleared</span>
              </div>
            </div>

            {/* Split Views */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 p-5 rounded-xl bg-navy-900 border border-navy-800 space-y-3">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span>Curriculum Milestones by Specialization</span>
                  <span className="text-sky-400 font-normal">Real-Time Sync</span>
                </div>
                <div className="space-y-3 pt-2">
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Java Full Stack (Microservices & React)</span>
                      <span className="text-slate-200">85% Complete</span>
                    </div>
                    <div className="h-2.5 bg-navy-950 rounded-full overflow-hidden">
                      <div className="h-2.5 bg-gradient-to-r from-blue-600 to-sky-400 rounded-full w-[85%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Java & Python Data Structures (17 Topics)</span>
                      <span className="text-slate-200">72% Complete</span>
                    </div>
                    <div className="h-2.5 bg-navy-950 rounded-full overflow-hidden">
                      <div className="h-2.5 bg-gradient-to-r from-indigo-600 to-purple-400 rounded-full w-[72%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>Generative AI & Agentic Systems</span>
                      <span className="text-slate-200">58% Complete</span>
                    </div>
                    <div className="h-2.5 bg-navy-950 rounded-full overflow-hidden">
                      <div className="h-2.5 bg-gradient-to-r from-cyan-600 to-teal-400 rounded-full w-[58%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-navy-900 border border-navy-800 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-2">
                    System Telemetry Log
                  </span>
                  <div className="font-mono text-[11px] text-slate-400 space-y-1.5">
                    <p className="text-emerald-400">[09:20] Lab test run #204 passing</p>
                    <p className="text-slate-300">[09:25] 42 PRs submitted for review</p>
                    <p className="text-sky-400">[09:40] Attendance verified: 98%</p>
                    <p className="text-slate-400">[10:00] Cohort report exported</p>
                  </div>
                </div>
                <div className="text-[10px] text-slate-500 italic pt-3 border-t border-navy-800">
                  *Visual dashboard mock for confirmed institutional capabilities
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Intended User Groups */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
          <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
            Stakeholder Value
          </span>
          <h2 className="text-3xl font-extrabold text-white">Built for Every Role</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {intendedUserGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-navy-900/70 border border-navy-800 hover:border-sky-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-center mb-4">
                  {group.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{group.group}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {group.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Planned Feature Architecture */}
      <section className="py-20 bg-navy-900/40 border-t border-b border-navy-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider">
              Platform Features
            </span>
            <h2 className="text-3xl font-extrabold text-white">Platform Capabilities</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {plannedFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-950 border border-navy-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-wider">
                      Module 0{idx + 1}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      {feat.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">{feat.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LMS Enquiry Form */}
      <section className="py-20 bg-navy-950" id="lms-enquiry">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-wider block mb-1">
              Explore Institutional Licensing
            </span>
            <h2 className="text-3xl font-extrabold text-white">
              Request LMS Advance Consultation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Connect with our product specialists to explore LMS deployment, pilot setups, and custom LMS integrations.
            </p>
          </div>

          <EnquiryForm defaultEnquiryType="LMS Solutions" />
        </div>
      </section>

    </div>
  );
}
