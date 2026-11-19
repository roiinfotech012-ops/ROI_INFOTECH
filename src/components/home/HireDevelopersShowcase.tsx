"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { ArrowRight, Users, Sparkles } from "lucide-react";

export interface HireCardItem {
  url: string;
  path: string;
  heading: string;
  excerpt: string;
}

interface HireDevelopersShowcaseProps {
  hireItems: HireCardItem[];
}

const TYPING_TITLE = "Hire Dedicated Developers";

export default function HireDevelopersShowcase({
  hireItems,
}: HireDevelopersShowcaseProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.25 });

  // Phase: "typing" -> ONLY black typing text in the middle (no top header), then "cards" -> top header + 4 moving category cards
  const [phase, setPhase] = useState<"typing" | "cards">("typing");
  const [typedCount, setTypedCount] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    if (isInView) {
      setPhase("typing");
      setTypedCount(0);
      setStartIndex(0);
    }
  }, [isInView]);

  useEffect(() => {
    if (phase !== "typing") return;

    if (typedCount < TYPING_TITLE.length) {
      const charTimer = setTimeout(() => {
        setTypedCount((prev) => prev + 1);
      }, 60);
      return () => clearTimeout(charTimer);
    } else {
      const holdTimer = setTimeout(() => {
        setStartIndex(0);
        setPhase("cards");
      }, 750);
      return () => clearTimeout(holdTimer);
    }
  }, [phase, typedCount]);

  const maxStart = Math.max(0, hireItems.length - 4);

  useEffect(() => {
    if (phase !== "cards" || hireItems.length === 0) return;

    const slideTimer = setTimeout(() => {
      if (startIndex < maxStart) {
        setStartIndex((prev) => prev + 1);
      } else {
        setTypedCount(0);
        setPhase("typing");
      }
    }, 2200);

    return () => clearTimeout(slideTimer);
  }, [phase, startIndex, maxStart, hireItems.length]);

  const visibleFour = hireItems.slice(startIndex, startIndex + 4);

  return (
    <section
      ref={sectionRef}
      className="py-20 lg:py-24 bg-[#F8FAFC] text-[#0F172A] border-t border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[380px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {phase === "typing" ? (
            /* PHASE 1: ONLY Black Typing Text in the Middle (No Top Header, No Box) */
            <motion.div
              key="typing-only-stage"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="w-full py-20 flex items-center justify-center text-center"
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#0F172A] flex items-center justify-center flex-wrap">
                <span>{TYPING_TITLE.slice(0, typedCount)}</span>
                <span className="inline-block w-1 h-9 sm:h-12 bg-[#0F172A] ml-1.5 animate-pulse rounded-full" />
              </h2>
            </motion.div>
          ) : (
            /* PHASE 2: Top Header + Description + CTA Appear Together With the 4 Moving Category Cards */
            <motion.div
              key="cards-stage"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -14 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-10"
            >
              {/* Top Header & View All CTA */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div className="space-y-2 max-w-2xl">
                  <span className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#0D55A5]">
                    <Sparkles className="w-3.5 h-3.5 text-[#4F2BFF]" />
                    <span>Dedicated Engineering Talent</span>
                  </span>

                  <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-[#0F172A]">
                    {TYPING_TITLE}
                  </h2>

                  <p className="text-sm sm:text-base text-[#5A5F65] leading-relaxed">
                    Experienced Developers at a Competitive Rate. ROI is
                    award-winning web development company based in India,
                    catering to a global clientele since 2005.
                  </p>
                </div>

                <Link
                  href="/hire"
                  className="inline-flex items-center px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#171D68] to-[#0D55A5] hover:from-[#0D55A5] hover:to-[#008AD8] transition-all shadow-md self-start md:self-auto shrink-0"
                >
                  <span>View All Hiring Categories</span>
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* 4 Category Cards Moving One After Another */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  <AnimatePresence mode="popLayout">
                    {visibleFour.map((hire) => (
                      <motion.div
                        key={hire.url}
                        layout
                        initial={{ opacity: 0, x: 70, scale: 0.94 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -70, scale: 0.94 }}
                        transition={{
                          duration: 0.5,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={hire.path}
                          className="group h-full bg-white hover:bg-gradient-to-br hover:from-[#171D68] hover:to-[#0D55A5] border border-slate-200/90 hover:border-transparent rounded-2xl p-6 shadow-md hover:shadow-xl transition-all flex flex-col justify-between min-h-[255px]"
                        >
                          <div>
                            <div className="w-10 h-10 rounded-xl bg-blue-50 group-hover:bg-white/15 border border-blue-100 group-hover:border-white/25 text-[#0D55A5] group-hover:text-[#38BDF8] flex items-center justify-center mb-4 transition-colors">
                              <Users className="w-5 h-5" />
                            </div>
                            <h3 className="text-base font-extrabold text-[#0F172A] group-hover:text-white transition-colors leading-snug">
                              {hire.heading}
                            </h3>
                            {hire.excerpt && (
                              <p className="text-xs text-[#5A5F65] group-hover:text-blue-100 mt-2.5 line-clamp-3 leading-relaxed transition-colors">
                                {hire.excerpt}
                              </p>
                            )}
                          </div>
                          <div className="mt-5 pt-3 border-t border-slate-100 group-hover:border-white/15 flex items-center text-xs font-bold text-[#0D55A5] group-hover:text-white transition-colors">
                            <span>Engage Developers</span>
                            <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {/* Progress Indicator Dots */}
                <div className="flex items-center justify-center space-x-2">
                  {Array.from({ length: maxStart + 1 }).map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setStartIndex(idx)}
                      aria-label={`Slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        idx === startIndex
                          ? "w-8 bg-gradient-to-r from-[#4F2BFF] to-[#0D55A5]"
                          : "w-2 bg-slate-300 hover:bg-slate-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
