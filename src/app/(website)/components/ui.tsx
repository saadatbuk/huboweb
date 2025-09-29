"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Ruler,
  PenTool,
  MonitorSmartphone,
  CheckCircle
} from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="h-8 w-8 text-white" />,
    title: "Research & Discovery",
    description:
      "Understanding your goals, users, and market through deep research and analysis."
  },
  {
    icon: <Ruler className="h-8 w-8 text-white" />,
    title: "Wireframing",
    description:
      "Creating low-fidelity blueprints to define the structure of the design."
  },
  {
    icon: <PenTool className="h-8 w-8 text-white" />,
    title: "UI Design",
    description:
      "Crafting beautiful, modern, and intuitive interfaces tailored to your brand."
  },
  {
    icon: <MonitorSmartphone className="h-8 w-8 text-white" />,
    title: "Prototyping",
    description:
      "Interactive prototypes that simulate the real product experience."
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-white" />,
    title: "Testing & Delivery",
    description:
      "Testing the design with real users and delivering the final assets."
  }
];

export default function Ui() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Our UI/UX Design Process
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We follow a human-centered, iterative design process that ensures user
          satisfaction and business success.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="bg-[#0e0b2a] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-yellow-500/20 transition-shadow"
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-400 text-sm">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
