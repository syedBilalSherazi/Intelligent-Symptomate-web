import React, { useState } from 'react';
import './ContactUs.css'; // Ensure the CSS file is linked

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here
        console.log("Form Submitted:", formData);
    };

    return (
        <div className="contact-us-container">
            <header className="contact-us-header">
                <h1>Contact Us</h1>
                <p>We'd love to hear from you! Reach out to us through the form below.</p>
            </header>

            <section className="contact-info">
                <div className="contact-details">
                    <p>📞 Phone: <a href="tel:+03002244653">03002244653</a></p>
                    <p>✉️ Email: <a href="mailto:syedbilalsherazi1004@gmail.com">syedbilalsherazi1004@gmail.com</a></p>
                </div>
            </section>

            <section className="contact-form-section">
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="input-group">
                        <label htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Enter your name"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Your Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="Enter your email"
                        />
                    </div>
                    <div className="input-group">
                        <label htmlFor="message">Your Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            placeholder="Enter your message"
                        />
                    </div>
                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </section>
        </div>
    );
};

export default ContactUs;
