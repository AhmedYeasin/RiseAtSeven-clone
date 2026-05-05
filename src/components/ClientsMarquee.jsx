import React from 'react';

export default function ClientsMarquee() {
  return (
    <section className="bg-[#f0eeeb] py-7 overflow-hidden border-b border-black/5">
      <div className="flex w-max animate-marquee">
        {[1, 2].map((group) => (
          <div key={group} className="flex items-center gap-14 px-14 whitespace-nowrap">
            <span className="font-body text-[13px] font-medium text-[#666] shrink-0">The agency behind</span>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight text-center leading-[1.2]">Revolution<br/><small className="text-[10px] tracking-widest font-medium">BEAUTY LONDON</small></div>
            <div className="font-display text-[20px] font-bold text-[#222] tracking-tight">PlayStation</div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight">AXA</div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight">Emirates</div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight">Shark<span className="font-light">|</span>NINJA</div>
            <div className="font-display text-[18px] font-bold text-[#222] tracking-widest">SIXT</div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight">Dojo</div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight">JD Sports</div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight text-center leading-[1.2]">Parkdean<br/><small className="text-[10px] tracking-widest font-medium">Resorts</small></div>
            <div className="font-display text-[15px] font-bold text-[#222] tracking-tight">Magnet</div>
          </div>
        ))}
      </div>
    </section>
  );
}
