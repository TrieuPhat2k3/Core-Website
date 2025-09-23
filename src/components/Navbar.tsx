"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";

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
  const [dropdownPosition, setDropdownPosition] = useState({ left: 0, top: 0 });
  const [isHoveringDropdown, setIsHoveringDropdown] = useState(false);

  const handleMouseEnter = (item: typeof NAV_ITEMS[0], event: React.MouseEvent) => {
    if (item.dropdown && item.dropdown.length > 0) {
      const rect = event.currentTarget.getBoundingClientRect();
      setDropdownPosition({
        left: rect.left,
        top: rect.bottom + 8
      });
      setActiveDropdown(item.label);
    }
  };

  const handleMouseLeave = () => {
    if (!isHoveringDropdown) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownMouseEnter = () => {
    setIsHoveringDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    setIsHoveringDropdown(false);
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="border-b border-gray-200 bg-white relative z-20 pb-2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-8 py-4 text-sm font-semibold text-slate-700">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href ||
                             (item.dropdown && item.dropdown.some(d => d.href === pathname));
              const hasDropdown = item.dropdown && item.dropdown.length > 0;

              return (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={(e) => hasDropdown && handleMouseEnter(item, e)}
                  onMouseLeave={handleMouseLeave}
                >
                  <a
                    href={item.href}
                    className={`shrink-0 border-b-2 border-transparent pb-2 hover:border-red-600 hover:text-red-600 ${
                      isActive ? "border-red-600 text-red-600" : ""
                    }`}
                  >
                    {item.label}
                  </a>
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {activeDropdown && (
        <div 
          className="fixed w-64 bg-white border border-gray-200 rounded-lg shadow-lg z-[9999]"
          style={{
            left: `${dropdownPosition.left}px`,
            top: `${dropdownPosition.top}px`
          }}
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          {NAV_ITEMS.find(item => item.label === activeDropdown)?.dropdown?.map((dropdownItem) => {
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
    </>
  );
};

export default Navbar;
