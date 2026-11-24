import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, MessageSquare, Calendar } from 'lucide-react';
import CornerCross from './CornerCross';

export default function CTA({ onOpenContact }) {
  return (
    <section className="relative border-b border-[rgba(224,224,224,0.63)] bg-neutral-950 text-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-x border-neutral-800 px-6 sm:px-12 py-20 sm:py-28 relative">
        <CornerCross position="top-left" className="text-neutral-700" />
        <CornerCross position="top-right" className="text-neutral-700" />
        <CornerCross position="bottom-left" className="text-neutral-700" />
        <CornerCross position="bottom-right" className="text-neutral-700" />

        {/* Ambient background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10 flex flex-col items-center">
          
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-3">
            HAVE AN IDEA?
          </span>

          <h2 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-white mb-6">
            Ready to Get Started?
          </h2>

          <p className="font-sans text-base sm:text-xl text-neutral-400 font-normal leading-relaxed mb-10 max-w-xl">
            Tell me about your project and let's create something amazing together. I'll respond within 24 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black hover:bg-neutral-200 transition-all text-base font-semibold shadow-lg hover:scale-105 duration-200 cursor-pointer"
            >
              <span>I'm Ready to Start</span>
              <ArrowUpRight size={18} />
            </button>

            <button
              onClick={onOpenContact}
              className="flex items-center gap-3 px-8 py-4 rounded-full border border-neutral-700 bg-neutral-900/60 hover:bg-neutral-800 text-neutral-300 hover:text-white transition-all text-base font-medium cursor-pointer"
            >
              <Calendar size={18} className="text-neutral-400" />
              <span>Reach out to me</span>
            </button>
          </div>

          <div className="mt-8 flex items-center gap-2 text-xs text-neutral-500">
            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>Current turnaround: 2-4 weeks • Available for Q1/Q2</span>
          </div>

        </div>

      </div>
    </section>
  );
}
