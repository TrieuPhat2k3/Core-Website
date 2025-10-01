// src/api/categories.ts
// Mock data for now. Replace with real API calls later.

export interface Category {
  id: number;
  name: string;
  description: string;
}

let mockCategories: Category[] = [
  { id: 1, name: "Công nghệ", description: "Các khóa học về công nghệ." },
  { id: 2, name: "Kinh doanh", description: "Các khóa học về kinh doanh." }
];

export async function getCategories(): Promise<Category[]> {
  // TODO: Replace with fetch('/api/categories')
  return [...mockCategories];
}

export async function addCategory(category: Omit<Category, 'id'>): Promise<Category> {
  // TODO: Replace with POST request
  const newCategory: Category = { ...category, id: Date.now() };
  mockCategories.push(newCategory);
  return newCategory;
}

export async function editCategory(id: number, updated: Partial<Omit<Category, 'id'>>): Promise<Category | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockCategories = mockCategories.map(c => c.id === id ? { ...c, ...updated } : c);
  return mockCategories.find(c => c.id === id);
}

export async function deleteCategory(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockCategories = mockCategories.filter(c => c.id !== id);
  return true;
}
