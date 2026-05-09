import React, { useState, useEffect, useRef } from 'react';

const WORK_ITEMS = [
  { name: 'SIXT', year: '[2023-2025]', img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80', tag: '🔍 Car rental ↗', title: 'SIXT', result: 'An extra 3m clicks regionally through SEO' },
  { name: 'Dojo – B2B', year: '[2021-2025]', img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80', tag: '🔍 Card Machine ↗', title: 'Dojo - B2B', result: 'A B2B success story for Dojo card machines' },
  { name: 'Magnet Trade - B2B', year: '[2023-2024]', img: 'https://images.unsplash.com/photo-1556910103-1c02745a872e?w=800&q=80', tag: '🔍 Kitchen Showroom', title: 'Magnet Trade - B2B', result: 'A full service SEO success story 170%+ increase' },
  { name: 'Leading E Sim\nbrand globally', year: '[2023-2025]', img: 'https://images.unsplash.com/photo-1525598912003-663126343e1f?w=800&q=80', tag: '🔍 Esims ↗', title: 'Leading E Sim brand globally', result: 'Increasing brand and non brand visibility UK/ES' },
  { name: 'JD Sports', year: '[2025]', img: 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=800&q=80', tag: '🔍 Trainers', title: 'JD Sports', result: '65% up YoY in clicks for JDSports FR, IT, ES' },
  { name: 'Parkdean Resorts', year: '[2019-2025]', img: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=800&q=80', tag: '🔍 Easter Breaks', title: 'Parkdean Resorts', result: 'Dominating Google and AI search' },
  { name: 'Pooky', year: '[2025]', img: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?w=800&q=80', tag: '🔍 Rechargeable Lights', title: 'Pooky', result: 'Driving demand for Pooky Rechargeable Lights' },
  { name: 'Revolution Beauty', year: '[2022-2025]', img: 'https://images.unsplash.com/photo-1596462502278-27bf85033e5a?w=800&q=80', tag: '🔍 Beauty Dupes', title: 'Revolution Beauty', result: 'Building the UK\'s leading beauty dupe brand' }
];

export default function FeaturedWork() {
  const [activeWorkIndex, setActiveWorkIndex] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-40% 0px -40% 0px', // Center e asle trigger hobe
      threshold: 0.1,
    };

    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = parseInt(entry.target.getAttribute('data-index'));
          setActiveWorkIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (index) => {
    setActiveWorkIndex(index);
    itemsRef.current[index]?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };

  return (
    <section className="bg-[#f0eeeb] px-4 md:px-6 pb-6 relative">
      <div className="bg-[#111] rounded-[24px] overflow-hidden relative">
        
        {/* Top and Bottom Gradients */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#111] to-transparent z-30 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#111] to-transparent z-30 pointer-events-none"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2">
          
          {/* Left Side: List */}
          <div className="py-20 px-6 sm:px-12 lg:pl-14 flex flex-col z-20">
            <span className="font-body text-[12px] font-semibold tracking-widest text-white/45 uppercase block mb-6">
              Featured Work
            </span>
            
            <ul className="flex flex-col">
              {WORK_ITEMS.map((work, idx) => {
                const isActive = idx === activeWorkIndex;
                return (
                  <li 
                    key={idx} 
                    ref={el => itemsRef.current[idx] = el}
                    data-index={idx}
                    onClick={() => handleClick(idx)}
                    className={`flex flex-col lg:flex-row items-start lg:items-baseline gap-4 py-4 lg:py-6 border-b border-white/5 cursor-pointer transition-all duration-500 ${isActive ? 'opacity-100' : 'opacity-20 hover:opacity-40'}`}
                  >
                    {/* Mobile Card */}
                    <div className="w-full lg:hidden mb-4">
                       <div className="aspect-video rounded-xl overflow-hidden relative">
                          <img src={work.img} alt={work.title} className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                             <p className="text-white font-bold text-sm">{work.result}</p>
                          </div>
                       </div>
                    </div>

                    <div className="flex items-baseline gap-3 w-full">
                      <span className={`font-display font-bold text-white tracking-tight transition-all duration-500 ${isActive ? 'text-[clamp(28px,4vw,48px)]' : 'text-[clamp(20px,2.5vw,32px)]'}`}>
                        {work.name}
                      </span>
                      <span className="font-body text-[10px] text-white/30 uppercase">
                        {work.year}
                      </span>
                      <span className={`ml-auto w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-[#5affc8] border-[#5affc8] text-[#111] rotate-45' : 'opacity-0'}`}>
                        ↗
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Right Side: Sticky Media (Desktop Only) */}
          <div className="hidden lg:block relative h-screen sticky top-0 py-20 pr-12 pl-6 overflow-hidden">
            <div className="relative h-full w-full">
              {WORK_ITEMS.map((panel, idx) => (
                <div 
                  key={idx}
                  className={`absolute inset-0 flex flex-col gap-4 transition-all duration-700 ease-out ${
                    idx === activeWorkIndex ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
                  }`}
                >
                  <div className="flex-[1.8] rounded-2xl overflow-hidden relative shadow-2xl">
                    <img src={panel.img} alt={panel.title} className="absolute inset-0 w-full h-full object-cover" />
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-[10px] text-white uppercase tracking-wider">
                      {panel.tag}
                    </div>
                  </div>
                  
                  <div className="flex-1 rounded-2xl bg-[#1a1a1a] p-8 flex items-center border border-white/5">
                    <h3 className="font-display text-[28px] md:text-[34px] font-bold text-white leading-[1.1] tracking-tight">
                      {panel.result}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}