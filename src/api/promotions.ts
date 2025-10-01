// src/api/promotions.ts
// Mock data for now. Replace with real API calls later.

export interface Promotion {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  registrationLink: string;
  buttonText: string;
}

let mockPromotions: Promotion[] = [
  {
    id: 1,
    title: "GREEN ACADEMY",
    subtitle: "ĐỐI TÁC THỰC TẬP CHIẾN LƯỢC CỦA TRUNG TÂM VĂN HÓA DOANH NGHIỆP",
    description: "Green Academy đồng hành cùng sinh viên DHV mang đến cơ hội thực tập chất lượng cao và định hướng nghề nghiệp vững chắc.",
    image: "/assets/student.png",
    registrationLink: "/public/register",
    buttonText: "ĐĂNG KÝ MIỄN PHÍ",
  }
];

export async function getPromotions(): Promise<Promotion[]> {
  // TODO: Replace with fetch('/api/promotions')
  return [...mockPromotions];
}

export async function addPromotion(promotion: Omit<Promotion, 'id'>): Promise<Promotion> {
  // TODO: Replace with POST request
  const newPromotion: Promotion = { ...promotion, id: Date.now() };
  mockPromotions.push(newPromotion);
  return newPromotion;
}

export async function editPromotion(id: number, updated: Partial<Omit<Promotion, 'id'>>): Promise<Promotion | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockPromotions = mockPromotions.map(p => p.id === id ? { ...p, ...updated } : p);
  return mockPromotions.find(p => p.id === id);
}

export async function deletePromotion(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockPromotions = mockPromotions.filter(p => p.id !== id);
  return true;
}
