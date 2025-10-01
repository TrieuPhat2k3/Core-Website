"use client";

import React, { useState } from "react";

import { useRouter } from "next/navigation";


// This function can be replaced with a real API call in the future
async function loginUser(username: string, password: string) {
  // Mock users for now
  const mockUsers = [
    { username: "admin", password: "admin123", role: "admin" },
    { username: "user", password: "user123", role: "user" }
  ];
  // Simulate async (e.g., API call)
  await new Promise(res => setTimeout(res, 200));
  return mockUsers.find(u => u.username === username && u.password === password) || null;
}

const LoginForm: React.FC = () => {
  const router = useRouter();
  const [credentials, setCredentials] = useState({
    username: "",
    password: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCredentials(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Use the loginUser function (mock or real API)
    const user = await loginUser(credentials.username, credentials.password);
    if (user) {
      if (typeof window !== "undefined") {
        localStorage.setItem("coreapp_user", JSON.stringify({ username: user.username, role: user.role }));
      }
      setMessage(`Đăng nhập thành công! Chào mừng ${user.username} (${user.role})`);
      setCredentials({ username: "", password: "" });
      setTimeout(() => {
        if (user.role === "admin") {
          router.push("/admin");
        } else {
          router.push("/public/home");
        }
      }, 800);
    } else {
      setMessage("Tên đăng nhập hoặc mật khẩu không đúng!");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Đăng nhập</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              name="username"
              placeholder="Tên đăng nhập"
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              name="password"
              placeholder="Mật khẩu"
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          {message && (
            <div className={`text-sm p-3 rounded-lg ${
              message.includes("✅") 
                ? "bg-green-100 text-green-800 border border-green-200" 
                : "bg-red-100 text-red-800 border border-red-200"
            }`}>
              {message}
            </div>
          )}

          <div className="text-center">
            <button
              type="submit"
              className="w-full px-6 py-3 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition-colors"
            >
              ĐĂNG NHẬP
            </button>
          </div>
        </form>

        <div className="mt-6 p-4 bg-gray-50 rounded-lg">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">Test Accounts:</h3>
          <div className="text-xs text-gray-600 space-y-1">
            <div>
              <strong>admin</strong> / <strong>admin123</strong> (admin)
            </div>
            <div>
              <strong>user</strong> / <strong>user123</strong> (user)
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
