import React, { useEffect, useRef, useState } from "react";
import { HeroSection } from "./sections/HeroSection";
import { ValuesSection } from "./sections/ValuesSection";

const courseLevels = [
  {
    id: 1,
    title: "Beginner",
    description:
      "영어의 시작은 언제나 어렵습니다. 투애티의 초등과정은 까다로울 수 있는 언어학습을 가장 안정적인 방법으로 아이들에게 전달합니다. 투애티의 자랑인 초등영어 커리큘럼을 확인해보세요.",
    opacity: "opacity-[0.89]",
    gap: "gap-[25.9px]",
    paddingTop: "pt-[24.49px]",
  },
  {
    id: 2,
    title: "Intermediate",
    description:
      "다음 단계로의 성장은 디테일에 달려있습니다. 투애티의 모토와 같이 완벽을 추구하기 위해서는 많은 장애물을 뛰어넘어야 합니다. 다양한 접근방식으로 준비 되어 있는 투애티의 중급과정을 확인해보세요.",
    opacity: "opacity-[0.89]",
    gap: "gap-2.5",
    paddingTop: "pt-[40.39px]",
  },
  {
    id: 3,
    title: "Advanced",
    description:
      "심화학습은 정확한 점검으로 완성됩니다. 다양한 형식과 상황을 대비하여 실수없는 결과를 기대할 수 있습니다. 적합한 계획과 함께 학습자의 목표에 다다르도록 최선을 다하는 투애티의 심화과정을 확인해보세요.",
    opacity: "opacity-[0.89]",
    gap: "gap-[25.9px]",
    paddingTop: "pt-[24.49px]",
  },
];

const navigationItems = [
  { name: "ABOUT", width: "w-[71px]" },
  { name: "CLASS", width: "inline-flex" },
  { name: "Magazine", width: "w-[91px]" },
  { name: "COMMUNICATION", width: "w-[126px]" },
];

const footerNavItems = ["ABOUT", "CLASS", "Magazine", "COMMUNICATION"];

