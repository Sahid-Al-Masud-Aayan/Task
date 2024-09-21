import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-2 shadow-lg">
      <div className="flex justify-between items-center">
        {/* Logo */}
          <Link to="/">
          <img className='w-[200px] h-[40px]' src="logo.png" alt="logo" />
          </Link>
        {/* Toggle button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>

        {/* Navbar Links */}
        <div className={`md:flex ${isOpen ? 'block' : 'hidden'} w-full md:w-auto`}>
          <ul className="md:flex md:space-x-6">
            <li className="my-2 md:my-0">
              <Link to="/" className="hover:text-yellow-400 font-medium text-xl">
                Home
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="#products" className="hover:text-yellow-400 font-medium text-xl">
                Products
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="#about" className="hover:text-yellow-400 font-medium text-xl">
                About Us
              </Link>
            </li>
            <li className="my-2 md:my-0">
              <Link to="#contact" className="hover:text-yellow-400 font-medium text-xl">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

