import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target as Node) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav
        id="navbar"
        className={`fixed w-full z-40 transition-all duration-300 ${
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
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2">
                <a
                  href="#home"
                  className="text-gray-700 hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition"
                >
                  About
                </a>
                <a
                  href="#experience"
                  className="text-gray-700 hover:text-primary px-2 py-2 rounded-md text-sm font-medium transition"
                >
                  Experience
                </a>
              </div>
              <button
                id="menu-button"
                className="text-gray-700 hover:text-primary focus:outline-none p-2 rounded-md border border-gray-200 hover:bg-gray-50"
                onClick={toggleMenu}
                aria-label="Open menu"
              >
                <svg
                  className="h-5 w-5"
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
      </nav>

      {/* Drawer Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-50 block" : "opacity-0 hidden"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Drawer Menu */}
      <div
        ref={drawerRef}
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-heading font-bold text-primary">Menu</h2>
          <button
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
            onClick={closeMenu}
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="py-4 px-6 overflow-y-auto">
          <ul className="space-y-4">
            <li>
              <a
                href="#home"
                className="block py-2 text-gray-700 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 text-gray-700 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={closeMenu}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#experience"
                className="block py-2 text-gray-700 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Experience
              </a>
            </li>
            <li>
              <a
                href="#expertise"
                className="block py-2 text-gray-700 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Expertise
              </a>
            </li>
            <li>
              <a
                href="#education"
                className="block py-2 text-gray-700 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Education
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="block py-2 text-gray-700 hover:text-primary border-b border-gray-100 transition-colors"
                onClick={closeMenu}
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="block py-2 text-gray-700 hover:text-primary transition-colors"
                onClick={closeMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
