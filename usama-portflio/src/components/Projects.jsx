import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React, Tailwind, and Framer Motion.",
    github: "https://github.com/sheikhusamaqureshi/hafiz-usama-portfolio",
    live: "#",
  },
  {
    title: "Recipe App",
    desc: "Search and filter recipes with favorites feature using API.",
    github: "#",
    live: "#",
  },
  {
    title: "E-commerce UI",
    desc: "Modern e-commerce frontend with product list, cart, and checkout.",
    github: "#",
    live: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="space-y-6">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="bg-white p-5 rounded-lg shadow hover:shadow-lg transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <div className="h-32 bg-gray-100 flex items-center justify-center rounded mb-4 text-gray-400">
              Screenshot
            </div>
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{p.desc}</p>
            <div className="mt-4 flex gap-3 text-sm">
              <a
                href={p.live}
                target="_blank"
                className="underline hover:text-red-700"
              >
                Live
              </a>
              <a
                href={p.github}
                target="_blank"
                className="underline hover:text-red-700"
              >
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
