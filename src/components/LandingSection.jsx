import React from 'react';
import '../styles/LandingSection.css';

import mountains from '/mountains.jpg';
// import homeBg from '/home-bg.jpg';
// import livingBg from '/living-bg.jpg';

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
                            <h2>Here you can find my projects and some other info</h2>
                        </div>
                            <button onClick={() => handleNavClick('contact')}>
                                <span>Contact Me</span>
                             </button>
                        </div>
                    <div className="landing-images">
                        <img
                            src={mountains}
                            alt="Mountains"
                            className="landing-image"
                        />
                        {/* <img
                            src={homeBg}
                            alt="Elegant interior design"
                            className="hero-image"
                        />
                        <img
                            src={livingBg}
                            alt="Serene outdoor living space"
                            className="hero-image"
                        /> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default LandingSection;