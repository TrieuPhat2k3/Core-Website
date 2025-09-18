import React from "react";
import Container from "./ui/Container";
import { Phone, Mail, MapPin } from "lucide-react";

const quickLinks = [
  { label: "Trang chủ", href: "/home" },
  { label: "Giới thiệu", href: "/overview" },
  { label: "Hội thảo", href: "/conference" },
  { label: "Sự kiện", href: "/event" },
  { label: "Khóa học", href: "/course" },
  { label: "Liên Hệ", href: "/contact" },
  { label: "Chính sách & Điều khoản", href: "/policy" },
];

const Footer: React.FC = () => (
  <footer className="bg-[#0E2453] text-white">
    <Container className="py-10 px-6 md:px-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between md:gap-24 gap-10">
        <div className="flex-1 flex flex-col items-center md:items-start md:justify-center">
          <div className="mb-6 text-5xl font-extrabold tracking-tight">
            CORE
          </div>
          <div className="text-sm mb-8 opacity-80 text-center md:text-left">
            VIỆN VĂN HÓA DOANH NGHIỆP
          </div>
          <div className="flex gap-6 mt-2 mb-2">
            <a
              href="#"
              aria-label="Facebook"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <span className="sr-only">Facebook</span>
              <img
                src="/assets/facebook-icon.svg"
                alt="Facebook"
                className="h-6 w-6 object-contain"
              />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <span className="sr-only">TikTok</span>
              <img
                src="/assets/tiktok-icon.svg"
                alt="TikTok"
                className="h-6 w-6 object-contain"
              />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <span className="sr-only">YouTube</span>
              <img
                src="/assets/youtube-icon.svg"
                alt="YouTube"
                className="h-6 w-6 object-contain"
              />
            </a>
            <a
              href="#"
              aria-label="Zalo"
              className="h-8 w-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <span className="sr-only">Zalo</span>
              <img
                src="/assets/zalo-icon.svg"
                alt="Zalo"
                className="h-6 w-6 object-contain"
              />
            </a>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-center justify-center">
          <div className="mb-3 text-base font-bold uppercase tracking-wider opacity-90 text-left w-full">
            LIÊN KẾT NHANH
          </div>
          <div className="grid grid-cols-2 gap-x-8 gap-y-2 w-full text-base opacity-90">
            {quickLinks.map((item, i) => (
              <div key={i} className="flex justify-start">
                <a
                  href={item.href}
                  className="hover:underline flex items-center gap-2"
                >
                  <span className="text-lg">&gt;</span> {item.label}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center md:items-end justify-center">
          <div className="mb-3 text-base font-bold uppercase tracking-wider opacity-90 text-left w-full">
            LIÊN HỆ
          </div>
          <ul className="space-y-2 text-base opacity-90">
            <li className="flex items-center gap-3 md:gap-5">
              <Phone className="h-5 w-5" /> 0000 000 000
            </li>
            <li className="flex items-center gap-3 md:gap-5">
              <Mail className="h-5 w-5" /> core@dhv.edu.vn
            </li>
            <li className="flex items-center gap-3 md:gap-5">
              <MapPin className="h-6 w-6" /> 194 Đ. Lê Đức Thọ, P. 6, Gò Vấp, TP.HCM
            </li>
          </ul>
        </div>
      </div>
    </Container>
    <div className="border-t border-white/10">
      <Container className="flex items-center justify-between py-4 text-xs opacity-70">
        <p>© {new Date().getFullYear()} CORE. All rights reserved.</p>
        <p>Made for demo • React + Tailwind</p>
      </Container>
    </div>
  </footer>
);

export default Footer;
