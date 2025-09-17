import Hero from "@/components/Hero";
import Particles from "@/components/Particles";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Project from "@/components/ProjectSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-6 py-4 z-0">
        <Particles />
        <Hero />
        <About />
        <Experience />
        <Project />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
