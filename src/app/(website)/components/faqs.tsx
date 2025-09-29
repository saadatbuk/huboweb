"use client";

import React, { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. If you're not satisfied with your purchase, simply return it within 30 days for a full refund."
  },
  {
    question: "How do I track my order?",
    answer:
      "You can track your order using the tracking link sent to your email after purchase, or via your account dashboard."
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Our customer support team is available 24/7 via live chat, email, or phone to assist you with any questions."
  },
  {
    question: "Can I change my shipping address?",
    answer:
      "Yes, you can change your shipping address before your order is dispatched. Contact our support to update the details."
  }
];

// ✅ Add `imageSrc` as a prop here
export default function Faqs({ imageSrc }: { imageSrc: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-transparent text-white py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: FAQs */}
        {/* Left: FAQs */}
        <div data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Frequently Asked Questions
          </h2>
          <p
            className="text-gray-400 mb-10"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Got questions? We’ve got answers.
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border bg-[#1F1F4B] border-gray-700 rounded-lg"
                data-aos="fade-up"
                data-aos-delay={200 + index * 100}
              >
                <button
                  className="w-full flex justify-between items-center px-5 py-4 text-left focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  <span className="text-xl">
                    {openIndex === index ? "−" : "+"}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="px-5 pb-4 text-gray-300">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div
          className="w-full h-full flex justify-center items-center"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <Image
            src={imageSrc}
            alt="FAQs"
            width={500}
            height={500}
            className="rounded-xl object-contain max-w-full"
          />
        </div>
      </div>
    </section>
  );
}
