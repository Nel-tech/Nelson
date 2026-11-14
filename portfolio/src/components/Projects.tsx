"use client";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiPython, SiFastapi, SiReactquery, SiCloudinary, SiTypescript, SiExpress, SiMongodb, SiPrisma, SiSupabase, SiReact, SiVite } from "react-icons/si";
import { ArrowUpRight, Lock } from "lucide-react";

const techIcons = {
    tailwind: <SiTailwindcss className="text-sky-400" />,
    ts: <SiTypescript className="text-blue-400" />,
    reactquery: <SiReactquery className="text-red-400" />,
    next: <SiNextdotjs className="text-white" />,
    react: <SiReact className="text-cyan-400" />,
    vite: <SiVite className="text-purple-400" />,
    express: <SiExpress className="text-gray-300" />,
    prisma: <SiPrisma className="text-indigo-400" />,
    mongodb: <SiMongodb className="text-green-400" />,
    supabase: <SiSupabase className="text-green-300" />,
    fastapi: <SiFastapi className="text-white" />,
    python: <SiPython className="text-yellow-200" />,
    cloudinary: <SiCloudinary className="text-blue-400" />,
};

const projects = [
    {
        id: 1,
        title: "Greeneth Intelligence Network",
        description: "A website and AI advisory platform for a Nigerian agriculture company, built, deployed and put on a custom domain end to end. Designed around a farmer advisory flow that sends form submissions to Claude and delivers personalized guidance over WhatsApp.",
        image: "/images/greeneth.png",
        tech: [techIcons.react, techIcons.vite, techIcons.ts, techIcons.tailwind],
        link: "https://www.greeneth-limited.com.ng/",
    },
    {
        id: 2,
        title: "CDL — CDS Locations",
        description: "An NYSC CDS placement directory that lets corps members find community development service locations by LGA and CDS group instead of scouting door to door. Supabase row-level security and column-level grants keep contact details private.",
        image: "/images/cdl.png",
        tech: [techIcons.next, techIcons.ts, techIcons.supabase, techIcons.tailwind],
    },
    {
        id: 3,
        title: "Corper Register",
        description: "A per-LGA corps member database that replaces the handwritten register kept by the Corps Liaison Officer. Records can be filtered by batch, year and CDS group, and access is limited to the CLO and CDS presidents through separate accounts. Includes migrating past corpers' records from the paper book.",
        image: "/images/corper-register.png",
        tech: [techIcons.next, techIcons.ts, techIcons.supabase, techIcons.tailwind],
    },
    {
        id: 4,
        title: "PeekPolicy",
        description: "An AI-powered tool that scans Terms & Conditions documents and flags risky clauses in plain English, so users don't agree to things they haven't actually read. Built with a Python/FastAPI backend handling the NLP pipeline and a Next.js frontend for instant summaries.",
        image: "/images/policypeek.png",
        tech: [techIcons.next, techIcons.tailwind, techIcons.reactquery, techIcons.python, techIcons.fastapi, techIcons.prisma, techIcons.supabase],
        link: "https://policypeek.vercel.app/",
        code: "https://github.com/Nel-tech/PolicyPeek",
    },
    {
        id: 5,
        title: "PhotoSnap",
        description: "A storytelling platform where photographers upload and share visual narratives, with infinite-scroll galleries, cloud-optimized image delivery via Cloudinary, and a MongoDB-backed API for likes, comments, and collections.",
        image: "/images/photosnap.png",
        tech: [techIcons.next, techIcons.tailwind, techIcons.reactquery, techIcons.ts, techIcons.express, techIcons.mongodb, techIcons.cloudinary],
        link: "https://photo-snap-gallery.vercel.app/",
        code: "https://github.com/Nel-tech/PhotoSnap",
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
            ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
        },
    }),
};

export default function Projects() {
    return (
        <section id="projects" className="py-24 bg-black text-white px-6 md:px-16">
            <div className="max-w-6xl mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="lg:text-4xl text-2xl  md:text-5xl  font-montserrat mb-16"
                >
                    Selected Project
                </motion.h2>

                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-12">
                    {projects.map((project, i) => (
                        <motion.div
                            key={project.title}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={i}
                            className="group bg-white/5 border border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-emerald-500/30 transition relative overflow-hidden"
                        >
                            {/* Image - Alternative with regular img */}
                            <motion.img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-56 object-cover rounded-xl mb-4 border border-white/10"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.3 }}
                            />

                            {/* Title */}
                            <h3 className=" text-xl lg:text-2xl mb-4  font-montserrat font-bold  group-hover:text-emerald-400 transition">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed tracking-wide font-montserrat text-white/80 group-hover:text-white/90 mb-4">
                                {project.description}
                            </p>

                            {/* Tech Stack Icons */}
                            <div className="flex justify-center items-center gap-3 text-xl  mb-4">
                                {project.tech.map((Icon, index) => (
                                    <span key={index} className="hover:scale-125 transition">
                                        {Icon}
                                    </span>
                                ))}
                            </div>

                            <div className="flex justify-between items-center pt-6">
                                {project.link ? (
                                    <motion.a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="inline-flex font-montserrat items-center text-emerald-400 font-medium"
                                    >
                                        View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </motion.a>
                                ) : (
                                    <span className="inline-flex font-montserrat items-center text-sm text-white/60">
                                        <Lock className="mr-2 w-4 h-4" />
                                        Access restricted to serving NYSC corps members
                                    </span>
                                )}

                                {project.code && (
                                    <motion.a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="inline-flex font-montserrat items-center text-emerald-400 font-medium"
                                    >
                                        View Code <ArrowUpRight className="ml-2 w-4 h-4" />
                                    </motion.a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
