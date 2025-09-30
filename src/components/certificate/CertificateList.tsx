"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const certificates = [
  {
    id: 1,
    certificateNumber: "CORE-2025-001",
    courseName: "Nghệ Thuật Đàm Phán Trong Kinh Doanh",
    studentName: "Đỗ Lê Phúc Hưng Thịnh",
    issueDate: "30/08/2025",
    date: "2025-08-30",
    status: "Đã cấp",
    statusColor: "bg-green-600",
    image: "/assets/certificate.png",
  },
  {
    id: 2,
    certificateNumber: "CORE-2025-002",
    courseName: "Kỹ năng giao tiếp hiệu quả",
    studentName: "Nguyễn Thị Minh Anh",
    issueDate: "25/08/2025",
    date: "2025-08-25",
    status: "Đã cấp",
    statusColor: "bg-green-600",
    image: "/assets/certificate.png",
  },
  {
    id: 3,
    certificateNumber: "CORE-2025-003",
    courseName: "Quản lý dự án cơ bản",
    studentName: "Trần Văn Hoàng",
    issueDate: "20/08/2025",
    date: "2025-08-20",
    status: "Đã cấp",
    statusColor: "bg-green-600",
    image: "/assets/certificate.png",
  },
];

const CertificateList: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const sortedCertificates = [...certificates].sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0));

  const filteredCertificates = sortedCertificates.filter(
    (certificate) =>
      certificate.courseName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      certificate.studentName
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      certificate.certificateNumber
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Tìm kiếm thông tin chứng nhân
        </h2>
        <form onSubmit={handleSearch} className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Nhập số chứng nhận/họ và tên học viên"
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
        {filteredCertificates.map((certificate) => (
          <Link
            href={`/public/certificate/${certificate.id}`}
            key={certificate.id}
            className="block"
          >
            <div className="flex bg-white rounded-lg shadow-sm p-4 gap-6 hover:shadow-md transition">
              <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={certificate.image}
                  alt="Hình của chứng nhận"
                  width={128}
                  height={128}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1 flex flex-col justify-between">
                <div className="flex items-center gap-3 mb-2">
                  <span
                    className={`px-3 py-1 rounded-full text-white text-sm font-bold ${certificate.statusColor}`}
                  >
                    {certificate.status}
                  </span>
                  <span className="text-xs text-gray-400 flex items-center gap-2">
                    <span className="flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2v16a2 2 0 002 2z"
                        />
                      </svg>
                      {certificate.issueDate}
                    </span>
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-blue-900 leading-tight mb-1">
                    {certificate.courseName}
                  </h4>
                  <p className="text-sm text-gray-700 mb-2">
                    Học viên: {certificate.studentName}
                  </p>
                  <p className="text-sm text-gray-600">
                    Số chứng nhận: {certificate.certificateNumber}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CertificateList;
