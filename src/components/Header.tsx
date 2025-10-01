"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Search, LogIn, X } from "lucide-react";
import Container from "./ui/Container";
import Link from "next/link";

// Sample data for events and courses
const events = [
  {
    id: 1,
    title: "IELTS & APTIS: HIỂU ĐÚNG – CHỌN ĐÚNG – VỀ ĐÍCH HIỆU QUẢ",
    type: "Hội thảo",
    image: "/assets/cutevent-example3.png",
  },
  {
    id: 2,
    title: "TÊN SỰ KIỆN",
    type: "Danh mục sự kiện",
    image: "window.svg",
  },
  {
    id: 3,
    title: "TÊN SỰ KIỆN",
    type: "Danh mục sự kiện",
    image: "window.svg",
  },
];

const courses = [
  {
    id: 1,
    title: "Nghệ Thuật Đàm Phán Trong Kinh Doanh",
    type: "Doanh nghiệp",
    image: "/assets/business.jpg",
  },
  {
    id: 2,
    title: "Tên khóa học 2",
    type: "Chủ đề 2",
    image: "/assets/conference.jpeg",
  },
  {
    id: 3,
    title: "Tên khóa học 3",
    type: "Chủ đề 3",
    image: "/assets/mission.jpg",
  },
];

const Header: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    events: typeof events;
    courses: typeof courses;
  }>({ events: [], courses: [] });
  const [user, setUser] = useState<{ username: string; role: string } | null>(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const searchRef = useRef<HTMLDivElement>(null);

  // Always show login button on first load, only show user after login in this session
  useEffect(() => {
    setUser(null);
    setLoggedIn(false);
    function syncUser() {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("coreapp_user");
        if (stored) {
          try {
            setUser(JSON.parse(stored));
            setLoggedIn(true);
          } catch {
            setUser(null);
            setLoggedIn(false);
          }
        } else {
          setUser(null);
          setLoggedIn(false);
        }
      }
    }
    // Only update after login event (storage or focus)
    function handleStorage(e: StorageEvent) {
      if (e.key === "coreapp_user") syncUser();
    }
    window.addEventListener("storage", handleStorage);
    window.addEventListener("focus", syncUser);
    return () => {
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("focus", syncUser);
    };
  }, []);

  // Also update user state after navigation (for SPA login redirect)
  useEffect(() => {
    const handle = () => {
      if (typeof window !== "undefined") {
        const stored = localStorage.getItem("coreapp_user");
        if (stored) {
          try {
            setUser(JSON.parse(stored));
          } catch {
            setUser(null);
          }
        } else {
          setUser(null);
        }
      }
    };
    window.addEventListener("focus", handle);
    return () => {
      window.removeEventListener("focus", handle);
    };
  }, []);

  // Logout handler
  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("coreapp_user");
      setUser(null);
      setLoggedIn(false);
      setUserMenuOpen(false);
      router.push("/public/login");
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setShowResults(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Search function
  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === "") {
      setSearchResults({ events: [], courses: [] });
      setShowResults(false);
      return;
    }

    const filteredEvents = events.filter(
      (event) =>
        event.title.toLowerCase().includes(query.toLowerCase()) ||
        event.type.toLowerCase().includes(query.toLowerCase())
    );

    const filteredCourses = courses.filter(
      (course) =>
        course.title.toLowerCase().includes(query.toLowerCase()) ||
        course.type.toLowerCase().includes(query.toLowerCase())
    );

    setSearchResults({
      events: filteredEvents,
      courses: filteredCourses,
    });

    setShowResults(true);
  };

  // Clear search
  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults({ events: [], courses: [] });
    setShowResults(false);
  };

  return (
    <div className="border-b bg-white">
      <Container className="flex h-14 items-center gap-4">
        <div className="flex items-center gap-2">
          <a href="/public/home">
            <img
              src="/assets/home-logo.png"
              alt="CORE Logo"
              className="h-8 w-auto max-w-[64px] rounded-md object-contain"
            />
          </a>
        </div>
        <div
          ref={searchRef}
          className="mx-auto hidden w-full max-w-xl items-center rounded-full bg-gray-100 px-4 py-2 shadow-lg sm:flex relative"
        >
          <Search className="mr-2 h-4 w-4 shrink-0 text-slate-400" />
          <input
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Tìm kiếm sự kiện, khóa học..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-slate-800"
          />
          {searchQuery && (
            <button onClick={clearSearch} className="ml-2">
              <X className="h-4 w-4 text-slate-400" />
            </button>
          )}

          {showResults && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg z-[9999] max-h-96 overflow-y-auto translate-y-2">
              {searchResults.events.length === 0 &&
              searchResults.courses.length === 0 ? (
                <div className="p-4 text-center text-slate-500">
                  Không tìm thấy kết quả
                </div>
              ) : (
                <div className="p-2">
                  {searchResults.events.length > 0 && (
                    <div className="mb-4">
                      <h3 className="text-sm font-medium text-slate-500 px-3 py-2">
                        Sự kiện
                      </h3>
                      <div className="space-y-2">
                        {searchResults.events.map((event) => (
                          <Link
                            href={`/public/event/${event.id}`}
                            key={`event-${event.id}`}
                            onClick={() => setShowResults(false)}
                            className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-md"
                          >
                            <div className="w-10 h-10 bg-slate-200 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={event.image}
                                alt={event.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-800">
                                {event.title}
                              </p>
                              <p className="text-xs text-slate-500">
                                {event.type}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResults.courses.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-slate-500 px-3 py-2">
                        Khóa học
                      </h3>
                      <div className="space-y-2">
                        {searchResults.courses.map((course) => (
                          <Link
                            href={`/public/course/${course.id}`}
                            key={`course-${course.id}`}
                            onClick={() => setShowResults(false)}
                            className="flex items-center gap-3 p-2 hover:bg-slate-50 rounded-md"
                          >
                            <div className="w-10 h-10 bg-slate-200 rounded-md overflow-hidden flex-shrink-0">
                              <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-sm font-medium text-slate-800">
                                {course.title}
                              </p>
                              <p className="text-xs text-slate-500">
                                {course.type}
                              </p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
        <div className="ml-auto flex items-center gap-2 relative">
          {loggedIn && user ? (
            <>
              <button
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-900 font-medium focus:outline-none"
                onClick={() => setUserMenuOpen((open) => !open)}
                onBlur={() => setTimeout(() => setUserMenuOpen(false), 150)}
              >
                <span className="truncate max-w-[100px]">{user.username}</span>
                <svg width="16" height="16" fill="none" viewBox="0 0 24 24"><path d="M6 9l6 6 6-6" stroke="#1e40af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <div className="px-4 py-2 text-sm text-gray-700 border-b">{user.role === "admin" ? "Quản trị viên" : "Người dùng"}</div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50 rounded-b-lg"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <LogIn className="hidden h-4 w-4 text-red-600 sm:block" />
              <a
                href="/public/login"
                className="text-sm font-medium text-blue-900 hover:text-red-600"
              >
                Đăng nhập
              </a>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Header;
