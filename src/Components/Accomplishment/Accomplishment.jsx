import './Accomplishment.css';
import { FaTrophy, FaBriefcase, FaMedal } from 'react-icons/fa';

const Accomplishments = () => {
   return (
      <section id="accomplishments" className="accomplishments-section">
         <h2 className="section-title">Accomplishment</h2>
         <div className="accomplishments-grid">
            <div className="accomplishment-card">
               <FaTrophy className="icon" />
               <h3>Top Performer Award</h3>
               <p>
                  Recognized as the top performer at The Programmers&apos; University for consistently delivering high-quality projects.
               </p>
            </div>
            <div className="accomplishment-card">
               <FaBriefcase className="icon" />
               <h3>Web Development Program</h3>
               <p>
                  Completed a successful Full Stack Development at The Programmers&#39; University, contributing to real-world projects such as e-commerce sites and web applications.
               </p>
            </div>
            <div className="accomplishment-card">
               <FaMedal className="icon" />
               <h3>Certifications</h3>
               <p>
                  Earned certifications in ReactJS, Full Stack Development, and Web Design, improving my expertise in front-end and back-end development.
               </p>
            </div>
         </div>
      </section>
   );
};

export default Accomplishments;
