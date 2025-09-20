import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Placeholder components for the different pages
// const OffCanvas = () => (
//   <main className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
//     <div className="text-center">
//       <h1 className="text-4xl font-extrabold text-blue-800">Welcome Home!</h1>
//       <p className="mt-4 text-xl text-gray-600">
//         This is the main content area.
//       </p>
//     </div>
//   </main>
// );
// const OffCanvas = () => (
//   <main className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
//     <div className="text-center">
//       <h1 className="text-4xl font-extrabold text-blue-800">About Us</h1>
//       <p className="mt-4 text-xl text-gray-600">
//         Learn more about our mission.
//       </p>
//     </div>
//   </main>
// );
// const Services = () => (
//   <main className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
//     <div className="text-center">
//       <h1 className="text-4xl font-extrabold text-blue-800">Our Services</h1>
//       <p className="mt-4 text-xl text-gray-600">
//         Explore the services we offer.
//       </p>
//     </div>
//   </main>
// );
// const Resume = () => (
//   <main className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
//     <div className="text-center">
//       <h1 className="text-4xl font-extrabold text-blue-800">My Resume</h1>
//       <p className="mt-4 text-xl text-gray-600">
//         Details about my professional background.
//       </p>
//     </div>
//   </main>
// );
// const Contact = () => (
//   <main className="min-h-screen p-8 flex items-center justify-center bg-gray-50">
//     <div className="text-center">
//       <h1 className="text-4xl font-extrabold text-blue-800">Contact Me</h1>
//       <p className="mt-4 text-xl text-gray-600">Get in touch with us.</p>
//     </div>
//   </main>
// );

const OffCanvas = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="text-gray-600 body-font shadow-sm bg-white sticky top-0 z-50">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Hamburger Menu Button - Visible on Mobile */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 transition-colors duration-300"
            aria-label="Open menu">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>

          {/* Brand Logo and Name */}
          <Link
            to="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 cursor-pointer group">
            <span className="ml-3 text-2xl text-blue-500 transition-all duration-300 ease-out font-extrabold group-hover:text-indigo-800">
              Maroof Ahmad
            </span>
          </Link>

          {/* Navigation Links - Hidden on Mobile, Flex on Desktop */}
          <nav className="hidden md:flex lg:w-2/5 flex-wrap items-center text-base text-blue-300 md:ml-auto justify-around">
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

          {/* Button */}
          <div className="lg:w-2/5 lg:justify-end ml-5 lg:ml-0 hidden md:inline-flex">
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

      {/* Off-Canvas Menu - Visible on Mobile */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black bg-opacity-50 z-[60] transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMobileMenu} // Close menu when clicking outside
      >
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white shadow-xl transition-transform duration-500 ease-in-out z-[70] p-6 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={(e) => e.stopPropagation()} // Prevent closing menu on internal clicks
        >
          <div className="flex justify-between items-center mb-6">
            <span className="text-xl font-bold text-blue-800">Navigation</span>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 transition-colors duration-300"
              aria-label="Close menu">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <nav className="flex flex-col space-y-4 text-blue-500">
            <Link
              to="/"
              className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
              onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
              onClick={toggleMobileMenu}>
              About
            </Link>
            <Link
              to="/services"
              className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
              onClick={toggleMobileMenu}>
              Services
            </Link>
            <Link
              to="/resume"
              className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
              onClick={toggleMobileMenu}>
              Resume
            </Link>
            <Link
              to="/contact"
              className="text-lg font-medium hover:text-blue-700 transition-colors duration-200"
              onClick={toggleMobileMenu}>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};
export default OffCanvas;

// const App = () => {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
