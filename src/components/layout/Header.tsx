"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationData } from "@/data/navigation";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isNavActive = (url: string) => {
    if (url === "/") return pathname === "/";
    return pathname.startsWith(url);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-[#F4F2FF]/95 via-[#F7F5FF]/95 to-[#E9E3FF]/95 backdrop-blur-md border-b border-indigo-100/70 transition-all">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between h-22 sm:h-24 gap-4">
          {/* LEFT: Crest + Vertical Divider + ROI INFOTECH SOLUTIONS */}
          <Link
            href="/"
            className="flex items-center space-x-3 sm:space-x-4 shrink-0 group"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logos/roi-crest-transparent.png"
              alt="ROI InfoTech Crest"
              className="h-12 sm:h-14 w-auto object-contain drop-shadow-xs group-hover:scale-105 transition-transform"
            />
            <span className="h-9 sm:h-11 w-px bg-slate-300/80" />
            <div className="flex flex-col leading-none">
              <span className="text-lg sm:text-xl font-black tracking-tight text-[#064599]">
                ROI INFOTECH
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-[0.42em] text-[#616365] mt-1 uppercase">
                SOLUTIONS
              </span>
            </div>
          </Link>

          {/* RIGHT: Floating White Frosted Glass Pill Navbar */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center bg-white/88 backdrop-blur-xl border border-white rounded-full px-2.5 py-2 shadow-[0_12px_35px_-8px_rgba(67,24,255,0.16)]"
          >
            <div className="flex items-center space-x-0.5 xl:space-x-1">
              {navigationData.map((item) => {
                const hasDropdown = Boolean(item.categories || item.items);
                const active = isNavActive(item.url);

                return (
                  <div
                    key={item.title}
                    className="relative group"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <Link
                      href={item.url}
                      className={`flex items-center px-3.5 xl:px-4 py-2 text-[13px] font-semibold rounded-full transition-all ${
                        active
                          ? "bg-gradient-to-r from-[#4F2BFF] to-[#6D3BFF] text-white shadow-[0_6px_18px_-4px_rgba(79,43,255,0.55)]"
                          : "text-[#1E293B] hover:text-[#4F2BFF] hover:bg-indigo-50/70"
                      }`}
                    >
                      <span>{item.title}</span>
                      {hasDropdown && (
                        <ChevronDown
                          className={`ml-1 w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 ${
                            active ? "text-white/90" : "text-slate-400"
                          }`}
                        />
                      )}
                    </Link>

                    {/* Mega Menu / Dropdown */}
                    {hasDropdown && activeDropdown === item.title && (
                      <div className="absolute top-full right-0 lg:left-0 pt-3 z-50">
                        {item.categories ? (
                          <div className="w-[820px] -left-56 relative bg-white border border-indigo-100 rounded-3xl shadow-2xl shadow-indigo-950/15 p-6 grid grid-cols-3 gap-6">
                            {item.categories.map((cat) => (
                              <div key={cat.category} className="space-y-3">
                                <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#4F2BFF] border-b border-indigo-100 pb-1.5">
                                  {cat.category}
                                </h4>
                                <ul className="space-y-1.5">
                                  {cat.items.map((subItem) => (
                                    <li key={subItem.title}>
                                      <Link
                                        href={subItem.url}
                                        onClick={() => setActiveDropdown(null)}
                                        className="block text-xs font-medium text-[#475569] hover:text-[#4F2BFF] hover:translate-x-1 transition-all py-1"
                                      >
                                        {subItem.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="w-64 bg-white border border-indigo-100 rounded-2xl shadow-2xl shadow-indigo-950/15 p-3 space-y-1">
                            {item.items?.map((subItem) => (
                              <Link
                                key={subItem.title}
                                href={subItem.url}
                                onClick={() => setActiveDropdown(null)}
                                className="block px-3.5 py-2 text-xs font-medium text-[#475569] hover:text-[#4F2BFF] hover:bg-indigo-50/70 rounded-xl transition-colors"
                              >
                                {subItem.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Circular Arrow Action Button inside the Pill */}
            <Link
              href="/contact"
              aria-label="Get a Quote — Contact ROI InfoTech"
              title="Get a Quote"
              className="ml-2 w-9 h-9 xl:w-10 xl:h-10 rounded-full bg-gradient-to-r from-[#4F2BFF] to-[#6D3BFF] hover:from-[#3D1EE8] hover:to-[#5B21B6] text-white flex items-center justify-center shadow-[0_6px_18px_-3px_rgba(79,43,255,0.55)] transition-transform hover:scale-105 shrink-0"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </Link>
          </nav>

          {/* Mobile Hamburger */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-full bg-white/90 border border-indigo-100 text-[#4F2BFF] shadow-sm focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-indigo-100 px-4 pt-2 pb-6 space-y-3 max-h-[80vh] overflow-y-auto shadow-xl">
          {navigationData.map((item) => (
            <div key={item.title} className="border-b border-slate-100 pb-2">
              <Link
                href={item.url}
                onClick={() => setMobileMenuOpen(false)}
                className="block font-bold text-[#0F172A] hover:text-[#4F2BFF] py-1 text-base"
              >
                {item.title}
              </Link>
              {item.categories && (
                <div className="pl-3 mt-2 space-y-3">
                  {item.categories.map((cat) => (
                    <div key={cat.category}>
                      <span className="text-xs uppercase tracking-wider text-[#4F2BFF] font-bold">
                        {cat.category}
                      </span>
                      <div className="grid grid-cols-1 gap-1 mt-1 pl-2">
                        {cat.items.map((sub) => (
                          <Link
                            key={sub.title}
                            href={sub.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className="text-xs text-[#5A5F65] hover:text-[#4F2BFF] py-1"
                          >
                            {sub.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {item.items && (
                <div className="pl-3 mt-1 grid grid-cols-1 gap-1">
                  {item.items.map((sub) => (
                    <Link
                      key={sub.title}
                      href={sub.url}
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-xs text-[#5A5F65] hover:text-[#4F2BFF] py-1"
                    >
                      {sub.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-2">
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center w-full py-3 text-sm font-bold text-white bg-gradient-to-r from-[#4F2BFF] to-[#6D3BFF] rounded-full shadow"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
