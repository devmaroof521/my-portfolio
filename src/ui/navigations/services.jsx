import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [loaded, setLoaded] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const services = [
    {
      title: "Frontend Development",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
        </svg>
      ),
      description:
        "Creating responsive and interactive user interfaces with modern frameworks.",
      features: [
        "React/Next.js Development",
        "Responsive UI/UX Design",
        "Performance Optimization",
        "Cross-browser Compatibility",
        "Progressive Web Apps",
      ],
    },
    {
      title: "Backend Development",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"></path>
        </svg>
      ),
      description:
        "Building robust server-side applications and APIs for seamless functionality.",
      features: [
        "REST/GraphQL API Development",
        "Database Design & Optimization",
        "Server Configuration & Deployment",
        "Authentication & Authorization",
        "Cloud Integration",
      ],
    },
    {
      title: "Full Stack Solutions",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M17 14v6m-3-3h6M6 10h2a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6a2 2 0 012-2zm10-4a2 2 0 11-4 0 2 2 0 014 0zM4 6a2 2 0 100 4h16a2 2 0 100-4H4z"></path>
        </svg>
      ),
      description:
        "End-to-end web application development from concept to deployment.",
      features: [
        "Custom Web Application Development",
        "Database Design & Management",
        "DevOps & CI/CD Pipeline",
        "Third-party API Integration",
        "Maintenance & Support",
      ],
      popular: true,
    },
    {
      title: "UI/UX Design",
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
        </svg>
      ),
      description:
        "Creating intuitive and engaging user experiences with modern design principles.",
      features: [
        "User Interface Design",
        "User Experience Research",
        "Wireframing & Prototyping",
        "Design Systems",
        "Usability Testing",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="text-gray-800 body-font py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container px-5 mx-auto">
        <div
          className={`flex flex-col text-center w-full mb-16 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-gray-900">
            Development Services
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-xl text-gray-600">
            Comprehensive web development services to bring your digital ideas
            to life
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        {/* Service Tabs */}
        <div
          className={`flex flex-wrap justify-center mb-12 transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {services.map((service, index) => (
            <button
              key={index}
              className={`mx-2 my-2 py-3 px-6 rounded-lg text-lg font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg ${
                activeService === index
                  ? "bg-indigo-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              onClick={() => setActiveService(index)}>
              {service.title}
            </button>
          ))}
        </div>

        {/* Service Details - Show only the active service */}
        <div
          className={`flex justify-center transition-all duration-700 delay-200 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <div className="p-4 w-full max-w-4xl">
            <div className="h-full p-8 rounded-xl bg-white shadow-lg flex flex-col relative overflow-hidden transition-all duration-300 hover:shadow-xl">
              {services[activeService].popular && (
                <span className="bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl-lg">
                  POPULAR
                </span>
              )}
              <div className="text-indigo-500 mb-6">
                {services[activeService].icon}
              </div>
              <h2 className="text-2xl font-bold title-font mb-4 text-gray-900">
                {services[activeService].title}
              </h2>
              <p className="text-gray-600 mb-6">
                {services[activeService].description}
              </p>
              <ul className="space-y-3 mb-8 flex-grow">
                {services[activeService].features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center transition-all duration-300 hover:translate-x-1">
                    <span className="w-5 h-5 mr-2 inline-flex items-center justify-center bg-green-100 text-green-500 rounded-full flex-shrink-0">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2.5"
                        className="w-3 h-3"
                        viewBox="0 0 24 24">
                        <path d="M20 6L9 17l-5-5"></path>
                      </svg>
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Link to="/about">
                  <button className="flex items-center mt-auto text-white bg-indigo-500 border-0 py-3 px-6 w-full focus:outline-none hover:bg-indigo-600 rounded-lg transition-all duration-300 transform hover:scale-105">
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-auto"
                      viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
