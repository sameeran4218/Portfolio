import React from "react";
import profilePic from "../assets/photo.jpg"; // Update with correct path



const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <img src={profilePic} alt="Sameeran" className="profile-img" />
        <h1>Hey, I'm <span className="highlight">Sameeran</span></h1>
        <p>Software Developer | Machine Learning Engineer | Data Scientist</p>
        <a 
  href="https://drive.google.com/file/d/13CF3lrCITT_uL979yP4m7WIr3ZbQsiBw/view?usp=drive_link" 
  className="btn" 
  target="_blank" 
  rel="noopener noreferrer"
>
  My Resume
</a>

        <a href="#projects" className="btn">My Work</a>
      </div>
    </section>
  );
};

export default Hero;
