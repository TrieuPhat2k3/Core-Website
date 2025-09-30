"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Link from "next/link";

const newsPages = [
  [
    {
      type: "Doanh nghiệp",
      typeColor: "bg-rose-50 text-rose-600",
      title: "Nghệ Thuật Đàm Phán Trong Kinh Doanh",
      desc: 'Thông báo mở lớp khóa học "Nghệ Thuật Đàm Phán Trong Kinh Doanh"',
      image: "/assets/business.jpg",
      gradient: "",
      button: "ĐANG MỞ LỚP",
      buttonClass:
        "border border-blue-600 bg-white text-blue-700 hover:bg-blue-50",
      date: "2025-09-01",
    },
    {
      type: "Workshop",
      typeColor: "bg-orange-50 text-orange-600",
      title: "HỘI THẢO CHUYÊN ĐỀ IELTS & ESOL APTIS",
      desc: "Chiều ngày 18/06/2025, tại Trường Đại học Hùng Vương TP.HCM, hội thảo do 2G Education phối hợp cùng Trung tâm Văn hóa Doanh nghiệp – CORE tổ chức đã thành công rực rỡ!",
      image: null,
      gradient: "bg-gradient-to-br from-orange-100 to-orange-200",
      button: null,
      buttonClass: "",
      date: "2025-06-18",
    },
    {
      type: "Thông báo",
      typeColor: "bg-blue-50 text-blue-700",
      title:
        "Hội thảo Khoa học Quốc tế văn hóa và con người trong kỷ nguyên vươn mình - hội nhập",
      desc: "Bản thông báo số 1: Hội thảo Khoa học Quốc tế Văn hóa và con người trong kỷ nguyên vươn mình - Hội nhập",
      image: null,
      gradient: "bg-gradient-to-br from-slate-100 to-slate-200",
      button: null,
      buttonClass: "",
      date: "2025-05-01",
    },
  ],
  [
    {
      type: "Sự kiện",
      typeColor: "bg-green-50 text-green-700",
      title: "Khai giảng lớp Quản trị nhân sự",
      desc: "Lớp Quản trị nhân sự khai giảng vào ngày 10/09/2025 tại CORE.",
      image: null,
      gradient: "bg-gradient-to-br from-green-100 to-green-200",
      button: "ĐĂNG KÝ NGAY",
      buttonClass:
        "border border-green-600 bg-white text-green-700 hover:bg-green-50",
      date: "2025-09-10",
    },
    {
      type: "Tin tức",
      typeColor: "bg-yellow-50 text-yellow-700",
      title: "CORE hợp tác cùng Green Academy",
      desc: "CORE chính thức hợp tác cùng Green Academy trong lĩnh vực đào tạo kỹ năng mềm.",
      image: "/assets/business.jpg",
      gradient: "",
      button: null,
      buttonClass: "",
      date: "2025-08-15",
    },
    {
      type: "Thông báo",
      typeColor: "bg-blue-50 text-blue-700",
      title: "Thông báo tuyển sinh khóa học mới",
      desc: "CORE thông báo tuyển sinh các khóa học mới bắt đầu từ tháng 9/2025.",
      image: null,
      gradient: "bg-gradient-to-br from-blue-100 to-blue-200",
      button: null,
      buttonClass: "",
      date: "2025-08-01",
    },
  ],
  [
    {
      type: "Workshop",
      typeColor: "bg-orange-50 text-orange-600",
      title: "Workshop Kỹ năng giao tiếp",
      desc: "Workshop kỹ năng giao tiếp sẽ diễn ra vào ngày 20/09/2025 tại CORE.",
      image: null,
      gradient: "bg-gradient-to-br from-orange-100 to-orange-200",
      button: "THAM GIA NGAY",
      buttonClass:
        "border border-orange-600 bg-white text-orange-700 hover:bg-orange-50",
      date: "2025-09-20",
    },
    {
      type: "Tin tức",
      typeColor: "bg-yellow-50 text-yellow-700",
      title: "CORE nhận giải thưởng đào tạo xuất sắc",
      desc: "CORE vinh dự nhận giải thưởng đào tạo xuất sắc năm 2025.",
      image: null,
      gradient: "bg-gradient-to-br from-yellow-100 to-yellow-200",
      button: null,
      buttonClass: "",
      date: "2025-09-05",
    },
    {
      type: "Doanh nghiệp",
      typeColor: "bg-rose-50 text-rose-600",
      title: "Hợp tác doanh nghiệp mới",
      desc: "CORE ký kết hợp tác với doanh nghiệp mới trong lĩnh vực đào tạo.",
      image: "/assets/business.jpg",
      gradient: "",
      button: null,
      buttonClass: "",
      date: "2025-08-20",
    },
  ],
];

const News: React.FC = () => {
  const [page, setPage] = useState(0);
  const sortedNewsPages = newsPages.map(pageArr => [...pageArr].sort((a, b) => (b.date > a.date ? 1 : b.date < a.date ? -1 : 0)));
  const currentNews = sortedNewsPages[page];

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev === newsPages.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#EEF5FF] py-12">
      <Container>
        <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-blue-900">
          TIN TỨC NỔI BẬT
        </h3>
        <div className="relative">
          <button
            aria-label="Prev"
            className="absolute -left-16 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-400 bg-white p-3 shadow-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() =>
              setPage(page === 0 ? newsPages.length - 1 : page - 1)
            }
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
          </button>
          <div className="grid gap-6 md:grid-cols-3">
            {currentNews.map((item, idx) => (
              <Link href="/public/event" key={idx} className="block">
                <article className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 cursor-pointer hover:shadow-md transition-shadow">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full object-cover rounded-t-2xl"
                    />
                  ) : (
                    <div className={`h-40 w-full ${item.gradient || ""}`} />
                  )}
                  <div className="p-5">
                    <span
                      className={`rounded px-2 py-1 text-xs font-bold ${item.typeColor}`}
                    >
                      {item.type}
                    </span>
                    <h5 className="mt-3 text-base font-bold text-slate-900">
                      {item.title}
                    </h5>
                    <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                      {item.desc}
                    </p>
                    {item.button && (
                      <Link href="/public/course">
                        <Button className={`mt-4 w-full ${item.buttonClass}`}>
                          {item.button}
                        </Button>
                      </Link>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
          <button
            aria-label="Next"
            className="absolute -right-16 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-400 bg-white p-3 shadow-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            onClick={() =>
              setPage(page === newsPages.length - 1 ? 0 : page + 1)
            }
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {newsPages.map((_, idx) => (
            <button
              key={idx}
              aria-label={`Trang ${idx + 1}`}
              className={`h-2 w-2 rounded-full transition-colors duration-200 focus:outline-none ${
                page === idx ? "bg-red-600 scale-125" : "bg-slate-400"
              }`}
              onClick={() => setPage(idx)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default News;
