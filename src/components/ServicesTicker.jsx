import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

// Register plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ServicesTicker() {
  const scope = useRef(null);

  useLayoutEffect(() => {
    let wrapper = scope.current?.querySelector(".Horizontal");
    let text = scope.current?.querySelector(".Horizontal__text");

    if (!wrapper || !text) return;

    // Main Horizontal Scroll
    const scrollTween = gsap.to(text, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        start: "center center",
        end: "+=3000px",
        scrub: true
      }
    });

    // SplitText animation
    let split = SplitText.create(".Horizontal__text", { type: "chars, words" });
    split.chars.forEach((char) => {
      gsap.from(char, {
        yPercent: "random(-200, -300)",
        rotation: "random(10, -40)",
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: char,
          containerAnimation: scrollTween,
          start: "left 100%",
          end: "left 30%",
          scrub: 2
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={scope}>
      <section className="Horizontal bg-[#f0eeeb] sm:py-0 overflow-hidden min-h-[100px] md:min-h-[150px]">
        <div className="px-4 sm:px-6 md:px-4">
          <h3 className="Horizontal__text heading-xl text-black font-medium text-[clamp(40px,5vw,120px)] leading-[1] tracking-[-0.03em]">
            Ready to Rise at Seven?
          </h3>
        </div>
      </section>
    </div>
  );
}