"use client";

import React, { useState, useEffect } from "react";
import Container from "../ui/Container";
import { ChevronLeft, ChevronRight } from "lucide-react";

const partnerLogos = [
  {
    src: "/assets/GreenAcademy-logo.png",
    alt: "Green Academy",
  },
  {
    src: "/assets/MB-Bank-logo.png",
    alt: "MB Bank",
  },
  {
    src: "/assets/IAIB-logo.jpg",
    alt: "IAIB",
  },
  {
    src: "/assets/iSpace-logo.png",
    alt: "iSpace",
  },
  {
    src: "/assets/EasyEdu-logo.png",
    alt: "EasyEdu",
  },
  {
    src: "/assets/NewGym-logo.png",
    alt: "NewGym",
  },
];

const partnerPages = [
  [0, 1, 2, 3],
  [4, 5, 6, 7],
  [8, 9, 10, 11],
];

const Partners: React.FC = () => {
  const [page, setPage] = useState(0);
  const validPartnerLogos = partnerLogos.filter(logo => logo.src && logo.alt);
  const pageSize = 4;
  const totalPages = Math.ceil(validPartnerLogos.length / pageSize);
  const currentPartners = validPartnerLogos.slice(page * pageSize, page * pageSize + pageSize);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [totalPages]);

  const handlePrev = () => {
    setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };
  const handleNext = () => {
    setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-white py-12">
      <Container>
        <h3 className="mb-6 text-center text-2xl font-bold tracking-tight text-blue-900">
          ĐỐI TÁC CỦA CHÚNG TÔI
        </h3>
        <div className="relative">
          <button
            aria-label="Prev"
            className="absolute -left-8 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-400 bg-white p-3 shadow-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            onClick={handlePrev}
          >
            <ChevronLeft className="h-6 w-6 text-slate-700" />
          </button>
          <div className="mx-10 grid grid-cols-4 items-center gap-6">
            {currentPartners.map((logo, idx) => (
              <div
                key={logo.src + logo.alt}
                className="flex h-16 items-center justify-center rounded-xl bg-slate-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 object-contain"
                  style={{ maxWidth: "90%" }}
                />
              </div>
            ))}
          </div>
          <button
            aria-label="Next"
            className="absolute -right-8 top-1/2 -translate-y-1/2 rounded-full border-2 border-slate-400 bg-white p-3 shadow-lg hover:border-blue-600 hover:bg-blue-50 transition-colors"
            onClick={handleNext}
          >
            <ChevronRight className="h-6 w-6 text-slate-700" />
          </button>
        </div>
        <div className="mt-4 flex justify-center gap-2">
          {partnerPages.map((_, idx) => (
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

export default Partners;
