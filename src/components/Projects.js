import React from 'react';
// import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "A modern portfolio built with React and CSS.",
      link: "/projects/portfolio" // Update this to the actual project page URL
    },
    {
      title: "E-Commerce Store",
      description: "An online store with full shopping cart functionality.",
      link: "/projects/ecommerce" // Update this to the actual project page URL
    }
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
