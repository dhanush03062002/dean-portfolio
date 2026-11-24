import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../assets/constants';
import CornerCross from './CornerCross';
import TextReveal from './TextReveal';

// Extended project data with richer details for the case study pages
const PROJECT_DETAILS = {
  'factory-energy': {
    client: 'EnergyTech Solutions',
    year: '2024',
    duration: '6 weeks',
    services: ['UI/UX Design', 'IoT Dashboard', 'Data Visualization', 'Figma'],
    overview:
      'This project involved designing a real-time industrial dashboard for monitoring machine energy consumption in a modern factory setting. The goal was to create a clean, data-driven interface that allows plant operators to track machine status, performance metrics, power anomalies, and energy usage with ease.',
    challenge:
      'Industrial machines generate high-velocity telemetry streams. Factory technicians needed to quickly pinpoint power spikes, overheated machines, and efficiency dips without getting buried in raw numerical tables.',
    solution:
      'We designed an intuitive card-and-chart matrix with live status gauges, categorized machine groups, threshold alerts, and hourly kilowatt breakdowns. The dark/high-contrast UI ensures legibility across factory floor control monitors.',
    result:
      'Plant operators reported a 45% reduction in incident response time and successfully eliminated unnecessary idle power waste across 12 production lines.',
    color: '#0f172a',
    tags: ['UI/UX', 'Dashboard', 'IoT', 'Data Visualization'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_244ac4c2707a4db19f97a12ac0c4c489~mv2.png',
      'https://static.wixstatic.com/media/581991_5164bec886a54560a6cdbbdaa0e09e84~mv2.png',
    ],
  },
  'ai-business': {
    client: 'VentureScale AI',
    year: '2024',
    duration: '8 weeks',
    services: ['Product Design', 'Enterprise AI', 'SaaS Dashboard'],
    overview:
      'AI Business Development is an enterprise intelligence platform that transforms raw operational data into actionable revenue forecasts, team performance benchmarks, and automated strategic recommendations.',
    challenge:
      'Enterprise users often distrust AI insights when presented in a black-box format. The design needed to make machine learning predictions explainable, transparent, and effortlessly actionable.',
    solution:
      'Crafted a modular dashboard layout with conversational AI query modules, confidence scores on predictions, and drag-and-drop scenario modeling. Cohesive typography and neutral surfaces keep data focus paramount.',
    result:
      'Adopted by 15+ growth-stage startups, increasing monthly active decision-making workflows by over 210%.',
    color: '#0a0a0a',
    tags: ['Product Design', 'AI / SaaS', 'Enterprise UI', 'Analytics'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_3a189551d3fd49b895c8bdaa1857f95d~mv2.png',
      'https://static.wixstatic.com/media/581991_06e78859015f48bfa5d92c330c679f20~mv2.png',
    ],
  },
  'make-shift': {
    client: 'Make Shift Services',
    year: '2024',
    duration: '5 weeks',
    services: ['Mobile App Design', 'User Journey Mapping', 'Prototyping'],
    overview:
      'Make Shift is an on-demand service booking application connecting households with vetted local technicians, electricians, plumbers, and home repair specialists in real time.',
    challenge:
      'Service booking apps often overwhelm users during scheduling and price estimation. Users abandon flows when terms or arrival times feel uncertain.',
    solution:
      'Created an ultra-simple 3-step booking flow with upfront flat pricing, verified technician badges, interactive time-slot pickers, and live GPS map tracking.',
    result:
      'Achieved a 94% booking completion rate during beta testing and reduced customer support inquiries regarding arrival times by 60%.',
    color: '#1e1b4b',
    tags: ['Mobile App', 'iOS & Android', 'Service Booking', 'Figma'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_ee2aeebfadb848239fd35ca589f1f573~mv2.png',
      'https://static.wixstatic.com/media/581991_7da2af4ba73a48de87990db2176327a3~mv2.png',
    ],
  },
  'bookmywage': {
    client: 'Bookmywage Inc.',
    year: '2024',
    duration: '7 weeks',
    services: ['Fintech UI/UX', 'Mobile App', 'Design System'],
    overview:
      'Bookmywage is an earned wage access and shift scheduling mobile application that empowers hourly workers to track daily earnings, choose upcoming shifts, and access wages instantly.',
    challenge:
      'Financial applications can feel intimidating for hourly workers. The app needed to present complex calculations (tax withholdings, shift differentials) in a clean, friendly, and trustworthy manner.',
    solution:
      'Implemented clean balance cards with visual progress rings, transparent payout summaries, one-tap instant transfer buttons, and celebratory micro-interactions upon milestone achievements.',
    result:
      'Over 5,000 workers onboarded in the first quarter with an average app store rating of 4.9/5.',
    color: '#111827',
    tags: ['Fintech', 'Mobile UI', 'Design System', 'User Testing'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_6e7f546103414833a05096a3a9784c33~mv2.png',
      'https://static.wixstatic.com/media/581991_3f2a8803e0864c378e708382cb03de40~mv2.png',
    ],
  },
  'doctor-appointment': {
    client: 'CarePlus Health',
    year: '2024',
    duration: '6 weeks',
    services: ['Healthcare UX', 'Mobile App', 'Telemedicine'],
    overview:
      'A streamlined healthcare mobile application that allows patients to find nearby specialists, read verified credentials, schedule appointments, and join secure teleconsultation video calls.',
    challenge:
      'Healthcare apps must accommodate users of all ages and technical literacies under stressful medical circumstances. Accessibility and high contrast were paramount.',
    solution:
      'Designed high-contrast typography, prominent specialty search filters, one-click calendar booking, and clean digital prescription cards with medication reminder notifications.',
    result:
      'Patient no-show rates dropped by 38% and user satisfaction scored 4.9 out of 5 in initial clinical trials.',
    color: '#042f2e',
    tags: ['Healthcare', 'Telemedicine', 'Accessibility', 'Mobile UI'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_cd3ac05df3fc4ca0852142be490b92a5~mv2.png',
      'https://static.wixstatic.com/media/581991_4069eb9fd2ff4cb19a942246db0bbbb5~mv2.png',
    ],
  },
  'mymediater': {
    client: 'My Mediator App',
    year: '2024',
    duration: '8 weeks',
    services: ['Web Platform', 'UI/UX Design', 'Legal Tech'],
    overview:
      'Mymediater is an online dispute mediation platform enabling individuals and businesses to resolve commercial, civil, and community disputes through structured digital mediation rooms.',
    challenge:
      'Mediations require impartial, calm, and highly confidential environments. The interface had to instill fairness, neutrality, and clear milestone progress.',
    solution:
      'Constructed a multi-party workspace with private caucus rooms, shared evidence annotation boards, and an interactive agreement drafting timeline.',
    result:
      'Praised by co-founder Ananya Sharma for its intuitive usability and fresh visual clarity, facilitating over 100 resolved sessions in private pilot runs.',
    color: '#1e293b',
    tags: ['Legal Tech', 'Web App', 'UI/UX', 'Figma'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_06e78859015f48bfa5d92c330c679f20~mv2.png',
      'https://static.wixstatic.com/media/581991_0459d753f8c942fb962ea71c31ba13e2~mv2.png',
    ],
  },
  'quuts-app': {
    client: 'Quuts Media',
    year: '2024',
    duration: '4 weeks',
    services: ['Mobile App', 'Typography & Interaction', 'Social UI'],
    overview:
      'Quuts is a daily inspirational quotes and micro-writing social platform crafted for readers, authors, and creators who love elegant typography and mindful content.',
    challenge:
      'Social feeds are frequently cluttered with advertisements and cognitive noise. Quuts needed to feel like a tranquil, editorial reading retreat.',
    solution:
      'Created a gesture-driven swipe interface with curated font pairings, dynamic mood themes, customizable typographic layouts, and one-tap social story export.',
    result:
      'Featured as an editor’s pick with over 80,000 monthly quotes created and shared across Instagram and X.',
    color: '#18181b',
    tags: ['Social App', 'Typography', 'Interaction Design', 'Micro-interactions'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_4069eb9fd2ff4cb19a942246db0bbbb5~mv2.png',
      'https://static.wixstatic.com/media/581991_67e16292934f497e9a023d4d1a7f0e99~mv2.png',
    ],
  },
  'property-website': {
    client: 'PrimeLiving Real Estate',
    year: '2024',
    duration: '6 weeks',
    services: ['Web Design', 'Marketplace UI', 'Virtual Tours'],
    overview:
      'A luxury property showcase and real estate investment marketplace designed to help buyers and investors discover prime properties with expert support every step of the way.',
    challenge:
      'Real estate portals are typically overloaded with repetitive listings and low-grade photography. PrimeLiving required an architectural, high-end editorial look.',
    solution:
      'Crafted full-bleed gallery views, neighborhood demographic metrics, interactive floor plans, and direct booking for private agent consultations.',
    result:
      'Increased qualified high-net-worth inquiries by 140% and doubled time spent browsing property portfolios.',
    color: '#0f172a',
    tags: ['Real Estate', 'Web Design', 'Responsive UI', 'Figma'],
    additionalImages: [
      'https://static.wixstatic.com/media/581991_9b75f243b27d465ebce5701c83910525~mv2.png',
      'https://static.wixstatic.com/media/581991_0459d753f8c942fb962ea71c31ba13e2~mv2.png',
    ],
  },
};

