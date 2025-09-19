import React from "react";
import Header from "./ui/components/header";
import Home from "./ui/navigations/home";
import About from "./ui/navigations/About";
import Services from "./ui/navigations/services";
import Resume from "./ui/navigations/Resume";
import Contact from "./ui/navigations/contact";
import Footer from "./ui/components/footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
