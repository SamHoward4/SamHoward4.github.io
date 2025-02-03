import React from 'react';
import '../styles/LandingSection.css';

import mountains from '/mountains.jpg';

const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
};

const LandingSection = () => {
    return (
        <section id="home" className="landing-container">
            <div className="landing-container">
                <div className="landing-overlay">
                    <div className="landing-content">
                        <h1>Welcome</h1>
                        <div className="landing-address">
                            <h2>Sam Howard's Projects and Contact Info</h2>
                        </div>
                        </div>
                    <div className="landing-images">
                        <img
                            src={mountains}
                            alt="Mountains"
                            className="landing-image"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingSection;