import React from "react";
import { RevealOnScroll } from "../../../../components/RevealOnScroll";
import { Group9Card } from "../../../../components/figma/Group9Card";
import "../../../../components/figma/glow-rect.css";
import "../../../../components/figma/glow-button.css";

export const HeaderSection = () => {
  const headerData = {
    title: "초등부",
    description:
      "영어의 시작은 언제나 어렵습니다. 투애티\n의 초등과정은 까다로울 수 있는 언어학습\n을 가장 안정적인 방법으로 아이들에게 전\n달합니다. 투애티의 자랑인 초등영어 커리\n큘럼을 확인해보세요.",
    buttonText: "더 알아보기",
  };

  return (
    <section className="flex flex-col items-center p-5 relative flex-none">
      <RevealOnScroll offsetY={40} durationMs={4000}>
      <div className="glow-scope flex flex-col items-center p-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="w-[440px] h-[330px] top-0 rounded-[100px] absolute left-1/2 -translate-x-1/2 figma-rect-effect" />

        <div className="flex flex-col items-center gap-[25.9px] pt-[19px] pb-[16.8px] px-0 relative self-stretch w-full flex-[0_0_auto]">
          <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-www-toat-co-kr-semantic-heading-3 font-[number:var(--www-toat-co-kr-semantic-heading-3-font-weight)] text-[#1f2937] text-[length:var(--www-toat-co-kr-semantic-heading-3-font-size)] text-center tracking-[var(--www-toat-co-kr-semantic-heading-3-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-heading-3-line-height)] [font-style:var(--www-toat-co-kr-semantic-heading-3-font-style)]">
              {headerData.title}
            </h1>
          </header>

          <div className="flex flex-col items-center pt-0 pb-[0.89px] px-0 relative self-stretch w-full flex-[0_0_auto] opacity-80">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-[#1f2937] text-sm text-center tracking-[0] leading-[16.8px]">
              {headerData.description.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < headerData.description.split("\n").length - 1 && (
                    <br />
                  )}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="flex flex-col items-center pt-[24.49px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <button
              className="glow-btn inline-flex items-start justify-center pt-2.5 pb-[11.14px] px-[26px] relative flex-[0_0_auto] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              type="button"
              aria-label="더 알아보기 버튼"
            >
              <span className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
                {headerData.buttonText}
              </span>
            </button>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
