import React from 'react';

export default function Manifesto() {
  return (
    <section className="bg-[#f0eeeb] text-white px-4 sm:px-6 md:px-6 py-12 sm:py-20 md:py-[120px]">
      <div className="max-w-[1300px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-12">
        <div className="flex flex-col gap-4 sm:gap-6 bg-[#111] p-5 sm:p-6 md:p-6 rounded-[20px] md:rounded-[24px]">
          <h3 className="text-[clamp(28px,4vw,48px)] font-bold tracking-tight">Pioneers</h3>
          <p className="font-body text-white/70 text-[clamp(14px,2vw,20px)] leading-[1.6]">
            We're dedicated to creating the industry narrative that others follow. We pioneered creative SEO and multi-channel search.<br/><br/>
            On a mission to be the first search-first agency to win a Cannes Lion.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 bg-[#111] p-6 rounded-[24px]">
          <h3 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight">Award Winning</h3>
          <p className="font-body text-white/70 text-[clamp(16px,2vw,20px)] leading-[1.6]">
            A roll top bath full of 79 awards. Voted The Drum's best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.
          </p>
        </div>
        
        <div className="flex flex-col gap-6 bg-[#111] p-6 rounded-[24px]">
          <h3 className="font-display text-[clamp(32px,4vw,48px)] font-bold tracking-tight">Speed</h3>
          <p className="font-body text-white/70 text-[clamp(16px,2vw,20px)] leading-[1.6]">
            People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.
          </p>
        </div>
      </div>
      
      <div className="mt-24 md:mt-40 overflow-hidden relative text-gray-900">
        <div className="flex w-max animate-marquee" style={{ animationDuration: '40s' }}>
          {[1, 2].map(group => (
            <div key={group} className="flex items-center px-4 font-display font-extrabold text-[clamp(60px,12vw,180px)] leading-[1] tracking-[-0.03em] whitespace-nowrap opacity-30">
              <span className="" style={{ WebkitTextStroke: 'rgba(14, 14, 14, 0.99)' }}>Chasing Consumers</span>
              <span className="text-[#5affc8] mx-8">&bull;</span>
              <span className="text-transparent" style={{ WebkitTextStroke: 'rgb(15, 15, 15)' }}>Not Algorithms</span>
              <span className="text-[#5affc8] mx-8">&bull;</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
