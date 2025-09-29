"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Facebook, Twitter, Linkedin, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adrienne L.",
    title: "Student loan refinancing",
    text: "SoFi has made my refinancing experience social, interesting, and fun through their community events and member engagement. I found their advisors supportive and responsive. Highly recommend them to anyone looking to refinance.",
    image: "/img/client.jpg",
    color: "#F97316"
  },
  {
    name: "Michael W.",
    title: "Student loan refinancing",
    text: "SoFi career coaching has helped me tremendously over the past few months. I doubt I would have been able to make the amount of progress in such a short time if I didn't have it available to me. They really understand what job seekers need.",
    image: "/img/client.jpg",
    color: "#06B6D4"
  },
  {
    name: "Sophia R.",
    title: "Home Loan",
    text: "Getting a home loan through SoFi was incredibly smooth and efficient. I felt supported every step of the way. Their team made the process easy and stress-free.",
    image: "/img/client.jpg",
    color: "#84CC16"
  },
  {
    name: "David K.",
    title: "Investment Advice",
    text: "Their investment tools and advisors helped me make smarter decisions with my portfolio. I now feel much more confident in my financial future.",
    image: "/img/client.jpg",
    color: "#A855F7"
  },
  {
    name: "Emily T.",
    title: "Career Coaching",
    text: "Thanks to SoFi, I landed my dream job in less than 3 months! The career coaching really works. I gained clarity, confidence, and real strategy to move forward.",
    image: "/img/client.jpg",
    color: "#F43F5E"
  }
];

export default function Testimonials() {
  return (
    <div
      className="bg-transparent text-white py-16 px-4 sm:px-6 lg:px-8"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2
          className="text-3xl font-bold mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Client testimonials
        </h2>
        <p
          className="text-sm text-gray-300 mb-12"
          data-aos="fade-down"
          data-aos-delay="300"
        >
          This slide displays the glowing client testimonials that attest to the
          value of our products and services. It features client endorsements
          from business members.
        </p>

        <div className="relative w-full max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center px-2"
                  data-aos="zoom-in-up"
                  data-aos-delay={index * 100}
                  data-aos-duration="800"
                >
                  <div className="flex flex-col md:flex-row items-start gap-6 max-w-2xl text-left">
                    <div className="flex flex-col items-center">
                      <div className="rounded-full border-4 border-white w-24 h-24 overflow-hidden">
                        <Image
                          src={testimonial.image}
                          alt={testimonial.name}
                          width={96}
                          height={96}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      <div className="mt-4 text-center md:text-left">
                        <h3
                          className="text-base font-semibold"
                          style={{ color: testimonial.color }}
                        >
                          {testimonial.name}
                        </h3>
                        <p className="text-sm text-white mt-1">
                          {testimonial.title}
                        </p>
                      </div>
                      <div className="flex gap-3 mt-2 text-gray-300">
                        <Facebook className="w-4 h-4 cursor-pointer hover:text-white" />
                        <Twitter className="w-4 h-4 cursor-pointer hover:text-white" />
                        <Linkedin className="w-4 h-4 cursor-pointer hover:text-white" />
                      </div>
                    </div>
                    <div className="relative bg-[#1F1F4B] text-white p-4 rounded-lg shadow-md flex-1">
                      <div
                        className="absolute left-0 top-0 h-full w-1 rounded-s-md"
                        style={{ backgroundColor: testimonial.color }}
                      ></div>
                      <p className="text-sm leading-relaxed pl-2 mb-6">
                        {testimonial.text}
                      </p>
                      <div className="absolute bottom-2 right-3 flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-500 fill-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 sm:-left-6" />
            <CarouselNext className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 sm:-right-6" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
