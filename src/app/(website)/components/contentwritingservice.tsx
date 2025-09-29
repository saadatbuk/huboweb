"use client";

import Image from "next/image";
import { FileText, Star, ThumbsUp } from "lucide-react";

export default function ContentWritingService() {
  return (
    <section className="w-full bg-transparent text-white px-6 md:px-16 py-20 space-y-24">
      {/* Why Choose Us */}
      <div className="flex flex-col md:flex-row items-start gap-10">
        {/* Text Content */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose Our Content Writing Services
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mb-6">
            Powerful content drives engagement, builds trust, and converts
            visitors into loyal customers. Our team of expert content
            strategists and copywriters crafts compelling, SEO-optimized content
            tailored to your business goals. Whether it’s website copy, blog
            posts, or marketing material — we deliver content that speaks
            directly to your audience.
          </p>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-start gap-3">
              <ThumbsUp className="text-white mt-1" />
              Engaging and persuasive copy that resonates with your target
              audience
            </li>
            <li className="flex items-start gap-3">
              <ThumbsUp className="text-white mt-1" />
              SEO-friendly writing to improve your search engine visibility
            </li>
            <li className="flex items-start gap-3">
              <ThumbsUp className="text-white mt-1" />
              Tailored content strategies based on your niche and industry
            </li>
          </ul>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src="/img/mobilebig.jpg" // Replace with your actual image
            alt="Why Choose Us"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Services We Offer */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Services We Offer
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Website Copywriting",
              desc: "Conversion-focused content that reflects your brand’s voice and values."
            },
            {
              title: "Blog & Article Writing",
              desc: "Informative, engaging articles to educate and attract your target audience."
            },
            {
              title: "SEO Content",
              desc: "Optimized content with strategic keyword placement and high readability."
            },
            {
              title: "Product Descriptions",
              desc: "Crisp, clear, and persuasive descriptions to boost your e-commerce conversions."
            },
            {
              title: "Social Media Content",
              desc: "Creative captions and post ideas tailored to your social media platforms."
            },
            {
              title: "Email Copywriting",
              desc: "Compelling email content that drives opens, clicks, and conversions."
            }
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-3 hover:border-yellow-400 transition"
            >
              <FileText className="text-white" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Our Writing Process */}
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* Steps */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Writing Process
          </h2>
          <ol className="space-y-6 border-l-2 border-yellow-400 pl-6">
            {[
              "Understanding Your Goals",
              "Research & Keyword Analysis",
              "Outline & Strategy",
              "Content Drafting",
              "Editing & Proofreading",
              "Final Approval & Delivery"
            ].map((step, index) => (
              <li key={index} className="relative">
                <span className="absolute -left-4 top-1.5 w-3 h-3 bg-gradient-to-r from-blue-900 to-gray-900 rounded-full" />
                <h4 className="text-lg font-semibold text-white">{step}</h4>
              </li>
            ))}
          </ol>
        </div>

        {/* Image */}
        <div className="flex-1">
          <Image
            src="/img/tech3.jpg" // Replace with your actual image
            alt="Our Writing Process"
            width={600}
            height={400}
            className="rounded-xl object-cover w-full h-auto"
          />
        </div>
      </div>

      {/* Testimonials */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-10">
          What Our Clients Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2].map((id) => (
            <div
              key={id}
              className="bg-white/5 border border-white/10 p-6 rounded-xl space-y-4"
            >
              <div className="flex gap-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-white" />
                ))}
              </div>
              <p className="text-gray-300">
                “Their writing transformed our online presence. The tone was
                spot on, the SEO results were impressive, and our audience
                engagement doubled!”
              </p>
              <p className="text-white font-semibold">— Ahmed Rehman</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-lg p-5">
            <h4 className="font-semibold text-white mb-2">
              Do you write for specific industries?
            </h4>
            <p className="text-gray-300">
              Yes, our writers have experience across various industries
              including tech, real estate, health, fashion, and more.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-5">
            <h4 className="font-semibold text-white mb-2">
              Will the content be SEO optimized?
            </h4>
            <p className="text-gray-300">
              Absolutely. We use researched keywords, meta-friendly structures,
              and engaging headers for better rankings.
            </p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-5">
            <h4 className="font-semibold text-white mb-2">
              Do you offer revisions?
            </h4>
            <p className="text-gray-300">
              Yes, we offer up to 3 free revisions for every piece of content to
              ensure full satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Need Content That Converts?
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-6">
          Let our expert writers craft compelling content tailored to your
          goals. Contact us today and elevate your brand with powerful words.
        </p>
       
      </div>
    </section>
  );
}
