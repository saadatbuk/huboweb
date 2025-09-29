"use client";

import Image from "next/image";
import { useEffect } from "react";
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

const ProductPage = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  return (
    <div className="container mx-auto mt-20 p-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-transparent text-white">
      {/* Left Side - Main Content */}
      <div className="md:col-span-2 space-y-6">
        {/* Featured Product Section */}
        <div data-aos="fade-up">
          <Image
            src="/img/product.jpg"
            alt="Featured Product"
            width={1200}
            height={800}
            className="rounded-xl w-full h-auto"
          />
          <h1 className="text-3xl font-bold mt-4 hover:text-white" data-aos="fade-right">
            Introducing Our Next-Gen SmartWatch Pro X
          </h1>
          <p className="text-white mt-2" data-aos="fade-up">
            Discover unmatched performance, sleek design, and health-focused innovation with the SmartWatch Pro X. Designed for modern professionals and athletes alike.
          </p>
        </div>

        {/* Product Features Section */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold hover:text-white" data-aos="fade-right">
            Key Features & Benefits
          </h2>
          <div data-aos="zoom-in">
            <Image
              src="/img/product3.webp"
              alt="Product Features"
              width={1200}
              height={800}
              className="rounded-xl w-full h-auto"
            />
          </div>
          <h2 className="text-3xl font-bold hover:text-white" data-aos="fade-left">
            Experience Innovation in Every Detail
          </h2>
          <p data-aos="fade-up">
            With AI-powered health tracking, 7-day battery life, and water resistance up to 50 meters, SmartWatch Pro X empowers your lifestyle without compromise.
          </p>
          <hr className="border-gray-700" />
        </div>

        {/* Customer Reviews */}
        <div className="mt-6" data-aos="fade-up">
          {[
            {
              avatar: "/img/comment7.jpg",
              username: "Usman Tariq",
              date: "Jun 22, 2024",
              comment: "Absolutely love the SmartWatch Pro X. Battery lasts forever and fitness tracking is super accurate!"
            },
            {
              avatar: "/img/comment9.jpg",
              username: "Zainab Khan",
              date: "Jun 30, 2024",
              comment: "Stylish, lightweight, and powerful! Easily integrates with my smartphone and tracks sleep like a pro."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="flex space-x-4 mt-4 border-b pb-4 cursor-pointer hover:text-white"
              data-aos="fade-up"
              data-aos-delay={`${i * 200}`}
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

      {/* Right Sidebar */}
      <aside className="space-y-6" data-aos="fade-left">
        {/* Company Author/Team */}
        <div className="p-2 border rounded-xl text-center border-gray-700">
          <Image
            src="/img/smith4.jpg"
            alt="Brand"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
          <h3 className="text-white text-2xl font-semibold mt-2">
            TechVerse Ltd.
          </h3>
          <div className="flex justify-center space-x-4 mt-2 text-2xl text-gray-400">
            <Twitter className="hover:text-white" />
            <Facebook className="hover:text-white" />
            <Linkedin className="hover:text-white" />
            <Instagram className="hover:text-white" />
          </div>
          <p className="text-white mt-2">
            Innovating wearable technology to help you stay ahead in fitness,
            productivity, and life.
          </p>
        </div>

        {/* Search Products */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-up">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Search Products
          </h3>
          <div className="flex items-center border rounded-full px-3 py-2 border-gray-700">
            <Search className="text-gray-400 text-xl mr-2" />
            <input
              type="text"
              placeholder="Search product..."
              className="w-full bg-transparent outline-none text-white"
            />
          </div>
        </div>

        {/* Product Categories */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-right">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Categories
          </h3>
          {["Wearables", "Smart Home", "Accessories", "Audio", "Fitness"].map(
            (cat, i) => (
              <p key={i} className="text-white hover:text-white cursor-pointer">
                {cat} <span className="text-sm text-gray-500">(8)</span>
              </p>
            )
          )}
        </div>

        {/* Recent Launches */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="fade-left">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> New Launches
          </h3>
          {[
            "SmartRing Aura Gen 2",
            "HomeHub Mini",
            "AirBeats Pro Wireless"
          ].map((title, i) => (
            <div key={i} className="mb-2">
              <h4 className="text-white hover:text-white cursor-pointer font-medium">
                {title}
              </h4>
              <p className="text-sm text-gray-500">Jul {5 + i}, 2024</p>
            </div>
          ))}
        </div>

        {/* Product Tags */}
        <div className="p-4 border rounded-xl border-gray-700" data-aos="zoom-in">
          <h3 className="text-xl font-bold mb-3">
            <span className="text-white">|</span> Tags
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Smartwatch",
              "Fitness",
              "HealthTech",
              "Wearable",
              "Bluetooth",
              "Innovation"
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

export default ProductPage;
