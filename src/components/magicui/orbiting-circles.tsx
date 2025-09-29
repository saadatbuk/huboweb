"use client";

import { motion } from "framer-motion";
import React from "react";

interface OrbitingCirclesProps {
  outerIcons: React.ReactNode[];
  innerIcons: React.ReactNode[];
  outerRadius?: number;
  innerRadius?: number;
  iconSize?: number;
}

export function OrbitingCircles({
  outerIcons,
  innerIcons,
  outerRadius = 120,
  innerRadius = 70,
  iconSize = 40,
}: OrbitingCirclesProps) {
  return (
    <div className="relative h-[320px] w-[320px]">
      {/* Orbit Lines */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="rounded-full border border-gray-600/30"
          style={{
            width: outerRadius * 2,
            height: outerRadius * 2,
          }}
        />
        <div
          className="absolute rounded-full border border-gray-600/30"
          style={{
            width: innerRadius * 2,
            height: innerRadius * 2,
          }}
        />
      </div>

      {/* Outer Orbit */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
      >
        {outerIcons.map((child, index) => {
          const angle = (index / outerIcons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * outerRadius;
          const y = Math.sin(angle) * outerRadius;

          return (
            <div
              key={`outer-${index}`}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px)`,
                width: iconSize,
                height: iconSize,
                marginLeft: -iconSize / 2,
                marginTop: -iconSize / 2,
              }}
            >
              {child}
            </div>
          );
        })}
      </motion.div>

      {/* Inner Orbit */}
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
      >
        {innerIcons.map((child, index) => {
          const angle = (index / innerIcons.length) * 2 * Math.PI;
          const x = Math.cos(angle) * innerRadius;
          const y = Math.sin(angle) * innerRadius;

          return (
            <div
              key={`inner-${index}`}
              className="absolute"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px)`,
                width: iconSize,
                height: iconSize,
                marginLeft: -iconSize / 2,
                marginTop: -iconSize / 2,
              }}
            >
              {child}
            </div>
          );
        })}
      </motion.div>
    </div>
  );
}
