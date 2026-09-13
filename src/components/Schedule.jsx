import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { events } from '../data/events';

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('day1');

  const filtered = events.filter((e) => e.day === activeDay || e.day === 'both');
  const sorted = [...filtered].sort((a, b) => {
    const toMin = (t) => {
      const [time, period] = t.split(' ');
      let [h, m] = time.split(':').map(Number);
      if (period === 'PM' && h !== 12) h += 12;
      if (period === 'AM' && h === 12) h = 0;
      return h * 60 + m;
    };
    return toMin(a.time) - toMin(b.time);
  });

  return (
    <section id="schedule" className="py-24 px-6 max-w-4xl mx-auto border-t border-gray-200">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
        <div>
          <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
            Schedule.
          </h2>
          <p className="text-gray-500 font-medium">Timeline of events and activities.</p>
        </div>
        
        <div className="flex bg-gray-100 p-1">
          <button
            onClick={() => setActiveDay('day1')}
            className={`px-6 py-2 text-sm font-bold transition-colors ${
              activeDay === 'day1' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
            }`}
          >
            17th Sept
          </button>
          <button
            onClick={() => setActiveDay('day2')}
            className={`px-6 py-2 text-sm font-bold transition-colors ${
              activeDay === 'day2' ? 'bg-white text-black shadow-sm' : 'text-gray-500 hover:text-black'
            }`}
          >
            18th Sept
          </button>
        </div>
      </div>

      <div className="border-l-2 border-black pl-8 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeDay}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            className="space-y-12"
          >
            {sorted.map((event) => (
              <div key={event.id} className="relative group">
                <div className="absolute -left-[39px] top-1.5 w-4 h-4 bg-white border-2 border-black group-hover:bg-black transition-colors" />
                
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-8 mb-2">
                  <span className="text-lg font-black text-black min-w-[100px]">
                    {event.time}
                  </span>
                  <h4 className="text-xl font-bold text-black">{event.title}</h4>
                </div>
                
                <div className="md:ml-[132px] flex gap-4 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <span>{event.venue}</span>
                  <span>•</span>
                  <span>{event.category}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
