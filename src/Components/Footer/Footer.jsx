import './Footer.css';
import { FaLinkedin, FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
   return (
      <footer className="footer">
         <div className="footer-content">
            <div className="footer-left">
               <h3>Etornam</h3>
               <p>
                  &copy; { new Date().getFullYear() } iametor. All rights reserved.
               </p>
            </div>
            <div className="footer-right">
               <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                  <FaLinkedin />
               </a>
               <a href="https://github.com" target="_blank" rel="noreferrer">
                  <FaGithub />
               </a>
               <a href="https://twitter.com" target="_blank" rel="noreferrer">
                  <FaTwitter />
               </a>
               <a href="https://facebook.com" target="_blank" rel="noreferrer">
                  <FaFacebook />
               </a>
               <a href="https://instagram.com" target="_blank" rel="noreferrer">
                  <FaInstagram />
               </a>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
