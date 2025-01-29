/* eslint-disable react/prop-types */
import { skillData } from './skillData';
import './Skills.css';

const Skills = ({ darkMode }) => {
   return (
      <section className={ `skills ${darkMode ? 'dark' : ''}` } id="skills">
         <h2 className="skills-title">Skills</h2>
         <div className="skills-grid">
            { skillData.map((skill, index) => (
               <div key={ index } className="skill-card">
                  <skill.icon className="skill-icon" />
                  <p>{ skill.title }</p>
               </div>
            )) }
         </div>
      </section>
   );
};

export default Skills;

