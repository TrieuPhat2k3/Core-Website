import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

const Introduction: React.FC = () => (
  <section className="relative bg-white py-12 sm:py-16">
    <Container className="grid items-center gap-8 md:grid-cols-2">
      <div>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-blue-900">
          <span className="text-red-600">CORE</span> - Viện văn hóa doanh nghiệp
        </h2>
        <div className="space-y-4 text-slate-700">
          <p>
            Ra đời nhân dịp kỷ niệm 30 năm Trường ĐH Hùng Vương TP. HCM, Trung
            tâm là biểu tượng của tinh thần đổi mới – sáng tạo và cam kết đồng
            hành cùng doanh nghiệp phát triển bền vững.
          </p>
          <p>
            Với tuyên ngôn CORE – ĐỔI MỚI SÁNG TẠO VÀ HỘI TỤ VIỆN VĂN HÓA DOANH
            NGHIỆP, Trung tâm triển khai các hoạt động đào tạo, tư vấn và kết
            nối, góp phần lan tỏa giá trị văn hóa và năng tầm nội lực doanh
            nghiệp.
          </p>
        </div>
      </div>
      <div className="relative">
        <Image
          className="mx-auto w-full max-w-md rounded-2xl shadow-xl"
          src="/assets/business.jpg"
          alt="Intro"
          width={400}
          height={300}
        />
      </div>
    </Container>
  </section>
);

export default Introduction;
