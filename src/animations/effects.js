import { gsap } from "gsap";

export const revealUp = (selector) =>
  gsap.from(selector, { y: 40, opacity: 0, duration: 0.7, ease: "power2.out" });
