import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function EventModal({ event, onClose }) {
  if (!event) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl bg-white border border-gray-200 overflow-hidden z-10 flex flex-col max-h-[90vh]"
        >
          <div className="flex justify-between items-start p-6 md:p-8 border-b border-gray-200 bg-gray-50">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">
                {event.category}
              </p>
              <h3 className="text-3xl font-black text-black">{event.title}</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-white border border-gray-200 text-black hover:bg-gray-100 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          <div className="p-6 md:p-8 overflow-y-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { label: 'Fee', value: event.fee },
                { label: 'Team', value: event.team },
                { label: 'Date', value: event.date },
                { label: 'Venue', value: event.venue },
              ].map((item) => (
                <div key={item.label} className="border border-gray-200 p-4 bg-gray-50">
                  <span className="block text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-1">
                    {item.label}
                  </span>
                  <span className="block text-sm font-bold text-black">{item.value}</span>
                </div>
              ))}
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-black mb-3 pb-2 border-b border-gray-200">
                Secret...
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed font-medium">
                {event.desc}
              </p>
            </div>

            <div className="mb-8">
              <h4 className="text-sm font-bold text-black mb-3 pb-2 border-b border-gray-200">
                Why to play ?
              </h4>
              <div className="text-sm text-gray-600 leading-relaxed font-medium whitespace-pre-line">
                {event.details}
              </div>
            </div>

            <div className="bg-black text-white p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">
                  Coordinators
                </p>
                <p className="text-sm font-bold">{event.coordinators}</p>
              </div>
              <button className="bg-white text-black px-6 py-2 text-sm font-bold hover:bg-gray-200 transition-colors">
                Contact Coordinators
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
