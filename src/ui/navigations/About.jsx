import React, { useState, useEffect } from "react";
const About = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setLoaded(true);
  }, []);

  return (
    <section className="text-gray-600 body-font py-24 bg-gray-50 mx-[20px]">
      <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
        <div
          className={`lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 transition-all duration-1000 ease-out transform ${
            loaded ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
          }`}>
          <div className="relative group w-[500px]">
            <img
              className="object-cover object-center rounded-2xl shadow-lg transition-all duration-700 group-hover:shadow-2xl group-hover:scale-105 w-[100%]"
              alt="Profile"
              src="https://images.unsplash.com/photo-1665504908551-16e7f6255adc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODB8fHByb2Zlc2lvbmFsJTIwcGljdHVyZSUyMG9mJTIwbWFuJTIwc3RhbmRpbmclMjBmcm9udCUyMG9mJTIwbGFwdG9wc3xlbnwwfHwwfHx8MA%3D%3D"
            />
            <div className="absolute -inset-4 border-2 border-indigo-200 rounded-2xl -z-10 transition-all duration-700 group-hover:border-indigo-400 group-hover:scale-105"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-gradient-to-t from-black/70 to-transparent p-4 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <p className="text-white text-sm">
                Creative Developer & Designer
              </p>
            </div>
          </div>
        </div>
        <div
          className={`lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center transition-all duration-1000 delay-300 ease-out transform ${
            loaded ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
          }`}>
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-medium text-gray-900">
            <span className="inline-block transition-all duration-500 hover:text-indigo-600 hover:scale-105">
              About Me
            </span>
          </h1>
          <p className="mb-6 leading-relaxed text-lg transition-all duration-500 hover:text-gray-800">
            I'm a passionate frontend developer and UI/UX designer with over 5
            years of experience creating digital experiences that users love. I
            specialize in React, JavaScript, and modern CSS frameworks.
          </p>
          <p className="mb-8 leading-relaxed text-lg transition-all duration-500 hover:text-gray-800">
            My approach combines technical expertise with creative design
            thinking to build solutions that are not only functional but also
            aesthetically pleasing and intuitive to use.
          </p>

          <div className="w-full mb-8">
            <div className="flex flex-wrap -m-2">
              {[
                { skill: "React", level: 90 },
                { skill: "JavaScript", level: 85 },
                { skill: "UI/UX Design", level: 80 },
                { skill: "CSS/SCSS", level: 95 },
              ].map((item, index) => (
                <div key={index} className="p-2 w-1/2">
                  <div className="relative pt-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-indigo-600 transition-all duration-300 hover:text-indigo-800">
                        {item.skill}
                      </span>
                      <span className="text-xs font-semibold text-indigo-600">
                        {item.level}%
                      </span>
                    </div>
                    <div className="overflow-hidden h-2 bg-gray-200 rounded">
                      <div
                        className="h-full bg-indigo-500 rounded transition-all duration-1000 ease-out"
                        style={{
                          width: loaded ? `${item.level}%` : "0%",
                        }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-4">
            <button className="inline-flex items-center text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              My Projects
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5 ml-2 transition-transform duration-300 hover:translate-x-1"
                viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
            <button className="inline-flex items-center text-gray-700 bg-gray-100 border-0 py-3 px-8 focus:outline-none hover:bg-gray-200 rounded-lg text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl">
              Contact Me
              <svg
                className="w-5 h-5 ml-2 transition-transform duration-300 hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
