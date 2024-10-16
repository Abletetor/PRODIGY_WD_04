import './Resume.css';
import { FaDownload } from 'react-icons/fa';

const Resume = () => {
   return (
      <section id="resume" className="resume-section">
         <h2 className="resume-title">Resume</h2>
         <p className="resume-description">
            Download my resume to get a detailed overview of my skills, experience, and accomplishments.
         </p>
         <a href="../../assets/Etornam-Resume.pdf" download className="resume-download-btn">
            <FaDownload className="download-icon" />
            Download Resume
         </a>
      </section>
   );
};

export default Resume;
