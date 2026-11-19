"use client";

import React, { useEffect, useState } from "react";

const FULL_TEXT = "ROI INFOTECH";

export default function IntroSplash() {
  const [phase, setPhase] = useState<
    "crest" | "typing" | "solutions" | "fading" | "hidden"
  >("crest");
  const [typedCount, setTypedCount] = useState(0);

  useEffect(() => {
    // Step 1: Crest emblem appears first (0ms -> 600ms)
    const startTypingTimer = setTimeout(() => {
      setPhase("typing");
    }, 650);

    return () => clearTimeout(startTypingTimer);
  }, []);

  useEffect(() => {
    if (phase !== "typing") return;

    if (typedCount < FULL_TEXT.length) {
      const charTimer = setTimeout(() => {
        setTypedCount((prev) => prev + 1);
      }, 95);
      return () => clearTimeout(charTimer);
    } else {
      // Step 3: Once "ROI INFOTECH" finishes typing, "SOLUTIONS" displays directly below
      const showSolutionsTimer = setTimeout(() => {
        setPhase("solutions");
      }, 180);
      return () => clearTimeout(showSolutionsTimer);
    }
  }, [phase, typedCount]);

  useEffect(() => {
    if (phase !== "solutions") return;

    // Hold complete logo briefly so the user admires it, then smoothly fade out to reveal website
    const fadeTimer = setTimeout(() => {
      setPhase("fading");
    }, 1100);

    return () => clearTimeout(fadeTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== "fading") return;

    const hideTimer = setTimeout(() => {
      setPhase("hidden");
    }, 600);

    return () => clearTimeout(hideTimer);
  }, [phase]);

  if (phase === "hidden") {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-white flex flex-col items-center justify-center px-6 select-none transition-opacity duration-500 ease-in-out ${
        phase === "fading" ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
      aria-label="ROI InfoTech Solutions Welcome Animation"
    >
      <div className="flex flex-col items-center max-w-lg w-full text-center">
        {/* STEP 1: The Crest Emblem Appears First */}
        <div className="animate-in fade-in zoom-in-95 duration-500">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logos/roi-crest-hd.png"
            alt="ROI InfoTech Solutions Crest"
            className="w-56 sm:w-68 md:w-76 h-auto object-contain mx-auto"
          />
        </div>

        {/* STEP 2: "ROI INFOTECH" Types Out Character-by-Character */}
        <div className="mt-4 min-h-[3.5rem] sm:min-h-[4.25rem] flex items-center justify-center">
          <h1 className="text-4xl sm:text-5xl md:text-[54px] font-black tracking-tight text-[#064599] leading-none flex items-center">
            <span>{FULL_TEXT.slice(0, typedCount)}</span>
            {phase === "typing" && (
              <span className="inline-block w-1 sm:w-1.5 h-9 sm:h-12 bg-[#064599] ml-1 animate-pulse rounded-full" />
            )}
          </h1>
        </div>

        {/* STEP 3: "S O L U T I O N S" Directly Displays Below */}
        <div
          className={`mt-2 sm:mt-3 transition-all duration-300 ease-out transform ${
            phase === "solutions" || phase === "fading"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2 pointer-events-none"
          }`}
        >
          <p className="text-lg sm:text-2xl md:text-[26px] font-bold text-[#616365] tracking-[0.46em] pl-[0.46em] uppercase">
            SOLUTIONS
          </p>
        </div>
      </div>
    </div>
  );
}
