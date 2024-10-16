import { useState } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import './Navbar.css';
import { FaBars, FaTimes, FaLinkedin, FaGithub, FaSun, FaMoon } from 'react-icons/fa';

const Navbar = ({ toggleDarkMode, darkMode }) => {
   const [isMobile, setIsMobile] = useState(false);

   const handleMobileMenu = () => {
      setIsMobile(!isMobile);
   };

   return (
      <nav className={ `navbar ${darkMode ? 'dark' : ''}` }>
         <div className="navbar-container">
            <h1 className="logo">iametor</h1>
            <ul className={ isMobile ? 'nav-links-mobile' : 'nav-links' } onClick={ () => setIsMobile(false) }>
               <li><a href="#home">Home</a></li>
               <li><a href="#about">About</a></li>
               <li><a href="#projects">Projects</a></li>
               <li><a href="#skills">Skills</a></li>
               <li><a href="#services">Services</a></li>
               <li><a href="#contact">Contact</a></li>
               <li><a href="#blog">Blog</a></li>
            </ul>
            <div className="navbar-icons">
               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
               <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
               <button className="toggle-mode" onClick={ toggleDarkMode }>
                  { darkMode ? <FaSun /> : <FaMoon /> }
               </button>
            </div>
            <div className="hamburger" onClick={ handleMobileMenu }>
               { isMobile ? <FaTimes /> : <FaBars /> }
            </div>
         </div>
      </nav>
   );
};

// Add prop types for validation
Navbar.propTypes = {
   toggleDarkMode: PropTypes.func.isRequired,
   darkMode: PropTypes.bool.isRequired,
};

export default Navbar;
