"use client";

import React from "react";
import Image from "next/image";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "next-themes";

export default function ContactPage() {
  const { theme } = useTheme();

  return (
    <section className="w-full py-16 px-4 md:px-12 lg:px-24 text-white bg-transparent">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get in Touch
        </h2>

        {/* Row: Customer Care & Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Customer Care Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Customer Care</h3>
            <p className="text-gray-300">
              Our support team is available 24/7 to assist you. We value our
              customers and strive to provide the best service possible.
            </p>

            {/* Example Customer Profiles */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Image
                  src="/img/customer3.png"
                  alt="Customer Support"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Sarah Ahmed</p>
                  <p className="text-sm text-gray-400">Senior Support Agent</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Image
                  src="/img/customer2.jpg"
                  alt="Customer Support"
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">Ali Raza</p>
                  <p className="text-sm text-gray-400">Technical Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form with MagicCard */}
          <MagicCard
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
            className="p-0"
          >
            <form className="bg-white/5 backdrop-blur-md rounded-2xl shadow-xl p-8 space-y-6 border border-white/10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-sm font-medium">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full p-3 text-white rounded-lg bg-white/10  transition duration-300 ease-in-out focus-within:border-orange-400 focus-within:scale-95"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm font-medium">
                    Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full p-3 rounded-lg text-white bg-white/10 transition duration-300 ease-in-out focus-within:border-orange-400 focus-within:scale-95"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full p-3 rounded-lg text-white bg-white/10  transition duration-300 ease-in-out focus-within:border-orange-400 focus-within:scale-95"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block mb-2 text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full p-3 rounded-lg text-white bg-white/10 transition duration-300 ease-in-out focus-within:border-orange-400 focus-within:scale-95"
                  ></textarea>
                </div>
              </div>
              <div className="text-center">
                <button className="bg-white cursor-pointer text-[#071c55] border  hover:bg-[#071c55] hover:text-white  font-semibold py-2 px-6 rounded-full transition">
                  Send Message
                </button>
              </div>
            </form>
          </MagicCard>
        </div>

        {/* Google Map */}
        {/* Google Map */}
        {/* Google Map Section - Modern UI */}
        <div className="mt-24 relative px-4">
          <h3 className="text-3xl font-bold text-center text-white mb-12">
            Our Location
          </h3>

          <div className="relative w-full max-w-6xl mx-auto h-[450px] rounded-3xl overflow-hidden shadow-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-md">
            {/* Embedded Google Map */}
            <iframe
              title="Google Map - Lahore"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13608.093241732082!2d74.32154765000001!3d31.54970095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39190483aa823e7f%3A0xb1b36ff4ff5d53e9!2sLahore%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1721587070700!5m2!1sen!2s"
              className="w-full h-full grayscale-[15%] contrast-125 saturate-150"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>

            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 bg-[#070121]/90 border border-yellow-400 text-white rounded-xl p-6 shadow-lg backdrop-blur-md w-[300px] max-w-[90%]">
              <h4 className="text-xl font-semibold mb-2 text-white">
                Head Office
              </h4>
              <p className="text-sm text-gray-300 leading-relaxed">
                HuboWeb HQ, Model Town Link Road, Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
