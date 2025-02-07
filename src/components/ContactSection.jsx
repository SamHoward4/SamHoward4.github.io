import React, { useRef, useState } from "react";
import '../styles/ContactSection.css';
import emailjs from "@emailjs/browser";


const ContactSection = () => {
    const form = useRef();
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_jbis8kr",
            "template_stfmpnt",
            form.current,
            "tUqfMM-cWw8wMrKlL"
        )
        .then(() => {
            setStatus("Message sent successfully!");

            form.current.reset();
          })
          .catch((error) => {
            setStatus("Failed to send message.");
            console.error("Error:", error);
          });

    }
    return (
        <section id="contact" className="contact-container">
            <div className="contact-content">
                <h2>Contact</h2>
                <div className="contact-info">
                    <div className="contact-details">
                        <p>Feel free to send me a message through this form.</p>
                    </div>
                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input name="from_name" type="text" placeholder="Your Name" required/>
                        <input name="reply_email" type="email" placeholder="Your Email" required />
                        <input name="subject" type="text" placeholder="Subject" required />
                        <textarea name="message" placeholder="Message..." required></textarea>
                        <button type="submit">Send</button>
                    </form>
                    {status && <p>{status}</p>}
                </div>
            </div>
        </section>
    );
};

export default ContactSection;