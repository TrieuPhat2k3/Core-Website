import React from "react";
import Image from "next/image";
import Container from "../ui/Container";

const HeroOverview: React.FC = () => {
  return (
    <section className="relative bg-cover bg-center text-white min-h-[420px]">
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
          Trang chủ | Giới thiệu
        </p>
      </Container>
    </section>
  );
};

export default HeroOverview;
