import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Code2, Layers, Layout, Palette, PenTool, Sparkles, Wand2 } from "lucide-react";
import { TECH_SKILLS } from "../assets/constants";
import CornerCross from "./CornerCross";
import TextReveal from "./TextReveal";
import TiltCard from "./TiltCard";

function ConceptIcon({ icon }) {
  const cls = "text-neutral-800 dark:text-neutral-100";
  switch (icon) {
    case "icon:uiux":
      return <Layout size={18} className={cls} />;
    case "icon:wireframe":
      return <PenTool size={18} className={cls} />;
    case "icon:systems":
      return <Layers size={18} className={cls} />;
    case "icon:graphic":
      return <Palette size={18} className={cls} />;
    case "icon:brand":
      return <Sparkles size={18} className={cls} />;
    case "icon:ai":
      return <Wand2 size={18} className={cls} />;
    case "icon:vibecode":
    default:
      return <Code2 size={18} className={cls} />;
  }
}

function SkillCard({ skill }) {
  return (
    <TiltCard
      scale={1.07}
      className="flex items-center gap-3.5 px-5 py-3.5 rounded-2xl border border-[rgba(224,224,224,0.8)] dark:border-neutral-800 bg-neutral-50/70 dark:bg-neutral-900/90 hover:bg-white dark:hover:bg-neutral-800 hover:border-neutral-300 dark:hover:border-neutral-600 hover:shadow-xl cursor-default group select-none shrink-0"
    >
      {/* Icon box matching AboutSection "My Stack" */}
      <div className="w-10 h-10 rounded-xl bg-white dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-700 p-2 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
        {skill.icon.startsWith("http") ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-full h-full object-contain"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <ConceptIcon icon={skill.icon} />
        )}
      </div>

      <div className="flex flex-col min-w-0">
        <span className="font-display text-base font-bold uppercase tracking-tight text-neutral-900 dark:text-neutral-100 leading-none whitespace-nowrap">
          {skill.name}
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-400 dark:text-neutral-400 mt-1 whitespace-nowrap">
          {skill.category}
        </span>
      </div>

      {/* Subtle status dot matching AboutSection */}
      <span
        className={`w-1.5 h-1.5 rounded-full ml-1 shrink-0 transition-colors ${
          skill.level === "expert"
            ? "bg-cyan-500"
            : skill.level === "proficient"
            ? "bg-emerald-500"
            : "bg-neutral-300 dark:bg-neutral-600"
        }`}
      />
    </TiltCard>
  );
}

function MarqueeRow({ items, direction = "left", duration = 34 }) {
  const [paused, setPaused] = useState(false);
  const loopItems = [...items, ...items, ...items];
  const isLeft = direction === "left";

  return (
    <div
      className="relative w-full overflow-hidden py-1"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 z-10 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 z-10 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent" />

      <motion.div
        className="flex gap-4 w-max"
        animate={
          paused
            ? undefined
            : { x: isLeft ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }
        }
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        {loopItems.map((skill, idx) => (
          <SkillCard key={`${skill.name}-${idx}`} skill={skill} />
        ))}
      </motion.div>
    </div>
  );
}

export default function TechSkills() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 0.4], [24, 0]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.25], [0, 1]);

  const midpoint = Math.ceil(TECH_SKILLS.length / 2);
  const row1 = TECH_SKILLS.slice(0, midpoint);
  const row2 = TECH_SKILLS.slice(midpoint);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* ── Editorial Header matching AboutSection & Services ── */}
        <motion.div
          style={{ y: contentY, opacity: contentOpacity }}
          className="relative px-6 sm:px-12 py-10 sm:py-12 border-b border-[rgba(224,224,224,0.63)] flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4"
        >
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2">
              04 / TECHNICAL SKILLS
            </span>
            <TextReveal
              as="h2"
              preset="fade-in-blur"
              per="word"
              className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tighter text-neutral-900 leading-none"
            >
              Skills & Technologies
            </TextReveal>
          </div>

          <p className="font-sans text-sm text-neutral-500 max-w-sm leading-relaxed">
            UI/UX design, graphic design, web fundamentals, and AI-powered creative workflows I use to craft digital products.
          </p>
        </motion.div>

        {/* ── Auto-Scrolling Marquee Rows ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="py-8 sm:py-12 flex flex-col gap-4 sm:gap-5 overflow-hidden bg-white"
        >
          <MarqueeRow items={row1} direction="left" duration={32} />
          <MarqueeRow items={row2} direction="right" duration={38} />
        </motion.div>

        {/* ── Footer Strip matching section grid ── */}
        <div className="border-t border-[rgba(224,224,224,0.63)] px-6 sm:px-12 py-4 flex flex-wrap items-center justify-between gap-3 bg-neutral-50/40 dark:bg-neutral-900/40">
          <div className="flex items-center gap-5 sm:gap-6">
            {[
              { color: "bg-cyan-500", label: "Expert" },
              { color: "bg-emerald-500", label: "Proficient" },
              { color: "bg-neutral-300 dark:bg-neutral-600", label: "Learning" },
            ].map(({ color, label }) => (
              <div key={label} className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${color}`} />
                <span className="text-xs text-neutral-500 font-medium">
                  {label}
                </span>
              </div>
            ))}
          </div>

          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">
            {TECH_SKILLS.length} Tools &amp; Technologies
          </span>
        </div>
      </div>
    </section>
  );
}
