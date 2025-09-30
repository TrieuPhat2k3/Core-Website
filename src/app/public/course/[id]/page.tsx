import CourseDetail from "../../../../components/course/CourseDetail";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  return <CourseDetail id={resolvedParams.id} />;
}
