"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const rotatingTitles = [
  " I'm Nelson Adegbasa",
  "a Fullstack Developer",
];

export default function HeroSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingTitles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden px-4 sm:px-6">
      <motion.svg
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 2 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] sm:w-[800px] h-[90vw] sm:h-[800px] blur-sm scale-125 -z-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 600 600"
        fill="none"
      >
        <defs>
          <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M40 0H0V40" stroke="#60A5FA" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="600" height="600" fill="url(#grid)" />
      </motion.svg>

      <div className="absolute inset-0 z-0 bg-gradient-to-tr from-blue-800/30 via-purple-700/10 to-cyan-500/10 opacity-20 blur-3xl animate-pulse" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-[90%] sm:max-w-3xl text-left md:text-center"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-medium font-montserrat  text-white mt-[10rem] sm:mt-30 md:mt-32 lg:mt-5">
          <motion.span
            className="block"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Hey there &#x1F44B;,
          </motion.span>
          <span className="block whitespace-nowrap">
       
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, scale: [1, 1.03, 1] }}
              transition={{ opacity: { duration: 0.6 }, y: { duration: 0.6 }, scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" } }}
              className="inline-block"
            >
              {rotatingTitles[index]}
            </motion.span>
          </span>
        </h1>

        <p className="font-montserrat text-base sm:text-base md:text-lg lg:text-xl tracking-wider   text-white/80 mt-4 max-w-[85%] sm:max-w-2xl mx-0 md:mx-auto text-left md:text-center leading-relaxed">
          A <span className="font-semibold mr-1">Fullstack Developer</span>
          with a love for building sleek user interfaces, scalable backend systems,
          and delightful digital products.
        </p>

        <a
          href="https://wa.me/2349081715621"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="button"
            className="mt-8 inline-flex  cursor-pointer items-center gap-2 px-6 py-3 bg-emerald-400 hover:bg-emerald-500 focus:ring-2 focus:ring-emerald-300 text-white rounded-full font-montserrat tracking-wide font-semibold transition duration-200 shadow-lg"
          >
            Let&apos;s Talk
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}