import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Manifesto() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);
  const panelsRef = useRef(null);
  const cardRefs = useRef([]);

  const addToRefs = (el) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = cardRefs.current;

      // 1. Initial Stack Setup (Ektir niche ekti chapa pore thaka look)
      gsap.set(cards, {
        y: (i) => i * 60, // Prottek card ke 60px niche kore rakhbo
        scale: (i) => 1 - i * 0.01,
        zIndex: (i) => cards.length - i,
      });

      // 2. Main Timeline - Stacking Cards + Pinning
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 15}%`, 
          scrub: 1,
          pin: true,
          pinSpacing: true,
          invalidateOnRefresh: true,
        }
      });

      // Sequential Card Slide Animation
      cards.forEach((card, index) => {
        if (index < cards.length - 1) {
          tl.to(card, {
            y: -700,      
            opacity: 0,    
            duration: 2,   
          }, index); // Ekti shesh hole arekti shuru hobe
        }
      });

      // 3. Marquee Scroll Animation (X-axis movement)
      // Eti alada vabe thakbe jate marquee section screen e ashar por move kore
      gsap.to(panelsRef.current, {
        xPercent: 50,
        ease: "none",
        scrollTrigger: {
          trigger: panelsRef.current,
          start: "top bottom", // Screen er nich theke ashar shomoy shuru hobe
          end: "bottom top",    // Upore chole gele shesh hobe
          scrub: 1,
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#f0eeeb] relative overflow-hidden">
      
      {/* Cards Section */}
      <div ref={containerRef} className="max-w-[600px] mx-auto px-4 sm:px-6 relative h-[70vh] sm:h-screen">
      <h1 className='text-3xl font-semibold text-center'>Legacy in the Making</h1>
        <div className="relative w-full h-150 flex items-center justify-center">
          
          {/* Card 1 */}
          <div ref={addToRefs} className="absolute w-full max-w-4xl">
            <div className="bg-[#111] p-8 sm:p-12 rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h3 className="text-[clamp(32px,5vw,64px)] font-bold tracking-tight text-[#5affc8] mb-6">Pioneers</h3>
              <p className="font-body text-white/70 text-[clamp(18px,2.5vw,24px)] leading-[1.5] max-w-3xl">
                We're dedicated to creating the industry narrative that others follow. We pioneered creative SEO and multi-channel search.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={addToRefs} className="absolute w-full max-w-4xl">
            <div className="bg-[#111] p-8 sm:p-12 rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h3 className="font-display text-[clamp(32px,5vw,42px)] font-bold tracking-tight text-[#5affc8] mb-4">Award Winning</h3>
              <p className="font-body text-white/70 text-[clamp(18px,2.5vw,24px)] leading-[1.5] max-w-3xl">
                A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={addToRefs} className="absolute w-full max-w-4xl">
            <div className="bg-[#111] p-8 sm:p-12 rounded-[32px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <h3 className="font-display text-[clamp(32px,5vw,64px)] font-bold tracking-tight text-[#5affc8] mb-8">Speed</h3>
              <p className="font-body text-white/70 text-[clamp(18px,2.5vw,24px)] leading-[1.5] max-w-3xl">
                People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Marquee Section */}
      <div className="py-32 overflow-hidden relative text-gray-900 bg-[#f0eeeb]">
        <div ref={panelsRef} className="panels flex animate-marquee w-max whitespace-nowrap">
          {[1, 2].map(group => (
            <div key={group} className="flex items-center px-4 font-display font-extrabold text-[clamp(60px,12vw,180px)] leading-[1] tracking-[-0.03em] opacity-40">
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