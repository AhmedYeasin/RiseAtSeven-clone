import React from 'react';
import Marquee from 'react-fast-marquee';

export default function ClientsMarquee() {
  return (
    <section className="bg-[#f0eeeb] py-4 sm:py-5 md:py-7 overflow-hidden border-b border-black/5">
      <div className="flex w-max items-center">
        <span className="font-body text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[#666] overflow-hidden shrink-0 px-4 sm:px-6 md:px-8 whitespace-nowrap">The agency behind</span>
        {[1, 2].map((group) => (
          <div key={group} className="flex animate-marquee items-center gap-8 sm:gap-10 md:gap-14 px-8 sm:px-10 md:px-14 whitespace-nowrap">
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight text-center leading-[1.2]">Revolution<br /><small className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest font-medium">BEAUTY</small></div>
            <div className="font-display text-[16px] sm:text-[18px] md:text-[20px] font-bold text-[#222] tracking-tight">PlayStation</div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight">AXA</div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight">Emirates</div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight">Shark<span className="font-light">|</span>NINJA</div>
            <div className="font-display text-[14px] sm:text-[16px] md:text-[18px] font-bold text-[#222] tracking-widest">SIXT</div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight">Dojo</div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight">JD Sports</div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight text-center leading-[1.2]">Parkdean<br /><small className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest font-medium">Resorts</small></div>
            <div className="font-display text-[12px] sm:text-[13px] md:text-[15px] font-bold text-[#222] tracking-tight">Magnet</div>
          </div>
        ))}
      </div>

    
    </section>
  );
}
