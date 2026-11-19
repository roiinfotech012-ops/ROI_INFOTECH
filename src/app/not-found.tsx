import React from "react";
import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] bg-[#F7F9FC] flex items-center justify-center px-4 py-20">
      <div className="max-w-lg w-full bg-white rounded-3xl border border-slate-200/80 p-10 text-center shadow-lg space-y-6">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-blue-50 text-[#2563EB] font-extrabold text-2xl">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#101828]">
          Page Not Found
        </h1>
        <p className="text-sm text-slate-600 leading-relaxed">
          The page you are looking for might have been moved or is temporarily
          unavailable. Explore our services, technologies, and business
          solutions below.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="inline-flex items-center px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-[#2563EB] hover:bg-blue-700 transition-colors"
          >
            <Home className="w-4 h-4 mr-2" />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/service"
            className="inline-flex items-center px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-[#101828] bg-slate-100 hover:bg-slate-200 transition-colors"
          >
            <span>Explore Services</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
