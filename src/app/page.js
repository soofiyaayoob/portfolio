import Image from "next/image";
import Navbar from "@/compoenents/Navbar";
import Intro from "@/compoenents/Intro";
import About from "@/compoenents/About";
import Contact from "@/compoenents/Contact";
import Works from "@/compoenents/Works";
import Footer from "@/compoenents/Footer";
export default function Home() {
  return (
    <div className="main">
      <Navbar />
      <Intro />
      <About/>
      <Works/>      <Contact/>
      <Footer/>
    </div>
  );
}
