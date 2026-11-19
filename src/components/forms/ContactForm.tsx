"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormValues } from "@/lib/validation";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

interface ContactFormProps {
  defaultSubject?: string;
  title?: string;
  subtitle?: string;
  compact?: boolean;
  variant?: "default" | "pill";
}

export default function ContactForm({
  defaultSubject = "StartUp business",
  title = "Get In Touch",
  subtitle = "Consult today",
  compact = false,
  variant = "default",
}: ContactFormProps) {
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message?: string;
  }>({ type: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: defaultSubject,
      message: "",
      website_honeypot: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus({ type: "loading" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message });
        reset();
      } else {
        setStatus({
          type: "error",
          message: data.message || "Could not submit your inquiry at this time.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message:
          "Network error. Please contact us directly at info@roiinfotech.com.",
      });
    }
  };

  const isPill = variant === "pill";
  const inputClass = isPill
    ? "w-full px-5 py-3 rounded-full border border-indigo-200/80 bg-[#F4F6FF] text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D55A5] focus:bg-white transition-all"
    : "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0D55A5] focus:border-transparent transition-all";

  return (
    <div
      className={
        isPill
          ? "bg-white rounded-[32px] border border-indigo-100 shadow-[0_20px_55px_-15px_rgba(13,85,165,0.16)] p-6 sm:p-8"
          : "bg-white rounded-2xl border border-slate-200/80 shadow-xl shadow-blue-950/5 p-6 sm:p-8"
      }
    >
      {!isPill && (
        <div className="mb-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D55A5]">
            {subtitle}
          </span>
          <h3 className="text-2xl font-bold text-[#0F172A] mt-1">{title}</h3>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <input
          type="text"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          {...register("website_honeypot")}
        />

        <div
          className={
            compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"
          }
        >
          <div>
            <label className="block text-xs font-bold text-[#0D55A5] mb-1.5 pl-1">
              Your Name *
            </label>
            <input
              type="text"
              placeholder="Full Name"
              className={inputClass}
              {...register("name")}
            />
            {errors.name && (
              <p className="text-xs text-red-600 mt-1 pl-1">
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0D55A5] mb-1.5 pl-1">
              Email Address *
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              className={inputClass}
              {...register("email")}
            />
            {errors.email && (
              <p className="text-xs text-red-600 mt-1 pl-1">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>

        <div
          className={
            compact ? "space-y-4" : "grid grid-cols-1 sm:grid-cols-2 gap-4"
          }
        >
          <div>
            <label className="block text-xs font-bold text-[#0D55A5] mb-1.5 pl-1">
              Phone Number *
            </label>
            <input
              type="tel"
              placeholder="+91 98867 33599"
              className={inputClass}
              {...register("phone")}
            />
            {errors.phone && (
              <p className="text-xs text-red-600 mt-1 pl-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0D55A5] mb-1.5 pl-1">
              Subject *
            </label>
            <select className={inputClass} {...register("subject")}>
              <option value="Success fullfill">Success fullfill</option>
              <option value="StartUp business">StartUp business</option>
              <option value="Leadership work">Leadership work</option>
              <option value="Business Growth">Business Growth</option>
              <option value="Web Design & Development">
                Web Design &amp; Development
              </option>
              <option value="Mobile App Development">
                Mobile App Development
              </option>
              <option value="Digital Marketing & SEO">
                Digital Marketing &amp; SEO
              </option>
              <option value="Hire Dedicated Developers">
                Hire Dedicated Developers
              </option>
            </select>
            {errors.subject && (
              <p className="text-xs text-red-600 mt-1 pl-1">
                {errors.subject.message}
              </p>
            )}
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-[#0D55A5] mb-1.5 pl-1">
            Message *
          </label>
          <textarea
            rows={compact ? 3 : 4}
            placeholder="Tell us about your project requirements..."
            className={
              isPill
                ? "w-full px-5 py-3.5 rounded-3xl border border-indigo-200/80 bg-[#F4F6FF] text-sm text-[#0F172A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0D55A5] focus:bg-white transition-all"
                : "w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0D55A5] focus:border-transparent transition-all"
            }
            {...register("message")}
          />
          {errors.message && (
            <p className="text-xs text-red-600 mt-1 pl-1">
              {errors.message.message}
            </p>
          )}
        </div>

        {status.type === "success" && (
          <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-start space-x-2.5 text-emerald-800 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <span>{status.message}</span>
          </div>
        )}

        {status.type === "error" && (
          <div className="p-3.5 rounded-2xl bg-amber-50 border border-amber-200 flex items-start space-x-2.5 text-amber-900 text-xs">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <span>{status.message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status.type === "loading"}
          className={`${
            isPill
              ? "px-8 py-3.5 rounded-full"
              : "w-full px-6 py-3.5 rounded-xl"
          } inline-flex items-center justify-center text-sm font-bold text-white bg-gradient-to-r from-[#171D68] via-[#0D55A5] to-[#008AD8] hover:from-[#0D55A5] hover:to-[#4F2BFF] shadow-lg shadow-blue-600/20 transition-all disabled:opacity-60 cursor-pointer`}
        >
          {status.type === "loading" ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <span>Consult today</span>
              <Send className="w-4 h-4 ml-2" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
