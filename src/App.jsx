import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import CustomCursor from './components/CustomCursor';
import GhostCursor from './components/GhostCursor';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import ProjectCorridor from './components/ProjectCorridor';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import ProcessStickyScroll from './components/ProcessStickyScroll';
import BottomExperience from './components/BottomExperience';
import CardStackScroll from './components/CardStackScroll';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './components/ProjectDetailPage';

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

        {/* ── Projects listing page ── */}
        <Route
          path="/projects"
          element={
            <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
              <Navbar onOpenContact={handleOpenContact} />
              <main>
                <ProjectsPage onOpenContact={handleOpenContact} />
              </main>
              <Footer onOpenContact={handleOpenContact} />
            </div>
          }
        />

        {/* ── Individual project detail page ── */}
        <Route
          path="/projects/:id"
          element={
            <div className="min-h-screen bg-white text-black dark:bg-neutral-950 dark:text-neutral-100 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
              <Navbar onOpenContact={handleOpenContact} />
              <main>
                <ProjectDetailWrapper onOpenContact={handleOpenContact} />
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
      {/* GhostCursor Smoke fluid mouse effect: active on all balance/remaining sections */}
      <GhostCursor
        color="#B497CF"
        size={56}
        trailLength={72}
        inertia={0.55}
        turbulence={0.7}
        drift={0.7}
        bloomStrength={0.9}
        grainIntensity={0.09}
        detail={1}
        brightness={1.2}
        bloomRadius={1}
        edgeIntensity={0}
        fadeDelayMs={1000}
        fadeDurationMs={1500}
        clickPuff
        intro={false}
        theme="light"
        excludeSelector="#hero"
        style={{
          position: 'fixed',
          inset: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
          zIndex: 9998,
        }}
      />
      <CustomCursor />
      <AppInner />
    </BrowserRouter>
  );
}
