import React from "react";

export const HeroSection = () => {
  const heroData = {
    title: "COMMUNICATION",
    description: [
      "리체움학원 블라블라",
      "모든 대화는 더 나은 서비스에 큰 도움이 됩니다.",
      "언제나 열린 마음으로 소통할 것을 약속드립니다.",
    ],
    backgroundImage: "https://c.animaapp.com/Z8KM1xq0/img/image-1.png",
  };

  return (
    <section
      className="flex flex-col w-[1920px] items-start absolute top-[2519px] left-0"
      role="banner"
    >
      <img
        className="absolute w-[1920px] h-[640px] top-0 left-0"
        alt="Communication section background"
        src={heroData.backgroundImage}
      />

      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex flex-col w-[800px] items-start relative flex-[0_0_auto]">
          <div className="flex flex-col min-h-[640px] items-start justify-center px-0 py-[210.5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="w-[800px] h-[640px] top-0 bg-[#f0f0e9] absolute left-0" />

            <div className="flex flex-col items-start gap-[31px] pt-5 pb-[21px] px-0 relative self-stretch w-full flex-[0_0_auto]">
              <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
                <h1 className="relative self-stretch mt-[-1.00px] font-www-toat-co-kr-semantic-heading-2 font-[number:var(--www-toat-co-kr-semantic-heading-2-font-weight)] text-black text-[length:var(--www-toat-co-kr-semantic-heading-2-font-size)] text-center tracking-[var(--www-toat-co-kr-semantic-heading-2-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-heading-2-line-height)] [font-style:var(--www-toat-co-kr-semantic-heading-2-font-style)]">
                  {heroData.title}
                </h1>
              </header>

              <div className="flex flex-col items-center pt-[20.5px] pb-[0.5px] px-0 relative self-stretch w-full flex-[0_0_auto]">
                <p className="self-stretch mt-[-1.00px] font-www-toat-co-kr-noto-sans-KR-regular font-[number:var(--www-toat-co-kr-noto-sans-KR-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-noto-sans-KR-regular-font-size)] text-center leading-[var(--www-toat-co-kr-noto-sans-KR-regular-line-height)] relative tracking-[var(--www-toat-co-kr-noto-sans-KR-regular-letter-spacing)] [font-style:var(--www-toat-co-kr-noto-sans-KR-regular-font-style)]">
                  {heroData.description.map((line, index) => (
                    <React.Fragment key={index}>
                      {line}
                      {index < heroData.description.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
