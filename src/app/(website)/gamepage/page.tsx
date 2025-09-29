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

const GamePage = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6" data-aos="fade-up">
        {/* Blog Main Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/game3.jpg"
            alt="Game UI"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
            data-aos="zoom-in"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white" data-aos="fade-up" data-aos-delay="100">
            Crafting Immersive Game Interfaces in 2025
          </h1>
          <p className="text-white mt-2" data-aos="fade-up" data-aos-delay="200">
            Discover how UI/UX designers are building interactive and intuitive
            game interfaces using tools like Figma, Unity UI Toolkit, and Unreal
            UMG.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold hover:text-white" data-aos="fade-up">
            Game Design Workflow
          </h2>
          <Image
            src="/img/game5.jpg"
            alt="Game Design Tools"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
            data-aos="zoom-in"
          />
          <h2 className="text-3xl font-bold hover:text-white" data-aos="fade-up">
            Improving Player Experience Through UI Prototypes
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            Modern game designers leverage prototyping tools like Adobe XD,
            Figma, and UXPin to simulate menus, HUDs, and inventory systems for
            optimal player usability and aesthetic coherence.
          </p>
          <hr className="border-gray-700" data-aos="fade-up" />
        </div>

        {/* Comments */}
        <div className="mt-6" data-aos="fade-up">
          {[
            {
              avatar: "/img/comment14.jpg",
              username: "Ahmad Faraz",
              date: "Jul 10, 2024",
              comment:
                "The section on HUD readability was excellent — super useful for mobile UI planning!"
            },
            {
              avatar: "/img/comment4.jpg",
              username: "Zainab Aslam",
              date: "Jul 12, 2024",
              comment:
                "Loved how you broke down menu animations for Unity. Very insightful!"
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer hover:text-white"
              data-aos="fade-up"
              data-aos-delay={i * 100}
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
        <div className="p-2 border rounded-xl text-center border-gray-700" data-aos="fade-left">
          <Image
            src="/img/smith5.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">
            Ayesha Khan
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            Game UI/UX designer passionate about creating immersive experiences
            through intuitive interfaces and visual storytelling.
          </p>
        </div>

        {/* Search */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="100">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Search
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2 border-gray-700">
            <Search className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search Game UI Topics..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {[
            "Game UI",
            "UX Testing",
            "Unity UI Toolkit",
            "Figma",
            "Mobile Gaming"
          ].map((cat, i) => (
            <p key={i} className="text-white hover:text-white cursor-pointer">
              {cat} <span className="text-sm text-gray-500">(12)</span>
            </p>
          ))}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Recent Posts
          </h3>
          {[
            "Designing Game Menus for VR",
            "Top UX Tips for Indie Game Devs",
            "Figma vs Adobe XD for Game Interfaces"
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
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="400">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {["GameUI", "UXDesign", "Unity", "HUD", "MenuDesign", "Figma"].map(
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

export default GamePage;
