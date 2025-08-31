"use client";

import React, { useState } from "react";
import Image from "next/image";

interface Certificate {
  id: number;
  certificateNumber: string;
  courseName: string;
  studentName: string;
  dateOfBirth: string;
  idNumber: string;
  programCompleted: string;
  fromDate: string;
  toDate: string;
  classification: string;
  issueDate: string;
  serialNumber: string;
  authorizedBy: string;
}

const certificates: Certificate[] = [
  {
    id: 1,
    certificateNumber: "CORE-2025-001",
    courseName: "Nghệ Thuật Đàm Phán Trong Kinh Doanh",
    studentName: "Đỗ Lê Phúc Hưng Thịnh",
    dateOfBirth: "15/03/1995",
    idNumber: "123456789012",
    programCompleted: "Khóa học đàm phán kinh doanh cơ bản",
    fromDate: "03/07/2025",
    toDate: "28/08/2025",
    classification: "Xuất sắc",
    issueDate: "30/08/2025",
    serialNumber: "CORE-2025-001",
    authorizedBy: "TS. NGUYỄN THỊ MỸ DỤNG",
  },
  {
    id: 2,
    certificateNumber: "CORE-2025-002",
    courseName: "Kỹ năng giao tiếp hiệu quả",
    studentName: "Nguyễn Thị Minh Anh",
    dateOfBirth: "22/08/1998",
    idNumber: "987654321098",
    programCompleted: "Khóa học giao tiếp cơ bản",
    fromDate: "10/07/2025",
    toDate: "05/08/2025",
    classification: "Tốt",
    issueDate: "25/08/2025",
    serialNumber: "CORE-2025-002",
    authorizedBy: "TS. NGUYỄN THỊ MỸ DỤNG",
  },
  {
    id: 3,
    certificateNumber: "CORE-2025-003",
    courseName: "Quản lý dự án cơ bản",
    studentName: "Trần Văn Hoàng",
    dateOfBirth: "05/12/1990",
    idNumber: "456789123456",
    programCompleted: "Khóa học quản lý dự án",
    fromDate: "15/07/2025",
    toDate: "10/08/2025",
    classification: "Khá",
    issueDate: "20/08/2025",
    serialNumber: "CORE-2025-003",
    authorizedBy: "TS. NGUYỄN THỊ MỸ DỤNG",
  },
];

interface CertificateDetailProps {
  id: string;
}

const CertificateDetail: React.FC<CertificateDetailProps> = ({ id }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<Certificate | null>(null);
  const [isSearching, setIsSearching] = useState(false);

  const certificate = certificates.find((c) => c.id.toString() === id);

  if (!certificate) {
    return (
      <div className="bg-[#f8f9fa] rounded-lg p-8 max-w-4xl mx-auto mt-8 text-center text-red-600">
        Không tìm thấy chứng nhận.
      </div>
    );
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    setIsSearching(true);

    setTimeout(() => {
      const found = certificates.find(
        (c) =>
          c.certificateNumber
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          c.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
          c.courseName.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setSearchResults(found || null);
      setIsSearching(false);
    }, 1000);
  };

  return (
    <div className="max-w-6xl mx-auto mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Tra cứu giấy chứng nhận
        </h2>
        <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
          <div className="flex gap-4">
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
                placeholder="Nhập số vào số cấp chứng nhận"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              />
            </div>
            <button
              type="submit"
              disabled={isSearching}
              className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors disabled:opacity-50"
            >
              {isSearching ? "Đang tìm..." : "Tìm kiếm"}
            </button>
          </div>
        </form>
      </div>

      <div className="text-center">
        <div className="inline-block px-6 py-3 bg-red-600 text-white font-bold rounded-lg">
          Số cấp chứng nhận
        </div>
      </div>

      {/* Simple Certificate Images - Exactly as in sketch */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-sm p-4">
          <Image
            src="/assets/certificate.png"
            alt="Certificate Design 1"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-4">
          <Image
            src="/assets/certificate2.png"
            alt="Certificate Design 2"
            width={400}
            height={300}
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          Thông tin chứng nhận
        </h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Tên khóa học:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Thời gian học:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Tên học viên:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Ngày sinh:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Số hiệu:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Số vào số cấp chứng nhận:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-semibold text-gray-700 min-w-[200px]">
              - Ngày cấp:
            </span>
            <span className="text-gray-900">
              .................................................
            </span>
          </div>
        </div>
      </div>

      {searchResults && (
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Kết quả tìm kiếm
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Tên khóa học:
              </span>
              <span className="text-gray-900">{searchResults.courseName}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Thời gian học:
              </span>
              <span className="text-gray-900">
                Từ {searchResults.fromDate} đến {searchResults.toDate}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Tên học viên:
              </span>
              <span className="text-gray-900">{searchResults.studentName}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Ngày sinh:
              </span>
              <span className="text-gray-900">{searchResults.dateOfBirth}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Số hiệu:
              </span>
              <span className="text-gray-900">
                {searchResults.serialNumber}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Số vào số cấp chứng nhận:
              </span>
              <span className="text-gray-900">
                {searchResults.certificateNumber}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="font-semibold text-gray-700 min-w-[200px]">
                - Ngày cấp:
              </span>
              <span className="text-gray-900">{searchResults.issueDate}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CertificateDetail;
