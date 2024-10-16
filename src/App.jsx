import { useEffect, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Resume from './Components/Resume/Resume';
import Accomplishments from './Components/Accomplishment/Accomplishment';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Blog/Blogs';

const App = () => {
   // Check local storage for existing dark mode preference
   const [darkMode, setDarkMode] = useState(() => {
      const savedTheme = localStorage.getItem('darkMode');
      return savedTheme === 'true' || false;
   });

   // Update dark mode and persist the preference in local storage
   const toggleDarkMode = () => {
      const newDarkMode = !darkMode;
      setDarkMode(newDarkMode);
      document.body.classList.toggle('dark', newDarkMode);
      localStorage.setItem('darkMode', newDarkMode);
   };

   // Apply the saved theme on component mount
   useEffect(() => {
      if (darkMode) {
         document.body.classList.add('dark');
      } else {
         document.body.classList.remove('dark');
      }
   }, [darkMode]);

   return (
      <div className={ `app ${darkMode ? 'dark' : ''}` }>
         <Navbar toggleDarkMode={ toggleDarkMode } darkMode={ darkMode } />
         <Home darkMode={ darkMode } />
         <About />
         <Projects />
         <Skills />
         <Resume />
         <Accomplishments />
         <Services />
         <Contact />
         <Blog />
         <Footer />
      </div>
   );
};

export default App;
