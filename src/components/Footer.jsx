import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PROFILE, SOCIAL_LINKS } from '../assets/constants';
import TextReveal from './TextReveal';
import SocialIcon from './SocialIcon';

/**
 * Waving Hand Character bursting through cracked wall
 * Recreated accurately in responsive scalable vector SVG with subtle floating animation
 */
function BurstingHandIllustration() {
  return (
    <div className="relative w-full max-w-[320px] sm:max-w-[420px] md:max-w-[460px] lg:max-w-[500px] aspect-[1.1] flex items-center justify-center select-none pointer-events-none">
      
      {/* Floating debris shards around character */}
      <motion.div
        animate={{ y: [-4, 4, -4], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-2 left-6 w-5 h-5 bg-white rotate-12 clip-shard shadow-sm"
        style={{ clipPath: 'polygon(50% 0%, 100% 70%, 75% 100%, 0% 80%)' }}
      />
      <motion.div
        animate={{ y: [6, -6, 6], rotate: [0, -12, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -top-3 right-16 w-6 h-6 bg-[#FFE249] -rotate-45 clip-shard shadow-sm"
        style={{ clipPath: 'polygon(30% 0%, 100% 20%, 80% 100%, 0% 70%)' }}
      />
      <motion.div
        animate={{ y: [-5, 5, -5], rotate: [0, 15, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-16 right-4 w-4 h-4 bg-white rotate-45 shadow-sm"
        style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
      />
      <motion.div
        animate={{ y: [4, -4, 4], rotate: [0, -10, 0] }}
        transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        className="absolute bottom-8 left-2 w-5 h-5 bg-[#FFE249] rotate-12 shadow-sm"
        style={{ clipPath: 'polygon(40% 0%, 100% 40%, 70% 100%, 0% 60%)' }}
      />

      {/* Main SVG: Cracked Wall + Character */}
      <svg
        viewBox="0 0 500 450"
        className="w-full h-full overflow-visible drop-shadow-2xl"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Subtle drop shadow for depth */}
          <filter id="charShadow" x="-10%" y="-10%" width="130%" height="130%">
            <feDropShadow dx="0" dy="12" stdDeviation="16" floodColor="#000000" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ── Cracked Wall Hole (Sharp Jagged Polygon Shards in White) ── */}
        <g id="cracked-hole">
          {/* Outer crack lines radiating outward */}
          <path
            d="M90 220 L40 180 M130 90 L80 40 M280 60 L320 15 M430 110 L480 70 M450 280 L495 320 M390 390 L430 435 M180 400 L140 445 M60 330 L15 365"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
            opacity="0.85"
          />

          {/* Jagged White Wall Break Hole */}
          <polygon
            points="120,130 180,75 250,95 330,65 375,115 425,120 390,200 450,260 410,320 370,305 340,380 270,350 210,395 160,340 95,335 125,250 80,195"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />

          {/* Inner shadow layer inside fracture */}
          <polygon
            points="140,150 190,105 250,115 320,90 355,135 400,140 370,210 420,260 380,305 345,290 320,350 265,330 215,365 175,320 120,315 145,250 110,205"
            fill="#e2e8f0"
            opacity="0.6"
          />
        </g>

        {/* ── Stepping Cartoon Leg & Shoe (Kicking out from the hole) ── */}
        <g id="character-leg">
          {/* Leg limb */}
          <path
            d="M210 270 Q170 310 135 340"
            stroke="#000000"
            strokeWidth="28"
            strokeLinecap="round"
          />
          {/* White cuff */}
          <ellipse
            cx="140"
            cy="335"
            rx="22"
            ry="14"
            transform="rotate(-35 140 335)"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="4"
          />
          {/* Black shoe */}
          <path
            d="M135 320 C110 325 80 340 75 365 C70 390 95 400 130 395 C165 390 185 375 180 350 C175 330 155 315 135 320 Z"
            fill="#18181b"
            stroke="#000000"
            strokeWidth="4.5"
          />
          {/* White shoe sole bottom */}
          <path
            d="M80 378 C95 392 130 398 165 385 C175 380 180 370 178 360"
            stroke="#ffffff"
            strokeWidth="6"
            strokeLinecap="round"
            fill="none"
          />
        </g>

        {/* ── Yellow Waving Hand Character ── */}
        <g id="character-hand" filter="url(#charShadow)">
          {/* Character Arm / Neck base */}
          <path
            d="M260 330 C250 365 240 385 235 410 C270 415 310 410 335 390 C325 360 310 335 305 310 Z"
            fill="#FFE249"
            stroke="#000000"
            strokeWidth="4.5"
            strokeLinejoin="round"
          />
          {/* White lower body collar / ring */}
          <path
            d="M230 405 C250 425 310 425 345 385"
            fill="#ffffff"
            stroke="#000000"
            strokeWidth="4.5"
            strokeLinecap="round"
          />

          {/* Yellow Hand Body & Fingers */}
          {/* Path outlines Palm + Thumb + Index + Middle + Ring + Pinky */}
          <path
            d="M 215 310 
               C 195 285 180 250 175 235 
               C 165 205 185 195 205 210 
               C 215 220 225 240 230 255 
               C 225 210 225 155 240 145 
               C 255 135 270 145 270 175 
               L 272 230 
               C 278 185 288 135 305 130 
               C 325 125 335 140 330 180 
               L 326 235 
               C 336 195 352 145 372 145 
               C 390 145 398 165 388 200 
               L 375 255 
               C 388 230 405 205 425 210 
               C 445 215 445 240 428 268 
               C 410 295 380 340 345 355 
               C 310 368 250 355 215 310 Z"
            fill="#FFE249"
            stroke="#000000"
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
          />

          {/* Highlight shine on thumb */}
          <path
            d="M 195 218 C 188 215 180 230 185 245"
            stroke="#ffffff"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Highlight shine on index finger tip */}
          <path
            d="M 248 152 C 255 148 262 152 265 162"
            stroke="#ffffff"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* ── Big Friendly Eyes ── */}
          {/* Left Eye */}
          <ellipse
            cx="278"
            cy="270"
            rx="14"
            ry="20"
            fill="#000000"
            transform="rotate(-5 278 270)"
          />
          {/* Left Eye Pupil Highlight */}
          <circle cx="282" cy="264" r="5.5" fill="#ffffff" />
          <circle cx="285" cy="274" r="2.5" fill="#ffffff" />

          {/* Right Eye */}
          <ellipse
            cx="318"
            cy="266"
            rx="14"
            ry="20"
            fill="#000000"
            transform="rotate(6 318 266)"
          />
          {/* Right Eye Pupil Highlight */}
          <circle cx="322" cy="260" r="5.5" fill="#ffffff" />
          <circle cx="325" cy="270" r="2.5" fill="#ffffff" />

          {/* ── Happy Open Smile with Tooth ── */}
          <path
            d="M 276 302 Q 305 332 334 298"
            fill="#000000"
            stroke="#000000"
            strokeWidth="4"
            strokeLinecap="round"
          />
          {/* Mouth cavity fill */}
          <path
            d="M 278 304 Q 305 334 332 300 Q 305 310 278 304 Z"
            fill="#000000"
          />
          {/* Cute white tooth */}
          <path
            d="M 292 306 L 292 314 Q 298 316 304 314 L 304 306 Z"
            fill="#ffffff"
          />
        </g>
      </svg>
    </div>
  );
}

/**
 * Footer Component matching the user-requested reference:
 * - Bright yellow CTA card ("Let's get started.")
 * - Playful hand character bursting through the wall with polygon shards
 * - Clean dark footer base with logo, nav links, social icon badges, and copyright
 * - Built seamlessly on the website layout and theme
 */
export default function Footer({ onOpenContact }) {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Work', href: '/projects' },
    { label: 'About', href: '/#about' },
    { label: 'Services', href: '/#services' },
    { label: 'Process', href: '/#process' },
    { label: 'Contact', onClick: onOpenContact },
  ];

  return (
    <footer className="relative bg-white pt-20 sm:pt-32 overflow-visible">

      {/* ── Main Dark Footer Shell ── */}
      <div className="relative bg-[#131315] text-white rounded-t-[36px] sm:rounded-t-[48px] border-t border-[rgba(255,255,255,0.08)]">
        
        {/* Container aligned with site grid */}
        <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-14 relative">

          {/* ============================================================== */}
          {/* OVERLAPPING HERO ROW: Yellow CTA Card + Bursting Character     */}
          {/* Straddles the top border of the dark footer for high impact    */}
          {/* ============================================================== */}
          <div className="relative -mt-20 sm:-mt-28 md:-mt-32 mb-12 sm:mb-16 z-20">
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-8">
              
              {/* ── Left: Vibrant Yellow Rounded CTA Card ── */}
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:max-w-[580px] xl:max-w-[620px] bg-[#FFE249] text-black rounded-[28px] sm:rounded-[36px] p-7 sm:p-10 md:p-12 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.35)] relative overflow-visible flex-shrink-0"
              >
                {/* Floating white shard accent on top-right of card */}
                <div 
                  className="absolute -top-3 -right-3 w-7 h-7 bg-white rotate-12 shadow-md hidden sm:block pointer-events-none"
                  style={{ clipPath: 'polygon(50% 0%, 100% 70%, 75% 100%, 0% 80%)' }}
                />

                <TextReveal
                  as="h2"
                  preset="fade-in-blur"
                  per="word"
                  className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-black tracking-tight leading-[1.1] mb-3 sm:mb-4"
                >
                  Let's get started.
                </TextReveal>

                <p className="font-sans text-neutral-800 text-sm sm:text-base md:text-lg font-normal leading-relaxed max-w-md mb-6 sm:mb-8">
                  We want to hear from you to get an awesome project started!
                </p>

                {/* Black pill button */}
                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-black text-white hover:bg-neutral-800 font-sans text-sm sm:text-base font-semibold tracking-wide transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer group"
                >
                  <span>Let's Chat</span>
                </button>
              </motion.div>

              {/* ── Right: Playful Character Bursting Through Wall ── */}
              <motion.div
                initial={{ opacity: 0, scale: 0.85, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="w-full lg:w-auto flex items-center justify-center lg:justify-end overflow-visible -mt-4 lg:mt-0"
              >
                <BurstingHandIllustration />
              </motion.div>

            </div>
          </div>

          {/* ============================================================== */}
          {/* LOWER FOOTER: Brand Icon, Nav Links, Socials & Legal Rows     */}
          {/* ============================================================== */}
          <div className="pt-6 sm:pt-8 pb-10 sm:pb-14 border-t border-neutral-800/80">
            
            {/* Upper row: Waving Hand Logo & Navigation Links */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 sm:mb-10">
              
              {/* White Waving Hand Glyph Logo matching reference */}
              <div className="flex items-center gap-3">
                <Link to="/" className="inline-flex items-center gap-2 group">
                  <div className="w-9 h-9 rounded-full bg-neutral-800/80 border border-neutral-700/60 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                      {/* Stylized cartoon waving hand icon */}
                      <path d="M11 2a1.5 1.5 0 0 1 1.5 1.5V11a.5.5 0 0 0 1 0V3.5a1.5 1.5 0 0 1 3 0V11a.5.5 0 0 0 1 0V5.5a1.5 1.5 0 0 1 3 0V14c0 4.418-3.582 8-8 8s-8-3.582-8-8v-3.5a1.5 1.5 0 0 1 3 0V11a.5.5 0 0 0 1 0V2.5A1.5 1.5 0 0 1 11 2z" />
                    </svg>
                  </div>
                  <span className="font-display text-lg font-black uppercase tracking-tight text-white">
                    {PROFILE.name}
                  </span>
                </Link>
              </div>

              {/* Navigation Links: Work, About, Services, Process, Contact */}
              <nav className="flex flex-wrap items-center gap-6 sm:gap-8 font-sans text-sm font-medium">
                {navLinks.map((link) => (
                  link.onClick ? (
                    <button
                      key={link.label}
                      onClick={link.onClick}
                      className="text-neutral-400 hover:text-white transition-colors cursor-pointer"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="text-neutral-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </Link>
                  )
                ))}
              </nav>

            </div>

            {/* Middle row: Social Icons Badges matching reference */}
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-10 sm:mb-12">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-black hover:bg-white hover:border-white flex items-center justify-center transition-all duration-300 shadow-sm hover:scale-105 active:scale-95"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>

            {/* Bottom row: Copyright & Privacy Policy */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-neutral-800/60 text-xs text-neutral-500 font-sans">
              <p>© Copyright {currentYear} Dakshnamoorthy. All rights reserved.</p>
              
              <div className="flex items-center gap-6 text-neutral-500">
                <a href="#privacy" className="hover:text-neutral-300 transition-colors">
                  Privacy Policy
                </a>
                <span>•</span>
                <a href="#terms" className="hover:text-neutral-300 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>

    </footer>
  );
}
