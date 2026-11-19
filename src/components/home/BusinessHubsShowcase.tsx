"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Layers,
  LineChart,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

interface HubServiceItem {
  title: string;
  subtitle: string;
  href: string;
  tag: string;
}

interface HubData {
  id: string;
  title: string;
  description: string;
  href: string;
  image: string;
  iconName: "code" | "layers" | "chart";
  services: HubServiceItem[];
}

const HUBS: HubData[] = [
  {
    id: "development",
    title: "Development Hub",
    description:
      "Empowering your digital transformation with cutting-edge web solutions.",
    href: "/service/custom-web-application-development",
    image: "/images/hub-development.svg",
    iconName: "code",
    services: [
      {
        tag: "Web Design",
        title: "Website Design",
        subtitle:
          "SEO-friendly, mobile-responsive business websites customized to your needs.",
        href: "/service/web-design-solutions",
      },
      {
        tag: "Web Apps",
        title: "Web Application Development",
        subtitle:
          "Dynamic custom web applications crafted for scalability and performance.",
        href: "/service/custom-web-application-development",
      },
      {
        tag: "Mobile Apps",
        title: "Mobile App Development",
        subtitle:
          "Native iOS, Android & Cross-Platform mobile applications for engagement.",
        href: "/service/mobile-app-development-solutions",
      },
      {
        tag: "eCommerce",
        title: "eCommerce Website Design",
        subtitle:
          "High-converting online stores with Shopify, WooCommerce & Magento.",
        href: "/service/ecommerce-solutions",
      },
    ],
  },
  {
    id: "solutions",
    title: "Solutions Hub",
    description:
      "Impeccable solutions come to life through our expert cross-functional teams.",
    href: "/solutions",
    image: "/images/hub-solutions.svg",
    iconName: "layers",
    services: [
      {
        tag: "On-Demand",
        title: "Food Delivery Application",
        subtitle:
          "Complete on-demand food ordering, tracking & delivery platform.",
        href: "/food-delivery-application",
      },
      {
        tag: "mCommerce",
        title: "Mobile Commerce Application",
        subtitle:
          "Pre-built customizable mobile commerce solution for modern retail.",
        href: "/mobile-commerce-application",
      },
      {
        tag: "PropTech",
        title: "Real Estate Website Development",
        subtitle:
          "Feature-rich property portals & real estate listing solutions.",
        href: "/real-estate-website-development-solutions",
      },
      {
        tag: "EdTech",
        title: "Learning Management Platform",
        subtitle:
          "Interactive e-learning, course management & institutional LMS.",
        href: "/learning-management-platform",
      },
    ],
  },
  {
    id: "marketing",
    title: "Marketing Hub",
    description:
      "We provide B2B and B2C marketing services, including SEO, PPC, and SMM.",
    href: "/service/digital-marketing-solutions",
    image: "/images/hub-marketing.svg",
    iconName: "chart",
    services: [
      {
        tag: "Organic Growth",
        title: "SEO Services",
        subtitle:
          "Outcome-driven and cost-effective search engine optimization.",
        href: "/service/seo-services-outcome-driven-and-cost-effective",
      },
      {
        tag: "Paid Ads",
        title: "PPC Campaign Management",
        subtitle:
          "Fastest route to attract ready-to-purchase customers to your site.",
        href: "/service/ppc-campaign-management-services",
      },
      {
        tag: "Social Media",
        title: "Social Media Marketing",
        subtitle:
          "Dynamic, performance-oriented social media marketing campaigns.",
        href: "/service/social-media-marketing-services",
      },
      {
        tag: "Local Search",
        title: "Local SEO Solutions",
        subtitle:
          "Capture 46%+ local-intent Google searches for immediate leads.",
        href: "/service/local-search-engine-optimization-seo-solutions",
      },
    ],
  },
];

function HubIcon({ name }: { name: HubData["iconName"] }) {
  if (name === "code") return <Code2 className="w-6 h-6" />;
  if (name === "layers") return <Layers className="w-6 h-6" />;
  return <LineChart className="w-6 h-6" />;
}

