import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, CalendarDays, MapPin, Building2, Coins, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

const INFO_CARDS = [
  { label: 'Date', value: '17th & 18th Sept 2026' },
  { label: 'Venue', value: 'UPL University Campus, Ankleshwar' },
  { label: 'Organiser', value: 'Dept of CE, IT, CO & IT' },
  { label: 'Registration', value: '₹50 / event' },
];

export default function Hero() {
  const [isInaugurated, setIsInaugurated] = React.useState(false);

  const handleInauguration = () => {
    setIsInaugurated(true);
    
    const end = Date.now() + 5 * 1000;
    const colors = ['#000000', '#ffffff', '#fb4f43', '#3b82f6', '#14b8a6'];

    (function frame() {
      confetti({
        particleCount: 8,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
        zIndex: 200,
      });
      confetti({
        particleCount: 8,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
        zIndex: 200,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-[90vh] flex flex-col justify-center items-center text-center">
      
      <div className="mb-12 w-full max-w-4xl mx-auto flex justify-center min-h-[200px] md:min-h-[350px] items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 40, filter: "blur(15px)" }}
          animate={
            isInaugurated
              ? { opacity: 1, scale: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, scale: 0.8, y: 40, filter: "blur(15px)" }
          }
          transition={{ duration: 1.2, ease: "easeOut", type: "spring", bounce: 0.3 }}
          className="w-full flex justify-center"
        >
          <img 
            src="/official-logo.png" 
            alt="Sci-Technovation '26 Official Logo" 
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-xl overflow-hidden mb-12"
      >
        {INFO_CARDS.map((card) => (
          <div key={card.label} className="bg-white p-6 flex flex-col justify-center">
            <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2 block">
              {card.label}
            </span>
            <span className="text-sm font-bold text-black">
              {card.value}
            </span>
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-wrap justify-center gap-4 w-full"
      >
        {!isInaugurated && (
          <button 
            onClick={handleInauguration} 
            className="clean-btn px-8 py-4 rounded-lg flex items-center gap-3 bg-black text-white hover:scale-105 transition-transform"
          >
            <Sparkles size={18} />
            Inaugurate Fest '26
          </button>
        )}
        {isInaugurated && (
          <a href="#events" className="clean-btn px-8 py-4 rounded-lg flex items-center gap-3 bg-black text-white">
            Explore Events
            <ArrowRight size={16} />
          </a>
        )}
        <a href="#schedule" className="clean-btn-outline px-8 py-4 rounded-lg">
          Timeline
        </a>
      </motion.div>

    </section>
  );
}
