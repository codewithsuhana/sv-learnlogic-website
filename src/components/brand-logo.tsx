"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  variant?: "full" | "icon-only" | "light-bg" | "white";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ variant = "full", className, size = "md" }: BrandLogoProps) {
  const sizeClasses = {
    sm: "h-8",
    md: "h-10",
    lg: "h-14",
  };

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 transition-transform duration-200 hover:scale-[1.02] focus:outline-none",
        className
      )}
      aria-label="SV LearnLogic Home"
    >
      {/* High-fidelity Vector SV Mark with Cap */}
      <div className="relative flex items-center">
        <svg
          viewBox="0 0 100 70"
          className={cn(
            "w-auto transition-transform duration-300 group-hover:drop-shadow-[0_0_12px_rgba(37,99,235,0.6)]",
            sizeClasses[size]
          )}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="vGrad" x1="20%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38BDF8" />
              <stop offset="60%" stopColor="#2563EB" />
              <stop offset="100%" stopColor="#1D4ED8" />
            </linearGradient>
            <linearGradient id="sGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#94A3B8" />
            </linearGradient>
            <linearGradient id="capGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0B132B" />
              <stop offset="100%" stopColor="#1E293B" />
            </linearGradient>
          </defs>

          {/* S Letterform */}
          <path
            d="M 50 15 L 20 15 C 14 15 10 19 10 25 C 10 32 14 36 22 36 L 40 36 C 44 36 46 38 46 41 C 46 45 42 48 36 48 L 8 48 L 5 57 L 36 57 C 48 57 56 49 56 39 C 56 30 49 26 39 25 L 24 25 C 20 25 19 23 19 21 C 19 19 21 18 25 18 L 47 18 Z"
            fill={variant === "light-bg" ? "#0F172A" : "url(#sGrad)"}
          />

          {/* V Letterform */}
          <path
            d="M 45 35 L 59 64 C 60 66 63 66 65 64 L 79 24 L 69 24 L 61 50 L 51 28 Z"
            fill="url(#vGrad)"
          />

          {/* Graduation Cap atop the V */}
          <path
            d="M 78 12 L 89 7 L 100 12 L 89 17 Z"
            fill="#38BDF8"
          />
          {/* Cap Base / Skullcap */}
          <path
            d="M 83 15.5 Q 89 19.5 95 15.5 L 95 17 Q 89 21 83 17 Z"
            fill="#2563EB"
          />
          {/* Tassel */}
          <path
            d="M 97 13 L 97 22 M 95.5 22 L 98.5 22"
            stroke="#67E8F9"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {variant !== "icon-only" && (
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span
              className={cn(
                "text-lg font-black tracking-wider leading-none",
                variant === "light-bg"
                  ? "text-slate-900"
                  : "text-white"
              )}
            >
              SV <span className="text-sky-400">LEARNLOGIC</span>
            </span>
          </div>
          <span className="text-[9px] font-semibold tracking-[0.22em] text-slate-400 uppercase leading-none mt-1">
            Learn • Logic • Lead
          </span>
        </div>
      )}
    </Link>
  );
}
