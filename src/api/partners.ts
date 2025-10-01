// src/api/partners.ts
// Mock data for now. Replace with real API calls later.


export interface Partner {
  id: number;
  name: string;
  logo: string;
}

let mockPartners: Partner[] = [
  { id: 1, name: "Partner 1", logo: "/assets/core-logo.png" },
  { id: 2, name: "Partner 2", logo: "/assets/GreenAcademy-logo.png" }
];

export async function getPartners(): Promise<Partner[]> {
  // TODO: Replace with fetch('/api/partners')
  return [...mockPartners];
}

export async function addPartner(partner: Omit<Partner, 'id'>): Promise<Partner> {
  // TODO: Replace with POST request
  const newPartner: Partner = { ...partner, id: Date.now() };
  mockPartners.push(newPartner);
  return newPartner;
}

export async function editPartner(id: number, updated: Partial<Omit<Partner, 'id'>>): Promise<Partner | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockPartners = mockPartners.map(p => p.id === id ? { ...p, ...updated } : p);
  return mockPartners.find(p => p.id === id);
}

export async function deletePartner(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockPartners = mockPartners.filter(p => p.id !== id);
  return true;
}
