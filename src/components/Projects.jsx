import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ExternalLink, Sparkles, Eye, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, GRAPHIC_DESIGN_WORKS } from '../assets/constants';
import TextReveal from './TextReveal';
import GraphicDesignModal from './GraphicDesignModal';
import TiltCard from './TiltCard';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isGraphicModalOpen, setIsGraphicModalOpen] = useState(false);
  const [selectedGraphicItem, setSelectedGraphicItem] = useState(null);

  // Filter projects according to tab
  const filteredProjects = PROJECTS.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.categoryType === activeCategory;
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    if (category === 'graphic') {
      setIsGraphicModalOpen(true);
    }
  };

  const handleCardClick = (e, project) => {
    if (project.categoryType === 'graphic') {
      e.preventDefault();
      setSelectedGraphicItem(project);
      setIsGraphicModalOpen(true);
    }
  };

  return (
    <section id="projects" className="relative border-b border-[rgba(224,224,224,0.63)] bg-white transition-colors duration-300">
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)]">

        {/* ── Section Header with 3 Category Buttons on Right ── */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 px-6 sm:px-12 py-8 sm:py-10 border-b border-[rgba(224,224,224,0.63)]">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
              02 / SELECTED WORK
            </span>
            <TextReveal
              as="h2"
              preset="fade-in-blur"
              per="char"
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-black leading-none"
            >
              PROJECTS
            </TextReveal>
          </div>

          {/* ── 3 Filter Category Buttons on the Right ── */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 self-start lg:self-center">
            
            {/* All Projects button */}
            <button
              onClick={() => handleCategoryClick('all')}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                activeCategory === 'all'
                  ? 'bg-black text-white scale-105'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-[rgba(224,224,224,0.7)]'
              }`}
            >
              All
            </button>

            {/* 1. Graphic Design (Opens popup with animation) */}
            <button
              onClick={() => handleCategoryClick('graphic')}
              className={`group relative flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                activeCategory === 'graphic'
                  ? 'bg-black text-white scale-105 ring-2 ring-cyan-400/50'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-[rgba(224,224,224,0.7)] hover:border-black'
              }`}
            >
              <Sparkles size={13} className="text-cyan-400" />
              <span>Graphic Design</span>
              <span className="text-[10px] font-mono opacity-60">Popup</span>
            </button>

            {/* 2. UI/UX Design */}
            <button
              onClick={() => handleCategoryClick('ui-ux')}
              className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                activeCategory === 'ui-ux'
                  ? 'bg-black text-white scale-105'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-[rgba(224,224,224,0.7)] hover:border-black'
              }`}
            >
              <span>UI/UX Design</span>
            </button>

            {/* 3. Website Design */}
            <button
              onClick={() => handleCategoryClick('website')}
              className={`group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                activeCategory === 'website'
                  ? 'bg-black text-white scale-105'
                  : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-[rgba(224,224,224,0.7)] hover:border-black'
              }`}
            >
              <span>Website Design</span>
              <ExternalLink size={12} className="opacity-60 group-hover:opacity-100" />
            </button>

          </div>
        </div>

        {/* ── Animated Projects Grid ── */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => {
              const isGraphic = project.categoryType === 'graphic';
              const isWebsite = project.categoryType === 'website';

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.45, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className={`group relative ${
                    idx % 2 === 0 ? 'md:border-r border-[rgba(224,224,224,0.63)]' : ''
                  } ${idx >= 2 ? 'border-t border-[rgba(224,224,224,0.63)]' : ''}`}
                  data-cursor="view"
                  data-cursor-label={isGraphic ? 'Preview' : 'Open'}
                >
                  <div className="block w-full h-full p-5 sm:p-8 hover:bg-neutral-50/50 transition-colors duration-300 cursor-none">
                    
                    {/* ── Card Image with 3D Tilt + Glow ── */}
                    <TiltCard
                      onClick={(e) => handleCardClick(e, project)}
                      scale={1.03}
                      className="relative w-full overflow-hidden mb-5 cursor-pointer hover:shadow-2xl"
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

                      {/* Top Badges */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-[11px] font-bold uppercase tracking-wider text-black dark:text-white shadow-sm border border-black/10">
                          {project.categoryType === 'ui-ux'
                            ? 'UI/UX'
                            : project.categoryType === 'website'
                            ? 'Website'
                            : 'Graphic Design'}
                        </span>
                      </div>

                      {/* Bottom Gradient overlay */}
                      <div
                        className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-12 flex items-end justify-between"
                        style={{
                          background: 'linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%)',
                          borderRadius: '0 0 30px 30px',
                        }}
                      >
                        <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                          {project.title}
                        </h3>
                      </div>

                      {/* Hover action badge */}
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                        {isGraphic ? (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedGraphicItem(project);
                              setIsGraphicModalOpen(true);
                            }}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow-lg hover:bg-neutral-200 transition-colors"
                          >
                            <Eye size={13} />
                            <span>Open Popup</span>
                          </button>
                        ) : isWebsite && project.liveUrl ? (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-400 text-black text-xs font-bold shadow-lg hover:bg-cyan-300 transition-colors hover:scale-105"
                          >
                            <span>View Live</span>
                            <ExternalLink size={13} />
                          </a>
                        ) : (
                          <Link
                            to={`/projects/${project.id}`}
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-bold shadow-lg hover:bg-neutral-200 transition-colors"
                          >
                            <span>Case Study</span>
                            <ArrowUpRight size={13} />
                          </Link>
                        )}
                      </div>
                    </TiltCard>

                    {/* ── Card Footer: Title + Action buttons ── */}
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        {isGraphic ? (
                          <button
                            onClick={() => {
                              setSelectedGraphicItem(project);
                              setIsGraphicModalOpen(true);
                            }}
                            className="text-left font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black group-hover:text-neutral-700 transition-colors cursor-pointer"
                          >
                            {project.title}
                          </button>
                        ) : (
                          <Link
                            to={`/projects/${project.id}`}
                            className="block font-display text-2xl sm:text-3xl font-bold uppercase tracking-tight text-black group-hover:text-neutral-700 transition-colors"
                          >
                            {project.title}
                          </Link>
                        )}
                        <p className="text-xs text-neutral-500 mt-1 font-medium leading-relaxed max-w-xs">
                          {project.category}
                        </p>
                      </div>

                      {/* Right button actions based on project type */}
                      <div className="flex items-center gap-2">
                        {isWebsite && project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            title="Open live website in new tab"
                            className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-neutral-900 text-white text-xs font-bold tracking-wide uppercase hover:bg-black transition-all hover:scale-105 shadow-sm"
                          >
                            <span>View Live</span>
                            <ExternalLink size={12} className="text-cyan-400" />
                          </a>
                        )}

                        {isGraphic ? (
                          <button
                            onClick={() => {
                              setSelectedGraphicItem(project);
                              setIsGraphicModalOpen(true);
                            }}
                            title="Open graphic design popup"
                            className="w-10 h-10 rounded-full border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-neutral-700 hover:text-black hover:border-black hover:bg-black hover:text-white transition-all flex-shrink-0 cursor-pointer"
                          >
                            <Eye size={17} />
                          </button>
                        ) : (
                          <Link
                            to={`/projects/${project.id}`}
                            title="View case study details"
                            className="w-10 h-10 rounded-full border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black group-hover:bg-black group-hover:text-white transition-all flex-shrink-0 duration-300"
                          >
                            <ArrowUpRight
                              size={17}
                              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                            />
                          </Link>
                        )}
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* ── Bottom "View all Projects" CTA bar ── */}
        <div className="border-t border-[rgba(224,224,224,0.63)] px-6 sm:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500 font-sans">
            Showing {filteredProjects.length} of {PROJECTS.length} creative works
          </p>

          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-black transition-colors group cursor-pointer"
          >
            <span>Explore Full Project Archive</span>
            <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </div>

      </div>

      {/* ── Animated Graphic Design Popup Modal ── */}
      <GraphicDesignModal
        isOpen={isGraphicModalOpen}
        onClose={() => {
          setIsGraphicModalOpen(false);
          setSelectedGraphicItem(null);
        }}
        initialItem={selectedGraphicItem}
      />

    </section>
  );
}
