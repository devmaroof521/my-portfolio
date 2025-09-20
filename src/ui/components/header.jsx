import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="text-gray-600 body-font shadow-sm">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Navigation Links */}
        <nav className="flex lg:w-2/5 flex-wrap items-center text-base text-blue-300 md:ml-auto justify-around">
          <Link
            to="/"
            className="mr-5 hover:text-gray-900 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer relative group">
            Home
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/about"
            className="mr-5 hover:text-gray-900 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer relative group">
            About
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/services"
            className="mr-5 hover:text-gray-900 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer relative group">
            Services
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/resume"
            className="mr-5 hover:text-gray-900 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer relative group">
            Resume
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
          <Link
            to="/contact"
            className="hover:text-gray-900 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 cursor-pointer relative group">
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-indigo-500 transition-all duration-300 ease-out group-hover:w-full"></span>
          </Link>
        </nav>

        {/* Brand Logo and Name */}
        <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 cursor-pointer group">
          <span className="ml-3 text-2xl text-blue-500 transition-all duration-300 ease-out font-extrabold group-hover:text-indigo-800">
            Maroof Ahmad
          </span>
        </a>

        {/* Button */}
        <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
          <Link to="/contact">
            <button className="inline-flex items-center bg-blue-300 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0 transition-all duration-300 ease-out transform hover:scale-105 active:scale-95 active:bg-gray-300 cursor-pointer shadow-sm hover:shadow-md">
              Button
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
