import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import TubesCursor from './components/TubesCursor';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectCorridor from './components/ProjectCorridor';
import AboutSection from './components/AboutSection';
import TechSkills from './components/TechSkills';
import Services from './components/Services';
import ProcessStickyScroll from './components/ProcessStickyScroll';
import BottomExperience from './components/BottomExperience';
import CardStackScroll from './components/CardStackScroll';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

// ── Lazy-loaded routes — only downloaded when user navigates there ────────────
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./components/ProjectDetailPage'));

// ── Minimal loading fallback ───────────────────────────────────────────────────
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 rounded-full border-2 border-neutral-200 border-t-black dark:border-t-white animate-spin" />
        <span className="text-xs font-bold uppercase tracking-widest text-neutral-400">Loading…</span>
      </div>
    </div>
  );
}

// ─── Project detail wrapper — reads :id from URL ─────────────────────────────
function ProjectDetailWrapper({ onOpenContact }) {
  const { id } = useParams();
  return <ProjectDetailPage projectId={id} onOpenContact={onOpenContact} />;
}

// ─── Inner app — lives inside BrowserRouter so hooks can use useLocation ──────
function AppInner() {
  useLenis(); // smooth scroll + hash routing support
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <>
      <Routes>

        {/* ── Home page ── */}
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
              <Navbar onOpenContact={handleOpenContact} />
              <main>
                <Hero onOpenContact={handleOpenContact} />
                <Projects />
                <AboutSection />
                <TechSkills />
                <ProjectCorridor />
                <Services onOpenContact={handleOpenContact} />
                <ProcessStickyScroll onOpenContact={handleOpenContact} />
                <BottomExperience onOpenContact={handleOpenContact} />
                <CardStackScroll />
              </main>
              <Footer onOpenContact={handleOpenContact} />
            </div>
          }
        />

        {/* ── Projects listing page — lazy loaded ── */}
        <Route
          path="/projects"
          element={
            <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
              <Navbar onOpenContact={handleOpenContact} />
              <main>
                <Suspense fallback={<PageLoader />}>
                  <ProjectsPage onOpenContact={handleOpenContact} />
                </Suspense>
              </main>
              <Footer onOpenContact={handleOpenContact} />
            </div>
          }
        />

        {/* ── Individual project detail page — lazy loaded ── */}
        <Route
          path="/projects/:id"
          element={
            <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
              <Navbar onOpenContact={handleOpenContact} />
              <main>
                <Suspense fallback={<PageLoader />}>
                  <ProjectDetailWrapper onOpenContact={handleOpenContact} />
                </Suspense>
              </main>
              <Footer onOpenContact={handleOpenContact} />
            </div>
          }
        />

        {/* ── 404 ── */}
        <Route
          path="*"
          element={
            <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black font-sans">
              <h1 className="font-display text-8xl font-black uppercase">404</h1>
              <p className="text-neutral-500 mt-4 text-lg">Page not found</p>
              <a
                href="/"
                className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black text-white text-sm font-medium hover:bg-neutral-800 transition-colors"
              >
                Back Home
              </a>
            </div>
          }
        />

      </Routes>

      {/* Global Contact Modal — shared across all routes */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </>
  );
}

// ─── Root — wraps everything in BrowserRouter ─────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      {/* 3D Neon Tubes mouse cursor effect */}
      <TubesCursor />
      <CustomCursor />
      <AppInner />
    </BrowserRouter>
  );
}
