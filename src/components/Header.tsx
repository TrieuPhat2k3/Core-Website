import React from "react";
import { Search, LogIn } from "lucide-react";
import Container from "./ui/Container";

const Header: React.FC = () => (
  <div className="border-b bg-white">
    <Container className="flex h-14 items-center gap-4">
      <div className="flex items-center gap-2">
        <img
          src="/assets/core-logo.png"
          alt="CORE Logo"
          className="h-8 w-auto max-w-[64px] rounded-md object-contain"
        />
      </div>
      <div className="mx-auto hidden w-full max-w-xl items-center rounded-full border bg-white px-4 py-2 shadow-sm sm:flex">
        <Search className="mr-2 h-4 w-4 shrink-0 text-slate-400" />
        <input
          placeholder="Search your keyword"
          className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400 text-slate-800"
        />
      </div>
      <div className="ml-auto flex items-center gap-2">
        <LogIn className="hidden h-4 w-4 text-red-600 sm:block" />
        <a
          href="/login"
          className="text-sm font-medium text-blue-900 hover:text-red-600"
        >
          Đăng nhập
        </a>
      </div>
    </Container>
  </div>
);

export default Header;
