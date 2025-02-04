import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-container">
            <div className="contact-content">
                <h2>Contact</h2>
                <div className="contact-info">
                    <div className="contact-details">
                        <p>You can email me directly or send me a message through this form:</p>
                        <br></br>
                        <p>email: sam.how44@gmail.com</p>
                    </div>
                    <form className="contact-form">
                        <input type="text" placeholder="This" />
                        <input type="email" placeholder="Doesn't" />
                        <input type="tel" placeholder="Work" />
                        <textarea placeholder="Yet..."></textarea>
                        <button type="submit">Send</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;