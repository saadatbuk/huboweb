"use client";

import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Muhammad Raza",
    position: "Senior React & Next-js Developer",
    desc: "Skilled in React & Next.js, JavaScript, HTML, CSS, with API integration.",
    image: "/img/raza.jpg"
  },
  {
    name: "Saadat Ali",
    position: "UI Design Maker React & Next-js Developer",
    desc: "Skilled in React, Next.js, Redux, and Context API integration.",
    image: "/img/me3.jpg"
  },
  {
    name: "Ahsan Shahzad Khan",
    position: ".Net & Backend Developer",
    desc: ".NET expert focused on server-side logic and infrastructure.",
    image: "/img/ahsan-DHYrVaVD.jpeg"
  },
  {
    name: "Wafadar Hussain",
    position: "Backend Developer",
    desc: "Handles servers, databases, and API logic for web applications.",
    image: "/img/wafadar1.jpg"
  },
  {
    name: "Faizan Fareed Khan",
    position: "Senior React.js Developer",
    desc: "Expert in architecture and performance optimization.",
    image: "/img/faizan-DpARnDmW.jpeg"
  },
  {
    name: "Ali Raza",
    position: "Marketing Head",
    desc: "Leads strategy, reliability, and digital branding.",
    image: "/img/card4.jpeg"
  },
  {
    name: "Muhammad Raza",
    position: "Senior React & Next-js Developer",
    desc: "Skilled in React & Next.js, JavaScript, HTML, CSS, with API integration.",
    image: "/img/raza.jpg"
  },
  {
    name: "Ali Raza",
    position: "Marketing Head",
    desc: "Leads strategy, reliability, and digital branding.",
    image: "/img/card4.jpeg"
  }
];

export default function OurTeam() {
  return (
    <section className="py-20 bg-transparent text-white">
      <div className="container px-4 mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4">Our Team</h2>
        <p className="text-sm text-white max-w-2xl mx-auto mb-12">
          Meet the professionals driving our success and innovation.
        </p>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              className="relative group w-full max-w-[300px] mx-auto overflow-hidden rounded-xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Main Image */}
              <Image
                src={member.image}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on Hover */}
              <div className="absolute inset-0 bg-black/80 group-hover:bg-gradient-to-r group-hover:from-[#070121] group-hover:to-gray-900 text-white flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 px-4 text-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-bold">{member.name}</h3>
                <p className="text-sm text-gray-300 font-semibold">
                  {member.position}
                </p>
                <p className="text-xs text-gray-400 mt-1">{member.desc}</p>

                <div className="flex gap-3 mt-4">
                  <a href="#" className="text-white hover:text-blue-500">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-pink-500">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-sky-400">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="text-white hover:text-blue-700">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
