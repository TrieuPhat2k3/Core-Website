"use client";

import React, { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Download,
  Eye,
  Award,
  Calendar,
  User,
  Image,
} from "lucide-react";

interface Certificate {
  id: string;
  recipientName: string;
  recipientEmail: string;
  certificateType: "course" | "event" | "conference" | "achievement";
  title: string;
  description: string;
  issueDate: string;
  expiryDate?: string;
  certificateNumber: string;
  templateId: string;
  status: "issued" | "pending" | "revoked" | "expired";
  courseName?: string;
  eventName?: string;
  conferenceName?: string;
  instructorName: string;
  completionDate: string;
  grade?: string;
  creditsEarned?: number;
  verificationCode: string;
  downloadCount: number;
  lastDownloaded?: string;
  // Vietnamese specific fields
  studentBirthDate?: string;
  serialNumber?: string;
  registryNumber?: string;
  frontImage?: string;
  backImage?: string;
  studyDuration?: string;
}

const mockCertificates: Certificate[] = [
  {
    id: "1",
    recipientName: "Nguyễn Văn An",
    recipientEmail: "nguyen.van.an@email.com",
    certificateType: "course",
    title: "Chứng chỉ Phát triển React Nâng cao",
    description: "Chứng chỉ hoàn thành khóa học Phát triển React Nâng cao",
    issueDate: "2024-01-15",
    expiryDate: "2026-01-15",
    certificateNumber: "CERT-2024-001",
    templateId: "template-course-1",
    status: "issued",
    courseName: "Phát triển React Nâng cao",
    instructorName: "TS. Nguyễn Thị Hoa",
    completionDate: "2024-01-10",
    grade: "Giỏi",
    creditsEarned: 3,
    verificationCode: "VER-ABC123",
    downloadCount: 5,
    lastDownloaded: "2024-01-20",
    studentBirthDate: "1995-05-15",
    serialNumber: "SH-001",
    registryNumber: "SVS-001",
    studyDuration: "3 tháng",
  },
  {
    id: "2",
    recipientName: "Trần Thị Bình",
    recipientEmail: "tran.thi.binh@email.com",
    certificateType: "event",
    title: "Hội thảo Đổi mới Công nghệ 2024",
    description: "Chứng nhận tham dự Hội thảo Đổi mới Công nghệ",
    issueDate: "2024-02-01",
    certificateNumber: "CERT-2024-002",
    templateId: "template-event-1",
    status: "issued",
    eventName: "Hội thảo Đổi mới Công nghệ 2024",
    instructorName: "Ban Tổ chức",
    completionDate: "2024-01-30",
    verificationCode: "VER-DEF456",
    downloadCount: 2,
    lastDownloaded: "2024-02-05",
    studentBirthDate: "1992-08-20",
    serialNumber: "SH-002",
    registryNumber: "SVS-002",
  },
  {
    id: "3",
    recipientName: "Lê Văn Cường",
    recipientEmail: "le.van.cuong@email.com",
    certificateType: "conference",
    title: "Hội nghị AI & Machine Learning",
    description: "Chứng nhận tham gia Hội nghị AI & ML",
    issueDate: "2024-01-25",
    certificateNumber: "CERT-2024-003",
    templateId: "template-conference-1",
    status: "pending",
    conferenceName: "Hội nghị AI & Machine Learning",
    instructorName: "Ủy ban Hội nghị",
    completionDate: "2024-01-22",
    verificationCode: "VER-GHI789",
    downloadCount: 0,
    studentBirthDate: "1990-12-10",
    serialNumber: "SH-003",
    registryNumber: "SVS-003",
  },
];

