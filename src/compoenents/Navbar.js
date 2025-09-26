"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("intro");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("[data-section]");
      const scrollY = window.pageYOffset;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("data-section");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.querySelector(`[data-section="${sectionId}"]`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { id: "intro", label: "Intro" },
    { id: "about", label: "About" },
     { id: "whyme", label: "Why-Me" },
    { id: "works", label: "Works" },
    { id: "contact", label: "Say Hello" },
  ];

  return (
    <motion.header
      className={`top-0 border-b rounded-b-xl`}
      style={{ backgroundColor: "#D9C99A" }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <nav className="top-0 border-b">
        <div>
          <div className="flex items-center justify-between h-16 px-6">
          
            <div className="text-xl font-bold tracking-tight" style={{ color: "#48643C" }}>
              SOOFIYA
            </div>

          
            <div className="hidden md:flex items-center justify-around space-x-20">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-md font-medium transition-colors pb-1 tracking-widest"
                  style={{
                    color: activeSection === item.id ? "#26401B" : "#48643C",
                    borderBottom:
                      activeSection === item.id ? "2px solid #26401B" : "2px solid transparent",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>

          
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
              style={{ color: "#48643C" }}
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={28} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </nav>

  
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute right-0 left-0 m-2.5 border-b z-100 rounded-b-xl box-border"
            style={{ backgroundColor: "#D9C99A", borderColor: "#26401B" , maxWidth: "calc(100% - 1.25rem)",}}
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <nav className="p-6 flex flex-col space-y-4 items-center ">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-lg font-medium transition-colors duration-300 pb-1"
                  style={{
                    color: activeSection === item.id ? "#26401B" : "#48643C",
                  }}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
