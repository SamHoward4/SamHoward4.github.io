import React from 'react';
import '../styles/InfoSection.css';

const InfoSection = () => {
    return (
        <section id="info" className="info-container">
            <div className="info-content">
                <h2>Lorem Ipsum</h2>
                <div className="info-grid">
                    <div className="info-item">
                        <h3>Lorem</h3>
                        <p>123</p>
                    </div>
                    <div className="info-item">
                        <h3>Ipsum</h3>
                        <p>456</p>
                    </div>
                    <div className="info-item">
                        <h3>Dolor</h3>
                        <p>789</p>
                    </div>
                    <div className="info-item">
                        <h3>Sit</h3>
                        <p>012</p>
                    </div>
                </div>
                <div className="property-description">
                    <h3>Lorem Ipsum Dolor</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;