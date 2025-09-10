import React, { useEffect, useMemo, useRef, useState } from "react";

export const LyceumAutoTyping = ({
  text = "Lyceum English",
  durationMs = 2000,
  delayMs = 500,
  className = "",
  showCursor = false,
}) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [maskWidth, setMaskWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(128);
  const cursorWidth = 6;

  useEffect(() => {
    let rafId;
    let cancelled = false;
    const startAnim = () => {
      const el = textRef.current;
      if (!el) return;
      const fullWidth = el.scrollWidth;
      const cs = getComputedStyle(el);
      const fontSize = parseFloat(cs.fontSize) || 128;
      const lineH = parseFloat(cs.lineHeight);
      const computedLineHeight = Number.isFinite(lineH) ? lineH : fontSize * 1.26;
      setTextHeight(Math.ceil(computedLineHeight + 8));
      setMaskWidth(0);
      const start = performance.now() + delayMs;
      const tick = (t) => {
        if (cancelled) return;
        if (t < start) {
          rafId = requestAnimationFrame(tick);
          return;
        }
        const progress = Math.min((t - start) / durationMs, 1);
        setMaskWidth(fullWidth * progress);
        if (progress < 1) rafId = requestAnimationFrame(tick);
      };
      rafId = requestAnimationFrame(tick);
    };
    (async () => {
      try {
        if (document.fonts && document.fonts.ready) {
          await document.fonts.ready;
        }
      } catch {}
      if (!cancelled) startAnim();
    })();
    return () => {
      cancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [text, durationMs, delayMs]);

  return (
    <div className={className} aria-label="Lyceum auto typing" ref={containerRef}>
      <div style={{ position: "relative", display: "inline-block" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: textHeight,
            width: Math.max(0, maskWidth),
            overflow: "hidden",
            willChange: "width",
          }}
        >
          <span
            ref={textRef}
            style={{
              fontFamily: "Caveat, 'Apple SD Gothic Neo', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 200,
              lineHeight: "200px",
              letterSpacing: 28.16,
              color: "#000",
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            {text}
          </span>
          {showCursor && (
            <span
              className="animate-blink"
              aria-hidden="true"
              style={{
                position: "absolute",
                right: 0,
                top: 0,
                width: 6,
                height: textHeight,
                background: "#000",
                pointerEvents: "none",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
};


