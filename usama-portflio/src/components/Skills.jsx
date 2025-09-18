import React from "react";
import { motion } from "framer-motion";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Bootstrap",
  "GSAP",
  "WordPress",
];

export default function Skills() {
  return (
    <section id="skills" className="space-y-6">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((s, i) => (
          <motion.div
            key={i}
            className="px-4 py-2 rounded-full border border-red-600 text-red-700 font-medium text-sm shadow-sm hover:bg-red-700 hover:text-white transition"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            {s}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
