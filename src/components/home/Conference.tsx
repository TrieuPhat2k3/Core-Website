import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Conference: React.FC = () => (
  <section className="bg-white py-12">
    <Container className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <h3 className="text-xl font-bold leading-tight text-blue-900">
          HỘI THẢO KHOA HỌC QUỐC TẾ VĂN HÓA VÀ CON NGƯỜI TRONG KỶ NGUYÊN VƯƠN
          MÌNH - HỘI NHẬP
        </h3>
        <p className="mt-3 text-sm leading-6 text-slate-700">
          Trong chuỗi sự kiện chào mừng 30 năm thành lập Trường, Trường Đại học
          Hùng Vương TP.HCM, hội thảo do 2G Education phối hợp cùng Trung tâm
          Viện văn hóa Doanh nghiệp – CORE tổ chức đã thành công rực rỡ!
        </p>
        <Button
          className="mt-5 bg-red-600 text-white hover:bg-red-700"
          as="a"
          href="/conference"
        >
          Xem thêm &gt;&gt;
        </Button>
      </div>
      <div>
        <Image
          className="w-full rounded-2xl shadow-xl"
          src="/assets/business.jpg"
          alt="Conference"
          width={600}
          height={400}
        />
      </div>
    </Container>
  </section>
);

export default Conference;
