import React from 'react';

const Footer = () => (
    <div className="footer">
        <div className="footer__content">
            <div className="footer__icons">
                <a href="https://www.linkedin.com/in/alon-guterman-79633884/" target="/">
                    <img src="/images/footer/linkedin-logo.png" style={{width: "25px", height:"25px"}}/>
                </a> 
                <a href="https://www.facebook.com/alon.guterman?ref=bookmarks" style={{padding: "0px", paddingRight: "0.2px"}} target="/">
                    <img src="/images/footer/facebook-logo.svg" style={{width: "30.4px", height:"30.4px"}}/>
                </a>
                <a href="https://github.com/alongu" target="/">
                    <img src="/images/footer/github-logo.png" style={{height:"25px"}}/>
                </a>
            </div>
            <h4>Designed and developed by Alon Guterman &copy; 2018</h4>
        </div>
    </div>
);

export default Footer;