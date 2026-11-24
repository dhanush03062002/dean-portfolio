import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';

const STACK_CARDS = [
  {
    id: 1,
    title: "Factory Energy Monitoring",
    category: "IOT & INDUSTRIAL DASHBOARD",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_244ac4c2707a4db19f97a12ac0c4c489~mv2.png",
    description: "Real-time industrial dashboard monitoring machine energy consumption, efficiency metrics, and anomaly detection.",
    color: "#0f172a",
    tag: "IoT Dashboard",
  },
  {
    id: 2,
    title: "AI Business Development",
    category: "ENTERPRISE AI PLATFORM",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_3a189551d3fd49b895c8bdaa1857f95d~mv2.png",
    description: "Data-driven corporate dashboard transforming complex business analytics into predictive intelligence and strategic workflows.",
    color: "#18181b",
    tag: "AI & SaaS",
  },
  {
    id: 3,
    title: "Make Shift Service Booking",
    category: "ON-DEMAND MOBILE APP",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_ee2aeebfadb848239fd35ca589f1f573~mv2.png",
    description: "End-to-end service booking application with live artisan tracking, upfront pricing, and interactive scheduling.",
    color: "#1e1b4b",
    tag: "Mobile App UI",
  },
  {
    id: 4,
    title: "Doctor Appointment App",
    category: "HEALTHCARE & TELEMEDICINE",
    year: "2024",
    image: "https://static.wixstatic.com/media/581991_cd3ac05df3fc4ca0852142be490b92a5~mv2.png",
    description: "Accessible, patient-centric healthcare booking platform with live specialist video consultation and digital prescriptions.",
    color: "#042f2e",
    tag: "Healthcare UX",
  },
];

/**
 * Individual Stacking Card
 * Pins at its offset and tilts in 3D (scale + rotateX) as subsequent cards scroll over it
 */
function CardItem({ card, index, total, progress, range, targetScale }) {
  const cardRef = useRef(null);

  // Progressive scale-down & 3D rotation along X as subsequent cards scroll over
  const scale = useTransform(progress, range, [1, targetScale]);
  const rotateX = useTransform(progress, range, [0, -10]);
  const brightness = useTransform(progress, range, [1, 0.88]);

  return (
    <div
      ref={cardRef}
      className="sticky flex items-center justify-center w-full"
      style={{
        top: `calc(60px + ${index * 16}px)`,
        perspective: '1200px',
        marginBottom: index === total - 1 ? '0px' : '40px',
      }}
    >
      <motion.div
        style={{
          scale,
          rotateX,
          transformOrigin: 'top center',
          filter: useTransform(brightness, (b) => `brightness(${b})`),
        }}
        className="w-full max-w-[920px] h-[380px] sm:h-[460px] md:h-[500px] lg:h-[520px] rounded-[24px] sm:rounded-[32px] overflow-hidden border border-[rgba(224,224,224,0.8)] shadow-[0_20px_50px_rgba(0,0,0,0.2)] relative bg-neutral-900 group select-none cursor-pointer"
        data-cursor="view"
        data-cursor-label="View"
      >
        {/* Background Pattern Image */}
        <img
          src={card.image}
          alt={card.title}
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Gradient overlays for editorial text contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />

        {/* Top bar on card: Category Badge + Card Index */}
        <div className="absolute top-5 sm:top-8 left-5 sm:left-8 right-5 sm:right-8 flex items-center justify-between z-10">
          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-semibold tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>{card.category}</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="font-mono text-xs sm:text-sm font-semibold text-white/70">
              0{index + 1} / 0{total}
            </span>
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors duration-300">
              <ArrowUpRight size={16} />
            </div>
          </div>
        </div>

        {/* Bottom bar on card: Title & Description */}
        <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 z-10 flex flex-col justify-end">
          <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest block mb-2">
            {card.tag} • {card.year}
          </span>
          <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-white leading-tight mb-2 sm:mb-3">
            {card.title}
          </h3>
          <p className="font-sans text-xs sm:text-sm md:text-base text-neutral-300 max-w-xl font-normal leading-relaxed line-clamp-2 sm:line-clamp-none">
            {card.description}
          </p>
        </div>

      </motion.div>
    </div>
  );
}

/**
 * CardStackScroll
 * Replicates the GSAP 3D overlapping stacked cards scroll section
 * Full width, seamless Lenis scroll, 3D perspective tilt
 */
export default function CardStackScroll() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      id="card-stack"
      className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-visible"
    >
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* ── Section Header ── */}
        <div className="px-6 sm:px-12 py-10 sm:py-14 border-b border-[rgba(224,224,224,0.63)] flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
              06 / SHOWCASE
            </span>
            <TextReveal
              as="h2"
              preset="fade-in-blur"
              per="char"
              className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-neutral-900 leading-none"
            >
              CURATED WORKS
            </TextReveal>
            <p className="text-sm font-medium text-neutral-500 mt-2 font-sans">
              3D stacked visual cards with interactive scroll pinning
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>4 Featured Chapters</span>
          </div>
        </div>

        {/* ── 3D Cards Stacking Stage ── */}
        <div className="relative px-4 sm:px-8 py-16 sm:py-24 w-full">
          {STACK_CARDS.map((card, i) => {
            // Target scale matching user's formula: 0.9 + 0.025 * i
            const targetScale = i === STACK_CARDS.length - 1 ? 1 : 0.9 + 0.025 * i;
            const startProgress = i * 0.25;
            const endProgress = 1;

            return (
              <CardItem
                key={card.id}
                card={card}
                index={i}
                total={STACK_CARDS.length}
                progress={scrollYProgress}
                range={[startProgress, endProgress]}
                targetScale={targetScale}
              />
            );
          })}
        </div>

      </div>
    </section>
  );
}
