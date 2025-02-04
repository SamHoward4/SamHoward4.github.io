import React from 'react';
import '../styles/InfoSection.css';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import { IconContext } from 'react-icons';

const InfoSection = () => {
    return (
        <section id="info" className="info-container">
            <div className="info-content">

                <div className="info-description">
                    <h3>Hi! I'm Sam Howard,</h3>
                    <p>and welcome to my little corner of the internet. Here you an find some projects I've worked on and some ways to connect with me. Enjoy!</p>
                </div>

                <h3>Check out my...</h3>
                <br></br>
                <div className="info-grid">
                    <div className="info-item">
                        <IconContext.Provider value={{size: "3.5em"}}>
                            <div className="icon">
                                <FaLinkedin />
                            </div>
                        </IconContext.Provider>
                        <h1>:</h1>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sam-howard-70777321b">Linked In</a>
                    </div>
                    <div className="info-item">
                    <IconContext.Provider value={{size: "3.5em"}}>
                            <div>
                                <FaGithub />
                            </div>
                        </IconContext.Provider>
                        <h1>:</h1>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/SamHoward4">Github</a>

                    </div>
                    <div className="info-item">
                    <IconContext.Provider value={{size: "3.5em"}}>
                            <div>
                                <SiLeetcode/>
                            </div>
                        </IconContext.Provider>
                        <h1>:</h1>
                        <a target="_blank" rel="noopener noreferrer" href="https://leetcode.com/u/DoctorCow/"> Leetcode</a>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default InfoSection;