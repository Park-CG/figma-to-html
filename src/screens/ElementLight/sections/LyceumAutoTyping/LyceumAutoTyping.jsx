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
  const [fullTextWidth, setFullTextWidth] = useState(0);
  const [textHeight, setTextHeight] = useState(128);
  const cursorWidth = 6;
  const horizontalPaddingLeft = 12;
  const horizontalPaddingRight = cursorWidth + 12;
  const verticalPadding = 16;

  useEffect(() => {
    let rafId;
    let cancelled = false;
    const startAnim = () => {
      const el = textRef.current;
      if (!el) return;
      const fullWidth = el.scrollWidth;
      const cs = getComputedStyle(el);
      const fontSize = parseFloat(cs.fontSize) || 110;
      const lineH = parseFloat(cs.lineHeight);
      const computedLineHeight = Number.isFinite(lineH) ? lineH : fontSize * 1.26;
      setTextHeight(Math.ceil(computedLineHeight + 24));
      setMaskWidth(0);
      setFullTextWidth(fullWidth);
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
      <div
        style={{
          position: "relative",
          display: "inline-block",
          width:
            (fullTextWidth
              ? fullTextWidth + horizontalPaddingLeft + horizontalPaddingRight
              : maskWidth + horizontalPaddingLeft + horizontalPaddingRight),
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: textHeight + verticalPadding * 2,
            width: Math.max(0, maskWidth + horizontalPaddingLeft + horizontalPaddingRight),
            overflow: "hidden",
            willChange: "width",
            paddingLeft: horizontalPaddingLeft,
            paddingRight: horizontalPaddingRight,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
          }}
        >
          <span
            ref={textRef}
            style={{
              fontFamily: "'Dancing Script', 'Great Vibes', Caveat, 'Apple SD Gothic Neo', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 200,
              lineHeight: "200px",
              letterSpacing: 8,
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
        {/* Invisible sizing box to stabilize container to full width/height */}
        <div
          aria-hidden
          style={{
            visibility: "hidden",
            paddingLeft: horizontalPaddingLeft,
            paddingRight: horizontalPaddingRight,
            paddingTop: verticalPadding,
            paddingBottom: verticalPadding,
            height: textHeight + verticalPadding * 2,
          }}
        >
          <span
            style={{
              fontFamily: "'Dancing Script', 'Great Vibes', Caveat, 'Apple SD Gothic Neo', Helvetica, sans-serif",
              fontWeight: 700,
              fontSize: 200,
              lineHeight: "200px",
              letterSpacing: 8,
              whiteSpace: "nowrap",
              display: "inline-block",
            }}
          >
            {text}
          </span>
        </div>
      </div>
    </div>
  );
};


