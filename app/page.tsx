import Image from "next/image";
import Navbar from '../components/main/Navbar'
import Hero from "../components/main/Hero";
import About from "@/components/main/About";

export default function Home() {
  return (
    
      <div className="bg-[#242424] text-white h-full snap-y snap-mandatory  z-0">
      {/* <Navbar /> */}
      <section id="hero" className="snap-center">
        <Hero />
        <About />
      </section>
      
      </div>
    
  );
}
