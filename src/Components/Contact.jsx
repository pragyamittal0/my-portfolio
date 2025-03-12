import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted: ", formData);
    setSubmitted(true);
    // Here you can integrate an email service or backend API to process the message
  };

  return (
    <div className="contact-background">
    <div className="contact-form-container">
      <h2>Contact Me</h2>
      {submitted ? (
        <p className="success-message">Thank you! Your message has been received.</p>
      ) : (
        <form onSubmit={handleSubmit} className="contact-form">
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
          
          <button type="submit">Send Message</button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ContactForm;
