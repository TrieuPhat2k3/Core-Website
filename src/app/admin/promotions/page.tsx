"use client";

import React, { useEffect, useState } from "react";
import { getPromotions, editPromotion, Promotion } from "@/api/promotions";

export default function PromotionsPage() {
  const [promotion, setPromotion] = useState<Promotion | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<Promotion | null>(null);

  // Load promotion on mount (assume only one main promotion for now)
  useEffect(() => {
    (async () => {
      const data = await getPromotions();
      setPromotion(data[0] || null);
      setFormData(data[0] || null);
    })();
  }, []);

  const openModal = () => {
    setFormData(promotion);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!formData) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData || !promotion) return;
    const updated = await editPromotion(promotion.id, formData);
    setPromotion(updated || formData);
    setFormData(updated || formData);
    closeModal();
  };

  return (
    <div className="space-y-6 p-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Quản lý quảng cáo</h1>
          <p className="mt-1 text-sm text-gray-500">Tùy chỉnh nội dung quảng bá sự kiện chính của viện (PartnerCTA)</p>
        </div>
        <button
          onClick={openModal}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Chỉnh sửa quảng cáo
        </button>
      </div>
      <div className="bg-white shadow overflow-hidden rounded-lg p-6">
        {promotion && (
          <section className="relative overflow-hidden bg-[#F4F8FF] py-10">
            <div className="relative grid items-center gap-8 md:grid-cols-2 z-10">
              <div className="order-1 md:order-2 flex items-center justify-center">
                <img
                  className="mx-auto w-full max-w-lg rounded-2xl object-cover"
                  src={promotion.image}
                  alt="Students"
                  width={400}
                  height={300}
                />
              </div>
              <div className="order-2 md:order-1 flex flex-col items-start justify-center">
                <div className="mb-4 flex items-center gap-3">
                  <span className="text-2xl font-extrabold text-blue-700">
                    {promotion.title}
                  </span>
                </div>
                <h4 className="mb-2 text-lg font-bold text-blue-900 leading-tight">
                  {promotion.subtitle}
                </h4>
                <p className="mb-6 text-base text-[#1E2952]">
                  {promotion.description}
                </p>
                <div className="flex w-full justify-center">
                  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-sm">
                    <div className="text-center font-bold text-xl text-blue-900 mb-4">
                      ĐĂNG KÝ NHẬN<br />THÔNG TIN CHƯƠNG TRÌNH
                    </div>
                    <a href={promotion.registrationLink}>
                      <button className="w-full rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 py-3 text-base shadow-md">
                        {promotion.buttonText}
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
      {/* Modal Edit */}
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
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Chỉnh sửa quảng cáo</h3>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
                      <input
                        type="text"
                        name="title"
                        id="title"
                        value={formData?.title || ""}
                        onChange={formData ? handleChange : undefined}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Phụ đề</label>
                      <input
                        type="text"
                        name="subtitle"
                        id="subtitle"
                        value={formData?.subtitle || ""}
                        onChange={formData ? handleChange : undefined}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-gray-700">Mô tả</label>
                      <textarea
                        name="description"
                        id="description"
                        rows={3}
                        value={formData?.description || ""}
                        onChange={formData ? handleChange : undefined}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="image" className="block text-sm font-medium text-gray-700">Ảnh URL</label>
                      <input
                        type="text"
                        name="image"
                        id="image"
                        value={formData?.image || ""}
                        onChange={formData ? handleChange : undefined}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="registrationLink" className="block text-sm font-medium text-gray-700">Link đăng ký</label>
                      <input
                        type="text"
                        name="registrationLink"
                        id="registrationLink"
                        value={formData?.registrationLink || ""}
                        onChange={formData ? handleChange : undefined}
                        required
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700">Nội dung nút đăng ký</label>
                      <input
                        type="text"
                        name="buttonText"
                        id="buttonText"
                        value={formData?.buttonText || ""}
                        onChange={formData ? handleChange : undefined}
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
                    Lưu
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
