import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  getAllServices,
  getAllTechnologies,
  getAllHirePages,
  getAllSolutions,
} from "@/lib/content";
import { navigationData, siteConfig } from "@/data/navigation";
import ContactForm from "@/components/forms/ContactForm";
import HeroServiceCardsStack from "@/components/home/HeroServiceCardsStack";
import BusinessHubsShowcase from "@/components/home/BusinessHubsShowcase";
import TestimonialsShowcase from "@/components/home/TestimonialsShowcase";
import HireDevelopersShowcase from "@/components/home/HireDevelopersShowcase";
import SolutionsShowcase from "@/components/home/SolutionsShowcase";
import {
  ArrowRight,
  CheckCircle2,
  Code2,
  Cpu,
  Globe,
  Layers,
  LineChart,
  Quote,
  Smartphone,
  Sparkles,
  Users,
  Zap,
  Award,
  Bot,
  BarChart3,
  PenTool,
  Search,
  Code,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title:
    "ROI InfoTech :: A Total Web Solution :: Website designing – ROI InfoTech is an one stop solution for all your web needs. Being professional in website designing, ROI InfoTech is fulfilling the customer needs.",
  description:
    "ROI Fast Track InfoTech Solutions is dedicated to excellence and innovation, consistently delivering high-quality solutions on schedule. With over 17 years of experience in the development industry.",
  alternates: {
    canonical: "https://roiinfotech.com/",
  },
};

