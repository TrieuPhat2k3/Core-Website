// src/api/banners.ts
// Mock data for now. Replace with real API calls later.

export interface Banner {
  id: number;
  name: string;
  image: string;
  title: string;
  subtitle: string;
  heroFile: string;
}

let mockBanners: Banner[] = [
  {
    id: 1,
    name: "Trang chủ",
    image: "/assets/banner.png",
    title: "CORE",
    subtitle: "Đổi mới sáng tạo và hội tụ văn hóa doanh nghiệp",
    heroFile: "Hero.tsx",
  },
  {
    id: 2,
    name: "Giới thiệu",
    image: "/assets/banner.png",
    title: "CORE",
    subtitle: "Trang chủ | Giới thiệu",
    heroFile: "HeroOverview.tsx",
  },
  {
    id: 3,
    name: "Khóa học",
    image: "/assets/course-banner.jpg",
    title: "Khóa học",
    subtitle: "Trang chủ | Khóa học | Khóa học ngắn hạn",
    heroFile: "HeroCourse.tsx",
  },
  {
    id: 4,
    name: "Chứng nhận",
    image: "/assets/course-banner.jpg",
    title: "CORE",
    subtitle: "Trang chủ | Khóa học | Tra cứu giấy chứng nhận",
    heroFile: "HeroCertificate.tsx",
  },
  {
    id: 5,
    name: "Hội thảo",
    image: "/assets/conference-banner.png",
    title: "Hội thảo",
    subtitle: "Trang chủ | Hội thảo",
    heroFile: "HeroConference.tsx",
  },
  {
    id: 6,
    name: "Sự kiện",
    image: "/assets/event-banner.jpg",
    title: "Sự kiện",
    subtitle: "Trang chủ | Sự kiện",
    heroFile: "HeroEvent.tsx",
  },
  {
    id: 7,
    name: "Liên hệ",
    image: "/assets/puzzle-pieces3.jpg",
    title: "Sự kiện",
    subtitle: "Trang chủ | Liên Hệ",
    heroFile: "HeroContact.tsx",
  },
];

export async function getBanners(): Promise<Banner[]> {
  // TODO: Replace with fetch('/api/banners')
  return [...mockBanners];
}

export async function addBanner(banner: Omit<Banner, 'id'>): Promise<Banner> {
  // TODO: Replace with POST request
  const newBanner: Banner = { ...banner, id: Date.now() };
  mockBanners.push(newBanner);
  return newBanner;
}

export async function editBanner(id: number, updated: Partial<Omit<Banner, 'id'>>): Promise<Banner | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockBanners = mockBanners.map(b => b.id === id ? { ...b, ...updated } : b);
  return mockBanners.find(b => b.id === id);
}

export async function deleteBanner(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockBanners = mockBanners.filter(b => b.id !== id);
  return true;
}
