import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const linkBase = "transition-colors font-bold";
  const linkColor = isScrolled
    ? "text-primary hover:text-accent"
    : "text-white hover:text-accent";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img
              src={logo}
              alt="Pure Vent Services"
              className={`${isScrolled ? "h-12 md:h-16" : "h-16 md:h-20"} transition-all duration-300`}
            />
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection("hero")} className={`${linkBase} ${linkColor}`}>
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className={`${linkBase} ${linkColor}`}>
              About
            </button>
            <button onClick={() => scrollToSection("services")} className={`${linkBase} ${linkColor}`}>
              Services
            </button>
            <button onClick={() => scrollToSection("pricing")} className={`${linkBase} ${linkColor}`}>
              Pricing
            </button>
            <button onClick={() => scrollToSection("gallery")} className={`${linkBase} ${linkColor}`}>
              Gallery
            </button>
            <button onClick={() => scrollToSection("contact")} className={`${linkBase} ${linkColor}`}>
              Contact
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
