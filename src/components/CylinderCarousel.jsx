"use client";

import React from "react";
import { cn } from "../lib/utils";

export const CylinderCarousel = React.forwardRef(
  (
    {
      images,
      className,
      containerClassName,
      cardClassName,
      animationDuration = 32,
      cardWidth = 250,
      ...props
    },
    ref
  ) => {
    const N = images.length;
    
    // Compute 3D geometry in JS to guarantee smooth cross-browser rendering
    // instead of relying on the modern CSS tan() function which can fail.
    const angle = 360 / N;
    // Radius = (width / 2) / tan(PI / N) + gap
    const radius = (cardWidth / 2 + 12) / Math.tan(Math.PI / N);
    
    // Aspect ratio 7/10 translates to height = width * 1.428
    const cardHeight = cardWidth * (10 / 7);

    return (
      <div
        ref={ref}
        className={cn(
          "w-full h-full min-h-[500px] flex items-center justify-center overflow-hidden",
          className
        )}
        style={{
          perspective: "1200px",
          maskImage: "linear-gradient(90deg, transparent, #000 15% 85%, transparent)",
          WebkitMaskImage: "linear-gradient(90deg, transparent, #000 15% 85%, transparent)",
        }}
        {...props}
      >
        <div
          className={cn(
            "relative flex justify-center items-center",
            containerClassName
          )}
          style={{
            width: `${cardWidth}px`,
            height: `${cardHeight}px`,
            transformStyle: "preserve-3d",
            willChange: "transform",
            animation: `spinCylinder ${animationDuration}s linear infinite`,
          }}
        >
          <style>
            {`
              @keyframes spinCylinder {
                0% { transform: rotateY(0deg); }
                100% { transform: rotateY(-360deg); }
              }
            `}
          </style>
          
          {images.map((img, i) => (
            <div
              key={i}
              className="absolute inset-0 flex justify-center items-center"
              style={{
                transform: `rotateY(${i * angle}deg) translateZ(${radius}px)`,
                backfaceVisibility: "hidden",
                WebkitBackfaceVisibility: "hidden",
              }}
            >
              <img
                src={img.src}
                alt={img.alt || `Carousel image ${i}`}
                className={cn(
                  "w-full h-full object-cover rounded-2xl shadow-2xl",
                  cardClassName
                )}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
);

CylinderCarousel.displayName = "CylinderCarousel";
