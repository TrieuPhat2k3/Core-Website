import React from "react";
import Image from "next/image";
import Container from "../ui/Container";
import Button from "../ui/Button";

const Hero: React.FC = () => {
  return (
    <section className="relative isolate bg-cover bg-center text-white min-h-[420px]">
      <Image
        src="/assets/banner.png"
        alt="Hero"
        fill
        className="object-cover z-0"
        style={{ objectFit: "cover" }}
      />
      <div className="absolute inset-0 bg-slate-900/60 z-10" />
      <Container className="relative flex flex-col items-center justify-center text-center min-h-[420px] z-20">
        <h1 className="mb-3 text-5xl font-extrabold tracking-tight sm:text-6xl">
          CORE
        </h1>
        <p className="mb-6 max-w-2xl text-base font-medium sm:text-lg">
          Đổi mới sáng tạo và hội tụ văn hóa doanh nghiệp
        </p>
        <Button
          className="bg-red-600 text-white hover:bg-red-700"
          as="a"
          href="/overview"
        >
          TÌM HIỂU NGAY
        </Button>
      </Container>
    </section>
  );
};

export default Hero;
