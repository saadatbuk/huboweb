"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { User, Lock, Webhook } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Login successful
      console.log("Login success:", data);
      localStorage.setItem("isAuthenticated", "true");
      router.push("/dashboard/home ");

    } catch (err) {
      console.error("Login error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-transparent">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg"
        data-aos="fade-up"
      >
        <h2
          className="text-2xl font-bold text-center text-[#071C55] flex items-center justify-center gap-2"
          data-aos="fade-down"
        >
          <Webhook className="w-6 h-6 text-[#071C55]" />
          Login
        </h2>

        <form onSubmit={handleSubmit} className="mt-6">
          <div className="mb-4 relative" data-aos="fade-right">
            <User
              className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                isEmailFocused ? "text-blue-500" : "text-gray-400"
              }`}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:scale-95"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsEmailFocused(true)}
              onBlur={() => setIsEmailFocused(false)}
              required
            />
          </div>

          <div className="mb-4 relative" data-aos="fade-left">
            <Lock
              className={`absolute left-3 top-3 w-5 h-5 transition-colors duration-300 ${
                isPasswordFocused ? "text-blue-500" : "text-gray-400"
              }`}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full pl-10 p-3 border border-gray-300 rounded-lg transition duration-300 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 focus:scale-95"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              required
            />
          </div>

          {error && (
            <p className="text-red-600 text-sm mb-4 text-center" data-aos="fade-up">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="w-full bg-gradient-to-b from-[#1E3A8A] to-[#4891e4] text-white p-3 rounded-lg transition duration-300"
            data-aos="zoom-in"
          >
            Login
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
