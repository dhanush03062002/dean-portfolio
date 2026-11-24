import React from 'react';
import { motion } from 'framer-motion';
import { PROCESS } from '../assets/constants';
import CornerCross from './CornerCross';

export default function Process() {
  return (
    <section id="process" className="relative border-b border-[rgba(224,224,224,0.63)] bg-white">
      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
        
        {/* Header */}
        <div className="relative px-6 sm:px-12 py-10 border-b border-[rgba(224,224,224,0.63)] flex items-center justify-between">
          <CornerCross position="top-left" />
          <CornerCross position="top-right" />

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">05 / WORKFLOW</span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 mt-1">
              PROCESS
            </h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">
            3-Step Framework
          </span>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b border-[rgba(224,224,224,0.63)]">
          {PROCESS.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative p-8 sm:p-12 flex flex-col justify-between group hover:bg-neutral-50/70 transition-colors"
            >
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              <div>
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-neutral-300 group-hover:text-black transition-colors block mb-6">
                  {item.step}
                </span>

                <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-900 mb-4">
                  {item.title}
                </h3>

                <p className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-12 pt-6 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400 font-mono">
                <span>PHASE {idx + 1}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-cyan-500 transition-colors"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
