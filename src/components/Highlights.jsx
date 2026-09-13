import React from 'react';
import { motion } from 'framer-motion';

const STATS = [
  { value: '25+', label: 'Events across Technical, AI & Fun Zones' },
  { value: '10+', label: 'Participating Engineering Departments' },
  { value: 'Prizes', label: 'Cash Prizes & Trophy Rewards' },
];

export default function Highlights() {
  return (
    <section id="highlights" className="py-20 px-6 max-w-7xl mx-auto border-t border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.value}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col"
          >
            <p className="text-5xl md:text-6xl font-black text-black tracking-tighter mb-4">
              {stat.value}
            </p>
            <div className="w-12 h-1 bg-black mb-4"></div>
            <p className="text-gray-500 font-medium leading-relaxed max-w-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
