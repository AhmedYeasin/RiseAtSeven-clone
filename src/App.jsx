import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';

import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsMarquee from './components/ClientsMarquee';
import About from './components/About';
import FeaturedWork from './components/FeaturedWork';
import OurServices from './components/OurServices';
import Manifesto from './components/Manifesto';
import ServicesTicker from './components/ServicesTicker';
import Footer from './components/Footer';

function App() {
  const [navDark, setNavDark] = useState(false);
  
  const workContainerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (footerRef.current) {
        const rect = footerRef.current.getBoundingClientRect();
        // Determine if we're near the footer/manifesto black area (rough estimation for this clone)
        if (rect.top < window.innerHeight) {
          setNavDark(true);
        } else {
          setNavDark(false);
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen font-body overflow-x-hidden">
      <AnnouncementBar />
      <Navbar navDark={navDark} />
      <Hero />
      <ClientsMarquee />
      <About />
      <FeaturedWork workContainerRef={workContainerRef} />
      <OurServices />
      <Manifesto />
      <ServicesTicker />
      <Footer footerRef={footerRef} />
    </div>
  );
}

export default App;
