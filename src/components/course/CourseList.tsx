"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const courses = [
  {
    id: 1,
    type: "Doanh nghiệp",
    typeColor: "bg-red-600",
    title: "Nghệ Thuật Đàm Phán Trong Kinh Doanh",
    summary: "Thông báo mở lớp khóa học \"Nghệ Thuật Đàm Phán Trong Kinh Doanh\"",
    status: "ĐANG MỞ LỚP",
    statusColor: "border-gray-800 text-gray-800",
    image: "window.svg",
    learningMethod: "Trực tiếp (offline)",
    openingDate: "03/07/2025",
    views: 96
  },
  {
    id: 2,
    type: "Chủ đề 2",
    typeColor: "bg-red-600",
    title: "Tên khóa học 2",
    summary: "Mô tả ngắn về tên khóa học",
    status: "ĐÃ KẾT THÚC",
    statusColor: "border-gray-800 text-gray-800",
    image: "window.svg",
    learningMethod: "Trực tuyến (online)",
    openingDate: "15/06/2025",
    views: 45
  },
  {
    id: 3,
    type: "Chủ đề 3",
    typeColor: "bg-red-600",
    title: "Tên khóa học 3",
    summary: "Mô tả ngắn về tên khóa học",
    status: "ĐANG MỞ LỚP",
    statusColor: "border-gray-800 text-gray-800",
    image: "window.svg",
    learningMethod: "Trực tiếp (offline)",
    openingDate: "20/07/2025",
    views: 78
  }
];

const topics = ["Doanh nghiệp", "Chủ đề 2", "Chủ đề 3"];
const learningMethods = ["Trực tiếp (offline)", "Trực tuyến (online)"];
const statuses = ["Đang mở lớp", "Đã kết thúc"];

const CourseList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>("");
  const [selectedLearningMethod, setSelectedLearningMethod] = useState<string>("");
  const [selectedStatus, setSelectedStatus] = useState<string>("");

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.type.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTopic = !selectedTopic || course.type === selectedTopic;
    const matchesLearningMethod = !selectedLearningMethod || course.learningMethod === selectedLearningMethod;
    const matchesStatus = !selectedStatus || 
                         (selectedStatus === "Đang mở lớp" && course.status === "ĐANG MỞ LỚP") ||
                         (selectedStatus === "Đã kết thúc" && course.status === "ĐÃ KẾT THÚC");

    return matchesSearch && matchesTopic && matchesLearningMethod && matchesStatus;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    setSelectedTopic("");
    setSelectedLearningMethod("");
    setSelectedStatus("");
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
      <div className="lg:col-span-3 space-y-6">
        {filteredCourses.map((course) => (
          <Link href={`/course/${course.id}`} key={course.id} className="block">
            <div className="flex bg-white rounded-lg shadow-sm p-4 gap-6 hover:shadow-md transition">
              <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                <Image 
                  src={course.image} 
                  alt="Hình của khóa học" 
                  width={128} 
                  height={128} 
                  className="object-cover w-full h-full" 
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${course.typeColor}`}>
                    {course.type}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      {course.views} views
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z" />
                      </svg>
                      {course.openingDate}
                    </span>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 leading-tight mb-1">{course.title}</h4>
                  <p className="text-sm text-gray-700 mb-3">{course.summary}</p>
                  <button className={`px-4 py-2 border-2 rounded-lg font-medium transition-colors ${course.statusColor}`}>
                    {course.status}
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Tìm kiếm thông tin khóa học</h3>
          <form onSubmit={handleSearch} className="flex gap-2">
            <input
              type="text"
              placeholder="Tìm kiếm Khóa học"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-red-600 text-white rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </form>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Chủ đề</h3>
          <div className="space-y-2">
            {topics.map((topic) => (
              <label key={topic} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="topic"
                  value={topic}
                  checked={selectedTopic === topic}
                  onChange={(e) => setSelectedTopic(e.target.value)}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="text-gray-700">{topic}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Hình thức học</h3>
          <div className="space-y-2">
            {learningMethods.map((method) => (
              <label key={method} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="learningMethod"
                  value={method}
                  checked={selectedLearningMethod === method}
                  onChange={(e) => setSelectedLearningMethod(e.target.value)}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="text-gray-700">{method}</span>
              </label>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">Trạng thái</h3>
          <div className="space-y-2">
            {statuses.map((status) => (
              <label key={status} className="flex items-center gap-3 cursor-pointer">
                <input
                  type="radio"
                  name="status"
                  value={status}
                  checked={selectedStatus === status}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="text-red-600 focus:ring-red-500"
                />
                <span className="text-gray-700">{status}</span>
              </label>
            ))}
          </div>
        </div>

        {(selectedTopic || selectedLearningMethod || selectedStatus) && (
          <div className="bg-white rounded-lg shadow-sm p-6">
            <button
              onClick={clearFilters}
              className="w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CourseList;
