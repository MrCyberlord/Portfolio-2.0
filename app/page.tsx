import Navbar from '../components/main/Navbar'
import About from "@/components/main/About";
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";

export default function Home() {
  return (
    
      <div className="bg-[#242424] text-white h-full snap-y snap-mandatory  z-0">
      {/* <Navbar /> */}
      <section id="hero" className="snap-center">
        <Hero />
        <About />
        <Contact />
      </section>
      
      </div>
    
  );
}
