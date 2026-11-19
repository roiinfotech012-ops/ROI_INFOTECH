"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Globe,
  Quote,
  Sparkles,
  Star,
  CheckCircle2,
} from "lucide-react";

interface TestimonialItem {
  id: string;
  name: string;
  initials: string;
  website: string;
  quote: string;
  highlight: string;
}

// 5 Real Testimonials Extracted Directly from roiinfotech.com
const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "kodur",
    name: "Dr. Kodur Venkatesh",
    initials: "KV",
    website: "www.idec.us",
    highlight: "The success of the web site has been beyond our expectations.",
    quote:
      "Xlent Facilities did a great job! This is our first website and we didn’t know what to expect. They walked us through the process and help us each step of the way. The success of the web site has been beyond our expectations. We receive complements daily from people who visit our site. We could not have asked for a better design. You should definitely consider NetDogz if you are planning on building a website.",
  },
  {
    id: "alok",
    name: "Alok",
    initials: "AL",
    website: "www.krsfx.com",
    highlight:
      "The hits to our site have substantially increased and so have the many compliments we receive daily.",
    quote:
      "When we decided to redo our website, we called quite a number of webdesigners and were provided with numerous addresses of sites created by each designer. We found that Xlent Facilities had the most sites that we thought were innovative, creative and professional. After speaking a few times with Xlent we decided to go with them. It's the best decision we've made in quite some time. Xlent Facilities not only gave freely of their time to talk with me long distance, they had the patience to teach me as we went along. They came up with various ideas that allowed me to choose what I liked best and with their guidance we got exactly the website we dreamed about. The hits to our site have substantially increased and so have the many compliments we receive daily. People have told us that our site is attractive, informational and friendly as well as professionally done. Thank you Xlent team for making dreams come true!",
  },
  {
    id: "kathleen",
    name: "Kathleen Smith",
    initials: "KS",
    website: "ROI Infotech Client",
    highlight:
      "Strong interest in coaching and capability building with effective stakeholder relationships.",
    quote:
      "We also bring a strong interest in coaching and capability building, with an emphasis on emotional intelligence and effective stakeholder relationships. It’s always a joy to hear that the work has positively impacted our clients and that they are happy to share their experience.",
  },
  {
    id: "van-hunter",
    name: "Van Hunter",
    initials: "VH",
    website: "ROI Infotech Client",
    highlight:
      "I love that moment when we find the connections between organisations and envisage the platform.",
    quote:
      "I love that moment when we find the connections between organisations and envisage the initiative or platform. Great in planting the seed and allowing the group to transition into a collaborative discussion.",
  },
  {
    id: "maria-silverii",
    name: "Maria Silverii",
    initials: "MS",
    website: "ROI Infotech Client",
    highlight:
      "Special amendments made live on my website. Customer support is amazing really 24/24.",
    quote:
      "I asked for an extra customization in Process section and the author made special amendments in the theme live on my website. Customer support is amazing really 24/24.",
  },
];

