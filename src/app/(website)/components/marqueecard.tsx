import React from "react";
import { Marquee } from "@/components/magicui/marquee";
import {
  Rocket,
  MonitorSmartphone,
  Palette,
  Settings2,
} from "lucide-react";

const cards = [
  {
    text: "Our team utilizes cutting-edge technology, ensuring fast load times, security, and scalable solutions for your growing business.",
    icon: Rocket,
  },
  {
    text: "Our web development services create responsive, user-friendly websites, delivering seamless experiences across all devices and platforms.",
    icon: MonitorSmartphone,
  },
  {
    text: "We build custom websites tailored to your brand, focusing on design, functionality, and optimized user engagement.",
    icon: Palette,
  },
  {
    text: "From front-end design to back-end functionality, we ensure your site operates smoothly and efficiently for users.",
    icon: Settings2,
  },
];

function MarqueeCard() {
  return (
    <div className="w-full py-6">
      <Marquee className="gap-4">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div
              key={index}
              className="group w-64 px-6 py-4 bg-white text-black rounded-xl shadow-md font-medium flex flex-col items-start gap-4 transition-colors duration-300"
            >
              {/* Icon changes color only when its own card is hovered */}
              <Icon className="w-8 h-8 text-[#1F1F4B] transition-colors duration-300" />
              <p className="text-sm">{card.text}</p>
            </div>
          );
        })}
      </Marquee>
    </div>
  );
}

export default MarqueeCard;
