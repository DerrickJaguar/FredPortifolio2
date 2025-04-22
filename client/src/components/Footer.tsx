import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-heading font-bold">Fred Walyaula</h2>
            <p className="text-gray-400 mt-2">Community Development Specialist</p>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <a href="#home" className="text-gray-400 hover:text-white transition text-center md:text-left">
              Home
            </a>
            <a href="#about" className="text-gray-400 hover:text-white transition text-center md:text-left">
              About
            </a>
            <a href="#experience" className="text-gray-400 hover:text-white transition text-center md:text-left">
              Experience
            </a>
            <a href="#expertise" className="text-gray-400 hover:text-white transition text-center md:text-left">
              Expertise
            </a>
            <a href="#education" className="text-gray-400 hover:text-white transition text-center md:text-left">
              Education
            </a>
          </div>

          <div className="mt-6 md:mt-0">
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-gray-700 hover:bg-primary text-white p-2 rounded-full transition-colors duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-primary text-white p-2 rounded-full transition-colors duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="bg-gray-700 hover:bg-primary text-white p-2 rounded-full transition-colors duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Fred Walyaula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
