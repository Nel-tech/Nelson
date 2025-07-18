"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Handshake } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingTitles = [
  " Nelson Adegbasa",
  "Fullstack Developer",
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
    <section className="relative w-full min-h-screen flex items-center justify-center bg-black overflow-hidden px-6">
      
    <motion.svg
  initial={{ opacity: 0 }}
  animate={{ opacity: 0.35 }}
  transition={{ duration: 2 }}
  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] blur-sm scale-125 -z-10"
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

      {/* Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 max-w-3xl text-center"
      >

        <h1 className="text-4xl font-montserrat md:text-6xl font-extrabold text-white leading-tight text-center">
          Hey There, <br />
          I'm{" "}
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block text-white bg-clip-text  drop-shadow-lg"
          >
            {rotatingTitles[index]}
          </motion.span>
        </h1>
        <p className="text-lg tracking-wider font-roboto md:text-xl text-white/80 mt-4 max-w-2xl mx-auto">
  A <span className="font-semibold mr-1 ">Fullstack Developer</span> 
  with a love for building sleek user interfaces, scalable backend systems, 
  and delightful digital products. 
</p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="button"
          className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-cornflowerblue hover:bg-blue-500 text-white rounded-full font-semibold transition"
        >
          Hire Me <Handshake size={18} />
        </motion.button>

        {/* Availability Badge */}
        <div className="mt-6 inline-flex items-center gap-2 text-green-400 bg-white/5 px-4 py-2 rounded-full border border-green-500/20 shadow-inner text-sm font-medium">
          ✅ Currently Available
        </div>
      </motion.div>
    </section>
  );
}
