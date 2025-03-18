import React from "react";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import About from "./components/About";
import "./styles.css"; // Import the updated CSS file
import TechStack from "./components/TechStack";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
