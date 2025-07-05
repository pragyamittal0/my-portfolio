import React, { useState, useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1smmj2x",     
        "template_klt3he5",    
        form.current,
        "3Gt8ggNqq8oou-9_n"      
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setSubmitted(true);
        },
        (error) => {
          console.error("Failed to send email.", error.text);
        }
      );
  };

  return (
    <div className="contact-background">
      <div className="contact-form-container">
        <h2>Contact Me</h2>
        {submitted ? (
          <p className="success-message">Thank you! Your message has been received.</p>
        ) : (
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
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
