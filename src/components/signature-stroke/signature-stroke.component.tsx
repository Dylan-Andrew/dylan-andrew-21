import { ReactNode, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import "./signature-stroke.css";

export interface StrokeStop {
  id: string;
  when: string;
  label: string;
  isNow?: boolean;
  children: ReactNode;
}

interface Geometry {
  width: number;
  height: number;
  d: string;
  dots: { x: number; y: number; isNow: boolean }[];
}

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * The site's signature: one sweeping stroke, drawn from the curve of the 2 in the
 * 21st mark, that draws itself down the page as the visitor scrolls. The text of
 * every stop is static and always readable; only the line moves.
 */
const SignatureStroke = ({
  stops,
  labelledBy,
  lead = false,
}: {
  stops: StrokeStop[];
  labelledBy?: string;
  /** Continue from the hero's stroke (Home). */
  lead?: boolean;
}) => {
  const wrapRef = useRef<HTMLDivElement>(null);
  const anchorRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const inkRef = useRef<SVGPathElement>(null);
  const graphiteRef = useRef<SVGPathElement>(null);
  const [geo, setGeo] = useState<Geometry | null>(null);
  const [progress, setProgress] = useState(() => (prefersReducedMotion() ? 1 : 0));
  const [length, setLength] = useState(0);
  // y → path length lookup, so the drawn tip tracks the reader's scroll position.
  const samples = useRef<{ y: number; len: number }[]>([]);

  const measure = useCallback(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;
    const box = wrap.getBoundingClientRect();
    const gutter = parseFloat(getComputedStyle(wrap).paddingLeft) || 96;
    const xs = [gutter * 0.3, gutter * 0.56];
    const dots = anchorRefs.current.map((el, i) => {
      const r = el?.getBoundingClientRect();
      return {
        x: xs[i % 2],
        y: r ? r.top - box.top + r.height / 2 : 0,
        isNow: Boolean(stops[i]?.isNow),
      };
    });
    if (!dots.length) return;
    const y0 = dots[0].y;
    const g = gutter;
    // With a lead-in, the line picks up exactly where the hero's stroke lands;
    // without one, it simply drops into the first stop.
    const start = lead ? { x: g * 0.02, y: y0 - 58 } : { x: dots[0].x, y: Math.max(0, y0 - 64) };
    let d = lead
      ? `M ${start.x} ${start.y} C ${start.x} ${y0 - 22}, ${dots[0].x} ${y0 - 30}, ${dots[0].x} ${y0}`
      : `M ${start.x} ${start.y} L ${dots[0].x} ${y0}`;
    for (let i = 1; i < dots.length; i++) {
      const a = dots[i - 1];
      const b = dots[i];
      const mid = (b.y - a.y) / 2;
      d += ` C ${a.x} ${a.y + mid}, ${b.x} ${b.y - mid}, ${b.x} ${b.y}`;
    }
    // Expose where the head starts so the hero's stroke can hand over to it.
    wrap.dataset.headX = String(start.x);
    wrap.dataset.headY = String(start.y);
    setGeo({ width: gutter, height: box.height, d, dots });
  }, [stops, lead]);

  useLayoutEffect(() => {
    measure();
    const wrap = wrapRef.current;
    if (!wrap) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(wrap);
    document.fonts?.ready.then(() => measure());
    return () => ro.disconnect();
  }, [measure]);

  useEffect(() => {
    const path = inkRef.current;
    if (!path) return;
    const total = path.getTotalLength();
    const pts: { y: number; len: number }[] = [];
    let maxY = -Infinity;
    for (let i = 0; i <= 240; i++) {
      const len = (total * i) / 240;
      maxY = Math.max(maxY, path.getPointAtLength(len).y);
      pts.push({ y: maxY, len });
    }
    samples.current = pts;
    setLength(total);
  }, [geo]);

  useEffect(() => {
    if (prefersReducedMotion()) {
      setProgress(1);
      return;
    }
    let frame = 0;
    const update = () => {
      frame = 0;
      const wrap = wrapRef.current;
      if (!wrap) return;
      const r = wrap.getBoundingClientRect();
      const target = window.innerHeight * 0.62;
      const p = (target - r.top) / Math.max(r.height, 1);
      setProgress(Math.min(1, Math.max(0, p)));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const tipY = geo ? progress * geo.height : 0;
  const drawn = (() => {
    if (!length) return 0;
    if (progress >= 1) return length;
    const hit = samples.current.find((pt) => pt.y >= tipY);
    return hit ? hit.len : length;
  })();
  const offset = length ? length - drawn : 0;
  const nowDot = geo?.dots.find((dot) => dot.isNow);
  const nowReached = nowDot ? tipY >= nowDot.y - 2 : false;

  return (
    <div className={`stroke${lead ? " stroke--lead" : ""}`} ref={wrapRef}>
      {geo && (
        <svg
          className="stroke__svg"
          width={geo.width}
          height={geo.height}
          viewBox={`0 0 ${geo.width} ${geo.height}`}
          aria-hidden="true"
          focusable="false"
        >
          <path className="stroke__track" d={geo.d} />
          <path
            ref={graphiteRef}
            className="stroke__graphite"
            d={geo.d}
            transform="translate(7 0)"
            style={length ? { strokeDasharray: length, strokeDashoffset: offset } : undefined}
          />
          <path
            ref={inkRef}
            className="stroke__ink"
            d={geo.d}
            style={length ? { strokeDasharray: length, strokeDashoffset: offset } : undefined}
          />
          {geo.dots.map((dot, i) =>
            dot.isNow ? (
              <path
                key={i}
                className={`stroke__now${nowReached ? " is-reached" : ""}`}
                d={`M ${dot.x + 16} ${dot.y - 30} L ${dot.x - 7} ${dot.y + 34}`}
                pathLength={1}
              />
            ) : (
              <circle
                key={i}
                className={`stroke__dot${tipY >= dot.y - 2 ? " is-reached" : ""}`}
                cx={dot.x}
                cy={dot.y}
                r={7}
              />
            ),
          )}
        </svg>
      )}
      <ol className="stroke__list" aria-labelledby={labelledBy}>
        {stops.map((stop, i) => (
          <li key={stop.id} className={`stroke__stop${stop.isNow ? " stroke__stop--now" : ""}`}>
            <p className="stroke__when">
              <span
                className="stroke__anchor"
                ref={(el) => {
                  anchorRefs.current[i] = el;
                }}
              >
                {stop.when}
              </span>
              <span className="stroke__label">{stop.label}</span>
            </p>
            <div className="stroke__body">{stop.children}</div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default SignatureStroke;