export default function BusinessHubsShowcase() {
  const [centerIndex, setCenterIndex] = useState(1); // Solutions Hub starts in center
  const [isSplitOpen, setIsSplitOpen] = useState(true);

  useEffect(() => {
    setIsSplitOpen(true);

    const closeTimer = setTimeout(() => {
      setIsSplitOpen(false);
    }, 4200);

    const nextTimer = setTimeout(() => {
      setCenterIndex((prev) => (prev + 1) % HUBS.length);
    }, 5000);

    return () => {
      clearTimeout(closeTimer);
      clearTimeout(nextTimer);
    };
  }, [centerIndex]);

  const leftIndex = (centerIndex - 1 + HUBS.length) % HUBS.length;
  const rightIndex = (centerIndex + 1) % HUBS.length;
  const centerHub = HUBS[centerIndex];

  // Determine each card's physical slot so Framer Motion `layout` physically glides the cards across the row!
  const getSlot = (idx: number): "left" | "center" | "right" => {
    if (idx === centerIndex) return "center";
    if (idx === leftIndex) return "left";
    return "right";
  };

  return (
    <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-12 space-y-8 overflow-hidden">
      {/* ROW 1: 3D ORBITAL REVOLVING HUB CARDS (Cards physically glide Left ↔ Center ↔ Right!) */}
      <div className="relative py-4">
        {/* Subtle Orbital Track Glow Behind the 3 Cards */}
        <div className="hidden lg:block absolute inset-x-12 top-1/2 -translate-y-1/2 h-24 rounded-full bg-gradient-to-r from-indigo-100/40 via-blue-200/50 to-indigo-100/40 blur-2xl pointer-events-none" />

        <div className="relative flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-0 [perspective:1400px]">
          {HUBS.map((hub, idx) => {
            const slot = getSlot(idx);
            const isCenter = slot === "center";

            // Physical order in flex row: left -> order-1, center -> order-2, right -> order-3
            const orderClass =
              slot === "left"
                ? "lg:order-1"
                : slot === "center"
                ? "lg:order-2"
                : "lg:order-3";

            if (isCenter) {
              return (
                <motion.div
                  key={hub.id}
                  layout
                  layoutId={`hub-card-${hub.id}`}
                  initial={false}
                  animate={{
                    scale: 1,
                    rotateY: 0,
                    y: 0,
                    opacity: 1,
                    zIndex: 30,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 190,
                    damping: 22,
                    mass: 0.9,
                  }}
                  className={`${orderClass} w-full lg:w-[54%] lg:-mx-8 relative bg-white rounded-3xl border-2 border-[#0D55A5]/30 shadow-[0_28px_70px_-15px_rgba(13,85,165,0.35)] overflow-hidden`}
                >
                  {/* Animated Flowing Top Gradient Bar */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="h-1.5 w-full origin-left bg-gradient-to-r from-[#171D68] via-[#4F2BFF] to-[#008AD8]"
                  />

                  <div className="p-6 sm:p-7 grid grid-cols-1 sm:grid-cols-12 gap-5 items-center">
                    <div className="sm:col-span-7 space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#171D68] via-[#0D55A5] to-[#008AD8] text-white flex items-center justify-center shadow-md shrink-0">
                          <HubIcon name={hub.iconName} />
                        </div>
                        <div>
                          <div className="inline-flex items-center space-x-1 text-[10px] font-extrabold uppercase tracking-widest text-[#4F2BFF]">
                            <Sparkles className="w-3 h-3" />
                            <span>Featured Business Hub</span>
                          </div>
                          <h3 className="text-xl sm:text-2xl font-extrabold text-[#0F172A]">
                            {hub.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-[#5A5F65] leading-relaxed">
                        {hub.description}
                      </p>

                      <div className="flex items-center justify-between pt-1">
                        <Link
                          href={hub.href}
                          className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#171D68] to-[#0D55A5] hover:from-[#0D55A5] hover:to-[#008AD8] shadow transition-all"
                        >
                          <span>Read more</span>
                          <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                        </Link>

                        {/* Progress Dots */}
                        <div className="flex items-center space-x-1.5">
                          {HUBS.map((h, hIdx) => (
                            <button
                              key={h.id}
                              type="button"
                              onClick={() => setCenterIndex(hIdx)}
                              aria-label={`Show ${h.title}`}
                              className={`h-2 rounded-full transition-all cursor-pointer ${
                                hIdx === centerIndex
                                  ? "w-7 bg-gradient-to-r from-[#4F2BFF] to-[#008AD8]"
                                  : "w-2 bg-slate-300 hover:bg-slate-400"
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Matching Hub Illustration */}
                    <div className="sm:col-span-5">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.45, delay: 0.1 }}
                        className="rounded-2xl overflow-hidden bg-gradient-to-br from-[#F3EFFE] to-[#EFF6FF] border border-indigo-100 p-1.5 shadow-inner"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={hub.image}
                          alt={hub.title}
                          className="w-full h-36 sm:h-40 object-cover rounded-xl"
                        />
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              );
            }

            // Side Card (Left or Right) that physically glides into Center when clicked or auto-rotated
            const isLeft = slot === "left";
            return (
              <motion.button
                key={hub.id}
                type="button"
                onClick={() => setCenterIndex(idx)}
                layout
                layoutId={`hub-card-${hub.id}`}
                initial={false}
                animate={{
                  scale: 0.92,
                  rotateY: isLeft ? 8 : -8,
                  y: 6,
                  opacity: 0.9,
                  zIndex: 10,
                }}
                whileHover={{
                  scale: 0.95,
                  opacity: 1,
                }}
                transition={{
                  type: "spring",
                  stiffness: 190,
                  damping: 22,
                  mass: 0.9,
                }}
                className={`${orderClass} w-full lg:w-[27%] bg-white/95 hover:bg-white rounded-2xl p-6 ${
                  isLeft ? "lg:pr-12" : "lg:pl-12"
                } border border-slate-200/90 shadow-lg hover:shadow-xl text-left relative cursor-pointer`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#171D68] via-[#0D55A5] to-[#008AD8] text-white flex items-center justify-center mb-4 shadow">
                  <HubIcon name={hub.iconName} />
                </div>
                <h3 className="text-lg font-extrabold text-[#0F172A]">
                  {hub.title}
                </h3>
                <p className="text-xs text-[#5A5F65] mt-2 leading-relaxed line-clamp-3">
                  {hub.description}
                </p>
                <div className="mt-4 inline-flex items-center text-[11px] font-bold uppercase tracking-wider text-[#0D55A5]">
                  <span>Preview Hub</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* ROW 2: 4 SEPARATE SERVICE CARDS SPLITTING OUT IN THEIR OWN ROW */}
      <div className="min-h-[195px]">
        <AnimatePresence mode="wait">
          {isSplitOpen && (
            <motion.div
              key={`split-row-${centerHub.id}`}
              initial={{ opacity: 0, y: -18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {centerHub.services.map((srv, idx) => {
                const initialX =
                  idx === 0 ? 140 : idx === 1 ? 60 : idx === 2 ? -60 : -140;

                return (
                  <motion.div
                    key={srv.href}
                    initial={{ opacity: 0, x: initialX, y: -24, scale: 0.85 }}
                    animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
                    exit={{
                      opacity: 0,
                      x: initialX * 0.6,
                      y: -16,
                      scale: 0.88,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={srv.href}
                      className="group h-full bg-white hover:bg-gradient-to-br hover:from-[#171D68] hover:to-[#0D55A5] rounded-2xl p-6 border border-slate-200/90 hover:border-transparent shadow-md hover:shadow-xl transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="px-2.5 py-0.5 rounded-full bg-blue-50 group-hover:bg-white/15 text-[#0D55A5] group-hover:text-[#38BDF8] text-[10px] font-bold uppercase tracking-wider transition-colors">
                            {srv.tag}
                          </span>
                          <CheckCircle2 className="w-4 h-4 text-[#0D55A5] group-hover:text-[#38BDF8] transition-colors" />
                        </div>

                        <h4 className="text-base font-extrabold text-[#0F172A] group-hover:text-white leading-snug transition-colors">
                          {srv.title}
                        </h4>

                        <p className="text-xs text-[#5A5F65] group-hover:text-blue-100 mt-2 leading-relaxed transition-colors">
                          {srv.subtitle}
                        </p>
                      </div>

                      <div className="mt-5 pt-3 border-t border-slate-100 group-hover:border-white/15 flex items-center text-xs font-bold text-[#0D55A5] group-hover:text-white transition-colors">
                        <span>Read more</span>
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
