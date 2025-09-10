import React from "react";

export const TextContentSection = () => {
  const companyData = {
    name: "리체움학원",
    company: "(주)DipThink",
    contact: "Contact: 010-0000-0000",
  };

  return (
    <section className="absolute w-[920px] h-[50px] top-0 left-0" role="banner">
      <header className="absolute w-[185px] h-[17px] -top-0.5 left-0">
        <h1 className="absolute w-[73px] h-[17px] top-0 left-0 font-www-toat-co-kr-semantic-strong font-[number:var(--www-toat-co-kr-semantic-strong-font-weight)] text-black text-[length:var(--www-toat-co-kr-semantic-strong-font-size)] tracking-[var(--www-toat-co-kr-semantic-strong-letter-spacing)] leading-[var(--www-toat-co-kr-semantic-strong-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-semantic-strong-font-style)]">
          {companyData.name}
        </h1>

        <p className="absolute w-[113px] h-[17px] top-0 left-[72px] [font-family:'Roboto_Mono',Helvetica] font-normal text-black text-sm tracking-[0] leading-[16.8px] whitespace-nowrap">
          <span
            className="font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)]"
            aria-hidden="true"
          >
            {" "}
            |{" "}
          </span>

          <span className="font-www-toat-co-kr-noto-sans-KR-bold font-[number:var(--www-toat-co-kr-noto-sans-KR-bold-font-weight)] [font-style:var(--www-toat-co-kr-noto-sans-KR-bold-font-style)] tracking-[var(--www-toat-co-kr-noto-sans-KR-bold-letter-spacing)] leading-[var(--www-toat-co-kr-noto-sans-KR-bold-line-height)] text-[length:var(--www-toat-co-kr-noto-sans-KR-bold-font-size)]">
            {companyData.company}
          </span>
        </p>
      </header>

      <address className="absolute w-[194px] h-[17px] top-8 left-0 font-www-toat-co-kr-roboto-mono-regular font-[number:var(--www-toat-co-kr-roboto-mono-regular-font-weight)] text-black text-[length:var(--www-toat-co-kr-roboto-mono-regular-font-size)] tracking-[var(--www-toat-co-kr-roboto-mono-regular-letter-spacing)] leading-[var(--www-toat-co-kr-roboto-mono-regular-line-height)] whitespace-nowrap [font-style:var(--www-toat-co-kr-roboto-mono-regular-font-style)] not-italic">
        {companyData.contact}
      </address>
    </section>
  );
};
