"use client";

import { motion } from "framer-motion";
import {
    SiTailwindcss,
    SiJavascript,
    SiReact,
    SiRedux,
    SiNextdotjs,
    SiReactquery,
    SiMongodb,
    SiPrisma,
    SiPostgresql,
    SiExpress,
    SiNodedotjs,
    SiSupabase,
    SiFirebase,
    SiTypescript,
    SiFramer,
} from "react-icons/si";

const FastApiIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
        className="w-8 h-8 text-emerald-400"
        fill="currentColor"
    >
        <circle cx="128" cy="128" r="120" fill="none" stroke="currentColor" strokeWidth="24" />
        <path
            d="M128,64v128M64,128h128"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="16"
        />
    </svg>
);

const techStacks = [
    { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
    { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
    { icon: <SiTypescript className="text-blue-400" />, name: "TypeScript" },
    { icon: <SiReact className="text-cyan-400" />, name: "React" },
    { icon: <SiRedux className="text-purple-500" />, name: "Redux" },
    { icon: <SiReactquery className="text-red-400" />, name: "React Query" },
    { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
    { icon: <SiNodedotjs className="text-green-500" />, name: "Node.js" },
    { icon: <SiExpress className="text-gray-300" />, name: "Express.js" },
    { icon: <SiPrisma className="text-indigo-400" />, name: "Prisma" },
    { icon: <SiMongodb className="text-green-400" />, name: "MongoDB" },
    { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
    { icon: <SiSupabase className="text-green-300" />, name: "Supabase" },
    { icon: <SiFirebase className="text-orange-400" />, name: "Firebase" },
    { icon: <SiFramer className="text-pink-400" />, name: "Framer Motion" },
    { icon: <FastApiIcon />, name: "FastAPI" }, // 👈 Added FastAPI here
];

export default function TechStacks() {
    return (
        <section className="py-20 bg-zinc-950 text-white px-4 md:px-12">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-5xl mx-auto text-center space-y-8"
            >
                <h2 className="text-4xl md:text-5xl font-bold font-montserrat">
                    Tech Stacks
                </h2>
                <p className="text-zinc-400 max-w-2xl mx-auto">
                    The tools and technologies I use to build fast, reliable, and beautiful web experiences.
                </p>

                <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-6 justify-items-center mt-10">
                    {techStacks.map((tech, index) => (
                        <motion.div
                            key={index}
                            className="relative group cursor-pointer"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="text-4xl">{tech.icon}</div>
                            <span className="absolute bottom-[-2.5rem] left-1/2 transform -translate-x-1/2 bg-zinc-800 text-sm px-2 py-1 rounded shadow-md text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
}
