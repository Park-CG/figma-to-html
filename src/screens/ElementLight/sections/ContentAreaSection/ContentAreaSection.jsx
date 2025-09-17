import React from "react";

export const ContentAreaSection = () => {
  return (
    <section className="flex flex-col w-[1410px] items-start gap-2.5 pt-[19px] pb-0 px-0 absolute top-[1251px] left-[255px]">

      <header className="flex flex-col items-center relative self-stretch w-full flex-[0_0_auto]">
        <h2 className="relative self-stretch mt-[-1.00px] [font-family:'Apple_SD_Gothic_Neo-Bold',Helvetica] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#5b7cfa] via-[#59b1ff] to-[#58d6a3] text-4xl text-center tracking-[0] leading-[43.2px]">
          CURRICULUM
        </h2>
        <div className="mx-auto mt-2 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#5b7cfa]/80 via-[#59b1ff]/80 to-[#58d6a3]/80" />
      </header>

      <div className="flex flex-col items-center pt-[15.79px] pb-[0.8px] px-0 relative self-stretch w-full flex-[0_0_auto]">
        <p
          className="relative mx-auto mt-[-1.00px] [font-family:'Noto_Sans_KR',Helvetica] font-normal text-[#4b5563] text-base text-center tracking-[0] leading-[1.7]"
          style={{ maxWidth: "60ch", textWrap: "balance" }}
        >
          리체움의 섬세한 교육 과정은 영어에 한 걸음 더 다가가려는 학생들에게 다양한 학습 경험을 선물합니다.
        </p>
      </div>
    </section>
  );
};
