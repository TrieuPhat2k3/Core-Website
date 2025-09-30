import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

const PartnerHighlight: React.FC = () => (
  <section className="relative overflow-hidden bg-[#F4F8FF] py-10">
    <Container className="relative grid items-center gap-8 md:grid-cols-2 z-10">
      <div className="order-1 md:order-2 flex items-center justify-center">
        <Image
          className="mx-auto w-full max-w-lg rounded-2xl object-cover"
          src="/assets/student.png"
          alt="Students"
          width={400}
          height={300}
        />
      </div>
      <div className="order-2 md:order-1 flex flex-col items-start justify-center">
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl font-extrabold text-blue-700">
            GREEN ACADEMY
          </span>
        </div>
        <h4 className="mb-2 text-lg font-bold text-blue-900 leading-tight">
          ĐỐI TÁC THỰC TẬP CHIẾN LƯỢC CỦA TRUNG TÂM VĂN HÓA DOANH NGHIỆP
        </h4>
        <p className="mb-6 text-base text-[#1E2952]">
          Green Academy đồng hành cùng sinh viên DHV mang đến cơ hội thực tập
          chất lượng cao và định hướng nghề nghiệp vững chắc.
        </p>
        <div className="flex w-full justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center w-full max-w-sm">
            <div className="text-center font-bold text-xl text-blue-900 mb-4">
              ĐĂNG KÝ NHẬN
              <br />
              THÔNG TIN CHƯƠNG TRÌNH
            </div>
            <a href="/public/register">
              <Button className="w-full rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 py-3 text-base shadow-md">
                ĐĂNG KÝ MIỄN PHÍ
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

export default PartnerHighlight;
