import React from "react";
import { PromoSection } from "../PromoSection";

export const HeaderSection = () => (
  <PromoSection
    title="초등부"
    description={
      "처음 만나는 영어는 늘 부담스럽습니다. 리체움의 초등과정은 복잡한 언어학습을 가장 친근한 방법으로 아이들에게 안내합니다. 리체움만의 특별한 초등영어 과정을 살펴보세요."
    }
    buttonText="더 알아보기"
    glow
    useContainer
    descAlign="center"
    measure={"60ch"}
  />
);
