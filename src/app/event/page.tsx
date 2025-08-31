import React from "react";
import HeroEvent from "../../components/event/HeroEvent";
import EventList from "../../components/event/EventList";
import Container from "../../components/ui/Container";

export default function EventPage() {
    return (
        <>
            <HeroEvent />
            <Container className="py-12">
                <EventList />
            </Container>
        </>
    );
}
