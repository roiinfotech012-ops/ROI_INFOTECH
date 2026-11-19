import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices } from "@/lib/content";
import { navigationData } from "@/data/navigation";
import { ArrowRight, Sparkles, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services – ROI InfoTech :: A Total Web Solution",
  description:
    "Explore all 26 professional IT services offered by ROI Fast Track InfoTech Solutions including Web Design, Custom Web Applications, Mobile Apps, eCommerce, and Digital Marketing.",
  alternates: {
    canonical: "https://roiinfotech.com/service",
  },
};

export default function ServicesIndexPage() {
  const services = getAllServices();
  const navCategories =
    navigationData.find((n) => n.title === "Services")?.categories || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white py-20 lg:py-24 border-b-4 border-[#008AD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
            <span className="text-[#38BDF8] font-semibold">Services</span>
          </nav>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-300/30 text-[#38BDF8] text-xs font-bold uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Service Catalog</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Our Services ({services.length} Specializations)
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mt-4 max-w-3xl">
            ROI Fast Track InfoTech Solutions is dedicated to excellence and
            innovation, consistently delivering high-quality solutions on
            schedule across web design, application development, mobile apps,
            branding, and digital marketing.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {navCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4"
            >
              <h2 className="text-lg font-extrabold text-[#0D55A5] border-b border-slate-100 pb-3">
                {cat.category}
              </h2>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className="flex items-center justify-between text-sm text-[#0F172A] hover:text-[#0D55A5] py-1.5 group"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0D55A5] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mb-8">
            All Dedicated Service Pages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((srv) => {
              const heading =
                srv.h1[0] ||
                srv.h2[0] ||
                srv.h3[0] ||
                srv.title.split("–")[0].trim();
              const excerpt = srv.paragraphs[0] || srv.meta_description;
              return (
                <Link
                  key={srv.url}
                  href={srv.path}
                  className="group bg-white rounded-2xl p-7 border border-slate-200/90 hover:border-[#0D55A5] shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                >
                  <div>
                    <h3 className="text-lg font-bold text-[#0F172A] group-hover:text-[#0D55A5] transition-colors">
                      {heading}
                    </h3>
                    {excerpt && (
                      <p className="text-xs text-[#5A5F65] mt-3 line-clamp-4 leading-relaxed">
                        {excerpt}
                      </p>
                    )}
                  </div>
                  <div className="mt-6 pt-3 border-t border-slate-100 flex items-center text-xs font-bold text-[#0D55A5]">
                    <span>Read Full Service Details</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
