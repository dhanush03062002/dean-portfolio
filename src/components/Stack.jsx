import React from 'react';
import { motion } from 'framer-motion';
import { STACK } from '../assets/constants';
import CornerCross from './CornerCross';

export default function Stack() {
  return (
    <section id="stack" className="relative border-b border-[rgba(224,224,224,0.63)] bg-white">
      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
        
        {/* Header */}
        <div className="relative px-6 sm:px-12 py-8 border-b border-[rgba(224,224,224,0.63)] flex items-center justify-between">
          <CornerCross position="top-left" />
          <CornerCross position="top-right" />

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">02 / ARSENAL</span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mt-1">
              My Stack
            </h2>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-neutral-100 text-neutral-600">
            Design & Build
          </span>
        </div>

        {/* 4 Tool Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x border-b border-[rgba(224,224,224,0.63)]">
          {STACK.map((tool, idx) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 sm:p-8 flex flex-col justify-between group hover:bg-neutral-50/70 transition-all duration-300"
            >
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              <div>
                {/* 3D Floating Tool Icon */}
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white border border-[rgba(224,224,224,0.8)] shadow-sm group-hover:shadow-md flex items-center justify-center p-3 mb-6 group-hover:-translate-y-1 transition-transform duration-300">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 rounded-2xl border border-black/5 pointer-events-none"></div>
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-900">
                    {tool.name}
                  </h3>
                </div>

                <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 mb-3">
                  {tool.role}
                </p>

                <p className="text-xs text-neutral-500 leading-relaxed">
                  {tool.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-xs text-neutral-400">
                <span>Daily Driver</span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
