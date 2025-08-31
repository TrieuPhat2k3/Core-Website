"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Container from "./ui/Container";

const NAV_ITEMS = [
  { label: "Trang chủ", href: "/home" },
  { label: "Giới thiệu", href: "/overview" },
  { label: "Hội thảo", href: "/conference" },
  { label: "Sự kiện", href: "/event" },
  {
    label: "Khóa học",
    href: "/course",
    dropdown: [
      { label: "Khóa học ngắn hạn", href: "/course" },
      { label: "Tra cứu giấy Chứng nhận", href: "/certificate" }
    ]
  },
  { label: "Liên hệ", href: "/contact" }
];

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <div className="border-b bg-white relative z-[9999] pb-6">
      <Container>
        <nav className="flex items-center gap-6 overflow-x-auto py-4 text-sm font-semibold text-slate-700">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href ||
                           (item.dropdown && item.dropdown.some(d => d.href === pathname));
            const hasDropdown = item.dropdown && item.dropdown.length > 0;

            return (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className={`shrink-0 border-b-2 border-transparent pb-4 hover:border-red-600 hover:text-red-600 ${
                    isActive ? "border-red-600 text-red-600" : ""
                  }`}
                >
                  {item.label}
                </a>

                {hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-[9999]">
                    {item.dropdown.map((dropdownItem) => {
                      const isDropdownActive = pathname === dropdownItem.href;
                      return (
                        <a
                          key={dropdownItem.href}
                          href={dropdownItem.href}
                          className={`block px-4 py-3 text-sm hover:bg-red-50 transition-colors ${
                            isDropdownActive
                              ? "bg-red-600 text-white hover:bg-red-700"
                              : "text-gray-700 hover:text-red-600"
                          }`}
                        >
                          {dropdownItem.label}
                        </a>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </Container>
    </div>
  );
};

export default Navbar;
