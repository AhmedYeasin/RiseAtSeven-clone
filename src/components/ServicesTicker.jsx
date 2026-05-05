import React, { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/all';

// Register plugins
gsap.registerPlugin(SplitText, ScrollTrigger);

export default function ServicesTicker() {
  const scope = useRef(null); // Container scoping-er jonno

  useLayoutEffect(() => {
    // React-er bhetore Vanilla JS dhoroner logic
    // Shudhu ei component-er bhetorer element-gulo dhorbe
    let wrapper = scope.current.querySelector(".Horizontal");
    let text = scope.current.querySelector(".Horizontal__text");

    // Main Horizontal Scroll
    const scrollTween = gsap.to(text, {
      xPercent: -100,
      ease: "none",
      scrollTrigger: {
        trigger: wrapper,
        pin: true,
        start: "top top",
        end: "+=5000px",
        scrub: true
      }
    });

    // Jodi SplitText plugin apnar thake, tobe vanilla style-e nicher line kaj korbe:
    
    let split = SplitText.create(".Horizontal__text", { type: "chars, words" });
    split.chars.forEach((char) => {
      gsap.from(char, {
        yPercent: "random(-200, -200)",
        rotation: "random(-20, -20)",
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: char,
          containerAnimation: scrollTween,
          start: "left 100%",
          end: "left 30%",
          scrub: 1
        }
      });
    });
  

    // Component unmount hole animation clean korbe
    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div ref={scope}>
      <section className="Horizontal">
        <div className="container">
          <h3 className="Horizontal__text heading-xl text-black">
            Ready to Rise at Seven?
          </h3>
        </div>
      </section>
    </div>
  );
}