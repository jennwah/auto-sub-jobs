"use client";

import { motion } from "framer-motion";
import CountingNumbers from "@/components/shared/counting-numbers2";

export default function WebVitals() {
  return (
    <div className="relative h-full w-full">
      <motion.svg
        className="absolute inset-0 m-auto"
        viewBox="0 0 100 100"
        width={140}
        height={140}
      >
        <motion.animate
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 2, ease: "easeOut" }}
          strokeWidth={7}
          strokeDasharray="0 1"
          strokeLinecap="round"
          transform="rotate(-90 50 50)"
          cx="50"
          cy="50"
          r="45"
          fill="#DCFCE7"
          stroke="#22C55E"
        />
      </motion.svg>
      <CountingNumbers
        value={5001}
        duration={3000}
        className="absolute inset-0 mx-auto flex items-center justify-center font-display text-5xl text-blue-600/100"
      />
    </div>
  );
}
