import React from "react";

function Footer() {
  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          {/* Column 1 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 transition-all duration-300 hover:translate-x-1">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {["First", "Second", "Third", "Fourth"].map((link, index) => (
                <li key={index} className="mb-2">
                  <a className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 ease-in-out transform hover:translate-x-1 block py-1">
                    {link} Link
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Column 2 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 transition-all duration-300 hover:translate-x-1">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {["First", "Second", "Third", "Fourth"].map((link, index) => (
                <li key={index} className="mb-2">
                  <a className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 ease-in-out transform hover:translate-x-1 block py-1">
                    {link} Link
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Column 3 */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 transition-all duration-300 hover:translate-x-1">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10">
              {["First", "Second", "Third", "Fourth"].map((link, index) => (
                <li key={index} className="mb-2">
                  <a className="text-gray-600 hover:text-indigo-500 transition-colors duration-300 ease-in-out transform hover:translate-x-1 block py-1">
                    {link} Link
                  </a>
                </li>
              ))}
            </nav>
          </div>

          {/* Column 4 - Subscribe */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 transition-all duration-300 hover:translate-x-1">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600 transition-colors duration-300">
                  Placeholder
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-all duration-300 ease-in-out hover:shadow-md focus:scale-105"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg active:scale-95">
                Button
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Bitters chicharrones fanny pack
              <br className="lg:block hidden" />
              waistcoat green juice
            </p>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-100 transition-colors duration-300 hover:bg-gray-200">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 transition-transform duration-300 hover:scale-105">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full transition-colors duration-300 hover:bg-indigo-600"
              viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl transition-colors duration-300 hover:text-indigo-500">
              Maroof Ahmad
            </span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            © 2020 Tailblocks —
            <a
              href="https://twitter.com/knyttneve"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1 transition-colors duration-300 hover:text-indigo-500"
              target="_blank">
              @knyttneve
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            {[
              "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
              "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
              "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
              "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
            ].map((path, index) => (
              <a
                key={index}
                className={`text-gray-500 ml-${
                  index > 0 ? 3 : 0
                } transition-all duration-300 transform hover:scale-125 hover:text-indigo-500`}>
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24">
                  <path d={path}></path>
                  {index === 2 && (
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"></rect>
                  )}
                  {index === 3 && (
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  )}
                </svg>
              </a>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
