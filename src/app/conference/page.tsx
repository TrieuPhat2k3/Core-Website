import React from "react";
import HeroConference from "../../components/conference/HeroConference";
import ConferenceList from "../../components/conference/ConferenceList";

export default function ConferencePage() {
  return (
    <div className="py-10">
        <HeroConference />
        <ConferenceList />
    </div>
  );
}