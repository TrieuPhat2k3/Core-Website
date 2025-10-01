// src/api/certificates.ts
// Mock data for now. Replace with real API calls later.

export interface Certificate {
  id: number;
  name: string;
  issuedTo: string;
  issuedAt: string;
  image: string;
}

let mockCertificates: Certificate[] = [
  { id: 1, name: "Chứng nhận React", issuedTo: "Nguyen Van A", issuedAt: "2025-09-01", image: "/assets/certificate.png" },
  { id: 2, name: "Chứng nhận Next.js", issuedTo: "Le Thi B", issuedAt: "2025-08-15", image: "/assets/certificate2.png" }
];

export async function getCertificates(): Promise<Certificate[]> {
  // TODO: Replace with fetch('/api/certificates')
  return [...mockCertificates];
}

export async function addCertificate(certificate: Omit<Certificate, 'id'>): Promise<Certificate> {
  // TODO: Replace with POST request
  const newCertificate: Certificate = { ...certificate, id: Date.now() };
  mockCertificates.push(newCertificate);
  return newCertificate;
}

export async function editCertificate(id: number, updated: Partial<Omit<Certificate, 'id'>>): Promise<Certificate | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockCertificates = mockCertificates.map(c => c.id === id ? { ...c, ...updated } : c);
  return mockCertificates.find(c => c.id === id);
}

export async function deleteCertificate(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockCertificates = mockCertificates.filter(c => c.id !== id);
  return true;
}
