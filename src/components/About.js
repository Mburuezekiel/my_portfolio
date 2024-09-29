
import React from 'react';
// import './About.css';
import ME from "../assets/my passport.jpg"

function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <hr/>

      <div className="about-content">
        <div className="about-image">
        <img src={ME} alt="Ezekiel Njuguna" />
        </div>
        
        <div className="about-text">
          <p>
            As a full-stack software developer with a diverse skill set, I have a strong foundation in front-end technologies such as HTML, CSS, and Vue. I am also proficient in backend technologies like Python, Node.js, Flask, and Django, and have experience working with databases like MongoDB. I am a highly motivated and adaptable developer, with a passion for creating intuitive and user-friendly web applications. I am always looking for new challenges and opportunities to grow and improve as a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
