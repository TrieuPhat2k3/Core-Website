import React from "react";
import Hero from "../../components/home/Hero";
import Introduction from "../../components/home/Introduction";
import Values from "../../components/home/Values";
import Conference from "../../components/home/Conference";
import News from "../../components/home/News";
import Partners from "../../components/home/Partners";
import PartnerHighlight from "../../components/home/PartnerCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Introduction />
      <Values />
      <Conference />
      <News />
      <Partners />
      <PartnerHighlight />
    </>
  );
}