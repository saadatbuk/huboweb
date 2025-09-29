"use client";

import Image from "next/image";

interface HeroProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt?: string;
}

const Hero = ({
  title,
  description,
  imageSrc,
  imageAlt = "Hero Image"
}: HeroProps) => {
  return (
    <section className="w-full h-[90vh] py-16 px-6 md:px-12 bg-transparent">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 mt-14">
        
        {/* Left Side - Text */}
        <div
          className="flex-1 text-center md:text-left"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6">
            {title}
          </h1>
          <p className="text-lg text-white max-w-xl mx-auto md:mx-0">
            {description}
          </p>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1" data-aos="zoom-in" data-aos-delay="200">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={600}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
