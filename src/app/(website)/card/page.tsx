"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Image from "next/image";
import { Send } from "lucide-react";
import { TextAnimate } from "@/components/magicui/text-animate";
import Link from "next/link";

const services = [
  {
    title: "CRM Automation",
    description:
      "Boost the success of your company by using Google Ads to increase online visibility and promote growth.",
    image: "/img/card10.jpg",
    logo: "/img/crmautomation.png",
  },
  {
    title: "Web Design & Development",
    description:
      "Revolutionize your digital footprint with our bespoke web design solutions-where innovation",
    image: "/img/card4.jpeg",
    logo: "/img/webdesigne.png",
  },
  {
    title: "UI/UX Design",
    description:
      "Elevate engagement, inspire loyalty-our UI/UX design redefines the digital frontier, one click at a time.",
    image: "/img/card9.jpg",
    logo: "/img/uidesigne.png",
  },
  {
    title: "Mobile App Development",
    description:
      "From concept to code, we craft, redefine mobile solutions that inspire engagement and empowering your brand.",
    image: "/img/card8.jpg",
    logo: "/img/mobiledeveloper.png",
  },
  {
    title: "Graphics Design",
    description:
      "Transforming pixels into profit our cutting-edge graphics design sets your brand apart in the digital landscape.",
    image: "/img/card7.webp",
    logo: "/img/graphicdesigne.png",
  },
  {
    title: "Robotic Process Automation",
    description:
      "Robotic Process Automation uses bots to automate repetitive tasks, boosting efficiency and accuracy.",
    image: "/img/card6.png",
    logo: "/img/roboticautomation.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Captivate, Convert, Conquer-the digital realm is yours to conquer with our dynamic digital marketing strategies.",
    image: "/img/card3.jpg",
    logo: "/img/digitalmarketing.png",
  },
  {
    title: "SEO Optimization",
    description:
      "Dominate rankings and seize digital supremacy with strategic optimization where visibility meets profitability.",
    image: "/img/seo.webp",
    logo: "/img/seooptimization.png",
  },
];

export default function Card() {
  useEffect(() => {
    AOS.init({ duration: 800, once: false });
  }, []);

  return (
    <section className="py-16 px-4 sm:px-6 bg-transparent text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-2">
          <TextAnimate animation="blurInUp" by="character" once>
            Experience our pinnacle of digital excellence
          </TextAnimate>
        </h2>
        <p className="text-gray-400">
          <TextAnimate animation="blurInUp" by="character" once>
            Unlock your digital potential and elevate your success with our
            premier services.
          </TextAnimate>
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {services.map((service, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="group relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 hover:scale-105 h-[360px] w-full max-w-[300px] flex-grow"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-500 opacity-0 group-hover:opacity-100"
              style={{ backgroundImage: `url(${service.image})` }}
            />

            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center text-center h-full p-6 space-y-4">
              {/* Logo */}
              <div className="relative w-16 h-16  rounded-full flex items-center justify-center overflow-hidden">
                <div className="relative w-11 h-11">
                  <Image
                    src={service.logo}
                    alt={service.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-white">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-lg text-gray-300 transition-colors duration-300">
                {service.description}
              </p>

              {/* Read More */}
              <div className="mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <Link
                  href="/service"
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white text-white bg-transparent hover:bg-white hover:text-[#070121] transition-all duration-300"
                >
                  Read More <Send size={16} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
