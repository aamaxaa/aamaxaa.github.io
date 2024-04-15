import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navigation/Navbar.js";
import Music from "./pages/musicPlayer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Resume from "./pages/resume";
import DataVis from "./pages/dataVis";
import MovieList from "./pages/movieList.js";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/dataVis" element={<DataVis />} />
        <Route path="/movieList" element={<MovieList />} />
      </Routes>
    </Router>
  );
}
