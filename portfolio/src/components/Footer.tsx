"use client";

import { FaWhatsapp, FaLinkedin, FaXTwitter, FaGithub } from "react-icons/fa6";

function Footer() {
    return (
        <footer className="bg-zinc-950 text-white py-10 px-6 flex flex-col items-center space-y-4 border-t border-zinc-800">
            <p className="text-lg md:text-xl font-semibold text-emerald-400 font-mono text-center">
                nelsonfavour.dev@gmail.com
            </p>

            <div className="flex space-x-6 text-2xl">
                <a
                    href="https://wa.me/234**********" // ← replace with your number
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-emerald-400 transition-colors"
                >
                    <FaWhatsapp />
                </a>
                <a
                    href="https://www.linkedin.com/in/your-linkedin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-400 transition-colors"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://x.com/your-twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-300 transition-colors"
                >
                    <FaXTwitter />
                </a>
                <a
                    href="https://github.com/your-github"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-zinc-400 transition-colors"
                >
                    <FaGithub />
                </a>
            </div>

            <p className="text-sm text-zinc-500">&copy; {new Date().getFullYear()} Nelson Favour</p>
        </footer>
    );
}

export default Footer;
