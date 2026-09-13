import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, ExternalLink } from 'lucide-react';

const BOT_URL = "https://console.dialogflow.com/api-client/demo/embedded/670e495b-a931-418e-ba66-3facfb0847ca";

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
              <span className="text-sm font-bold tracking-wide flex items-center gap-2">
                Sci-Tech Assistant
              </span>
              <div className="flex items-center gap-2">
                <a 
                  href={BOT_URL} 
                  target="_blank" 
                  rel="noreferrer"
                  title="Open chat in full screen"
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <ExternalLink size={14} />
                </a>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-gray-400 hover:text-white transition-colors p-1"
                >
                  <X size={16} />
                </button>
              </div>
            </div>
            
            <div className="flex-1 w-full bg-white relative">
              {/* Note to users inside the iframe box in case it gets blocked */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center text-gray-500 z-0">
                <p className="text-sm mb-4">If the chat fails to load on your mobile browser, click the icon above to open it directly.</p>
              </div>
              
              <iframe
                className="absolute inset-0 w-full h-full z-10 bg-white"
                allow="microphone;"
                src={BOT_URL}
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
