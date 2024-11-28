import './About.css';
import aboutImage from '../../assets/prof.jpg';

const About = () => {
   return (
      <section className="about" id="about">
         <div className="about-container">
            <div className="about-content">
               <h2>About Me</h2>
               <p>
                  I’m a passionate Full Stack Web Developer with a background in Computer Science. I specialize in building modern web applications using React, JavaScript, and other technologies.
                  My experience includes working on both frontend and backend, ensuring responsive design and clean code.
               </p>
               <p>
                  Graduated with a Higher National Diploma in Computer Science and earned a Full Stack Web Development certification from The Programmers&apos; University. Gain practical experience in HTML, CSS, JavaScript, ReactJS, Node.js, and MongoDB during an internship at Prodigy InfoTech and Tascul.
               </p>
            </div>
            <div className="about-image">
               <img
                  src={ aboutImage }
                  alt="etornam-img"
               />
            </div>
         </div>
      </section>
   );
};

export default About;
