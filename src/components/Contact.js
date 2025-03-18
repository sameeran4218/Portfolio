import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Contact Me</h2>
        <p>Let's connect! Reach out via email or LinkedIn.</p>
        <br></br>
        <div className="contact-links">
        <a href="mailto:n.sameeran@iitg.ac.in" className="btn">Email</a>
        <a href="https://linkedin.com/in/sameeran4218/" target="_blank" rel="noopener noreferrer" className="btn">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
