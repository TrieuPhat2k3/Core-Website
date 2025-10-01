// src/api/courses.ts
// Mock data for now. Replace with real API calls later.

export interface Course {
  id: number;
  title: string;
  duration: string;
  instructor: string;
  status: "open" | "closed" | "upcoming";
  featured: boolean;
}

let mockCourses: Course[] = [
  {
    id: 1,
    title: "Lập trình Web với React",
    duration: "8 tuần",
    instructor: "Nguyễn Văn A",
    status: "open",
    featured: true,
  },
  {
    id: 2,
    title: "Phát triển ứng dụng di động",
    duration: "10 tuần",
    instructor: "Trần Thị B",
    status: "upcoming",
    featured: false,
  },
  {
    id: 3,
    title: "Trí tuệ nhân tạo cơ bản",
    duration: "12 tuần",
    instructor: "Lê Văn C",
    status: "closed",
    featured: true,
  },
];

export async function getCourses(): Promise<Course[]> {
  return [...mockCourses];
}

export async function addCourse(course: Omit<Course, 'id'>): Promise<Course> {
  const newCourse: Course = { ...course, id: Date.now() };
  mockCourses.push(newCourse);
  return newCourse;
}

export async function editCourse(id: number, updated: Partial<Omit<Course, 'id'>>): Promise<Course | undefined> {
  mockCourses = mockCourses.map(c => c.id === id ? { ...c, ...updated } : c);
  return mockCourses.find(c => c.id === id);
}

export async function deleteCourse(id: number): Promise<boolean> {
  mockCourses = mockCourses.filter(c => c.id !== id);
  return true;
}
