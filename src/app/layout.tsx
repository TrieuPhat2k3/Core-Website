import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ICC -  Viện Văn hóa Doanh nghiệp",
  description: "Đổi mới sáng tạo và hội tụ văn hóa doanh nghiệp",
  icons: {
    icon: "/assets/icc-logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
