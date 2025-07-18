import { Handshake } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Stacks", href: "/stacks" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full flex justify-center mt-6">
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

        {/* CTA Button */}
        <Button className="ml-4 cursor-pointer font-roboto bg-[#6495ED] hover:bg-[#3B82F6] transition-colors text-white text-sm px-5 py-2 rounded-full flex items-center gap-2 font-semibold shadow-md">
          Work With Me <Handshake size={16} />
        </Button>
      </nav>
    </header>
  );
}
