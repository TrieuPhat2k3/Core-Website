"use client";

import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "",
    phone: "",
    province: "",
    content: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="space-y-12">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">
          Liên hệ
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Email: <span className="font-medium">core@dhv.edu.vn</span>
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Họ và Tên"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Tiêu đề"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Số điện thoại"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="province"
                  placeholder="Tỉnh thành"
                  value={formData.province}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
            </div>
          </div>
          <div>
            <textarea
              name="content"
              placeholder="Nội dung"
              value={formData.content}
              onChange={handleChange}
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
              required
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="px-12 py-4 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors text-lg"
            >
              GỬI
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
          Vị trí của chúng tôi
        </h3>
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.6630429293546!2d106.67832447504269!3d10.837077789315403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175295ca1e469f7%3A0x4950eeb6801501d3!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBIw7luZyBWxrDGoW5nIFRQLiBI4buTIENow60gTWluaCAoREhWKQ!5e0!3m2!1sen!2sus!4v1758621156071!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-lg w-full max-w-4xl"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
