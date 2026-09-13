import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-white border border-gray-200 shadow-2xl overflow-hidden rounded-t-xl rounded-bl-xl flex flex-col"
            style={{ 
              width: 'calc(100vw - 3rem)', 
              maxWidth: '400px', 
              height: 'calc(100vh - 8rem)', 
              maxHeight: '600px' 
            }}
          >
            <div className="bg-black text-white px-4 py-3 flex justify-between items-center shrink-0">
              <span className="text-sm font-bold tracking-wide">Sci-Tech Assistant</span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-white transition-colors p-1"
              >
                <X size={16} />
              </button>
            </div>
            <div className="flex-1 w-full bg-white relative">
              <iframe
                className="absolute inset-0 w-full h-full"
                allow="microphone;"
                src="https://bot.dialogflow.com/670e495b-a931-418e-ba66-3facfb0847ca"
                style={{ border: 'none' }}
                title="Dialogflow Chatbot"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-lg border border-gray-800"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

    </div>
  );
}
