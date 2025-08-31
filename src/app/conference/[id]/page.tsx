import ConferenceDetail from "../../../components/conference/ConferenceDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <ConferenceDetail id={resolvedParams.id} />;
}
