import React from "react";
import { RevealOnScroll } from "../../../../components/RevealOnScroll";
import { Group9Card } from "../../../../components/figma/Group9Card";
import "../../../../components/figma/glow-rect.css";
import "../../../../components/figma/glow-button.css";

export const MainContentSection = () => {
  const contentData = {
    title: "중등부",
    description: [
      "다음 단계로의 성장은 디테일에 달려있습니다. 투애티의 모토와 같이 완벽을 추구하기위해서는 많은 장애물을 뛰어넘어야 합니다.",
      "다. 다양한 접근방식으로 준비 되어 있는투애티의 중급과정을 확인해보세요.",
    ],
    buttonText: "더 알아보기",
  };

  return (
    <section className="flex flex-col items-center p-5 relative flex-none opacity-[0.89]">
      <RevealOnScroll durationMs={3000}>
      <div className="glow-scope flex flex-col items-center p-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="absolute w-[440px] h-[330px] top-0 left-1/2 -translate-x-1/2 rounded-[100px] figma-rect-effect" />

        <div className="flex flex-col items-start gap-2.5 pt-[19px] pb-[16.8px] px-0 relative self-stretch w-full flex-[0_0_auto]">
          <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <h1 className="relative self-stretch mt-[-1.00px] font-www-toat-co-kr-semantic-heading-3 font-[number:var(--www-toat-co-kr-semantic-heading-3-font-weight)] text-[#1f2937] text-[length:var(--www-toat-co-kr-semantic-heading-3-font-size)] text-center tracking-[var(--www-toat-co-kr-semantic-heading-3-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-heading-3-line-height)] [font-style:var(--www-toat-co-kr-semantic-heading-3-font-style)]">
              {contentData.title}
            </h1>
          </header>

          <div className="flex flex-col items-center pt-[15.6px] pb-[0.69px] px-0 relative self-stretch w-full flex-[0_0_auto] opacity-80">
            <p className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-[#1f2937] text-sm text-center leading-[16.8px] relative tracking-[0]">
              다음 단계로의 성장은 디테일에 달려있습니
              <br />
              다. 투애티의 모토와 같이 완벽을 추구하기
              <br />
              위해서는 많은 장애물을 뛰어넘어야 합니
            </p>

            <p className="w-fit mt-[-0.51px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-[#1f2937] text-sm text-center leading-[16.8px] relative tracking-[0]">
              다. 다양한 접근방식으로 준비 되어 있는
              <br />
              투애티의 중급과정을 확인해보세요.
            </p>
          </div>

          <div className="flex flex-col items-center pt-[40.39px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <button
              className="glow-btn inline-flex items-start justify-center pt-2.5 pb-[11.14px] px-[26px] relative flex-[0_0_auto] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              type="button"
              aria-label="더 알아보기 버튼"
            >
              <span className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-white text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
                {contentData.buttonText}
              </span>
            </button>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
