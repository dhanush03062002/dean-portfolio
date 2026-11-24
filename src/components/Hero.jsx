import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../assets/constants';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';
import Antigravity from './Antigravity';

export default function Hero({ onOpenContact }) {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Parallax letter displacement on scroll
  const xLeft = useTransform(smoothProgress, [0, 1], ["0%", "-6%"]);
  const xRight = useTransform(smoothProgress, [0, 1], ["0%", "6%"]);
  const avatarScale = useTransform(smoothProgress, [0, 1], [1, 0.94]);
  const avatarY = useTransform(smoothProgress, [0, 1], ["0px", "16px"]);

  // Staggered words for blur-in animation
  const bioWords = PROFILE.bio.split(' ');

  return (
    <section 
      ref={containerRef}
      id="hero" 
      className="relative border-b border-[rgba(224,224,224,0.63)] overflow-hidden bg-white"
    >
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] px-3 sm:px-6 md:px-8 py-6 sm:py-12 md:py-16 relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* Outer Framed Box matching Framer Header */}
        <div className="relative border border-[rgba(224,224,224,0.63)] bg-white px-3 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20 pb-10 sm:pb-14 md:pb-16 flex flex-col items-center justify-center overflow-hidden">
          
          {/* Antigravity WebGL Interactive Particle Field in Header */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Antigravity
              colors={["#5227FF", "#FF9FFC", "#B497CF"]}
              count={1500}
              magnetRadius={9}
              ringRadius={7}
              particleSize={0.9}
              autoAnimate
              colorMode="conic"
              colorSpeed={0.05}
              particleShape="capsule"
              particleVariance={1}
              fieldStrength={10}
              waveAmplitude={1}
              waveCount={3}
              waveSpeed={0.4}
              rotationSpeed={0}
              pulseSpeed={3}
              depthFactor={1}
              ambient={0.25}
              lerpSpeed={0.05}
              interactive
              clickBurst
              intro
              lightMode={false}
            />
          </div>

          {/* Top Badge sitting directly ON the top border line */}
          <motion.div 
            initial={{ opacity: 0, y: -10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -top-[16px] sm:-top-[18px] left-1/2 -translate-x-1/2 bg-[#f2f2f2] border border-[rgba(224,224,224,0.63)] rounded-full px-3.5 sm:px-5 py-1 sm:py-1.5 flex items-center justify-center gap-2 shadow-2xs z-20 cursor-default"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-sans text-[11px] sm:text-sm font-semibold tracking-wide text-neutral-900 whitespace-nowrap">
              {PROFILE.fullName}
            </span>
          </motion.div>

          {/* Monumental Headline Row (GRAPHICS + Portrait Cutout Card + DESIGNER) */}
          <div className="w-full flex flex-col md:flex-row items-center md:items-end justify-center gap-2 sm:gap-4 lg:gap-6 my-2 select-none overflow-hidden relative z-10">
            
            {/* Left word: UI / UX */}
            <motion.h1 
              style={{ x: xLeft }}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[44px] xs:text-[54px] sm:text-[84px] md:text-[110px] lg:text-[145px] xl:text-[175px] font-black uppercase tracking-tighter leading-[0.84] text-black text-center md:text-right flex-1 break-normal"
            >
              UI / UX
            </motion.h1>

            {/* Center Portrait Card (Responsive 100px-122px) */}
            <motion.div 
              style={{ scale: avatarScale, y: avatarY }}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ scale: 1.05 }}
              className="relative w-[96px] h-[118px] sm:w-[115px] sm:h-[138px] md:w-[122px] md:h-[147px] rounded-[24px] sm:rounded-[30px] border border-[rgba(224,224,224,0.8)] shadow-md overflow-hidden bg-gradient-to-b from-neutral-100 to-neutral-200 flex-shrink-0 cursor-pointer self-center md:self-end mb-2 md:mb-3 z-10 group"
            >
              {/* Dakshnamoorthy portrait image */}
              <img 
                src={PROFILE.avatar} 
                alt="Dakshnamoorthy portrait" 
                className="w-full h-full object-cover object-top scale-110 group-hover:scale-115 transition-transform duration-500"
              />

              {/* Looping ambient video overlay matching Framer */}
              <video 
                src="https://framerusercontent.com/assets/EtFNVEIQDKsxeDVfagwYxBQgg.mp4" 
                autoPlay
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay pointer-events-none"
              />

              {/* Bottom gradient mask */}
              <div className="absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
            </motion.div>

            {/* Right word: DESIGNER */}
            <motion.h1 
              style={{ x: xRight }}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[44px] xs:text-[54px] sm:text-[84px] md:text-[110px] lg:text-[145px] xl:text-[175px] font-black uppercase tracking-tighter leading-[0.84] text-black text-center md:text-left flex-1 break-normal"
            >
              DESIGNER
            </motion.h1>

          </div>

          {/* Subtitle Bio with Word Blur-In Reveal */}
          <div className="mt-6 sm:mt-10 max-w-2xl mx-auto text-center px-2 relative z-10">
            <TextReveal
              as="p"
              preset="fade-in-blur"
              per="word"
              delay={0.3}
              speedReveal={1.1}
              className="font-sans text-sm sm:text-lg md:text-xl text-neutral-600 font-normal leading-relaxed text-center"
            >
              {PROFILE.bio}
            </TextReveal>
          </div>

          {/* Primary Action Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto relative z-10"
          >
            {/* Primary CTA Button: "i Want to Chat" */}
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto group flex items-center justify-center gap-3 px-6 sm:px-7 py-3 sm:py-3.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="font-sans text-sm sm:text-base font-medium">i Want to Chat</span>
              <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700">
                <span className="w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform animate-pulse shadow-[0_0_8px_#02d4f5]"></span>
              </div>
            </button>

            {/* Secondary CTA: Explore Works */}
            <a
              href="#projects"
              className="w-full sm:w-auto flex items-center justify-center gap-2 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-[rgba(224,224,224,0.8)] bg-white text-neutral-700 hover:text-black hover:border-black transition-all text-sm sm:text-base font-medium shadow-2xs hover:scale-[1.02]"
            >
              <span>Explore Works</span>
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
