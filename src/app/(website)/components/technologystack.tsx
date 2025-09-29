"use client";

import {
  Code,
  Database,
  Cloud,
  Server,
  Activity,
  Globe,
  Layers3,
  LayoutDashboard
} from "lucide-react";
import { motion } from "framer-motion";

const techStack = [
  {
    title: "Frontend",
    description: "React.js, Next.js, Tailwind CSS, HTML5, CSS3, TypeScript",
    icon: <LayoutDashboard className="h-8 w-8 text-white" />
  },
  {
    title: "Backend",
    description: "Node.js, Express.js, Firebase, REST APIs, GraphQL",
    icon: <Server className="h-8 w-8 text-white" />
  },
  {
    title: "Database",
    description: "MongoDB, PostgreSQL, MySQL, Firestore",
    icon: <Database className="h-8 w-8 text-white" />
  },
  {
    title: "CMS",
    description: "WordPress, Sanity.io, Strapi, Contentful",
    icon: <Layers3 className="h-8 w-8 text-white" />
  },
  {
    title: "DevOps",
    description: "Vercel, Netlify, GitHub Actions, Docker",
    icon: <Cloud className="h-8 w-8 text-white" />
  },
  {
    title: "Performance",
    description: "SEO, Lighthouse Audits, PageSpeed Optimization",
    icon: <Activity className="h-8 w-8 text-white" />
  },
  {
    title: "APIs",
    description: "REST, GraphQL, OAuth, 3rd Party Integrations",
    icon: <Globe className="h-8 w-8 text-white" />
  },
  {
    title: "Testing",
    description:
      "Jest, React Testing Library, Postman, Unit & Integration Tests",
    icon: <Code className="h-8 w-8 text-white" />
  }
];

export default function TechnologyStack() {
  return (
    <section className="w-full bg-transparent text-white py-20 px-4 md:px-10">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Technology Stack
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We use modern tools and technologies to build scalable, fast, and
          reliable web solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-[#0e0b2a] border border-gray-800 rounded-2xl p-6 shadow-md hover:shadow-yellow-500/20 transition-shadow"
          >
            <div className="mb-4">{tech.icon}</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              {tech.title}
            </h3>
            <p className="text-gray-400 text-sm">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
