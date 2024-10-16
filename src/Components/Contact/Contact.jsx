import { useState } from 'react';
import './Contact.css';

const Contact = () => {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
         ...prevData,
         [name]: value
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({
         name: '',
         email: '',
         message: ''
      });
      // Handle form submission logic, like sending email
   };

   return (
      <section id="contact" className="contact-section">
         <div className="contact-details">
            <h3>Contact Information</h3>
            <p><strong>Address:</strong> Koforidua, Ghana, WA</p>
            <p><strong>Phone:</strong> (+233) 540-884-481</p>
            <p><strong>Location:</strong> Worldwide</p>
            <p>I am available to take on new projects and collaborate on innovative web solutions. Feel free to reach out anytime!</p>
         </div>
         <form className="contact-form" onSubmit={ handleSubmit }>
            <h2 className="section-title">Get in Touch</h2>
            <div className="form-group">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={ formData.name }
                  onChange={ handleChange }
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={ formData.email }
                  onChange={ handleChange }
                  required
               />
            </div>
            <div className="form-group">
               <label htmlFor="message">Message</label>
               <textarea
                  id="message"
                  name="message"
                  value={ formData.message }
                  onChange={ handleChange }
                  rows="5"
                  required
               />
            </div>
            <button type="submit" className="submit-btn">Send Message</button>
         </form>
      </section>
   );
};

export default Contact;
