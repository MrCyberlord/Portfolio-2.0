import Navbar from '../components/main/Navbar'
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

export default function Home() {
  return (
    
      <div className="bg-[#242424] text-white h-full snap-y snap-mandatory  z-0">
        
      <Navbar />
      <section id="hero" className="snap-center">
        <Hero />
      </section> 
        
      <section id="about" className="snap-center">
        <About />
      </section> 

      <section id="skills" className="snap-center">
        <Skills />
      </section> 

      <section id="projects" className="snap-center">
        <Projects />
      </section>  
      
      <section id="contact" className="snap-center">
        <Contact />
      </section> 

      </div>
    
  );
}
