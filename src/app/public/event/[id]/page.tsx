import EventDetail from "../../../../components/event/EventDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <EventDetail id={resolvedParams.id} />;
}
