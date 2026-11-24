"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * CorridorPath
 * Geometry of the 3D perspective corridor. Every length is in `cqw`,
 * a percentage of the container's inline width, so the shape is
 * resolution-independent.
 */
const DEFAULT_PATH = {
  perspective: 30,
  cardWidth: 18,
  cardHeight: 25,
  cardRadius: 0.6,
  birthHeight: 2.6,
  exitHeight: 46,
  railBirth: -11,
  railExit: 44,
  fan: 3.3,
  turnBirth: 6,
  turnExit: 28,
  stops: 24,
};

/** Sample the path once so the CSS keyframes trace the curve smoothly. */
function keyframes(dir, name, p) {
  const steps = [];
  for (let s = 0; s <= p.stops; s++) {
    const u = s / p.stops;
    // Geometric in apparent size, so consecutive cards keep a constant size ratio
    const scale =
      (p.birthHeight / p.cardHeight) *
      Math.pow(p.exitHeight / p.birthHeight, u);
    const z = p.perspective * (1 - 1 / scale);
    const rail =
      p.railExit - (p.railExit - p.railBirth) * Math.pow(1 - u, p.fan);
    const turn = p.turnBirth + (p.turnExit - p.turnBirth) * u;
    steps.push(
      `${(u * 100).toFixed(2)}%{transform:translate3d(${(dir * rail).toFixed(
        2,
      )}cqw,0,${z.toFixed(2)}cqw) rotateY(${(-dir * turn).toFixed(2)}deg)}`,
    );
  }
  return `@keyframes ${name}{${steps.join("")}}`;
}

export function ImageStreamHero({
  images = [],
  cards = 9,
  speed = 18,
  axis = 55,
  path,
  children,
  className,
  style,
  ...props
}) {
  const id = React.useId().replace(/[^a-zA-Z0-9]/g, "");
  const right = `ish-r-${id}`;
  const left = `ish-l-${id}`;
  const card = `ish-c-${id}`;

  const p = React.useMemo(() => ({ ...DEFAULT_PATH, ...path }), [path]);

  const css = React.useMemo(
    () =>
      `${keyframes(1, right, p)}${keyframes(-1, left, p)}` +
      `@media(prefers-reduced-motion:reduce){.${card}{animation-play-state:paused}}`,
    [right, left, card, p],
  );

  return (
    <div
      className={cn("relative overflow-hidden select-none", className)}
      style={{ containerType: "inline-size", ...style }}
      {...props}
    >
      <style>{css}</style>

      {/* 3D Perspective Stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          perspective: `${p.perspective}cqw`,
          perspectiveOrigin: `50% ${axis}%`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{ transformStyle: "preserve-3d" }}
        >
          {[right, left].map((name) => {
            const offset = name === right ? 0 : Math.floor(Math.max(images.length, 1) / 2);
            return Array.from({ length: cards }, (_, i) => {
              const img = images[(i + offset) % Math.max(images.length, 1)];
              return (
                <div
                  key={`${name}-${i}`}
                  className={cn(card, "absolute overflow-hidden shadow-2xl")}
                  style={{
                    left: "50%",
                    top: `${axis}%`,
                    width: `${p.cardWidth}cqw`,
                    height: `${p.cardHeight}cqw`,
                    marginLeft: `${-p.cardWidth / 2}cqw`,
                    marginTop: `${-p.cardHeight / 2}cqw`,
                    borderRadius: `${p.cardRadius}cqw`,
                    animation: `${name} ${speed}s linear infinite`,
                    animationDelay: `${-(i * speed) / cards}s`,
                    backfaceVisibility: "hidden",
                    WebkitBackfaceVisibility: "hidden",
                    willChange: "transform",
                    border: "1px solid rgba(255, 255, 255, 0.28)",
                    boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.5), 0 0 15px rgba(255, 255, 255, 0.05)",
                  }}
                >
                  {img ? (
                    <img
                      src={img.src}
                      alt={img.alt || ""}
                      decoding="async"
                      className="h-full w-full object-cover select-none pointer-events-none"
                      draggable={false}
                    />
                  ) : null}
                </div>
              );
            });
          })}
        </div>
      </div>

      {/* Center content placed above the 3D corridor */}
      {children}
    </div>
  );
}

export default ImageStreamHero;
