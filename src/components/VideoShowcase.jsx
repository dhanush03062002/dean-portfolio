import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { VIDEOS } from '../assets/constants';
import CornerCross from './CornerCross';
import { Play, Sparkles } from 'lucide-react';

export default function VideoShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section className="relative border-b border-[rgba(224,224,224,0.63)] bg-white overflow-hidden py-16 sm:py-24">
      <div className="max-w-[1440px] mx-auto border-x border-[rgba(224,224,224,0.63)] px-6 sm:px-12 relative">
        <CornerCross position="top-left" />
        <CornerCross position="top-right" />

        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 flex items-center justify-center gap-1.5 mb-2">
            <Sparkles size={14} className="text-cyan-500" />
            <span>INTERACTIVE MOTION SHOWCASE</span>
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold uppercase tracking-tight text-neutral-900">
            CRAFTED IN MOTION
          </h2>
          <p className="text-neutral-500 text-sm mt-2">
            Fluid micro-interactions, responsive physics & bespoke transitions
          </p>
        </div>

        {/* 3D Showcase Carousel / Video cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[28px] overflow-hidden border border-[rgba(224,224,224,0.8)] bg-neutral-900 shadow-md hover:shadow-2xl transition-all duration-300"
            >
              <div className="relative aspect-[16/10] w-full bg-black overflow-hidden">
                <video
                  src={video.src}
                  poster={video.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">
                      Showcase #{idx + 1}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-tight text-white">
                      {video.title}
                    </h3>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-cyan-500 transition-colors">
                    <Play size={14} fill="currentColor" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
