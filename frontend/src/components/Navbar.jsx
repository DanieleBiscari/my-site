import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHome, FaInfoCircle, FaLaptop, FaProjectDiagram, FaPhoneAlt } from "react-icons/fa"; // Aggiunta delle icone

// eslint-disable-next-line react/prop-types
const Navbar = ({ block = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (block) return; // Se block è true, non eseguiamo l'effetto scroll

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setIsFixed(false);
        setShowNavbar(true);
      } else {
        setIsFixed(true);
        if (currentScrollY < lastScrollY) {
          setShowNavbar(true);
        } else {
          setShowNavbar(false);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, block]);

  // Classe base per la navbar
  const navBaseClasses = `
    w-full z-50
    ${block ? "relative bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400" : isFixed ? "fixed top-0" : "relative"}
    ${
      block
        ? ""
        : isFixed
        ? "bg-white/40 backdrop-blur-lg shadow-md"
        : "bg-transparent"
    }
    ${block ? "" : "transition-all duration-300 ease-in-out"}
    ${
      block
        ? ""
        : showNavbar
        ? "opacity-100 translate-y-0"
        : "opacity-0 -translate-y-full"
    }
  `;

  return (
    <nav className={navBaseClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center h-16 items-center">
          {/* Menu desktop */}
          <div className="hidden md:flex space-x-20">
            <NavLink
              to="/"
              className="text-gray-800 hover:text-blue-600 font-medium flex items-center space-x-2 transition duration-300"
            >
              <FaHome />
              <span>Home</span>
            </NavLink>
            <NavLink
              to="/about"
              className="text-gray-800 hover:text-blue-600 font-medium flex items-center space-x-2 transition duration-300"
            >
              <FaInfoCircle />
              <span>About</span>
            </NavLink>
            <NavLink
              to="/tech"
              className="text-gray-800 hover:text-blue-600 font-medium flex items-center space-x-2 transition duration-300"
            >
              <FaLaptop />
              <span>Techs</span>
            </NavLink>
            <NavLink
              to="/projects"
              className="text-gray-800 hover:text-blue-600 font-medium flex items-center space-x-2 transition duration-300"
            >
              <FaProjectDiagram />
              <span>Projects</span>
            </NavLink>
            <NavLink
              to="/contact"
              className="text-gray-800 hover:text-blue-600 font-medium flex items-center space-x-2 transition duration-300"
            >
              <FaPhoneAlt />
              <span>Contact</span>
            </NavLink>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none text-2xl"
            >
              {isOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 backdrop-blur-lg bg-white/60 transition-all ease-in-out duration-300">
          <Link
            to="#"
            className="text-gray-800 py-2 hover:text-blue-600 font-medium flex items-center space-x-2"
          >
            <FaHome />
            <span>Home</span>
          </Link>
          <Link
            to="#"
            className="text-gray-800 py-2 hover:text-blue-600 font-medium flex items-center space-x-2"
          >
            <FaInfoCircle />
            <span>About</span>
          </Link>
          <Link
            to="#"
            className="text-gray-800 py-2 hover:text-blue-600 font-medium flex items-center space-x-2"
          >
            <FaLaptop />
            <span>Services</span>
          </Link>
          <Link
            to="#"
            className="text-gray-800 py-2 hover:text-blue-600 font-medium flex items-center space-x-2"
          >
            <FaPhoneAlt />
            <span>Contact</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
