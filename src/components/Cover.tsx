"use client";

import { useEffect, useRef } from "react";

/**
 * Landing hero with a cursor-driven image collage. As the pointer moves across
 * the hero, placeholder images "pop" in a trail behind the centered title.
 * Swap the files in /public/collage for real images (keep the same names, or
 * update this list).
 */
const COLLAGE = Array.from(
  { length: 16 },
  (_, i) => `/collage/photo-${String(i + 1).padStart(2, "0")}.jpg`,
);

export default function Cover() {
  const containerRef = useRef<HTMLElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const layer = layerRef.current;
    if (!container || !layer) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const POOL = 16;
    const nodes: HTMLImageElement[] = [];
    for (let i = 0; i < POOL; i++) {
      const img = document.createElement("img");
      img.className = "trail-img";
      img.decoding = "async";
      img.draggable = false;
      img.alt = "";
      img.src = COLLAGE[i % COLLAGE.length];
      layer.appendChild(img);
      nodes.push(img);
    }

    let slot = 0;
    let imgIdx = 0;
    let lastX = 0;
    let lastY = 0;
    let primed = false;
    const threshold = 78;

    const spawn = (x: number, y: number) => {
      const img = nodes[slot % POOL];
      slot++;
      imgIdx++;
      img.src = COLLAGE[imgIdx % COLLAGE.length];
      img.style.setProperty("--r", `${(Math.random() * 18 - 9).toFixed(1)}deg`);
      img.style.left = `${x}px`;
      img.style.top = `${y}px`;
      img.classList.remove("is-active");
      // force reflow so the animation restarts on reuse
      void img.offsetWidth;
      img.classList.add("is-active");
    };

    const onMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      if (!primed) {
        lastX = x;
        lastY = y;
        primed = true;
        return;
      }
      if (Math.hypot(x - lastX, y - lastY) > threshold) {
        spawn(x, y);
        lastX = x;
        lastY = y;
      }
    };

    container.addEventListener("pointermove", onMove);
    return () => {
      container.removeEventListener("pointermove", onMove);
      nodes.forEach((n) => n.remove());
    };
  }, []);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative overflow-hidden bg-ink text-paper"
    >
      <div ref={layerRef} className="trail-layer" aria-hidden="true" />

      <div className="relative z-10 mx-auto flex min-h-[82vh] max-w-6xl flex-col items-center justify-center gap-6 px-6 py-16 text-center">
        <span className="label text-paper/60">Product Manager &amp; Builder</span>
        <h1 className="heading-thin text-[18vw] leading-none md:text-[9rem]">
          Portfolio
        </h1>
        <p className="copy max-w-sm text-paper/70">
          Selected work, case studies, and two highlighted projects. Move your
          cursor to explore.
        </p>
        <span className="label text-paper/45">Peter Shi · Portfolio · 2026</span>
      </div>
    </section>
  );
}
