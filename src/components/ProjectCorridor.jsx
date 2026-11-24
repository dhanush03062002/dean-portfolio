import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageStreamHero from './ImageStreamHero';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';

// Real UI/UX case studies & project mockups from Dakshnamoorthy's portfolio
const CORRIDOR_IMAGES = [
  {
    src: "https://static.wixstatic.com/media/581991_244ac4c2707a4db19f97a12ac0c4c489~mv2.png",
    alt: "Factory Energy Monitoring Dashboard UI",
  },
  {
    src: "https://static.wixstatic.com/media/581991_3a189551d3fd49b895c8bdaa1857f95d~mv2.png",
    alt: "AI Business Development Enterprise Platform",
  },
  {
    src: "https://static.wixstatic.com/media/581991_ee2aeebfadb848239fd35ca589f1f573~mv2.png",
    alt: "Make Shift On-Demand Service Booking App",
  },
  {
    src: "https://static.wixstatic.com/media/581991_6e7f546103414833a05096a3a9784c33~mv2.png",
    alt: "Bookmywage Shift & Wage Management App",
  },
  {
    src: "https://static.wixstatic.com/media/581991_cd3ac05df3fc4ca0852142be490b92a5~mv2.png",
    alt: "Doctor Appointment & Telemedicine App",
  },
  {
    src: "https://static.wixstatic.com/media/581991_06e78859015f48bfa5d92c330c679f20~mv2.png",
    alt: "Mymediater Dispute Resolution Workspace",
  },
  {
    src: "https://static.wixstatic.com/media/581991_4069eb9fd2ff4cb19a942246db0bbbb5~mv2.png",
    alt: "Quuts Quote & Social Typography App",
  },
  {
    src: "https://static.wixstatic.com/media/581991_9b75f243b27d465ebce5701c83910525~mv2.png",
    alt: "PrimeLiving Real Estate Marketplace",
  },
  {
    src: "https://static.wixstatic.com/media/581991_7da2af4ba73a48de87990db2176327a3~mv2.png",
    alt: "Camdell Consumer App Experience",
  },
  {
    src: "https://static.wixstatic.com/media/581991_3f2a8803e0864c378e708382cb03de40~mv2.png",
    alt: "Sowdham Apartment Community App",
  },
  {
    src: "https://static.wixstatic.com/media/581991_5164bec886a54560a6cdbbdaa0e09e84~mv2.png",
    alt: "Goshala Community Portal",
  },
  {
    src: "https://static.wixstatic.com/media/581991_0459d753f8c942fb962ea71c31ba13e2~mv2.png",
    alt: "Furniture & Interior Web Design",
  },
  {
    src: "https://static.wixstatic.com/media/581991_380b19259f54448d9ee4afbba61b637f~mv2.png",
    alt: "Party Poster Graphic Design",
  },
  {
    src: "https://static.wixstatic.com/media/581991_c070f233ed51470ebb6f5c903454dfcc~mv2.png",
    alt: "Brand Identity & Logo Mockup",
  },
];

export default function ProjectCorridor() {
  return (
    <section 
      id="visual-corridor" 
      className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* ── Section Header ── */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-6 sm:px-12 py-8 sm:py-10 border-b border-[rgba(224,224,224,0.63)] bg-white">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-1">
              04 / VISUAL CONTINUUM
            </span>
            <TextReveal
              as="h2"
              preset="fade-in-blur"
              per="char"
              className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none"
            >
              VISUAL CORRIDOR
            </TextReveal>
            <p className="text-sm font-medium text-neutral-500 mt-2 font-sans">
              Continuous 3D perspective stream of selected digital craft & creative direction
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-center px-4 py-2 rounded-full border border-neutral-200 bg-neutral-50 text-xs font-semibold uppercase text-neutral-700">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Autonomous 3D Stream</span>
          </div>
        </div>

        {/* ── 3D Image Stream Corridor Container ── */}
        <div className="relative w-full p-4 sm:p-8 md:p-12 bg-neutral-950 text-white overflow-hidden">
          
          <ImageStreamHero
            images={CORRIDOR_IMAGES}
            cards={12}
            speed={18}
            axis={50}
            className="h-[500px] sm:h-[560px] md:h-[620px] lg:h-[680px] w-full rounded-[24px] sm:rounded-[32px] border border-neutral-800 bg-black/60 shadow-inner"
          >
            {/* Center Editorial Overlay Card */}
            <div className="relative z-10 flex h-full flex-col items-center justify-between py-10 sm:py-16 px-4 text-center pointer-events-none">
              
              {/* Top floating pill */}
              <div className="pointer-events-auto">
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold tracking-wider uppercase text-neutral-200 shadow-sm">
                  <Sparkles size={13} className="text-cyan-400" />
                  <span>Curated Perspectives</span>
                </span>
              </div>

              {/* Center Monumental Headline with glass backdrop */}
              <div className="max-w-xl mx-auto px-6 py-6 sm:py-8 rounded-[24px] sm:rounded-[30px] bg-black/40 backdrop-blur-md border border-white/10 shadow-2xl pointer-events-auto">
                <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-white leading-tight">
                  Your Work,
                  <br />
                  <span className="bg-gradient-to-r from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent">
                    Front & Centre.
                  </span>
                </h3>
                
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-300 font-sans leading-relaxed max-w-md mx-auto">
                  A dynamic 3D perspective stream that leads with imagery. Real-time geometric projection creates an endless visual continuum.
                </p>

                {/* Explore Projects Button */}
                <div className="mt-6">
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-sans text-xs sm:text-sm font-bold tracking-wide uppercase hover:bg-neutral-200 transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 group"
                  >
                    <span>Explore Full Archive</span>
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="text-[11px] font-mono tracking-widest uppercase text-neutral-400 pointer-events-auto">
                AUTONOMOUS 3D STREAM • 60 FPS PROJECTION
              </div>

            </div>
          </ImageStreamHero>

        </div>

      </div>
    </section>
  );
}
