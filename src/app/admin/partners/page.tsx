"use client";

import React, { useState } from "react";

interface Partner {
  id: number;
  name: string;
  logo: string;
}

export default function PartnerManagement() {
  const [partners, setPartners] = useState<Partner[]>([
    { id: 1, name: "Green Academy", logo: "/assets/GreenAcademy-logo.png" },
    { id: 2, name: "MB Bank", logo: "/assets/MB-Bank-logo.png" },
    { id: 3, name: "IAIB", logo: "/assets/IAIB-logo.jpg" },
    { id: 4, name: "iSpace", logo: "/assets/iSpace-logo.png" },
    { id: 5, name: "EasyEdu", logo: "/assets/EasyEdu-logo.png" },
    { id: 6, name: "NewGym", logo: "/assets/NewGym-logo.png" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPartner, setEditingPartner] = useState<Partner | null>(null);
  const [formData, setFormData] = useState({ name: "", logo: "" });

  const openModal = (partner: Partner | null = null) => {
    setEditingPartner(partner);
    setFormData(partner ? { name: partner.name, logo: partner.logo } : { name: "", logo: "" });
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setEditingPartner(null);
    setFormData({ name: "", logo: "" });
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingPartner) {
      setPartners(partners.map(p => p.id === editingPartner.id ? { ...p, ...formData } : p));
    } else {
      setPartners([...partners, { id: partners.length ? Math.max(...partners.map(p => p.id)) + 1 : 1, ...formData }]);
    }
    closeModal();
  };
  const handleDelete = (id: number) => {
    if (window.confirm("Bạn có chắc chắn muốn xóa đối tác này?")) {
      setPartners(partners.filter(p => p.id !== id));
    }
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý đối tác</h1>
          <p className="mt-1 text-sm text-gray-500">Thêm, sửa, xóa các đối tác của hệ thống</p>
        </div>
        <button
          onClick={() => openModal()}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Thêm đối tác
        </button>
      </div>
      <div className="bg-white shadow overflow-hidden rounded-lg">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Logo</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên đối tác</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {partners.map((partner) => (
                <tr key={partner.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img src={partner.logo} alt={partner.name} className="h-12 w-auto rounded bg-slate-100" style={{ maxWidth: "90px" }} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{partner.name}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => openModal(partner)}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      Sửa
                    </button>
                    <button
                      onClick={() => handleDelete(partner.id)}
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
          <div className="fixed inset-0 bg-gray-500 opacity-75 z-40" aria-hidden="true" onClick={closeModal}></div>
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center">
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full z-50">
              <form onSubmit={handleSubmit}>
                <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mb-4">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">
                      {editingPartner ? "Sửa đối tác" : "Thêm đối tác mới"}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên đối tác</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="logo" className="block text-sm font-medium text-gray-700">Logo URL</label>
                      <input
                        type="text"
                        name="logo"
                        id="logo"
                        value={formData.logo}
                        onChange={handleChange}
                        required
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
                    {editingPartner ? "Cập nhật" : "Thêm"}
                  </button>
                  <button
                    type="button"
                    onClick={closeModal}
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