"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Twitter,
  Facebook,
  Linkedin,
  Instagram,
  Reply,
  Search
} from "lucide-react";

const LogoPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6">
        {/* Blog Main Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/logo.jpg"
            alt="Logo Design Banner"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white">
            Designing Memorable Company Logos That Speak Brand
          </h1>
          <p className="text-white mt-2">
            A strong logo is more than just a symbol — its the visual heartbeat
            of your brand. Learn how modern businesses craft recognizable and
            timeless logos that build instant trust.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold hover:text-white">
            The Psychology Behind Effective Logos
          </h2>
          <Image
            src="/img/logo2.jpg"
            alt="Logo Process"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h2 className="text-3xl font-bold hover:text-white">
            Why Simplicity, Shape, and Color Matter
          </h2>
          <p>
            Great logos balance simplicity with impact. Designers use subtle
            geometry, color theory, and negative space to create symbols that
            leave lasting impressions — think Nike, Apple, or FedEx.
          </p>
          <hr className="border-gray-700" />
        </div>

        {/* Comments */}
        <div className="mt-6" data-aos="fade-up" data-aos-delay="400">
          {[
            {
              avatar: "/img/comment 5.jpg",
              username: "Zeesha Fariya",
              date: "Jul 10, 2024",
              comment:
                "This breakdown really helped me understand how minimal logos make a huge impact. Thank you!"
            },
            {
              avatar: "/img/comment6.jpg",
              username: "Amina Tariq",
              date: "Jul 12, 2024",
              comment:
                "Color psychology in branding is such a game changer. Excellent write-up!"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer hover:text-white"
              data-aos="fade-up"
              data-aos-delay={500 + i * 100}
            >
              <Image
                src={item.avatar}
                alt={item.username}
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-medium">{item.username}</h4>
                  <button className="flex items-center text-gray-400 text-lg hover:text-white transition duration-300">
                    <Reply className="mr-1 w-4 h-4" /> Reply
                  </button>
                </div>
                <p className="text-sm text-gray-400">{item.date}</p>
                <p className="text-white">{item.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-6">
        {/* Author */}
        <div
          className="p-2 border rounded-xl text-center border-gray-700"
          data-aos="fade-left"
        >
          <Image
            src="/img/smith3.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">
            Jordy Mortan
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            Branding strategist & UI consultant helping companies translate
            identity into memorable visuals.
          </p>
        </div>

        {/* Search */}
        <div
          className="p-4 border rounded-xl border-gray-700"
          data-aos="fade-left"
          data-aos-delay="100"
        >
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Search
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2 border-gray-700">
            <Search className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search logo topics..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div
          className="p-4 border rounded-xl border-gray-700"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {[
            "Logo Design",
            "Brand Identity",
            "Typography",
            "UI Symbols",
            "Corporate Kits"
          ].map((cat, i) => (
            <p key={i} className="text-white hover:text-white cursor-pointer">
              {cat} <span className="text-sm text-gray-500">(12)</span>
            </p>
          ))}
        </div>

        {/* Recent Posts */}
        <div
          className="p-4 border rounded-xl border-gray-700"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Recent Posts
          </h3>
          {[
            "Best Logo Fonts in 2025",
            "Logo vs Icon: What's the Difference?",
            "Corporate Logo Redesign Tips"
          ].map((title, i) => (
            <div key={i} className="mb-2">
              <h4 className="text-white hover:text-white cursor-pointer font-medium">
                {title}
              </h4>
              <p className="text-sm text-gray-500">Jul {10 + i}, 2024</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div
          className="p-4 border rounded-xl border-gray-700"
          data-aos="fade-left"
          data-aos-delay="400"
        >
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Logo",
              "Branding",
              "Design",
              "Minimal",
              "Corporate",
              "Symbol"
            ].map((tag) => (
              <span
                key={tag}
                className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-900 to-gray-900 hover:text-black cursor-pointer"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default LogoPage;
