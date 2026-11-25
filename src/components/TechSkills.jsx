"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TECH_SKILLS } from "../assets/constants";
import CornerCross from "./CornerCross";
import TextReveal from "./TextReveal";

/* ─── Infinite Marquee Strip ──────────────────────────────────────────────── */
function MarqueeStrip({ items, direction = "left", speed = 35 }) {
  // Duplicate items so the loop is seamless
  const doubled = [...items, ...items, ...items];
  const isLeft = direction === "left";

  return (
    <div className="relative w-full overflow-hidden">
      {/* fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 z-10 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 z-10 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />

      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: isLeft ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {doubled.map((skill, idx) => (
          <SkillPill key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

/* ─── Single Skill Pill ───────────────────────────────────────────────────── */
function SkillPill({ skill }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[rgba(224,224,224,0.8)] dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md hover:border-neutral-300 dark:hover:border-neutral-500 transition-all duration-200 cursor-default group select-none shrink-0"
    >
      {/* Icon */}
      <div className="w-8 h-8 rounded-xl bg-neutral-50 dark:bg-neutral-800 border border-neutral-100 dark:border-neutral-700 flex items-center justify-center p-1.5 group-hover:scale-110 transition-transform duration-200 flex-shrink-0">
        {skill.icon.startsWith("http") ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span className="text-lg leading-none">{skill.icon}</span>
        )}
      </div>

      {/* Label */}
      <span className="font-display text-sm font-bold uppercase tracking-tight text-neutral-800 dark:text-neutral-100 whitespace-nowrap">
        {skill.name}
      </span>

      {/* Category dot */}
      {skill.level && (
        <span
          className={`text-[9px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full whitespace-nowrap ${
            skill.level === "expert"
              ? "bg-cyan-100 dark:bg-cyan-900/40 text-cyan-700 dark:text-cyan-300"
              : skill.level === "proficient"
              ? "bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300"
              : "bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-400"
          }`}
        >
          {skill.level}
        </span>
      )}
    </motion.div>
  );
}

/* ─── Main Section ────────────────────────────────────────────────────────── */
export default function TechSkills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax on header text
  const headerY = useTransform(scrollYProgress, [0, 0.5], [30, 0]);
  const headerOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  // Split into two rows
  const row1 = TECH_SKILLS.slice(0, Math.ceil(TECH_SKILLS.length / 2));
  const row2 = TECH_SKILLS.slice(Math.ceil(TECH_SKILLS.length / 2));

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative border-b border-[rgba(224,224,224,0.63)] dark:border-neutral-800 bg-white dark:bg-neutral-950 overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)] dark:border-neutral-800 relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* ── Header ── */}
        <motion.div
          style={{ y: headerY, opacity: headerOpacity }}
          className="relative px-6 sm:px-12 py-10 sm:py-14 border-b border-[rgba(224,224,224,0.63)] dark:border-neutral-800 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 block mb-2">
              MY SKILLS
            </span>
            <TextReveal
              as="h2"
              preset="fade-in-blur"
              per="word"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter text-neutral-900 dark:text-white leading-none"
            >
              Technical{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-yellow-400">
                Skills
              </span>
            </TextReveal>
          </div>

          <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs leading-relaxed">
            Here are the technologies and tools I work with and continue to
            learn to build better solutions.
          </p>
        </motion.div>

        {/* ── Marquee Rows ── */}
        <div className="py-8 sm:py-12 flex flex-col gap-5 overflow-hidden">
          {/* Row 1 → scrolls left */}
          <MarqueeStrip items={row1} direction="left" speed={30} />
          {/* Row 2 → scrolls right */}
          <MarqueeStrip items={row2} direction="right" speed={38} />
        </div>

        {/* ── Bottom accent bar ── */}
        <div className="border-t border-[rgba(224,224,224,0.63)] dark:border-neutral-800 px-6 sm:px-12 py-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-6">
            {[
              { color: "bg-cyan-500", label: "Expert" },
              { color: "bg-emerald-500", label: "Proficient" },
              { color: "bg-neutral-300 dark:bg-neutral-600", label: "Learning" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-300 dark:text-neutral-600">
            {TECH_SKILLS.length} Technologies
          </span>
        </div>
      </div>
    </section>
  );
}
