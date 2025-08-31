"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "/home" },
  { label: "Giới thiệu", href: "/overview" },
  { label: "Hội thảo", href: "/conference" },
  { label: "Sự kiện", href: "/event" },
  { label: "Khóa học", href: "/course" },
  { label: "Liên hệ", href: "/contact" }
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  return (
    <div className="border-b bg-white">
      <Container>
        <nav className="flex items-center gap-6 overflow-x-auto py-3 text-sm font-semibold text-slate-700">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`shrink-0 border-b-2 border-transparent pb-1 hover:border-red-600 hover:text-red-600 ${
                  isActive ? "border-red-600 text-red-600" : ""
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
