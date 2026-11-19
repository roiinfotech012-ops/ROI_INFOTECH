import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllSolutions } from "@/lib/content";
import { ArrowRight, Globe, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Enterprise & Business Solutions – ROI InfoTech :: A Total Web Solution",
  description:
    "Explore pre-built and customizable industry solutions including Food Delivery Application, Mobile Commerce Application, Real Estate Website & Listing Solutions, Learning Management Platform, and eCommerce Cart Development.",
  alternates: {
    canonical: "https://roiinfotech.com/solutions",
  },
};

export default function SolutionsIndexPage() {
  const solutions = getAllSolutions();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white py-20 lg:py-24 border-b-4 border-[#008AD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
            <span className="text-[#38BDF8] font-semibold">Solutions</span>
          </nav>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-300/30 text-[#38BDF8] text-xs font-bold uppercase mb-4">
            <Globe className="w-3.5 h-3.5" />
            <span>Industry Solutions</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Business &amp; Industry Solutions
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mt-4 max-w-3xl">
            Accelerate your time-to-market with our industry-ready web and
            mobile application platforms.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((sol) => {
            const heading =
              sol.h1[0] ||
              sol.h2[0] ||
              sol.h3[0] ||
              sol.title.split("–")[0].trim();
            const excerpt = sol.paragraphs[0] || sol.meta_description;
            return (
              <Link
                key={sol.url}
                href={sol.path}
                className="group bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#0D55A5] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div>
                  <h2 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0D55A5] transition-colors">
                    {heading}
                  </h2>
                  {excerpt && (
                    <p className="text-xs text-[#5A5F65] mt-3 line-clamp-4 leading-relaxed">
                      {excerpt}
                    </p>
                  )}
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#0D55A5]">
                  <span>Explore Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
