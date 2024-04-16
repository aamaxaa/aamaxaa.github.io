import React from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation from react-router-dom

function Navbar() {
  const location = useLocation(); // Use useLocation hook to get the current location

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent border-bottom">
      <div className="container">
        <a className="navbar-brand fs-4" href="/">
          <img src="Sesame.png" alt="Siamese Cat" width={55} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className={`nav-item ${location.pathname === "/" ? "active" : ""}`}>
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/projects" ? "active" : ""}`}>
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className={`nav-item ${location.pathname === "/resume" ? "active" : ""}`}>
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
          </ul>
          {/* <ul className="nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                <button className="btn btn-secondary">Contact Me</button>
              </Link>
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
