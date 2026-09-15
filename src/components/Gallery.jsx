import React from 'react';
import { CylinderCarousel } from './CylinderCarousel';

const CAROUSEL_IMAGES = [
  { src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=600&auto=format&fit=crop", alt: "Tech Setup" },
  { src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop", alt: "Circuit Board" },
  { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop", alt: "Matrix Code" },
  { src: "https://images.unsplash.com/photo-1531297172867-4d648dd69c5e?q=80&w=600&auto=format&fit=crop", alt: "Coding Setup" },
  { src: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=600&auto=format&fit=crop", alt: "Gaming Console" },
  { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop", alt: "Laptop Coding" },
  { src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=600&auto=format&fit=crop", alt: "Code Editor" },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 px-6 border-t border-gray-200 bg-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-8 text-center z-10 relative">
          Visions of the Future.
        </h2>
        <p className="text-gray-400 font-medium text-center mb-16 max-w-2xl z-10 relative">
          A glimpse into what awaits at Sci-Technovation '26. Get ready to experience technology like never before.
        </p>
        
        <div className="w-full max-w-5xl relative z-0">
          <CylinderCarousel 
            images={CAROUSEL_IMAGES} 
            animationDuration={24}
            cardWidth={220}
          />
        </div>
      </div>
    </section>
  );
}
