import React from "react";
import { RevealOnScroll } from "../../../components/RevealOnScroll";
import "../../../components/figma/glow-rect.css";
import "../../../components/figma/responsive.css";
import "../../../components/figma/glow-button.css";

export const PromoSection = ({
  title,
  description,
  buttonText = "더 알아보기",
  glow = true,
  useContainer = false, // false: for 3-column row usage
  descAlign = "left", // left | center | right
  measure = 640, // px (number) or CSS string like '60ch'
}) => {
  const lines = Array.isArray(description)
    ? description
    : String(description || "").split("\n");

  const sectionClass = useContainer
    ? "container-1920 section-pad-y flex flex-col items-center relative flex-none"
    : "flex flex-col items-center p-5 relative flex-none";

  const textAlignClass = descAlign === "right" ? "text-right" : descAlign === "center" ? "text-center" : "text-left";

  return (
    <section className={sectionClass}>
      <RevealOnScroll offsetY={40} durationMs={3000}>
        <div className="glow-scope flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
          {glow && (
            <div className="absolute w-[440px] h-[330px] top-0 left-1/2 -translate-x-1/2 rounded-[100px] figma-rect-effect" />
          )}

          <div className="flex flex-col items-center gap-[24px] pt-[19px] pb-[16.8px] px-0 relative self-stretch w-full flex-[0_0_auto] min-h-[300px]">
            <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
              <h2 className="relative self-stretch mt-[10.00px] font-www-toat-co-kr-semantic-heading-3 font-[number:var(--www-toat-co-kr-semantic-heading-3-font-weight)] text-[#1f2937] text-[length:var(--www-toat-co-kr-semantic-heading-3-font-size)] text-center tracking-[var(--www-toat-co-kr-semantic-heading-3-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-heading-3-line-height)] [font-style:var(--www-toat-co-kr-semantic-heading-3-font-style)]">
                {title}
              </h2>
            </header>

            <div className="flex flex-col items-center pt-0 pb-[0.89px] px-0 relative self-stretch w-full flex-[0_0_auto] opacity-80">
              <p
                className={`relative mx-auto mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-[#1f2937] text-sm ${textAlignClass} tracking-[0] leading-[16.8px]`}
                style={{ maxWidth: measure, textWrap: "balance" }}
              >
                {lines.map((line, idx) => (
                  <React.Fragment key={idx}>
                    {line}
                    {idx < lines.length - 1 && <br />}
                  </React.Fragment>
                ))}
              </p>
            </div>

            <div className="flex flex-col items-center mt-auto pt-4 pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
              <button
                className="glow-btn inline-flex items-start justify-center pt-2.5 pb-[11.14px] px-[26px] relative flex-[0_0_auto] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                type="button"
                aria-label="더 알아보기 버튼"
              >
                <span className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
                  {buttonText}
                </span>
              </button>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default PromoSection;


