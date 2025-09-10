import React from "react";
import { RevealOnScroll } from "../../../../components/RevealOnScroll";

export const FooterSection = () => {
  const sectionData = {
    title: "고등부",
    description: [
      "심화학습은 정확한 점검으로 완성됩니다.",
      "다양한 형식과 상황을 대비하여 실수없는",
      "결과를 기대할 수 있습니다. 적합한 계획과",
      "함께 학습자의 목표에 다다르도록 최선을",
      "다하는 투애티의 심화과정을 확인해보세요.",
    ],
    buttonText: "더 알아보기",
  };

  return (
    <section className="flex flex-col items-center p-5 relative flex-none opacity-[0.89]">
      <RevealOnScroll offsetY={40} durationMs={4000}>
      <div className="flex flex-col items-center p-[25px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="absolute w-[440px] h-[330px] top-0 left-1/2 -translate-x-1/2 bg-[#384d9c] rounded-[100px]" />

        <div className="flex flex-col items-center gap-[25.9px] pt-[19px] pb-[16.8px] px-0 relative self-stretch w-full flex-[0_0_auto]">
          <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
            <h2 className="relative self-stretch mt-[-1.00px] font-www-toat-co-kr-semantic-heading-3 font-[number:var(--www-toat-co-kr-semantic-heading-3-font-weight)] text-white text-[length:var(--www-toat-co-kr-semantic-heading-3-font-size)] text-center tracking-[var(--www-toat-co-kr-semantic-heading-3-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-heading-3-line-height)] [font-style:var(--www-toat-co-kr-semantic-heading-3-font-style)]">
              {sectionData.title}
            </h2>
          </header>

          <div className="flex flex-col items-center pt-0 pb-[0.89px] px-0 relative self-stretch w-full flex-[0_0_auto] opacity-80">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[16.8px]">
              {sectionData.description.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index < sectionData.description.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>

          <div className="flex flex-col items-center pt-[24.49px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <button
              className="inline-flex items-start justify-center pt-2.5 pb-[11.14px] px-[26px] relative flex-[0_0_auto] bg-white border border-solid border-black hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
              type="button"
              aria-label="더 알아보기 버튼"
            >
              <span className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
                {sectionData.buttonText}
              </span>
            </button>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
