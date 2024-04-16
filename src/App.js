import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Resume from "./pages/resume";
import Projects from "./pages/projects.js";
import Contact from "./pages/contact.js";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
