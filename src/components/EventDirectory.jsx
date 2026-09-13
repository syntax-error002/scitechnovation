import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { events, DEPARTMENTS } from '../data/events';
import EventModal from './EventModal';

export default function EventDirectory() {
  const [activeFilter, setActiveFilter] = useState('All Events');
  const [modalEvent, setModalEvent] = useState(null);

  const filtered =
    activeFilter === 'All Events'
      ? events
      : events.filter((e) => e.category === activeFilter);

  return (
    <section id="events" className="py-24 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tight mb-4">
              Event Directory.
            </h2>
            <p className="text-gray-500 font-medium">Explore and register for 25+ events.</p>
          </div>
          
          <div className="flex flex-wrap gap-2 max-w-lg">
            {DEPARTMENTS.map((dept) => (
              <button
                key={dept}
                onClick={() => setActiveFilter(dept)}
                className={`px-4 py-2 text-xs font-bold transition-all border ${
                  activeFilter === dept
                    ? 'bg-black text-white border-black'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-black hover:text-black'
                }`}
              >
                {dept}
              </button>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 6) * 0.05 }}
              onClick={() => setModalEvent(event)}
              className="clean-card p-6 flex flex-col justify-between cursor-pointer group min-h-[280px]"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                    {event.category}
                  </span>
                  <span className="text-[10px] font-bold border border-gray-200 px-2 py-1 bg-gray-50 text-black">
                    {event.fee}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 leading-tight group-hover:underline decoration-2 underline-offset-4">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 line-clamp-2">
                  {event.desc}
                </p>
              </div>

              <div className="mt-8 flex justify-between items-end border-t border-gray-100 pt-4">
                <div className="flex gap-4 text-xs font-semibold text-gray-400">
                  <span>{event.date}</span>
                  <span>{event.team}</span>
                </div>
                <div className="w-8 h-8 flex items-center justify-center bg-gray-50 group-hover:bg-black group-hover:text-white transition-colors border border-gray-100">
                  <ArrowRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {modalEvent && (
        <EventModal event={modalEvent} onClose={() => setModalEvent(null)} />
      )}
    </section>
  );
}
