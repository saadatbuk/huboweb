"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function PartnersPage() {
  return (
    <section
      className="w-full py-20 px-6"
      style={{
        backgroundImage: 'url("/img/partner10.jpg")',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center"
      }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Side Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-white mb-4">
            Our Partners
          </h2>
          <p className="text-gray-400 mb-6 max-w-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus luctus.
          </p>
          <a
            href="#"
            className="inline-flex items-center text-white hover:underline font-medium"
          >
            <ArrowRight className="w-4 h-4 mr-2" />
            Learn More
          </a>
        </div>

        {/* Logos */}
        <div className="md:w-1/2 w-full flex flex-wrap justify-center md:justify-start items-center gap-6 md:gap-10">
          <Image
            src="/img/bussines.png"
            alt="Business"
            width={160}
            height={80}
            className="w-36 h-20 md:w-44 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/img/filmplay.png"
            alt="FilmPlay"
            width={160}
            height={80}
            className="w-36 h-20 md:w-44 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
          <Image
            src="/img/starline.png"
            alt="Starine"
            width={160}
            height={80}
            className="w-36 h-20 md:w-44 md:h-24 object-contain grayscale hover:grayscale-0 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}
