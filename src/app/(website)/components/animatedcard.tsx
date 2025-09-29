"use client";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function AnimatedCard() {
  const [hovered, setHovered] = useState(false);

  const cardData = [
    {
      heading: "Smart Workflow",
      para1: "Automate repetitive tasks with intelligent logic.",
      para2: "Boost productivity by streamlining your operations."
    },
    {
      heading: "Data Insights",
      para1: "Gain real-time insights from large data sets.",
      para2: "Make smarter decisions with AI-powered analysis."
    },
    {
      heading: "Customer Support",
      para1: "Enhance user experience using smart assistants.",
      para2: "Respond faster with AI-driven conversations."
    }
  ];

  return (
    <div
      className="group relative w-full max-w-6xl mx-auto p-1 bg-transparent rounded-3xl transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-gray-400 opacity-80 z-10 transition-all duration-1000 ease-in-out group-hover:translate-x-full group-hover:opacity-0" />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-between bg-transparent px-10 py-12 overflow-hidden min-h-[500px] transition-all duration-700 ease-in-out group-hover:brightness-110">
        {/* Left side content */}
        <div className="flex flex-col justify-between h-full max-w-lg">
          <div>
            <h2 className="text-4xl font-bold text-white mb-4">
              AI Automation
            </h2>
            <p className="text-white text-lg mb-10">
              Unlock the full potential of your business with our AI automation
              solutions. Our intelligent systems are designed to streamline your
              workflows, reduce manual tasks, and boost overall efficiency. From
              automating routine operations to enhancing decision-making
              processes, we provide solutions tailored to your specific needs.
            </p>

            {/* Static Icon */}
            <div
              className={`inline-block transition-all duration-500 transform ${
                hovered
                  ? "translate-x-20 opacity-0"
                  : "translate-x-0 opacity-100"
              }`}
            >
              <ArrowUpRight className="w-20 h-20 text-white" />
            </div>
          </div>
        </div>

        {/* Right bottom big image in curly shape */}
        <div
          className="absolute right-[-30px] bottom-[-180px] w-[650px] h-[450px] overflow-hidden transition-transform duration-700 ease-in-out"
          style={{
            transform: hovered ? "translateY(-50px)" : "translateY(0)"
          }}
        >
          <Image
            src="/img/automation.avif"
            alt="AI Graphic"
            fill
            className="object-cover rounded-[160px]"
          />
        </div>

        {/* Right side animated cards */}
        <div
          className="absolute top-6 right-[-700px] flex flex-col space-y-6 transition-all duration-700 ease-in-out"
          style={{
            right: hovered ? "40px" : "-700px",
            opacity: hovered ? 1 : 0
          }}
        >
          {cardData.map((card, index) => (
            <div
              key={index}
              className="w-100 h-auto bg-gradient-to-br from-blue-100 to-cyan-100 rounded-xl shadow-lg p-4"
            >
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {card.heading}
              </h3>
              <p className="text-sm text-gray-700 mb-1">{card.para1}</p>
              <p className="text-sm text-gray-700">{card.para2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
