import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import TextReveal from './TextReveal';

const FAQS = [
  {
    id: 1,
    question: "How long does a typical project take?",
    answer: "Most websites take 2-4 weeks. Branding takes 1-2 weeks. Graphic design is done within days."
  },
  {
    id: 2,
    question: "How much do your services cost?",
    answer: "Pricing varies by project scope. I offer packages to fit different budgets. Let's chat about your needs!"
  },
  {
    id: 3,
    question: "Do you offer revisions?",
    answer: "Absolutely! All packages include revisions so we can refine everything until you're completely happy with it."
  },
  {
    id: 4,
    question: "What do I need to get started?",
    answer: "Just your ideas and examples of designs you like. I'll guide you through the rest!"
  }
];

export default function FAQ() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative bg-[#f2f2f2]">
      {/* ── Section Title ── */}
      <div className="border-b border-[rgba(224,224,224,0.63)] px-6 sm:px-10 py-7 sm:py-8 bg-white">
        <TextReveal
          as="h2"
          preset="fade-in-blur"
          per="char"
          className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none"
        >
          FAQ
        </TextReveal>
      </div>

      {/* ── Main FAQ Body with Framer #f2f2f2 background ── */}
      <div className="px-6 sm:px-10 py-12 sm:py-16 flex flex-col gap-5">
        {FAQS.map((faq) => {
          const isOpen = openId === faq.id;

          return (
            <div key={faq.id} className="relative">
              {/* Question & Toggle Button Row */}
              <div
                onClick={() => toggle(faq.id)}
                className="flex items-center justify-between gap-3 cursor-pointer select-none"
              >
                {/* Black Pill with Question */}
                <div className="inline-flex items-center px-5 sm:px-6 py-3 rounded-full bg-black text-white font-sans text-sm font-medium shadow-sm hover:bg-neutral-800 transition-colors">
                  <span>{faq.question}</span>
                </div>

                {/* Circular Add Button */}
                <button
                  type="button"
                  aria-label="Toggle answer"
                  className="w-10 h-10 rounded-full bg-[#e3e3e3] hover:bg-[#d8d8d8] border border-[rgba(224,224,224,0.8)] flex items-center justify-center text-black transition-transform duration-200 shadow-2xs flex-shrink-0 cursor-pointer"
                >
                  <Plus
                    size={17}
                    className={`transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'rotate-45' : 'rotate-0'
                    }`}
                  />
                </button>
              </div>

              {/* Expandable Answer Card */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0, y: -6 }}
                    animate={{ opacity: 1, height: 'auto', y: 0 }}
                    exit={{ opacity: 0, height: 0, y: -6 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="mt-3 bg-white rounded-2xl p-5 sm:p-6 border border-[rgba(224,224,224,0.7)] shadow-xs">
                      <p className="font-sans text-sm sm:text-base text-neutral-700 leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