export default function CertificateManagement() {
  const [certificates, setCertificates] =
    useState<Certificate[]>(mockCertificates);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterType, setFilterType] = useState<string>("all");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [showModal, setShowModal] = useState(false);
  const [editingCertificate, setEditingCertificate] =
    useState<Certificate | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const [formData, setFormData] = useState({
    recipientName: "",
    recipientEmail: "",
    certificateType: "course" as Certificate["certificateType"],
    title: "",
    description: "",
    issueDate: "",
    expiryDate: "",
    certificateNumber: "",
    templateId: "",
    status: "pending" as Certificate["status"],
    courseName: "",
    eventName: "",
    conferenceName: "",
    instructorName: "",
    completionDate: "",
    grade: "",
    creditsEarned: 0,
    verificationCode: "",
    studentBirthDate: "",
    serialNumber: "",
    registryNumber: "",
    studyDuration: "",
    frontImage: "",
    backImage: "",
  });

  const filteredCertificates = certificates.filter((cert) => {
    const matchesSearch =
      cert.recipientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.recipientEmail.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.certificateNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      filterType === "all" || cert.certificateType === filterType;
    const matchesStatus =
      filterStatus === "all" || cert.status === filterStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCertificate) {
      setCertificates(
        certificates.map((cert) =>
          cert.id === editingCertificate.id
            ? {
                ...cert,
                ...formData,
                creditsEarned: formData.creditsEarned || undefined,
              }
            : cert
        )
      );
    } else {
      const newCertificate: Certificate = {
        id: Date.now().toString(),
        ...formData,
        creditsEarned: formData.creditsEarned || undefined,
        downloadCount: 0,
        verificationCode:
          formData.verificationCode ||
          `VER-${Math.random().toString(36).substr(2, 6).toUpperCase()}`,
      };
      setCertificates([...certificates, newCertificate]);
    }

    resetForm();
  };

  const resetForm = () => {
    setFormData({
      recipientName: "",
      recipientEmail: "",
      certificateType: "course",
      title: "",
      description: "",
      issueDate: "",
      expiryDate: "",
      certificateNumber: "",
      templateId: "",
      status: "pending",
      courseName: "",
      eventName: "",
      conferenceName: "",
      instructorName: "",
      completionDate: "",
      grade: "",
      creditsEarned: 0,
      verificationCode: "",
      studentBirthDate: "",
      serialNumber: "",
      registryNumber: "",
      studyDuration: "",
      frontImage: "",
      backImage: "",
    });
    setEditingCertificate(null);
    setShowModal(false);
  };

  const handleEdit = (certificate: Certificate) => {
    setEditingCertificate(certificate);
    setFormData({
      recipientName: certificate.recipientName,
      recipientEmail: certificate.recipientEmail,
      certificateType: certificate.certificateType,
      title: certificate.title,
      description: certificate.description,
      issueDate: certificate.issueDate,
      expiryDate: certificate.expiryDate || "",
      certificateNumber: certificate.certificateNumber,
      templateId: certificate.templateId,
      status: certificate.status,
      courseName: certificate.courseName || "",
      eventName: certificate.eventName || "",
      conferenceName: certificate.conferenceName || "",
      instructorName: certificate.instructorName,
      completionDate: certificate.completionDate,
      grade: certificate.grade || "",
      creditsEarned: certificate.creditsEarned || 0,
      verificationCode: certificate.verificationCode,
      studentBirthDate: certificate.studentBirthDate || "",
      serialNumber: certificate.serialNumber || "",
      registryNumber: certificate.registryNumber || "",
      studyDuration: certificate.studyDuration || "",
      frontImage: certificate.frontImage || "",
      backImage: certificate.backImage || "",
    });
    setShowModal(true);
  };

  const handleDelete = (id: string) => {
    if (confirm("Bạn có chắc chắn muốn xóa chứng chỉ này?")) {
      setCertificates(certificates.filter((cert) => cert.id !== id));
    }
  };

  const toggleStatus = (id: string) => {
    setCertificates(
      certificates.map((cert) =>
        cert.id === id
          ? {
              ...cert,
              status:
                cert.status === "issued"
                  ? "revoked"
                  : cert.status === "revoked"
                  ? "issued"
                  : cert.status === "pending"
                  ? "issued"
                  : "pending",
            }
          : cert
      )
    );
  };

  const getStatusColor = (status: Certificate["status"]) => {
    switch (status) {
      case "issued":
        return "bg-green-100 text-green-800";
      case "pending":
        return "bg-yellow-100 text-yellow-800";
      case "revoked":
        return "bg-red-100 text-red-800";
      case "expired":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeColor = (type: Certificate["certificateType"]) => {
    switch (type) {
      case "course":
        return "bg-blue-100 text-blue-800";
      case "event":
        return "bg-purple-100 text-purple-800";
      case "conference":
        return "bg-indigo-100 text-indigo-800";
      case "achievement":
        return "bg-orange-100 text-orange-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusText = (status: Certificate["status"]) => {
    switch (status) {
      case "issued":
        return "Đã cấp";
      case "pending":
        return "Chờ duyệt";
      case "revoked":
        return "Đã thu hồi";
      case "expired":
        return "Hết hạn";
      default:
        return status;
    }
  };

  const getTypeText = (type: Certificate["certificateType"]) => {
    switch (type) {
      case "course":
        return "Khóa học";
      case "event":
        return "Sự kiện";
      case "conference":
        return "Hội nghị";
      case "achievement":
        return "Thành tích";
      default:
        return type;
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Quản lý chứng nhận
          </h1>
          <p className="text-gray-600">
            Quản lý và cấp chứng chỉ cho các khóa học, sự kiện và hội nghị
          </p>
        </div>
        <button
          onClick={() => setShowModal(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Cấp chứng chỉ
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border p-4 mb-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Tìm kiếm chứng chỉ..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            Bộ lọc
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Loại
              </label>
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tất cả loại</option>
                <option value="course">Khóa học</option>
                <option value="event">Sự kiện</option>
                <option value="conference">Hội nghị</option>
                <option value="achievement">Thành tích</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Trạng thái
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Tất cả trạng thái</option>
                <option value="issued">Đã cấp</option>
                <option value="pending">Chờ duyệt</option>
                <option value="revoked">Đã thu hồi</option>
                <option value="expired">Hết hạn</option>
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Certificates Table */}
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Người nhận
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Chứng chỉ
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Loại
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Trạng thái
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Ngày cấp
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tải xuống
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredCertificates.map((certificate) => (
                <tr key={certificate.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                          <User className="w-5 h-5 text-blue-600" />
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {certificate.recipientName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {certificate.recipientEmail}
                        </div>
                        {certificate.studentBirthDate && (
                          <div className="text-xs text-gray-400">
                            NS:{" "}
                            {new Date(
                              certificate.studentBirthDate
                            ).toLocaleDateString("vi-VN")}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm font-medium text-gray-900">
                      {certificate.title}
                    </div>
                    <div className="text-sm text-gray-500">
                      #{certificate.certificateNumber}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {certificate.courseName ||
                        certificate.eventName ||
                        certificate.conferenceName}
                    </div>
                    {certificate.serialNumber && (
                      <div className="text-xs text-gray-400">
                        SH: {certificate.serialNumber}
                      </div>
                    )}
                    {certificate.registryNumber && (
                      <div className="text-xs text-gray-400">
                        SVS: {certificate.registryNumber}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                        certificate.certificateType
                      )}`}
                    >
                      {getTypeText(certificate.certificateType)}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleStatus(certificate.id)}
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(
                        certificate.status
                      )} hover:opacity-80`}
                    >
                      {getStatusText(certificate.status)}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 text-gray-400 mr-1" />
                      {new Date(certificate.issueDate).toLocaleDateString(
                        "vi-VN"
                      )}
                    </div>
                    {certificate.expiryDate && (
                      <div className="text-xs text-gray-500 mt-1">
                        Hết hạn:{" "}
                        {new Date(certificate.expiryDate).toLocaleDateString(
                          "vi-VN"
                        )}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    <div className="flex items-center">
                      <Download className="w-4 h-4 text-gray-400 mr-1" />
                      {certificate.downloadCount}
                    </div>
                    {certificate.lastDownloaded && (
                      <div className="text-xs text-gray-500 mt-1">
                        Cuối:{" "}
                        {new Date(
                          certificate.lastDownloaded
                        ).toLocaleDateString("vi-VN")}
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => handleEdit(certificate)}
                        className="text-blue-600 hover:text-blue-900"
                        title="Chỉnh sửa chứng chỉ"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        className="text-green-600 hover:text-green-900"
                        title="Xem trước chứng chỉ"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button
                        className="text-purple-600 hover:text-purple-900"
                        title="Tải xuống chứng chỉ"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(certificate.id)}
                        className="text-red-600 hover:text-red-900"
                        title="Xóa chứng chỉ"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center py-12">
            <Award className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Không tìm thấy chứng chỉ
            </h3>
            <p className="text-gray-500">
              Bắt đầu bằng cách cấp chứng chỉ đầu tiên.
            </p>
          </div>
        )}
      </div>

      {/* Add/Edit Certificate Modal */}
      {showModal && (
        <React.Fragment>
          {/* Overlay */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" />
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-bold text-gray-900">
                    {editingCertificate
                      ? "Chỉnh sửa chứng chỉ"
                      : "Cấp chứng chỉ mới"}
                  </h2>
                  <button
                    onClick={resetForm}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ×
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Thông tin cơ bản
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tên học viên *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.recipientName}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              recipientName: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Email học viên *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.recipientEmail}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              recipientEmail: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ngày sinh
                        </label>
                        <input
                          type="date"
                          value={formData.studentBirthDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              studentBirthDate: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Loại chứng chỉ *
                        </label>
                        <select
                          required
                          value={formData.certificateType}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              certificateType: e.target
                                .value as Certificate["certificateType"],
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="course">Khóa học</option>
                          <option value="event">Sự kiện</option>
                          <option value="conference">Hội nghị</option>
                          <option value="achievement">Thành tích</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Details */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Chi tiết chứng chỉ
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Tiêu đề chứng chỉ *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.title}
                          onChange={(e) =>
                            setFormData({ ...formData, title: e.target.value })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Mô tả
                        </label>
                        <textarea
                          value={formData.description}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              description: e.target.value,
                            })
                          }
                          rows={3}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      {/* Conditional fields based on certificate type */}
                      {formData.certificateType === "course" && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Tên khóa học
                            </label>
                            <input
                              type="text"
                              value={formData.courseName}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  courseName: e.target.value,
                                })
                              }
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                              Thời gian học
                            </label>
                            <input
                              type="text"
                              value={formData.studyDuration}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  studyDuration: e.target.value,
                                })
                              }
                              placeholder="VD: 3 tháng, 6 tuần..."
                              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                          </div>
                        </div>
                      )}

                      {formData.certificateType === "event" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên sự kiện
                          </label>
                          <input
                            type="text"
                            value={formData.eventName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                eventName: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      )}

                      {formData.certificateType === "conference" && (
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Tên hội nghị
                          </label>
                          <input
                            type="text"
                            value={formData.conferenceName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                conferenceName: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      )}

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Giảng viên/Người cấp *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.instructorName}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                instructorName: e.target.value,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Trạng thái *
                          </label>
                          <select
                            required
                            value={formData.status}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                status: e.target.value as Certificate["status"],
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          >
                            <option value="pending">Chờ duyệt</option>
                            <option value="issued">Đã cấp</option>
                            <option value="revoked">Đã thu hồi</option>
                            <option value="expired">Hết hạn</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Certificate Numbers and Dates */}
                  <div className="border-b border-gray-200 pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Số hiệu và ngày tháng
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Số hiệu chứng chỉ *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.certificateNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              certificateNumber: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Số vào sổ
                        </label>
                        <input
                          type="text"
                          value={formData.registryNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              registryNumber: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Số hiệu (Serial)
                        </label>
                        <input
                          type="text"
                          value={formData.serialNumber}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              serialNumber: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Mã xác thực
                        </label>
                        <input
                          type="text"
                          value={formData.verificationCode}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              verificationCode: e.target.value,
                            })
                          }
                          placeholder="Tự động tạo nếu để trống"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ngày hoàn thành *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.completionDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              completionDate: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ngày cấp *
                        </label>
                        <input
                          type="date"
                          required
                          value={formData.issueDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              issueDate: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Ngày hết hạn
                        </label>
                        <input
                          type="date"
                          value={formData.expiryDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              expiryDate: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Template ID *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.templateId}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              templateId: e.target.value,
                            })
                          }
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Course specific fields */}
                  {formData.certificateType === "course" && (
                    <div className="border-b border-gray-200 pb-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">
                        Thông tin khóa học
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Điểm số/Xếp loại
                          </label>
                          <input
                            type="text"
                            value={formData.grade}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                grade: e.target.value,
                              })
                            }
                            placeholder="VD: Giỏi, A, 8.5..."
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">
                            Số tín chỉ
                          </label>
                          <input
                            type="number"
                            min="0"
                            step="0.5"
                            value={formData.creditsEarned}
                            onChange={(e) =>
                              setFormData({
                                ...formData,
                                creditsEarned: parseFloat(e.target.value) || 0,
                              })
                            }
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Certificate Images */}
                  <div className="pb-6">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">
                      Hình ảnh chứng chỉ
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hình mặt trước
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400">
                          <div className="space-y-1 text-center">
                            <Image className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                <span>Tải lên file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  accept="image/*"
                                />
                              </label>
                              <p className="pl-1">hoặc kéo thả</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF tối đa 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          Hình mặt sau
                        </label>
                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-lg hover:border-gray-400">
                          <div className="space-y-1 text-center">
                            <Image className="mx-auto h-12 w-12 text-gray-400" />
                            <div className="flex text-sm text-gray-600">
                              <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                <span>Tải lên file</span>
                                <input
                                  type="file"
                                  className="sr-only"
                                  accept="image/*"
                                />
                              </label>
                              <p className="pl-1">hoặc kéo thả</p>
                            </div>
                            <p className="text-xs text-gray-500">
                              PNG, JPG, GIF tối đa 10MB
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={resetForm}
                      className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                      {editingCertificate
                        ? "Cập nhật chứng chỉ"
                        : "Cấp chứng chỉ"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
