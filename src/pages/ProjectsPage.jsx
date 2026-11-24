import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../assets/constants';
import CornerCross from '../components/CornerCross';
import TextReveal from '../components/TextReveal';

export default function ProjectsPage({ onOpenContact }) {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Page Header ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)] bg-white">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] px-6 sm:px-12 py-12 sm:py-16 relative">
          <CornerCross position="top-left" />
          <CornerCross position="top-right" />

          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
            <span>Back to Home</span>
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">01 / PORTFOLIO</span>
              <div className="mt-2">
                <TextReveal
                  as="h1"
                  preset="fade-in-blur"
                  per="char"
                  className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-black leading-none"
                >
                  PROJECTS
                </TextReveal>
              </div>
              <TextReveal
                as="p"
                preset="fade-in-blur"
                per="word"
                delay={0.15}
                className="text-base text-neutral-500 mt-4 max-w-md font-sans"
              >
                A curated selection of UI/UX designs, SaaS dashboards, and mobile applications crafted with user-centered thinking and pixel precision.
              </TextReveal>
            </div>

            <button
              onClick={onOpenContact}
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition-all duration-300 cursor-pointer shadow-md hover:scale-[1.02] flex-shrink-0"
            >
              <span>Start a Project</span>
              <div className="w-4 h-4 rounded-full bg-neutral-800 border border-neutral-600 flex items-center justify-center">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* ── Projects Full Grid ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)]">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative ${idx % 2 === 0 ? 'md:border-r border-[rgba(224,224,224,0.63)]' : ''} ${idx >= 2 ? 'border-t border-[rgba(224,224,224,0.63)]' : ''}`}
                data-cursor="view"
                data-cursor-label="Open"
              >
                <Link
                  to={`/projects/${project.id}`}
                  className="block w-full h-full p-5 sm:p-8 hover:bg-neutral-50/40 transition-colors duration-300"
                >
                  {/* Image */}
                  <div
                    className="relative w-full overflow-hidden mb-5"
                    style={{
                      borderRadius: '30px',
                      aspectRatio: '4/3',
                      boxShadow: '0.18px 0.76px 0.78px -0.32px rgba(0,0,0,0.11), 0.43px 1.87px 1.92px -0.64px rgba(0,0,0,0.11), 9px 39px 40.02px -2.25px rgba(0,0,0,0.14)',
                    }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      style={{ borderRadius: '30px' }}
                    />
                    <div
                      className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-10"
                      style={{
                        background: 'linear-gradient(180deg, rgba(255,255,255,0) 60%, rgba(0,0,0,0.22) 100%)',
                        borderRadius: '0 0 30px 30px',
                      }}
                    >
                      <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-lg border border-neutral-200">
                        <span>View Project</span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black group-hover:text-neutral-700 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-neutral-500 mt-1 font-medium max-w-xs">{project.category}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black transition-all flex-shrink-0">
                      <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)] bg-white">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] px-6 sm:px-12 py-16 sm:py-20 text-center relative">
          <CornerCross position="top-left" />
          <CornerCross position="top-right" />
          <CornerCross position="bottom-left" />
          <CornerCross position="bottom-right" />
          <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-neutral-500 text-base max-w-lg mx-auto mb-8">
            Let's build something exceptional together. From concept to launch, I'll help you create a digital presence that stands out.
          </p>
          <button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.02]"
          >
            <span>i Want to Chat</span>
            <div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse group-hover:scale-125 transition-transform"></span>
            </div>
          </button>
        </div>
      </section>
    </div>
  );
}
