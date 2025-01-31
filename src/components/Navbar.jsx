import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';
import { AiOutlineHome } from 'react-icons/ai';
import { BiInfoCircle } from 'react-icons/bi';
import { MdOutlinePhotoLibrary } from 'react-icons/md';
import { RiContactsLine, RiMenu3Line, RiCloseLine } from 'react-icons/ri';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleNavClick = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <nav className={`navbar ${isScrolled ? 'sticky' : ''}`}>
            <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                {isOpen ? <RiCloseLine className="hamburger-icon" /> : <RiMenu3Line className="hamburger-icon" />}
            </div>
            <div className={`nav-links ${isOpen ? 'active' : ''}`}>
                <button onClick={() => handleNavClick('home')}>
                    <AiOutlineHome className="nav-icon" />
                    <span>HOME</span>
                </button>
                <button onClick={() => handleNavClick('projects')}>
                    <MdOutlinePhotoLibrary className="nav-icon" />
                    <span>PROJECTS</span>
                </button>
                <button onClick={() => handleNavClick('info')}>
                    <BiInfoCircle className="nav-icon" />
                    <span>INFO</span>
                </button>
                <button onClick={() => handleNavClick('contact')}>
                    <RiContactsLine className="nav-icon" />
                    <span>CONTACT</span>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
