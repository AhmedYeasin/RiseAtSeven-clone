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
    <section className="bg-[#f0eeeb] px-4 sm:px-6 md:px-6 py-6 sm:py-20 md:py-[100px] border-t border-black/5">
      <div className="max-w-[1300px] mx-auto">
        <section className="flex justify-between items-center gap-6 sm:gap-10 md:gap-14 mb-8 sm:mb-12">
          <h2 className="font-display font-extrabold text-[clamp(36px,6vw,90px)] text-[#111] tracking-[-0.03em] leading-[1] mb-4 sm:mb-12">
            Our Services

          </h2>

          <button href="#"
            class="cursor-pointer hidden sm:block group text-xl font-semibold text-[#111] bg-white hover:rounded-xl rounded-full px-5 sm:px-6 py-2.5 sm:py-3"
          >
            <div class="relative overflow-hidden">
              <p
                class="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                View All Services <span>↗</span>
              </p>
              <p
                class="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]"
              >
                View All Services <span>↗</span>
              </p>
            </div>
          </button>
        </section>

        <div className="grid lg:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {SERVICES.map((service, i) => (
            <div key={i} className="group lg:w-full lg:h-25 rounded-xl hover:rounded-full md:rounded-xl p-4 sm:p-8 cursor-pointer flex bg-white justify-between sm:aspect-square hover:bg-black hover:text-white transition-all items-center traking-tight tracking-wide transition-color duration-300">
            
              <h3 className="text-[clamp(18px,2vw,34px)] font-bold flex items-center">{service}</h3>
              <div className="w-8 sm:w-10 sm:h-10 rounded-full border border-current flex items-center justify-center self-end opacity-0 group-hover:opacity-100 transition-opacity text-xl sm:text-black group-hover:bg-[#5affc8]">
                ↗
              </div>
            </div>
          ))}
        </div>
        <button className="cursor-pointer lg:hidden w-full group text-xm font-semibold text-[#111] bg-white hover:rounded-xl rounded-full px-5 sm:px-6 py-2.5 sm:py-3">
          
            <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
              View All Services <span>↗</span>
            </p>
           
        </button>

      </div>
    </section>
  );
}
