/* main.js – Rise at Seven Clone */

(function () {
  'use strict';

  // ── DOM REFS ──────────────────────────────────────────────
  const bar        = document.getElementById('announcement-bar');
  const closeBtn   = document.getElementById('close-announcement');
  const navbar     = document.getElementById('navbar');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const workItems  = document.querySelectorAll('.work-item');
  const workPanels = document.querySelectorAll('.work-image-panel');
  const workOuter  = document.getElementById('featured-work-outer');
  const footer     = document.getElementById('footer');

  // ── ANNOUNCEMENT BAR ─────────────────────────────────────
  closeBtn.addEventListener('click', () => {
    bar.classList.add('hidden');
    document.documentElement.style.setProperty('--bar-h', '0px');
  });

  // ── HAMBURGER MENU ────────────────────────────────────────
  hamburger.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
    if (isOpen) navbar.classList.add('dark');
    else if (!isOverDark()) navbar.classList.remove('dark');
  });

  // Close mobile menu when a link is clicked
  document.querySelectorAll('.mobile-nav-links a, .mobile-cta').forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = '';
    });
  });

  // ── NAVBAR DARK / LIGHT ──────────────────────────────────
  function isOverDark() {
    if (!footer) return false;
    const footerRect = footer.getBoundingClientRect();
    return footerRect.top < 80;
  }

  window.addEventListener('scroll', () => {
    if (mobileMenu.classList.contains('open')) return;
    if (isOverDark()) {
      navbar.classList.add('dark');
    } else {
      navbar.classList.remove('dark');
    }
  }, { passive: true });

  // ── FEATURED WORK SCROLL EFFECT ───────────────────────────
  let currentIndex = 0;

  function setActiveWork(index) {
    if (index === currentIndex && index !== 0) return;
    currentIndex = index;

    workItems.forEach((item, i) => {
      item.classList.remove('active', 'prev');
      if (i === index) item.classList.add('active');
      else if (i < index) item.classList.add('prev');
    });

    workPanels.forEach((panel, i) => {
      panel.classList.toggle('active', i === index);
    });
  }

  // Click on work item
  workItems.forEach((item) => {
    item.addEventListener('click', () => {
      const idx = parseInt(item.dataset.index, 10);
      setActiveWork(idx);
    });
  });

  // Scroll-linked: each work item gets ~620px of scroll range
  function handleWorkScroll() {
    if (!workOuter) return;
    const rect = workOuter.getBoundingClientRect();
    const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h'), 10) || 72;
    const sectionTop = -rect.top + navH;
    const itemHeight = 620;
    const totalItems = workItems.length;

    const rawIndex = Math.floor(sectionTop / itemHeight);
    const clampedIndex = Math.max(0, Math.min(totalItems - 1, rawIndex));
    setActiveWork(clampedIndex);
  }

  window.addEventListener('scroll', handleWorkScroll, { passive: true });
  handleWorkScroll(); // init

  // ── INTERSECTION ANIMATIONS ───────────────────────────────
  const observerOpts = { threshold: 0.15 };
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOpts);

  document.querySelectorAll('.about-section, .clients-section').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    revealObserver.observe(el);
  });

  // Add revealed class
  const style = document.createElement('style');
  style.textContent = `.revealed { opacity: 1 !important; transform: translateY(0) !important; }`;
  document.head.appendChild(style);

  // ── HERO PARALLAX ─────────────────────────────────────────
  const heroBg = document.querySelector('.hero-bg');
  if (heroBg) {
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY;
      heroBg.style.transform = `scale(1.06) translateY(${scrollY * 0.25}px)`;
    }, { passive: true });
  }

  // ── SMOOTH HOVER: work items ──────────────────────────────
  workItems.forEach((item, i) => {
    item.addEventListener('mouseenter', () => setActiveWork(i));
  });

  // ── NEWSLETTER FORM ───────────────────────────────────────
  const newsletterForm = document.querySelector('.newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', e => e.preventDefault());
    document.querySelector('.newsletter-btn').addEventListener('click', () => {
      const email = document.getElementById('newsletter-email').value;
      if (email && email.includes('@')) {
        document.querySelector('.newsletter-form').innerHTML =
          '<span style="color:var(--mint);font-weight:600;padding:12px 20px;">✓ You\'re subscribed!</span>';
      }
    });
  }

  // ── CURSOR EFFECT (desktop only) ─────────────────────────
  if (window.matchMedia('(pointer: fine)').matches) {
    const cursor = document.createElement('div');
    cursor.style.cssText = `
      position:fixed; width:10px; height:10px; background:rgba(90,255,200,0.8);
      border-radius:50%; pointer-events:none; z-index:9999;
      transform:translate(-50%,-50%); transition:transform 0.12s ease, width 0.2s, height 0.2s;
      mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);

    let mx = 0, my = 0;
    document.addEventListener('mousemove', e => {
      mx = e.clientX; my = e.clientY;
      cursor.style.left = mx + 'px';
      cursor.style.top = my + 'px';
    });

    document.querySelectorAll('a, button, .work-item').forEach(el => {
      el.addEventListener('mouseenter', () => {
        cursor.style.width = '40px';
        cursor.style.height = '40px';
      });
      el.addEventListener('mouseleave', () => {
        cursor.style.width = '10px';
        cursor.style.height = '10px';
      });
    });
  }

  // ── INIT ─────────────────────────────────────────────────
  setActiveWork(0);
})();
