import React from "react";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
      <a className="navbar-brand" href="/">
        Maxine's Web
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
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="/music"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Projects
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="/music">
                Music Player
              </a>
              <a className="dropdown-item" href="/dataVis">
                Data Visualization
              </a>
              <a className="dropdown-item" href="/movieList">
                React MovieList
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
