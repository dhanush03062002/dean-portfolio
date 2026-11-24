import React from 'react';
import { motion } from 'framer-motion';
import { STATS } from '../assets/constants';
import CornerCross from './CornerCross';

export default function Stats() {
  return (
    <section className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
        
        {/* Technical Grid of Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-y md:divide-y-0 divide-x border-[rgba(224,224,224,0.63)]">
          {STATS.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="relative p-6 sm:p-8 flex flex-col justify-between group hover:bg-neutral-50 transition-colors"
            >
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              {/* Big Condensed Stat Number */}
              <div className="mb-2">
                <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 group-hover:scale-105 inline-block transition-transform duration-300">
                  {stat.value}
                </span>
              </div>

              {/* Label */}
              <div className="pt-2 border-t border-neutral-100">
                <p className="font-sans text-xs sm:text-sm text-neutral-500 font-medium leading-snug">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
