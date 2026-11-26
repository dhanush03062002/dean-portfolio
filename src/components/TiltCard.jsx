import React, { useRef } from 'react';

/**
 * 3D Perspective Tilt + Mouse-Tracking Radial Glow Card.
 * Based on the Auth0 JWT Handbook 3D card effect:
 * perspective(1500px) + scale3d + rotate3d + dynamic radial-gradient glow.
 */
export default function TiltCard({
  children,
  className = '',
  style = {},
  scale = 1.05,
  tiltStrength = 2,
  glowRadiusClass = 'rounded-[inherit]',
  onClick,
  ...rest
}) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);
  const boundsRef = useRef(null);

  const handleMouseEnter = () => {
    if (!cardRef.current) return;
    boundsRef.current = cardRef.current.getBoundingClientRect();
    cardRef.current.style.transitionDuration = '150ms';
  };

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card) return;

    const bounds = boundsRef.current || card.getBoundingClientRect();
    const leftX = e.clientX - bounds.x;
    const topY = e.clientY - bounds.y;
    const center = {
      x: leftX - bounds.width / 2,
      y: topY - bounds.height / 2,
    };
    const distance = Math.max(1, Math.sqrt(center.x ** 2 + center.y ** 2));

    card.style.transform = `
      perspective(1500px)
      scale3d(${scale}, ${scale}, ${scale})
      rotate3d(
        ${center.y / 100},
        ${-center.x / 100},
        0,
        ${Math.log(distance) * tiltStrength}deg
      )
    `;

    if (glow) {
      glow.style.opacity = '1';
      glow.style.backgroundImage = `
        radial-gradient(
          circle at
          ${center.x * 2 + bounds.width / 2}px
          ${center.y * 2 + bounds.height / 2}px,
          #ffffff55,
          #0000000f
        )
      `;
    }
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const glow = glowRef.current;
    boundsRef.current = null;

    if (card) {
      card.style.transitionDuration = '300ms';
      card.style.transform = '';
    }
    if (glow) {
      glow.style.opacity = '0';
      glow.style.backgroundImage = '';
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative transition-[transform,box-shadow] duration-300 ease-out will-change-transform ${className}`}
      style={{ transformStyle: 'preserve-3d', ...style }}
      {...rest}
    >
      {children}

      {/* Dynamic mouse-tracking radial glow overlay */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-300 ${glowRadiusClass}`}
      />
    </div>
  );
}
