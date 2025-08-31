import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "CORE - Trung tâm Văn hóa Doanh nghiệp",
  description: "Đổi mới sáng tạo và hội tụ văn hóa doanh nghiệp",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">
        <Header />
        <Navbar />
        <div className="relative">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
