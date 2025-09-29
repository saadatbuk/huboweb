"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Shopverse – E-Commerce Platform",
    tech: "Next.js + Tailwind + Stripe",
    description:
      "A fully functional e-commerce store with secure payments and responsive UI.",
    image: "/img/dashboard.jpg"
  },
  {
    title: "FinTrack – Finance Dashboard",
    tech: "React + Chart.js + Firebase",
    description:
      "Real-time dashboard for tracking expenses and income with data visualization.",
    image: "/img/dashboard2.jpg"
  },
  {
    title: "Foodify – Restaurant Website",
    tech: "HTML + CSS + JavaScript",
    description:
      "Beautiful and responsive site for a food delivery business with smooth animations.",
    image: "/img/Online-Complaint-Management.png"
  }
];

export default function ProjectShowcase() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Project Showcase
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          A glimpse into some of the websites and applications we’ve recently
          built.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            viewport={{ once: true }}
            className="bg-[#0e0b2a] border border-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-yellow-500/20 transition-shadow group"
          >
            <div className="relative w-full h-52">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-white mb-1">
                {project.title}
              </h4>
              <p className="text-sm text-gray-400 italic mb-2">
                {project.tech}
              </p>
              <p className="text-gray-300 text-sm">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
