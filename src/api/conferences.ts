// src/api/conferences.ts
// Mock data for now. Replace with real API calls later.

export interface Conference {
  id: number;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  featured: boolean;
}

let mockConferences: Conference[] = [
  {
    id: 1,
    title: "Hội thảo về Trí tuệ nhân tạo trong Giáo dục",
    date: "15/08/2023",
    location: "Hội trường A, Học viện CORE",
    status: "completed",
    featured: true,
  },
  {
    id: 2,
    title: "Xu hướng Công nghệ 2023",
    date: "20/09/2023",
    location: "Hội trường B, Học viện CORE",
    status: "completed",
    featured: false,
  },
  {
    id: 3,
    title: "Phát triển kỹ năng lãnh đạo",
    date: "10/12/2023",
    location: "Trung tâm Hội nghị Quốc tế",
    status: "upcoming",
    featured: true,
  },
];

export async function getConferences(): Promise<Conference[]> {
  return [...mockConferences];
}

export async function addConference(conference: Omit<Conference, 'id'>): Promise<Conference> {
  const newConference: Conference = { ...conference, id: Date.now() };
  mockConferences.push(newConference);
  return newConference;
}

export async function editConference(id: number, updated: Partial<Omit<Conference, 'id'>>): Promise<Conference | undefined> {
  mockConferences = mockConferences.map(c => c.id === id ? { ...c, ...updated } : c);
  return mockConferences.find(c => c.id === id);
}

export async function deleteConference(id: number): Promise<boolean> {
  mockConferences = mockConferences.filter(c => c.id !== id);
  return true;
}
