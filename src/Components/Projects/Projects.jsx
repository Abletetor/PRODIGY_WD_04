/* eslint-disable react/prop-types */
import './Projects.css';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import herbalImg from '../../assets/hebal.png';
import stopwatchImg from '../../assets/stopwatch.png';
import tictactoeImg from '../../assets/tic-tac-toe.png';
import cryptozImg from '../../assets/cryptoz.png';
import surveytrackerImg from '../../assets/surveytracker.png';
import weatherAppImg from '../../assets/weatherApp.png';

const Projects = ({ darkMode }) => {
   const projectData = [
      {
         title: "HerbalMedics",
         description: "A responsive landing page showcasing herbal products with smooth navigation, product details, and testimonials.",
         techStack: "React, CSS, HTML",
         github: 'https://github.com/Abletetor/HerbalMedic',
         demo: 'https://herbalmedics.netlify.app/',
         image: herbalImg,
      },
      {
         title: "Stopwatch",
         description: "A sleek stopwatch app with start, pause, reset, and lap tracking functionalities built with React.",
         techStack: "React, JavaScript, CSS",
         github: 'https://github.com/Abletetor/PRODIGY_WD_02',
         demo: 'https://prodigy-wd-02-stopwatch-sable.vercel.app/',
         image: stopwatchImg,
      },
      {
         title: 'Tic-Tac-Toe',
         description: 'A sleek, interactive Tic-Tac-Toe game built with ReactJS. Play against a human or AI opponent with dark mode support and responsive design.',
         techStack: "ReactJS, CSS, JavaScript",
         github: 'https://github.com/Abletetor/PRODIGY_WD_03',
         demo: 'https://prodigy-wd-03-tic-tac-toe-rose.vercel.app/',
         image: tictactoeImg,
      },
      {
         title: 'CryptoZ',
         description: 'CryptoZ is an intuitive platform for tracking real-time cryptocurrency prices, market trends, and news. It offers insights into the crypto market with a sleek interface and user-friendly tools to make informed decisions.',
         techStack: "HTML, CSS, JavaScript",
         github: 'https://github.com/Abletetor/cryptoZ-project',
         demo: 'https://cryptoz-project.netlify.app/',
         image: cryptozImg,
      },
      {
         title: 'SurveyTracker Portal',
         description: 'A portal to manage and track survey responses with robust data visualization and management tools.',
         techStack: 'EJS, Node.js, Express, CSS',
         github: 'https://github.com/Abletetor/survey-tracker-portal',
         demo: 'https://survey-tracker-portal.vercel.app/auth/login',
         image: surveytrackerImg,
      },
      {
         title: 'WeatherApp',
         description: 'A responsive Weather App that fetches real-time weather data using the OpenWeather API, featuring dark mode, real-time updates for humidity, wind speed, and more. The app has a sleek, modern UI optimized for all devices.',
         techStack: 'ReactJS, CSS, Node.js, Express',
         github: 'https://github.com/Abletetor/PRODIGY_WD_05',
         demo: 'https://prodigy-wd-05-coral.vercel.app/',
         image: weatherAppImg,
      },
   ];

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
