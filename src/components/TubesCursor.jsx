import React, { useEffect, useRef } from 'react';

const randomColors = (count) =>
  new Array(count)
    .fill(0)
    .map(() => '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));

/**
 * Full-viewport 3D neon tubes cursor overlay powered by threejs-components.
 * Renders with a transparent WebGL canvas and pointer-events: none so it
 * never blocks page interactions. Clicking anywhere randomizes tube colors.
 */
export default function TubesCursor({
  colors = ['#f967fb', '#53bc28', '#6958d5'],
  lightColors = ['#83f36e', '#fe8a2e', '#ff008a', '#60aed5'],
  lightIntensity = 200,
  enableClickInteraction = true,
  zIndex = 9998,
}) {
  const canvasRef = useRef(null);
  const tubesRef = useRef(null);

  useEffect(() => {
    let mounted = true;

    const initTubes = async () => {
      if (!canvasRef.current) return;

      try {
        const module = await import(
          /* @vite-ignore */
          'https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js'
        );
        const createTubesCursor = module.default;

        if (!mounted || !canvasRef.current) return;

        const app = createTubesCursor(canvasRef.current, {
          // Disable post-processing bloom so the WebGL canvas keeps alpha: true
          // transparency instead of painting an opaque black background over the page.
          bloom: false,
          tubes: {
            colors,
            lights: {
              intensity: lightIntensity,
              colors: lightColors,
            },
          },
        });

        app.three?.renderer?.setClearAlpha?.(0);
        tubesRef.current = app;
      } catch (error) {
        console.error('Failed to load TubesCursor:', error);
      }
    };

    initTubes();

    const handleClick = () => {
      if (!enableClickInteraction || !tubesRef.current?.tubes) return;
      tubesRef.current.tubes.setColors(randomColors(3));
      tubesRef.current.tubes.setLightsColors(randomColors(4));
    };

    if (enableClickInteraction) {
      window.addEventListener('click', handleClick);
    }

    return () => {
      mounted = false;
      if (enableClickInteraction) {
        window.removeEventListener('click', handleClick);
      }
      tubesRef.current?.dispose?.();
      tubesRef.current = null;
    };
  }, [enableClickInteraction, lightIntensity]);

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex,
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ touchAction: 'none', pointerEvents: 'none' }}
      />
    </div>
  );
}
