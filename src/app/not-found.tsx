import React from "react";
import Link from "next/link";
import { ArrowLeft, Home, BookOpen, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function NotFound() {
  return (
    <div className="bg-navy-950 min-h-[80vh] flex items-center justify-center text-slate-100 px-4 py-20 relative overflow-hidden bg-tech-grid">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-radial from-blue-600/20 via-sky-500/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-md mx-auto text-center space-y-6 relative z-10">
        <span className="text-6xl sm:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-indigo-400 font-mono">
          404
        </span>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white">
          Page Not Found
        </h1>

        <p className="text-sm text-slate-400 leading-relaxed">
          The requested route does not exist or has been relocated. Explore our flagship technical
          curricula or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-sky-600 hover:bg-sky-500 transition-colors shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>

          <Link
            href="/programs"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-navy-900 hover:bg-navy-850 border border-navy-700 transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            <span>View Programs</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
