import PropTypes from 'prop-types';
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = ({ darkMode }) => {
   const projectData = [
      {
         title: "Herbal Medicine Landing Page",
         description: "A responsive landing page showcasing herbal products with smooth navigation, product details, and testimonials.",
         techStack: "React, CSS, HTML",
         github: '#',
         demo: '#',
      },
      {
         title: "Stopwatch Web Application",
         description: "A sleek stopwatch app with start, pause, reset, and lap tracking functionalities built with React.",
         techStack: "React, JavaScript, CSS",
         github: '#',
         demo: '#',
      },
      {
         title: 'Tic-Tac-Toe Game',
         description: 'A sleek, interactive Tic-Tac-Toe game built with ReactJS. Play against a human or AI opponent with dark mode support and responsive design.',
         techStack: "ReactJS, CSS, JavaScript",
         github: '#',
         demo: '#',
      },
      {
         title: 'E-Commerce Site',
         description: 'A fully responsive e-commerce website with product listing, cart functionality, and secure checkout process.',
         techStack: "ReactJS, Node.js, MongoDB, Express",
         github: '#',
         demo: '#',
      },
      {
         title: 'SurveyTracker Portal',
         description: 'A portal to manage and track survey responses with robust data visualization and management tools.',
         techStack: 'ReactJS, Node.js, Express',
         github: '#',
         demo: '#',
      },
      {
         title: 'ChatApp',
         description: 'A real-time chat application with user authentication, chat rooms, and dark mode support.',
         techStack: 'ReactJS, Socket.io, Node.js, Express',
         github: '#',
         demo: '#',
      },
   ];

   return (
      <section className={ `projects ${darkMode ? 'dark' : ''}` } id="projects">
         <h2 className="projects-title">Projects</h2>
         <div className="projects-grid">
            { projectData.map((project, index) => (
               <div className="project-card" key={ index }>
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

//Prop validation
Projects.propTypes = {
   darkMode: PropTypes.bool.isRequired,
};
export default Projects;
