"use client";

import React, { useState } from "react";

interface Banner {
	id: number;
	name: string;
	image: string;
	title: string;
	subtitle: string;
	heroFile: string;
}

const initialBanners: Banner[] = [
	{
		id: 1,
		name: "Trang chủ",
		image: "/assets/banner.png",
		title: "CORE",
		subtitle: "Đổi mới sáng tạo và hội tụ văn hóa doanh nghiệp",
		heroFile: "Hero.tsx",
	},
	{
		id: 2,
		name: "Giới thiệu",
		image: "/assets/banner.png",
		title: "CORE",
		subtitle: "Trang chủ | Giới thiệu",
		heroFile: "HeroOverview.tsx",
	},
	{
		id: 3,
		name: "Khóa học",
		image: "/assets/course-banner.jpg",
		title: "Khóa học",
		subtitle: "Trang chủ | Khóa học | Khóa học ngắn hạn",
		heroFile: "HeroCourse.tsx",
	},
	{
		id: 4,
		name: "Chứng nhận",
		image: "/assets/course-banner.jpg",
		title: "CORE",
		subtitle: "Trang chủ | Khóa học | Tra cứu giấy chứng nhận",
		heroFile: "HeroCertificate.tsx",
	},
	{
		id: 5,
		name: "Hội thảo",
		image: "/assets/conference-banner.png",
		title: "Hội thảo",
		subtitle: "Trang chủ | Hội thảo",
		heroFile: "HeroConference.tsx",
	},
	{
		id: 6,
		name: "Sự kiện",
		image: "/assets/event-banner.jpg",
		title: "Sự kiện",
		subtitle: "Trang chủ | Sự kiện",
		heroFile: "HeroEvent.tsx",
	},
  {
		id: 7,
		name: "Liên hệ",
		image: "/assets/puzzle-pieces3.jpg",
		title: "Sự kiện",
		subtitle: "Trang chủ | Liên Hệ",
		heroFile: "HeroContact.tsx",
	},
];

export default function BannerManagement() {
	const [banners, setBanners] = useState<Banner[]>(initialBanners);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [editingBanner, setEditingBanner] = useState<Banner | null>(null);
	const [formData, setFormData] = useState({ name: "", image: "", title: "", subtitle: "", heroFile: "" });

	const openModal = (banner: Banner | null = null) => {
		setEditingBanner(banner);
		setFormData(banner ? { name: banner.name, image: banner.image, title: banner.title, subtitle: banner.subtitle, heroFile: banner.heroFile } : { name: "", image: "", title: "", subtitle: "", heroFile: "" });
		setIsModalOpen(true);
	};
	const closeModal = () => {
		setIsModalOpen(false);
		setEditingBanner(null);
		setFormData({ name: "", image: "", title: "", subtitle: "", heroFile: "" });
	};
	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (editingBanner) {
			setBanners(banners.map(b => b.id === editingBanner.id ? { ...b, ...formData } : b));
		} else {
			setBanners([...banners, { id: banners.length ? Math.max(...banners.map(b => b.id)) + 1 : 1, ...formData }]);
		}
		closeModal();
	};
	const handleDelete = (id: number) => {
		if (window.confirm("Bạn có chắc chắn muốn xóa banner này?")) {
			setBanners(banners.filter(b => b.id !== id));
		}
	};

	return (
		<div className="space-y-6 p-6">
			<div className="flex justify-between items-center">
				<div>
					<h1 className="text-2xl font-bold text-gray-900">Quản lý banner</h1>
					<p className="mt-1 text-sm text-gray-500">Thêm, sửa, xóa các banner của hệ thống (đồng bộ các Hero files)</p>
				</div>
				<button
					onClick={() => openModal()}
					className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
				>
					Thêm banner
				</button>
			</div>
			<div className="bg-white shadow overflow-hidden rounded-lg">
				<div className="overflow-x-auto">
					<table className="min-w-full divide-y divide-gray-200">
						<thead className="bg-gray-50">
							<tr>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ảnh</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên banner</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tiêu đề</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phụ đề</th>
								<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hero file</th>
								<th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Thao tác</th>
							</tr>
						</thead>
						<tbody className="bg-white divide-y divide-gray-200">
							{banners.map((banner) => (
								<tr key={banner.id}>
									<td className="px-6 py-4 whitespace-nowrap">
										<img src={banner.image} alt={banner.name} className="h-12 w-auto rounded bg-slate-100" style={{ maxWidth: "90px" }} />
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm font-medium text-gray-900">{banner.name}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-900">{banner.title}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-sm text-gray-500">{banner.subtitle}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap">
										<div className="text-xs text-gray-500">{banner.heroFile}</div>
									</td>
									<td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
										<button
											onClick={() => openModal(banner)}
											className="text-blue-600 hover:text-blue-900 mr-4"
										>
											Sửa
										</button>
										<button
											onClick={() => handleDelete(banner.id)}
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
											{editingBanner ? "Sửa banner" : "Thêm banner mới"}
										</h3>
									</div>
									<div className="space-y-4">
										<div>
											<label htmlFor="name" className="block text-sm font-medium text-gray-700">Tên banner</label>
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
											<label htmlFor="image" className="block text-sm font-medium text-gray-700">Ảnh URL</label>
											<input
												type="text"
												name="image"
												id="image"
												value={formData.image}
												onChange={handleChange}
												required
												className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
											/>
										</div>
										<div>
											<label htmlFor="title" className="block text-sm font-medium text-gray-700">Tiêu đề</label>
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
											<label htmlFor="subtitle" className="block text-sm font-medium text-gray-700">Phụ đề</label>
											<input
												type="text"
												name="subtitle"
												id="subtitle"
												value={formData.subtitle}
												onChange={handleChange}
												required
												className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
											/>
										</div>
										<div>
											<label htmlFor="heroFile" className="block text-sm font-medium text-gray-700">Hero file</label>
											<input
												type="text"
												name="heroFile"
												id="heroFile"
												value={formData.heroFile}
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
										{editingBanner ? "Cập nhật" : "Thêm"}
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
