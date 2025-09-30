import React from "react";
import HeroOverview from "../../../components/overview/HeroOverview";
import Overview from "../../../components/overview/Overview";
import Container from "../../../components/ui/Container";

export default function OverviewPage() {
  return (
    <>
      <HeroOverview />
      <Container className="py-12">
        <Overview />
      </Container>
    </>
  );
}