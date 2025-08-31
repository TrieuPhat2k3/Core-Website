import React from "react";
import Link from "next/link";
import Image from "next/image";

const announcements = [
  {
    id: 1,
    type: "Thông báo",
    typeColor: "bg-red-600",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Thông báo số 1: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
    views: 102,
    date: "11/05/2025",
    image: "window.svg",
  },
  {
    id: 2,
    type: "Thông báo",
    typeColor: "bg-red-600",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Thông báo số 2: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
    views: 112,
    date: "01/06/2025",
    image: "window.svg",
  },
  {
    id: 3,
    type: "Thông báo",
    typeColor: "bg-red-600",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Thông báo số 3: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
    views: 10,
    date: "30/07/2025",
    image: "window.svg",
  },
  {
    id: 4,
    type: "Ấn phẩm",
    typeColor: "bg-blue-700",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Ấn phẩm của Hội thảo Khoa học Quốc tế văn hóa và con người trong kỷ nguyên vươn mình - hội nhập",
    views: 0,
    date: "",
    image: "window.svg",
  },
];

const ConferenceList: React.FC = () => (
  <div className="space-y-8">
    {announcements.map((item) => (
      <Link href={`/conference/${item.id}`} key={item.id} className="block">
        <div className="flex bg-[#f8f9fa] rounded-lg shadow-sm p-4 gap-6 hover:shadow-md transition">
          <div className="flex-shrink-0 w-32 h-32 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-sm font-semibold">
            <Image src={item.image} alt="Hình của bản tin" width={128} height={128} className="object-cover rounded-lg" />
            {!item.image && <span>Hình của bản tin</span>}
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-white text-sm font-bold ${item.typeColor}`}>{item.type}</span>
              <span className="text-xs text-gray-400 flex items-center gap-2">
                <span>{item.views} views</span>
                <span>•</span>
                <span>{item.date}</span>
              </span>
            </div>
            <div>
              <h4 className="font-bold text-blue-900 leading-tight mb-1">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.summary}</p>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

export default ConferenceList;