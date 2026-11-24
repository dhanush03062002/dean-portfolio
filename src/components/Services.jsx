import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, CheckCircle, ArrowUpRight } from 'lucide-react';
import { SERVICES } from '../assets/constants';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';

export default function Services({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="services" className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-hidden">
      
      {/* Services Infinite Marquee Ticker */}
      <div className="w-full border-b border-[rgba(224,224,224,0.63)] py-3 bg-neutral-50 overflow-hidden select-none">
        <div className="flex w-max whitespace-nowrap animate-marquee">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-6">
              <span className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-neutral-900">
                SERVICES
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-neutral-400">
                what i offer
              </span>
              <span className="text-neutral-300">★</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
        
        {/* Header */}
        <div className="relative px-6 sm:px-12 py-10 border-b border-[rgba(224,224,224,0.63)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <CornerCross position="top-left" />
          <CornerCross position="top-right" />

          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">04 / CAPABILITIES</span>
            <div className="mt-1">
              <TextReveal
                as="h2"
                preset="fade-in-blur"
                per="char"
                className="font-display text-4xl sm:text-6xl font-extrabold uppercase tracking-tight text-neutral-900"
              >
                SERVICES
              </TextReveal>
            </div>
            <TextReveal
              as="p"
              preset="fade-in-blur"
              per="word"
              delay={0.15}
              className="text-sm font-medium text-neutral-500 mt-1"
            >
              what i offer
            </TextReveal>
          </div>

          <button
            onClick={onOpenContact}
            className="self-start sm:self-center px-5 py-2.5 rounded-full border border-black bg-black text-white hover:bg-neutral-800 text-xs font-semibold tracking-wide uppercase transition-all cursor-pointer"
          >
            Request a Quote
          </button>
        </div>

        {/* Services Accordion List */}
        <div className="divide-y divide-[rgba(224,224,224,0.63)]">
          {SERVICES.map((service, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={service.number}
                className={`transition-colors ${isOpen ? 'bg-neutral-50/70' : 'hover:bg-neutral-50/30'}`}
              >
                {/* Accordion Row Header */}
                <div
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="px-6 sm:px-12 py-8 flex items-center justify-between cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-6 sm:gap-12 flex-1">
                    <span className="font-display text-2xl sm:text-3xl font-bold text-neutral-400 group-hover:text-black transition-colors">
                      {service.number}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900 group-hover:text-black transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-medium text-neutral-500 mt-0.5">
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <div className="w-10 h-10 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 bg-white shadow-sm flex-shrink-0 transition-transform">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 sm:px-12 pb-10 pt-2 border-t border-neutral-200/60 pl-16 sm:pl-32 grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-2">Scope & Overview</h4>
                          <p className="text-sm sm:text-base text-neutral-700 leading-relaxed">
                            {service.description}
                          </p>

                          <div className="mt-6">
                            <button
                              onClick={onOpenContact}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-black text-white text-xs font-semibold hover:bg-neutral-800 transition-colors"
                            >
                              <span>Start with {service.title}</span>
                              <ArrowUpRight size={14} />
                            </button>
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400 mb-3">Key Deliverables</h4>
                          <ul className="space-y-2.5">
                            {service.deliverables.map(del => (
                              <li key={del} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-800">
                                <CheckCircle size={15} className="text-emerald-500 flex-shrink-0" />
                                <span>{del}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
