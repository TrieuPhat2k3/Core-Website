"use client";

import React from "react";
import Image from "next/image";

const courses = [
  {
    id: 1,
    type: "Doanh nghiệp",
    typeColor: "bg-red-600",
    title: "Nghệ Thuật Đàm Phán Trong Kinh Doanh",
    summary: "Thông báo mở lớp khóa học \"Nghệ Thuật Đàm Phán Trong Kinh Doanh\"",
    status: "ĐANG MỞ LỚP",
    statusColor: "bg-blue-600",
    image: "/assets/business.jpg",
    learningMethod: "Trực tiếp (offline)",
    openingDate: "03/07/2025",
    views: 96,
    content: `
      <p>Thông báo mở lớp khóa học "Nghệ Thuật Đàm Phán Trong Kinh Doanh"</p>
      
      <p>Khóa học này sẽ cung cấp cho học viên những kỹ năng cần thiết để thành công trong các cuộc đàm phán kinh doanh.</p>
    `,
    details: [
      "Lịch khai giảng: 03/07/2025",
      "Giảng viên: Chuyên gia đàm phán kinh doanh",
      "Đối tượng: Nhân viên kinh doanh, quản lý, sinh viên",
      "Thời gian học: 8 buổi (2 buổi/tuần)",
      "Học phí: Liên hệ để biết thêm chi tiết",
      "Địa điểm: Trung tâm Văn hóa Doanh nghiệp - CORE"
    ]
  },
  {
    id: 2,
    type: "Chủ đề 2",
    typeColor: "bg-red-600",
    title: "Tên khóa học 2",
    summary: "Mô tả ngắn về tên khóa học",
    status: "ĐÃ KẾT THÚC",
    statusColor: "bg-gray-600",
    image: "/assets/conference.jpeg",
    learningMethod: "Trực tuyến (online)",
    openingDate: "15/06/2025",
    views: 45,
    content: `
      <p>Mô tả chi tiết về khóa học thứ hai.</p>
      
      <p>Khóa học này đã kết thúc và nhận được nhiều phản hồi tích cực từ học viên.</p>
    `,
    details: [
      "Lịch khai giảng: 15/06/2025",
      "Giảng viên: Chuyên gia trong lĩnh vực",
      "Đối tượng: Tất cả đối tượng quan tâm",
      "Thời gian học: 6 buổi (2 buổi/tuần)",
      "Học phí: Đã hoàn thành",
      "Địa điểm: Học trực tuyến"
    ]
  },
  {
    id: 3,
    type: "Chủ đề 3",
    typeColor: "bg-red-600",
    title: "Tên khóa học 3",
    summary: "Mô tả ngắn về tên khóa học",
    status: "ĐANG MỞ LỚP",
    statusColor: "bg-blue-600",
    image: "/assets/mission.jpg",
    learningMethod: "Trực tiếp (offline)",
    openingDate: "20/07/2025",
    views: 78,
    content: `
      <p>Mô tả chi tiết về khóa học thứ ba.</p>
      
      <p>Khóa học này sẽ cung cấp những kiến thức mới nhất trong lĩnh vực.</p>
    `,
    details: [
      "Lịch khai giảng: 20/07/2025",
      "Giảng viên: Chuyên gia hàng đầu",
      "Đối tượng: Sinh viên, người đi làm",
      "Thời gian học: 10 buổi (2 buổi/tuần)",
      "Học phí: Liên hệ để biết thêm chi tiết",
      "Địa điểm: Trung tâm Văn hóa Doanh nghiệp - CORE"
    ]
  }
];

interface CourseDetailProps {
  id: string;
}

const CourseDetail: React.FC<CourseDetailProps> = ({ id }) => {
  const course = courses.find(c => c.id.toString() === id);
   
  if (!course) {
    return (
      <div className="bg-[#f8f9fa] rounded-lg p-8 max-w-4xl mx-auto mt-8 text-center text-red-600">
        Không tìm thấy khóa học.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm thông tin khóa học"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
            Tìm kiếm
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{course.title}</h1>
          <div className="flex items-center gap-3 mb-4">
            <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${course.typeColor}`}>
              {course.type}
            </span>
            <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${course.statusColor}`}>
              {course.status}
            </span>
          </div>
          <div className="text-xs text-gray-400 flex items-center gap-4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {course.views} views
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z" />
              </svg>
              {course.openingDate}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src={course.image}
              alt="Hình ảnh khóa học"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {course.content && (
          <div className="prose max-w-none mb-8">
            <div dangerouslySetInnerHTML={{ __html: course.content }} />
          </div>
        )}

        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Tóm tắt nội dung thông báo mở lớp
          </h3>
          <div className="space-y-3">
            {course.details.map((detail, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-gray-400">•</span>
                <span className="text-gray-700">{detail}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
            Xem thông báo
          </button>
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
            Đăng ký tham gia khóa học
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
