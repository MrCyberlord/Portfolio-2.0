import Image from "next/image";
import Navbar from './components/main/Navbar'
import Hero from "./components/main/Hero";

export default function Home() {
  return (
    
      <div className="bg-[#242424] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      {/* <Navbar /> */}
      <section id="hero" className="snap-center">
        <Hero />
      </section>
      
      </div>
    
  );
}
