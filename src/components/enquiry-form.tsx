"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Send, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { flagshipPrograms, siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  fullName: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .regex(/^[+0-9\s\-()]{10,20}$/, "Please enter a valid telephone number"),
  organization: z.string().optional(),
  enquiryType: z.enum([
    "Student Program",
    "College & University Partnership",
    "Corporate Training",
    "LMS Solutions",
    "General Enquiry",
  ]),
  interestedProgram: z.string().optional(),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  honeypot: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface EnquiryFormProps {
  defaultEnquiryType?: FormValues["enquiryType"];
  defaultProgram?: string;
  compact?: boolean;
  className?: string;
}

export function EnquiryForm({
  defaultEnquiryType = "Student Program",
  defaultProgram = "",
  compact = false,
  className,
}: EnquiryFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState<{
    success: boolean;
    message: string;
    referenceId?: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      organization: "",
      enquiryType: defaultEnquiryType,
      interestedProgram: defaultProgram,
      message: "",
      honeypot: "",
    },
  });

  const selectedEnquiryType = watch("enquiryType");

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const resData = await response.json();

      if (response.ok && resData.success) {
        setSubmitResult({
          success: true,
          message: resData.message,
          referenceId: resData.referenceId,
        });
        reset();
      } else {
        setSubmitResult({
          success: false,
          message:
            resData.error ||
            "Unable to submit enquiry. Please try again or email us directly.",
        });
      }
    } catch (err) {
      setSubmitResult({
        success: false,
        message:
          "Network connection error. Please verify your internet connection or reach out on WhatsApp.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className={cn(
        "rounded-2xl bg-navy-900/90 border border-navy-700/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl relative",
        className
      )}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <MessageSquare className="w-5 h-5 text-sky-400" />
          Send Us an Enquiry
        </h3>
        <p className="text-xs text-slate-400 mt-1">
          Fill out the details below. Our technical advisors respond within 24 business hours.
        </p>
      </div>

      {submitResult && (
        <div
          className={cn(
            "p-4 rounded-xl mb-6 text-sm flex items-start gap-3",
            submitResult.success
              ? "bg-emerald-950/70 border border-emerald-500/50 text-emerald-200"
              : "bg-rose-950/70 border border-rose-500/50 text-rose-200"
          )}
        >
          {submitResult.success ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
          )}
          <div>
            <p className="font-semibold">{submitResult.message}</p>
            {submitResult.referenceId && (
              <p className="text-xs text-emerald-300/80 mt-1">
                Enquiry Reference ID: <span className="font-mono">{submitResult.referenceId}</span>
              </p>
            )}
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Spam Honeypot */}
        <input
          type="text"
          {...register("honeypot")}
          style={{ display: "none" }}
          tabIndex={-1}
          autoComplete="off"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Full Name <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              placeholder="e.g. Rahul Sharma"
              {...register("fullName")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
            {errors.fullName && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.fullName.message}</p>
            )}
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Email Address <span className="text-rose-400">*</span>
            </label>
            <input
              type="email"
              placeholder="rahul@example.com"
              {...register("email")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
            {errors.email && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Phone Number */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Phone Number <span className="text-rose-400">*</span>
            </label>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              {...register("phone")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
            {errors.phone && (
              <p className="text-[11px] text-rose-400 mt-1">{errors.phone.message}</p>
            )}
          </div>

          {/* Organization / College */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Organization / College / Company
            </label>
            <input
              type="text"
              placeholder="e.g. Pune Institute of Tech / Infosys"
              {...register("organization")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Enquiry Type */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Enquiry Type <span className="text-rose-400">*</span>
            </label>
            <select
              {...register("enquiryType")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            >
              <option value="Student Program">Student Technical Program</option>
              <option value="College & University Partnership">College / University Partnership</option>
              <option value="Corporate Training">Corporate Team Upskilling</option>
              <option value="LMS Solutions">SV LearnLogic LMS Advance</option>
              <option value="General Enquiry">General Enquiry</option>
            </select>
          </div>

          {/* Interested Program */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Specific Program of Interest
            </label>
            <select
              {...register("interestedProgram")}
              className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors"
            >
              <option value="">-- Select Program (Optional) --</option>
              {flagshipPrograms.map((p) => (
                <option key={p.id} value={p.title}>
                  {p.title}
                </option>
              ))}
              <option value="Institutional Bootcamp">Campus Technical Bootcamp</option>
              <option value="Faculty Development Program">Faculty Development Program (FDP)</option>
              <option value="Corporate Custom Track">Custom Corporate Track</option>
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Message / Requirements <span className="text-rose-400">*</span>
          </label>
          <textarea
            rows={compact ? 3 : 4}
            placeholder="Tell us about your learning objectives, cohort size, or specific requirements..."
            {...register("message")}
            className="w-full px-3.5 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-colors resize-none"
          />
          {errors.message && (
            <p className="text-[11px] text-rose-400 mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit CTA */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-blue-600 via-sky-500 to-blue-600 bg-[length:200%_auto] hover:bg-[right_center] transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.4)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Submitting Enquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Enquiry</span>
                <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </div>

        <p className="text-[11px] text-center text-slate-500 pt-1">
          Your information is protected under our Privacy Policy. No unsolicited communications.
        </p>
      </form>
    </div>
  );
}
