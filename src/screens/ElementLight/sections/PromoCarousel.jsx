import React, { useEffect, useMemo, useRef, useState } from "react";
import { HeaderSection } from "./HeaderSection/HeaderSection";
import { MainContentSection } from "./MainContentSection/MainContentSection";
import { FooterSection } from "./FooterSection/FooterSection";
import "./promo-carousel.css";

export const PromoCarousel = () => {
  const slides = useMemo(() => [
    { id: "header", node: <HeaderSection /> },
    { id: "main", node: <MainContentSection /> },
    { id: "footer", node: <FooterSection /> },
  ], []);

  const [idx, setIdx] = useState(0);
  const [viewportH, setViewportH] = useState();
  const viewportRef = useRef(null);
  const next = () => setIdx((i) => (i + 1) % slides.length);

  // autoplay
  useEffect(() => {
    const id = setInterval(next, 4000);
    return () => clearInterval(id);
  }, []);

  // measure active slide height so controls are not overlapped
  useEffect(() => {
    const measure = () => {
      const root = viewportRef.current;
      if (!root) return;
      const active = root.querySelector('.promo-slide--active');
      if (active && active.firstChild) {
        const h = active.firstChild.getBoundingClientRect().height;
        if (h && h !== viewportH) setViewportH(h);
      }
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [idx, viewportH]);

  return (
    <section className="promo-carousel" style={{ ['--controls-bottom']: '0px', ['--controls-gap']: '25px' }}>
      <div ref={viewportRef} className="promo-viewport" style={{ height: viewportH ? `${viewportH}px` : undefined }}>
        {slides.map((s, i) => {
          const n = slides.length;
          const prevIdx = (idx - 1 + n) % n;
          const nextIdx = (idx + 1) % n;
          const state = i === idx
            ? "promo-slide--active"
            : i === prevIdx
            ? "promo-slide--left"
            : i === nextIdx
            ? "promo-slide--right"
            : "promo-slide--far";
          return (
            <div key={s.id} className={`promo-slide ${state}`}>
              {s.node}
            </div>
          );
        })}
      </div>
      {/* controls removed per request */}
    </section>
  );
};

export default PromoCarousel;


