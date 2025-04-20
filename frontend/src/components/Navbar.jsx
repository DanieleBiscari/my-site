import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-blue-600">MyLogo</div>

          {/* Menu desktop */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Services
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600">
              Contact
            </a>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isOpen ? (
                <span>X</span>
              ) : (
                <span>O</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#" className="block text-gray-700 py-2 hover:text-blue-600">
            Home
          </a>
          <a href="#" className="block text-gray-700 py-2 hover:text-blue-600">
            About
          </a>
          <a href="#" className="block text-gray-700 py-2 hover:text-blue-600">
            Services
          </a>
          <a href="#" className="block text-gray-700 py-2 hover:text-blue-600">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
