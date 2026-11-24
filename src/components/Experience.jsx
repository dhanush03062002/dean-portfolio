import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE, PROFILE } from '../assets/constants';
import CornerCross from './CornerCross';

export default function Experience() {
  return (
    <section id="about" className="relative border-b border-[rgba(224,224,224,0.63)] bg-white">
      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
        
        {/* Header */}
        <div className="relative px-6 sm:px-12 py-10 border-b border-[rgba(224,224,224,0.63)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CornerCross position="top-left" />
          <CornerCross position="top-right" />

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">03 / BACKGROUND</span>
            <h2 className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-neutral-900 mt-1">
              ABOUT ME
            </h2>
            <p className="text-sm font-medium text-neutral-500 mt-1">Let Me Introduce Myself</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-xs font-semibold uppercase tracking-wider text-neutral-700">Open for Q1/Q2 Projects</span>
          </div>
        </div>

        {/* Two-Column About & Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x border-b border-[rgba(224,224,224,0.63)]">
          
          {/* Left Bio Column */}
          <div className="lg:col-span-5 p-6 sm:p-12 relative flex flex-col justify-between">
            <CornerCross position="bottom-left" />

            <div>
              <div className="w-20 h-20 rounded-full overflow-hidden border border-neutral-200 mb-6 shadow-sm">
                <img src={PROFILE.avatar} alt="Dean" className="w-full h-full object-cover object-top scale-125" />
              </div>

              <h3 className="font-display text-3xl sm:text-4xl font-bold uppercase tracking-tight text-neutral-900 mb-4">
                Designing with intention, speed & precision.
              </h3>

              <p className="text-neutral-600 text-base leading-relaxed mb-6">
                Over the past 5+ years, I've partnered with venture-backed startups, boutique studios, and solo founders worldwide. 
                My focus is merging high-end editorial aesthetics with robust conversion architecture.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-neutral-100">
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">Based in</span>
                  <p className="font-display text-xl font-bold text-neutral-800">Miami, FL</p>
                </div>
                <div>
                  <span className="text-xs text-neutral-400 uppercase tracking-wider">Specialty</span>
                  <p className="font-display text-xl font-bold text-neutral-800">Design & Motion</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-2xl bg-neutral-50 border border-neutral-200 text-xs text-neutral-600 flex items-center justify-between">
              <span>Client Retention</span>
              <span className="font-display text-lg font-bold text-black">99%</span>
            </div>
          </div>

          {/* Right Experience Column */}
          <div className="lg:col-span-7 p-6 sm:p-12 relative">
            <CornerCross position="top-right" />
            
            <div className="mb-6 pb-4 border-b border-neutral-200 flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Career Timeline</span>
              <span className="text-xs font-semibold text-neutral-500">My Experience</span>
            </div>

            <div className="divide-y divide-neutral-200">
              {EXPERIENCE.map((exp, idx) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="py-6 first:pt-0 last:pb-0 group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                    <div>
                      <h4 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-900 group-hover:text-black">
                        {exp.role}
                      </h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 mt-0.5">
                        Company: {exp.company}
                      </p>
                    </div>

                    <div className="px-3 py-1 rounded-full bg-neutral-100 text-xs font-semibold text-neutral-700 self-start sm:self-center border border-neutral-200">
                      Year: {exp.period}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-500 mt-2 leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