export const ElementLight = () => {
  const DESIGN_WIDTH = 1920;
  const CANVAS_HEIGHT = 7200;
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);
  const [scaledHeight, setScaledHeight] = useState(CANVAS_HEIGHT);
  const [intrinsicWidth, setIntrinsicWidth] = useState(DESIGN_WIDTH);

  useEffect(() => {
    const updateScaleAndHeight = () => {
      const viewportWidth = window.innerWidth;
      let measuredWidth = DESIGN_WIDTH;
      let measuredHeight = CANVAS_HEIGHT;
      if (contentRef.current) {
        const node = contentRef.current;
        const prevTransform = node.style.transform;
        node.style.transform = "none";
        const rect = node.getBoundingClientRect();
        measuredWidth = Math.max(node.scrollWidth, rect.width || DESIGN_WIDTH);
        measuredHeight = CANVAS_HEIGHT; // 절대 배치 요소 포함 보정
        node.style.transform = prevTransform;
      }

      const nextScale = Math.min((viewportWidth - 1) / measuredWidth, 1);
      setScale(nextScale);
      setIntrinsicWidth(measuredWidth);
      setScaledHeight(measuredHeight * nextScale);
    };

    updateScaleAndHeight();
    window.addEventListener("resize", updateScaleAndHeight);

    let resizeObserver;
    if (window.ResizeObserver && contentRef.current) {
      resizeObserver = new ResizeObserver(() => updateScaleAndHeight());
      resizeObserver.observe(contentRef.current);
    }

    return () => {
      window.removeEventListener("resize", updateScaleAndHeight);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
      data-model-id="72:293"
    >
      {/* Responsive scale wrapper: match layout width to scaled width and hide overflow */}
      <div style={{ width: "100%" }}>
        <div
          style={{
            width: Math.ceil(intrinsicWidth * scale),
            height: scaledHeight,
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div ref={contentRef}
            style={{
              width: intrinsicWidth,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
              margin: "0 auto",
            }}
          >
            <div className="bg-white w-[1920px] relative">
        <img
          className="absolute w-[1920px] h-[691px] top-[84px] left-0 object-cover"
          alt="Main"
          src="https://c.animaapp.com/Z8KM1xq0/img/main.svg"
        />

        <ValuesSection />

        <div className="absolute w-[1920px] h-[3159px] top-[3602px] left-0">
          <div className="flex flex-col w-[1920px] items-start pt-[159px] pb-[152px] px-60 absolute top-0 left-0">
            <img
              className="absolute w-[1920px] h-[681px] top-0 left-0"
              alt="Image"
              src="https://c.animaapp.com/Z8KM1xq0/img/image.png"
            />

            <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
              {courseLevels.map((level) => (
                <div
                  key={level.id}
                  className={`flex flex-col items-start p-5 relative flex-1 grow ${level.opacity}`}
                >
                  <div className="flex flex-col items-start p-[25px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="w-[440px] h-[330px] top-0 bg-[#384d9c] rounded-[100px] opacity-[0.89] absolute left-0" />

                    <div
                      className={`flex flex-col items-start ${level.gap} pt-[19px] pb-[16.8px] px-0 relative self-stretch w-full flex-[0_0_auto]`}
                    >
                      <div className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                        <div className="relative self-stretch mt-[-1.00px] font-www-toat-co-kr-semantic-heading-3 font-[number:var(--www-toat-co-kr-semantic-heading-3-font-weight)] text-white text-[length:var(--www-toat-co-kr-semantic-heading-3-font-size)] text-center tracking-[var(--www-toat-co-kr-semantic-heading-3-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-heading-3-line-height)] [font-style:var(--www-toat-co-kr-semantic-heading-3-font-style)]">
                          {level.title}
                        </div>
                      </div>

                      <div className="flex flex-col items-center pt-0 pb-[0.89px] px-0 relative self-stretch w-full flex-[0_0_auto] opacity-80">
                        <p className="relative self-stretch mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-[16.8px]">
                          {level.description.split("\n").map((line, index) => (
                            <React.Fragment key={index}>
                              {line}
                              {index <
                                level.description.split("\n").length - 1 && (
                                <br />
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>

                      <div
                        className={`flex flex-col items-center ${level.paddingTop} pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]`}
                      >
                        <button className="inline-flex items-start justify-center pt-2.5 pb-[11.14px] px-[26px] relative flex-[0_0_auto] bg-white border border-solid border-black hover:bg-gray-50 transition-colors">
                          <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
                            더 알아보기
                          </div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute w-[1920px] h-[1838px] top-[681px] left-0">
            <div className="w-[1920px] pt-[3px] pb-[1.8px] px-0 absolute top-[399px] left-0 flex flex-col items-center">
              <p className="w-fit mt-[-1.00px] font-www-toat-co-kr-semantic-heading-5 font-[number:var(--www-toat-co-kr-semantic-heading-5-font-weight)] text-black text-[length:var(--www-toat-co-kr-semantic-heading-5-font-size)] text-center leading-[var(--www-toat-co-kr-semantic-heading-5-line-height)] whitespace-nowrap relative tracking-[var(--www-toat-co-kr-semantic-heading-5-letter-spacing)] [font-style:var(--www-toat-co-kr-semantic-heading-5-font-style)]">
                투애티는 더 넓고 다양한 위치에서 동일한 서비스를 제공합니다.
              </p>
            </div>

            <div className="flex w-[1940px] items-start absolute top-[672px] -left-2.5">
              <div className="flex flex-col items-start px-2.5 py-0 relative flex-1 grow">
                <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative self-stretch w-full h-[430px] rounded-[7px] overflow-hidden">
                    <div className="w-[1880px] h-[430px] bg-[url(https://c.animaapp.com/Z8KM1xq0/img/3c45b31276631-jpg.png)] bg-cover bg-[50%_50%]" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex w-[1940px] items-start absolute top-[1212px] -left-2.5">
              <div className="flex flex-col items-start p-2.5 relative flex-1 grow">
                <div className="pt-[11px] pb-[5px] px-0 relative self-stretch w-full flex-[0_0_auto] flex flex-col items-center">
                  <div className="self-stretch mt-[-1.00px] font-www-toat-co-kr-semantic-heading-4 font-[number:var(--www-toat-co-kr-semantic-heading-4-font-weight)] text-black text-[length:var(--www-toat-co-kr-semantic-heading-4-font-size)] text-center leading-[var(--www-toat-co-kr-semantic-heading-4-line-height)] relative tracking-[var(--www-toat-co-kr-semantic-heading-4-letter-spacing)] [font-style:var(--www-toat-co-kr-semantic-heading-4-font-style)]">
                    연지센터
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-[1940px] h-[39px] top-[1284px] -left-2.5">
              <div className="flex w-[1940px] items-start absolute top-[19px] left-0">
                <div className="flex flex-col w-[475px] items-start px-2.5 py-0 relative">
                  <div className="flex flex-wrap items-start justify-center gap-[0px_0px] relative self-stretch w-full flex-[0_0_auto]">
                    <div className="relative w-[121px] h-px" />
                  </div>
                </div>
              </div>

              <button className="inline-flex items-center gap-2.5 pt-2.5 pb-[11.14px] px-[15px] absolute top-0 left-[910px] bg-white border border-solid border-black hover:bg-gray-50 transition-colors">
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Container"
                  src="https://c.animaapp.com/Z8KM1xq0/img/container.svg"
                />

                <div className="w-fit mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
                  지도에서 보기
                </div>
              </button>
            </div>
          </div>

          <HeroSection />
        </div>

        <div className="flex flex-col w-[1920px] items-start px-[260px] py-5 top-[6761px] bg-[#f0f0e9] absolute left-0">
          <div className="w-[1920px] h-[79px] top-0 bg-[#f0f0e9] absolute left-0" />

          <button className="flex items-center gap-2.5 pl-[666.91px] pr-[666.92px] pt-2.5 pb-[11.14px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-full border border-solid border-black hover:bg-gray-50 transition-colors">
            <img
              className="relative flex-[0_0_auto]"
              alt="Container"
              src="https://c.animaapp.com/Z8KM1xq0/img/container-1.svg"
            />

            <div className="w-fit mt-[-1.00px] mr-[-0.83px] [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-xs text-center leading-[17.1px] whitespace-nowrap relative tracking-[0]">
              문의하기
            </div>
          </button>
            </div>
          </div>
        </div>
      </div>

        <footer className="flex flex-col max-w-[1440px] w-[1440px] items-center gap-5 pt-5 pb-0 px-5 absolute top-[6840px] left-60">
          <div className="relative max-w-[1400px] w-full h-px border-t [border-top-style:solid] border-[#0000000d]" />

          <div className="flex w-[1440px] items-start relative flex-[0_0_auto] ml-[-20.00px] mr-[-20.00px]">
            <div className="relative w-[960px] h-[272.17px]">
              <div className="absolute w-[920px] h-[134px] top-5 left-5">
                <div className="absolute w-[920px] h-[50px] top-0 left-0">
                  <div className="absolute w-[185px] h-[17px] -top-0.5 left-0">
                    <div className="absolute w-[73px] h-[17px] top-0 left-0 font-www-toat-co-kr-semantic-strong font-[number:var(--www-toat-co-kr-semantic-strong-font-weight)] text-black text-[length:var(--www-toat-co-kr-semantic-strong-font-size)] tracking-[var(--www-toat-co-kr-semantic-strong-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-semantic-strong-font-style)]">
                      리체움학원
                    </div>

                    <p className="absolute w-[113px] h-[17px] top-0 left-[72px] [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
                      <span className="font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                        {" "}
                        |{" "}
                      </span>

                      <span className="font-www-toat-co-kr-noto-sans-KR-bold font-[number:var(--www-toat-co-kr-noto-sans-KR-bold-font-weight)] [font-style:var(--www-toat-co-kr-noto-sans-KR-bold-font-style)] tracking-[var(--www-toat-co-kr-noto-sans-KR-bold-letter-spacing)] leading-[var(--www-toat-co-kr-noto-sans-KR-bold-line-height)] text-[length:var(--www-toat-co-kr-noto-sans-KR-bold-font-size)]">
                        (주)DipThink
                      </span>
                    </p>
                  </div>

                  <div className="absolute w-[194px] h-[17px] top-8 left-0 font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                    Contact: 010-0000-0000
                  </div>
                </div>

                <div className="flex w-[920px] h-[17px] items-center gap-[2.84e-14px] pt-0 pb-[1.8px] px-0 absolute top-[50px] left-0">
                  <div className="relative w-fit mt-[-1.90px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap overflow-hidden text-ellipsis [display:-webkit-box] [-webkit-line-clamp:0] [-webkit-box-orient:vertical] [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                    E-mail:
                  </div>

                  <div className="inline-flex items-start px-0 py-px relative flex-[0_0_auto] mt-[-2.00px] mb-[-2.00px]">
                    <a
                      href="mailto:lyceumAC@naver.com"
                      className="relative w-fit mt-[-1.00px] [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-sm tracking-[0] leading-[16.8px] whitespace-nowrap hover:underline"
                    >
                      lyceumAC@naver.com
                    </a>
                  </div>
                </div>

                <div className="absolute w-[920px] h-[50px] top-[67px] left-0">
                  <div className="flex flex-col w-[920px] items-start pt-[15.8px] pb-[0.8px] px-0 absolute top-0 left-0">
                    <div className="relative w-fit mt-[-1.00px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                      Adress:
                    </div>
                  </div>

                  <div className="flex flex-col w-[920px] items-start pt-0 pb-[0.8px] px-0 absolute top-[33px] left-0">
                    <p className="w-fit mt-[-1.00px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap relative tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                      부산광역시 부산진구 성지로113번길 35 2층(초읍동)
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute w-[920px] h-px top-[194px] left-5 border-t [border-top-style:solid] border-black" />

              <div className="flex flex-col w-[920px] items-start pt-0 pb-[0.8px] px-0 absolute top-[234px] left-5">
                <p className="relative w-fit mt-[-1.00px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                  Copyright© 2025 DipThink. All rights reserved.
                </p>
              </div>
            </div>

            <div className="flex flex-col w-[480px] items-start pt-0 pb-32 px-0 relative">
              <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
                <nav className="flex flex-col w-60 items-start p-5 relative">
                  <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    {footerNavItems.map((item, index) => (
                      <div
                        key={index}
                        className="flex flex-col self-stretch w-full flex-[0_0_auto] items-start relative"
                      >
                        <div className="flex flex-col items-start pl-[15px] pr-0 py-[5px] relative self-stretch w-full flex-[0_0_auto]">
                          <a
                            href="#"
                            className="relative self-stretch mt-[-1.00px] [font-family:'Roboto_Mono',Helvetica] font-normal text-[#000000b2] text-sm tracking-[0] leading-[16.8px] hover:text-black transition-colors"
                          >
                            {item}
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </nav>

                <img
                  className="relative w-[120px]"
                  alt="Container"
                  src="https://c.animaapp.com/Z8KM1xq0/img/container-2.svg"
                />

                <img
                  className="relative w-[120px]"
                  alt="Container"
                  src="https://c.animaapp.com/Z8KM1xq0/img/container-3.svg"
                />
              </div>
            </div>
          </div>
        </footer>

        <header className="flex w-[1920px] items-start justify-center fixed top-0 left-0 z-50 bg-white/90 backdrop-blur-sm">
          <div className="flex w-[940px] items-center gap-4 pl-3.5 pr-[515.34px] py-0 relative">
            <div className="inline-flex items-center relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="inline-flex items-start relative flex-[0_0_auto]">
                  <div className="relative max-w-[84px] w-[84px] h-[84px] bg-[url(https://c.animaapp.com/Z8KM1xq0/img/toat@2x.png)] bg-cover bg-[50%_50%]" />
                </div>
              </div>
            </div>

            <nav className="inline-flex items-start justify-center relative flex-[0_0_auto]">
              <div className="flex h-10 items-start relative flex-1 grow">
                {navigationItems.map((item, index) => (
                  <div
                    key={index}
                    className={`flex ${item.width} justify-center items-start relative ${index === 3 ? "mr-[-35.06px]" : ""}`}
                  >
                    <div className="flex flex-col items-start pt-[8.7px] pb-[9.3px] px-3 relative flex-1 grow">
                      <a
                        href="#"
                        className="relative self-stretch mt-[-1.00px] [font-family:'Bebas_Neue',Helvetica] font-normal text-black text-lg tracking-[0] leading-[21.6px] hover:text-gray-600 transition-colors"
                      >
                        {item.name}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </nav>
          </div>

          <div className="flex flex-col w-[940px] items-end pt-[34.05px] pb-[33.15px] px-0 relative">
            <div className="inline-flex items-start pt-[2.09px] pb-[0.32px] px-0 relative flex-[0_0_auto]">
              <div className="inline-flex items-center relative flex-[0_0_auto]">
                <div className="inline-flex items-center relative flex-[0_0_auto] rounded-sm">
                  <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                    <a
                      href="#"
                      className="relative w-fit mt-[-1.00px] font-www-toat-co-kr-semantic-link font-[number:var(--www-toat-co-kr-semantic-link-font-weight)] text-black text-[length:var(--www-toat-co-kr-semantic-link-font-size)] tracking-[var(--www-toat-co-kr-semantic-link-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-link-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-semantic-link-font-style)] hover:text-gray-600 transition-colors"
                    >
                      Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </div>
    </div>
  );
};
