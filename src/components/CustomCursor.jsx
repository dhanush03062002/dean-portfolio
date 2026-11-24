import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * CustomCursor — matches the Framer site's cursor behaviour:
 *  - Default: small black dot (8px) with a soft trailing ring (28px)
 *  - Hover over links/buttons: ring expands to 44px
 *  - Hover over project cards ([data-cursor="view"]): shows "Open" pill
 *  - Hover over drag elements: shows "Drag" pill
 *  - Hidden on mobile (touch devices)
 */
export default function CustomCursor() {
  const [cursorType, setCursorType] = useState('default'); // default | hover | view | drag | text
  const [cursorLabel, setCursorLabel] = useState('');
  const [visible, setVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const mx = useMotionValue(-100);
  const my = useMotionValue(-100);

  // Spring-follow for the outer ring (trails behind slightly)
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const ringX = useSpring(mx, springConfig);
  const ringY = useSpring(my, springConfig);

  useEffect(() => {
    // Don't mount cursor on touch-only devices
    if (window.matchMedia('(hover: none)').matches) {
      setIsTouch(true);
      return;
    }

    const onMove = (e) => {
      mx.set(e.clientX);
      my.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);

    // Delegate cursor type from hovered element
    const onOver = (e) => {
      const el = e.target.closest(
        'a, button, [role="button"], [data-cursor], input, textarea, select, label'
      );

      if (!el) {
        setCursorType('default');
        setCursorLabel('');
        return;
      }

      const dc = el.closest('[data-cursor]')?.dataset?.cursor;

      if (dc === 'view') {
        setCursorType('view');
        setCursorLabel(el.closest('[data-cursor]')?.dataset?.cursorLabel || 'Open');
      } else if (dc === 'drag') {
        setCursorType('drag');
        setCursorLabel('Drag');
      } else if (dc === 'text') {
        setCursorType('text');
        setCursorLabel('');
      } else {
        setCursorType('hover');
        setCursorLabel('');
      }
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    document.documentElement.addEventListener('mouseenter', onEnter);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      document.documentElement.removeEventListener('mouseleave', onLeave);
      document.documentElement.removeEventListener('mouseenter', onEnter);
    };
  }, [mx, my, visible]);

  if (isTouch) return null;

  return (
    <>
      {/* ── Dot (follows cursor exactly) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999]"
        style={{
          x: mx,
          y: my,
          translateX: '-50%',
          translateY: '-50%',
          borderRadius: '50%',
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: cursorType === 'default' ? 8 : 6,
          height: cursorType === 'default' ? 8 : 6,
          backgroundColor:
            cursorType === 'view' || cursorType === 'drag' ? 'transparent' : '#000',
          scale: cursorType === 'hover' ? 1.4 : 1,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      />

      {/* ── Ring / pill (spring-trails) ── */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998]"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          position: 'fixed',
          top: 0,
          left: 0,
          opacity: visible ? 1 : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        animate={
          cursorType === 'view' || cursorType === 'drag'
            ? {
                width: 'auto',
                height: 38,
                borderRadius: 50,
                backgroundColor: '#000',
                border: '1.5px solid transparent',
                scale: 1,
              }
            : cursorType === 'hover'
            ? {
                width: 44,
                height: 44,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(0,0,0,0.4)',
                scale: 1,
              }
            : {
                width: 28,
                height: 28,
                borderRadius: '50%',
                backgroundColor: 'transparent',
                border: '1.5px solid rgba(0,0,0,0.3)',
                scale: 1,
              }
        }
        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
      >
        {(cursorType === 'view' || cursorType === 'drag') && (
          <span
            style={{
              color: '#fff',
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: '0.04em',
              padding: '0 16px',
              fontFamily: '"Big Shoulders Display", sans-serif',
              textTransform: 'uppercase',
              userSelect: 'none',
            }}
          >
            {cursorLabel || (cursorType === 'drag' ? 'Drag' : 'Open')}
          </span>
        )}
      </motion.div>
    </>
  );
}
