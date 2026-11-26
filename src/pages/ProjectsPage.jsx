import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowLeft, ExternalLink, Sparkles, Eye, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS, PROFILE, triggerResumeDownload } from '../assets/constants';
import CornerCross from '../components/CornerCross';
import TextReveal from '../components/TextReveal';
import GraphicDesignModal from '../components/GraphicDesignModal';

export default function ProjectsPage({ onOpenContact }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [isGraphicModalOpen, setIsGraphicModalOpen] = useState(false);
  const [selectedGraphicItem, setSelectedGraphicItem] = useState(null);

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
    <div className="min-h-screen bg-white transition-colors duration-300">
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

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
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

            {/* Category Buttons on Right */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <button
                onClick={() => handleCategoryClick('all')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                  activeCategory === 'all'
                    ? 'bg-black text-white scale-105'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-700 border border-[rgba(224,224,224,0.7)]'
                }`}
              >
                All
              </button>

              <button
                onClick={() => handleCategoryClick('graphic')}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                  activeCategory === 'graphic'
                    ? 'bg-black text-white scale-105 ring-2 ring-cyan-400/50'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-[rgba(224,224,224,0.7)]'
                }`}
              >
                <Sparkles size={13} className="text-cyan-400" />
                <span>Graphic Design</span>
              </button>

              <button
                onClick={() => handleCategoryClick('ui-ux')}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                  activeCategory === 'ui-ux'
                    ? 'bg-black text-white scale-105'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-[rgba(224,224,224,0.7)]'
                }`}
              >
                <span>UI/UX Design</span>
              </button>

              <button
                onClick={() => handleCategoryClick('website')}
                className={`group flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer shadow-sm ${
                  activeCategory === 'website'
                    ? 'bg-black text-white scale-105'
                    : 'bg-neutral-100 hover:bg-neutral-200 text-neutral-800 border border-[rgba(224,224,224,0.7)]'
                }`}
              >
                <span>Website Design</span>
                <ExternalLink size={12} className="opacity-60 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Projects Full Grid ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)]">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2">
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
                    className={`group relative ${idx % 2 === 0 ? 'md:border-r border-[rgba(224,224,224,0.63)]' : ''} ${idx >= 2 ? 'border-t border-[rgba(224,224,224,0.63)]' : ''}`}
                    data-cursor="view"
                    data-cursor-label={isGraphic ? 'Preview' : 'Open'}
                  >
                    <div className="block w-full h-full p-5 sm:p-8 hover:bg-neutral-50/50 transition-colors duration-300 cursor-none">
                      
                      {/* Image */}
                      <div
                        onClick={(e) => handleCardClick(e, project)}
                        className="relative w-full overflow-hidden mb-5 cursor-pointer"
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

                        {/* Title Overlay */}
                        <div
                          className="absolute inset-x-0 bottom-0 px-5 pb-4 pt-12"
                          style={{
                            background: 'linear-gradient(180deg, rgba(0,0,0,0) 20%, rgba(0,0,0,0.7) 100%)',
                            borderRadius: '0 0 30px 30px',
                          }}
                        >
                          <h3 className="font-display text-2xl sm:text-3xl font-bold uppercase text-white tracking-tight">
                            {project.title}
                          </h3>
                        </div>

                        {/* Hover Action Badge */}
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
                              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-cyan-400 text-black text-xs font-bold shadow-lg hover:bg-cyan-300 transition-colors"
                            >
                              <span>View Live</span>
                              <ExternalLink size={13} />
                            </a>
                          ) : (
                            <Link
                              to={`/projects/${project.id}`}
                              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black text-xs font-semibold shadow-lg border border-neutral-200"
                            >
                              <span>View Project</span>
                              <ArrowUpRight size={13} />
                            </Link>
                          )}
                        </div>
                      </div>

                      {/* Footer */}
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
                          <p className="text-xs text-neutral-500 mt-1 font-medium max-w-xs">{project.category}</p>
                        </div>

                        <div className="flex items-center gap-2">
                          {isWebsite && project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
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
                              className="w-10 h-10 rounded-full border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-neutral-700 hover:text-black hover:border-black hover:bg-black hover:text-white transition-all flex-shrink-0 cursor-pointer"
                            >
                              <Eye size={17} />
                            </button>
                          ) : (
                            <Link
                              to={`/projects/${project.id}`}
                              className="w-10 h-10 rounded-full border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-neutral-400 group-hover:text-black group-hover:border-black transition-all flex-shrink-0"
                            >
                              <ArrowUpRight size={17} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
          <p className="text-neutral-500 text-base max-w-lg mx-auto mb-8 font-sans">
            Let's design something exceptional together. From concept to launch, I'll help you create intuitive user experiences that convert.
          </p>
          <a
            href={PROFILE.resumeUrl || "/Dhakashnamoorthy_Designer.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerResumeDownload}
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition-all duration-300 shadow-lg cursor-pointer hover:scale-[1.02]"
          >
            <span>Download Resume</span>
            <div className="w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center">
              <Download size={13} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>
        </div>
      </section>

      {/* ── Graphic Design Modal ── */}
      <GraphicDesignModal
        isOpen={isGraphicModalOpen}
        onClose={() => {
          setIsGraphicModalOpen(false);
          setSelectedGraphicItem(null);
        }}
        initialItem={selectedGraphicItem}
      />
    </div>
  );
}