export default function HomePage() {
  const allServices = getAllServices();
  const allTechnologies = getAllTechnologies();
  const allHire = getAllHirePages();
  const allSolutions = getAllSolutions();

  const techCategories =
    navigationData.find((n) => n.title === "Technologies")?.categories || [];

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    logo: "https://roiinfotech.com/logos/roi-logo.jpg",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.state,
      postalCode: siteConfig.address.postalCode,
      addressCountry: siteConfig.address.country,
    },
  };

  return (
    <div className="bg-[#F8FAFC] text-[#0F172A]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* SECTION 2 — ULTRA-CRISP NATIVE VECTOR HD CURVED HERO BANNER (FITS Marked Viewport Area Completely with 100% Retina Clarity) */}
      <section className="px-3 sm:px-6 lg:px-8 pt-3 pb-8 bg-[#F8FAFC]">
        <div className="relative max-w-[1400px] mx-auto rounded-[32px] sm:rounded-[44px] bg-gradient-to-br from-[#F3EFFE] via-[#FAF8FF] to-[#EDE7FE] border-2 border-white shadow-[0_20px_60px_-15px_rgba(67,24,255,0.18)] overflow-hidden px-5 sm:px-10 lg:px-14 py-7 lg:py-9">
          {/* Soft ambient glow accents */}
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#C4B5FD]/35 blur-3xl pointer-events-none" />
          <div className="absolute -top-20 -right-20 w-96 h-96 rounded-full bg-[#A78BFA]/30 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 left-1/3 w-[500px] h-64 rounded-full bg-[#DDD6FE]/40 blur-3xl pointer-events-none" />

          {/* Top-Right Pill Badge */}
          <div className="flex justify-end mb-2 lg:mb-0 lg:absolute lg:top-6 lg:right-12 z-20">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-indigo-200/80 shadow-sm text-xs font-semibold text-[#1E1B4B]">
              <Sparkles className="w-3.5 h-3.5 text-[#4318FF] fill-[#4318FF]" />
              <span>Premium Web Solutions</span>
            </div>
          </div>

          {/* 3-Column Hero Content Grid — Fits Completely in One Screen */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* LEFT COLUMN: Crisp Native Typography & Trust Badge */}
            <div className="lg:col-span-4 space-y-4">
              <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#4318FF]/10 text-[#4318FF] text-[11px] font-extrabold uppercase tracking-wider">
                <span>INDIA&apos;S PREMIER IT COMPANY</span>
              </div>

              <div className="space-y-0.5">
                <span className="block text-2xl sm:text-3xl xl:text-[34px] font-black tracking-tight text-[#0F172A] leading-[1.08]">
                  WE BUILD
                </span>
                <span className="block text-4xl sm:text-5xl xl:text-[54px] font-black tracking-tight text-[#3B18FF] leading-[1.02]">
                  WEBSITES
                </span>
                <span className="block text-xl sm:text-2xl xl:text-[26px] font-extrabold tracking-tight text-[#0F172A] leading-[1.15] pt-0.5">
                  THAT GROW YOUR
                </span>
                <span className="block text-4xl sm:text-5xl xl:text-[52px] font-black tracking-tight text-[#0F172A] leading-[1.02]">
                  BUSINESS
                </span>
              </div>

              {/* Blue Accent Line */}
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-[#3B18FF] to-[#7C3AED]" />

              <p className="text-xs sm:text-sm text-[#334155] font-medium leading-relaxed max-w-sm">
                We design and develop high-performance websites that drive
                traffic, engage users, and grow your brand.
              </p>

              {/* Avatar Stack + Trusted by 200+ Businesses Worldwide */}
              <div className="pt-1 space-y-2">
                <div className="flex items-center -space-x-2.5">
                  {[
                    "bg-gradient-to-tr from-blue-600 to-indigo-500",
                    "bg-gradient-to-tr from-violet-600 to-purple-500",
                    "bg-gradient-to-tr from-sky-600 to-blue-500",
                    "bg-gradient-to-tr from-indigo-700 to-blue-600",
                  ].map((bg, i) => (
                    <div
                      key={i}
                      className={`w-9 h-9 rounded-full ${bg} border-2 border-white flex items-center justify-center text-[11px] font-bold text-white shadow-sm`}
                    >
                      {["DK", "AL", "RJ", "SM"][i]}
                    </div>
                  ))}
                  <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#4318FF] to-[#7C3AED] border-2 border-white flex items-center justify-center text-sm font-bold text-white shadow-md">
                    +
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-xs font-semibold text-[#1E293B]">
                  <Sparkles className="w-3.5 h-3.5 text-[#4318FF] fill-[#4318FF] shrink-0" />
                  <span>
                    Trusted by{" "}
                    <strong className="font-extrabold text-[#0F172A]">
                      200+
                    </strong>{" "}
                    Businesses Worldwide
                  </span>
                </div>
              </div>
            </div>

            {/* CENTER COLUMN: Animated Service Cards Moving One After Another */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center py-2">
              <HeroServiceCardsStack />
            </div>

            {/* RIGHT COLUMN: 6 Crisp Floating Feature Cards with Icons */}
            <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-2.5 lg:pl-4 lg:pt-6">
              {[
                {
                  icon: PenTool,
                  title: "Custom",
                  subtitle: "UI/UX",
                },
                {
                  icon: Search,
                  title: "SEO",
                  subtitle: "Ready",
                },
                {
                  icon: Zap,
                  title: "Lightning",
                  subtitle: "Fast",
                },
                {
                  icon: Smartphone,
                  title: "Responsive",
                  subtitle: "Design",
                },
                {
                  icon: Code,
                  title: "Clean",
                  subtitle: "Code",
                },
                {
                  icon: Layers,
                  title: "Modern",
                  subtitle: "Frontend",
                },
              ].map((feat) => {
                const Icon = feat.icon;
                return (
                  <div
                    key={feat.title}
                    className="bg-white/95 backdrop-blur-md hover:bg-white rounded-2xl px-4 py-2.5 border border-white shadow-[0_8px_25px_-6px_rgba(59,24,255,0.12)] hover:shadow-[0_12px_30px_-6px_rgba(59,24,255,0.22)] flex items-center space-x-3.5 transition-all transform hover:-translate-x-1"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#F3EFFE] text-[#3B18FF] flex items-center justify-center shrink-0 shadow-inner">
                      <Icon className="w-4 h-4 stroke-[2.2]" />
                    </div>
                    <div className="leading-tight">
                      <div className="text-xs font-bold text-[#0F172A]">
                        {feat.title}
                      </div>
                      <div className="text-xs font-bold text-[#0F172A]">
                        {feat.subtitle}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* BOTTOM CENTER CTA BAR INSIDE THE CURVED BANNER */}
          <div className="relative z-10 mt-6 pt-5 border-t border-indigo-200/50 text-center space-y-3">
            <div className="space-y-0.5">
              <div className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.25em] text-[#3B18FF]">
                DESIGN. DEVELOP. GROW.
              </div>
              <h2 className="text-lg sm:text-2xl font-extrabold text-[#0F172A]">
                Let&apos;s Build Something Amazing
              </h2>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-1">
              <div className="flex items-center space-x-2 text-xs font-semibold text-[#334155]">
                <CheckCircle2 className="w-4 h-4 text-[#4318FF]" />
                <span>Modern Solutions</span>
              </div>

              <span className="hidden sm:inline-block h-4 w-px bg-indigo-200" />

              <div className="flex items-center space-x-2 text-xs font-semibold text-[#334155]">
                <CheckCircle2 className="w-4 h-4 text-[#4318FF]" />
                <span>Scalable Growth</span>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center space-x-3 px-7 py-3 rounded-full bg-gradient-to-r from-[#3B18FF] via-[#4F46E5] to-[#3B18FF] hover:from-[#3110E8] hover:to-[#4338CA] text-white text-xs sm:text-sm font-bold shadow-[0_10px_25px_-5px_rgba(59,24,255,0.55)] transition-all transform hover:-translate-y-0.5"
              >
                <span>Start Your Project</span>
                <span className="w-6 h-6 rounded-full bg-white text-[#3B18FF] flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </span>
              </Link>

              <span className="hidden sm:inline-block h-4 w-px bg-indigo-200" />

              <div className="flex items-center space-x-2 text-xs font-semibold text-[#334155]">
                <CheckCircle2 className="w-4 h-4 text-[#4318FF]" />
                <span>Results Driven</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THREE BUSINESS HUBS (Big Overlapping Middle Rectangular Card + Auto 4-Service Popup Showcase) */}
      <BusinessHubsShowcase />

      {/* SECTION 4 — COMPANY INTRODUCTION & SECTION 6 — WHY CHOOSE ROI INFOTECH */}
      <section className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Editorial Company Overview */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-blue-100/80 text-[#0D55A5] text-xs font-bold uppercase tracking-wider">
              <span>About Company</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] leading-tight">
              We Are Fully Dedicated To Support
            </h2>
            <p className="text-base text-[#5A5F65] leading-relaxed">
              ROI Fast Track InfoTech Solutions is dedicated to excellence and
              innovation, consistently delivering high-quality solutions on
              schedule.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-50 text-[#0D55A5] flex items-center justify-center mb-4">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">Our Mission</h3>
                <p className="text-sm text-[#5A5F65] mt-2 leading-relaxed">
                  Transforming web development through innovative, user-centric
                  solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#008AD8] flex items-center justify-center mb-4">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-[#0F172A]">Our Story</h3>
                <p className="text-sm text-[#5A5F65] mt-2 leading-relaxed">
                  Delivering cutting-edge web solutions that consistently exceed
                  expectations
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-slate-200/80 p-6 shadow-sm space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <Sparkles className="w-5 h-5 text-[#0D55A5] mb-2" />
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Custom Designs
                  </h3>
                  <p className="text-xs text-[#5A5F65] mt-1 leading-relaxed">
                    Tailored, visually appealing solutions that reflect your
                    brand’s identity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <Smartphone className="w-5 h-5 text-[#008AD8] mb-2" />
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Responsive Layouts
                  </h3>
                  <p className="text-xs text-[#5A5F65] mt-1 leading-relaxed">
                    Ensuring seamless user experiences with designs that adapt
                    flawlessly to any device
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <Cpu className="w-5 h-5 text-[#171D68] mb-2" />
                  <h3 className="text-sm font-bold text-[#0F172A]">
                    Advanced Technology
                  </h3>
                  <p className="text-xs text-[#5A5F65] mt-1 leading-relaxed">
                    Utilizing cutting-edge technology to enhance functionality
                    and user engagement.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-[#171D68] via-[#0D55A5] to-[#008AD8] text-white p-6 rounded-2xl shadow-lg flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-white/15 border border-white/25 flex items-center justify-center text-white">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-base font-bold">Best Awarded Company</h3>
                  <p className="text-xs text-blue-100 mt-0.5">
                    Trusted global partner for web, mobile &amp; digital growth
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="text-xs font-bold text-white bg-white/15 hover:bg-white/25 px-3.5 py-2 rounded-lg transition-colors shrink-0"
              >
                About Us →
              </Link>
            </div>
          </div>

          {/* Why Choose Us / Why We're Awesome? + Core Features */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-white rounded-3xl border border-slate-200/90 p-8 sm:p-10 shadow-lg space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D55A5]">
                  WHY CHOOSE US
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] mt-1">
                  Why We’re Awesome?
                </h2>
                <p className="text-sm sm:text-base text-[#5A5F65] mt-3 leading-relaxed">
                  With over 17 years of experience in the development industry,
                  we understand the challenges and opportunities at every stage
                  of business growth.
                </p>
              </div>

              <div className="border-t border-slate-100 pt-6">
                <span className="text-xs font-bold uppercase tracking-widest text-[#008AD8]">
                  Our Features
                </span>
                <h3 className="text-xl font-bold text-[#0F172A] mt-1">
                  Crafting Exceptional Web Experience
                </h3>
                <p className="text-sm text-[#5A5F65] mt-2 leading-relaxed">
                  Our company excels in delivering customized, visually
                  appealing solutions that reflect your brand’s identity. We
                  specialize in creating responsive layouts, ensuring seamless
                  user experiences across all devices. By integrating the latest
                  technologies, we enhance functionality and user engagement,
                  helping you achieve your business objectives effectively.
                </p>
              </div>

              {/* 4 Pillars from Homepage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#0D55A5]">
                    Website Development
                  </h4>
                  <p className="text-xs text-[#0F172A] font-medium mt-1">
                    Crafting custom websites to enhance and expand your online
                    presence.
                  </p>
                  <p className="text-[11px] text-[#5A5F65] mt-2 leading-relaxed">
                    From business websites to e-commerce platforms, we handle it
                    all. Our expertise includes WordPress, Node.js, React.js,
                    Magento, and WooCommerce development.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#0D55A5]">
                    Mobile App Development
                  </h4>
                  <p className="text-xs text-[#0F172A] font-medium mt-1">
                    Custom mobile apps crafted for business efficiency and
                    enhanced engagement
                  </p>
                  <p className="text-[11px] text-[#5A5F65] mt-2 leading-relaxed">
                    Looking to increase sales with your existing customers?
                    Achieve this with a mobile app developed by us. We
                    specialize in iOS and Android app development for businesses
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#0D55A5]">
                    ERP Solutions
                  </h4>
                  <p className="text-xs text-[#0F172A] font-medium mt-1">
                    Enhance institutional efficiency with our streamlined ERP
                    solutions
                  </p>
                  <p className="text-[11px] text-[#5A5F65] mt-2 leading-relaxed">
                    Revolutionize your institution&apos;s operations with our
                    custom ERP solutions, designed to integrate seamlessly,
                    enhance efficiency, and facilitate sustainable growth
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-slate-200/70">
                  <h4 className="text-sm font-bold text-[#0D55A5]">
                    Digital Marketing
                  </h4>
                  <p className="text-xs text-[#0F172A] font-medium mt-1">
                    Digital marketing drives growth through SEO, PPC, and social
                    media strategies.
                  </p>
                  <p className="text-[11px] text-[#5A5F65] mt-2 leading-relaxed">
                    Want to boost your business revenue with more leads and
                    sales? We assist businesses with SEO, Google Ads, Facebook,
                    Instagram, and LinkedIn advertising
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 — OUR SERVICES */}
      <section className="py-20 lg:py-24 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#0D55A5]">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-1">
                Our Comprehensive Services
              </h2>
              <p className="text-sm sm:text-base text-[#5A5F65] mt-2 max-w-2xl">
                Explore our full portfolio of web design, custom application
                development, mobile apps, branding, and outcome-driven digital
                marketing services.
              </p>
            </div>
            <Link
              href="/service"
              className="mt-4 md:mt-0 inline-flex items-center px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#171D68] to-[#0D55A5] hover:from-[#0D55A5] hover:to-[#008AD8] transition-all shadow-md"
            >
              <span>View All {allServices.length} Services</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* 6 Featured Service HD Banner Cards with Pixel-Aligned Transparent Interactive Button Hotspots */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {/* 1. LOCAL SEARCH ENGINE OPTIMIZATION (SEO) SOLUTIONS */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#0D55A5]/60 transition-all bg-white">
              <Link
                href="/service/local-search-engine-optimization-seo-solutions"
                className="block"
                aria-label="Local Search Engine Optimization (SEO) Solutions"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured-local-seo-hd.png"
                  alt="Local Search Engine Optimization (SEO) Solutions"
                  width={2048}
                  height={1152}
                  className="w-full h-auto block object-cover"
                />
              </Link>
              <Link
                href="/contact"
                aria-label="Get Started with Local Search Engine Optimization"
                className="absolute left-[4.6%] top-[72.8%] w-[18.2%] h-[9.6%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-xl transition-all z-10 cursor-pointer"
              />
              <Link
                href="/service/local-search-engine-optimization-seo-solutions"
                aria-label="View Local SEO Strategy"
                className="absolute left-[24.4%] top-[72.8%] w-[18.2%] h-[9.6%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-xl transition-all z-10 cursor-pointer"
              />
            </div>

            {/* 2. SOCIAL MEDIA MARKETING SERVICES */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#0D55A5]/60 transition-all bg-white">
              <Link
                href="/service/social-media-marketing-services"
                className="block"
                aria-label="Social Media Marketing Services"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured-smm-hd.png"
                  alt="Social Media Marketing Services"
                  width={2048}
                  height={1152}
                  className="w-full h-auto block object-cover"
                />
              </Link>
              <Link
                href="/service/social-media-marketing-services"
                aria-label="Read more about Social Media Marketing Services"
                className="absolute left-[5.8%] top-[78%] w-[18%] h-[8.5%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-xl transition-all z-10 cursor-pointer"
              />
            </div>

            {/* 3. SEO SERVICES: Outcome-Driven and Cost-Effective */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#0D55A5]/60 transition-all bg-white">
              <Link
                href="/service/seo-services-outcome-driven-and-cost-effective"
                className="block"
                aria-label="SEO Services: Outcome-Driven and Cost-Effective"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured-seo-hd.png"
                  alt="SEO Services: Outcome-Driven and Cost-Effective"
                  width={2048}
                  height={1152}
                  className="w-full h-auto block object-cover"
                />
              </Link>
              <Link
                href="/service/seo-services-outcome-driven-and-cost-effective"
                aria-label="Read more about SEO Services"
                className="absolute left-[5.8%] top-[78.5%] w-[18%] h-[8.5%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-xl transition-all z-10 cursor-pointer"
              />
            </div>

            {/* 4. DIGITAL MARKETING SOLUTIONS */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#0D55A5]/60 transition-all bg-white">
              <Link
                href="/service/digital-marketing-solutions"
                className="block"
                aria-label="Digital Marketing Solutions"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured-digital-marketing-hd.png"
                  alt="Digital Marketing Solutions"
                  width={2048}
                  height={1048}
                  className="w-full h-auto block object-cover"
                />
              </Link>
              <Link
                href="/service/digital-marketing-solutions"
                aria-label="Read more about Digital Marketing Solutions"
                className="absolute left-[5.4%] top-[75.5%] w-[17%] h-[8.5%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-xl transition-all z-10 cursor-pointer"
              />
            </div>

            {/* 5. CROSS-PLATFORM MOBILE APP DEVELOPMENT SOLUTIONS */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#0D55A5]/60 transition-all bg-white">
              <Link
                href="/service/cross-platform-mobile-app-development-solutions"
                className="block"
                aria-label="Cross-Platform Mobile App Development Solutions"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured-cross-platform-hd.png"
                  alt="Cross-Platform Mobile App Development Solutions"
                  width={2048}
                  height={1046}
                  className="w-full h-auto block object-cover"
                />
              </Link>
              <Link
                href="/service/cross-platform-mobile-app-development-solutions"
                aria-label="Read more about Cross-Platform Mobile App Development Solutions"
                className="absolute left-[5%] top-[79.5%] w-[17.5%] h-[10%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-full transition-all z-10 cursor-pointer"
              />
            </div>

            {/* 6. PPC CAMPAIGN MANAGEMENT SERVICES */}
            <div className="group relative rounded-3xl overflow-hidden border border-slate-200/90 shadow-lg hover:shadow-2xl hover:border-[#0D55A5]/60 transition-all bg-white">
              <Link
                href="/service/ppc-campaign-management-services"
                className="block"
                aria-label="PPC Campaign Management Services"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/featured-ppc-hd.png"
                  alt="PPC Campaign Management Services"
                  width={2048}
                  height={1152}
                  className="w-full h-auto block object-cover"
                />
              </Link>
              <Link
                href="/service/ppc-campaign-management-services"
                aria-label="Read more about PPC Campaign Management Services"
                className="absolute left-[6%] top-[79.5%] w-[18%] h-[8.5%] bg-transparent hover:bg-[#0D55A5]/10 hover:ring-2 hover:ring-[#0D55A5]/60 rounded-xl transition-all z-10 cursor-pointer"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {allServices
              .filter(
                (s) =>
                  ![
                    "/service/local-search-engine-optimization-seo-solutions",
                    "/service/ppc-campaign-management-services",
                    "/service/social-media-marketing-services",
                    "/service/seo-services-outcome-driven-and-cost-effective",
                    "/service/digital-marketing-solutions",
                    "/service/cross-platform-mobile-app-development-solutions",
                  ].includes(s.path) &&
                  (s.h1[0] || s.h2[0] || s.h3[0] || "") !==
                    "We give the best Services" &&
                  !(s.paragraphs[0] || "").includes("Lorem Ipsum")
              )
              .map((service) => {
                const heading =
                  service.h1[0] ||
                  service.h2[0] ||
                  service.h3[0] ||
                  service.title.split("–")[0].trim();
                const excerpt =
                  service.paragraphs[0] || service.meta_description;
                return (
                  <Link
                    key={service.url}
                    href={service.path}
                    className="group bg-white hover:bg-[#F8FAFC] rounded-2xl p-6 border border-slate-200/80 hover:border-[#0D55A5]/50 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-base font-bold text-[#0F172A] group-hover:text-[#0D55A5] transition-colors">
                        {heading}
                      </h3>
                      {excerpt && (
                        <p className="text-xs text-[#5A5F65] mt-2 line-clamp-3 leading-relaxed">
                          {excerpt}
                        </p>
                      )}
                    </div>
                    <div className="mt-4 flex items-center text-xs font-semibold text-[#0D55A5]">
                      <span>Read more</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
          </div>
        </div>
      </section>

      {/* SECTION 8 — OUR SOLUTIONS (Interactive Phone Texting Showcase + Turnkey Solution Cards) */}
      <SolutionsShowcase
        solutions={allSolutions.map((sol) => ({
          url: sol.url,
          path: sol.path,
          heading:
            sol.h1[0] ||
            sol.h2[0] ||
            sol.h3[0] ||
            sol.title.split("–")[0].trim(),
          excerpt: sol.paragraphs[0] || sol.meta_description || "",
        }))}
      />

      {/* SECTION 9 — HIRE DEVELOPERS (Typing Intro -> Single Sequential Category Cards -> Loop) */}
      <HireDevelopersShowcase
        hireItems={allHire.map((hire) => ({
          url: hire.url,
          path: hire.path,
          heading:
            hire.h1[0] ||
            hire.h2[0] ||
            hire.h3[0] ||
            hire.title.split("–")[0].trim(),
          excerpt: hire.paragraphs[0] || hire.meta_description || "",
        }))}
      />

      {/* SECTION 11 — TESTIMONIALS (3D Interactive Spotlight & Client Selector Deck) */}
      <TestimonialsShowcase />

      {/* SECTION 12 & 13 — CONTACT, LOCATION MAP & INQUIRY FORM (Styled in Website Colors Only) */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
            {/* LEFT COLUMN: Official Contact Info + Interactive Bangalore Location Map */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0D55A5]">
                  Are you ready to work with our expert team?
                </h2>
                <p className="text-sm text-[#5A5F65] leading-relaxed">
                  Whether you need a custom web application, an enterprise
                  eCommerce store, a cross-platform mobile app, or
                  outcome-driven SEO &amp; PPC campaigns, our team in Bangalore
                  is ready to deliver.
                </p>

                <div className="pt-2 space-y-2.5 text-sm text-[#0F172A]">
                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full bg-[#0D55A5] text-white flex items-center justify-center shrink-0">
                      <Phone className="w-3.5 h-3.5" />
                    </span>
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="font-semibold hover:text-[#0D55A5] transition-colors"
                    >
                      Call for help: {siteConfig.phone}
                    </a>
                  </div>

                  <div className="flex items-center space-x-3">
                    <span className="w-7 h-7 rounded-full bg-[#0D55A5] text-white flex items-center justify-center shrink-0">
                      <Mail className="w-3.5 h-3.5" />
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-semibold hover:text-[#0D55A5] transition-colors"
                    >
                      {siteConfig.email} / {siteConfig.salesEmail}
                    </a>
                  </div>

                  <div className="flex items-start space-x-3">
                    <span className="w-7 h-7 rounded-full bg-[#171D68] text-white flex items-center justify-center shrink-0 mt-0.5">
                      <MapPin className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-xs sm:text-sm text-[#5A5F65] leading-relaxed">
                      {siteConfig.address.street}, {siteConfig.address.city}{" "}
                      {siteConfig.address.postalCode},{" "}
                      {siteConfig.address.country}
                    </span>
                  </div>
                </div>
              </div>

              {/* Location Map */}
              <div className="space-y-3 pt-2">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#0D55A5]">
                  Location :
                </h3>
                <div className="bg-white rounded-3xl p-2.5 border border-indigo-100 shadow-lg shadow-blue-950/5 overflow-hidden">
                  <iframe
                    title="ROI Fast Track InfoTech Solutions Location Map"
                    src="https://www.google.com/maps?q=Krupa+Arcade+Rajajinagar+2nd+Stage+Bangalore+560055&output=embed"
                    className="w-full h-72 sm:h-80 rounded-2xl border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Outlined Pill + "Get In Touch !" + Rounded Card Form */}
            <div className="lg:col-span-6 space-y-5">
              <div className="space-y-3">
                <span className="inline-block px-5 py-1.5 rounded-full border border-[#0D55A5]/40 bg-white text-[#0D55A5] text-xs font-bold shadow-2xs">
                  Contact Us
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171D68] tracking-tight">
                  Get In Touch !
                </h2>
              </div>

              <ContactForm
                variant="pill"
                title="Get In Touch !"
                subtitle="Contact Us"
                defaultSubject="StartUp business"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
