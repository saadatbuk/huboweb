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

const WebsitePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="container mt-20 mx-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6">
        {/* Blog Main Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/developer.jpg"
            alt="Blog"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white">
            How to Build Modern Website UI as a Developer
          </h1>
          <p className="text-white mt-2">
            Learn how front-end developers craft beautiful, responsive websites
            using HTML, CSS, Tailwind, and modern JavaScript frameworks.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold hover:text-white">
            Developer Workflow
          </h2>
          <Image
            src="/img/developer2.jpg"
            alt="Inside Post"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h2 className="text-3xl font-bold hover:text-white">
            Optimize Your Web Design Process for Better UI
          </h2>
          <p>
            Every successful developer uses tools like Figma, Tailwind, and VS
            Code extensions to speed up their workflow and deliver polished
            designs.
          </p>
          <hr className="border-gray-700" />
        </div>

        {/* Comments */}
        <div className="mt-6" data-aos="fade-up">
          {[
            {
              avatar: "/img/comment.jpg",
              username: "Ali Raza",
              date: "Jul 10, 2024",
              comment:
                "Great article on responsive layouts. Helped me fix my grid issues!"
            },
            {
              avatar: "/img/comment2.jpg",
              username: "Fatima Noor",
              date: "Jul 12, 2024",
              comment:
                "Thanks for explaining dark mode design principles so well!"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer hover:text-white"
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
      <aside className="space-y-6" data-aos="fade-left">
        {/* Author */}
        <div className="p-2 border rounded-xl text-center border-gray-700">
          <Image
            src="/img/smith.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">Jane Smith</h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            Full-stack web developer specializing in responsive and interactive
            UI experiences.
          </p>
        </div>

        {/* Search */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Search
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2 border-gray-700">
            <Search className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {["Design", "Frontend", "Tailwind CSS", "React", "Next.js"].map(
            (cat, i) => (
              <p key={i} className="text-white hover:text-white cursor-pointer">
                {cat} <span className="text-sm text-gray-500">(12)</span>
              </p>
            )
          )}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Recent Posts
          </h3>
          {[ 
            "Top 5 Tailwind Plugins",
            "Why Next.js is the Future",
            "Handling API Errors Gracefully"
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
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {["UI", "Tailwind", "Next.js", "React", "Blog", "Design"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-gray-800 px-3 py-1 rounded-full text-sm hover:bg-gradient-to-r from-blue-900 to-gray-900 hover:text-black cursor-pointer"
                >
                  {tag}
                </span>
              )
            )}
          </div>
        </div>
      </aside>
    </div>
  );
};

export default WebsitePage;
