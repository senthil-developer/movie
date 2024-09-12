import { getVariants } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface animateProps {
  children: React.ReactNode;
  animatedFrom: "x" | "y";
}
export const Animate = ({ animatedFrom, children }: animateProps) => {
  const variants = getVariants(animatedFrom);
  const ref = useRef(null);
  const mainControls = useAnimation();

  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: 0.5, ease: "linear" }}
      ref={ref}
    >
      {children}
    </motion.div>
  );
};
