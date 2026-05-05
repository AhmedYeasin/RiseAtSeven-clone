import React from 'react';

const SERVICES = [
  'Digital PR',
  'Organic Social & Content',
  'Search & Growth Strategy',
  'Content Experience',
  'Data & Insights',
  'Onsite SEO'
];

export default function OurServices() {
  return (
    <section className="bg-[#f0eeeb] px-6 py-20 md:py-[100px] border-t border-black/5">
      <div className="max-w-[1300px] mx-auto">
        <h2 className="font-display font-extrabold text-[clamp(40px,6vw,90px)] text-[#111] tracking-[-0.03em] leading-[1] mb-12 flex flex-col">
          <span>Our</span>
          <span>Services</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, i) => (
            <div key={i} className="group border border-black/10 rounded-2xl p-8 hover:bg-[#111] hover:text-white transition-all duration-300 cursor-pointer flex flex-col justify-between aspect-square">
              <h3 className="font-display text-2xl font-bold leading-[1.2]">{service}</h3>
              <div className="w-10 h-10 rounded-full border border-current flex items-center justify-center self-end opacity-0 group-hover:opacity-100 transition-opacity">
                ↗
              </div>
            </div>
          ))}
        </div>
        
        <a href="#" className="inline-flex items-center gap-2 font-body text-sm font-semibold text-[#111] border-2 border-[#111] rounded-full px-6 py-3 hover:bg-[#111] hover:text-white transition-colors">
          View All Services <span>↗</span>
        </a>
      </div>
      
    </section>
  );
}
