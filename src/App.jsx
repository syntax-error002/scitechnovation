import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import EventDirectory from './components/EventDirectory';
import Schedule from './components/Schedule';
import Venue from './components/Venue';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

export default function App() {
  const [isInaugurated, setIsInaugurated] = useState(false);

  const handleInauguration = () => {
    setIsInaugurated(true);
    
    // Play the grand inauguration music
    const audio = new Audio('/inauguration-music.mp3');
    audio.volume = 1;
    audio.play().catch(err => console.error("Audio play failed:", err));

    const end = Date.now() + 5 * 1000;
    const colors = ['#000000', '#ffffff', '#fb4f43', '#3b82f6', '#14b8a6'];

    (function frame() {
      confetti({
        particleCount: 10,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 9999,
      });
      confetti({
        particleCount: 10,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 9999,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();

    // Smoothly fade out the music after 7 seconds (letting the visuals settle first)
    setTimeout(() => {
      const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume = Math.max(0, audio.volume - 0.05);
        } else {
          audio.pause();
          clearInterval(fadeInterval);
        }
      }, 100); // Fades out over ~2 seconds
    }, 7000);
  };

  return (
    <div className="relative min-h-screen bg-bg">
      <AnimatePresence>
        {!isInaugurated && (
          <motion.div 
            key="curtain"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleInauguration} 
              className="px-12 py-8 rounded-none border border-white/20 bg-black text-white text-3xl md:text-5xl tracking-[0.2em] uppercase font-light hover:bg-white hover:text-black transition-colors duration-700 flex flex-col items-center gap-6 group shadow-[0_0_50px_rgba(255,255,255,0.1)] hover:shadow-[0_0_100px_rgba(255,255,255,0.5)]"
            >
              <span>Commence</span>
              <span className="text-sm md:text-base tracking-[0.5em] text-gray-400 group-hover:text-gray-800 transition-colors duration-700">
                Sci-Technovation '26
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {isInaugurated && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
        >
          <Navbar />
          <Hero />
          <Highlights />
          <EventDirectory />
          <Schedule />
          <Venue />
          <Gallery />
          <Footer />
          <Chatbot />
        </motion.div>
      )}
    </div>
  );
}
