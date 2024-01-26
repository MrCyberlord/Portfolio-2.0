import Navbar from '../components/main/Navbar'
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Footer from '@/components/main/Footer';
import Hero from "@/components/main/Hero";
import Projects from '@/components/main/Projects';
import Skills from '@/components/main/Skills';

export default function Home() {
  return (
    
      <div className="bg-[#242424] text-white h-full w-screen z-0">
        
      <Navbar />
      <section id="hero" className='overflow-hidden'>
        <Hero />
      </section> 
        
      <section id="about">
        <About />
      </section> 

      <section id="skills" >
        <Skills />
      </section> 

      <section id="projects">
        <Projects />
      </section>  
      
      <section id="contact">
        <Contact />
      </section> 

      </div>
    
  );
}
