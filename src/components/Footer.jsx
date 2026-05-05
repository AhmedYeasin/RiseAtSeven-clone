import React from 'react';

export default function Footer({ footerRef }) {
  return (
    <footer ref={footerRef} className="bg-[#0a0a0a] text-white pt-[72px] px-6 lg:px-14">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-20 pb-16 border-b border-white/10">
        <div>
          <h3 className="font-display text-4xl font-bold mb-5">Stay updated with Rise news</h3>
          <div className="flex items-center bg-white/5 border border-white/10 rounded-full p-1 pl-5 mb-6 max-w-[400px]">
            <input type="email" placeholder="Your Email Address" className="flex-1 bg-transparent border-none outline-none text-white font-body text-sm placeholder:text-white/30" />
            <button className="w-10 h-10 rounded-full bg-[#5affc8] text-[#111] text-lg font-bold flex items-center justify-center shrink-0 hover:bg-[#3de6ab] hover:scale-105 transition-all">↗</button>
          </div>
          <div className="flex gap-2.5 flex-wrap">
            {['f', '𝕏', 'in', '▶', '♪', '◎'].map(icon => (
              <a key={icon} href="#" className="inline-flex items-center gap-1 border border-white/20 rounded-full px-3 py-1.5 text-xs font-medium text-white/70 hover:border-white/60 hover:text-white transition-colors">
                {icon} <span className="text-[10px]">↗</span>
              </a>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-3.5">
            {['Services', 'Work', 'About', 'Culture', 'Meet The Risers'].map(item => (
              <a key={item} href="#" className="font-body text-base font-medium text-white/80 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5">
            {['Testimonials', 'Blog', 'Webinars', 'Careers'].map(item => (
              <a key={item} href="#" className="font-body text-base font-medium text-white/80 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <div className="flex flex-col gap-3.5 mt-4 md:mt-0 col-span-2 md:col-span-1">
            {['Sheffield', 'Manchester', 'London', 'New York', 'Contact'].map(item => (
              <a key={item} href="#" className="font-body text-base font-medium text-white/80 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
        </div>
      </div>

      <div className="font-display font-extrabold text-[clamp(40px,12vw,160px)] text-white tracking-[-0.04em] leading-[1] pt-12 pb-6 flex items-start gap-2">
        <span>Rise at Seven</span>
        <span className="text-[0.35em] font-normal mt-[0.15em] border-[2px] border-white/60 rounded-full w-[1.6em] h-[1.6em] flex items-center justify-center shrink-0">®</span>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-5 md:py-7 border-t border-white/10 gap-4">
        <p className="font-body text-[12px] text-white/40">
          © 2025 Rise at Seven Ltd. All rights reserved &nbsp;•&nbsp; Company Number 11955187 &nbsp;•&nbsp; VAT Registered GB 322402945 &nbsp;•&nbsp; <a href="#" className="border-b border-white/15 hover:text-white/80 transition-colors">Terms &amp; conditions</a>
        </p>
        <p className="font-body text-[12px] text-white/40">
          Website <a href="#" className="border-b border-white/15 hover:text-white/80 transition-colors">MadeByShape</a>
        </p>
      </div>
    </footer>
  );
}
