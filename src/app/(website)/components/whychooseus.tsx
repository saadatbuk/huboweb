"use client";

import { motion } from "framer-motion";
import {
  Rocket,
  ShieldCheck,
  Code,
  Clock,
  Smile,
  TrendingUp
} from "lucide-react";

const reasons = [
  {
    title: "High Performance",
    description:
      "We build fast-loading websites optimized for speed and performance.",
    icon: <Rocket className="h-8 w-8 text-white" />
  },
  {
    title: "Clean & Scalable Code",
    description:
      "Maintainable code structure built with modern frameworks and best practices.",
    icon: <Code className="h-8 w-8 text-white" />
  },
  {
    title: "Reliable & Secure",
    description:
      "Security is baked into our development process from the start.",
    icon: <ShieldCheck className="h-8 w-8 text-white" />
  },
  {
    title: "On-Time Delivery",
    description:
      "We respect timelines and deliver high-quality work within deadline.",
    icon: <Clock className="h-8 w-8 text-white" />
  },
  {
    title: "Client Satisfaction",
    description: "Our work doesn’t end until you’re happy with the results.",
    icon: <Smile className="h-8 w-8 text-white" />
  },
  {
    title: "Business Growth",
    description:
      "We align our design and code to help your business grow online.",
    icon: <TrendingUp className="h-8 w-8 text-white" />
  }
];

export default function WhyChooseUs() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Why Choose Us?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We don’t just build websites — we build solutions that work for your
          business and your users.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-[#0e0b2a] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-yellow-500/20 transition-shadow"
          >
            <div className="mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {reason.title}
            </h3>
            <p className="text-gray-400 text-sm">{reason.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
