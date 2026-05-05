import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="bg-[#f0eeeb] px-4 sm:px-6 md:px-6 py-12 sm:py-20 md:py-[100px]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10 md:gap-20 items-center"
      >
        <div>
          <p className="font-display text-[clamp(18px,2.2vw,26px)] font-semibold text-[#111] leading-[1.4] tracking-tight">
            A global team of search-first content marketers engineering semantic relevancy &amp; category signals for both the internet and people
          </p>
        </div>
        <div>
          <h2 className="font-display font-extrabold text-[clamp(32px,5vw,70px)] text-[#111] tracking-[-0.03em] leading-[1.05] mb-6 sm:mb-8 flex items-center flex-wrap gap-2 sm:gap-3">
            Driving Demand &amp;<br />Discovery
            <span className="inline-flex w-[clamp(36px,5vw,70px)] h-[clamp(36px,5vw,70px)] rounded-[10px] overflow-hidden shrink-0">
              <img src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop&auto=format" alt="team" className="w-full h-full object-cover" />
            </span>
          </h2>
          <div className="flex items-center gap-2 sm:gap-4 flex-wrap">
            <a href="#" className="font-body text-base sm:text-xl font-semibold rounded-full hover:rounded-xl p-3 sm:p-4 bg-white flex items-center gap-1.5 transition-all hover:bg-gray-100">
              Our Story <span>↗</span>
            </a>
            <a href="#" className="font-body text-base sm:text-xl font-semibold text-[#111] flex items-center gap-1.5 px-1 py-3 border-b border-transparent hover:border-[#111] transition-colors">
              View Case Study <span>↗</span>
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
