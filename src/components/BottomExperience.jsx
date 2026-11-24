import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import Contact from './Contact';
import CornerCross from './CornerCross';

/**
 * BottomExperience
 * Exactly replicates the Framer site's 2-column split layout (framer-rlfafm):
 * - Left column (Desktop only, sticky 100vh):
 *   Interactive 3D video cards with badges that transition as you scroll:
 *     1. "What my Clients said" (video: kaZXokE7i93m4gPuO5suJs7pqU.mp4) -> during Testimonial
 *     2. "Frequently Answered Questions" (video: 2pJZUnx8CCykmeDNfmBwxlRHgI.mp4) -> during FAQ
 *     3. "Reach out to me" (video: QpSh5ePt6LJ9h3sDWXuemKzE.mp4) -> during Contact
 * - Right column:
 *   TESTIMONIAL -> FAQ -> CONTACT ME
 */

const LEFT_CARDS = [
  {
    id: 'testimonials',
    title: 'What my Clients said',
    video: 'https://framerusercontent.com/assets/kaZXokE7i93m4gPuO5suJs7pqU.mp4',
    badgeRotation: '-8deg',
  },
  {
    id: 'faq',
    title: 'Frequently Answered Questions',
    video: 'https://framerusercontent.com/assets/2pJZUnx8CCykmeDNfmBwxlRHgI.mp4',
    badgeRotation: '6deg',
  },
  {
    id: 'contact',
    title: 'Reach out to me',
    video: 'https://framerusercontent.com/assets/QpSh5ePt6LJ9h3sDWXuemKzE.mp4',
    badgeRotation: '-6deg',
  },
];

export default function BottomExperience({ onOpenContact }) {
  const [activeSection, setActiveSection] = useState('testimonials');
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const tEl = document.getElementById('testimonials');
      const fEl = document.getElementById('faq');
      const cEl = document.getElementById('contact');

      if (!tEl || !fEl || !cEl) return;

      const vCenter = window.innerHeight * 0.45;

      const tRect = tEl.getBoundingClientRect();
      const fRect = fEl.getBoundingClientRect();
      const cRect = cEl.getBoundingClientRect();

      if (cRect.top <= vCenter) {
        setActiveSection('contact');
      } else if (fRect.top <= vCenter) {
        setActiveSection('faq');
      } else {
        setActiveSection('testimonials');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const activeCardIndex = LEFT_CARDS.findIndex((c) => c.id === activeSection);
  const activeCard = LEFT_CARDS[activeCardIndex >= 0 ? activeCardIndex : 0];

  return (
    <div ref={containerRef} className="border-b border-[rgba(224,224,224,0.63)] bg-white relative">
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] flex flex-col lg:flex-row relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />

        {/* ── LEFT COLUMN: Sticky 100vh on Desktop ── */}
        <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen border-r border-[rgba(224,224,224,0.63)] items-center justify-center p-8 xl:p-12 overflow-hidden bg-white select-none">
          <CornerCross position="bottom-left" />

          {/* 3D Perspective Card Container */}
          <div
            className="relative w-full max-w-[460px] aspect-[1.18] flex items-center justify-center"
            style={{ perspective: 1600 }}
          >
            {LEFT_CARDS.map((card, idx) => {
              const isActive = card.id === activeSection;

              return (
                <motion.div
                  key={card.id}
                  className="absolute inset-0 rounded-[30px] overflow-hidden bg-white shadow-xl border border-[rgba(224,224,224,0.63)]"
                  style={{
                    borderRadius: '30px',
                    transformStyle: 'preserve-3d',
                  }}
                  initial={false}
                  animate={{
                    opacity: isActive ? 1 : 0,
                    scale: isActive ? 1 : 0.92,
                    rotateY: isActive ? 0 : idx < activeCardIndex ? -45 : 45,
                    zIndex: isActive ? 10 : 0,
                    pointerEvents: isActive ? 'auto' : 'none',
                  }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Autoplay Video */}
                  <video
                    src={card.video}
                    loop
                    muted
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                    style={{ borderRadius: '30px' }}
                  />

                  {/* Tilted Floating Label Badge (Framer style) */}
                  <div
                    className="absolute top-5 right-5 z-20 px-4 py-2 rounded-full bg-white/95 backdrop-blur-md shadow-md border border-[rgba(224,224,224,0.8)]"
                    style={{ transform: `rotate(${card.badgeRotation})` }}
                  >
                    <span className="font-display text-sm font-bold uppercase tracking-tight text-black">
                      {card.title}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── RIGHT COLUMN: Content Sections (Testimonials, FAQ, Contact) ── */}
        <div className="w-full lg:w-1/2 flex flex-col divide-y divide-[rgba(224,224,224,0.63)]">
          <Testimonials />
          <FAQ />
          <Contact onOpenContact={onOpenContact} />
        </div>

      </div>
    </div>
  );
}
