"use client";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaChrome } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss,SiPython, SiFastapi, SiCloudinary, SiTypescript, SiExpress, SiMongodb, SiPrisma, SiSupabase} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import { FramerIcon } from "./FramerIcon";

const projects = [
    {
        title: "PhotoSnap",
        description:
            "A storytelling platform where photographers share visual experiences, likes and bookmarks and also upload their own stories . Built with Next.js and Tailwind CSS.",
        image: "/images/Photosnap.png",
        tech: [<SiNextdotjs />, <SiTailwindcss />, <SiCloudinary/>, <SiTypescript/>, <SiExpress/>, <SiMongodb/> ],
        link: "#",
    },
    {
        title: "KavodFin-Forex Signal Sales Funnel ",
        description:
            "A results-driven landing experience crafted to scale a global Forex signals platform and convert visitors into loyal traders..",
        image: "/images/kavodfin.png",
        tech: [<SiNextdotjs />,<SiTailwindcss />, <SiTypescript />, <FramerIcon key="framer" className="w-5 h-5 text-[#0055FF]" />],
        link: "#",
    },
    {
        title: "PeekPolicy",
        description:
            "Browser extension that summarizes Terms & Conditions and flags risky clauses. Built with JS and Node.",
        image: "/images/PolicyPeek.png",
        tech: [<SiNextdotjs />, <SiTailwindcss />,<SiPython />, <SiFastapi />, <SiPrisma />, <SiSupabase />,  ],
        link: "#",
    },

    {
        title: "PeekPolicy",
        description:
            "Browser extension that summarizes Terms & Conditions and flags risky clauses. Built with JS and Node.",
        image: "/images/PolicyPeek.png",
        tech: [<SiNextdotjs />, <SiTailwindcss />,<SiPython />, <SiFastapi />, <SiPrisma />, <SiSupabase />,  ],
        link: "#",
    },
    {
        title: "PeekPolicy",
        description:
            "Browser extension that summarizes Terms & Conditions and flags risky clauses. Built with JS and Node.",
        image: "/images/PolicyPeek.png",
        tech: [<SiNextdotjs />, <SiTailwindcss />, <SiPython />, <SiFastapi />, <SiPrisma />, <SiSupabase />,],
        link: "#",
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.6,
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number], // Fix here
        },
    }),
};


export default function Projects() {
    return (
        <section className="py-24 bg-black text-white px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl  md:text-5xl font-extrabold font-montserrat mb-16"
                >
                     Selected Project
                </motion.h2>

                <div className="grid md:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                            className="group bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-cyan-500/30 transition relative overflow-hidden"
                        >
                            {/* Image */}
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-xl mb-4 border border-white/10"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Title */}
                            <h3 className="text-2xl  font-roboto font-bold mb-2 group-hover:text-cyan-400 transition">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed tracking-wide font-roboto text-white/80 group-hover:text-white/90 mb-4">
                                {project.description}
                            </p>

                            {/* Tech Stack Icons */}
                            <div className="flex gap-3 text-xl text-cyan-400 mb-4">
                                {project.tech.map((Icon, index) => (
                                    <span key={index} className="hover:scale-125 transition">
                                        {Icon}
                                    </span>
                                ))}
                            </div>

                            {/* CTA */}
                            <motion.a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ x: 4 }}
                                className="inline-flex font-roboto items-center text-cyan-400 font-medium"
                            >
                                View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                            </motion.a>

                            {/* Glow Effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500 via-fuchsia-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition duration-500 blur-2xl z-[-1]" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
