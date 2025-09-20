import React, { useState, useEffect } from "react";

const Contact = () => {
  const [loaded, setLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      id="contact"
      className="text-gray-600 body-font relative bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div
          className={`flex flex-col text-center w-full mb-12 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Get In Touch
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Have a project in mind? Let's discuss how we can work together to
            bring your ideas to life.
          </p>
        </div>

        <div className="container px-5 mx-auto flex sm:flex-nowrap flex-wrap">
          {/* Map and Contact Info */}
          <div
            className={`lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative transition-all duration-700 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}>
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3410.079099887765!2d74.40271387446106!3d31.2739071743278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919af13c4a54c51%3A0x3b9c8fe24734b73b!2sRashid%20Latif%20Khan%20University%20(RLKU)!5e0!3m2!1sen!2s!4v1758304704283!5m2!1sen!2s"
              // style="border:0;"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              style={{
                filter: "grayscale(0.8) contrast(1.2) opacity(0.5)",
              }}></iframe>

            <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md transition-all duration-300 hover:shadow-xl">
              <div className="lg:w-1/2 px-6">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  ADDRESS
                </h2>
                <p className="mt-1">Rashid Latif Khan University</p>
                <p className="mt-1">Lahore, Pakistan</p>
              </div>
              <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                  EMAIL
                </h2>
                <a className="text-indigo-500 leading-relaxed hover:text-indigo-600 transition-colors duration-300">
                  maroofaffliliate@gmail.com
                </a>
                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                  PHONE
                </h2>
                <p className="leading-relaxed">+92 329 0519294</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 p-8 rounded-lg shadow-md transition-all duration-700 delay-100 ${
              loaded ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}>
            <h2 className="text-gray-900 text-2xl mb-2 font-bold title-font">
              Send a Message
            </h2>
            <p className="leading-relaxed mb-6 text-gray-600">
              Fill out the form below and I'll get back to you as soon as
              possible.
            </p>

            {isSubmitted ? (
              <div className="bg-green-100 text-green-700 p-4 rounded-lg mb-6 transition-all duration-300">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Thank you! Your message has been sent.</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="relative mb-4">
                  <label
                    htmlFor="name"
                    className="leading-7 text-sm text-gray-600 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                <div className="relative mb-4">
                  <label
                    htmlFor="email"
                    className="leading-7 text-sm text-gray-600 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    required
                  />
                </div>

                <div className="relative mb-6">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-600 font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    required></textarea>
                </div>

                <button
                  type="submit"
                  className="text-white bg-indigo-500 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg flex items-center justify-center">
                  Send Message
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 ml-2"
                    viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
              </form>
            )}

            <p className="text-xs text-gray-500 mt-6 text-center">
              I typically respond within 24 hours during weekdays.
            </p>

            {/* Social Links */}
            <div className="flex justify-center mt-8 space-x-5">
              {[
                {
                  icon: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z",
                  label: "Facebook",
                },
                {
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                  label: "Twitter",
                },
                {
                  icon: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01",
                  label: "Instagram",
                },
                {
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                  label: "LinkedIn",
                },
              ].map((social, index) => (
                <a
                  key={index}
                  className="text-gray-500 hover:text-indigo-500 transition-colors duration-300"
                  href="#">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24">
                    <path d={social.icon}></path>
                  </svg>
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
