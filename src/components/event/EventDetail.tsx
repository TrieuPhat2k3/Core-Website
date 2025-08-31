"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const events = [
  {
    id: 1,
    type: "Workshop",
    typeColor: "bg-red-600",
    title: "HỘI THẢO CHUYÊN ĐỀ IELTS & ESOL APTIS",
    summary: "Chiều ngày 18/06/2025, tại Trường Đại học Hùng Vương TP.HCM, hội thảo do 2G Education phối hợp cùng Trung tâm Văn hóa Doanh nghiệp - CORE tổ chức đã diễn ra thành công rực rỡ!",
    views: 1017,
    date: "18/06/2025",
    image: "window.svg",
    content: `
      <p>Chiều ngày 18/06/2025, tại Trường Đại học Hùng Vương TP.HCM, hội thảo do 2G Education phối hợp cùng Trung tâm Văn hóa Doanh nghiệp - CORE tổ chức đã diễn ra thành công rực rỡ!</p>
      
      <p>Sự kiện thu hút sự tham gia đông đảo của các bạn sinh viên, đặc biệt là sinh viên năm cuối đang chuẩn bị cho kỳ thi chuẩn đầu ra ngoại ngữ quốc tế – một cột mốc quan trọng trên hành trình chạm đến cơ hội học tập và nghề nghiệp tương lai.</p>
      
      <p>Diễn giả đồng hành cùng sự kiện:</p>

      <p></p>
    `,
    speaker: {
      name: "Chị Lương Thị Mỹ Hạnh",
      title: "Head of Academic at 2G Signature Campus, ACC (ICF) certified coach",
      experience: "Hơn 10 năm kinh nghiệm trong việc thiết kế và phát triển các chương trình đào tạo",
      image: "/assets/student.png"
    },
    benefits: [
      "Hiểu rõ cấu trúc & sự khác biệt giữa IELTS và APTIS",
      "Nắm bắt chiến lược ôn luyện sát thực tế và dễ áp dụng",
      "Giải đáp trực tiếp thắc mắc cá nhân, định hướng lộ trình thi phù hợp",
      "Nhận bộ tài liệu luyện thi chất lượng và những phần quà hấp dẫn từ BTC"
    ]
  },
  {
    id: 2,
    type: "Danh mục sự kiện",
    typeColor: "bg-red-600",
    title: "TÊN SỰ KIỆN",
    summary: "Mô tả ngắn về sự kiện...",
    views: 0,
    date: "/.../...",
    image: "/assets/business.jpg",
  },
  {
    id: 3,
    type: "Danh mục sự kiện",
    typeColor: "bg-red-600",
    title: "TÊN SỰ KIỆN",
    summary: "Mô tả ngắn về sự kiện...",
    views: 0,
    date: "/.../...",
    image: "/assets/conference.jpeg",
  }
];

interface EventDetailProps {
  id: string;
}

const EventDetail: React.FC<EventDetailProps> = ({ id }) => {
  const [currentRelatedPage, setCurrentRelatedPage] = useState(1);
  const relatedEventsPerPage = 2;
  
  const event = events.find(e => e.id.toString() === id);
  
  if (!event) {
    return (
      <div className="bg-[#f8f9fa] rounded-lg p-8 max-w-4xl mx-auto mt-8 text-center text-red-600">
        Không tìm thấy sự kiện.
      </div>
    );
  }
  const relatedEvents = events.filter(e => e.id !== event.id);
  const totalRelatedPages = Math.ceil(relatedEvents.length / relatedEventsPerPage);
  const currentRelatedEvents = relatedEvents.slice(
    (currentRelatedPage - 1) * relatedEventsPerPage,
    currentRelatedPage * relatedEventsPerPage
  );

  return (
    <div className="max-w-4xl mx-auto mt-8 space-y-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Tìm kiếm Sự kiện"
              className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
            />
          </div>
          <button className="px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors">
            Tìm kiếm
          </button>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm p-8">
        <div className="mb-6">
          <div className="text-gray-600 mb-2">{event.date}</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{event.title}</h1>
        </div>

        <div className="mb-6">
          <div className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden mb-4">
            <Image
              src={event.image}
              alt="Hình ảnh sự kiện"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-center text-gray-700 italic">
            {event.title}: HIỂU ĐÚNG – CHỌN ĐÚNG – VỀ ĐÍCH HIỆU QUẢ
          </p>
        </div>

        <div className="prose max-w-none mb-8">
          <div dangerouslySetInnerHTML={{ __html: event.content || "" }} />
        </div>

        {event.benefits && (
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Hội thảo đã mang lại nhiều giá trị thiết thực cho người tham dự:
            </h3>
            <ul className="space-y-2">
              {event.benefits.map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">☑</span>
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {event.speaker && (
          <div className="mb-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              {event.speaker.name} – {event.speaker.title}
            </h3>
            <p className="text-gray-700 mb-4">{event.speaker.experience}</p>
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden">
                <Image
                  src={event.speaker.image}
                  alt={event.speaker.name}
                  width={80}
                  height={80}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        )}

        <div className="mb-8 p-6 bg-blue-50 rounded-lg">
          <p className="text-gray-700 mb-4">
            Cảm ơn 2G Education, các giảng viên và sinh viên đã tham gia hội thảo đầy cảm hứng và thiết thực này. 
            Bạn có thể xem album ảnh sự kiện tại: 
            <a href="https://www.facebook.com/share/p/1JkGuc6Sqt/" className="text-blue-600 hover:underline ml-1">
              https://www.facebook.com/share/p/1JkGuc6Sqt/
            </a>
          </p>
          <p className="text-gray-700">
            Hãy theo dõi Fanpage Trung tâm Văn hóa Doanh nghiệp-CORE-DHV để cập nhật các chương trình học thuật và kỹ năng mới nhất!
          </p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Liên hệ Trung tâm Văn hóa Doanh Nghiệp – CORE:
          </h3>
          <div className="space-y-2 text-gray-700">
            <p><strong>Địa chỉ:</strong> 736 Nguyễn Trãi, Phường 11, Quận 5, TP.HCM</p>
            <p><strong>Email:</strong> core@dhv.edu.vn</p>
            <p><strong>Hotline:</strong> 0934 827 742</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Tin tức liên quan:</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {currentRelatedEvents.map((relatedEvent) => (
            <Link href={`/event/${relatedEvent.id}`} key={relatedEvent.id} className="block">
              <div className="border rounded-lg p-4 hover:shadow-md transition">
                <div className="w-full h-32 bg-gray-300 rounded-lg mb-3 relative">
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 rounded text-white text-xs font-bold ${relatedEvent.typeColor}`}>
                      {relatedEvent.type}
                    </span>
                  </div>
                  <Image
                    src={relatedEvent.image}
                    alt="Hình ảnh sự kiện"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{relatedEvent.title}</h4>
                <p className="text-sm text-gray-600">{relatedEvent.summary}</p>
              </div>
            </Link>
          ))}
        </div>

        {totalRelatedPages > 1 && (
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalRelatedPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentRelatedPage(page)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentRelatedPage === page
                    ? "bg-red-600"
                    : "bg-blue-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default EventDetail;
