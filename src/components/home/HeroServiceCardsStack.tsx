"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

interface ServiceSlide {
  badge: string;
  title: string;
  description: string;
  href: string;
  metricLabel: string;
  metricValue: string;
  bars: number[];
}

const SERVICE_SLIDES: ServiceSlide[] = [
  {
    badge: "Web Solutions",
    title: "WEB DESIGN SOLUTIONS",
    description:
      "ROI web development company in India, offers a comprehensive range of web design solutions tailored for SMEs and large enterprises alike.",
    href: "/service/web-design-solutions",
    metricLabel: "Conversions",
    metricValue: "+168%",
    bars: [35, 55, 45, 75, 65, 95, 100],
  },
  {
    badge: "Custom Applications",
    title: "CUSTOM WEB APPLICATION DEVELOPMENT",
    description:
      "We specialize in creating SEO-friendly, mobile-responsive business websites and dynamic web applications customized to your needs.",
    href: "/service/custom-web-application-development",
    metricLabel: "Efficiency",
    metricValue: "+210%",
    bars: [40, 60, 55, 80, 75, 90, 100],
  },
  {
    badge: "Local Search",
    title: "LOCAL SEARCH ENGINE OPTIMIZATION (SEO)",
    description:
      "With approximately 46% of all Google searches showing local intent, Google prioritizes delivering results that provide immediate solutions to customers.",
    href: "/service/local-search-engine-optimization-seo-solutions",
    metricLabel: "Local Intent",
    metricValue: "46%+",
    bars: [30, 50, 65, 70, 85, 92, 100],
  },
  {
    badge: "Paid Acquisition",
    title: "PPC CAMPAIGN MANAGEMENT SERVICES",
    description:
      "Seeking the fastest route to attract ready-to-purchase customers to your website and mobile app? PPC (Pay-per-Click) provides the ideal solution.",
    href: "/service/ppc-campaign-management-services",
    metricLabel: "Lead ROI",
    metricValue: "3.8x",
    bars: [45, 55, 70, 65, 88, 95, 100],
  },
  {
    badge: "Social Growth",
    title: "SOCIAL MEDIA MARKETING SERVICES",
    description:
      "ROI, delivers dynamic and performance-oriented social media marketing services to expand and engage your audience.",
    href: "/service/social-media-marketing-services",
    metricLabel: "Engagement",
    metricValue: "+185%",
    bars: [35, 48, 62, 78, 84, 94, 100],
  },
  {
    badge: "Search Ranking",
    title: "SEO SERVICES: Outcome-Driven & Cost-Effective",
    description:
      "With over 3.5 billion online searches conducted daily, your business cannot afford to remain unseen. Optimizing your website for major search engines.",
    href: "/service/seo-services-outcome-driven-and-cost-effective",
    metricLabel: "Daily Searches",
    metricValue: "3.5B+",
    bars: [25, 45, 60, 75, 85, 95, 100],
  },
  {
    badge: "Global Marketing",
    title: "DIGITAL MARKETING SOLUTIONS",
    description:
      "At ROI, our ongoing commitment is to empower global businesses with tailored digital marketing solutions that drive leads and sales.",
    href: "/service/digital-marketing-solutions",
    metricLabel: "Growth",
    metricValue: "+195%",
    bars: [40, 52, 68, 74, 86, 96, 100],
  },
  {
    badge: "Mobile Apps",
    title: "CROSS-PLATFORM MOBILE APP DEVELOPMENT",
    description:
      "Seeking an app that seamlessly functions on both iOS and Android platforms within budget constraints? Consider Cross-Platform Mobile App Development.",
    href: "/service/cross-platform-mobile-app-development-solutions",
    metricLabel: "iOS & Android",
    metricValue: "100%",
    bars: [50, 60, 70, 82, 88, 96, 100],
  },
  {
    badge: "Online Stores",
    title: "ECOMMERCE WEBSITE DESIGN SOLUTIONS",
    description:
      "From business websites to e-commerce platforms, we handle it all including Shopify, Magento, BigCommerce, and WooCommerce development.",
    href: "/service/ecommerce-solutions",
    metricLabel: "Online Sales",
    metricValue: "+240%",
    bars: [38, 56, 64, 79, 89, 95, 100],
  },
  {
    badge: "Design & Branding",
    title: "BRAND IDENTITY & LOGO DESIGN SERVICES",
    description:
      "Tailored, visually appealing solutions that reflect your brand’s identity across corporate identity, logos, and brochure design.",
    href: "/service/brand-identity-development-solutions",
    metricLabel: "Brand Recall",
    metricValue: "99%",
    bars: [42, 58, 72, 80, 90, 96, 100],
  },
];

