// NavBar.tsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'second', 'third'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is in viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleScroll);
    };
  }, []);

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
        </li>
        <li className="navbar-item">
          <a href="#second" className={activeSection === 'second' ? 'active' : ''}>Tools</a>
        </li>
        <li className="navbar-item">
          <a href="#third" className={activeSection === 'third' ? 'active' : ''}>Projects</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;