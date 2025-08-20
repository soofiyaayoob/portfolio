import Image from "next/image";
import Navbar from "@/compoenents/Navbar";
import Intro from "@/compoenents/Intro";
import About from "@/compoenents/About";
import Contact from "@/compoenents/Contact";
import Works from "@/compoenents/Works";
import Footer from "@/compoenents/Footer";
import Benefits from "@/compoenents/Benfits";
export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <About/>
      <Benefits/>
      <Works/>      <Contact/>
      <Footer/>
    </div>
  );
}
