import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <section className="text-gray-600 body-font min-h-screen flex items-center">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div
          className={`lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center transition-all duration-1000 ease-out transform ${
            loaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-medium text-gray-900">
            <span className="inline-block transition-all duration-700 delay-100 hover:text-indigo-600 hover:scale-105">
              Creative{" "}
              <span className="text-indigo-600 hover:text-gray-900">
                Developer
              </span>
            </span>
            <br className="hidden lg:inline-block" />
            <span className="inline-block mt-2 transition-all duration-700 delay-200 hover:text-indigo-600 hover:scale-105">
              &{" "}
              <span className="text-indigo-600 hover:text-gray-900">
                Digital
              </span>{" "}
              Designer
            </span>
          </h1>
          <p className="mb-8 leading-relaxed text-lg transition-all duration-1000 delay-300">
            I create engaging digital experiences that blend innovative design
            with cutting-edge technology. With expertise in frontend development
            and user-centered design, I build solutions that are both beautiful
            and functional.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/resume">
              <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
                View My Work
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            </Link>

            <button className="inline-flex items-center text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Download CV
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
              </svg>
            </button>
          </div>
          <div className="mt-12 flex space-x-6">
            {["React", "Node.js", "UI/UX", "WebGL"].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-indigo-50 text-indigo-600 rounded-full text-sm font-medium transition-all duration-300 hover:bg-indigo-100 hover:scale-110">
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div
          className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 transition-all duration-1000 delay-500 ease-out transform ${
            loaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
          <div className="relative">
            <img
              className="object-cover object-center rounded-2xl shadow-xl transition-all duration-700 hover:shadow-2xl hover:scale-105"
              alt="Portfolio Display"
              src="https://images.unsplash.com/photo-1586244346435-9babe873ec82?q=80&w=1236&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <div className="absolute -inset-4 border-2 border-indigo-200 rounded-2xl -z-10 transition-all duration-700 group-hover:border-indigo-400"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
