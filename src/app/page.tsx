import About from "@/sections/About";
import Contact from "@/sections/Contact";
import Header from "@/sections/Header";
import Herosection from "@/sections/Herosection";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Services from "@/sections/Services";
import Testimonials from "@/sections/Testimonials";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#0D0F14] text-foreground font-sans selection:bg-[#FACC15] selection:text-black">
      <Header />
      <main>
        <div id="home">
          <Herosection />
        </div>
        <div id="services">
          <Services />
        </div>
        <div id="projects">
          <Projects />
        </div>
        <div id="experience">
          <Experience />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </main>
    </div>
  );
}
