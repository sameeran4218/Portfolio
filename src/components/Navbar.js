import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <h1 className="logo">SamScape</h1>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#tech-stack">Tech Stack</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
