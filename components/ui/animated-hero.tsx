"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AnimatedWordProps {
  words: string[];
  interval?: number;
}

export function AnimatedWord({ words, interval = 2000 }: AnimatedWordProps) {
  const [current, setCurrent] = useState(0);
  const longestWord = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  useEffect(() => {
    const id = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % words.length);
    }, interval);
    return () => clearTimeout(id);
  }, [current, words.length, interval]);

  return (
    /* overflow: visible → baseline = text baseline of ghost span (correct alignment) */
    <span style={{ display: "inline-block", position: "relative", verticalAlign: "baseline" }}>
      {/* ghost span: reserves width and defines correct baseline */}
      <span style={{ visibility: "hidden" }}>{longestWord}</span>
      {/* inner clip span: clips slide animation, extends below for descenders */}
      <span
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: "-0.25em",
          overflow: "hidden",
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={current}
            style={{ display: "inline-block", width: "100%", fontFamily: "var(--font-display)", fontWeight: 400, fontStyle: "italic" }}
            initial={{ opacity: 0, y: "100%" }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {words[current]}
          </motion.span>
        </AnimatePresence>
      </span>
    </span>
  );
}
