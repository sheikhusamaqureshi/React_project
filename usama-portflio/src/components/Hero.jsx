import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex flex-col md:flex-row items-center gap-12 py-20"
    >
      {/* Left Text */}
      <motion.div
        className="flex-1"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-extrabold">
          Hi, I’m <span className="text-red-700 text-5xl">Hafiz Usama</span>
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-lg">
          Front-End Developer passionate about building responsive, user-friendly, and modern web experiences.
        </p>

        {/* <div className="mt-6 flex gap-4">
          <a
            href="/Hafiz Usama CV.pdf"
            download
            className="px-5 py-2 bg-red-700 text-white rounded-lg shadow hover:bg-red-800 transition"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-red-700 text-red-700 rounded-lg hover:bg-red-700 hover:text-white transition"
          >
            Contact Me
          </a>
        </div> */}

        <div className="mt-6 space-x-4 text-sm">
          <a
            href="https://github.com/sheikhusamaqureshi"
            target="_blank"
            className="underline hover:text-red-700"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/hafiz-usama-888a7a29b"
            target="_blank"
            className="underline hover:text-red-700"
          >
            LinkedIn
          </a>
          <a
            href="mailto:usamahafiz608@gmail.com"
            className="underline hover:text-red-700"
          >
            Email
          </a>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        className="flex-1 flex justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="w-48 h-48 rounded-full bg-gray-200 flex items-center justify-center shadow-lg overflow-hidden">
            <img
                src="/src/assets/Screenshot 2025-09-18 152543.jpg"
                alt="Profile"
                className="w-full h-full object-cover rounded-full"
            />
            </div>


      </motion.div>
    </section>
  );
}
