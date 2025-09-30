import React from "react";
import HeroCertificate from "../../../components/certificate/HeroCertificate";
import CertificateList from "../../../components/certificate/CertificateList";
import Container from "../../../components/ui/Container";

export default function CertificatePage() {
  return (
    <>
      <HeroCertificate />
      <Container className="py-12">
        <CertificateList />
      </Container>
    </>
  );
}
