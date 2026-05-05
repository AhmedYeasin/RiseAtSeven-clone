import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AnnouncementBar() {
  const [show, setShow] = useState(true);
  
  return (
    <AnimatePresence>
      {show && (
        <motion.div 
          initial={{ height: 40, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="bg-[#c8f5e8] flex items-center justify-center text-[13px] font-medium text-[#111] px-12 relative z-[200] overflow-hidden"
        >
          <span>🚀 Where are your customers actually searching? Download the report</span>
          <button onClick={() => setShow(false)} className="absolute right-4 text-sm px-2 text-gray-700">✕</button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
