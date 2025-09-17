import React from "react";
import { PromoSection } from "../PromoSection";

export const MainContentSection = () => (
  <PromoSection
    title="중등부"
    description={
      "진정한 발전은 꼼꼼함에서 시작됩니다. 리체움의 철학처럼 최고를 목표로 하려면 여러 과제를 해결해야 합니다. 폭넓은 학습전략으로 구성된 리체움의 중급프로그램을 경험해보세요."
    }
    buttonText="더 알아보기"
    glow
    useContainer
    descAlign="center"
    measure={"60ch"}
  />
);
