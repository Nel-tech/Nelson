"use client";
import { motion } from "framer-motion";
import { SiNextdotjs, SiTailwindcss, SiPython, SiFramer, SiPostgresql, SiFastapi, SiReactquery, SiCloudinary, SiTypescript, SiExpress, SiMongodb, SiPrisma, SiSupabase} from "react-icons/si";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const techIcons = {
    tailwind: <SiTailwindcss className="text-sky-400" />,
    ts: <SiTypescript className="text-blue-400" />,
    
    reactquery: <SiReactquery className="text-red-400" />,
    next: <SiNextdotjs className="text-white" />,
    express: <SiExpress className="text-gray-300" />,
    prisma: <SiPrisma className="text-indigo-400" />,
    mongodb: <SiMongodb className="text-green-400" />,
    postgresql: <SiPostgresql className="text-blue-500" />,
    supabase: <SiSupabase className="text-green-300" />,
    framer: <SiFramer className="text-pink-400" />,
    fastapi: <SiFastapi className="text-white" />,
    python: <SiPython className="text-yellow-200" />,
    cloudinary: <SiCloudinary className="text-blue-400" />, 
};


const projects = [
    {
        id:1,
        title: "PhotoSnap",
        description: "A storytelling platform where photographers share visual experiences...",
        image: "/images/Photosnap.png",
        tech: [techIcons.next, techIcons.tailwind, techIcons.reactquery, techIcons.ts, techIcons.express, techIcons.mongodb, techIcons.cloudinary],
        link: "https://photo-snap-gallery.vercel.app/",
        code:"https://github.com/Nel-tech/PhotoSnap"
    },
    
    {
        id: 2,
        title: "PeekPolicy",
        description: "A web Platform that summarizes Terms & Conditions and flags risky clauses...",
        image: "/images/PolicyPeek.png",
        tech: [techIcons.next, techIcons.tailwind, techIcons.reactquery, techIcons.python, techIcons.fastapi, techIcons.prisma, techIcons.supabase],
        link: "https://policypeek.vercel.app/",
        code:"https://github.com/Nel-tech/PolicyPeek"
    },

    {
        id: 3,
        title: "KavodFin-Forex Signal Sales Funnel",
        description: "A results-driven landing experience crafted to scale a global Forex signals platform...",
        image: "/images/Kavodfin.png",
        tech: [techIcons.next, techIcons.framer, techIcons.tailwind, techIcons.ts, techIcons.framer],
        link: "https://www.kavodfin.com.ng/",
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
                    className="lg:text-4xl text-2xl  md:text-5xl font-extrabold font-montserrat mb-16"
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
                            {/* Image */}
                          
                            <Image
                                src={project.image}
                                alt={project.title}
                                className="w-full h-[15rem] object-cover rounded-xl mb-4 border border-white/10"
                               width={200}
                               height={200}
                            />

                            {/* Title */}
                            <h3 className=" text-xl lg:text-2xl mb-4  font-roboto font-bold  group-hover:text-emerald-400 transition">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm leading-relaxed tracking-wide font-roboto text-white/80 group-hover:text-white/90 mb-4">
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
                                <motion.a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 4 }}
                                    className="inline-flex font-roboto items-center text-emerald-400 font-medium"
                                >
                                    View Project <ArrowUpRight className="ml-2 w-4 h-4" />
                                </motion.a>

                                {project.code && (
                                    <motion.a
                                        href={project.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ x: 4 }}
                                        className="inline-flex font-roboto items-center text-emerald-400 font-medium"
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
