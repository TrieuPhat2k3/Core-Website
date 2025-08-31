"use client";

import React, { useState } from "react";

const mockUsers = [
  // { username: "admin", password: "admin123", role: "Administrator" },
  // { username: "user", password: "user123", role: "Regular User" },
  // { username: "test", password: "test123", role: "Test User" },
  { username: "demo", password: "demo123", role: "Demo User" }
];

const LoginForm: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check against mock data
    const user = mockUsers.find(u => 
      u.username === credentials.username && u.password === credentials.password
    );

    if (user) {
      setMessage(`Đăng nhập thành công! Chào mừng ${user.username} (${user.role})`);
      setCredentials({ username: "", password: "" });
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
            {mockUsers.map((user, index) => (
              <div key={index}>
                <strong>{user.username}</strong> / <strong>{user.password}</strong> ({user.role})
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
