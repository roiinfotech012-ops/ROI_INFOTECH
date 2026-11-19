"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Sparkles, CheckCheck } from "lucide-react";

export interface SolutionCardItem {
  url: string;
  path: string;
  heading: string;
  excerpt: string;
}

interface SolutionsShowcaseProps {
  solutions?: SolutionCardItem[];
}

interface PhoneSolutionSlide {
  id: string;
  title: string;
  image: string;
  href: string;
}

const FIRST_TEXT = "Looking for website development?";
const SECOND_TEXT = "We help you grow digitally!";

const PHONE_SLIDES: PhoneSolutionSlide[] = [
  {
    id: "real-estate",
    title: "Real Estate Web Development",
    image: "/images/solution-realestate-hd.png",
    href: "/real-estate-website-development-solutions",
  },
  {
    id: "lms",
    title: "LEARNING MANAGEMENT PLATFORM",
    image: "/images/solution-lms-hd.png",
    href: "/learning-management-platform",
  },
  {
    id: "food-delivery",
    title: "FOOD DELIVERY APPLICATION",
    image: "/images/solution-food-hd.png",
    href: "/food-delivery-application",
  },
  {
    id: "ecommerce",
    title: "E-COMMERCE APPLICATION",
    image: "/images/solution-ecommerce-hd.png",
    href: "/mobile-commerce-application",
  },
];

