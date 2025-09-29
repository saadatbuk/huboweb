"use client";

import { TextAnimate } from "@/components/magicui/text-animate";
import Image from "next/image";

export default function FaqTutorialSection() {
  return (
    <section className="bg-transparent text-white py-20 px-6 md:px-16 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="md:w-1/2" data-aos="fade-right" data-aos-delay="100">
          <p className="uppercase text-sm text-gray-400 tracking-wide mb-2">
            <TextAnimate animation="blurInUp" by="character" once>
              Info Portal
            </TextAnimate>
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <TextAnimate animation="blurInUp" by="character" once>
              FAQ & Video Tutorials
            </TextAnimate>
          </h2>
          <p className="text-gray-400 text-base mb-8">
            <TextAnimate animation="blurInUp" by="character" once>
              All useful information about the theme and its functionality is
              conveniently gathered in one place for you. Lots of articles and
              video tutorials will tell you how to easily customize this
              product.
            </TextAnimate>
          </p>
        </div>

        {/* Right Images */}
        <div className="relative md:w-1/2 h-[500px]">
          {/* Background laptop screen */}
          <div data-aos="zoom-in" data-aos-delay="100">
            <Image
              src="/img/1.webp"
              alt="Laptop"
              width={600}
              height={400}
              className="rounded-xl shadow-lg"
            />
          </div>

          {/* Top left image */}
          <div data-aos="fade-down-left" data-aos-delay="200">
            <Image
              src="/img/2.jpg"
              alt="Top Left"
              width={250}
              height={200}
              className="absolute top-[-40px] left-[-40px] rounded-xl shadow-xl"
            />
          </div>

          {/* Bottom image */}
          <div data-aos="fade-up" data-aos-delay="300">
            <Image
              src="/img/3.jpg"
              alt="Bottom Image"
              width={200}
              height={150}
              className="absolute mt-[-70px] left-0 rounded-xl shadow-xl"
            />
          </div>

          {/* Top right video preview */}
          <div data-aos="fade-down-right" data-aos-delay="400">
            <Image
              src="/img/4.jpg"
              alt="Top Right Video"
              width={180}
              height={120}
              className="absolute top-0 right-[-30px] rounded-xl shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
