import { useLayoutEffect } from "react";
import { gsap } from "gsap";

export function useGsapContext(scopeRef, fn) {
  useLayoutEffect(() => {
    const ctx = gsap.context(fn, scopeRef);
    return () => ctx.revert();
  }, [scopeRef, fn]);
}
