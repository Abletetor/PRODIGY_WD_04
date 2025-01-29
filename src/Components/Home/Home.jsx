import './Home.css';
import prof from '../../assets/prof.jpg';
import PropTypes from 'prop-types';
import { motion } from "framer-motion";

const Home = ({ darkMode }) => {
   // Animations setup
   const fadeInUp = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0, transition: { duration: 1 } },
   };

   return (
      <section className={ `home ${darkMode ? 'dark' : ''}` } id='home'>
         <motion.div
            initial={ { opacity: 0 } }
            animate={ { opacity: 1 } }
            transition={ { delay: 1, duration: 1.5 } }
            variants={ fadeInUp }
         >
            <div className="home-content">
               <img
                  src={ prof }
                  alt="Etornam"
                  className="profile-image"
               />
               <div className="intro-text">
                  <h1>Hello, I&apos;m <span>Etornam Abletor</span></h1>
                  <p>
                     A passionate Web Developer skilled in crafting efficient and modern web applications. Welcome to my portfolio, where you can explore my skills, projects, and accomplishments.
                  </p>
               </div>
            </div>
         </motion.div>
      </section>
   );
};

Home.propTypes = {
   darkMode: PropTypes.bool.isRequired,
};

export default Home;
