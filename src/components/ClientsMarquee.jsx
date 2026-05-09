import React from 'react';
import MarqueeComponent from 'react-fast-marquee';

// Vite/ESM compatibility check
const Marquee = MarqueeComponent.default || MarqueeComponent;

export default function ClientsMarquee() {
  const clients = [
    { name: "Revolution", sub: "BEAUTY" },
    { name: "PlayStation" },
    { name: "AXA" },
    { name: "Emirates" },
    { name: "Shark|NINJA" },
    { name: "SIXT" },
    { name: "Dojo" },
    { name: "JD Sports" },
    { name: "Parkdean", sub: "Resorts" },
    { name: "Magnet" },
  ];

  return (
    <section className="bg-[#f0eeeb] py-4 sm:py-5 md:py-7 overflow-hidden border-b border-black/5 flex items-center">
      <style>
        {`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
      {/* Fixed Title Section */}
      <div className="bg-[#f0eeeb] z-10 pl-4 sm:pl-6 md:pl-8 pr-4 border-r border-black/10 shrink-0">
        <span className="font-body text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[#666] whitespace-nowrap uppercase tracking-wider">
          The agency behind
        </span>
      </div>

      {/* Dynamic Marquee Section */}
      <Marquee 
        speed={50} 
        pauseOnHover={false}
        gradient={true}
        gradientColor="#f0eeeb"
        gradientWidth={50}
        className="relative w-full overflow-hidden no-scrollbar"
      >
        <div className="flex items-center gap-10 md:gap-16 pr-10 md:pr-16">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center cursor-pointer grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <div className="font-display font-bold text-[#222] text-[14px] sm:text-[16px] md:text-[18px] tracking-tight text-center leading-none">
                {client.name}
                {client.sub && (
                  <div className="mt-1">
                    <small className="text-[8px] sm:text-[9px] md:text-[10px] tracking-widest font-medium opacity-70 block uppercase">
                      {client.sub}
                    </small>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}