"use client";

import { useState } from "react";

interface Category {
  id: number;
  name: string;
  type: "conference" | "event" | "course";
  description: string;
  isActive: boolean;
  itemCount: number;
}

export default function CategoryManagement() {
  const [categories, setCategories] = useState<Category[]>([
    {
      id: 1,
      name: "Công Nghệ",
      type: "conference",
      description: "Hội nghị về công nghệ",
      isActive: true,
      itemCount: 5,
    },
    {
      id: 2,
      name: "Kinh Doanh",
      type: "event",
      description: "Sự kiện về kinh doanh",
      isActive: true,
      itemCount: 8,
    },
    {
      id: 3,
      name: "Lập Trình",
      type: "course",
      description: "Khóa hoc về lập trình",
      isActive: true,
      itemCount: 12,
    },
    {
      id: 4,
      name: "Marketing",
      type: "conference",
      description: "Hôi nghị về marketing",
      isActive: false,
      itemCount: 3,
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "conference" as "conference" | "event" | "course",
    description: "",
    isActive: true,
  });

  const [filterType, setFilterType] = useState<
    "Tất Cả" | "conference" | "event" | "course"
  >("Tất Cả");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (editingCategory) {
      setCategories(
        categories.map((cat) =>
          cat.id === editingCategory.id ? { ...cat, ...formData } : cat
        )
      );
    } else {
      const newCategory: Category = {
        id: Date.now(),
        ...formData,
        itemCount: 0,
      };
      setCategories([...categories, newCategory]);
    }

    setIsModalOpen(false);
    setEditingCategory(null);
    setFormData({
      name: "",
      type: "conference",
      description: "",
      isActive: true,
    });
  };

  const handleEdit = (category: Category) => {
    setEditingCategory(category);
    setFormData({
      name: category.name,
      type: category.type,
      description: category.description,
      isActive: category.isActive,
    });
    setIsModalOpen(true);
  };

  const handleDelete = (id: number) => {
    if (confirm("Bạn chắc chắn muốn xóa danh mục này?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  const toggleStatus = (id: number) => {
    setCategories(
      categories.map((cat) =>
        cat.id === id ? { ...cat, isActive: !cat.isActive } : cat
      )
    );
  };

  const filteredCategories =
    filterType === "Tất Cả"
      ? categories
      : categories.filter((cat) => cat.type === filterType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "conference":
        return "bg-blue-100 text-blue-800";
      case "event":
        return "bg-green-100 text-green-800";
      case "course":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Quản lý danh mục</h1>
        <button
          onClick={() => setIsModalOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Thêm danh mục
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="mb-6">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            {[
              { value: "Tất Cả", label: "Tất Cả" },
              { value: "conference", label: "Hội Thảo" },
              { value: "event", label: "Sự Kiện" },
              { value: "course", label: "Khóa Học" },
            ].map((type) => (
              <button
                key={type.value}
                onClick={() =>
                  setFilterType(
                    type.value as "Tất Cả" | "conference" | "event" | "course"
                  )
                }
                className={`py-2 px-1 border-b-2 font-medium text-sm capitalize ${
                  filterType === type.value
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {type.label}{" "}
                {type.value !== "Tất Cả" &&
                  `(${
                    categories.filter((cat) => cat.type === type.value).length
                  })`}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Categories Table */}
      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Tên Danh Mục
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Loại
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Chi Tiết
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Số Lượng
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Trạng Thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Hành Động
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredCategories.map((category) => (
              <tr key={category.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">
                    {category.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full capitalize ${getTypeColor(
                      category.type
                    )}`}
                  >
                    {category.type === "conference"
                      ? "Hội Thảo"
                      : category.type === "event"
                      ? "Sự Kiện"
                      : category.type === "course"
                      ? "Khóa Học"
                      : category.type}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900 max-w-xs truncate">
                    {category.description}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">
                    {category.itemCount}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => toggleStatus(category.id)}
                    className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                      category.isActive
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {category.isActive ? "Hoạt Động" : "Không Hoạt Động"}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <button
                    onClick={() => handleEdit(category)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Sửa
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
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

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <>
          {/* Overlay */}
          <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-40" />
          {/* Modal Content */}
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
            <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white z-50">
              <div className="mt-3">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  {editingCategory ? "Edit Category" : "Add New Category"}
                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Tên Danh Mục
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Loại
                    </label>
                    <select
                      value={formData.type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          type: e.target.value as
                            | "conference"
                            | "event"
                            | "course",
                        })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="conference">Hội Thảo</option>
                      <option value="event">Sự Kiện</option>
                      <option value="course">Khóa Học</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Chi Tiết
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
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id="isActive"
                      checked={formData.isActive}
                      onChange={(e) =>
                        setFormData({ ...formData, isActive: e.target.checked })
                      }
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label
                      htmlFor="isActive"
                      className="ml-2 block text-sm text-gray-900"
                    >
                      Hoạt Động
                    </label>
                  </div>
                  <div className="flex justify-end space-x-3 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsModalOpen(false);
                        setEditingCategory(null);
                        setFormData({
                          name: "",
                          type: "conference",
                          description: "",
                          isActive: true,
                        });
                      }}
                      className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                    >
                      Hủy
                    </button>
                    <button
                      type="submit"
                      className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                    >
                      {editingCategory ? "Cập Nhật" : "Thêm Mới"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
