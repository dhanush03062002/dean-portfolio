import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { ArrowDownRight, Sparkles } from 'lucide-react';
import { STACK } from '../assets/constants';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';

export default function AboutSection() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const videoScale = useTransform(smoothProgress, [0.2, 0.5, 0.8], [0.96, 1.02, 0.98]);
  const videoY = useTransform(smoothProgress, [0.2, 0.8], ["-10px", "20px"]);

  // Stats Data
  const statsLeft = [
    { value: "20+", label: "Projects Completed" },
    { value: "2+", label: "Years of Experience" },
    { value: "5.0", label: "Star Client Reviews" }
  ];

  const statsRight = [
    { value: "100%", label: "Client Satisfaction" },
    { value: "12+", label: "Industries Served" },
    { value: "4+", label: "Design Certifications" }
  ];

  // Jobs Data
  const jobs = [
    {
      title: "UI/UX Designer",
      company: "Amrithaa Private Ltd",
      year: "2023 - Present"
    },
    {
      title: "Product Design Specialist",
      company: "Digital Consulting",
      year: "2023 - 2024"
    },
    {
      title: "Certified UI/UX Designer",
      company: "Advanced UI/UX Certification",
      year: "2023"
    }
  ];

  return (
    <section 
      ref={containerRef}
      id="about" 
      className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-visible"
    >
      <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />
        <CornerCross position="bottom-left" />
        <CornerCross position="bottom-right" />

        {/* Responsive Grid: Mobile stacks in natural reading order (Header+Video first) */}
        <div className="flex flex-col lg:grid lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x border-[rgba(224,224,224,0.63)] items-start">
          
          {/* ========================================================= */}
          {/* CENTER / HERO: Monumental Header + Video (Mobile order: 1) */}
          {/* ========================================================= */}
          <div className="order-1 lg:order-2 lg:col-span-6 flex flex-col p-6 sm:p-10 lg:p-12 relative min-h-0 lg:min-h-[1050px] overflow-visible bg-white w-full">
            
            {/* Header: ABOUT ME */}
            <div className="text-center mb-8 pb-6 border-b border-neutral-200">
              <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 block mb-2">
                03 / BACKGROUND
              </span>
              <TextReveal
                as="h2"
                preset="fade-in-blur"
                per="char"
                className="font-display text-4xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-neutral-900"
              >
                ABOUT ME
              </TextReveal>
            </div>

            {/* Sticky Video Card Container */}
            <div className="lg:sticky lg:top-28 w-full flex flex-col items-center">
              
              <motion.div
                style={{ scale: videoScale, y: videoY }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/5] rounded-[28px] sm:rounded-[32px] overflow-hidden bg-neutral-900 border-2 border-white/80 shadow-2xl group cursor-pointer"
              >
                {/* Looping video */}
                <video
                  src="https://framerusercontent.com/assets/oTOIH1FK4PBfTPisuj5hfDQldE.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                {/* Floating Top Badge */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-5 z-10 flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[11px] sm:text-xs font-semibold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Chennai, India</span>
                </div>

                {/* Bottom Pill Badge: "Let Me Introduce Myself" */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 z-10 flex items-center justify-between p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white shadow-lg text-neutral-900">
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center flex-shrink-0">
                      <Sparkles size={13} className="text-cyan-400" />
                    </div>
                    <div>
                      <span className="text-[9px] sm:text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">
                        Get to Know Me
                      </span>
                      <h4 className="font-display text-sm sm:text-base font-bold uppercase tracking-tight leading-none">
                        Dakshnamoorthy
                      </h4>
                    </div>
                  </div>

                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-neutral-300 flex items-center justify-center text-neutral-700 group-hover:bg-black group-hover:text-white transition-colors">
                    <ArrowDownRight size={15} />
                  </div>
                </div>
              </motion.div>

              {/* Bio snippet underneath */}
              <div className="mt-6 sm:mt-8 max-w-md text-center px-4">
                <TextReveal
                  as="p"
                  preset="fade-in-blur"
                  per="word"
                  className="font-sans text-sm sm:text-base text-neutral-600 leading-relaxed font-normal"
                >
                  UI/UX designer based in Chennai with 20+ completed projects across healthcare, fintech, IoT dashboards, and consumer apps at Amrithaa Private Ltd.
                </TextReveal>
              </div>

            </div>

          </div>

          {/* ========================================================= */}
          {/* LEFT COLUMN: Stats 1 + My Stack (Mobile order: 2)         */}
          {/* ========================================================= */}
          <div className="order-2 lg:order-1 lg:col-span-3 flex flex-col divide-y divide-[rgba(224,224,224,0.63)] z-10 bg-white w-full">
            
            {/* Stats 1: 3-column grid on mobile/tablet, single-col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 divide-y sm:divide-y-0 sm:divide-x lg:divide-x-0 lg:divide-y divide-[rgba(224,224,224,0.63)]">
              {statsLeft.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-5 sm:p-6 lg:p-8 flex flex-col justify-between group hover:bg-neutral-50 transition-colors"
                >
                  <div className="mb-2">
                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 group-hover:scale-105 inline-block transition-transform duration-300">
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 font-medium pt-2 border-t border-neutral-100">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* My Stack / Tools */}
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="mb-5 pb-3 border-b border-neutral-200 flex items-center justify-between">
                <TextReveal
                  as="h4"
                  preset="fade-in-blur"
                  per="word"
                  className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900"
                >
                  My Stack
                </TextReveal>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 sm:gap-4">
                {STACK.map((tool, idx) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.08 }}
                    whileHover={{ y: -3 }}
                    className="p-3.5 sm:p-4 rounded-2xl border border-[rgba(224,224,224,0.8)] bg-neutral-50/50 hover:bg-white hover:shadow-md transition-all duration-300 flex items-center gap-3.5 group cursor-pointer"
                  >
                    {/* Tool Icon with 3D Float */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white border border-neutral-200 p-2 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <h5 className="font-display text-base sm:text-lg font-bold uppercase text-neutral-900 tracking-tight leading-none mb-1">
                        {tool.name}
                      </h5>
                      <p className="text-xs text-neutral-500 font-medium truncate">
                        {tool.role}
                      </p>
                    </div>

                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-300 group-hover:bg-cyan-500 transition-colors"></span>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: Stats 2 + My Experience (Mobile order: 3)   */}
          {/* ========================================================= */}
          <div className="order-3 lg:order-3 lg:col-span-3 flex flex-col divide-y divide-[rgba(224,224,224,0.63)] z-10 bg-white w-full">
            
            {/* Stats 2: 3-column grid on mobile/tablet, single-col on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 divide-y sm:divide-y-0 sm:divide-x lg:divide-x-0 lg:divide-y divide-[rgba(224,224,224,0.63)]">
              {statsRight.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative p-5 sm:p-6 lg:p-8 flex flex-col justify-between group hover:bg-neutral-50 transition-colors"
                >
                  <div className="mb-2">
                    <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-neutral-900 group-hover:scale-105 inline-block transition-transform duration-300">
                      {stat.value}
                    </span>
                  </div>
                  <p className="font-sans text-xs sm:text-sm text-neutral-500 font-medium pt-2 border-t border-neutral-100">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* My Experience */}
            <div className="p-5 sm:p-6 lg:p-8">
              <div className="mb-5 pb-3 border-b border-neutral-200 flex items-center justify-between">
                <TextReveal
                  as="h4"
                  preset="fade-in-blur"
                  per="word"
                  className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-neutral-900"
                >
                  My Experience
                </TextReveal>
              </div>

              {/* Exact Framer-like Job Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-3 sm:gap-4">
                {jobs.map((job, idx) => (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ y: -3 }}
                    className="p-4 sm:p-5 rounded-2xl border border-[rgba(224,224,224,0.8)] bg-neutral-50/50 hover:bg-white hover:shadow-md transition-all duration-300 group"
                  >
                    {/* Job Title */}
                    <h5 className="font-display text-lg sm:text-xl font-bold uppercase text-neutral-900 tracking-tight mb-2 sm:mb-3 group-hover:text-black">
                      {job.title}
                    </h5>

                    {/* Company Line */}
                    <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-xs">
                      <span className="text-neutral-400 font-medium uppercase tracking-wider">Company</span>
                      <span className="font-bold text-neutral-900">{job.company}</span>
                    </div>

                    {/* Year Line */}
                    <div className="pt-2 mt-2 border-t border-neutral-200 flex items-center justify-between text-xs">
                      <span className="text-neutral-400 font-medium uppercase tracking-wider">Year</span>
                      <span className="font-semibold text-neutral-700 px-2 py-0.5 rounded-full bg-neutral-200/60">{job.year}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
