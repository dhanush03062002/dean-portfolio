import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../assets/constants';
import TextReveal from './TextReveal';

export default function Projects() {
  return (
    <section id="projects" className="relative border-b border-[rgba(224,224,224,0.63)] bg-white">
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)]">

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-12 py-8 sm:py-10 border-b border-[rgba(224,224,224,0.63)]">
          <TextReveal
            as="h2"
            preset="fade-in-blur"
            per="char"
            className="font-display text-5xl sm:text-7xl font-black uppercase tracking-tight text-black leading-none"
          >
            PROJECTS
          </TextReveal>

          {/* "View all projects" pill button */}
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-black text-white font-sans text-sm font-medium hover:bg-neutral-800 transition-all duration-300 cursor-none shadow-md hover:scale-[1.02] active:scale-[0.98] flex-shrink-0 group"
          >
            <span>View all projects</span>
            <div className="relative flex items-center justify-center w-4 h-4 rounded-full bg-neutral-800 border border-neutral-600">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform animate-pulse shadow-[0_0_6px_#02d4f5]"></span>
            </div>
          </Link>
        </div>

        {/* ── 2×2 Project Cards Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className={`group relative ${
                idx % 2 === 0 ? 'md:border-r border-[rgba(224,224,224,0.63)]' : ''
              } ${idx >= 2 ? 'border-t border-[rgba(224,224,224,0.63)]' : ''}`}
              // Custom cursor: show "Open" pill when hovering a project card
              data-cursor="view"
              data-cursor-label="Open"
            >
              <Link
                to={`/projects/${project.id}`}
                className="block w-full h-full p-5 sm:p-8 hover:bg-neutral-50/40 transition-colors duration-300 cursor-none"
              >
                {/* ── Card Image with Framer 30px border-radius & shadow ── */}
                <div
                  className="relative w-full overflow-hidden mb-5"
                  style={{
                    borderRadius: '30px',
                    aspectRatio: '4/3',
                    boxShadow:
                      '0.18px 0.76px 0.78px -0.32px rgba(0,0,0,0.11), 0.43px 1.87px 1.92px -0.64px rgba(0,0,0,0.11), 0.82px 3.55px 3.64px -0.96px rgba(0,0,0,0.11), 1.43px 6.19px 6.35px -1.29px rgba(0,0,0,0.12), 2.49px 10.78px 11.06px -1.61px rgba(0,0,0,0.12), 4.55px 19.74px 20.26px -1.93px rgba(0,0,0,0.13), 9px 39px 40.02px -2.25px rgba(0,0,0,0.14)',
                  }}
                >
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    style={{ borderRadius: '30px' }}
                  />

                  {/* Title overlay at bottom — white text on subtle gradient */}
                  <div
                    className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-10 flex items-end justify-between"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(0,0,0,0.22) 100%)',
                      borderRadius: '0 0 30px 30px',
                    }}
                  >
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                      {project.title}
                    </h3>
                  </div>

                  {/* "View Project" badge — appears on hover (top-right of image) */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 pointer-events-none">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-lg border border-neutral-200">
                      <span>View Project</span>
                      <ArrowUpRight size={13} />
                    </span>
                  </div>
                </div>

                {/* ── Card Footer: Title + Arrow ── */}
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black group-hover:text-neutral-700 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-500 mt-1 font-medium leading-relaxed max-w-xs">
                      {project.category}
                    </p>
                  </div>

                  {/* Arrow circle */}
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex-shrink-0 duration-300">
                    <ArrowUpRight
                      size={17}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* ── Bottom "View all Projects" CTA bar ── */}
        <div className="border-t border-[rgba(224,224,224,0.63)] px-6 sm:px-12 py-6 flex justify-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-600 hover:text-black transition-colors group cursor-none"
          >
            <span>View all Projects</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>
    </section>
  );
}
