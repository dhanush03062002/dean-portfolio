import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../assets/constants';
import TextReveal from './TextReveal';
import SocialIcon from './SocialIcon';

export default function Contact({ onOpenContact }) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="bg-white relative">
      {/* ── Section Title ── */}
      <div className="border-b border-[rgba(224,224,224,0.63)] px-6 sm:px-10 py-7 sm:py-8 bg-white">
        <TextReveal
          as="h2"
          preset="fade-in-blur"
          per="char"
          className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight text-black leading-none"
        >
          CONTACT ME
        </TextReveal>
      </div>

      {/* ── Title & Intro ── */}
      <div className="p-6 sm:p-10 border-b border-[rgba(224,224,224,0.63)]">
        <TextReveal
          as="h3"
          preset="fade-in-blur"
          per="word"
          className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-black mb-3"
        >
          Let's Work Together
        </TextReveal>
        <TextReveal
          as="p"
          preset="fade-in-blur"
          per="word"
          delay={0.1}
          className="font-sans text-neutral-500 text-sm sm:text-base max-w-lg leading-relaxed"
        >
          Have a project in mind? I'd love to hear about it. Drop me a message and I'll get back to you within 24 hours.
        </TextReveal>
      </div>

      {/* ── 2x2 Info Grid (Email, Phone, Socials) ── */}
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {/* Email Box */}
        <div className="p-6 sm:p-8 border-b sm:border-b-0 sm:border-r border-[rgba(224,224,224,0.63)] flex flex-col justify-between">
          <div>
            <strong className="font-sans text-xs font-bold text-black uppercase tracking-wider block mb-1.5">
              Email
            </strong>
            <a
              href={`mailto:${PROFILE.email}`}
              className="font-sans text-lg sm:text-xl font-bold text-neutral-900 hover:text-black transition-colors"
            >
              {PROFILE.email}
            </a>
          </div>

          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-1.5 mt-4 px-3.5 py-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 border border-[rgba(224,224,224,0.8)] text-xs font-semibold text-neutral-700 hover:text-black transition-all w-fit cursor-pointer shadow-2xs"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-500" />
                <span className="text-emerald-600 font-bold">Copied!</span>
              </>
            ) : (
              <>
                <Copy size={12} className="text-neutral-500" />
                <span>Click to copy</span>
              </>
            )}
          </button>
        </div>

        {/* Phone Box */}
        <div className="p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <strong className="font-sans text-xs font-bold text-black uppercase tracking-wider block mb-1.5">
              Phone
            </strong>
            <a
              href={`tel:${PROFILE.phone}`}
              className="font-sans text-lg sm:text-xl font-bold text-neutral-900 hover:text-black transition-colors"
            >
              {PROFILE.phone}
            </a>
          </div>

          <span className="text-xs text-neutral-400 mt-4 block">
            {PROFILE.location} • Monday — Friday, 9am — 6pm IST
          </span>
        </div>

        {/* Socials Box */}
        <div className="col-span-1 sm:col-span-2 p-6 sm:p-8 border-t border-[rgba(224,224,224,0.63)]">
          <strong className="font-sans text-xs font-bold text-black uppercase tracking-wider block mb-3">
            Socials
          </strong>

          <div className="flex flex-wrap items-center gap-2">
            {SOCIAL_LINKS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f2f2f2] hover:bg-neutral-200 border border-[rgba(224,224,224,0.8)] text-xs font-semibold text-neutral-800 hover:text-black transition-all shadow-2xs"
              >
                <SocialIcon name={s.name} />
                <span>{s.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Call to Action Box at Bottom ── */}
      <div className="border-t border-[rgba(224,224,224,0.63)] p-6 sm:p-10 flex flex-col items-start gap-5">
        <h4 className="font-sans text-lg sm:text-xl font-semibold text-black max-w-lg leading-snug">
          Prefer to schedule a call instead? Book a free 30-minute consultation and let's discuss your project.
        </h4>

        {/* "Let's Set Up a Time" Button */}
        <button
          onClick={onOpenContact}
          className="group inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-black text-white font-sans text-sm font-medium hover:bg-neutral-800 transition-all duration-300 shadow-md cursor-pointer hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Let's Set Up a Time</span>
          <div className="relative flex items-center justify-center w-4 h-4 rounded-full bg-neutral-800 border border-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform animate-pulse shadow-[0_0_8px_#02d4f5]"></span>
          </div>
        </button>
      </div>
    </section>
  );
}
