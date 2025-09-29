"use client";
import React, { useState,useEffect  } from "react";
import {
  Paintbrush,
  Code2,
  Search,
  Megaphone,
  Gem,
  FileText,
  Headphones,
  Smartphone,
  Bot,
  UserPlus,
  Bug,
  Puzzle,
  LifeBuoy,
  Wrench,
  PenTool
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const cards = [
  {
    title: "UI/UX Design",
    icon: Paintbrush,
    slug: "uiuxdesign",
    description:
      "Elevate engagement, inspire loyalty—our UI/UX design redefines the digital frontier, one click at a time.",
    color: "#89ec5b"
  },
  {
    title: "Web Design & Development",
    icon: Code2,
    slug: "webdesign",
    description:
      "Revolutionize your digital footprint with our bespoke web design solutions—where innovation meets pixel perfection.",
    color: "#eb5ae5"
  },
  {
    title: "SEO Optimization",
    icon: Search,
    slug: "seooptimization",
    description:
      "Dominate rankings and seize digital supremacy with strategic optimization where visibility meets profitability.",
    color: "#5b98eb"
  },
  {
    title: "Digital Marketing",
    icon: Megaphone,
    slug: "digitalmarketing",
    description:
      "Captivate, Convert, Conquer—the digital realm is yours to conquer with our dynamic digital marketing strategies.",
    color: "#f59e0b"
  },
  {
    title: "Graphics Design",
    icon: PenTool,
    slug: "graphicdesign",
    description:
      "Transforming pixels into profit—our cutting-edge graphics design sets your brand apart in the digital landscape.",
    color: "#8b5cf6"
  },
  {
    title: "Content Writing",
    icon: FileText,
    slug: "contentwriting",
    description:
      "Crafting compelling narratives that captivate and convert—let our content fuel your digital success.",
    color: "#34d399"
  },
  {
    title: "CRM Automation",
    icon: Headphones,
    slug: "crmautomation",
    description:
      "Boost the success of your company by using Google Ads to increase online visibility and promote growth.",
    color: "#f43f5e"
  },
  {
    title: "Mobile App Development",
    icon: Smartphone,
    slug: "mobileapp",
    description:
      "From concept to code—we craft, redefine mobile solutions that inspire engagement and empower your brand.",
    color: "#38bdf8"
  },
  {
    title: "Robotic Process Automation",
    icon: Bot,
    slug: "roboticprocess",
    description:
      "Robotic Process Automation uses bots to automate repetitive tasks, boosting efficiency and accuracy.",
    color: "#89ec5b"
  },
  {
    title: "Lead Generation",
    icon: UserPlus,
    slug: "leadgeneration",
    description:
      "Lead generation identifies and attracts potential customers, converting interest into actionable sales and leads.",
    color: "#eb5ae5"
  },
  {
    title: "SQA & Testing",
    icon: Bug,
    slug: "sqatesting",
    description:
      "Software Quality Assurance and Testing ensure applications function correctly, meet requirements, enhance reliability.",
    color: "#5b98eb"
  },
  {
    title: "Web Browser Extensions",
    icon: Puzzle,
    slug: "webbrowser",
    description:
      "Web browser extensions enhance functionality, customize user experience, and streamline online tasks efficiently.",
    color: "#f59e0b"
  },
  {
    title: "Support & Operational Services",
    icon: LifeBuoy,
    slug: "supportoperational",
    description:
      "Support and operational services ensure smooth business operations and enhance customer satisfaction consistently.",
    color: "#f59e0b"
  },
  {
    title: "WordPress",
    icon: Wrench,
    slug: "wordpress",
    description:
      "WordPress is a versatile CMS for creating and managing websites easily and effectively.",
    color: "#8b5cf6"
  },
  {
    title: "Virtual Assistant (VA)",
    icon: Gem,
    slug: "virtualassistant",
    description:
      "A Virtual Assistant (VA) provides remote administrative, creative, and technical support for businesses.",
    color: "#34d399"
  }
];
import Link from "next/link";
export default function CardSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false
    });
  }, []);

  const totalPages = Math.ceil(cards.length / itemsPerPage);
  const paginatedCards = cards.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section
      className="min-h-screen font-[Poppins] py-16 flex flex-col items-center justify-center bg-transparent"
      data-aos="fade-up"
    >
      <div className="max-w-[1280px] w-full px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {paginatedCards.map((card, idx) => (
            <div
              key={idx}
              className="group relative w-full h-[400px] rounded-2xl border border-white/10 backdrop-blur-lg bg-white/5 shadow-lg overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-[0_0_0_3px_var(--clr)]"
              style={{ "--clr": card.color } as React.CSSProperties}
              data-aos="zoom-in"
              data-aos-delay={idx * 100} // stagger animations
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--clr)] opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
              <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center space-y-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-full border-4 border-[var(--clr)] text-[var(--clr)] transition-transform duration-500 group-hover:scale-110">
                  <card.icon size={36} />
                </div>
                <h3 className="text-white text-xl font-semibold group-hover:text-[var(--clr)] transition-colors duration-300">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-300 group-hover:text-white transition duration-300">
                  {card.description}
                </p>
                <Link
                  href={`/servicespage/${card.slug}`}
                  className="inline-block mt-2 px-5 py-2 border-2 border-[var(--clr)] text-white rounded-full transition-all duration-300 group-hover:bg-[var(--clr)] group-hover:text-black"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center gap-2 mt-12" data-aos="fade-up">
          <button
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((p) => p - 1)}
          >
            Prev
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPage(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1
                  ? "bg-[var(--clr)] text-black"
                  : "bg-white/10 text-white hover:bg-white/20"
              } transition`}
              style={
                currentPage === i + 1
                  ? ({
                      "--clr": cards[i * itemsPerPage]?.color
                    } as React.CSSProperties)
                  : undefined
              }
              data-aos="zoom-in"
              data-aos-delay={i * 100}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="px-4 py-2 rounded bg-white/10 text-white hover:bg-white/20 transition"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage((p) => p + 1)}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}