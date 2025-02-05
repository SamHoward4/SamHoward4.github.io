import React from 'react';
import Navbar from './components/Navbar';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection';
import InfoSection from './components/InfoSection';
import ContactSection from './components/ContactSection';
import FooterSection from './components/FooterSection';

function App () {
    return (
        <div className="App">
            <Navbar/>
            <LandingSection/>
            <ProjectSection/>
            <InfoSection/>
            <ContactSection/>
            <FooterSection/>
        </div>
    );
}

export default App;