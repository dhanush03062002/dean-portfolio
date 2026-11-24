import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import TextReveal from './TextReveal';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Mitchell",
    role: "Founder of Bloom Studio",
    quote: `"Best designer I've worked with! Fast, professional, and the website looks incredible. Highly recommend!"`,
    avatar: "https://framerusercontent.com/images/Brmkbsvgw7oq52QXNYK8FUciR0.jpg?width=609&height=609"
  },
  {
    id: 2,
    name: "Emily Chen",
    role: "Marketing Director at TechFlow",
    quote: `"Our new website is stunning! Communication was great and the whole process was super smooth."`,
    avatar: "https://framerusercontent.com/images/TVuMWmmbEpLT6DpR83YglHVWg.jpg?width=609&height=609"
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "CEO of Urban Eats",
    quote: `"Nailed our branding perfectly. Easy to work with and delivered exactly what we needed. Amazing!"`,
    avatar: "https://framerusercontent.com/images/1F6blGIcuUbjh4UkQMyuZi9ufh4.jpg?width=609&height=609"
  }
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-amber-400 text-amber-400" viewBox="0 0 24 24">
      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
    </svg>
  );
}

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((c) => (c === 0 ? TESTIMONIALS.length - 1 : c - 1));
  };

  const next = () => {
    setCurrentIndex((c) => (c === TESTIMONIALS.length - 1 ? 0 : c + 1));
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="bg-white relative">
      {/* ── Section Title ── */}
      <div className="border-b border-[rgba(224,224,224,0.63)] px-6 sm:px-10 py-7 sm:py-8 bg-white">
        <TextReveal
          as="h2"
          preset="fade-in-blur"
          per="char"
          className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none"
        >
          TESTIMONIAL
        </TextReveal>
      </div>

      {/* ── Main Quote Stage ── */}
      <div className="px-6 sm:px-10 pt-12 sm:pt-16 pb-10 sm:pb-14 flex flex-col items-center text-center">
        {/* 5-Star Row */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} />
          ))}
        </div>

        {/* Editorial Quote */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto min-h-[120px] flex items-center justify-center"
          >
            <h3 className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-black tracking-tight leading-snug">
              {current.quote}
            </h3>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* ── Segmented Control & Profile Bar (Framer layout) ── */}
      <div className="border-t border-[rgba(224,224,224,0.63)] flex items-stretch h-20 sm:h-24 bg-white relative">
        {/* Left arrow button */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-16 sm:w-20 flex-shrink-0 border-r border-[rgba(224,224,224,0.63)] flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors cursor-pointer group"
        >
          <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
        </button>

        {/* Center Profile */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1 flex items-center justify-center gap-3.5 px-4 overflow-hidden"
          >
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-full overflow-hidden flex-shrink-0"
              style={{
                boxShadow: '0 0 0 3px #fff, 0 3px 12px rgba(0,0,0,0.12)',
                border: '1px solid rgba(224,224,224,0.63)',
              }}
            >
              <img
                src={current.avatar}
                alt={current.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-left">
              <h4 className="font-display text-base sm:text-lg font-bold uppercase tracking-tight text-black leading-tight">
                {current.name}
              </h4>
              <p className="text-xs text-neutral-500 font-sans font-medium mt-0.5">
                {current.role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right arrow button */}
        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-16 sm:w-20 flex-shrink-0 border-l border-[rgba(224,224,224,0.63)] flex items-center justify-center text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors cursor-pointer group"
        >
          <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
}
