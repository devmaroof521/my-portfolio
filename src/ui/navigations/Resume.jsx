import React, { useState, useEffect } from "react";

const Resume = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const experiences = [
    {
      title: "Senior Software Architect",
      period: "2022 - Present",
      company: "Tech Innovations Inc.",
      details: [
        "Lead the architectural design and implementation of enterprise-scale applications",
        "Mentor team of 12 developers and establish technical best practices",
        "Drive adoption of microservices architecture and cloud-native solutions",
        "Reduce system latency by 40% through architectural optimizations",
      ],
    },
    {
      title: "Lead Developer",
      period: "2019 - 2022",
      company: "Digital Solutions LLC",
      details: [
        "Managed development of customer-facing web applications",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Introduced test automation practices improving code quality",
        "Collaborated with UX team to enhance user experience metrics",
      ],
    },
    {
      title: "Software Engineer",
      period: "2024 - Present",
      company: "WebTech Innovations",
      details: [
        "Developed responsive web applications using React and Node.js",
        "Optimized application performance leading to 30% faster load times",
        "Participated in code reviews and architectural discussions",
        "Created reusable component library saving 15% development time",
      ],
    },
  ];

  const education = [
    {
      degree: "BSc in Computer Science",
      period: "2023 - Continue",
      institution: "Virtual University",
      details: [
        "Minor in User Experience Design",
        "President of Computer Science Student Association",
        "Recipient of Academic Excellence Scholarship",
      ],
    },
  ];

  const skills = [
    { skill: "React", level: 95 },
    { skill: "Node.js", level: 90 },
    { skill: "TypeScript", level: 85 },
    { skill: "UI/UX Design", level: 75 },
    { skill: "DevOps", level: 70 },
  ];

  return (
    <section
      id="resume"
      className="text-gray-800 body-font py-16 bg-gradient-to-br from-gray-50 to-indigo-50">
      <div className="container px-5 mx-auto">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h1 className="text-4xl font-bold title-font mb-4 text-gray-900">
            My Resume
          </h1>
          <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Experienced software architect and developer with a passion for
            creating efficient, scalable solutions that deliver exceptional user
            experiences.
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
          </div>
        </div>

        <div
          className={`flex flex-col lg:flex-row -mx-4 transition-all duration-700 delay-100 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {/* Left Column - Photo & Personal Info */}
          <div className="w-full lg:w-1/3 px-4 mb-10 lg:mb-0">
            <div className="bg-white p-8 rounded-2xl shadow-lg sticky top-8 transition-all duration-300 hover:shadow-xl">
              <div className="flex flex-col items-center mb-6">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-indigo-100 shadow-md mb-4 transition-all duration-500 hover:scale-105 hover:border-indigo-300">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Maroof Ahmad
                </h2>
                <p className="text-indigo-600 font-medium">
                  Senior Software Architect
                </p>
              </div>

              <div className="space-y-5">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                    </svg>
                    Contact Info
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span>maroofaffliliate@gmail.com</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                      </svg>
                      <span>+92 329 0519294</span>
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-4 h-4 text-indigo-500 mr-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span>Rashid Latif Khan University Lahore, Pakistan</span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    Skills
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {skills.slice(0, 6).map((skill, index) => (
                      <div
                        key={index}
                        className="bg-indigo-50 px-3 py-1 rounded-full text-center transition-all duration-300 hover:bg-indigo-100 hover:scale-105">
                        <span className="text-sm font-medium text-indigo-700">
                          {skill.skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                    </svg>
                    Interests
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Photography",
                      "Traveling",
                      "Reading",
                      "Hiking",
                      "Music",
                    ].map((interest, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm transition-all duration-300 hover:bg-indigo-100 hover:text-indigo-700">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Education */}
          <div className="w-full lg:w-2/3 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
              {/* Professional Experience */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-indigo-100 flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  Professional Experience
                </h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div
                      key={index}
                      className={`flex transition-all duration-500 delay-${
                        index * 100
                      } ${
                        loaded
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-5"
                      }`}>
                      <div className="mr-6 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {exp.title}
                        </h3>
                        <p className="text-indigo-600 font-medium mb-2">
                          {exp.company} | {exp.period}
                        </p>
                        <ul className="space-y-2">
                          {exp.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start transition-all duration-300 hover:translate-x-2">
                              <span className="text-indigo-500 mr-2 mt-1">
                                •
                              </span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-indigo-100 flex items-center">
                  <svg
                    className="w-6 h-6 text-indigo-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5z"></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path>
                  </svg>
                  Education
                </h2>
                <div className="space-y-8">
                  {education.map((edu, index) => (
                    <div
                      key={index}
                      className={`flex transition-all duration-500 delay-${
                        index * 100
                      } ${
                        loaded
                          ? "opacity-100 translate-x-0"
                          : "opacity-0 -translate-x-5"
                      }`}>
                      <div className="mr-6 flex-shrink-0">
                        <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
                          <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                            <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6"></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900">
                          {edu.degree}
                        </h3>
                        <p className="text-indigo-600 font-medium mb-2">
                          {edu.institution} | {edu.period}
                        </p>
                        <ul className="space-y-2">
                          {edu.details.map((detail, i) => (
                            <li
                              key={i}
                              className="flex items-start transition-all duration-300 hover:translate-x-2">
                              <span className="text-indigo-500 mr-2 mt-1">
                                •
                              </span>
                              <span className="text-gray-700">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Skills Progress */}
            <div className="mt-8 bg-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <svg
                  className="w-6 h-6 text-indigo-500 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
                Technical Proficiency
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((item, index) => (
                  <div
                    key={index}
                    className="transition-all duration-500 hover:-translate-y-1">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-gray-800">
                        {item.skill}
                      </span>
                      <span className="text-indigo-600">{item.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className="bg-indigo-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: loaded ? `${item.level}%` : "0%",
                        }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
