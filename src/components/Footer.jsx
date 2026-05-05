import React from 'react';

export default function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] rounded-[16px] md:rounded-2xl text-white pt-12 sm:pt-[72px] px-4 sm:px-6 md:px-14">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 sm:gap-12 md:gap-20 pb-8 sm:pb-16 border-b border-white/10">
        <div>
          <h3 className="font-display text-2xl sm:text-4xl font-bold mb-4 sm:mb-5">Stay updated</h3>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 pl-4 sm:pl-5 mb-4 sm:mb-6 max-w-[400px]">
            <input type="email" placeholder="Your Email" className="flex-1 bg-transparent border-none outline-none text-white font-body text-sm sm:text-xl placeholder:text-white/30" />
            <button className="w-12 sm:w-15 h-12 sm:h-15 rounded-full bg-[#5affc8] text-[#111] text-lg font-bold flex items-center justify-center hover:bg-white hover:scale-105 transition-all">↗</button>
          </div>
          <div className="flex gap-2 flex-wrap">
            {['f', '𝕏', 'in', '▶', '♪', '◎'].map(icon => (
              <a key={icon} href="#" className="inline-flex items-center gap-1 border border-white/20 rounded-full hover:rounded px-3 py-1.5 text-xs font-bold bg-white text-black hover:border-white/60 transition-colors">
                {icon} <span className="text-[10px]">↗</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          <div className="flex flex-col gap-2 sm:gap-3.5">
            {['Services', 'Work', 'About', 'Culture', 'Meet The Team'].map(item => (
              <a key={item} href="#" className="font-body text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:gap-3.5">
            {['Testimonials', 'Blog', 'Webinars', 'Careers'].map(item => (
              <a key={item} href="#" className="font-body text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-2 sm:gap-3.5 col-span-2 sm:col-span-1">
            {['Sheffield', 'Manchester', 'London', 'New York', 'Contact'].map(item => (
              <a key={item} href="#" className="font-body text-sm sm:text-base font-medium text-white/80 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="font-extrabold text-[clamp(32px,20vw,180px)] text-white leading-[1] pt-8 sm:pt-12 pb-4 sm:pb-6 flex items-start gap-2 ">
        <span>Rise at Seven</span>
        <span className="text-[0.35em] font-normal mt-[0.15em] border-[2px] border-white/60 rounded-full w-[1.6em] h-[1.6em] flex items-center justify-center shrink-0">®</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-3 sm:py-5 md:py-7 border-t border-white/10 gap-3 sm:gap-4 text-[11px] sm:text-[12px]">
        <p className="text-white/40">
          © 2025 Rise at Seven Ltd. All rights reserved &nbsp;•&nbsp; <a href="#" className="hover:border-b hover:border-white text-white transition-colors">Terms &amp; conditions</a>
        </p>
        <p className="text-white/40">
          Website <a href="#" className="hover:border-b hover:border-white text-white transition-colors">MadeByShape</a>
        </p>
      </div>
    </footer>
  );
}
