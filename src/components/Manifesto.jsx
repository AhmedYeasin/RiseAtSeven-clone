import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef(null);
  const panelsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Marquee Animation
      gsap.to(panelsRef.current, {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: panelsRef.current,
          start: "top bottom", 
          end: "bottom top",
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
  
    <section ref={sectionRef} className="bg-[#f0eeeb] text-white relative">
      
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6">
        
        {/* Card 1 - z-index: 10 */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-[10]">
          <div className="w-full bg-[#111] p-8 sm:p-12 rounded-[32px] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="text-[clamp(32px,5vw,64px)] font-bold tracking-tight text-[#5affc8] mb-6">Pioneers</h3>
            <p className="font-body text-white/70 text-[clamp(18px,2.5vw,24px)] leading-[1.5] max-w-3xl">
              We're dedicated to creating the industry narrative that others follow. We pioneered creative SEO and multi-channel search.
            </p>
          </div>
        </div>

        {/* Card 2 - z-index: 20 */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-[20]">
          <div className="w-full bg-[#111] p-8 sm:p-12 rounded-[32px] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="font-display text-[clamp(32px,5vw,64px)] font-bold tracking-tight text-[#5affc8] mb-6">Award Winning</h3>
            <p className="font-body text-white/70 text-[clamp(18px,2.5vw,24px)] leading-[1.5] max-w-3xl">
              A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards.
            </p>
          </div>
        </div>

        {/* Card 3 - z-index: 30 */}
        <div className="sticky top-0 h-screen flex items-center justify-center z-[30]">
          <div className="w-full bg-[#111] p-8 sm:p-12 rounded-[32px] border border-white/10 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
            <h3 className="font-display text-[clamp(32px,5vw,64px)] font-bold tracking-tight text-[#5affc8] mb-6">Speed</h3>
            <p className="font-body text-white/70 text-[clamp(18px,2.5vw,24px)] leading-[1.5] max-w-3xl">
              People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast.
            </p>
          </div>
        </div>

      </div>

      {/* Marquee Section */}
      <div className="py-32 overflow-hidden relative text-gray-900 bg-[#f0eeeb] z-[40]">
        <div ref={panelsRef} className="panels flex w-max whitespace-nowrap">
          {[1, 2].map(group => (
            <div key={group} className="flex items-center px-4 font-display animate-marquee font-extrabold text-[clamp(60px,12vw,180px)] leading-[1] tracking-[-0.03em] opacity-40">
              <span style={{ WebkitTextStroke: '1px rgba(14, 14, 14, 0.99)' }}>Chasing Consumers</span>
              <span className="text-[#5affc8] mx-8">&bull;</span>
              <span style={{ WebkitTextStroke: '1px rgb(15, 15, 15)' }}>Not Algorithms</span>
              <span className="text-[#5affc8] mx-8">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}