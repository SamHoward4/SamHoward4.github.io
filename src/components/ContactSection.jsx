import React from 'react';
import '../styles/ContactSection.css';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-container">
            <div className="contact-content">
                <h2>Lorem Ipsum</h2>
                <div className="contact-info">
                    <div className="contact-details">
                        <h3>Lorem Ipsum</h3>
                        <p>Lorem: ipsum@dolor.sit</p>
                        <p>Amet: (123) 456-7890</p>
                        <p>Consectetur: Lorem ipsum dolor sit</p>
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