import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, Moon, Sun, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SOCIAL_LINKS, PROFILE, triggerResumeDownload } from '../assets/constants';
import SocialIcon from './SocialIcon';

// Framer mechanical letter-by-letter rolling animation
function LetterRoll({ text, active = false }) {
  return (
    <span className="inline-flex items-start font-display text-[17px] font-bold tracking-tight uppercase select-none overflow-hidden h-[22px] leading-[22px] cursor-pointer">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="relative inline-flex flex-col h-[44px] shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1/2"
          style={{ transitionDelay: `${i * 18}ms` }}
        >
          <span
            className={`block h-[22px] leading-[22px] ${
              active ? 'text-black font-extrabold' : 'text-neutral-500'
            } group-hover:text-black transition-colors`}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
          <span className="block h-[22px] leading-[22px] text-black font-extrabold">
            {char === ' ' ? '\u00A0' : char}
          </span>
        </span>
      ))}
    </span>
  );
}

// Social Icon button wrapper
function NavbarSocialButton({ name, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-[rgba(224,224,224,0.7)] flex items-center justify-center text-neutral-600 hover:text-black hover:border-black hover:scale-105 transition-all duration-200 bg-white shadow-2xs"
    >
      <SocialIcon name={name} className="w-3.5 h-3.5" />
    </a>
  );
}

export default function Navbar({ onOpenContact }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return document.documentElement.classList.contains('dark') ||
             window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prev => !prev);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[rgba(224,224,224,0.63)] transition-all">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 h-20 flex items-center justify-between border-x border-[rgba(224,224,224,0.63)] relative">
        
        {/* ================= LEFT SECTION (Button & Socials & Projects) ================= */}
        <div className="hidden lg:flex items-center gap-4 flex-1 justify-start">
          
          {/* Primary Action Button: "Download Resume" */}
          <a
            href={PROFILE.resumeUrl || "/Dhakashnamoorthy_Designer.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerResumeDownload}
            className="group relative flex items-center gap-2.5 px-4 sm:px-5 py-2.5 rounded-full bg-black text-white hover:bg-neutral-800 transition-all duration-300 shadow-sm cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="font-sans text-sm font-medium tracking-tight">Download Resume</span>
            <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-neutral-800 border border-neutral-700">
              <Download size={12} className="text-cyan-400 group-hover:translate-y-0.5 transition-transform" />
            </div>
          </a>

          {/* Social Icons row */}
          <div className="flex items-center gap-1.5 pl-1">
            {SOCIAL_LINKS.map((social) => (
              <NavbarSocialButton key={social.name} name={social.name} url={social.url} />
            ))}
          </div>

          {/* Projects Link on the Left */}
          <div className="pl-3">
            <Link to="/#projects" className="group px-2 py-1">
              <LetterRoll text="Projects" />
            </Link>
          </div>

        </div>

        {/* ================= CENTER SECTION (Logo, Rotating Avatar & Active Pill) ================= */}
        <div className="flex items-center gap-3 justify-center">
          <Link to="/#hero" className="flex items-center gap-2 group cursor-pointer" title="Dean Portfolio">
            
            {/* Rotating Dotted Ring Badge with Dean Avatar */}
            <div className="relative w-[52px] h-[52px] flex items-center justify-center flex-shrink-0">
              {/* Rotating outer dotted SVG track */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                  <path
                    id="nav-avatar-track"
                    d="M 50, 50 m -40, 0 a 40,40 0 1,0 80,0 a 40,40 0 1,0 -80,0"
                    fill="none"
                  />
                  <text className="text-[12px] fill-neutral-400 tracking-[0.25em]">
                    <textPath href="#nav-avatar-track" startOffset="0">
                      • • • • • • • • • • • • • • • •
                    </textPath>
                  </text>
                </svg>
              </motion.div>

              {/* Dakshnamoorthy Avatar Image */}
              <div className="w-[42px] h-[42px] rounded-full overflow-hidden border border-neutral-200 bg-neutral-100 z-10">
                <img 
                  src={PROFILE.avatar} 
                  alt={PROFILE.name} 
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>

              {/* Pulsing Accent Dot */}
              <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-orange-500 border-2 border-white rounded-full z-20"></span>
            </div>

            {/* Active Page Indicator Pill: "Home" */}
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[rgba(224,224,224,0.63)] bg-neutral-50 shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-display text-[15px] font-bold uppercase tracking-tight text-black">
                Home
              </span>
            </div>

          </Link>
        </div>

        {/* ================= RIGHT SECTION (Services, Process, About & Theme Switch) ================= */}
        <div className="hidden lg:flex items-center gap-6 flex-1 justify-end">
          
          {/* Navigation Links */}
          <nav className="flex items-center gap-5">
            <Link to="/#services" className="group px-1 py-1">
              <LetterRoll text="Services" />
            </Link>
            <Link to="/#process-scroll" className="group px-1 py-1">
              <LetterRoll text="Process" />
            </Link>
            <Link to="/#about" className="group px-1 py-1">
              <LetterRoll text="About" />
            </Link>
          </nav>

          {/* Theme Toggle Pill Button (Light & dark) */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="w-[54px] h-[30px] rounded-full border border-[rgba(224,224,224,0.8)] bg-neutral-100 relative p-1 cursor-pointer transition-colors shadow-2xs hover:border-black"
          >
            <motion.div
              animate={{ x: isDark ? 24 : 0 }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              className="w-[22px] h-[22px] rounded-full bg-white shadow-sm flex items-center justify-center text-neutral-800"
            >
              {isDark ? <Sun size={12} className="text-amber-500" /> : <Moon size={12} />}
            </motion.div>
          </button>

        </div>

        {/* ================= MOBILE CONTROLS ================= */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Theme Toggle */}
          <button
            onClick={toggleTheme}
            type="button"
            aria-label="Toggle theme"
            className="w-8 h-8 rounded-full border border-[rgba(224,224,224,0.8)] bg-neutral-100 flex items-center justify-center text-neutral-800"
          >
            {isDark ? <Sun size={14} className="text-amber-500" /> : <Moon size={14} />}
          </button>

          {/* Mobile Resume Button */}
          <a
            href={PROFILE.resumeUrl || "/Dhakashnamoorthy_Designer.pdf"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={triggerResumeDownload}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black text-white text-xs font-medium"
          >
            <span>Resume</span>
            <Download size={12} className="text-cyan-400" />
          </a>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg border border-[rgba(224,224,224,0.63)] text-neutral-800 hover:bg-neutral-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

      </div>

      {/* ================= MOBILE DRAWER MENU ================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden border-b border-[rgba(224,224,224,0.63)] bg-white px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {[
                { name: 'Home', href: '/#hero' },
                { name: 'Projects', href: '/#projects' },
                { name: 'Services', href: '/#services' },
                { name: 'Process', href: '/#process-scroll' },
                { name: 'About', href: '/#about' }
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-display text-2xl uppercase font-bold text-neutral-800 hover:text-black py-2 border-b border-neutral-100 flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight size={18} className="text-neutral-400" />
                </Link>
              ))}
              
              <div className="pt-4 flex flex-col gap-4">
                <a
                  href={PROFILE.resumeUrl || "/Dhakashnamoorthy_Designer.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => {
                    triggerResumeDownload();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3.5 rounded-full bg-black text-white font-medium flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Download Resume</span>
                  <Download size={14} className="text-cyan-400" />
                </a>

                <div className="flex items-center justify-center gap-2 pt-2">
                  {SOCIAL_LINKS.map((s) => (
                    <NavbarSocialButton key={s.name} name={s.name} url={s.url} />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
