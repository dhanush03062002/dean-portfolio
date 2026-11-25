import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Sparkles, Layers, Palette, Eye } from 'lucide-react';
import { GRAPHIC_DESIGN_WORKS } from '../assets/constants';

export default function GraphicDesignModal({ isOpen, onClose, initialItem = null }) {
  const [selectedItem, setSelectedItem] = useState(GRAPHIC_DESIGN_WORKS[0]);

  useEffect(() => {
    if (initialItem) {
      const match = GRAPHIC_DESIGN_WORKS.find(
        (w) => w.id === initialItem.id || w.title === initialItem.title
      );
      if (match) setSelectedItem(match);
    } else {
      setSelectedItem(GRAPHIC_DESIGN_WORKS[0]);
    }
  }, [initialItem, isOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8">
          {/* Backdrop with dark blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: 'spring', damping: 28, stiffness: 350 }}
            className="relative w-full max-w-5xl max-h-[92vh] overflow-hidden rounded-[28px] sm:rounded-[36px] bg-white dark:bg-neutral-900 border border-[rgba(224,224,224,0.63)] dark:border-neutral-800 shadow-2xl flex flex-col z-10"
          >
            {/* Modal Header */}
            <div className="px-6 sm:px-8 py-5 border-b border-[rgba(224,224,224,0.63)] dark:border-neutral-800 flex items-center justify-between bg-white/95 dark:bg-neutral-900/95 backdrop-blur-sm sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-black text-white dark:bg-white dark:text-black flex items-center justify-center shadow-sm">
                  <Palette size={16} className="text-cyan-400 dark:text-cyan-500" />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-widest text-neutral-400 block">
                    Portfolio Gallery Showcase
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-black uppercase tracking-tight text-neutral-900 dark:text-white">
                    Graphic Design & Creative Collateral
                  </h3>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-700 flex items-center justify-center transition-all cursor-pointer hover:rotate-90"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>
            </div>

            {/* Modal Body: Split 2 columns (Preview + Details) */}
            <div className="flex-1 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(224,224,224,0.63)] dark:divide-neutral-800">
              
              {/* Left Column: Image Canvas Showcase (7 cols) */}
              <div className="lg:col-span-7 p-5 sm:p-8 bg-neutral-950 flex flex-col items-center justify-center relative min-h-[340px] sm:min-h-[440px]">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedItem.id}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.02 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="relative w-full max-w-lg aspect-[4/5] sm:aspect-square rounded-[24px] overflow-hidden border border-white/10 shadow-2xl group"
                  >
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-5">
                      <a
                        href={selectedItem.image}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-black text-xs font-bold tracking-wide uppercase shadow-lg hover:bg-neutral-200 transition-colors"
                      >
                        <Eye size={13} />
                        <span>View High-Res Image</span>
                      </a>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Bottom thumbnail selector */}
                <div className="w-full mt-6 flex items-center justify-center gap-3 overflow-x-auto py-2 no-scrollbar">
                  {GRAPHIC_DESIGN_WORKS.map((item) => {
                    const isCurrent = item.id === selectedItem.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => setSelectedItem(item)}
                        className={`relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 transition-all cursor-pointer ${
                          isCurrent
                            ? 'border-cyan-400 scale-105 shadow-[0_0_12px_rgba(2,212,245,0.4)]'
                            : 'border-white/20 opacity-60 hover:opacity-100 hover:border-white/50'
                        }`}
                      >
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Case Details & Specifications (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between bg-white dark:bg-neutral-900">
                <div className="space-y-6">
                  {/* Badge */}
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-[11px] font-bold uppercase tracking-wider text-neutral-600 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700">
                      {selectedItem.subtitle}
                    </span>
                    <span className="text-xs font-semibold text-neutral-400">
                      {selectedItem.year}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h4 className="font-display text-2xl sm:text-3xl font-black uppercase tracking-tight text-neutral-900 dark:text-white leading-tight">
                      {selectedItem.title}
                    </h4>
                    <p className="font-sans text-sm sm:text-base text-neutral-600 dark:text-neutral-300 mt-3 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Meta Details */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[rgba(224,224,224,0.63)] dark:border-neutral-800 text-xs">
                    <div>
                      <span className="font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Client / Context
                      </span>
                      <p className="font-semibold text-neutral-900 dark:text-white font-sans text-sm">
                        {selectedItem.client}
                      </p>
                    </div>

                    <div>
                      <span className="font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                        Format
                      </span>
                      <p className="font-semibold text-neutral-900 dark:text-white font-sans text-sm">
                        {selectedItem.dimensions}
                      </p>
                    </div>
                  </div>

                  {/* Tools Used */}
                  <div>
                    <span className="font-bold text-xs uppercase tracking-wider text-neutral-400 block mb-2.5">
                      Design Tools Mastered
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.tools.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 text-xs font-semibold text-neutral-800 dark:text-neutral-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-[rgba(224,224,224,0.63)] dark:border-neutral-800 flex items-center justify-between gap-3">
                  <span className="text-xs text-neutral-400 font-sans">
                    Crafted with pixel precision
                  </span>

                  <a
                    href={selectedItem.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity shadow-md hover:scale-105 active:scale-95"
                  >
                    <span>Open Full Poster</span>
                    <ExternalLink size={13} />
                  </a>
                </div>

              </div>

            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
