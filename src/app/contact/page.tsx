import React from "react";
import HeroContact from "../../components/contact/HeroContact";
import ContactForm from "../../components/contact/ContactForm";
import Container from "../../components/ui/Container";

export default function ContactPage() {
    return (
        <>
            <HeroContact />
            <Container className="py-12">
                <ContactForm />
            </Container>
        </>
    );
}
