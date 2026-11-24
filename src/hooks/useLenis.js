import { useEffect } from 'react';
import Lenis from 'lenis';
import { useLocation } from 'react-router-dom';

export default function useLenis() {
  const location = useLocation();

  // ── Lenis smooth scroll — active on ALL pages ──────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.6,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [location.pathname]); // restart lenis fresh on every route change

  // ── Hash anchor + route-change scroll behaviour ────────────────────────────
  useEffect(() => {
    if (location.hash) {
      // Scroll to in-page anchor (#projects, #about etc.)
      const id = location.hash.replace('#', '');
      const tryScroll = (attempt = 0) => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else if (attempt < 5) {
          setTimeout(() => tryScroll(attempt + 1), 100);
        }
      };
      setTimeout(() => tryScroll(), 50);
    } else {
      // No hash — go to top on route change
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [location.pathname, location.hash]);
}
