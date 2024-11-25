/* eslint-disable react/prop-types */
import './Blogs.css';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

const blogs = [
   {
      title: 'How to Build Responsive Websites',
      description: 'Learn how to build responsive websites that look great on all devices...',
      link: '#'
   },
   {
      title: 'Mastering React for Web Development',
      description: 'A comprehensive guide to mastering React and building modern web apps...',
      link: '#'
   },
   {
      title: 'Tips for Efficient Web Design',
      description: 'Discover essential tips to make your web designs more user-friendly and effective...',
      link: '#'
   }
];

const Blog = ({ darkMode }) => {
   return (
      <section id="blog" className={ `blog-section ${darkMode ? 'dark' : ''}` }>
         <h2 className="section-title">Latest Blogs</h2>
         <div className="blog-grid">
            { blogs.map((blog, index) => (
               <div className="blog-card" key={ index }>
                  <h3>{ blog.title }</h3>
                  <p>{ blog.description }</p>
                  <a href={ blog.link } className="read-more">Read More</a>
                  <div className="blog-icons">
                     <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook />
                     </a>
                     <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                     </a>
                     <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                     </a>
                  </div>
               </div>
            )) }
         </div>
      </section>
   );
};

export default Blog;