export default function TestimonialsShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const activeIndexRef = useRef(0);
  const lastWheelTime = useRef(0);
  const deltaAccum = useRef(0);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  // Smooth non-passive mouse-wheel listener:
  // Wherever the cursor is inside this section, wheel-down advances to next review and wheel-up goes to previous review.
  // Once at the last review (scrolling down) or first review (scrolling up), lets the page scroll naturally.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      const idx = activeIndexRef.current;
      const scrollingDown = e.deltaY > 0;
      const scrollingUp = e.deltaY < 0;

      const canAdvance = scrollingDown && idx < TESTIMONIALS.length - 1;
      const canRetreat = scrollingUp && idx > 0;

      if (!canAdvance && !canRetreat) {
        deltaAccum.current = 0;
        return; // Allow normal page scrolling past the section
      }

      e.preventDefault();

      const now = Date.now();
      if (now - lastWheelTime.current < 320) {
        return;
      }

      deltaAccum.current += e.deltaY;
      if (Math.abs(deltaAccum.current) < 28) {
        return;
      }

      deltaAccum.current = 0;
      lastWheelTime.current = now;

      if (canAdvance) {
        setDirection(1);
        setActiveIndex((prev) => Math.min(TESTIMONIALS.length - 1, prev + 1));
      } else if (canRetreat) {
        setDirection(-1);
        setActiveIndex((prev) => Math.max(0, prev - 1));
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const active = TESTIMONIALS[activeIndex];

  // Next 3 cards intersecting/overlapping each other to the right of the big card
  const nextThree = [1, 2, 3].map((offset) => {
    const idx = (activeIndex + offset) % TESTIMONIALS.length;
    return { item: TESTIMONIALS[idx], idx, offset };
  });

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length
    );
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handleSelect = (idx: number) => {
    if (idx === activeIndex) return;
    setDirection(idx > activeIndex ? 1 : -1);
    setActiveIndex(idx);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 lg:py-24 bg-white border-t border-slate-200/80 overflow-hidden"
    >
      {/* Subtle Ambient Background Accents */}
      <div className="absolute -top-24 right-0 w-[420px] h-[420px] rounded-full bg-indigo-100/50 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 -left-24 w-[380px] h-[380px] rounded-full bg-blue-100/50 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[#0D55A5] text-xs font-extrabold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#4F2BFF]" />
              <span>Client Feedback — 5 Verified Reviews</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#0F172A] tracking-tight">
              What Our Clients Say
            </h2>
          </div>

          <div className="flex items-center space-x-3">
            <span className="hidden lg:inline-block text-xs font-semibold text-[#5A5F65] bg-slate-100 px-3.5 py-2 rounded-full">
              Mouse wheel scroll ({activeIndex + 1}/{TESTIMONIALS.length})
            </span>
            <Link
              href="/testimonials"
              className="inline-flex items-center px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#0D55A5] bg-blue-50 hover:bg-[#0D55A5] hover:text-white border border-blue-200/80 transition-all"
            >
              <span>View All Testimonials</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>

        {/* CASCADING INTERSECTING ROW: 1 BIG CARD AT LEFT + 3 INTERSECTING CARDS NEXT TO IT */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          {/* 1ST BIG CARD AT LEFT */}
          <div className="w-full lg:w-[46%] shrink-0 relative z-40">
            <div className="relative w-full min-h-[410px] sm:min-h-[440px] rounded-[28px] bg-gradient-to-br from-[#0A1638] via-[#171D68] to-[#0D55A5] text-white p-6 sm:p-9 shadow-[0_28px_70px_-15px_rgba(23,29,104,0.45)] border border-blue-400/30 overflow-hidden flex flex-col justify-between">
              <Quote className="absolute top-5 right-6 w-24 h-24 text-white/5 rotate-12 pointer-events-none" />

              <AnimatePresence mode="popLayout" initial={false} custom={direction}>
                <motion.div
                  key={active.id}
                  custom={direction}
                  initial={{
                    opacity: 0,
                    x: direction > 0 ? 55 : -55,
                    scale: 0.96,
                  }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{
                    opacity: 0,
                    x: direction > 0 ? -55 : 55,
                    scale: 0.96,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 170,
                    damping: 24,
                    mass: 0.85,
                  }}
                  className="relative z-10 flex flex-col justify-between h-full min-h-[360px] space-y-5 will-change-transform"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center text-[#38BDF8]">
                        <Quote className="w-4 h-4" />
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-white/10 text-sky-200 text-[10px] font-bold uppercase tracking-wider">
                        0{activeIndex + 1} / 0{TESTIMONIALS.length}
                      </span>
                    </div>

                    <div className="flex items-center space-x-0.5 bg-white/10 px-2.5 py-1 rounded-full border border-white/15">
                      {[...Array(5)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-3 h-3 text-amber-300 fill-amber-300"
                        />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-sm sm:text-[15px] text-blue-50 leading-relaxed italic line-clamp-9">
                    &ldquo;{active.quote}&rdquo;
                  </blockquote>

                  <div className="pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                    <div className="flex items-center space-x-3 min-w-0">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#38BDF8] to-[#4F2BFF] flex items-center justify-center font-extrabold text-xs text-white shadow shrink-0">
                        {active.initials}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center space-x-1">
                          <span className="text-sm font-extrabold text-white truncate">
                            {active.name}
                          </span>
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                        </div>
                        <div className="flex items-center space-x-1 text-[11px] text-[#38BDF8] font-semibold truncate">
                          <Globe className="w-3 h-3 shrink-0" />
                          <span className="truncate">{active.website}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-1.5 shrink-0">
                      <button
                        type="button"
                        onClick={handlePrev}
                        aria-label="Previous review"
                        className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 text-white border border-white/20 flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={handleNext}
                        aria-label="Next review"
                        className="w-8 h-8 rounded-full bg-white text-[#0D55A5] hover:bg-sky-50 flex items-center justify-center shadow transition-colors cursor-pointer"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* NEXT 3 INTERSECTING CARDS (Mouse Wheel Scroll or Click to Smoothly Glide!) */}
          <div className="w-full lg:w-[54%] grid grid-cols-1 sm:grid-cols-3 lg:flex lg:items-center mt-5 lg:mt-0 gap-4 lg:gap-0">
            {nextThree.map(({ item, idx, offset }) => {
              const zClass =
                offset === 1 ? "lg:z-30" : offset === 2 ? "lg:z-20" : "lg:z-10";
              const overlapClass = "lg:-ml-12 xl:-ml-14";
              const heightClass =
                offset === 1
                  ? "lg:h-[395px] lg:pl-16"
                  : offset === 2
                  ? "lg:h-[355px] lg:pl-16"
                  : "lg:h-[315px] lg:pl-16";
              const bgTint =
                offset === 1
                  ? "bg-white border-indigo-200/80 shadow-xl"
                  : offset === 2
                  ? "bg-[#F8FAFC] border-slate-200/90 shadow-lg"
                  : "bg-[#F1F5F9] border-slate-200/80 shadow-md";

              return (
                <motion.button
                  key={item.id}
                  layout
                  type="button"
                  onClick={() => handleSelect(idx)}
                  transition={{
                    type: "spring",
                    stiffness: 180,
                    damping: 24,
                    mass: 0.85,
                  }}
                  className={`relative w-full lg:w-[40%] ${overlapClass} ${zClass} ${heightClass} ${bgTint} hover:bg-white rounded-[24px] p-5 border hover:border-[#0D55A5] text-left transition-colors flex flex-col justify-between cursor-pointer group will-change-transform`}
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#171D68] to-[#0D55A5] text-white flex items-center justify-center font-extrabold text-xs shadow-xs">
                        {item.initials}
                      </div>
                      <span className="text-[10px] font-extrabold text-slate-400 group-hover:text-[#0D55A5]">
                        0{idx + 1}
                      </span>
                    </div>

                    <div className="flex items-center space-x-0.5">
                      {[...Array(5)].map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          className="w-3 h-3 text-amber-400 fill-amber-400"
                        />
                      ))}
                    </div>

                    <p className="text-xs text-[#5A5F65] leading-relaxed italic line-clamp-5">
                      &ldquo;{item.highlight}&rdquo;
                    </p>
                  </div>

                  <div className="pt-3 border-t border-slate-200/70 space-y-0.5">
                    <div className="flex items-center space-x-1">
                      <h3 className="text-xs font-extrabold text-[#0F172A] group-hover:text-[#0D55A5] truncate transition-colors">
                        {item.name}
                      </h3>
                      <CheckCircle2 className="w-3 h-3 text-[#0D55A5] shrink-0" />
                    </div>
                    <div className="text-[10px] text-[#0D55A5] font-semibold truncate">
                      {item.website}
                    </div>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
