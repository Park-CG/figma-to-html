import React from "react";
import { PromoSection } from "../PromoSection";

export const FooterSection = () => (
  <PromoSection
    title="고등부"
    description={
      "완성된 학습은 정밀한 관리로 이뤄집니다. 다양한 방식과 환경에 준비하여 오차없는 성과를 만들어낼 수 있습니다. 최적화된 설계와 함께 학습자의 이상을 현실로 바꾸는 리체움의 고급과정을 살펴보세요."
    }
    buttonText="더 알아보기"
    glow
    useContainer
    descAlign="center"
    measure={"60ch"}
  />
);
