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
                        <input type="text" placeholder="Lorem" />
                        <input type="email" placeholder="Ipsum" />
                        <input type="tel" placeholder="Dolor" />
                        <textarea placeholder="Sit amet..."></textarea>
                        <button type="submit">Lorem Ipsum</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;