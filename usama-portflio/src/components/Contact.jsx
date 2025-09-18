
import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="space-y-6">
      <motion.h2
        className="text-3xl font-bold"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact Me
      </motion.h2>

      <p className="text-gray-700">
        I’m always open to new opportunities and collaborations.
      </p>

      <div className="space-y-2 text-sm">
        <p>
          📧 Email:{" "}
          <a
            href="mailto:usamahafiz608@gmail.com"
            className="underline text-red-700"
          >
            usamahafiz608@gmail.com
          </a>
        </p>
        <p>📞 Phone: +92 310 1744389</p>
        <p>
          🔗 GitHub:{" "}
          <a
            href="https://github.com/sheikhusamaqureshi"
            target="_blank"
            className="underline text-red-700"
          >
            github.com/sheikhusamaqureshi
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/hafiz-usama-888a7a29b"
            target="_blank"
            className="underline text-red-700"
          >
            linkedin.com/in/hafiz-usama-888a7a29b
          </a>
        </p>
      </div>


    </section>
  );
}
