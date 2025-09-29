"use client";

import Image from "next/image";
import {
  Facebook,
  Twitter,
  Youtube,
  BadgeCheck,
  Users,
  Shirt,
  ArrowRight
} from "lucide-react";

export default function CareerSection() {
  return (
    <section className="w-full">
      {/* White Content Section */}
      <div className="bg-transparent relative z-10 pb-10">
        <div
          className="max-w-6xl mx-auto px-6 pt-12 md:flex items-start justify-between"
          data-aos="fade-up"
        >
          {/* Images with Overlap Effect */}
          <div className="flex gap-4 relative z-20 md:-mb-24" data-aos="fade-up">
            <Image
              src="/img/section2.jpg"
              alt="image1"
              width={260}
              height={360}
              className="rounded-xl object-cover h-[480px] w-[220px]"
            />
            <Image
              src="/img/section.jpg"
              alt="image2"
              width={260}
              height={360}
              className="rounded-xl object-cover h-[450px] w-[220px] mt-8"
            />
          </div>

          {/* Right Side Text */}
          <div className="mt-10 md:mt-0 md:w-1/2 space-y-4" data-aos="fade-up">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Making Dreams And <br /> Aspirations Come True
            </h2>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut.
            </p>

            {/* Progress Bars */}
            <div className="space-y-4 pt-4">
              {[
                {
                  label: "Trusted",
                  color: "bg-gradient-to-r from-blue-900 to-gray-900"
                },
                { label: "Many Partners", color: "bg-orange-400" },
                {
                  label: "Professional",
                  color: "bg-gradient-to-r from-blue-900 to-gray-900"
                }
              ].map(({ label, color }, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                  <div className="flex justify-between text-sm font-bold text-white mb-1">
                    <span>{label}</span>
                    <span>90%</span>
                  </div>
                  <div className="w-full h-1 bg-gray-200">
                    <div className={`h-1 w-[90%] ${color}`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Black Background Section */}
      <div className="bg-white text-white pt-32 pb-10 px-6 relative z-0">
        <div className="max-w-6xl mx-auto">
          {/* Social Media Row */}
          <div className="mb-8" data-aos="fade-up">
            <div className="flex items-center justify-between border-b border-gray-600 pb-3">
              <p className="font-semibold text-black text-lg">Social Media :</p>
              <div className="flex gap-2">
                <a href="#" className="bg-black p-2 rounded-sm text-white">
                  <Facebook className="w-4 h-4" />
                </a>
                <a href="#" className="bg-black p-2 rounded-sm text-white">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href="#" className="bg-black p-2 rounded-sm text-white">
                  <Youtube className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Content Below Social Media */}
          <div
            className="flex flex-col md:flex-row justify-between items-start gap-10"
            data-aos="fade-up"
          >
            {/* Left Text */}
            <div className="md:w-1/2" data-aos="fade-up">
              <h1 className="text-4xl md:text-5xl text-black font-bold leading-tight mb-6">
                More Jobs Equal a <br /> Better World
              </h1>
              <p className="text-black mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="text-black mb-6">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <a
                href="applyform"
                className="text-black font-semibold inline-flex items-center gap-2"
              >
                <ArrowRight className="w-4 h-4" />
                Apply Form
              </a>
            </div>

            {/* Cards Row */}
            <div className="flex flex-wrap md:flex-nowrap gap-4 md:gap-6">
              <div
                className="bg-gray-900 rounded-xl p-6 w-48 h-40 flex flex-col justify-center items-center text-center"
                data-aos="fade-up"
              >
                <BadgeCheck className="text-white w-8 h-8 mb-2" />
                <h2 className="text-2xl font-bold">25</h2>
                <p className="text-sm text-gray-300">Experience</p>
              </div>
              <div
                className="bg-gray-800 rounded-xl p-6 w-48 h-40 flex flex-col justify-center items-center text-center"
                data-aos="fade-up"
                data-aos-delay="150"
              >
                <Users className="text-white w-8 h-8 mb-2" />
                <h2 className="text-2xl font-bold">70+</h2>
                <p className="text-sm text-gray-300">Expert Trainers</p>
              </div>
              <div
                className="rounded-xl p-6 w-48 h-40 flex flex-col justify-center items-center text-center text-black bg-gradient-to-r from-blue-900 to-gray-900 bg-cover bg-center"
                style={{ backgroundImage: "url('/img/office-bg.jpg')" }}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <Shirt className="w-8 h-8 mb-2" />
                <h2 className="text-2xl font-bold">100+</h2>
                <p className="text-sm">Companies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
