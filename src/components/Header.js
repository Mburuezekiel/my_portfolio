import React, { useState } from 'react';
import logo from '../assets/favicon.ico'
function Header() {
  const [isOpen, setIsOpen] = useState(false); // Sidebar starts closed

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Ezekiel Njuguna" className="logo-image" />
          <h1 className="logo-title">Portfolio</h1>
        </div>
        <div className={`burger ${isOpen ? 'open' : ''}`} onClick={toggleSidebar}>
          <i className="bi bi-list"></i>
        </div>
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <a href="#about">
                <i className="bi bi-person-fill"></i> About
              </a>
            </li>
            <li>
              <a href="#skills">
                <i className="bi bi-tools"></i> Skills
              </a>
            </li>
            <li>
              <a href="#projects">
                <i className="bi bi-briefcase-fill"></i> Projects
              </a>
            </li>
            <li>
              <a href="#contact">
                <i className="bi bi-envelope-fill"></i> Contact
              </a>
            </li>
          </ul>
        </nav>
        {isOpen && (
          <div className={`overlay ${isOpen ? 'visible' : ''}`} onClick={toggleSidebar}></div>
        )}
      </header>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <hr/>

        <ul>
          <li onClick={toggleSidebar}><a href="#about"> <i className="bi bi-person-fill"></i> About</a></li>
          <li onClick={toggleSidebar}><a href="#skills">  <i className="bi bi-tools"></i> Skills</a></li>
          <li onClick={toggleSidebar}><a href="#projects"> <i className="bi bi-briefcase-fill"></i> Projects</a></li>
          <li onClick={toggleSidebar}><a href="#contact"><i className="bi bi-envelope-fill"></i> Contact</a></li>
        </ul>
      </div>
    </>
  );
}

export default Header;
