import React from "react";
// import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      
        <div className="social-links">
          <a href="https://github.com/Mburuezekiel">
            <i className="bi bi-github"></i> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ezekiel-mburu-5aaa00262"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-linkedin"></i> linkedin
          </a>
          {/* <a
            href="https://www.instagram.com/mn_erickoh?igsh=OXAzZDZxMTdmcGJ2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>Instagram
          </a> */}
          <a
            href="https://wa.me/message/WYNADJ57N66UG1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-whatsapp"></i> Whatsapp
          </a>
        </div>
      
      <p>&copy; 2024 Ezekiel Njuguna Mburu. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
