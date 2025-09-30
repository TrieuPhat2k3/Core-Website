import CertificateDetail from "../../../../components/certificate/CertificateDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CertificateDetail id={resolvedParams.id} />;
}
