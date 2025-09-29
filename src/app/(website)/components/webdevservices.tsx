"use client";

import { motion } from "framer-motion";
import {
  Monitor,
  Code2,
  Smartphone,
  Rocket,
  Wrench,
  SearchCheck
} from "lucide-react";

const services = [
  {
    title: "Responsive Web Design",
    description:
      "We craft beautiful, responsive websites that look great on all devices.",
    icon: <Smartphone className="h-8 w-8 text-white" />
  },
  {
    title: "Frontend Development",
    description:
      "Modern UI development using React.js, Next.js, and Tailwind CSS.",
    icon: <Code2 className="h-8 w-8 text-white" />
  },
  {
    title: "Backend Integration",
    description:
      "Robust and scalable backend APIs using Node.js, Express, or Firebase.",
    icon: <Wrench className="h-8 w-8 text-white" />
  },
  {
    title: "Website Optimization",
    description: "Improve performance, accessibility, and SEO of your site.",
    icon: <SearchCheck className="h-8 w-8 text-white" />
  },
  {
    title: "Custom Web Applications",
    description:
      "From dashboards to SaaS apps, we build solutions tailored to your needs.",
    icon: <Monitor className="h-8 w-8 text-white" />
  },
  {
    title: "Deployment & Hosting",
    description:
      "We deploy your site using Vercel, Netlify, or your preferred cloud.",
    icon: <Rocket className="h-8 w-8 text-white" />
  }
];

export default function WebDevServices() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Web Design & Development Services
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We offer a complete suite of services to bring your website or app to
          life.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#0e0b2a] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-yellow-500/20 transition-shadow"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-400 text-sm">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
