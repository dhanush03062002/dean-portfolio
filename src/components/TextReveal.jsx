import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * TextRevealPresets:
 * - "fade-in-blur": subtle blur + upward slide + fade (Framer editorial style)
 * - "blur": pure optical unblur
 * - "slide": vertical slide up + fade
 * - "scale": scale up + fade
 * - "fade": clean opacity fade
 */
const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    transition: { staggerChildren: 0.03, staggerDirection: -1 },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const presetVariants = {
  blur: {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: 'blur(12px)', opacity: 0 },
      visible: { filter: 'blur(0px)', opacity: 1 },
      exit: { filter: 'blur(12px)', opacity: 0 },
    },
  },
  fade: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
      exit: { opacity: 0 },
    },
  },
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      hidden: { filter: 'blur(8px)', opacity: 0, y: 16 },
      visible: { filter: 'blur(0px)', opacity: 1, y: 0 },
      exit: { filter: 'blur(8px)', opacity: 0, y: 16 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
    },
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
};

const defaultStaggerTimes = {
  char: 0.02,
  line: 0.1,
  word: 0.045,
};

/**
 * TextReveal
 * Responsive, scroll-triggered text reveal component powered by Framer Motion.
 * Triggers seamlessly when scrolled into view across all screen sizes.
 */
export function TextReveal({
  children,
  per = 'word',
  as = 'p',
  variants,
  className = '',
  preset = 'fade-in-blur',
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  once = true,
  viewport,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName = '',
  containerTransition,
  segmentTransition,
  style,
}) {
  if (typeof children !== 'string') {
    return <span className={className}>{children}</span>;
  }

  const MotionTag = motion[as] || motion.p;

  const base = presetVariants[preset] || {
    container: defaultContainerVariants,
    item: defaultItemVariants,
  };

  const stagger = (defaultStaggerTimes[per] || 0.045) / speedReveal;
  const baseDuration = 0.45 / speedSegment;

  const containerVars = {
    ...base.container,
    visible: {
      ...base.container.visible,
      transition: {
        delayChildren: delay,
        staggerChildren: stagger,
        ...containerTransition,
      },
    },
  };

  const itemVars = {
    ...base.item,
    visible: {
      ...(base.item.visible || {}),
      transition: {
        duration: baseDuration,
        ease: [0.16, 1, 0.3, 1],
        ...segmentTransition,
      },
    },
  };

  const computedVariants = variants
    ? {
        container: { ...containerVars, ...(variants.container || {}) },
        item: { ...itemVars, ...(variants.item || {}) },
      }
    : { container: containerVars, item: itemVars };

  // Viewport configuration for triggering the animation when scrolled into view
  const defaultViewport = {
    once: once,
    amount: 0.2,
    margin: '-20px',
  };

  const activeViewport = viewport || defaultViewport;

  // Split logic keeping words intact so typography wraps cleanly on mobile
  if (per === 'line') {
    const lines = children.split('\n');
    return (
      <AnimatePresence mode="popLayout">
        {trigger && (
          <MotionTag
            initial="hidden"
            whileInView="visible"
            viewport={activeViewport}
            exit="exit"
            variants={computedVariants.container}
            className={`block ${className}`}
            style={style}
            onAnimationComplete={onAnimationComplete}
            onAnimationStart={onAnimationStart}
          >
            {lines.map((line, idx) => (
              <motion.span
                key={idx}
                variants={computedVariants.item}
                className={`block ${segmentWrapperClassName}`}
              >
                {line}
              </motion.span>
            ))}
          </MotionTag>
        )}
      </AnimatePresence>
    );
  }

  // Words list for word or char reveal
  const words = children.trim().split(/\s+/);

  return (
    <AnimatePresence mode="popLayout">
      {trigger && (
        <MotionTag
          initial="hidden"
          whileInView="visible"
          viewport={activeViewport}
          exit="exit"
          variants={computedVariants.container}
          className={`inline-block ${className}`}
          style={style}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
        >
          {/* Accessible screen reader text */}
          <span className="sr-only">{children}</span>

          {per === 'word' ? (
            words.map((word, idx) => (
              <motion.span
                key={`${word}-${idx}`}
                aria-hidden="true"
                variants={computedVariants.item}
                className={`inline-block mr-[0.25em] last:mr-0 ${segmentWrapperClassName}`}
              >
                {word}
              </motion.span>
            ))
          ) : (
            // Character by character with word preservation so lines wrap responsively
            words.map((word, wIdx) => (
              <span
                key={`${word}-${wIdx}`}
                className="inline-block whitespace-nowrap mr-[0.25em] last:mr-0"
              >
                {word.split('').map((char, cIdx) => (
                  <motion.span
                    key={`${char}-${cIdx}`}
                    aria-hidden="true"
                    variants={computedVariants.item}
                    className={`inline-block ${segmentWrapperClassName}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))
          )}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}

export default TextReveal;
