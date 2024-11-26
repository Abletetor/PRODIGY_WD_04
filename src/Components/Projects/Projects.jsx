/* eslint-disable react/prop-types */
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import projectData from '../Project-List/ProjectData';

const Projects = ({ darkMode }) => {

   return (
      <section className={ `projects ${darkMode ? 'dark' : ''}` } id="projects">
         <h2 className="projects-title">Projects</h2>
         <div className="projects-grid">
            { projectData.map((project, index) => (
               <div className="project-card" key={ index }>
                  <img src={ project.image } alt={ project.title } className="project-image" />
                  <h3>{ project.title }</h3>
                  <p>{ project.description }</p>
                  <p><strong>Tech Stack:</strong> { project.techStack }</p>
                  <div className="project-links">
                     <a href={ project.github } target="_blank" rel="noopener noreferrer">
                        <FaGithub /> GitHub
                     </a>
                     <a href={ project.demo } target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt /> Live Demo
                     </a>
                  </div>
               </div>
            )) }
         </div>
      </section>
   );
};


export default Projects;
