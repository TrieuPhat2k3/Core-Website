import React from "react";
import Button from "../ui/Button";


const announcements = [
  {
    id: 1,
    type: "Thông báo",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Thông báo số 1: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
    content: "Phần nội dung chính của thông báo/ thể lệ tham gia hội thảo",
    views: 102,
    date: "11/05/2025",
  },
  {
    id: 2,
    type: "Thông báo",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Thông báo số 2: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
    content: "Nội dung chi tiết của thông báo số 2.",
    views: 112,
    date: "01/06/2025",
  },
  {
    id: 3,
    type: "Thông báo",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Thông báo số 3: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
    content: "Nội dung chi tiết của thông báo số 3.",
    views: 10,
    date: "30/07/2025",
  },
  {
    id: 4,
    type: "Ấn phẩm",
    title: "HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN MÌNH - HỘI NHẬP",
    summary: "Ấn phẩm của Hội thảo Khoa học Quốc tế văn hóa và con người trong kỷ nguyên vươn mình - hội nhập",
    content: "Nội dung chi tiết của ấn phẩm.",
    views: 0,
    date: "",
  },
];

interface ConferenceDetailProps {
  id: string;
}

const ConferenceDetail: React.FC<ConferenceDetailProps> = ({ id }) => {
  const announcement = announcements.find(a => a.id.toString() === id);
  if (!announcement) {
    return <div className="bg-[#f8f9fa] rounded-lg p-8 max-w-2xl mx-auto mt-8 text-center text-red-600">Không tìm thấy thông báo.</div>;
  }
  return (
    <div className="bg-[#f8f9fa] rounded-lg p-8 max-w-2xl mx-auto mt-8">
      <div className="mb-4 flex items-center gap-3">
        <span className="px-3 py-1 rounded-full text-white text-sm font-bold bg-red-600">{announcement.type}</span>
        <span className="text-xs text-gray-400 flex items-center gap-2">
          <span>{announcement.views} views</span>
          <span>•</span>
          <span>{announcement.date}</span>
        </span>
      </div>
      <h2 className="text-2xl font-bold text-center mb-2">{announcement.summary}</h2>
      <h3 className="text-lg font-semibold text-center mb-4">{announcement.title}</h3>
      <p className="text-center text-gray-700 mb-10">{announcement.content}</p>
      <div className="flex flex-col items-center gap-3">
        <Button className="bg-red-600 text-white hover:bg-red-700 w-48">Xem thông báo</Button>
        <Button className="bg-red-600 text-white hover:bg-red-700 w-48">Đăng ký tham gia Hội thảo</Button>
      </div>
    </div>
  );
};

export default ConferenceDetail;