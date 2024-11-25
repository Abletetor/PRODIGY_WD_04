import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Contact.css';

const Contact = () => {
   const [formData, setFormData] = useState({ name: '', email: '', message: '' });

   // Handling form elements change
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
   };

   // Handling form submission
   const handleSubmit = async (e) => {
      e.preventDefault();

      const formData = new FormData(e.target);
      formData.append('access_key', import.meta.env.VITE_FORM_ID);

      try {
         const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
         });

         const data = await response.json();

         if (data.success) {
            toast.success('Mail sent successfully!');
            e.target.reset();
            setFormData({ name: '', email: '', message: '' });
         } else {
            toast.error(data.message || 'Failed to send the message.');
         }
      } catch (error) {
         console.error('Error:', error);
         toast.error('An error occurred. Please try again.');
      }
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
         <ToastContainer position="top-right" autoClose={ 3000 } style={ { zIndex: 100001 } } />
      </section>
   );
};

export default Contact;
