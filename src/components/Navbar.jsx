import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ navDark }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menus = {
    Services: [
      { name: 'Search & Growth Strategy', link: '#' },
      { name: 'Onsite SEO', link: '#' },
      { name: 'Content Experience', link: '#' },
      { name: 'B2B Marketing', link: '#' },
      { name: 'Digital PR', link: '#' },
      { name: 'Social Media & Campaigns', link: '#' },
      { name: 'Data & Insights', link: '#' },
      { name: 'Social SEO/Search', link: '#' }
    ],
    International: [
      { name: 'US Digital PR', link: '#' },
      { name: 'Spain Digital PR', link: '#' },
      { name: 'Germany Digital PR', link: '#' },
      { name: 'Netherlands Digital PR', link: '#' }
    ],
    About: [
      { name: 'About Us', link: '#' },
      { name: 'Meet The Risers', link: '#' },
      { name: 'Culture', link: '#' },
      { name: 'Testimonials', link: '#' }
    ]
  };

  const isDark = navDark || isMenuOpen;

  return (
    <>
      <nav className={`sticky top-0 w-full z-[100] transition-all duration-300 border-b ${isDark
          ? `text-white border-white/10 ${isScrolled ? 'bg-[#0a0a0a]/75 backdrop-blur-lg shadow-sm' : 'bg-[#0a0a0a]'}`
          : `text-[#111] border-black/5 ${isScrolled ? 'bg-white/75 backdrop-blur-lg shadow-sm' : 'bg-white'}`
        }`} onMouseLeave={() => setHoveredMenu(null)}>
        <div className="max-w-[1440px] mx-auto px-5 md:px-8 h-[72px] flex items-center justify-between gap-10">
          <a href="#" className="font-extrabold text-[25px] whitespace-nowrap shrink-0 flex items-center">
            Rise at Seven<span className="text-[20px] ml-1">↗</span>
          </a>

          <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center relative h-full">
            {['Services', 'International', 'About'].map(item => (
              <li key={item} className="h-full flex items-center" onMouseEnter={() => setHoveredMenu(item)}>
                <a href="#" className={`text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${isDark ? 'hover:bg-white/10 text-white/85' : 'hover:bg-black/5 text-[#111]'
                  }`}>
                  {item} <span className="text-[12px] opacity-60">+</span>
                </a>
              </li>
            ))}
            <li className="h-full flex items-center" onMouseEnter={() => setHoveredMenu(null)}>
              <a href="#" className={`text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${isDark ? 'hover:bg-white/10 text-white/85' : 'hover:bg-black/5 text-[#111]'
                }`}>
                Work <span className="bg-[#5affc8] text-[#111] text-[10px] font-bold w-[18px] h-[18px] rounded-full flex items-center justify-center ml-1">25</span>
              </a>
            </li>
            {['Careers', 'Blog', 'Webinar'].map(item => (
              <li key={item} className="h-full flex items-center" onMouseEnter={() => setHoveredMenu(null)}>
                <a href="#" className={`text-sm font-medium px-3 py-2 rounded-lg flex items-center gap-1 transition-colors ${isDark ? 'hover:bg-white/10 text-white/85' : 'hover:bg-black/5 text-[#111]'
                  }`}>{item}</a>
              </li>
            ))}

            {/* Mega Menu Dropdown */}
            <AnimatePresence>
              {hoveredMenu && menus[hoveredMenu] && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-[72px] left-0 right-0 bg-white shadow-xl rounded-b-2xl overflow-hidden"
                >
                  <div className="p-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {menus[hoveredMenu].map((subItem) => (
                      <a key={subItem.name} href={subItem.link} className="text-[#111] font-display font-semibold text-lg hover:text-[#5affc8] transition-colors p-3 hover:bg-black/5 rounded-xl">
                        {subItem.name}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </ul>
          
          <button
            className={`hidden md:lg:flex cursor-pointer p-4 rounded-full hover:rounded-xl font-medium group transition duration-500 ${isDark ? 'bg-white text-[#111] border-white hover:bg-gray-200' : 'bg-[#111] text-white border-[#111]'}`}
          >
            <div className="relative overflow-hidden">
              <p className="group-hover:-translate-y-7 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Get In Touch <span className="ml-1">↗</span>
              </p>
              <p className="absolute top-7 left-0 group-hover:top-0 duration-[1.125s] ease-[cubic-bezier(0.19,1,0.22,1)]">
                Get In Touch <span className="ml-1">↗</span>
              </p>
            </div>
          </button>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden ml-auto flex flex-col gap-[5px] p-2 relative z-[110]">
            <span className={`block w-6 h-[2px] rounded-sm transition-transform duration-300 ${navDark || isMenuOpen ? 'bg-white' : 'bg-[#111]'} ${isMenuOpen ? 'translate-y-[7px] rotate-45' : ''}`}></span>
            <span className={`block w-6 h-[2px] rounded-sm transition-opacity duration-300 ${navDark || isMenuOpen ? 'bg-white' : 'bg-[#111]'} ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-[2px] rounded-sm transition-transform duration-300 ${navDark || isMenuOpen ? 'bg-white' : 'bg-[#111]'} ${isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}></span>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a0a0a] z-[90] flex flex-col pt-[100px] px-6 pb-6 overflow-y-auto"
          >
            <div className="w-full max-w-lg mx-auto">
              <ul className="flex flex-col gap-4 mb-10">
                {['Services', 'International', 'About', 'Work', 'Careers', 'Blog', 'Webinar'].map(item => (
                  <li key={item}>
                    <a href="#" className="font-display text-[clamp(32px,8vw,48px)] font-bold text-white hover:text-[#5affc8] transition-colors flex items-center gap-3">
                      {item}
                      {item === 'Work' && <span className="bg-[#5affc8] text-[#111] text-sm md:text-xl font-bold w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">25</span>}
                    </a>
                  </li>
                ))}
              </ul>

              <button className="bg-white text-[#111] font-semibold text-lg px-8 py-4 rounded-full mb-10 w-full hover:bg-gray-200 transition-colors flex justify-center items-center gap-2">
                Get In Touch <span>↗</span>
              </button>
              <div className="flex gap-6 justify-center text-white/60 text-lg font-medium">
                {['f', '𝕏', 'in', '▶', '♪', '◎'].map(social => (
                  <a key={social} href="#" className="hover:text-[#5affc8] transition-colors flex items-center gap-1">
                    {social} <span className="text-sm">↗</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
