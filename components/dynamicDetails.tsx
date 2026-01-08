"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const words = [
  "Full Stack Developer",
  "Open Source Contributor",
  "Design Engineer",
  "Creating Fine Products",
];

const DynamicDetails = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, filter: "blur(5px)" }}
          animate={{ opacity: 1, filter: "blur(0px)" }}
          exit={{ opacity: 0, filter: "blur(5px)" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="inline-block text-neutral-500"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
};

export default DynamicDetails;
