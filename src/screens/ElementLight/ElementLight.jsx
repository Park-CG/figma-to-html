import React, { useEffect, useRef, useState } from "react";
import { LyceumAutoTyping } from "./sections/LyceumAutoTyping";
import { OperatingHours } from "../../components/OperatingHours";
import { AnimatedBackdrop } from "../../components/AnimatedBackdrop";
import { ContentAreaSection } from "./sections/ContentAreaSection";
import { FooterSection } from "./sections/FooterSection/FooterSection";
import { HeaderSection } from "./sections/HeaderSection/HeaderSection";
import { MainContentSection } from "./sections/MainContentSection/MainContentSection";
import { PromoCarousel } from "./sections/PromoCarousel";
import { SidebarSection } from "./sections/SidebarSection/SidebarSection";
import { ParallaxPan } from "../../components/ParallaxPan";
import { TextContentSection } from "./sections/TextContentSection/TextContentSection";
import { Quote } from "../../components/Quote";

export const ElementLight = () => {
  const navigationItems = [
    {
      label: "ABOUT",
      width: "w-[87px]",
      textWidth: "w-[84px]",
      marginRight: "mr-[-21.00px]",
    },
    {
      label: "CLASS",
      width: "w-[89px]",
      textWidth: "w-[69px]",
      marginRight: "mr-[-4.00px]",
    },
    {
      label: "COMMUNICATION",
      width: "w-[198px]",
      textWidth: "w-[186px]",
      marginRight: "mr-[-12.00px]",
    },
  ];

  // Deprecated: contact display is handled by TextContentSection
  const contactInfo = [];

  const anchorIdsInOrder = [
    "anchor-image",
    "anchor-photo",
    "anchor-center",
  ];

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Responsive scaling for 1920px canvas
  const DESIGN_WIDTH = 1920;
  const CANVAS_HEIGHT = 5200;
  const contentRef = useRef(null);
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const viewportWidth = window.innerWidth;
      const nextScale = Math.min(viewportWidth / DESIGN_WIDTH, 1);
      setScale(nextScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="bg-white grid justify-items-center [align-items:start] w-screen"
      data-model-id="72:293"
    >
      {/* Fixed header outside of scaled content to avoid transform issues */}
      <header className="fixed top-0 left-0 w-full z-[100] bg-white/80 backdrop-blur-sm border-b border-black/5">
        <div className="max-w-[1920px] mx-auto flex items-center justify-between px-6 py-1">
          <div className="relative max-w-[84px] w-[84px] h-[84px] bg-[url(https://c.animaapp.com/8WnQ795G/img/lyceum@2x.png)] bg-cover bg-[50%_50%]" />

          <nav className="flex items-center gap-4" role="navigation" aria-label="Main navigation">
            {navigationItems.map((item, index) => (
              <button
                key={index}
                type="button"
                onClick={() => scrollToId(anchorIdsInOrder[index] || anchorIdsInOrder[anchorIdsInOrder.length - 1])}
                className={`px-3 py-2 font-m3-title-large-emphasized text-black hover:opacity-70 transition-opacity`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          <button className="text-sm font-medium hover:underline">Login</button>
        </div>
      </header>
      <div style={{ width: "100vw" }}>
        <div
          style={{
            width: Math.ceil(DESIGN_WIDTH * scale),
            height: Math.ceil(CANVAS_HEIGHT * scale),
            margin: "0 auto",
            position: "relative",
          }}
        >
          <div
            ref={contentRef}
            style={{
              width: DESIGN_WIDTH,
              height: CANVAS_HEIGHT,
              transform: `scale(${scale})`,
              transformOrigin: "top left",
            }}
          >
            <div className="bg-white w-[1920px] h-[1200px] relative">
        <ContentAreaSection />

        <div className="absolute w-[1920px] h-[2128px] top-[1680px] left-0">
          <div id="anchor-image" className="flex flex-col w-[1920px] items-start pt-[159px] pb-[152px] px-60 absolute top-0 left-0">
            <img
              className="absolute w-[1920px] h-[681px] top-0 left-0"
              alt="Background Image"
              src="https://c.animaapp.com/8WnQ795G/img/image.png"
            />

            <div className="relative w-full">
              <PromoCarousel />
            </div>
          </div>

          <div className="absolute w-[1920px] h-[1447px] top-[600px] left-0">
            <div className="w-[1920px] pt-[3px] pb-[1.8px] px-0 absolute top-[270px] left-0 flex flex-col items-center">
              <Quote>
              리체움은 폭넓은 학습 상황에서 균일한 교육 서비스를 제공합니다.
              </Quote>
            </div>

            <div className="flex w-[1940px] h-[561px] items-start absolute top-[562px] -left-2.5">
              <div className="flex flex-col h-[648px] items-start px-2.5 py-0 relative flex-1 grow mb-[-87.00px]">
                <div id="anchor-photo" className="flex flex-col h-[648px] items-start relative self-stretch w-full">
                  <ParallaxPan
                    src="/images/building.jpg"
                    alt="Vertical building glass facade"
                    height={648}
                    radius={7}
                    speed={1.2}
                    overscan={2.0}
                  />
                </div>
              </div>
            </div>

            <div id="anchor-center" className="flex w-[1940px] items-start absolute top-[1212px] -left-2.5">
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

              <a
                className="inline-flex items-center gap-2.5 pt-2.5 pb-[11.14px] px-[15px] absolute top-0 left-[910px] bg-white border border-solid border-black whitespace-nowrap leading-none align-middle"
                href="https://map.naver.com/p/search/%EB%A6%AC%EC%B2%B4%EC%9B%80%20%EC%98%81%EC%96%B4%ED%95%99%EC%9B%90/place/1186165201?placePath=/home?entry=pll&amp;from=nx&amp;fromNxList=true&amp;fromPanelNum=2&amp;timestamp=202509031306&amp;locale=ko&amp;svcName=map_pcv5&amp;searchText=%EB%A6%AC%EC%B2%B4%EC%9B%80%20%EC%98%81%EC%96%B4%ED%95%99%EC%9B%90&amp;searchType=place&amp;c=15.00,0,0,0,dh"
                rel="noopener noreferrer"
                target="_blank"
                aria-label="지도에서 보기"
              >
                <img
                  className="relative flex-[0_0_auto]"
                  alt="Map Icon"
                  src="https://c.animaapp.com/8WnQ795G/img/container.svg"
                />

                <span className="w-fit [font-family:'Noto_Sans_KR',Helvetica] font-bold text-black text-xs text-center leading-none whitespace-nowrap relative tracking-[0]">
                  지도에서 보기
                </span>
              </a>
            </div>

            <SidebarSection />
          </div>
        </div>

        <div className="flex flex-col w-[1920px] items-start px-[260px] py-5 top-[4584px] bg-[#f0f0e9] absolute left-0">
          <div className="w-[1920px] h-[79px] top-0 bg-[#f0f0e9] absolute left-0" />

          <div className="relative self-stretch w-full flex-[0_0_auto] mb-4">
            <OperatingHours />
          </div>
        </div>

        <footer className="flex flex-col max-w-[1440px] w-[1440px] items-center gap-5 pt-5 pb-0 px-5 absolute top-[6250px] left-[229px]">
          <div className="relative max-w-[1400px] w-full h-px border-t [border-top-style:solid] border-[#0000000d]" />

          <div className="flex w-[1440px] items-start relative flex-[0_0_auto] ml-[-20.00px] mr-[-20.00px]">
            <div className="relative w-[960px] h-[272.17px]">
              <div className="absolute w-[920px] h-[134px] top-5 left-5">
                <TextContentSection />

                {/* Contact info is now rendered by TextContentSection */}

                <div className="absolute w-[920px] h-[0px] top-[67px] left-0">
                  <div className="flex flex-col w-[920px] items-start pt-[15.8px] pb-[0.8px] px-0 absolute top-0 left-0">
                    <div className="relative w-fit mt-[-1.00px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                      
                    </div>
                  </div>

                  <div className="flex flex-col w-[920px] items-start pt-0 pb-[0.8px] px-0 absolute top-[0px] left-0">
                    <p className="w-fit mt-[-1.00px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap relative tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                      
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute w-[920px] h-px top-[194px] left-5 border-t [border-top-style:solid] border-black leading-none" />

              <div className="flex flex-col w-[920px] items-start pt-0 pb-[0.8px] px-0 absolute top-[234px] left-5">
                <p className="relative w-fit mt-[-1.00px] font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-none whitespace-nowrap [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]">
                  Copyright© 2025 DipThink. All rights reserved.
                </p>
              </div>
            </div>

            <img
              className="relative w-[480px]"
              alt="Footer Graphic"
              src="https://c.animaapp.com/8WnQ795G/img/container-2.svg"
            />
          </div>
        </footer>

        {/* Auto typing at original decorative position */}
        <div className="absolute top-[416px] left-1/2 -translate-x-1/2 w-auto h-auto">
          <div className="relative w-auto h-auto top-[69px] flex justify-center">
            <AnimatedBackdrop />
            <LyceumAutoTyping text="Lyceum English" durationMs={2000} showCursor={true} />
          </div>
        </div>

        {/* Removed in-content fixed header/nav; using overlay fixed header above */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
