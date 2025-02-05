import React from "react";
import "../styles/FooterSection.css";

const FooterSection = () => {
    return (
        <footer className="footer">
            <div className="footer-bottom">
                &copy; {new Date().getFullYear()} All rights reserved.
            </div>
        </footer>
    );
};

export default FooterSection;