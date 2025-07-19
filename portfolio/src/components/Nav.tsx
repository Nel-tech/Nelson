'use client'
import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Stacks", href: "/stacks" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <>
      {/* Top Navbar */}
      <header className="w-full flex justify-center fixed top-0 z-50 mt-4">
        <nav className="bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white px-8 py-3 rounded-full shadow-lg flex items-center space-x-8">
          <ul className="flex items-center gap-6 text-sm font-medium">
            {navLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="hover:text-purple-400 font-roboto transition-colors duration-200"
                >
                  {link.label}
                </a>
                {i < navLinks.length - 1 && (
                  <span className="mx-3 text-white/20 opacity-50 select-none">|</span>
                )}
              </li>
            ))}
          </ul>

          <Button className="ml-4 cursor-pointer font-roboto bg-[#6495ED] hover:bg-[#3B82F6] transition-colors text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md">
            Work With Me <Handshake size={16} />
          </Button>
        </nav>
      </header>

      {/* Floating Social Icons with Tooltip & Bounce */}
      <TooltipProvider>
        <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-4 animate-bounce-once">
          {/* Twitter */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://twitter.com/yourhandle"
                target="_blank"
                className="text-white hover:text-[#1DA1F2] transition-all duration-200"
              >
                <FaXTwitter size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Twitter / X</TooltipContent>
          </Tooltip>

          {/* GitHub */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                className="text-white hover:text-[#cdd9e5] transition-all duration-200"
              >
                <FaGithub size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">GitHub</TooltipContent>
          </Tooltip>

          {/* WhatsApp */}
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://wa.me/yourwhatsapplink"
                target="_blank"
                className="text-white hover:text-[#25D366] transition-all duration-200"
              >
                <FaWhatsapp size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">WhatsApp</TooltipContent>
          </Tooltip>

          <span className="w-[1px] h-16 bg-white/20 mt-2"></span>
        </div>
      </TooltipProvider>

      {/* Bounce keyframe animation (add to your globals.css or Tailwind config) */}
      <style jsx global>{`
        @keyframes bounceOnce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        .animate-bounce-once {
          animation: bounceOnce 0.8s ease-out 1;
        }
      `}</style>
    </>
  );
}
