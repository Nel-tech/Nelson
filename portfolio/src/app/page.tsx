import Image from "next/image";
import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div>
     <Nav/>
     <HeroSection/>
     <Projects/>
    </div>
  );
}
