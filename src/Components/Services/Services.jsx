import './Services.css';
import { FaLaptopCode, FaMobileAlt, FaHandshake, FaPalette } from 'react-icons/fa';

const Services = () => {
   return (
      <section id="services" className="services-section">
         <h2 className="section-title">Services</h2>
         <div className="service-cards">
            <div className="service-card">
               <FaLaptopCode className="service-icon" />
               <h3>Web Development</h3>
               <p>Building modern, responsive, and scalable websites to boost your online presence.</p>
            </div>
            <div className="service-card">
               <FaMobileAlt className="service-icon" />
               <h3>Mobile App Development</h3>
               <p>Creating sleek, user-friendly mobile applications that run smoothly across all platforms.</p>
            </div>
            <div className="service-card">
               <FaHandshake className="service-icon" />
               <h3>Consultation</h3>
               <p>Providing expert advice and guidance to help bring your digital ideas to life.</p>
            </div>
            <div className="service-card">
               <FaPalette className="service-icon" />
               <h3>Graphic Designing</h3>
               <p>Crafting eye-catching designs that visually represent your brand’s message and identity.</p>
            </div>
         </div>
      </section>
   );
};

export default Services;
