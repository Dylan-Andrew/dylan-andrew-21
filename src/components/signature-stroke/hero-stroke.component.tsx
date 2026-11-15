import { useLayoutEffect, useRef, useState } from "react";

/**
 * The opening of the signature stroke: it leaves from under the portrait and sweeps
 * down to where the timeline's stroke begins, so the line is part of the first view.
 * Drawn once on load; static under reduced motion.
 */
const HeroStroke = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [d, setD] = useState<string | null>(null);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      const svg = svgRef.current;
      const hero = svg?.parentElement;
      const portrait = hero?.querySelector(".hero__portrait");
      const stroke = document.querySelector<HTMLElement>(".stroke");
      if (!svg || !hero || !portrait || !stroke) return;
      const hb = svg.getBoundingClientRect();
      const pb = portrait.getBoundingClientRect();
      const sb = stroke.getBoundingClientRect();
      const headX = Number(stroke.dataset.headX ?? 0);
      const headY = Number(stroke.dataset.headY ?? 0);
      const w = hb.width;
      const startX = pb.left - hb.left + pb.width * 0.38;
      const startY = Math.max(0, pb.bottom - hb.top - 6);
      // Lands exactly where the timeline stroke's head begins, so the line is continuous.
      const endX = sb.left - hb.left + headX;
      const endY = sb.top - hb.top + headY;
      const h = Math.max(endY, startY) + 12;
      setSize({ w, h });
      if (window.innerWidth <= 960) {
        // Single column: run down the page margin beside the portrait and the heading,
        // clear of the text, then turn into the timeline's first stop.
        const x = Math.max(4, (pb.left - hb.left) / 2);
        const top = pb.top - hb.top + 24;
        setD(`M ${x} ${top} L ${x} ${endY - 64} C ${x} ${endY - 26}, ${endX} ${endY - 40}, ${endX} ${endY}`);
        return;
      }
      const midY = startY + (endY - startY) * 0.55;
      setD(
        `M ${startX} ${startY} C ${startX} ${midY}, ${endX} ${endY - (endY - startY) * 0.55}, ${endX} ${endY}`,
      );
    };
    measure();
    const ro = new ResizeObserver(measure);
    const hero = svgRef.current?.parentElement;
    if (hero) ro.observe(hero);
    const strokeEl = document.querySelector(".stroke");
    if (strokeEl) ro.observe(strokeEl);
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      className="hero-stroke"
      viewBox={size.w ? `0 0 ${size.w} ${size.h}` : undefined}
      style={size.h ? { height: size.h } : undefined}
      aria-hidden="true"
      focusable="false"
    >
      {d && (
        <>
          <path className="hero-stroke__graphite" d={d} transform="translate(7 0)" pathLength={1} />
          <path className="hero-stroke__ink" d={d} pathLength={1} />
        </>
      )}
    </svg>
  );
};

export default HeroStroke;
