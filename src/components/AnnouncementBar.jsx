import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ height: 48, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="bg-[#c8f5e8] flex items-center justify-center text-[13px] md:text-[14px] font-medium text-[#111] px-4 md:px-12 relative z-[200] overflow-hidden"
        >
          <span className="text-center">🚨 The Category Leaderboard - Live Now 🚨 <span className="hidden sm:inline">The Category Leaderboard - Live Now</span></span>
          <button onClick={() => setShow(false)} className="absolute right-4 text-sm px-2 text-gray-700 hover:text-gray-900 transition-colors">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
