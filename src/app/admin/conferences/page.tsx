"use client";

import React, { useState } from "react";

interface Conference {
  id: number;
  title: string;
  date: string;
  location: string;
  status: "upcoming" | "ongoing" | "completed";
  featured: boolean;
}

export default function ConferenceManagement() {
  const [conferences, setConferences] = useState<Conference[]>([
    {
      id: 1,
      title: "Hội thảo về Trí tuệ nhân tạo trong Giáo dục",
      date: "15/08/2023",
      location: "Hội trường A, Học viện CORE",
      status: "completed",
      featured: true,
    },
    {
      id: 2,
      title: "Xu hướng Công nghệ 2023",
      date: "20/09/2023",
      location: "Hội trường B, Học viện CORE",
      status: "completed",
      featured: false,
    },
    {
      id: 3,
      title: "Phát triển kỹ năng lãnh đạo",
      date: "10/12/2023",
      location: "Trung tâm Hội nghị Quốc tế",
      status: "upcoming",
      featured: true,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentConference, setCurrentConference] = useState<Conference | null>(
    null
  );
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    location: "",
    status: "upcoming",
    featured: false,
    description: "",
    image: "",
  });

  const handleOpenModal = (conference: Conference | null = null) => {
    if (conference) {
      setCurrentConference(conference);
      setFormData({
        title: conference.title,
        date: conference.date,
        location: conference.location,
        status: conference.status,
        featured: conference.featured,
        description: "",
        image: "",
      });
    } else {
      setCurrentConference(null);
      setFormData({
        title: "",
        date: "",
        location: "",
        status: "upcoming",
        featured: false,
        description: "",
        image: "",
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentConference(null);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (currentConference) {
      // Update Conferences
      setConferences(
        conferences.map((conference) =>
          conference.id === currentConference.id
            ? {
                ...conference,
                title: formData.title,
                date: formData.date,
                location: formData.location,
                status: formData.status as "upcoming" | "ongoing" | "completed",
                featured: formData.featured,
              }
            : conference
        )
      );
    } else {
      // Add Conferences
      const newConference: Conference = {
        id:
          conferences.length > 0
            ? Math.max(...conferences.map((s) => s.id)) + 1
            : 1,
        title: formData.title,
        date: formData.date,
        location: formData.location,
        status: formData.status as "upcoming" | "ongoing" | "completed",
        featured: formData.featured,
      };
      setConferences([...conferences, newConference]);
    }

    handleCloseModal();
  };

  const deleteConference = (conferenceId: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa hội thảo này?")) {
      setConferences(
        conferences.filter((conference) => conference.id !== conferenceId)
      );
    }
  };

  const toggleFeatured = (conferenceId: number) => {
    setConferences(
      conferences.map((conference) =>
        conference.id === conferenceId
          ? { ...conference, featured: !conference.featured }
          : conference
      )
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý hội thảo</h1>
          <p className="mt-1 text-sm text-gray-500">
            Thêm, sửa, xóa các hội thảo của học viện
          </p>
        </div>
        <div className="flex space-x-3">
          <button
            onClick={() => handleOpenModal()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Thêm hội thảo
          </button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Tiêu đề
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Ngày
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Địa điểm
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Trạng thái
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Nổi bật
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {conferences.map((conference) => (
                <tr key={conference.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {conference.title}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {conference.date}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-500">
                      {conference.location}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        conference.status === "upcoming"
                          ? "bg-yellow-100 text-yellow-800"
                          : conference.status === "ongoing"
                          ? "bg-green-100 text-green-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {conference.status === "upcoming"
                        ? "Sắp diễn ra"
                        : conference.status === "ongoing"
                        ? "Đang diễn ra"
                        : "Đã kết thúc"}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => toggleFeatured(conference.id)}
                      className={`px-2 py-1 text-xs rounded ${
                        conference.featured
                          ? "bg-blue-100 text-blue-800"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      {conference.featured ? "Có" : "Không"}
                    </button>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleOpenModal(conference)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => deleteConference(conference.id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Add/Edit */}
      {isModalOpen && (
        <React.Fragment>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-gray-500 opacity-75 z-40"
            aria-hidden="true"
            onClick={handleCloseModal}
          ></div>
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-50">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {currentConference ? "Sửa hội thảo" : "Thêm hội thảo mới"}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Tiêu đề
                      </label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="date"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Ngày
                      </label>
                      <input
                        type="text"
                        name="date"
                        id="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                        placeholder="DD/MM/YYYY"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="location"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Địa điểm
                      </label>
                      <input
                        type="text"
                        name="location"
                        id="location"
                        value={formData.location}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="status"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Trạng thái
                      </label>
                      <select
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      >
                        <option value="upcoming">Sắp diễn ra</option>
                        <option value="ongoing">Đang diễn ra</option>
                        <option value="completed">Đã kết thúc</option>
                      </select>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="featured"
                        name="featured"
                        type="checkbox"
                        checked={formData.featured}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label
                        htmlFor="featured"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Đánh dấu là nổi bật
                      </label>
                    </div>
                    <div>
                      <label
                        htmlFor="description"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Mô tả
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        rows={3}
                        value={formData.description}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="image"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Hình ảnh URL
                      </label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        value={formData.image}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    {currentConference ? "Cập nhật" : "Thêm"}
                  </button>
                  <button
                    type="button"
                    onClick={handleCloseModal}
                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
