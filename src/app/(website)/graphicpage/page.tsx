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

const GraphicPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  return (
    <div className="container mx-auto p-6 grid mt-20 grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side */}
      <div className="md:col-span-2 space-y-6" data-aos="fade-up">
        {/* Blog Main Content */}
        <div data-aos="fade-up">
          <Image
            src="/img/graphic1.jpg"
            alt="Graphic Design Banner"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
            data-aos="zoom-in"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white" data-aos="fade-up" data-aos-delay="100">
            Crafting Impactful UI/UX in Graphic Design
          </h1>
          <p className="text-white mt-2" data-aos="fade-up" data-aos-delay="200">
            Explore how modern UI/UX principles combined with creative graphic
            design result in engaging digital experiences that connect brands
            with users.
          </p>
        </div>

        {/* Inside Post */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold hover:text-white" data-aos="fade-up">
            Visual Consistency & User Experience
          </h2>
          <Image
            src="/img/graphic2.jpg"
            alt="UI/UX Process"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
            data-aos="zoom-in"
          />
          <h2 className="text-3xl font-bold hover:text-white" data-aos="fade-up">
            Elevate Brand Identity Through Design
          </h2>
          <p data-aos="fade-up" data-aos-delay="100">
            A well-crafted UI/UX not only enhances usability but also
            strengthens brand trust. Designers use tools like Figma, Adobe XD,
            and Illustrator to produce pixel-perfect layouts that communicate
            clearly and beautifully.
          </p>
          <hr className="border-gray-700" data-aos="fade-up" />
        </div>

        {/* Comments */}
        <div className="mt-6" data-aos="fade-up">
          {[
            {
              avatar: "/img/comment11.jpg",
              username: "Hina Aslam",
              date: "Jul 15, 2024",
              comment:
                "Amazing insights into how good UI/UX design makes a difference!"
            },
            {
              avatar: "/img/comment2.jpg",
              username: "Ahmed Khan",
              date: "Jul 17, 2024",
              comment:
                "I’ve started applying your tips to my portfolio design. Thanks!"
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
            src="/img/comment13.jpg"
            alt="Author"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">
            Sarah Khan
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            UI/UX Designer focused on building aesthetic, functional, and
            user-centric interfaces with visual storytelling.
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
              placeholder="Search topics..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="200">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {["UI/UX", "Branding", "Color Theory", "Typography", "Tools"].map(
            (cat, i) => (
              <p key={i} className="text-white hover:text-white cursor-pointer">
                {cat} <span className="text-sm text-gray-500">(08)</span>
              </p>
            )
          )}
        </div>

        {/* Recent Posts */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left" data-aos-delay="300">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Recent Posts
          </h3>
          {[
            "Choosing the Right Color Palette",
            "UX Laws Every Designer Should Know",
            "How to Design for Accessibility"
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
            {["UI", "UX", "Figma", "Illustrator", "Design", "Mockup"].map(
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

export default GraphicPage;
