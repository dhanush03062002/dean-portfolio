import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Play } from 'lucide-react';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';

export default function ProcessStickyScroll({ onOpenContact }) {
  const containerRef = useRef(null);

  // Track overall scroll progress through the stacking cards
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001
  });

  // 3D Perspective Rotation matching Framer: rotates seamlessly as cards stack
  const rotateY = useTransform(smoothProgress, [0, 0.33, 0.66, 1], [0, 120, 240, 360]);
  const rotateX = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], [2, -6, 2, -6, 2]);
  const cardScale = useTransform(smoothProgress, [0, 0.5, 1], [0.96, 1.03, 0.96]);

  const processVideos = [
    {
      src: "https://framerusercontent.com/assets/9mlXvE9TN1T6LvbfaPoK9F2bkBY.mp4",
      poster: "https://framerusercontent.com/images/8cSkOgbPvqyyM9fH8yhN0suHC1o.png?scale-down-to=1024&width=1820&height=1024",
      label: "Concept & Wireframe"
    },
    {
      src: "https://framerusercontent.com/assets/y9NMDyZ0ntX4xje6Ix5foOnkZHM.mp4",
      poster: "https://framerusercontent.com/images/Jri6NmKT3JKU7eoD1CXmzQTqE.png?scale-down-to=1024&width=1820&height=1024",
      label: "Motion & Refinement"
    },
    {
      src: "https://framerusercontent.com/assets/fiyZJo4xOiwxKrM3t8QYZ5LNYnk.mp4",
      poster: "https://framerusercontent.com/images/GHHSLV0ZGfPdajXyqGCzm5iMo.png?scale-down-to=1024&width=1820&height=1024",
      label: "Launch & Delivery"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="process" 
      className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-visible"
    >
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* 2-Column Split Layout */}
        <div className="flex flex-col lg:flex-row relative">
          
          {/* ========================================================= */}
          {/* LEFT COLUMN: 4 Stacking Cards (Desktop: Sticky, Mobile: Flow) */}
          {/* ========================================================= */}
          <div className="w-full lg:w-1/2 border-b lg:border-b-0 lg:border-r border-[rgba(224,224,224,0.63)] relative">
            
            {/* Header: PROCESS */}
            <div className="px-6 sm:px-12 md:px-16 pt-12 sm:pt-20 pb-6 sm:pb-8 border-b border-[rgba(224,224,224,0.63)] bg-white">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
                05 / METHODOLOGY
              </span>
              <TextReveal
                as="h2"
                preset="fade-in-blur"
                per="char"
                className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold uppercase tracking-tight text-neutral-900"
              >
                PROCESS
              </TextReveal>
            </div>

            {/* Card 1: 01 Let's Talk */}
            <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen z-10 bg-white flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 sm:py-16 lg:py-0 border-b border-[rgba(224,224,224,0.63)] shadow-xs">
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-300 block mb-3 sm:mb-4">
                01
              </span>
              <TextReveal
                as="h3"
                preset="fade-in-blur"
                per="word"
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-neutral-900 mb-4 sm:mb-6"
              >
                Let's Talk
              </TextReveal>
              <TextReveal
                as="p"
                preset="fade-in-blur"
                per="word"
                delay={0.1}
                className="font-sans text-sm sm:text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-lg font-normal"
              >
                We start with a conversation about your project, goals, and vision to understand exactly what you need.
              </TextReveal>

              {/* Mobile embedded video */}
              <div className="mt-6 lg:hidden w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200">
                <video src={processVideos[0].src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-2 text-xs font-mono text-neutral-400">
                <span>PHASE 01</span>
                <span>•</span>
                <span>DISCOVERY & STRATEGY</span>
              </div>
            </div>

            {/* Card 2: 02 Create & Refine */}
            <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen z-20 bg-[#f2f2f2] flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 sm:py-16 lg:py-0 border-t border-b border-[rgba(224,224,224,0.63)] shadow-xs">
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-400 block mb-3 sm:mb-4">
                02
              </span>
              <TextReveal
                as="h3"
                preset="fade-in-blur"
                per="word"
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-neutral-900 mb-4 sm:mb-6"
              >
                Create & Refine
              </TextReveal>
              <TextReveal
                as="p"
                preset="fade-in-blur"
                per="word"
                delay={0.1}
                className="font-sans text-sm sm:text-lg lg:text-xl text-neutral-700 leading-relaxed max-w-lg font-normal"
              >
                I design concepts and share them with you. We collaborate, refine, and iterate until everything feels perfect.
              </TextReveal>

              {/* Mobile embedded video */}
              <div className="mt-6 lg:hidden w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200">
                <video src={processVideos[1].src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-2 text-xs font-mono text-neutral-500">
                <span>PHASE 02</span>
                <span>•</span>
                <span>DESIGN & ITERATION</span>
              </div>
            </div>

            {/* Card 3: 03 Deliver & Launch */}
            <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen z-30 bg-[#e3e3e3] flex flex-col justify-center px-6 sm:px-12 md:px-16 py-12 sm:py-16 lg:py-0 border-t border-b border-[rgba(224,224,224,0.63)] shadow-xs">
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              <span className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-500 block mb-3 sm:mb-4">
                03
              </span>
              <TextReveal
                as="h3"
                preset="fade-in-blur"
                per="word"
                className="font-display text-3xl sm:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-neutral-900 mb-4 sm:mb-6"
              >
                Deliver & Launch
              </TextReveal>
              <TextReveal
                as="p"
                preset="fade-in-blur"
                per="word"
                delay={0.1}
                className="font-sans text-sm sm:text-lg lg:text-xl text-neutral-800 leading-relaxed max-w-lg font-normal"
              >
                I hand over final files, guide you through everything, and stay available for any questions or support.
              </TextReveal>

              {/* Mobile embedded video */}
              <div className="mt-6 lg:hidden w-full aspect-video rounded-2xl overflow-hidden border border-neutral-200">
                <video src={processVideos[2].src} autoPlay loop muted playsInline className="w-full h-full object-cover" />
              </div>

              <div className="mt-8 sm:mt-12 flex items-center gap-2 text-xs font-mono text-neutral-600">
                <span>PHASE 03</span>
                <span>•</span>
                <span>HANDOFF & DEPLOY</span>
              </div>
            </div>

            {/* Card 4: CTA Card "Ready to Get Started?" */}
            <div className="relative lg:sticky lg:top-0 h-auto lg:h-screen z-40 bg-white flex items-center justify-center p-6 sm:p-12 border-t border-[rgba(224,224,224,0.63)] shadow-md py-14 sm:py-20 lg:py-0">
              <CornerCross position="top-left" />
              <CornerCross position="bottom-right" />

              <div className="w-full max-w-lg p-6 sm:p-12 rounded-[24px] sm:rounded-[30px] bg-[#f2f2f2] border border-[rgba(224,224,224,0.8)] text-center flex flex-col items-center shadow-xs">
                <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 block mb-2">
                  NEXT STEPS
                </span>
                
                <TextReveal
                  as="h3"
                  preset="fade-in-blur"
                  per="word"
                  className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900 mb-3 sm:mb-4"
                >
                  Ready to Get Started?
                </TextReveal>
                
                <TextReveal
                  as="p"
                  preset="fade-in-blur"
                  per="word"
                  delay={0.1}
                  className="font-sans text-xs sm:text-sm text-neutral-600 leading-relaxed mb-6 sm:mb-8 max-w-sm"
                >
                  Tell me about your project and let's create something amazing together. I'll respond within 24 hours.
                </TextReveal>

                <button
                  onClick={onOpenContact}
                  className="group flex items-center gap-3 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-300 shadow-md hover:scale-[1.02] cursor-pointer"
                >
                  <span className="font-sans text-sm sm:text-base font-medium">I'm Ready to Start</span>
                  <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform animate-pulse"></span>
                  </div>
                </button>
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: 3D Perspective Sticky Rotating Video Deck   */}
          {/* (Active on Desktop screens, smoothly rotating on scroll)   */}
          {/* ========================================================= */}
          <div className="hidden lg:flex lg:w-1/2 sticky top-0 h-screen items-center justify-center p-6 sm:p-12 overflow-hidden bg-neutral-50/60 z-20">
            
            {/* Subtle background guide */}
            <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-70"></div>
            
            {/* 3D Perspective Stage Container */}
            <div 
              className="relative w-full max-w-md sm:max-w-lg aspect-[16/11] flex items-center justify-center"
              style={{ perspective: 1200 }}
            >
              
              {/* 3D Rotating Transform Wrapper synchronized with scroll */}
              <motion.div
                style={{
                  rotateY: rotateY,
                  rotateX: rotateX,
                  scale: cardScale,
                  transformStyle: "preserve-3d"
                }}
                className="relative w-full h-full"
              >
                {processVideos.map((vid, idx) => {
                  const angle = idx * 120;
                  const zTranslate = 45;

                  return (
                    <div
                      key={idx}
                      style={{
                        transform: `rotateY(${angle}deg) translateZ(${zTranslate}px)`,
                        transformStyle: "preserve-3d",
                        backfaceVisibility: "hidden"
                      }}
                      className="absolute inset-0 rounded-[28px] sm:rounded-[32px] overflow-hidden bg-black border-2 border-white/80 shadow-2xl flex flex-col justify-between"
                    >
                      <video
                        src={vid.src}
                        poster={vid.poster}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none"></div>

                      {/* Video Card Top Badge */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-xs font-semibold">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        <span>Phase 0{idx + 1}</span>
                      </div>

                      {/* Video Card Bottom Label */}
                      <div className="absolute bottom-4 left-4 right-4 z-10 flex items-center justify-between text-white">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block">
                            Interactive Showcase
                          </span>
                          <span className="font-display text-lg sm:text-xl font-bold uppercase">
                            {vid.label}
                          </span>
                        </div>

                        <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                          <Play size={14} fill="currentColor" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>

            </div>

            {/* Scroll Indicator Prompt */}
            <div className="absolute bottom-8 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-400 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-neutral-200 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
              <span>Scroll to rotate in 3D</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
