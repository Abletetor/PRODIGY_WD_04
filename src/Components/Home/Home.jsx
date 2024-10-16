import './Home.css';
import prof from '../../assets/prof.jpg';
import PropTypes from 'prop-types';

const Home = ({ darkMode }) => {

   return (
      <section className={ `home ${darkMode ? 'dark' : ''}` } id='home'>
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
      </section>
   );
};

Home.propTypes = {
   darkMode: PropTypes.bool.isRequired,
};

export default Home;
