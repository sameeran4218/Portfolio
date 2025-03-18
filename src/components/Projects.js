import React from "react";
import project1 from "../assets/project1.png"; // Replace with actual image paths
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";
import project5 from "../assets/project5.jpg";
import project6 from "../assets/project6.png";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    name: "Customer Support GPT-2",
    image: project1,
    description: "This repository contains a fine-tuned GPT-2 model deployed in a Flask framework meant to automate customer support interactions. The model is capable of generating context-aware responses to common customer queries, enhancing customer engagement and reducing the workload on human support agents.",
    techStack: ["GPT-2", "HuggingFace", "Flask"],
    sourceCode: "https://github.com/sameeran4218/Customer-Support--Finetuning-GPT2"
  },
  {
    name: "Student Management System",
    image: project2,
    description: "A Python-based app with a Tkinter GUI and MySQL integration for managing student records. Features include secure login, CRUD operations, and CSV export.",
    techStack: ["Python", "MySQL","Tkinter"],
    sourceCode: "https://github.com/sameeran4218/Student-Management-System"
  },
  {
    name: "Semi Supervised Weed Detection",
    image: project4,
    description: " The project leverages a combination of data augmentation, high confidence pseudo-labeling, FixMatch algorithm and iterative model training to improve the model’s performance in detecting weeds in images.",
    techStack: ["YOLOv8", "Python", "OpenCV", "Tensorflow/Pytorch"],
    sourceCode: "https://github.com/sameeran4218/Semi-Supervised-Weed-Detection"
  },
  {
    name: "Excel Extension for Linear Regression",
    image: project3,
    description: " Easily perform regression analysis directly within Microsoft Excel with this VBA-powered tool. It automates the computation of slope, intercept, and R² score and generates an insightful graph to visualize results.",
    techStack: ["Excel", "Python", "VBA"],
    sourceCode: "https://github.com/sameeran4218/Excel-Extension"
  },
  {
    name: "Impact Hacks - Agrow",
    image: project5,
    description: " Agrow is an online application specifically created to help farmers in Northeast India by providing them with easy-to-use platforms to effectively control their agricultural crop, monitor stocks, and drive data-based insights for maximizing yield. The web application incorporates AI models to project weather patterns and decide on proper crop prices in order to aid farmers in driving informed decisions and increasing their crop productivity.",
    sourceCode: "https://github.com/Krish-2512/ImpactHacks"
  },
  {
    name: "DSA Notes",
    image: project6,
    description: " This repository is a collection of my personal notes, resources, and problem-solving approaches for DSA, which I update daily. It serves as a study resource for myself and anyone else interested in improving their understanding of DSA concepts.",
    sourceCode: "https://github.com/sameeran4218/DSA-Notes"
  },

];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      <hr className="title-underline" />
      
      <div className="projects-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.name} className="project-image"/>
            <div className="project-details">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn">
                  GitHub <FaGithub />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
