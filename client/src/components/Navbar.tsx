import { useState, useEffect } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav
      id="navbar"
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-md" : "bg-white shadow-md"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="#home" className="text-primary font-heading font-bold text-xl">
              Fred Walyaula
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#home"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Experience
            </a>
            <a
              href="#expertise"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Expertise
            </a>
            <a
              href="#education"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-button"
              className="text-gray-700 hover:text-primary focus:outline-none"
              onClick={toggleMenu}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-white shadow-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a
            href="#home"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="#about"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="#experience"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            Experience
          </a>
          <a
            href="#expertise"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            Expertise
          </a>
          <a
            href="#education"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            Education
          </a>
          <a
            href="#projects"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50"
            onClick={closeMenu}
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
