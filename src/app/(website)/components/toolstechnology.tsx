"use client";

import {
  Figma,
  PenTool,
  MonitorSmartphone,
  Ruler,
  Brush,
  LayoutTemplate,
  Palette,
  Component
} from "lucide-react";
import { motion } from "framer-motion";

const tools = [
  { name: "Figma", icon: Figma },
  { name: "Adobe XD", icon: LayoutTemplate },
  { name: "Sketch", icon: PenTool },
  { name: "InVision", icon: MonitorSmartphone },
  { name: "Zeplin", icon: Ruler },
  { name: "Illustrator", icon: Brush },
  { name: "Photoshop", icon: Palette },
  { name: "Framer", icon: Component }
];

export default function ToolsTechnology() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Tools & Technologies We Use
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We use industry-standard tools to deliver exceptional UI/UX design
          solutions.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center bg-[#0e0b2a] border border-gray-800 rounded-xl p-6 hover:shadow-yellow-500/20 transition-shadow text-center"
          >
            <tool.icon className="h-10 w-10 text-white mb-4" />
            <p className="text-sm font-medium text-gray-200">{tool.name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
