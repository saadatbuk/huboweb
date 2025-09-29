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

const MobilePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6">
        {/* Blog Main Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/mobile.jpg"
            alt="Mobile UI Design"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white">
            Crafting Intuitive Mobile App Interfaces: A UX Guide
          </h1>
          <p className="text-white mt-2">
            Discover how mobile app designers build engaging and intuitive user
            experiences through modern UI trends, design systems, and user
            behavior insights.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6" data-aos="fade-up">
          <h2 className="text-2xl font-semibold hover:text-white">
            UX Design Fundamentals for Mobile
          </h2>
          <Image
            src="/img/mobile2.jpg"
            alt="UX Process"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h2 className="text-3xl font-bold hover:text-white">
            Simplify Navigation & Boost User Retention
          </h2>
          <p>
            Mobile-first design requires clarity and minimalism. Prioritize user
            goals, build intuitive flows, and test your navigation patterns
            using tools like Figma, Maze, or Adobe XD.
          </p>
          <hr className="border-gray-700" />
        </div>

        {/* Comments */}
        <div className="mt-6" data-aos="fade-up">
          {[
            {
              avatar: "/img/comment13.jpg",
              username: "Zara Shah",
              date: "Jul 14, 2024",
              comment:
                "This breakdown of onboarding UX really helped improve my app's first-time user flow!"
            },
            {
              avatar: "/img/comment3.jpg",
              username: "Imran Malik",
              date: "Jul 15, 2024",
              comment:
                "Loved the tips on spacing and mobile typography. Super practical!"
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
        <div className="p-2 border mt-20 rounded-xl text-center border-gray-700">
          <Image
            src="/img/smith7.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">
            Smith Johnson
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            Mobile UX/UI specialist with a passion for clean interfaces and
            seamless user journeys across platforms.
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
              placeholder="Search UI topics..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {[
            "Mobile UX",
            "Wireframes",
            "Design Systems",
            "Figma Pro Tips",
            "UI Animations"
          ].map((cat, i) => (
            <p key={i} className="text-white hover:text-white cursor-pointer">
              {cat} <span className="text-sm text-gray-500">(8)</span>
            </p>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Recent Posts
          </h3>
          {[
            "Best UX Patterns for Mobile Apps",
            "Creating Intuitive Bottom Navigation",
            "How to Design for Dark Mode"
          ].map((title, i) => (
            <div key={i} className="mb-2">
              <h4 className="text-white hover:text-white cursor-pointer font-medium">
                {title}
              </h4>
              <p className="text-sm text-gray-500">Jul {15 + i}, 2024</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Mobile UI",
              "Dark Mode",
              "Prototyping",
              "Figma",
              "Usability",
              "UX Research"
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

export default MobilePage;
