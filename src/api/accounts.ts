// src/api/accounts.ts
// Mock data for now. Replace with real API calls later.

export interface Account {
  id: number;
  username: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastLogin: string;
}

let mockAccounts: Account[] = [
  { id: 1, username: "Admin", email: "admin@core.edu.vn", role: "Admin", status: "active", lastLogin: "15/06/2023 10:30" },
  { id: 2, username: "Nguyễn Văn A", email: "nguyenvana@core.edu.vn", role: "Editor", status: "active", lastLogin: "14/06/2023 15:45" },
  { id: 3, username: "Trần Thị B", email: "tranthib@core.edu.vn", role: "Viewer", status: "inactive", lastLogin: "10/06/2023 09:15" },
];

export async function getAccounts(): Promise<Account[]> {
  // TODO: Replace with fetch('/api/accounts')
  return [...mockAccounts];
}

export async function addAccount(account: Omit<Account, 'id'>): Promise<Account> {
  // TODO: Replace with POST request
  const newAccount: Account = { ...account, id: Date.now() };
  mockAccounts.push(newAccount);
  return newAccount;
}

export async function editAccount(id: number, updated: Partial<Omit<Account, 'id'>>): Promise<Account | undefined> {
  // TODO: Replace with PUT/PATCH request
  mockAccounts = mockAccounts.map(a => a.id === id ? { ...a, ...updated } : a);
  return mockAccounts.find(a => a.id === id);
}

export async function deleteAccount(id: number): Promise<boolean> {
  // TODO: Replace with DELETE request
  mockAccounts = mockAccounts.filter(a => a.id !== id);
  return true;
}
