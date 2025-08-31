import React from "react";
import Container from "../ui/Container";

const Values: React.FC = () => (
  <section
    className="relative bg-cover bg-center py-14"
    style={{ backgroundImage: "url(/assets/business.jpg)" }}
  >
    <div className="absolute inset-0 bg-red-700/60" />
    <Container className="relative">
      <h3 className="mb-8 text-center text-2xl font-bold tracking-tight text-white">
        GIÁ TRỊ CỐT LÕI
      </h3>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-base font-extrabold uppercase tracking-wider text-blue-900">
            TẦM NHÌN
          </div>
          <p className="text-sm leading-6 text-slate-700">
            Dẫn đầu về văn hóa doanh nghiệp trong giáo dục, nuôi dưỡng thế hệ doanh nhân sáng tạo, nhân văn, bền vững.
          </p>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-base font-extrabold uppercase tracking-wider text-blue-900">
            SỨ MỆNH
          </div>
          <ul className="list-disc pl-5 text-sm leading-6 text-slate-700">
            <li>Thúc đẩy khởi nghiệp từ văn hóa.</li>
            <li>Gắn kết nhà trường, doanh nghiệp và quốc tế.</li>
            <li>Xây dựng hợp tác bền vững.</li>
          </ul>
        </div>
        <div className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200">
          <div className="mb-2 text-base font-extrabold uppercase tracking-wider text-blue-900">
            MỤC TIÊU
          </div>
          <ul className="list-disc pl-5 text-sm leading-6 text-slate-700">
            <li>Phổ biến văn hóa doanh nghiệp trong trường học.</li>
            <li>Đào tạo, tư vấn và kết nối thực tiễn.</li>
            <li>Tạo hệ sinh thái văn hóa doanh nghiệp.</li>
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

export default Values;
