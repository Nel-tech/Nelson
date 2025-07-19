"use client";

import { motion } from "framer-motion";

export default function About() {
    return (
        <section className="min-h-screen px-6 py-20 bg-zinc-900 text-white flex items-center justify-center">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl text-center space-y-6"
            >
                <h2 className="text-4xl md:text-5xl font-extrabold font-montserrat">
                    About Me
                </h2>
                <p className="text-zinc-300 text-lg leading-relaxed font-roboto">
                    I'm a Full-Stack Developer driven by a passion for transforming bold ideas into scalable, user-centric web applications that don’t just work — they make a real impact.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed font-roboto">
                    Whether it’s building <span className="text-white font-semibold">PolicyPeek</span>, an AI-powered tool that simplifies complex Terms & Conditions, or crafting <span className="text-white font-semibold">Photo Snap</span>, a sleek photo-sharing platform built for speed and experience — I focus on clean architecture, seamless UX, and long-term scalability.
                </p>
                <p className="text-zinc-400 text-base leading-relaxed font-roboto">
                    For me, every project is a chance to blend design, logic, and constant learning — shipping code that not only solves real problems but elevates the entire user journey. <span className="text-white font-medium">Always evolving. Always building.</span>
                </p>
                <p className="text-zinc-500 italic text-sm font-roboto">
                    “Code is not just what I write — it's what I shape the world with.”
                </p>
            </motion.div>
        </section>
    );
}