export default function SolutionsShowcase({}: SolutionsShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const [textPhase, setTextPhase] = useState<"first" | "second">("first");
  const [typedCount, setTypedCount] = useState(0);
  const [activePhoneIdx, setActivePhoneIdx] = useState(0);

  useEffect(() => {
    if (isInView) {
      setTextPhase("first");
      setTypedCount(0);
      setActivePhoneIdx(0);
    }
  }, [isInView]);

  // Left phone texting loop: 1st text -> 2nd text -> loops
  useEffect(() => {
    const fullText = textPhase === "first" ? FIRST_TEXT : SECOND_TEXT;

    if (typedCount < fullText.length) {
      const charTimer = setTimeout(() => {
        setTypedCount((prev) => prev + 1);
      }, 55);
      return () => clearTimeout(charTimer);
    } else {
      const holdMs = textPhase === "first" ? 1200 : 2800;
      const nextTimer = setTimeout(() => {
        setTypedCount(0);
        setTextPhase((prev) => (prev === "first" ? "second" : "first"));
      }, holdMs);
      return () => clearTimeout(nextTimer);
    }
  }, [textPhase, typedCount]);

  // Right circular HD phone carousel rotation (active immediately, zero empty gap)
  useEffect(() => {
    const rotateTimer = setInterval(() => {
      setActivePhoneIdx((prev) => (prev + 1) % PHONE_SLIDES.length);
    }, 2800);

    return () => clearInterval(rotateTimer);
  }, []);

  const currentPhone = PHONE_SLIDES[activePhoneIdx];

  return (
    <section
      ref={sectionRef}
      className="py-16 lg:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D55A5]">
            Industry &amp; Platform Solutions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0F172A] mt-1">
            Our Turnkey Business Solutions
          </h2>
        </div>
        <Link
          href="/solutions"
          className="mt-4 md:mt-0 inline-flex items-center text-sm font-bold text-[#0D55A5] hover:text-[#171D68]"
        >
          <span>View All Solutions</span>
          <ArrowRight className="w-4 h-4 ml-1.5" />
        </Link>
      </div>

      {/* 2-Column Split: LEFT = Pointing-Man Phone Texting Animation | RIGHT = Smooth Circular HD Solution Phone Carousel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
        {/* LEFT COLUMN: Pointing-Man Transparent PNG Phone with 1st -> 2nd Texting Animation */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-[430px] mx-auto">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/solutions-phone-transparent.png"
              alt="Looking for website development? We help you grow digitally!"
              className="w-full h-auto block select-none drop-shadow-xl"
            />

            {/* Live Texting Screen Overlay Inside the Left Phone */}
            <div className="absolute top-[13%] left-[25.5%] right-[25.5%] bottom-[49%] flex flex-col justify-between px-3 sm:px-4 py-2 pointer-events-none">
              <div className="flex items-center justify-between border-b border-slate-100 pb-1.5">
                <div className="flex items-center space-x-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[9px] sm:text-[10px] font-extrabold text-[#0D55A5] tracking-wide uppercase">
                    ROI InfoTech
                  </span>
                </div>
                <Sparkles className="w-3 h-3 text-[#4F2BFF]" />
              </div>

              <div className="flex-1 flex items-center justify-center">
                <AnimatePresence mode="wait">
                  {textPhase === "first" ? (
                    <motion.div
                      key="msg-first"
                      initial={{ opacity: 0, y: 12, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.94 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="w-full bg-[#F1F5F9] border border-slate-200/90 rounded-2xl rounded-tl-xs px-3.5 py-3 shadow-sm"
                    >
                      <p className="text-xs sm:text-sm font-extrabold text-[#0F172A] leading-snug">
                        <span>{FIRST_TEXT.slice(0, typedCount)}</span>
                        <span className="inline-block w-0.5 h-4 bg-[#0D55A5] ml-0.5 align-middle animate-pulse" />
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="msg-second"
                      initial={{ opacity: 0, y: 12, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 0.94 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="w-full bg-gradient-to-r from-[#171D68] via-[#0D55A5] to-[#008AD8] text-white rounded-2xl rounded-tr-xs px-3.5 py-3 shadow-md"
                    >
                      <p className="text-xs sm:text-sm font-extrabold leading-snug">
                        <span>{SECOND_TEXT.slice(0, typedCount)}</span>
                        <span className="inline-block w-0.5 h-4 bg-[#38BDF8] ml-0.5 align-middle animate-pulse" />
                      </p>
                      <div className="mt-1.5 flex items-center justify-end space-x-1 text-[9px] text-sky-200 font-semibold">
                        <span>ROI Solutions</span>
                        <CheckCheck className="w-3 h-3 text-[#38BDF8]" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="h-1" />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Smooth Circular Arc HD Solution Phone Carousel */}
        <div className="lg:col-span-7 flex flex-col items-center justify-center min-h-[580px] sm:min-h-[650px]">
          <div className="w-full flex flex-col items-center space-y-5">
            {/* Title Directly Above the Active HD Phone */}
            <div className="text-center min-h-[4rem] flex flex-col items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`title-${currentPhone.id}`}
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.35 }}
                  className="space-y-1.5"
                >
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0D55A5] text-[11px] font-extrabold uppercase tracking-widest">
                    <Sparkles className="w-3 h-3 text-[#4F2BFF]" />
                    <span>
                      Solution {activePhoneIdx + 1} of {PHONE_SLIDES.length}
                    </span>
                  </span>
                  <h3 className="text-xl sm:text-2xl lg:text-[26px] font-black tracking-tight text-[#0F172A] uppercase">
                    {currentPhone.title}
                  </h3>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Single Large HD Phone Image Tracing Smooth Geometric Circle Starting From Down */}
            <div className="relative w-full h-[460px] sm:h-[530px] lg:h-[580px] flex items-center justify-center overflow-hidden">
              <div className="absolute bottom-4 w-72 h-9 rounded-full bg-[#0D55A5]/15 blur-xl pointer-events-none" />

              <AnimatePresence mode="popLayout" initial={false}>
                <motion.div
                  key={currentPhone.id}
                  initial={{
                    opacity: 0,
                    rotate: 44,
                    scale: 0.78,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -44,
                    scale: 0.78,
                  }}
                  transition={{
                    duration: 0.95,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "50% 145%" }}
                  className="absolute flex justify-center will-change-transform"
                >
                  <Link href={currentPhone.href} className="group block">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={currentPhone.image}
                      alt={currentPhone.title}
                      className="h-[430px] sm:h-[500px] lg:h-[550px] w-auto object-contain select-none drop-shadow-[0_28px_55px_rgba(13,85,165,0.3)] group-hover:scale-[1.02] transition-transform duration-300"
                    />
                  </Link>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Bottom Controls & Explore CTA */}
            <div className="flex flex-wrap items-center justify-center gap-4 pt-1">
              <div className="flex items-center space-x-2">
                {PHONE_SLIDES.map((s, idx) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setActivePhoneIdx(idx)}
                    aria-label={`Show ${s.title}`}
                    className={`h-2.5 rounded-full transition-all cursor-pointer ${
                      idx === activePhoneIdx
                        ? "w-9 bg-gradient-to-r from-[#4F2BFF] to-[#0D55A5]"
                        : "w-2.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <Link
                href={currentPhone.href}
                className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#171D68] to-[#0D55A5] hover:from-[#0D55A5] hover:to-[#008AD8] shadow-md transition-all"
              >
                <span>Explore {currentPhone.title}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
