// src/api/events.ts
// Mock data for now. Replace with real API calls later.

export interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  featured: boolean;
}

let mockEvents: Event[] = [
  {
    id: 1,
    title: "Lễ khai giảng năm học 2023-2024",
    date: "05/09/2023",
    location: "Sân trường Học viện CORE",
    status: "completed",
    featured: true,
  },
  {
    id: 2,
    title: "Ngày hội việc làm CORE 2023",
    date: "15/11/2023",
    location: "Hội trường A, Học viện CORE",
    status: "upcoming",
    featured: true,
  },
  {
    id: 3,
    title: "Cuộc thi Sáng tạo Công nghệ",
    date: "20/12/2023",
    location: "Khu vực thực hành, Học viện CORE",
    status: "upcoming",
    featured: false,
  },
];

export async function getEvents(): Promise<Event[]> {
  return [...mockEvents];
}

export async function addEvent(event: Omit<Event, 'id'>): Promise<Event> {
  const newEvent: Event = { ...event, id: Date.now() };
  mockEvents.push(newEvent);
  return newEvent;
}

export async function editEvent(id: number, updated: Partial<Omit<Event, 'id'>>): Promise<Event | undefined> {
  mockEvents = mockEvents.map(e => e.id === id ? { ...e, ...updated } : e);
  return mockEvents.find(e => e.id === id);
}

export async function deleteEvent(id: number): Promise<boolean> {
  mockEvents = mockEvents.filter(e => e.id !== id);
  return true;
}