export default function HeroServiceCardsStack() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Continuous, non-stop automatic movement every 2.2 seconds (never pauses on mouse hover)
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % SERVICE_SLIDES.length);
    }, 2200);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = SERVICE_SLIDES[activeIndex];
  const nextSlide = SERVICE_SLIDES[(activeIndex + 1) % SERVICE_SLIDES.length];
  const thirdSlide = SERVICE_SLIDES[(activeIndex + 2) % SERVICE_SLIDES.length];

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + SERVICE_SLIDES.length) % SERVICE_SLIDES.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % SERVICE_SLIDES.length);
  };

  return (
    <div className="relative w-full max-w-[475px] mx-auto">
      {/* Stacked Automatic Moving Cards Container */}
      <div className="relative h-[265px] sm:h-[258px] perspective-[1200px]">
        {/* Background Ghost Card 2 (Third in Queue) */}
        <div
          key={`bg2-${thirdSlide.href}`}
          className="absolute inset-x-6 -top-3 z-10 h-full bg-indigo-100/70 rounded-2xl border border-indigo-200/60 transform scale-[0.90] -rotate-3 transition-all duration-500 pointer-events-none"
        />

        {/* Background Ghost Card 1 (Next in Queue) */}
        <div
          key={`bg1-${nextSlide.href}`}
          className="absolute inset-x-3 -top-1.5 z-20 h-full bg-white/80 rounded-2xl border border-indigo-200/80 shadow-md transform scale-[0.95] rotate-2 transition-all duration-500 pointer-events-none"
        />

        {/* Active Foreground Card Moving Automatically One After Another */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.href}
            initial={{ opacity: 0, x: 75, y: 15, scale: 0.92, rotate: 4 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: -1.5 }}
            exit={{ opacity: 0, x: -85, y: -15, scale: 0.92, rotate: -6 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-30 bg-white rounded-2xl border border-indigo-100 shadow-[0_20px_45px_-12px_rgba(59,24,255,0.28)] p-4 sm:p-5 overflow-hidden"
          >
            {/* Animated Top Progress Bar showing continuous auto-advance */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-indigo-50 overflow-hidden">
              <motion.div
                key={`prog-${activeIndex}`}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "linear" }}
                className="h-full bg-gradient-to-r from-[#3B18FF] via-[#008AD8] to-[#7C3AED]"
              />
            </div>

            {/* Mini Window Header */}
            <div className="flex items-center justify-between border-b border-slate-100 pb-2.5 mb-3 pt-0.5">
              <div className="flex items-center space-x-1.5">
                <div className="w-4 h-4 rounded bg-[#3B18FF] flex items-center justify-center text-[8px] font-black text-white">
                  R
                </div>
                <span className="text-[10px] font-extrabold tracking-wider text-[#1E1B4B]">
                  ROI WEB
                </span>
                <span className="ml-1.5 px-2 py-0.5 rounded-full bg-indigo-50 text-[#3B18FF] text-[8px] font-bold uppercase tracking-wider">
                  {currentSlide.badge}
                </span>
              </div>

              <div className="flex items-center space-x-1.5">
                <span className="text-[9px] font-bold text-[#3B18FF] bg-indigo-50 px-1.5 py-0.5 rounded">
                  {activeIndex + 1} / {SERVICE_SLIDES.length}
                </span>
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous service card"
                  className="w-5 h-5 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-[#3B18FF] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-3 h-3" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next service card"
                  className="w-5 h-5 rounded-full bg-slate-100 hover:bg-indigo-100 text-slate-600 hover:text-[#3B18FF] flex items-center justify-center transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Card Body: Animated Service Content + Animated Bar Chart */}
            <div className="grid grid-cols-12 gap-3 items-center">
              <div className="col-span-7 space-y-1.5">
                <h3 className="text-xs sm:text-[13px] font-extrabold text-[#0F172A] leading-snug line-clamp-2">
                  {currentSlide.title}
                </h3>
                <p className="text-[10px] text-slate-600 leading-relaxed line-clamp-3">
                  {currentSlide.description}
                </p>
                <div className="flex items-center space-x-2 pt-1">
                  <Link
                    href={currentSlide.href}
                    className="inline-flex items-center px-2.5 py-1 rounded-md bg-[#3B18FF] hover:bg-indigo-700 text-white text-[9px] font-bold transition-colors"
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-2.5 h-2.5 ml-1" />
                  </Link>
                  <Link
                    href="/service"
                    className="px-2.5 py-1 rounded-md bg-slate-100 hover:bg-slate-200 text-slate-700 text-[9px] font-semibold transition-colors"
                  >
                    All Services
                  </Link>
                </div>
              </div>

              {/* Animated Analytics Bar Chart */}
              <div className="col-span-5 bg-[#F8FAFC] rounded-xl p-2.5 border border-slate-100">
                <div className="flex items-center justify-between text-[9px] font-bold text-[#3B18FF] mb-1.5">
                  <span className="truncate">{currentSlide.metricLabel}</span>
                  <span className="px-1.5 py-0.5 rounded bg-indigo-50 shrink-0">
                    {currentSlide.metricValue}
                  </span>
                </div>
                <div className="flex items-end justify-between h-12 space-x-1.5 pt-2">
                  {currentSlide.bars.map((h, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: "15%" }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.4, delay: idx * 0.03 }}
                      className="flex-1 rounded-t bg-gradient-to-t from-[#3B18FF] to-[#8B5CF6]"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Purple Stats Bar */}
            <div className="mt-3 bg-gradient-to-r from-[#3B18FF] via-[#5B21B6] to-[#6D28D9] rounded-xl px-3 py-2 grid grid-cols-4 gap-2 text-center text-white shadow-md">
              <div>
                <div className="text-[11px] font-extrabold">120K+</div>
                <div className="text-[8px] text-indigo-200">Active Users</div>
              </div>
              <div>
                <div className="text-[11px] font-extrabold">99.9%</div>
                <div className="text-[8px] text-indigo-200">Uptime</div>
              </div>
              <div>
                <div className="text-[11px] font-extrabold">150+</div>
                <div className="text-[8px] text-indigo-200">Integrations</div>
              </div>
              <div>
                <div className="text-[11px] font-extrabold">24/7</div>
                <div className="text-[8px] text-indigo-200">Support</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Middle Dark Indigo Layer Card (Shows Next Queued Service Preview) */}
      <div className="relative z-20 -mt-2 mx-3 bg-gradient-to-r from-[#1E1B4B] via-[#2E1065] to-[#3B18FF] rounded-2xl p-3.5 text-white shadow-xl border border-indigo-400/30 transform -rotate-1 transition-all">
        <div className="flex items-center justify-between gap-2">
          <div className="space-y-0.5 min-w-0">
            <div className="text-[9px] uppercase tracking-wider text-sky-300 font-bold">
              Next Card: {nextSlide.badge}
            </div>
            <div className="text-[11px] font-bold text-white truncate">
              {nextSlide.title}
            </div>
            <div className="flex flex-wrap gap-2 text-[9px] text-indigo-200">
              <span>✓ Connect the World</span>
              <span>✓ Mobile-Optimized</span>
              <span>✓ UI/UX Design</span>
            </div>
          </div>
          <div className="w-16 h-10 rounded-lg bg-white/15 border border-white/20 flex items-center justify-center text-[10px] font-bold text-sky-200 shrink-0">
            17+ Yrs
          </div>
        </div>
      </div>

      {/* Laptop Screen Frame & Base */}
      <div className="relative z-10 -mt-3 bg-[#0F172A] rounded-t-2xl p-2.5 pt-5 border-2 border-slate-700 shadow-2xl">
        <div className="bg-gradient-to-br from-indigo-50 to-white rounded-xl p-3">
          <div className="text-[10px] font-bold text-[#1E1B4B] mb-2 text-center">
            Why businesses choose ROI InfoTech Solutions
          </div>
          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Web Design", idx: 0 },
              { label: "eCommerce", idx: 8 },
              { label: "Mobile Apps", idx: 7 },
              { label: "SEO & Growth", idx: 5 },
            ].map((item) => (
              <button
                key={item.label}
                type="button"
                onClick={() => setActiveIndex(item.idx)}
                className={`rounded-lg p-1.5 text-center border transition-all cursor-pointer ${
                  activeIndex === item.idx
                    ? "bg-[#3B18FF] text-white border-[#3B18FF] shadow"
                    : "bg-white text-slate-700 border-indigo-100 hover:border-indigo-300"
                }`}
              >
                <div
                  className={`w-4 h-4 mx-auto rounded-full flex items-center justify-center text-[9px] font-bold mb-0.5 ${
                    activeIndex === item.idx
                      ? "bg-white/20 text-white"
                      : "bg-indigo-50 text-[#3B18FF]"
                  }`}
                >
                  ✓
                </div>
                <div className="text-[8px] font-bold truncate">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Metallic Laptop Base */}
      <div className="relative z-10 mx-auto w-[106%] -left-[3%] h-3.5 bg-gradient-to-r from-slate-400 via-slate-200 to-slate-400 rounded-b-2xl shadow-lg border-t border-white flex items-center justify-center">
        <div className="w-16 h-1 rounded-full bg-slate-500/50" />
      </div>
    </div>
  );
}
