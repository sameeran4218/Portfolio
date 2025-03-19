import React from "react";
import profilePic from "../assets/photo.jpg"; // Update with correct path

const downloadResume = () => {
  const link = document.createElement("a");
  link.href = `${process.env.PUBLIC_URL}/resume.pdf`; // Ensure correct path
  link.download = "Sameeran_Resume.pdf"; // Custom filename
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};


const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <img src={profilePic} alt="Sameeran" className="profile-img" />
        <h1>Hey, I'm <span className="highlight">Sameeran</span></h1>
        <p>Software Developer | Machine Learning Engineer | Data Scientist</p>
        <a 
  href="https://drive.google.com/file/d/1XfZ90UiXZbMq1PeOyOLsphS9OnIDsQOR/view?usp=drive_link" 
  className="btn" 
  target="_blank" 
  rel="noopener noreferrer"
>
  Download Resume
</a>

        <a href="#projects" className="btn">My Work</a>
      </div>
    </section>
  );
};

export default Hero;
