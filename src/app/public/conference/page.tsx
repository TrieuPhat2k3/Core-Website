import React from "react";
import HeroConference from "../../../components/conference/HeroConference";
import ConferenceList from "../../../components/conference/ConferenceList";
import Container from "../../../components/ui/Container";

export default function ConferencePage() {
  return (
    <>
      <HeroConference />
      <Container className="py-12">
        <ConferenceList />
      </Container>
    </>
  );
}
