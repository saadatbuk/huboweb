"use client";

import Image from "next/image";

export default function HeroCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent">
      <div className="max-w-md w-full bg-transparent rounded-xl overflow-hidden ">
        {/* Top Image with Shadow */}
        <div className="relative w-full h-100 ">
          <div className="absolute inset-0 z-10 rounded-t-xl mt-40 pointer-events-none" />
          <Image
            src="/img/hand4.png" // ✅ Make sure this image is placed in /public/img/
            alt="Hero Image"
            fill
            className="object-cover rounded-t-xl"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-0 text-center bg-transparent">
          <h2 className="text-2xl font-bold text-white mb-2">
            Step into the future of design
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Join thousands of designers and <br /> teams using Framer to turn
            ideas <br />
            into high-performing websites, fast.
          </p>

          {/* Buttons */}
          <div className="flex justify-center gap-4">
            <button className="px-5 py-2 bg-white border border-gray-300 text-gray-800 rounded-full hover:bg-gray-100 transition">
              Learn More
            </button>
            <button className="px-5 py-2 bg-gradient-to-r from-blue-900 to-gray-900 cursor-pointer text-white font-semibold rounded-full transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
