"use client";

import {
  Search,
  LineChart,
  MailCheck,
  Users,
  Share2,
  Globe2,
  BarChart2
} from "lucide-react";

export default function DigitalMarketingServices() {
  const services = [
    {
      icon: <Search size={32} />,
      title: "Search Engine Optimization (SEO)",
      desc: "Improve your website’s visibility on search engines like Google through keyword optimization, technical SEO, and high-quality backlinks."
    },
    {
      icon: <MailCheck size={32} />,
      title: "Email Marketing",
      desc: "Engage your audience through targeted, automated, and personalized email campaigns that drive conversions and build customer relationships."
    },
    {
      icon: <Users size={32} />,
      title: "Social Media Marketing",
      desc: "Grow your brand presence on platforms like Facebook, Instagram, and LinkedIn with engaging content, paid campaigns, and audience analytics."
    },
    {
      icon: <Share2 size={32} />,
      title: "Content Marketing",
      desc: "Create and distribute valuable content like blogs, videos, and infographics to attract and retain a clearly defined audience."
    },
    {
      icon: <Globe2 size={32} />,
      title: "PPC & Google Ads",
      desc: "Run high-performing Google Ads and pay-per-click campaigns that bring immediate traffic and measurable ROI."
    },
    {
      icon: <LineChart size={32} />,
      title: "Analytics & Conversion Tracking",
      desc: "Track your campaigns and optimize them using tools like Google Analytics, Tag Manager, and heatmaps for better results."
    },
    {
      icon: <BarChart2 size={32} />,
      title: "Marketing Strategy & Consulting",
      desc: "Build winning marketing strategies tailored to your brand’s vision, audience, and goals with data-driven insights."
    }
  ];

  return (
    <section className="w-full bg-transparent py-20 px-4 md:px-12 text-white">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-4">
            Comprehensive Digital Marketing Services
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Boost your online presence and reach your business goals with our
            full suite of digital marketing services tailored for your brand.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-[#0f0b2b] border border-gray-800 rounded-2xl p-6 hover:shadow-lg hover:shadow-yellow-500/10 transition duration-300"
            >
              <div className="flex items-center gap-4 mb-4 text-white">
                {item.icon}{" "}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
