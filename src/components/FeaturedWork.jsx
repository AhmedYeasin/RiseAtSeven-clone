import React, { useState, useEffect, useRef } from 'react';

const WORK_ITEMS = [
  { name: 'SIXT', year: '[2023-2025]', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', tag: '🔍 Car rental ↗', title: 'SIXT', result: 'An extra 3m clicks regionally through SEO', darkText: false },
  { name: 'Dojo – B2B', year: '[2021-2025]', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', tag: '🔍 Card Machine ↗', title: 'Dojo - B2B', result: 'A B2B success story for Dojo card machines', darkText: false },
  { name: 'Magnet Trade - B2B', year: '[2023-2024]', img: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?w=800&q=80', tag: '🔍 Kitchen Showroom', title: 'Magnet Trade - B2B', result: 'A full service SEO success story 170%+ increase', darkText: false },
  { name: 'Leading E Sim\nbrand globally', year: '[2023-2025]', img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?w=800&q=80', tag: '🔍 Esims ↗', title: 'Leading E Sim brand globally', result: 'Increasing brand and non brand visibility UK/ES', darkText: false },
  { name: 'JD Sports', year: '[2025]', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80', tag: '🔍 Trainers', title: 'JD Sports', result: '65% up YoY in clicks for JDSports FR, IT, ES', darkText: false },
  { name: 'Parkdean Resorts', year: '[2019-2025]', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80', tag: '🔍 Easter Breaks', title: 'Parkdean Resorts', result: 'Dominating Google and AI search', darkText: false },
  { name: 'Pooky', year: '[2025]', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?w=800&q=80', tag: '🔍 Rechargeable Lights', title: 'Pooky', result: 'Driving demand for Pooky Rechargeable Lights', darkText: false },
  { name: 'Revolution Beauty', year: '[2022-2025]', img: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=800&q=80', tag: '🔍 Beauty Dupes', title: 'Revolution Beauty', result: 'Building the UK\'s leading beauty dupe brand', darkText: false }
];

export default function FeaturedWork({ workContainerRef }) {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);

  useEffect(() => {
    const handleWorkScroll = () => {
      if (!workContainerRef.current) return;
      const rect = workContainerRef.current.getBoundingClientRect();
      const navH = 72;
      const sectionTop = -rect.top + navH;
      const itemHeight = 520;
      
      const rawIndex = Math.floor(sectionTop / itemHeight);
      const clampedIndex = Math.max(0, Math.min(WORK_ITEMS.length - 1, rawIndex));
      setActiveWorkIndex(clampedIndex);
    };
    window.addEventListener('scroll', handleWorkScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleWorkScroll);
  }, [workContainerRef]);

  return (
    <section className="bg-[#f0eeeb] px-4 md:px-6 pb-6">
      <div ref={workContainerRef} className="bg-[#111] rounded-[20px] md:rounded-[24px] overflow-hidden relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen lg:h-[100vh] lg:sticky lg:top-[72px] lg:max-h-[calc(100vh-72px)]">
          
          <div className="py-6 sm:py-10 md:py-12 px-4 sm:px-8 md:px-12 lg:pl-14 flex flex-col justify-center">
            <span className="font-body text-[11px] sm:text-[12px] font-semibold tracking-widest text-white/45 uppercase block mb-6 sm:mb-10">
              Featured Work
            </span>
            <ul className="flex flex-col">
              {WORK_ITEMS.map((work, idx) => {
                const isActive = idx === activeWorkIndex;
                const isPrev = idx < activeWorkIndex;
                return (
                  <li 
                    key={idx} 
                    onClick={() => setActiveWorkIndex(idx)}
                    className={`flex items-baseline gap-2 sm:gap-4 py-2 sm:py-3 md:py-4 cursor-pointer transition-all duration-500 border-b border-white/5 ${idx === 0 ? 'border-t' : ''} ${isActive ? 'opacity-100' : isPrev ? 'opacity-40' : 'opacity-20 hover:opacity-50'}`}
                  >
                    <span className={`font-display font-bold text-white tracking-tight leading-[1.1] transition-all duration-300 ${isActive ? 'text-[clamp(20px,4vw,50px)]' : 'text-[clamp(16px,3vw,40px)] whitespace-pre-line'}`}>
                      {work.name}
                    </span>
                    <span className="font-body text-[10px] sm:text-[12px] text-white/40 whitespace-nowrap">
                      {work.year}
                    </span>
                    <span className={`ml-auto w-6 sm:w-8 h-6 sm:h-8 rounded-full border border-white/15 flex items-center justify-center text-xs sm:text-sm shrink-0 transition-all duration-300 ${isActive ? 'opacity-100 bg-[#5affc8] border-[#5affc8] text-[#111]' : 'opacity-0 text-white/50'}`}>
                      ↗
                    </span>
                  </li>
                );
              })}
            </ul>
            <a href="#" className="inline-flex items-center gap-2 mt-6 sm:mt-8 font-body text-[12px] sm:text-[13px] font-semibold text-white/50 tracking-wide uppercase border border-white/15 rounded-full px-4 sm:px-5 py-2 sm:py-2.5 hover:text-white hover:border-white/50 transition-colors w-max">
              Explore Our Work ↗
            </a>
          </div>

          <div className="relative p-4 sm:p-6 lg:py-6 lg:pr-8 lg:pl-4 overflow-hidden hidden lg:block">
            {WORK_ITEMS.map((panel, idx) => (
              <div 
                key={idx}
                className={`absolute inset-y-6 right-8 left-4 flex flex-col gap-3 transition-all duration-500 pointer-events-none ${
                  idx === activeWorkIndex ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
              >
                <div className="flex-[1.5] rounded-2xl overflow-hidden relative flex items-end p-5 min-h-0">
                  <div className="absolute inset-0 bg-black/20 z-10"></div>
                  <img src={panel.img} alt={panel.title} className="absolute inset-0 w-full h-full object-cover" />
                  {panel.tag && (
                    <div className="absolute bottom-4 right-4 flex gap-2 bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-medium text-white z-20 shadow-lg">
                      {panel.tag}
                    </div>
                  )}
                  <div className="relative z-20 font-display text-[22px] font-bold text-white leading-[1.3] py-1 drop-shadow-md">
                    {panel.title}
                  </div>
                </div>
                <div className="flex-1 rounded-2xl overflow-hidden relative flex items-end p-6 min-h-0 bg-[#222]">
                  <div className={`relative z-20 font-display text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] tracking-tight text-white`}>
                    {panel.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
