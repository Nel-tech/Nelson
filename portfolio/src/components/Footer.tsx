"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";
import { useState, useEffect } from "react";

export default function Footer() {
    const [currentYear, setCurrentYear] = useState(2024); 

    useEffect(() => {
        setCurrentYear(new Date().getFullYear());
    }, []);

    const icons = [
        {
            href: "https://wa.me/2349081715621",
            icon: <FaWhatsapp />,
            label: "WhatsApp",
            color: "hover:text-emerald-400",
        },
        {
            href: "https://www.linkedin.com/in/nelson-adegbasa-858b88365", 
            icon: <FaLinkedin />,
            label: "LinkedIn",
            color: "hover:text-blue-400",
        },
        {
            href: "https://x.com/manlike_favour",
            icon: <FaXTwitter />,
            label: "X (Twitter)",
            color: "hover:text-gray-300",
        },
        {
            href: "https://github.com/Nel-tech",
            icon: <FaGithub />,
            label: "GitHub",
            color: "hover:text-zinc-400",
        },
    ];

    return (
        <footer className="bg-zinc-950 text-white px-6 py-20 border-t border-zinc-800">
            <div className="max-w-5xl mx-auto flex flex-col items-center text-center space-y-8">
                {/* Title */}
                <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-2xl md:text-3xl font-bold font-montserrat text-white"
                >
                    Got a ground-breaking idea?
                </motion.h3>
                <motion.p
                    className="text-zinc-400 text-base font-roboto md:text-lg max-w-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Let&apos;s bring it to life — I'm just an email away.
                </motion.p>

                {/* Email */}
                <motion.p
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-xl lg:text-3xl md:text-3xl font-semibold text-emerald-400 font-montserrat"
                >
                    favournelson82@gmail.com
                </motion.p>

                {/* Social icons */}
                <motion.div
                    className="flex gap-6 text-2xl mt-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    {icons.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`transition-colors ${item.color}`}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.95 }}
                            title={item.label}
                        >
                            {item.icon}
                        </motion.a>
                    ))}
                </motion.div>

                {/* Bottom line - Fixed hydration issue */}
                <motion.p
                    className="text-sm text-zinc-500 mt-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                >
                    &copy; {currentYear} Nelson Favour. All rights reserved.
                </motion.p>
            </div>
        </footer>
    );
}