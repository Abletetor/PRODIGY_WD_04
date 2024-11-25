/* eslint-disable react/prop-types */
import './Skills.css';
import { FaReact, FaNodeJs, FaCss3Alt, FaHtml5, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb } from 'react-icons/si';

const Skills = ({ darkMode }) => {
   return (
      <section className={ `skills ${darkMode ? 'dark' : ''}` } id="skills">
         <h2 className="skills-title">Skills</h2>
         <div className="skills-grid">
            <div className="skill-card">
               <FaReact className="skill-icon" />
               <p>React</p>
            </div>
            <div className="skill-card">
               <FaNodeJs className="skill-icon" />
               <p>Node.js</p>
            </div>
            <div className="skill-card">
               <FaHtml5 className="skill-icon" />
               <p>HTML5</p>
            </div>
            <div className="skill-card">
               <FaCss3Alt className="skill-icon" />
               <p>CSS3</p>
            </div>
            <div className="skill-card">
               <FaJsSquare className="skill-icon" />
               <p>JavaScript</p>
            </div>
            <div className="skill-card">
               <FaGitAlt className="skill-icon" />
               <p>Git</p>
            </div>
            <div className="skill-card">
               <SiMongodb className="skill-icon" />
               <p>MongoDB</p>
            </div>
         </div>
      </section>
   );
};

export default Skills;

