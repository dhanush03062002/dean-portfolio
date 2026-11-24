import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { PROFILE, SOCIAL_LINKS } from '../assets/constants';
import TextReveal from './TextReveal';

function SocialIcon({ name }) {
  switch (name.toLowerCase()) {
    case 'dribbble':
      return (
        <svg className="w-3.5 h-3.5 fill-pink-500" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm9.885 11.44c-2.585-.45-5.068-.31-7.22.36-.188-.415-.386-.83-.594-1.242 3.32-1.528 5.86-3.81 7.23-6.62 1.488 2.062 2.374 4.595 2.374 7.332 0 .057-.003.113-.005.17h.215zm-2.07-7.986c-1.22 2.62-3.565 4.745-6.677 6.184-1.19-2.316-2.587-4.502-4.14-6.47 2.05-.885 4.316-1.378 6.697-1.378 1.48 0 2.898.204 4.238.583l-.118.081zm-12.75 1.554c1.55 1.942 2.94 4.102 4.114 6.388-3.708 1.134-7.534 1.258-9.034 1.272.58-3.08 2.38-5.71 4.92-7.66zm-5.02 9.61c1.53-.01 4.96-.12 8.35-1.17.65 1.44 1.24 2.94 1.74 4.47-4.32 1.51-8.15 1.12-8.87 1.03-.78-1.28-1.22-2.79-1.22-4.33zm11.96 7.27c-.55-1.5-1.15-2.96-1.78-4.37 1.97-.6 4.22-.72 6.57-.31-.5 1.96-1.55 3.68-2.98 4.96-1.07.64-2.29 1.06-3.6 1.18l1.79-1.46zm5.2-3.23c-2.15-.37-4.22-.26-6.06.29-.46-1.08-.94-2.17-1.44-3.26 2.02-.63 4.33-.76 6.72-.34.34.42.64.87.9 1.34l-.12 1.97z"/>
        </svg>
      );
    case 'x':
      return (
        <svg className="w-3.5 h-3.5 fill-black" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-3.5 h-3.5 stroke-rose-600 fill-none" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-3.5 h-3.5 fill-blue-600" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'facebook':
      return (
        <svg className="w-3.5 h-3.5 fill-blue-700" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.6 5H18V0h-3.808C10.597 0 9 1.583 9 4.615V8z"/>
        </svg>
      );
    default:
      return null;
  }
}

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