export default function ProjectDetailPage({ projectId, onOpenContact }) {
  const project = PROJECTS.find((p) => p.id === projectId);
  const details = PROJECT_DETAILS[projectId];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h1 className="font-display text-6xl font-black uppercase">404</h1>
          <p className="text-neutral-500 mt-4">Project not found</p>
          <Link to="/projects" className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  const otherProjects = PROJECTS.filter((p) => p.id !== projectId).slice(0, 2);

  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero Banner with Project Image ── */}
      <section className="relative border-b border-[rgba(224,224,224,0.63)]">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)]">

          {/* Back link */}
          <div className="px-6 sm:px-12 pt-8 pb-6 border-b border-[rgba(224,224,224,0.63)]">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition-colors group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-0.5 transition-transform" />
              <span>All Projects</span>
            </Link>
          </div>

          {/* Large hero image */}
          <div className="relative w-full overflow-hidden aspect-[4/3] sm:aspect-[16/9] lg:aspect-[16/8]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none"></div>

            {/* Floating metadata */}
            <div className="absolute bottom-6 sm:bottom-8 left-5 sm:left-12 right-5 sm:right-12 flex items-end justify-between">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold uppercase tracking-wide text-neutral-800 mb-3">
                  {project.category}
                </span>
                <TextReveal
                  as="h1"
                  preset="fade-in-blur"
                  per="word"
                  className="font-display text-3xl sm:text-5xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight sm:leading-none"
                >
                  {project.title}
                </TextReveal>
              </div>
              <div className="hidden sm:flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium">
                  {details?.year}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Project Meta Tags Row ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)]">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] px-6 sm:px-12 py-6">
          <div className="flex flex-wrap items-center gap-3">
            {(details?.tags || project.tags).map((tag) => (
              <span
                key={tag}
                className="px-4 py-1.5 rounded-full border border-[rgba(224,224,224,0.8)] text-xs font-semibold uppercase tracking-wide text-neutral-700 bg-neutral-50"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Main Content: Overview + Details ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)]">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)]">
          <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(224,224,224,0.63)]">

            {/* Left: Project details sidebar */}
            <div className="px-6 sm:px-10 py-10 space-y-8">
              <CornerCross position="top-right" />

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Client</p>
                <p className="font-display text-lg font-bold uppercase">{details?.client || project.title}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Year</p>
                <p className="font-display text-lg font-bold uppercase">{details?.year || project.year}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Duration</p>
                <p className="font-display text-lg font-bold uppercase">{details?.duration || '6 weeks'}</p>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-neutral-400 mb-2">Services</p>
                <ul className="space-y-1">
                  {(details?.services || project.tags).map((s) => (
                    <li key={s} className="font-sans text-sm font-medium text-neutral-800">— {s}</li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenContact}
                className="group w-full flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-black text-white font-medium text-sm hover:bg-neutral-800 transition-all shadow-md cursor-pointer hover:scale-[1.02]"
              >
                <span>Request Similar Project</span>
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

            {/* Right: Overview + Challenge + Solution (2 col span) */}
            <div className="lg:col-span-2 px-6 sm:px-10 py-10 space-y-10">

              <div>
                <h2 className="font-display text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">Overview</h2>
                <p className="font-sans text-base sm:text-lg text-neutral-700 leading-relaxed">
                  {details?.overview || project.description}
                </p>
              </div>

              {details?.challenge && (
                <div>
                  <h2 className="font-display text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">The Challenge</h2>
                  <p className="font-sans text-base text-neutral-700 leading-relaxed">{details.challenge}</p>
                </div>
              )}

              {details?.solution && (
                <div>
                  <h2 className="font-display text-xs font-bold uppercase tracking-widest text-neutral-400 mb-4">The Solution</h2>
                  <p className="font-sans text-base text-neutral-700 leading-relaxed">{details.solution}</p>
                </div>
              )}

              {details?.result && (
                <div
                  className="p-6 rounded-2xl border border-[rgba(224,224,224,0.8)]"
                  style={{ background: details.color || '#f9f9f9' }}
                >
                  <p className="text-xs font-bold uppercase tracking-widest mb-3"
                    style={{ color: details.color === '#0a0a0a' || details.color === '#111111' ? '#888' : '#999' }}>
                    Result
                  </p>
                  <p className="font-sans text-base font-medium leading-relaxed"
                    style={{ color: details.color === '#0a0a0a' || details.color === '#111111' ? '#fff' : '#1a1a1a' }}>
                    {details.result}
                  </p>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ── Additional Project Images ── */}
      {details?.additionalImages && (
        <section className="border-b border-[rgba(224,224,224,0.63)]">
          <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] p-6 sm:p-10">
            <h2 className="font-display text-xs font-bold uppercase tracking-widest text-neutral-400 mb-6">Project Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {details.additionalImages.map((img, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="overflow-hidden"
                  style={{ borderRadius: '20px', aspectRatio: '4/3' }}
                >
                  <img
                    src={img}
                    alt={`${project.title} detail ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-500"
                    style={{ borderRadius: '20px' }}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── Other Projects ── */}
      <section className="border-b border-[rgba(224,224,224,0.63)]">
        <div className="max-w-[1400px] mx-auto border-x border-[rgba(224,224,224,0.63)] px-6 sm:px-10 py-10">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl sm:text-4xl font-black uppercase tracking-tight">Other Projects</h2>
            <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-500 hover:text-black transition-colors group">
              <span>View all</span>
              <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {otherProjects.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-cursor="view"
                data-cursor-label="Open"
              >
                <Link
                  to={`/projects/${p.id}`}
                  className="group block overflow-hidden"
                  style={{ borderRadius: '24px', aspectRatio: '4/3' }}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      style={{ borderRadius: '24px' }}
                    />
                    <div
                      className="absolute inset-0 flex items-end p-5"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)',
                        borderRadius: '24px',
                      }}
                    >
                      <div className="flex items-end justify-between w-full">
                        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase text-white">{p.title}</h3>
                        <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <ArrowUpRight size={14} className="text-white" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
