import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllTechnologies } from "@/lib/content";
import { navigationData } from "@/data/navigation";
import { ArrowRight, Cpu, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Technologies – ROI InfoTech :: A Total Web Solution",
  description:
    "Explore our expertise across Web Technologies (Node.js, Angular, React, PHP, MongoDB), CMS (WordPress, Drupal, Joomla), eCommerce (Magento, Shopify, BigCommerce, WooCommerce, OpenCart), and Mobile (Android, iOS, React Native, Ionic).",
  alternates: {
    canonical: "https://roiinfotech.com/technology",
  },
};

export default function TechnologiesIndexPage() {
  const technologies = getAllTechnologies();
  const techCategories =
    navigationData.find((n) => n.title === "Technologies")?.categories || [];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white py-20 lg:py-24 border-b-4 border-[#008AD8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-xs text-blue-200 mb-6">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-blue-300/60" />
            <span className="text-[#38BDF8] font-semibold">Technologies</span>
          </nav>

          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-sky-300/30 text-[#38BDF8] text-xs font-bold uppercase mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technology Stack</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Technologies We Master ({technologies.length} Platforms)
          </h1>
          <p className="text-base sm:text-lg text-blue-100 mt-4 max-w-3xl">
            From modern JavaScript frameworks and PHP backends to enterprise CMS
            and eCommerce engines, explore our specialized technology practices.
          </p>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {techCategories.map((cat) => (
            <div
              key={cat.category}
              className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-4"
            >
              <h2 className="text-base font-extrabold text-[#0D55A5] border-b border-slate-100 pb-3">
                {cat.category}
              </h2>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li key={item.url}>
                    <Link
                      href={item.url}
                      className="flex items-center justify-between text-xs text-[#0F172A] hover:text-[#0D55A5] py-1.5 group"
                    >
                      <span>{item.title}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#0D55A5] group-hover:translate-x-1 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech) => {
            const heading =
              tech.h1[0] ||
              tech.h2[0] ||
              tech.h3[0] ||
              tech.title.split("–")[0].trim();
            const excerpt = tech.paragraphs[0] || tech.meta_description;
            return (
              <Link
                key={tech.url}
                href={tech.path}
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
                  <span>View Technology Capabilities</span>
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
