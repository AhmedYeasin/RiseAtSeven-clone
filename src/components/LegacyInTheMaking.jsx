import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CARDS = [
  {
    title: 'Pioneers',
    body: 'We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.',
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=1b25c2ec17da17a255ad08a470c7539d',
    theme: 'black',
  },
  {
    title: 'Award Winning',
    body: "A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=54a93df74e28afe7f04eec5b323cecf3',
    theme: 'mint',
  },
  {
    title: 'Speed',
    body: "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    img: 'https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c',
    theme: 'white',
  },
];

const themeStyles = {
  black: {
    card: 'bg-[#050505] text-white',
    badge: 'bg-white/10 text-white',
  },
  mint: {
    card: 'bg-[#d0f5de] text-[#111]',
    badge: 'bg-[#111] text-white',
  },
  white: {
    card: 'bg-white text-[#111] border border-black/5',
    badge: 'bg-[#111] text-white',
  },
};

export default function LegacyInTheMaking() {
  const sectionRef = useRef(null);
  const stickyRef = useRef(null);
  const innerRef = useRef(null);

  useEffect(() => {
    const mm = gsap.matchMedia();

    mm.add('(min-width: 768px)', () => {
      if (!sectionRef.current || !innerRef.current) return;

      const totalScroll = window.innerHeight * (CARDS.length + 0.5);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${totalScroll}`,
          scrub: 1,
          pin: stickyRef.current,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.to(innerRef.current, {
        y: () => -(window.innerHeight * (CARDS.length - 1)),
        ease: 'none',
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        tl.kill();
      };
    });

    return () => mm.revert();
  }, []);

  return (
    <section className="bg-[#f0eeeb] px-4 sm:px-6 md:px-6 py-6 sm:py-20 md:py-24 border-t border-black/5" ref={sectionRef}>
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-display font-extrabold text-[clamp(36px,6vw,90px)] text-[#111] tracking-[-0.03em] leading-[1] mb-8 sm:mb-12">
          Legacy In The Making
        </h2>
      </div>

      <div className="md:hidden space-y-6">
        {CARDS.map((card, idx) => (
          <div key={idx} className={`rounded-[24px] overflow-hidden shadow-xl ${themeStyles[card.theme].card}`}>
            <div className="relative overflow-hidden">
              <img src={card.img} alt={card.title} className="w-full h-72 object-cover" />
            </div>
            <div className="p-6">
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] ${themeStyles[card.theme].badge}`}>
                {card.title}
              </span>
              <p className="mt-4 text-sm leading-7 text-[#111] md:text-base">
                {card.body}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="hidden md:block">
        <div className="relative h-[300vh]">
          <div ref={stickyRef} className="sticky top-0 h-screen overflow-hidden">
            <div ref={innerRef} className="h-full">
              {CARDS.map((card, idx) => (
                <div key={idx} className={`h-screen flex items-center justify-center px-4 md:px-8`}>
                  <div className={`w-full max-w-[1200px] rounded-[32px] overflow-hidden shadow-[0_35px_120px_rgba(0,0,0,0.12)] ${themeStyles[card.theme].card}`}>
                    <div className="grid grid-cols-1 lg:grid-cols-[420px_minmax(0,1fr)] gap-8 p-8 lg:p-12 items-center">
                      <div className="rounded-3xl overflow-hidden bg-slate-900">
                        <img src={card.img} alt={card.title} className="w-full h-full object-cover min-h-[420px]" />
                      </div>
                      <div className="flex flex-col justify-center gap-6">
                        <span className={`inline-flex items-center rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.32em] ${themeStyles[card.theme].badge}`}>
                          {card.title}
                        </span>
                        <div>
                          <h3 className="font-display text-[clamp(40px,5vw,72px)] font-semibold leading-[0.95] ${card.theme === 'white' ? 'text-[#111]' : 'text-white'}">
                            {card.title}
                          </h3>
                          <p className={`mt-6 text-[18px] leading-[1.8] ${card.theme === 'white' ? 'text-[#111]/100' : 'text-white/90'}`}>
                            {card.body}
                          </p>
                        </div>
                      </div>
                    </div>
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
