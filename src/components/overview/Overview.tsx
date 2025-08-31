import React from "react";
import Image from "next/image";

const Overview: React.FC = () => (
  <section className="space-y-12 bg-white rounded-xl p-2 md:p-6">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold text-[#183A7C] mb-4">
          Tầm nhìn
        </h2>
        <p className="text-lg text-[#222] leading-relaxed">
          Trở thành trung tâm hàng đầu về nghiên cứu, đào tạo và kết nối văn hóa
          doanh nghiệp trong môi trường giáo dục, góp phần định hình thế hệ
          doanh nhân sáng tạo, nhân văn và bền vững.
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/assets/business.jpg"
          alt="Vision"
          width={320}
          height={320}
          className="object-contain rounded-xl"
        />
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-8 bg-[#C8102E] rounded-xl p-8">
      <div className="flex-1 flex justify-center mb-6 md:mb-0">
        <Image
          src="/assets/mission.jpg"
          alt="Mission"
          width={320}
          height={220}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold text-white mb-4">Sứ mệnh</h2>
        <ul className="list-disc pl-6 text-white text-lg space-y-2">
          <li>
            Thúc đẩy đổi mới sáng tạo và tinh thần khởi nghiệp trong sinh viên
            thông qua các giá trị văn hóa doanh nghiệp.
          </li>
          <li>
            Nghiên cứu, tư vấn và đào tạo chuyên sâu về văn hóa doanh nghiệp,
            gắn kết nhà trường, doanh nghiệp và cộng đồng quốc tế.
          </li>
          <li>
            Nuôi dưỡng các mối quan hệ hợp tác bền vững dựa trên nền tảng văn
            hóa.
          </li>
        </ul>
      </div>
    </div>
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold text-[#183A7C] mb-4">
          Mục tiêu
        </h2>
        <ul className="list-disc pl-6 text-[#222] text-lg space-y-2">
          <li>
            Xây dựng nền tảng văn hóa doanh nghiệp trong môi trường giáo dục, hỗ
            trợ sinh viên đổi mới sáng tạo và khởi nghiệp;
          </li>
          <li>
            Thực hiện nghiên cứu, tư vấn, đào tạo và ứng dụng văn hóa doanh
            nghiệp cho nhà trường và doanh nghiệp, đáp ứng nhu cầu thực tiễn;
          </li>
          <li>
            Kết nối doanh nghiệp với nhau, với nhà trường và quốc tế trên cơ sở
            phát triển văn hóa doanh nghiệp.
          </li>
        </ul>
      </div>
      <div className="flex-1 flex justify-center">
        <Image
          src="/assets/target.jpg"
          alt="Goal"
          width={260}
          height={220}
          className="object-contain rounded-xl"
        />
      </div>
    </div>
  </section>
);

export default Overview;
