
import Nav from '@/components/Nav'
import HeroSection from '@/components/HeroSection'
import Projects from "@/components/Projects";
import About from '@/components/about';
import TechStacks from '@/components/TechStacks';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div>
     <Nav/>
     <HeroSection/>
     <Projects/>
     <About/>
     <TechStacks/>
     <Footer/>
    </div>
  );
}
