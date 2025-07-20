'use client'

import { Handshake, Menu, X } from "lucide-react";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { FaGithub, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog } from '@headlessui/react';
import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname } from 'next/navigation';

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Stacks", href: "#stacks" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  // const pathname = usePathname();
  const [hasMounted, setHasMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    // Lock body scroll when mobile menu is open
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  if (!hasMounted) return null;

  return (
    <>
      {/* Top Navbar */}
      <header className="w-full flex justify-center  fixed top-0 z-50 mt-4">
        <nav className="bg-zinc-900/80 backdrop-blur-md border border-white/10 text-white px-13 py-3  rounded-full shadow-lg flex items-center  space-x-8">
          <ul className="hidden md:flex items-center gap-6 text-base tracking-wider font-medium">
            {navLinks.map((link, i) => (
              <li key={link.label} className="flex items-center">
                <a
                  href={link.href}
                  className="hover:text-emerald-400 font-roboto transition-colors duration-200"
                >
                  {link.label}
                </a>
                {i < navLinks.length - 1 && (
                  <span className="mx-3 text-white/20 opacity-50 select-none">|</span>
                )}
              </li>
            ))}
          </ul>

          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/2349081715621"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="lg:ml-4 -ml-10 cursor-pointer font-roboto tracking-wider bg-emerald-400 hover:bg-emerald-500 transition-colors text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md">
              Work With Me <Handshake size={16} />
            </Button>
          </a>

          {/* Mobile Menu Button */}
          <div className="ml-1 lg:ml-2 md:ml-2 md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>

        </nav>
      </header>

     
      <AnimatePresence>
        {mobileMenuOpen && (
          <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen} className="relative z-50">
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 left-0 right-0 z-50 w-full bg-black text-white px-6 py-6 shadow-lg"
            >
              <Dialog.Panel>
                <div className="  mb-6">
                 
                  <button
                    type="button"
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white hover:text-red-400 transition"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                <div className="space-y-6 mt-[3rem]">
                  {navLinks.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block text-lg font-semibold transition font-roboto hover:text-emerald-400"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </Dialog.Panel>
            </motion.div>
          </Dialog>
        )}
      </AnimatePresence>



      {/* Floating Social Icons */}
      <TooltipProvider>
        <div className="fixed bottom-6 left-6 z-40 flex flex-col items-center gap-4 animate-bounce-once">
          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://x.com/manlike_favour"
                target="_blank"
                className="text-emerald-400 hover:text-[#1DA1F2] transition-all duration-200"
              >
                <FaXTwitter size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">Twitter / X</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://github.com/Nel-tech"
                target="_blank"
                className="text-emerald-400 hover:text-[#cdd9e5] transition-all duration-200"
              >
                <FaGithub size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">GitHub</TooltipContent>
          </Tooltip>

          <Tooltip>
            <TooltipTrigger asChild>
              <a
                href="https://wa.me/2349081715621"
                target="_blank"
                className="text-emerald-400 hover:text-[#25D366] transition-all duration-200"
              >
                <FaWhatsapp size={20} />
              </a>
            </TooltipTrigger>
            <TooltipContent side="right">WhatsApp</TooltipContent>
          </Tooltip>

          <span className="w-[1px] h-16 bg-white/20 mt-2"></span>
        </div>
      </TooltipProvider>

      {/* One-time bounce animation */}
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
