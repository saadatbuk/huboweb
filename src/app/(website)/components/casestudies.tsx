"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const caseStudies = [
  {
    title: "E-Commerce Redesign",
    category: "Web App UI",
    description:
      "Revamped an e-commerce platform to improve user retention and conversion rates.",
    image: "/img/built-with-elementor (2).png"
  },
  {
    title: "Finance Dashboard",
    category: "Dashboard UX",
    description:
      "Designed a clean and intuitive finance dashboard for real-time data insights.",
    image: "/img/dashboard.jpg"
  },
  {
    title: "Mobile Food App",
    category: "Mobile UI/UX",
    description:
      "Crafted a user-friendly mobile food ordering experience with gamified UI.",
    image: "/img/dashboard2.jpg"
  }
];

export default function CaseStudies() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Case Studies
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Discover how we’ve helped businesses transform their ideas into
          intuitive user experiences.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {caseStudies.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0e0b2a] rounded-2xl overflow-hidden border border-gray-800 hover:shadow-yellow-500/20 transition-shadow group"
          >
            <div className="relative w-full h-52">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="text-white text-lg font-semibold mb-1">
                {item.title}
              </h4>
              <p className="text-sm text-gray-400 italic mb-2">
                {item.category}
              </p>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
