'use client';

import {
  Camera,
  Image as ImageIcon,
  GalleryVertical,
  PictureInPicture2,
} from 'lucide-react';
import Image from 'next/image';
import { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const images = [
  { src: '/img/image.jpg', w: 'w-60', h: 'h-50', offset: 'mt-10' },
  { src: '/img/image2.jpg', w: 'w-52', h: 'h-66', offset: 'mt-0' },
  { src: '/img/image3.jpg', w: 'w-36', h: 'h-50', offset: 'mt-5' },
  { src: '/img/image4.jpg', w: 'w-44', h: 'h-52', offset: 'mt-4' },
  { src: '/img/image5.jpg', w: 'w-48', h: 'h-80', offset: 'mt-0' },
  { src: '/img/image6.jpg', w: 'w-40', h: 'h-44', offset: 'mt-8' },
  { src: '/img/image7.jpg', w: 'w-56', h: 'h-58', offset: 'mt-5' },
  { src: '/img/image8.jpg', w: 'w-66', h: 'h-40', offset: 'mt-12' },
];

export default function ImageMasonry() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  const xMotion = useTransform(mouseX, [0, window.innerWidth], [-20, 20]);
  const yMotion = useTransform(mouseY, [0, window.innerHeight], [-20, 20]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 min-h-screen p-10">
      {/* Left Section */}
      <div className="flex flex-col justify-center space-y-6">
        <h2 className="text-4xl font-bold text-gray-100">Shape the Framer scene in your city</h2>
        <p className="text-gray-300">
          Dive into a dynamic showcase of stunning <br />visuals captured from all over the world.<br />
          These visuals reflect creativity, <br />variety, and a love for storytelling.
        </p>
        <div className="flex gap-4 text-indigo-400">
          <Camera className="w-6 h-6" />
          <ImageIcon className="w-6 h-6" />
          <GalleryVertical className="w-6 h-6" />
          <PictureInPicture2 className="w-6 h-6" />
        </div>
      </div>

      {/* Right Section */}
      <div className="relative flex flex-wrap justify-center items-center gap-4">
        {images.map((img, index) => (
          <motion.div
            key={index}
            style={{ x: xMotion, y: yMotion }}
            className={`relative rounded-xl overflow-hidden shadow-lg ${img.w} ${img.h} ${img.offset}`}
          >
            <Image
              src={img.src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
