"use client";

import {
  type MotionValue,
  m,
  useReducedMotion,
  useScroll,
  useSpring,
} from "framer-motion";

export function ScrollProgress() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX: MotionValue<number> = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  if (shouldReduceMotion) {
    return null;
  }

  return (
    <m.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-accent origin-[0%] z-[60]"
      style={{ scaleX }}
    />
  );
}
