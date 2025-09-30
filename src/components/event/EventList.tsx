"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const events = [
  {
    id: 1,
    type: "Workshop",
    typeColor: "bg-red-600",
    title: "HỘI THẢO CHUYÊN ĐỀ IELTS & ESOL APTIS",
    summary: "Chiều ngày 18/06/2025, tại Trường Đại học Hùng Vương TP.HCM, hội thảo do 2G Education phối hợp cùng Trung tâm Văn hóa Doanh nghiệp - CORE tổ chức đã diễn ra thành công rực rỡ!",
    views: 1017,
  date: "2025-06-18",
    image: "/assets/event-example2.jpg",
  },
  {
    id: 2,
    type: "Danh mục sự kiện",
    typeColor: "bg-red-600",
    title: "TÊN SỰ KIỆN",
    summary: "Mô tả ngắn về sự kiện...",
    views: 0,
  date: "2025-06-01",
    image: "window.svg",
  },
  {
    id: 3,
    type: "Danh mục sự kiện",
    typeColor: "bg-red-600",
    title: "TÊN SỰ KIỆN",
    summary: "Mô tả ngắn về sự kiện...",
    views: 0,
  date: "2025-05-01",
    image: "window.svg",
  },
  {
    id: 4,
    type: "Danh mục sự kiện",
    typeColor: "bg-red-600",
    title: "TÊN SỰ KIỆN",
    summary: "Mô tả ngắn về sự kiện...",
    views: 0,
  date: "2025-04-01",
    image: "window.svg",
  },
];

const EventList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const eventsPerPage = 4;

  // Sort events by date descending (most recent first)
  const sortedEvents = [...events].sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));

  const filteredEvents = sortedEvents.filter(event =>
    event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">Tìm kiếm Sự kiện</h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
          >
            Tìm kiếm
          </button>
        </form>
      </div>
      <div className="space-y-6">
        {currentEvents.map((event) => (
          <Link href={`/public/event/${event.id}`} key={event.id} className="block">
            <div className="flex bg-white rounded-lg shadow-sm p-4 gap-6 hover:shadow-md transition">
              <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src={event.image} 
                  alt="Hình của sự kiện" 
                  width={128} 
                  height={128} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${event.typeColor}`}>
                    {event.type}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {event.views} views
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z" />
                      </svg>
                      {event.date}
                    </span>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 leading-tight mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-700">{event.summary}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {totalPages > 1 && (
        <div className="flex justify-center gap-2">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                currentPage === page
                  ? "bg-red-600 text-white"
                  : "bg-white text-red-600 border border-red-600 hover:bg-red-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default EventList;
