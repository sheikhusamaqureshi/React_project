import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="space-y-6">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="text-gray-700 leading-relaxed max-w-3xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        I am a Front-End Developer with a B.S. in Computer Science (GCUF).
        With 1 year of experience, I focus on building responsive and
        user-centered web applications. Skilled in React, Tailwind CSS,
        GSAP, and modern frameworks, I enjoy creating interactive and
        visually appealing digital experiences.
      </motion.p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <motion.div
          className="p-4 rounded-lg shadow bg-white"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-semibold text-red-700">Education</h3>
          <p className="text-sm text-gray-600 mt-2">
            BS Computer Science — GCUF (2019–2023) — CGPA: 3.567
          </p>
        </motion.div>

        <motion.div
          className="p-4 rounded-lg shadow bg-white"
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="font-semibold text-red-700">Personal</h3>
          <p className="text-sm text-gray-600 mt-2">
            Hafiz-e-Quran — Jamia Anwar-ul-Aloom Usmaniya
          </p>
        </motion.div>
      </div>
    </section>
  );
}
