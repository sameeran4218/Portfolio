import React from "react";
import { FaPython, FaGitAlt, FaDatabase, FaSearch } from "react-icons/fa";
import { SiCplusplus, SiFlask, SiTensorflow, SiNumpy, SiPandas, SiSelenium, SiMongodb, SiChainlink } from "react-icons/si";

const TechStack = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <h2 className="section-title">Technical Skills</h2>
      <hr className="title-underline" />
      
      <div className="skills-container">
        <div className="skill-category">
          <h3>💻 Programming</h3>
          <div className="skills">
            <span className="skill"><FaPython /> Python</span>
            <span className="skill"><SiCplusplus /> C/C++</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🌐 Development Tools</h3>
          <div className="skills">
            <span className="skill"><SiFlask /> Flask</span>
            <span className="skill">Tkinter</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>📊 Data Processing & Databases</h3>
          <div className="skills">
            <span className="skill"><SiNumpy /> NumPy</span>
            <span className="skill"><SiPandas /> Pandas</span>
            <span className="skill">Matplotlib</span>
            <span className="skill"><FaDatabase /> SQL</span>
            <span className="skill"><SiMongodb /> MongoDB</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>🧠 AI & Tools</h3>
          <div className="skills">
            <span className="skill"><SiTensorflow /> TensorFlow</span>
            <span className="skill"><SiChainlink /> LangChain</span>
            <span className="skill">Scikit-learn</span>
            <span className="skill"><FaGitAlt /> Git</span>
            <span className="skill"><SiSelenium /> Selenium</span>
            <span className="skill"><FaSearch /> Beautiful Soup</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
