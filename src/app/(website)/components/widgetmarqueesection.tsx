"use client";

import {
  ActivityIcon,
  CameraIcon,
  CloudIcon,
  CodeIcon,
  HeadphonesIcon,
  ImageIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  Share2Icon,
  ShieldIcon,
  TableIcon,
  TagIcon,
  TextCursorIcon,
  VideoIcon,
  Wand2Icon
} from "lucide-react";

const iconItems = [
  { icon: <ImageIcon />, label: "Image Comparison" },
  { icon: <MessageSquareIcon />, label: "FAQ" },
  { icon: <Wand2Icon />, label: "Funfact" },
  { icon: <VideoIcon />, label: "Lottie" },
  { icon: <TableIcon />, label: "Testimonial" },
  { icon: <LayoutDashboardIcon />, label: "Pricing Table" },
  { icon: <TextCursorIcon />, label: "Heading" },
  { icon: <CloudIcon />, label: "Dual Button" },
  { icon: <CameraIcon />, label: "Popup Modal" },
  { icon: <Share2Icon />, label: "Social Share" },
  { icon: <ActivityIcon />, label: "Audio Player" },
  { icon: <TagIcon />, label: "Coupon Code" },
  { icon: <ShieldIcon />, label: "Protected" },
  { icon: <CodeIcon />, label: "Content Ticker" },
  { icon: <HeadphonesIcon />, label: "Video Gallery" }
];

export default function WidgetMarqueeSection() {
  return (
    <section
      className="bg-transparent py-24 px-4 md:px-12 text-white overflow-hidden"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          className="text-6xl font-bold text-white/10 mb-[-28px]"
          data-aos="fade-down"
          data-aos-delay="100"
        >
          250+
        </h2>
        <h3
          className="text-3xl md:text-4xl font-bold mb-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Powerful Widgets and Extensions for Elementor
        </h3>
        <p
          className="text-gray-400 mb-16"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Build and customize all the key parts of your website
        </p>

        <div className="space-y-6" data-aos="zoom-in-up" data-aos-delay="400">
          {[0, 1, 2, 3].map((rowIndex) => {
            const directionClass =
              rowIndex % 2 === 0
                ? "animate-marquee-left"
                : "animate-marquee-right";

            return (
              <div
                key={rowIndex}
                className={`w-full whitespace-nowrap ${directionClass}`}
              >
                <div className="flex gap-4 w-fit">
                  {iconItems.map((item, index) => (
                    <div
                      key={`${rowIndex}-${index}`}
                      className="flex items-center gap-2 px-4 py-2 bg-white text-black shadow-md rounded-xl border border-white/10 min-w-[180px]"
                    >
                      <div className="text-black">{item.icon}</div>
                      <span className="text-black font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                  {/* Duplicate icons to ensure smooth loop */}
                  {iconItems.map((item, index) => (
                    <div
                      key={`duplicate-${rowIndex}-${index}`}
                      className="flex items-center gap-2 px-4 py-2 bg-[#1A1B2F] shadow-md rounded-xl border border-white/10 min-w-[180px]"
                    >
                      <div className="text-black">{item.icon}</div>
                      <span className="text-black font-medium text-sm">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
