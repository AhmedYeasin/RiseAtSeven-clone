import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Hero() {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], [0, 250]);

  return (
    <section className="relative flex flex-col items-center justify-center bg-[#0a0a0a] overflow-hidden" style={{ minHeight: 'calc(100vh - 72px - 48px)' }}>
      {/* Exact Circle Reveal Animation from original site */}
      <svg className="absolute inset-0 w-full h-full z-50 pointer-events-none" preserveAspectRatio="none">
        <defs>
          <mask id="circle-reveal-mask">
            <rect width="100%" height="100%" fill="white" />
            <motion.ellipse 
              cx="50%" cy="100%" 
              initial={{ rx: 0, ry: 0 }} 
              animate={{ rx: "150vw", ry: "150vh" }} 
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }} 
              fill="black" 
            />
          </mask>
        </defs>
        <rect width="100%" height="100%" fill="#ffffff" mask="url(#circle-reveal-mask)" />
      </svg>

      <motion.div style={{ y: heroBgY, scale: 1.06 }} className="absolute inset-0 z-0 bg-[#050505]">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#1e4b40] mix-blend-screen filter blur-[100px] animate-blob"></div>
          <div className="absolute top-[20%] right-[-10%] w-[40vw] h-[40vw] rounded-full bg-[#0a2e38] mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-[-20%] left-[20%] w-[60vw] h-[60vw] rounded-full bg-[#3c2a4d] mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000"></div>
        </div>
        <div className="absolute inset-0 bg-black/60"></div>
      </motion.div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-10 flex flex-col items-center gap-3 sm:gap-5 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex flex-col items-center gap-2 mb-0 sm:mb-2"
        >
          <div className="font-body text-[8px] sm:text-[9px] md:text-[10px] font-semibold tracking-widest text-white/70 uppercase text-center leading-relaxed">
            #1 MOST RECOMMENDED<br/>CONTENT MARKETING AGENCY
          </div>
          <div className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-wrap justify-center border border-white/15 rounded-full px-3 sm:px-6 py-2 mt-1 sm:mt-2 text-[6px] sm:text-[8px] md:text-[9px]">
            <div className="flex items-center gap-1 font-semibold text-white/70 tracking-wider uppercase"><span className="text-[10px] sm:text-[12px] md:text-[14px]">⚡</span><span className="hidden sm:inline">GLOBAL SEARCH AWARDS</span><span className="sm:hidden">GSA</span></div>
            <div className="flex items-center gap-1 font-semibold text-white/70 tracking-wider uppercase hidden md:flex"><span className="text-[12px] md:text-[14px]">▲</span>The Drum</div>
            <div className="flex items-center gap-1 font-semibold text-white/70 tracking-wider uppercase hidden md:flex"><span className="text-[12px] md:text-[14px]">⊞</span>UK Social Awards</div>
            <div className="flex items-center gap-1 font-semibold text-white/70 tracking-wider uppercase hidden md:flex"><span className="text-[12px] md:text-[14px]">★</span>Content Awards</div>
          </div>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="font-display font-extrabold text-[clamp(36px,9vw,140px)] leading-[1] tracking-[-0.02em] text-white text-center"
        >
          We Create<br/>
          <span className="flex items-center justify-center gap-2 sm:gap-4 md:gap-5 flex-wrap mt-2">
            Category
            <span className="inline-flex w-[clamp(40px,7vw,100px)] h-[clamp(40px,7vw,100px)] rounded-[12px] md:rounded-[14px] overflow-hidden align-middle shrink-0">
              <img src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=120&h=120&fit=crop&auto=format" alt="category" className="w-full h-full object-cover" />
            </span>
            Leaders
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="font-body text-[clamp(14px,2.5vw,24px)] text-white/80 tracking-wide"
        >
          on every searchable platform
        </motion.p>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 z-10 px-4 sm:px-6 md:px-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-2 text-[10px] sm:text-[12px] md:text-[13px]"
      >
        <p className="text-white/65 leading-relaxed">
          Organic media planners creating, distributing &amp; optimising<br className="hidden md:block" />search-first content for SEO, Social, PR, AI and LLM search
        </p>
        <p className="text-white/65 leading-relaxed text-left md:text-right">
          4 Global Offices serving<br className="hidden md:block"/>UK, USA (New York) &amp; EU
        </p>
      </motion.div>
    </section>
  );
}
