import { useEffect, useRef, useState } from 'react';

/**
 * Tracks whether an element has scrolled into the viewport.
 * Fires once (by default) and disconnects, keeping scroll listeners cheap.
 * Respects prefers-reduced-motion by reporting "in view" immediately.
 */
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -60px 0px', once = true } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (once) observer.disconnect();
          } else if (!once) {
            setIsInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return [ref, isInView];
}
