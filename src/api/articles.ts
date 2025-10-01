// src/api/articles.ts
// Mock data for now. Replace with real API calls later.

export interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  type: "main-event" | "featured-content" | "announcement" | "news";
  priority: number;
  status: "active" | "inactive" | "scheduled";
  startDate: string;
  endDate: string;
  position: "hero" | "featured-section" | "sidebar" | "footer";
  targetAudience: string;
  clickCount: number;
  impressions: number;
  createdAt: string;
  updatedAt: string;
}

let mockArticles: Article[] = [
  {
    id: 1,
    title: "Hội thảo Chuyển đổi số 2024",
    description: "Sự kiện lớn nhất năm về chuyển đổi số và công nghệ AI trong giáo dục",
    image: "/assets/conference.jpg",
    link: "/events/digital-transformation-2024",
    type: "main-event",
    priority: 1,
    status: "active",
    startDate: "2024-01-01",
    endDate: "2024-06-30",
    position: "hero",
    targetAudience: "Sinh viên, Giảng viên, Doanh nghiệp",
    clickCount: 1250,
    impressions: 15000,
    createdAt: "2024-01-01",
    updatedAt: "2024-01-15",
  },
  {
    id: 2,
    title: "Khóa học AI & Machine Learning",
    description: "Khóa học chuyên sâu về trí tuệ nhân tạo và học máy cho người mới bắt đầu",
    image: "/assets/learning.png",
    link: "/courses/ai-machine-learning",
    type: "featured-content",
    priority: 2,
    status: "active",
    startDate: "2024-02-01",
    endDate: "2024-12-31",
    position: "featured-section",
    targetAudience: "Sinh viên IT, Lập trình viên",
    clickCount: 890,
    impressions: 12000,
    createdAt: "2024-01-20",
    updatedAt: "2024-02-01",
  },
  {
    id: 3,
    title: "Thông báo tuyển sinh 2024",
    description: "Thông tin chi tiết về tuyển sinh các ngành học mới năm 2024",
    image: "/assets/target.jpg",
    link: "/admission/2024",
    type: "announcement",
    priority: 3,
    status: "scheduled",
    startDate: "2024-03-01",
    endDate: "2024-08-31",
    position: "sidebar",
    targetAudience: "Học sinh THPT, Phụ huynh",
    clickCount: 0,
    impressions: 0,
    createdAt: "2024-02-15",
    updatedAt: "2024-02-15",
  },
];

export async function getArticles(): Promise<Article[]> {
  // TODO: Replace with fetch('/api/articles')
  return [...mockArticles];
}

export async function addArticle(article: Omit<Article, 'id'>): Promise<Article> {
  // TODO: Replace with POST request
  const newArticle: Article = { ...article, id: Date.now() };
  mockArticles.push(newArticle);
  return newArticle;
}

export async function editArticle(id: number, updated: Partial<Omit<Article, 'id'>>): Promise<Article | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockArticles = mockArticles.map(a => a.id === id ? { ...a, ...updated } : a);
  return mockArticles.find(a => a.id === id);
}

export async function deleteArticle(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockArticles = mockArticles.filter(a => a.id !== id);
  return true;
}
